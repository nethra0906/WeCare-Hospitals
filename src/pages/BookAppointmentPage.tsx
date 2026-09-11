import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { PageMeta } from "../components/layout/PageMeta";
import { Container } from "../components/ui/Container";
import { SectionLabel } from "../components/ui/SectionLabel";
import { TextField } from "../components/ui/TextField";
import { TextArea } from "../components/ui/TextArea";
import { Button, LinkButton } from "../components/ui/Button";
import { CheckIcon } from "../components/icons";
import { useAuth } from "../hooks/useAuth";
import { useScrollToTopOn } from "../hooks/useScrollToTopOn";
import { addAppointment } from "../lib/appointments";
import { isNotEmpty, isValidPhone, todayIsoDate } from "../lib/validators";
import type { Speciality } from "../types";

const specialities: Speciality[] = [
  "General Medicine",
  "Cardiology",
  "Pediatrics",
  "Neurology",
  "Orthopedics",
  "Dermatology",
];

interface FieldErrors {
  patientName?: string;
  phone?: string;
  date?: string;
}

export function BookAppointmentPage() {
  const { user } = useAuth();

  const [patientName, setPatientName] = useState("");
  const nameEditedByUser = useRef(false);

  // `user` isn't known synchronously on a hard page load (it's read from
  // storage in an effect), so pre-fill the name once it resolves rather than
  // only at mount — but never overwrite something the visitor already typed.
  useEffect(() => {
    if (user && !nameEditedByUser.current) {
      setPatientName(user.name);
    }
  }, [user]);

  const [phone, setPhone] = useState("");
  const [speciality, setSpeciality] = useState<Speciality>("General Medicine");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  useScrollToTopOn(confirmed);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const nextErrors: FieldErrors = {};
    if (!isNotEmpty(patientName)) nextErrors.patientName = "Name is required.";
    if (!isValidPhone(phone)) nextErrors.phone = "Enter a valid phone number.";
    if (!isNotEmpty(date)) nextErrors.date = "Pick a date.";
    else if (date < todayIsoDate()) nextErrors.date = "Pick a date from today onward.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const { ok } = addAppointment({
      userId: user?.id ?? null,
      patientName,
      phone,
      speciality,
      date,
      notes: notes.trim() || undefined,
    });

    if (!ok) {
      setFormError("Could not save your booking on this device. Please try again.");
      return;
    }

    setFormError(null);
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <>
        <PageMeta title="Booking confirmed" />
        <Container className="flex min-h-[60vh] max-w-xl flex-col items-start justify-center py-16">
          <CheckIcon size={32} className="text-ink-900" />
          <h1 className="mt-4 font-display text-3xl text-ink-950">
            You're on the schedule for {date}.
          </h1>
          <p className="mt-3 text-ink-700">
            {speciality} · {patientName}
          </p>
          {!user && (
            <p className="mt-4 rounded-sm border-l-4 border-rust-600 bg-paper-100 p-4 text-sm text-ink-700">
              You booked as a guest, so this appointment won't show up in a dashboard.{" "}
              <Link to="/register" className="font-medium underline">
                Create an account
              </Link>{" "}
              next time to keep a running history.
            </p>
          )}
          <div className="mt-6 flex gap-3">
            {user && <LinkButton to="/dashboard">View my dashboard</LinkButton>}
            <LinkButton to="/" variant="secondary">
              Back to home
            </LinkButton>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <PageMeta
        title="Book an Appointment"
        description="Book a consultation at WeCare Hospitals."
      />

      <section className="border-b border-line bg-paper-100 py-16">
        <Container>
          <SectionLabel label="Book an appointment" />
          <h1 className="mt-4 max-w-2xl font-display text-4xl text-ink-950 sm:text-5xl">
            Pick a speciality and a date. We'll take it from there.
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <TextField
              label="Patient name"
              value={patientName}
              onChange={(e) => {
                nameEditedByUser.current = true;
                setPatientName(e.target.value);
              }}
              error={errors.patientName}
            />
            <TextField
              label="Phone number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              error={errors.phone}
            />

            <div>
              <label
                htmlFor="speciality"
                className="mb-1.5 block text-sm font-medium text-ink-900"
              >
                Speciality
              </label>
              <select
                id="speciality"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value as Speciality)}
                className="w-full rounded-sm border border-line bg-paper-50 px-3.5 py-2.5 text-ink-950 focus:outline-none"
              >
                {specialities.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <TextField
              label="Preferred date"
              type="date"
              min={todayIsoDate()}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              error={errors.date}
            />

            <TextArea
              label="Anything we should know? (optional)"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            {formError && (
              <p role="alert" className="text-sm font-medium text-signal-700">
                {formError}
              </p>
            )}

            <Button type="submit" className="w-full">
              Confirm booking
            </Button>

            {!user && (
              <p className="text-xs text-ink-600">
                Booking as a guest.{" "}
                <Link to="/login" className="underline">
                  Log in
                </Link>{" "}
                to save this to a dashboard instead.
              </p>
            )}
          </form>
        </Container>
      </section>
    </>
  );
}
