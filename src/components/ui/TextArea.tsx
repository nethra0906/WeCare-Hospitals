import { useId, type TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function TextArea({ label, error, id, className = "", ...rest }: TextAreaProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const errorId = `${fieldId}-error`;

  return (
    <div className={className}>
      <label htmlFor={fieldId} className="mb-1.5 block text-sm font-medium text-ink-900">
        {label}
      </label>
      <textarea
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-sm border bg-paper-50 px-3.5 py-2.5 text-ink-950 placeholder:text-ink-600/50 focus:outline-none ${
          error ? "border-signal-600" : "border-line"
        }`}
        {...rest}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-1 text-xs font-medium text-signal-700">
          {error}
        </p>
      )}
    </div>
  );
}
