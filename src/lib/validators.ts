export function isValidEmail(value: string): boolean {
  // Intentionally simple: good enough to catch typos without rejecting the
  // long tail of valid-but-unusual real addresses.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export interface PasswordCheck {
  valid: boolean;
  message?: string;
}

export function checkPasswordStrength(value: string): PasswordCheck {
  if (value.length < 8) {
    return { valid: false, message: "Password must be at least 8 characters." };
  }
  if (!/[a-zA-Z]/.test(value) || !/[0-9]/.test(value)) {
    return {
      valid: false,
      message: "Password must contain both letters and numbers.",
    };
  }
  return { valid: true };
}

export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

/** Today's date as a `YYYY-MM-DD` string, for constraining date inputs. */
export function todayIsoDate(): string {
  return new Date().toISOString().slice(0, 10);
}
