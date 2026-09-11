import type { ReactNode } from "react";
import { PulseDivider } from "../ui/PulseDivider";

export function AuthShell({
  eyebrow,
  title,
  quote,
  children,
}: {
  eyebrow: string;
  title: string;
  quote: string;
  children: ReactNode;
}) {
  return (
    <div className="grid min-h-[calc(100vh-64px)] lg:grid-cols-2">
      <div className="hidden flex-col justify-between bg-ink-950 p-12 text-paper-50 lg:flex">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-100/50">
            {eyebrow}
          </p>
          <p className="mt-6 max-w-sm font-display text-3xl leading-snug">{quote}</p>
        </div>
        <PulseDivider className="max-w-xs text-rust-500" />
      </div>

      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <h1 className="font-display text-3xl text-ink-950">{title}</h1>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
