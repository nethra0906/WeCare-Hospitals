import { PageMeta } from "../components/layout/PageMeta";
import { Container } from "../components/ui/Container";
import { LinkButton } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <>
      <PageMeta title="Page not found" />
      <Container className="flex min-h-[60vh] flex-col items-start justify-center py-16">
        <p className="font-mono text-sm text-rust-600">404</p>
        <h1 className="mt-2 font-display text-4xl text-ink-950">
          This page took a wrong turn.
        </h1>
        <p className="mt-3 max-w-md text-ink-700">
          The page you're looking for doesn't exist, or moved when we redesigned the site.
        </p>
        <LinkButton to="/" className="mt-6">
          Back to home
        </LinkButton>
      </Container>
    </>
  );
}
