import { PageMeta } from "../components/layout/PageMeta";
import { Container } from "../components/ui/Container";
import { SectionLabel } from "../components/ui/SectionLabel";
import type { PatientReview } from "../types";

// Illustrative sample data for this demo — not real patient testimonials.
const reviews: PatientReview[] = [
  {
    id: "1",
    quote:
      "The cardiologist was clear about every option before we chose one, and the front desk actually called back when they said they would.",
    author: "Vachan R.",
    department: "Cardiology",
  },
  {
    id: "2",
    quote:
      "My daughter's checkup felt unhurried even though the waiting room was full. That's rare.",
    author: "Priyanka M.",
    department: "Pediatrics",
  },
  {
    id: "3",
    quote:
      "Booked a neurology consult on a Tuesday, was seen by Thursday. The online form took two minutes.",
    author: "Siva K.",
    department: "Neurology",
  },
  {
    id: "4",
    quote:
      "Recovering from a fracture is slow no matter what, but the physio team kept me honest about the timeline instead of overpromising.",
    author: "Arjun V.",
    department: "Orthopedics",
  },
];

export function PatientReviewsPage() {
  return (
    <>
      <PageMeta
        title="Patient Reviews"
        description="What patients say about WeCare Hospitals."
      />

      <section className="border-b border-line bg-paper-100 py-16">
        <Container>
          <SectionLabel label="Patient reviews" />
          <h1 className="mt-4 font-display text-4xl text-ink-950 sm:text-5xl">
            In their words.
          </h1>
          <p className="mt-2 max-w-xl text-sm text-ink-600">
            Sample testimonials for this demo project — not real patient reviews.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-2">
          {reviews.map((review) => (
            <figure
              key={review.id}
              className="border-l-4 border-ink-900 bg-paper-100 p-6"
            >
              <blockquote className="font-display text-lg leading-snug text-ink-950">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between text-sm">
                <span className="font-medium text-ink-900">— {review.author}</span>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-rust-600">
                  {review.department}
                </span>
              </figcaption>
            </figure>
          ))}
        </Container>
      </section>
    </>
  );
}
