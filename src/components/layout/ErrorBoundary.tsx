import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Catches render-time errors anywhere below it so a bug in one page shows a
 * recoverable message instead of a blank white screen. Error boundaries
 * must be class components — there is no hook equivalent in React.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled error in the component tree:", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper-50 px-6 text-center">
          <p className="font-mono text-sm text-rust-600">Something went wrong</p>
          <h1 className="font-display text-3xl text-ink-950">
            This page hit an unexpected error.
          </h1>
          <button
            onClick={() => window.location.assign("/")}
            className="rounded-sm bg-ink-900 px-5 py-2.5 text-sm font-medium text-paper-50"
          >
            Back to home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
