/**
 * Demo authentication for a front-end-only app.
 *
 * There is no server here, so "accounts" are rows in the visitor's own
 * `localStorage`. Passwords are salted and hashed with SHA-256 (Web Crypto)
 * rather than stored as plain text, but make no mistake: this is NOT
 * production-grade auth — anyone with access to the same browser profile
 * can still read the stored records, and there is no rate limiting, email
 * verification, or server-side session. Wiring this up to a real backend
 * (see the README) means replacing this module only — every component
 * consumes it through {@link AuthContext}, never directly.
 */
import type { StoredUser, User } from "../types";
import {
  createId,
  readList,
  readValue,
  removeValue,
  writeList,
  writeValue,
} from "./storage";

const USERS_KEY = "users";
const SESSION_KEY = "session";

interface AuthResult {
  user?: User;
  error?: string;
}

async function hashPassword(password: string, salt: string): Promise<string> {
  const bytes = new TextEncoder().encode(`${salt}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function randomSalt(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function toPublicUser(stored: StoredUser): User {
  return { id: stored.id, name: stored.name, email: stored.email };
}

function getAllUsers(): StoredUser[] {
  return readList<StoredUser>(USERS_KEY);
}

export async function registerUser(
  name: string,
  email: string,
  password: string,
): Promise<AuthResult> {
  const users = getAllUsers();
  const normalizedEmail = email.trim().toLowerCase();

  if (users.some((existing) => existing.email === normalizedEmail)) {
    return {
      error: "An account with this email already exists. Try logging in instead.",
    };
  }

  const passwordSalt = randomSalt();
  const passwordHash = await hashPassword(password, passwordSalt);
  const record: StoredUser = {
    id: createId(),
    name: name.trim(),
    email: normalizedEmail,
    passwordHash,
    passwordSalt,
    createdAt: new Date().toISOString(),
  };

  if (!writeList(USERS_KEY, [...users, record])) {
    return {
      error:
        "Your browser blocked local storage, so the account could not be saved. Disable private browsing or free up storage and try again.",
    };
  }

  return { user: toPublicUser(record) };
}

export async function verifyCredentials(
  email: string,
  password: string,
): Promise<AuthResult> {
  const normalizedEmail = email.trim().toLowerCase();
  const record = getAllUsers().find((existing) => existing.email === normalizedEmail);

  if (!record) {
    return { error: "No account found for that email. Check the spelling or register." };
  }

  const candidateHash = await hashPassword(password, record.passwordSalt);
  if (candidateHash !== record.passwordHash) {
    return { error: "Incorrect password." };
  }

  return { user: toPublicUser(record) };
}

export function getSessionUser(): User | null {
  return readValue<User>(SESSION_KEY);
}

export function setSessionUser(user: User): void {
  writeValue(SESSION_KEY, user);
}

export function clearSessionUser(): void {
  removeValue(SESSION_KEY);
}
