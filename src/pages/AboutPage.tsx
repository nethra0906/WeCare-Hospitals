import { PageMeta } from "../components/layout/PageMeta";
import { Container } from "../components/ui/Container";
import { SectionLabel } from "../components/ui/SectionLabel";

const values = [
  {
    title: "Clarity first",
    body: "You should leave every visit understanding what happened and what happens next — no jargon left unexplained.",
  },
  {
    title: "Fast when it counts",
    body: "Emergency care and same-week specialist bookings are treated as the default, not the upsell.",
  },
  {
    title: "Records you can see",
    body: "Your appointment history belongs to you first, and to a filing cabinet second.",
  },
];

const stats = [
  { value: "6", label: "Specialities" },
  { value: "24/7", label: "Emergency desk" },
  { value: "1999", label: "Founded" },
];

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Learn about WeCare Hospitals — our mission, values, and multi-speciality departments."
      />

      <section className="border-b border-line bg-paper-100 py-16">
        <Container>
          <SectionLabel index="01" label="Who we are" />
          <h1 className="mt-4 max-w-2xl font-display text-4xl text-ink-950 sm:text-5xl">
            A multi-speciality hospital built around one question: what does this patient
            actually need?
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div
            className="border border-ink-900/10 bg-paper-100 p-2"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 92%)" }}
          >
            <img
              src="/images/hospital.png"
              alt="Exterior of a WeCare Hospitals facility"
              className="w-full object-cover"
            />
          </div>

          <div className="space-y-4 text-ink-800">
            <p>
              WeCare Hospitals is a fictional multi-speciality hospital network built for
              this project to demonstrate how a booking-and-care site should actually
              work: fast appointment scheduling, an honest emergency page, and a patient
              dashboard that isn't an afterthought.
            </p>
            <p>
              Our (equally fictional) departments span cardiac sciences, pediatrics,
              neurosciences, orthopedics, dermatology, and general medicine, staffed by a
              team our copy insists is "highly skilled" — you'll have to take our word for
              it.
            </p>
            <p className="rounded-sm border-l-4 border-rust-600 bg-paper-100 p-4 text-sm text-ink-700">
              This is a portfolio / demo project, not a real healthcare provider. Nothing
              on this site should be used to make medical decisions.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink-950 py-16 text-paper-50">
        <Container className="grid gap-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-4 border-rust-500 pl-5">
              <p className="font-display text-4xl">{stat.value}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-paper-100/60">
                {stat.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionLabel index="02" label="What we optimize for" />
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t border-ink-900/15 pt-5">
                <h3 className="font-display text-xl text-ink-950">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{value.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
