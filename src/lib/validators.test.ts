import { describe, expect, it } from "vitest";
import {
  checkPasswordStrength,
  isNotEmpty,
  isValidEmail,
  isValidPhone,
} from "./validators";

describe("isValidEmail", () => {
  it("accepts a normal email", () => {
    expect(isValidEmail("patient@example.com")).toBe(true);
  });

  it("rejects missing @ or domain", () => {
    expect(isValidEmail("patient")).toBe(false);
    expect(isValidEmail("patient@")).toBe(false);
    expect(isValidEmail("patient@example")).toBe(false);
  });

  it("trims surrounding whitespace before validating", () => {
    expect(isValidEmail("  patient@example.com  ")).toBe(true);
  });
});

describe("isValidPhone", () => {
  it("accepts phone numbers with punctuation", () => {
    expect(isValidPhone("+91 98765 43210")).toBe(true);
    expect(isValidPhone("(555) 123-4567")).toBe(true);
  });

  it("rejects too-short or too-long digit sequences", () => {
    expect(isValidPhone("12345")).toBe(false);
    expect(isValidPhone("1".repeat(16))).toBe(false);
  });
});

describe("checkPasswordStrength", () => {
  it("rejects short passwords", () => {
    expect(checkPasswordStrength("abc123").valid).toBe(false);
  });

  it("rejects passwords without a number", () => {
    expect(checkPasswordStrength("abcdefgh").valid).toBe(false);
  });

  it("accepts a password with letters and numbers, length >= 8", () => {
    expect(checkPasswordStrength("abcd1234").valid).toBe(true);
  });
});

describe("isNotEmpty", () => {
  it("treats whitespace-only strings as empty", () => {
    expect(isNotEmpty("   ")).toBe(false);
    expect(isNotEmpty("hi")).toBe(true);
  });
});
