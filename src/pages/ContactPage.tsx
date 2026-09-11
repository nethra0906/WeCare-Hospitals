import { useState, type FormEvent } from "react";
import { PageMeta } from "../components/layout/PageMeta";
import { Container } from "../components/ui/Container";
import { SectionLabel } from "../components/ui/SectionLabel";
import { TextField } from "../components/ui/TextField";
import { TextArea } from "../components/ui/TextArea";
import { Button } from "../components/ui/Button";
import { MailIcon, MapPinIcon, PhoneIcon, CheckIcon } from "../components/icons";
import { addMessage } from "../lib/messages";
import { isNotEmpty, isValidEmail } from "../lib/validators";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactCards = [
  {
    icon: PhoneIcon,
    title: "Phone",
    lines: ["+91 11 4567 8900", "Mon–Sat, 8am–8pm"],
  },
  {
    icon: MapPinIcon,
    title: "Location",
    lines: ["12 Ashoka Road, Connaught Place", "New Delhi, DL 110001"],
  },
  {
    icon: MailIcon,
    title: "Email",
    lines: ["hello@wecare-hospitals.example", "billing@wecare-hospitals.example"],
  },
];

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const nextErrors: FieldErrors = {};
    if (!isNotEmpty(name)) nextErrors.name = "Name is required.";
    if (!isValidEmail(email)) nextErrors.email = "Enter a valid email address.";
    if (!isNotEmpty(message)) nextErrors.message = "Tell us what you need help with.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const { ok } = addMessage({ name, email, message });
    if (!ok) {
      setFormError("Could not save your message on this device. Please try again.");
      return;
    }

    setFormError(null);
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <>
      <PageMeta title="Contact Us" description="Get in touch with WeCare Hospitals." />

      <section className="border-b border-line bg-paper-100 py-16">
        <Container>
          <SectionLabel label="Contact us" />
          <h1 className="mt-4 font-display text-4xl text-ink-950 sm:text-5xl">
            Questions, billing, feedback — we'll route it right.
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-3">
          {contactCards.map(({ icon: Icon, title, lines }) => (
            <div key={title} className="border-l-4 border-ink-900 bg-paper-100 p-6">
              <Icon size={22} className="text-rust-600" />
              <h3 className="mt-3 font-display text-lg text-ink-950">{title}</h3>
              {lines.map((line) => (
                <p key={line} className="mt-1 text-sm text-ink-700">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </Container>
      </section>

      <section className="pb-20">
        <Container className="max-w-2xl">
          {submitted ? (
            <div className="flex items-start gap-3 border-l-4 border-ink-900 bg-paper-100 p-6">
              <CheckIcon size={22} className="mt-0.5 text-ink-900" />
              <div>
                <p className="font-display text-lg text-ink-950">Message received.</p>
                <p className="mt-1 text-sm text-ink-700">
                  This demo saves your message to this browser only — there's no inbox
                  behind it yet. Wiring it to email or a support ticketing system is a
                  drop-in change described in the README.
                </p>
                <Button
                  variant="secondary"
                  className="mt-4"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <TextField
                label="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
              />
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />
              <TextArea
                label="Message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={errors.message}
              />
              {formError && (
                <p role="alert" className="text-sm font-medium text-signal-700">
                  {formError}
                </p>
              )}
              <Button type="submit">Send message</Button>
            </form>
          )}
        </Container>
      </section>
    </>
  );
}
