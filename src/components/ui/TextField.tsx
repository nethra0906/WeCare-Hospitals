import { useId, type InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export function TextField({
  label,
  error,
  hint,
  id,
  className = "",
  ...rest
}: TextFieldProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const errorId = `${fieldId}-error`;
  const hintId = `${fieldId}-hint`;

  return (
    <div className={className}>
      <label htmlFor={fieldId} className="mb-1.5 block text-sm font-medium text-ink-900">
        {label}
      </label>
      <input
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : hint ? hintId : undefined}
        className={`w-full rounded-sm border bg-paper-50 px-3.5 py-2.5 text-ink-950 placeholder:text-ink-600/50 focus:outline-none ${
          error ? "border-signal-600" : "border-line"
        }`}
        {...rest}
      />
      {hint && !error && (
        <p id={hintId} className="mt-1 text-xs text-ink-700">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-1 text-xs font-medium text-signal-700">
          {error}
        </p>
      )}
    </div>
  );
}
