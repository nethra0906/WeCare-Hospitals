import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "signal";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 font-medium " +
  "text-sm tracking-wide transition-colors duration-150 disabled:cursor-not-allowed " +
  "disabled:opacity-50";

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-ink-900 text-paper-50 hover:bg-ink-800",
  secondary: "border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-paper-50",
  ghost: "text-ink-900 hover:bg-ink-100",
  signal: "bg-signal-600 text-paper-50 hover:bg-signal-700",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

/** A same-page action: submit, toggle, open a dialog. */
export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${base} ${buttonVariantClasses[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

interface LinkButtonProps {
  to: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  external?: boolean;
}

/** Navigation styled like a button — internal routes use react-router. */
export function LinkButton({
  to,
  variant = "primary",
  className = "",
  children,
  external = false,
}: LinkButtonProps) {
  const classes = `${base} ${buttonVariantClasses[variant]} ${className}`;
  if (external) {
    return (
      <a href={to} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
