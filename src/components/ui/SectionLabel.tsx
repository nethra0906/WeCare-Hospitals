/**
 * A chart-tag style section marker, e.g. "— 02 / EMERGENCY". Used instead of
 * generic icon+headline hero blocks to give the app a distinct, editorial
 * rhythm across pages.
 */
export function SectionLabel({ index, label }: { index?: string; label: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-600">
      <span aria-hidden="true">— {index ? `${index} / ` : ""}</span>
      {label}
    </p>
  );
}
