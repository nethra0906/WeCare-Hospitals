import { useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PageMeta } from "../components/layout/PageMeta";
import { AuthShell } from "../components/layout/AuthShell";
import { TextField } from "../components/ui/TextField";
import { Button } from "../components/ui/Button";
import { useAuth } from "../hooks/useAuth";
import { isNotEmpty, isValidEmail } from "../lib/validators";

interface LocationState {
  from?: string;
}

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setFormError(null);

    const errors: typeof fieldErrors = {};
    if (!isValidEmail(email)) errors.email = "Enter a valid email address.";
    if (!isNotEmpty(password)) errors.password = "Password is required.";
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);
    const { error } = await login(email, password);
    setSubmitting(false);

    if (error) {
      setFormError(error);
      return;
    }

    const from = (location.state as LocationState | null)?.from ?? "/dashboard";
    navigate(from, { replace: true });
  }

  return (
    <>
      <PageMeta title="Log in" description="Log in to your WeCare Hospitals account." />
      <AuthShell
        eyebrow="Patient portal"
        title="Welcome back."
        quote="“Everything from your last visit to your next one, in one place.”"
      >
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={fieldErrors.password}
          />

          {formError && (
            <p role="alert" className="text-sm font-medium text-signal-700">
              {formError}
            </p>
          )}

          <Button type="submit" disabled={submitting} className="w-full">
            {submitting ? "Logging in…" : "Log in"}
          </Button>

          <p className="text-sm text-ink-700">
            New here?{" "}
            <Link to="/register" className="font-medium text-ink-900 underline">
              Create an account
            </Link>
          </p>

          <p className="border-t border-line pt-4 text-xs text-ink-600">
            Demo note: accounts are stored only in this browser (there's no server behind
            this form) — see the README for details.
          </p>
        </form>
      </AuthShell>
    </>
  );
}
