import { PageMeta } from "../components/layout/PageMeta";
import { Container } from "../components/ui/Container";
import { SectionLabel } from "../components/ui/SectionLabel";
import { PulseDivider } from "../components/ui/PulseDivider";
import { LinkButton } from "../components/ui/Button";
import { HeartPulseIcon, NeuroIcon, PediatricIcon, ClockIcon } from "../components/icons";

const steps = [
  {
    number: "01",
    title: "Tell us what's going on",
    body: "Book online in under a minute — pick a speciality, a date, and we'll confirm the rest.",
  },
  {
    number: "02",
    title: "See the right specialist",
    body: "Every booking routes to a doctor qualified for that exact concern, not a generalist queue.",
  },
  {
    number: "03",
    title: "Keep your own record",
    body: "Your appointment history lives in your dashboard — no phone calls to confirm what was said.",
  },
];

const specialities = [
  {
    icon: HeartPulseIcon,
    title: "Cardiac Sciences",
    body: "Diagnostics and long-term care for heart rhythm, pressure, and vascular conditions.",
  },
  {
    icon: PediatricIcon,
    title: "Pediatrics",
    body: "Growth checkups, vaccination schedules, and urgent care built for younger patients.",
  },
  {
    icon: NeuroIcon,
    title: "Neurosciences",
    body: "Evaluation and treatment for headaches, seizures, and nerve or spine conditions.",
  },
];

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Home"
        description="WeCare Hospitals — multi-speciality care with online appointment booking and 24/7 emergency assistance."
      />

      <section className="overflow-hidden border-b border-line bg-paper-100">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <SectionLabel index="01" label="Welcome" />
            <h1 className="mt-4 font-display text-4xl leading-[1.1] text-ink-950 sm:text-5xl lg:text-6xl">
              Where your care comes first.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-800">
              Depend on a multi-speciality team for everyday health and the moments that
              can't wait — with booking, records, and emergency help in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton to="/book-appointment">Book an appointment</LinkButton>
              <LinkButton to="/emergency" variant="signal">
                Emergency
              </LinkButton>
            </div>
            <p className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink-700">
              <ClockIcon size={16} /> Emergency desk staffed 24 / 7 / 365
            </p>
          </div>

          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div
              className="border border-ink-900/10 bg-paper-50 p-2"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)" }}
            >
              <img
                src="/images/doctors.png"
                alt="Two WeCare Hospitals physicians reviewing a patient chart"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-[13rem] border-l-4 border-rust-600 bg-ink-950 p-4 text-paper-50 shadow-lg sm:block">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-paper-100/60">
                Response time
              </p>
              <p className="mt-1 font-display text-2xl">&lt; 8 min</p>
              <p className="mt-1 text-xs text-paper-100/70">Average ER arrival window</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <SectionLabel index="02" label="How it works" />
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-ink-900/15 pt-5">
                <span className="font-mono text-sm text-rust-600">{step.number}</span>
                <h3 className="mt-2 font-display text-xl text-ink-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-100 py-16 lg:py-20">
        <Container>
          <SectionLabel index="03" label="Our specialities" />
          <h2 className="mt-3 font-display text-3xl text-ink-950">
            Focused departments, not a waiting room lottery.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {specialities.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-l-4 border-ink-900 bg-paper-50 p-6">
                <Icon size={28} className="text-rust-600" />
                <h3 className="mt-4 font-display text-lg text-ink-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-16 text-paper-50">
        <Container>
          <PulseDivider className="mb-8 max-w-xs text-rust-500" />
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl">
                Need to see a specialist this week?
              </h2>
              <p className="mt-2 max-w-md text-sm text-paper-100/70">
                Booking takes less time than the hold music at most clinics.
              </p>
            </div>
            <LinkButton
              to="/book-appointment"
              variant="secondary"
              className="border-paper-50 text-paper-50 hover:bg-paper-50 hover:text-ink-950"
            >
              Book an appointment
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
