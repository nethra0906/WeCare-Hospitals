import { useEffect } from "react";

/**
 * Scrolls to the top of the viewport whenever `trigger` becomes true.
 *
 * `ScrollToTop` (in components/layout) only fires on a route change. Pages
 * that swap between a form and a confirmation view *without* changing the
 * URL — booking a guest appointment, sending a contact message — need this
 * instead, or the confirmation can render below the fold of whatever scroll
 * position the form was left at.
 */
export function useScrollToTopOn(trigger: boolean) {
  useEffect(() => {
    if (trigger) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [trigger]);
}
