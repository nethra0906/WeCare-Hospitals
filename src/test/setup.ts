import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";

// jsdom doesn't implement scrolling; ScrollToTop calls this on every route
// change, and without a stub jsdom logs a noisy "not implemented" error.
window.scrollTo = () => {};

afterEach(() => {
  localStorage.clear();
});
