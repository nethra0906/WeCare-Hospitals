import { describe, expect, it } from "vitest";
import { registerUser, verifyCredentials } from "./auth";

describe("auth", () => {
  it("registers a new user and returns a public profile without the password", async () => {
    const result = await registerUser("Ada Lovelace", "ada@example.com", "letters123");
    expect(result.error).toBeUndefined();
    expect(result.user).toMatchObject({ name: "Ada Lovelace", email: "ada@example.com" });
    expect(result.user).not.toHaveProperty("passwordHash");
  });

  it("rejects a duplicate email", async () => {
    await registerUser("Ada Lovelace", "ada@example.com", "letters123");
    const second = await registerUser("Someone Else", "ada@example.com", "letters123");
    expect(second.error).toMatch(/already exists/i);
  });

  it("normalizes email case when checking for duplicates", async () => {
    await registerUser("Ada Lovelace", "ada@example.com", "letters123");
    const second = await registerUser("Someone Else", "ADA@EXAMPLE.COM", "letters123");
    expect(second.error).toMatch(/already exists/i);
  });

  it("verifies correct credentials", async () => {
    await registerUser("Ada Lovelace", "ada@example.com", "letters123");
    const result = await verifyCredentials("ada@example.com", "letters123");
    expect(result.error).toBeUndefined();
    expect(result.user?.email).toBe("ada@example.com");
  });

  it("rejects an incorrect password", async () => {
    await registerUser("Ada Lovelace", "ada@example.com", "letters123");
    const result = await verifyCredentials("ada@example.com", "wrong-password");
    expect(result.error).toMatch(/incorrect password/i);
  });

  it("rejects an unknown email", async () => {
    const result = await verifyCredentials("nobody@example.com", "letters123");
    expect(result.error).toMatch(/no account/i);
  });
});
