import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PageMeta } from "../components/layout/PageMeta";
import { AuthShell } from "../components/layout/AuthShell";
import { TextField } from "../components/ui/TextField";
import { Button } from "../components/ui/Button";
import { useAuth } from "../hooks/useAuth";
import { checkPasswordStrength, isNotEmpty, isValidEmail } from "../lib/validators";

interface FieldErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFormError(null);

    const errors: FieldErrors = {};
    if (!isNotEmpty(name)) errors.name = "Name is required.";
    if (!isValidEmail(email)) errors.email = "Enter a valid email address.";

    const strength = checkPasswordStrength(password);
    if (!strength.valid) errors.password = strength.message;

    if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match.";
    }

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);
    const { error } = await register(name, email, password);
    setSubmitting(false);

    if (error) {
      setFormError(error);
      return;
    }

    navigate("/dashboard", { replace: true });
  }

  return (
    <>
      <PageMeta
        title="Register"
        description="Create a WeCare Hospitals patient account."
      />
      <AuthShell
        eyebrow="Patient portal"
        title="Create your account."
        quote="“Booking a specialist should take less time than finding parking.”"
      >
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <TextField
            label="Full name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={fieldErrors.name}
          />
          <TextField
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={fieldErrors.email}
          />
          <TextField
            label="Password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={fieldErrors.password}
            hint="At least 8 characters, with letters and numbers."
          />
          <TextField
            label="Confirm password"
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={fieldErrors.confirmPassword}
          />

          {formError && (
            <p role="alert" className="text-sm font-medium text-signal-700">
              {formError}
            </p>
          )}

          <Button type="submit" disabled={submitting} className="w-full">
            {submitting ? "Creating account…" : "Register"}
          </Button>

          <p className="text-sm text-ink-700">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-ink-900 underline">
              Log in
            </Link>
          </p>
        </form>
      </AuthShell>
    </>
  );
}
