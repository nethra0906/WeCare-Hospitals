import { useEffect, useState } from "react";
import { PageMeta } from "../components/layout/PageMeta";
import { Container } from "../components/ui/Container";
import { SectionLabel } from "../components/ui/SectionLabel";
import { CloseIcon } from "../components/icons";

const stops = [
  {
    src: "/images/hospital.png",
    alt: "WeCare Hospitals main building exterior",
    caption: "Main building — reception and outpatient wing",
  },
  {
    src: "/images/doctors.png",
    alt: "WeCare Hospitals physicians in a consultation room",
    caption: "Consultation rooms — cardiology and general medicine",
  },
];

export function VirtualTourPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenIndex(null);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openIndex]);

  return (
    <>
      <PageMeta
        title="Virtual Tour"
        description="A photo tour of WeCare Hospitals facilities."
      />

      <section className="border-b border-line bg-paper-100 py-16">
        <Container>
          <SectionLabel label="Virtual tour" />
          <h1 className="mt-4 max-w-2xl font-display text-4xl text-ink-950 sm:text-5xl">
            A look inside, before you visit.
          </h1>
          <p className="mt-3 max-w-xl text-sm text-ink-600">
            This demo ships with two facility photos rather than a full 360° capture — an
            honest stand-in for the real tour a production site would need actual
            panoramic photography for.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-2">
          {stops.map((stop, index) => (
            <button
              key={stop.src}
              onClick={() => setOpenIndex(index)}
              className="group text-left"
              aria-haspopup="dialog"
            >
              <div className="overflow-hidden border border-ink-900/10 bg-paper-100">
                <img
                  src={stop.src}
                  alt={stop.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-ink-900">{stop.caption}</p>
            </button>
          ))}
        </Container>
      </section>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={stops[openIndex].caption}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-6"
        >
          <button
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute right-6 top-6 text-paper-50"
          >
            <CloseIcon size={28} />
          </button>
          <figure className="max-h-full max-w-3xl">
            <img
              src={stops[openIndex].src}
              alt={stops[openIndex].alt}
              className="max-h-[80vh] w-full object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-paper-100/80">
              {stops[openIndex].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
