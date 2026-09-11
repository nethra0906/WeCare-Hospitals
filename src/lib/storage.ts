/**
 * Thin, typed wrapper around `localStorage`.
 *
 * WeCare Hospitals ships as a front-end-only demo: there is no server, so
 * every "database" in this app is the visitor's own browser storage. Every
 * read/write here is defensive (private browsing, quota limits, or corrupt
 * JSON should never crash the app) and namespaced under `wecare:` so this
 * app never collides with anything else on the same origin.
 */

const NAMESPACE = "wecare";

function key(name: string): string {
  return `${NAMESPACE}:${name}`;
}

export function readList<T>(name: string): T[] {
  try {
    const raw = localStorage.getItem(key(name));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

export function writeList<T>(name: string, items: T[]): boolean {
  try {
    localStorage.setItem(key(name), JSON.stringify(items));
    return true;
  } catch {
    // Storage can be full or unavailable (private browsing in some
    // browsers). Callers surface this as a user-facing error instead of
    // silently losing data.
    return false;
  }
}

export function readValue<T>(name: string): T | null {
  try {
    const raw = localStorage.getItem(key(name));
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

export function writeValue<T>(name: string, value: T): boolean {
  try {
    localStorage.setItem(key(name), JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeValue(name: string): void {
  try {
    localStorage.removeItem(key(name));
  } catch {
    /* ignore */
  }
}

export function createId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
