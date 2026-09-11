/**
 * The site's recurring visual motif: a heartbeat trace used as a section
 * divider instead of a plain <hr>. Purely decorative.
 */
export function PulseDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      className={`h-6 w-full text-rust-500 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 12H120L140 3L160 21L180 12H400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="100"
        strokeDasharray="100"
        className="animate-pulse-line"
      />
    </svg>
  );
}
