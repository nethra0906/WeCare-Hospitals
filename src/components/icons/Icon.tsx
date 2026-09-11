import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & { size?: number };

/**
 * Shared wrapper for the app's hand-drawn line-icon set. Every icon below is
 * a plain inline SVG (no icon-font CDN dependency, no extra network
 * request) drawn on a consistent 24x24 grid with a single stroke weight.
 */
export function iconBase({ size = 24, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}
