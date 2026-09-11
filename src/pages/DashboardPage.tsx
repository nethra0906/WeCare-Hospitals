import { useState } from "react";
import { PageMeta } from "../components/layout/PageMeta";
import { Container } from "../components/ui/Container";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Button, LinkButton } from "../components/ui/Button";
import { useAuth } from "../hooks/useAuth";
import { cancelAppointment, listAppointmentsFor } from "../lib/appointments";

export function DashboardPage() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState(() =>
    user ? listAppointmentsFor(user.id) : [],
  );

  if (!user) return null; // ProtectedRoute guarantees this never renders.

  function handleCancel(id: string) {
    cancelAppointment(id);
    setAppointments((current) => current.filter((appointment) => appointment.id !== id));
  }

  return (
    <>
      <PageMeta title="Dashboard" description="Your WeCare Hospitals appointments." />

      <section className="border-b border-line bg-paper-100 py-16">
        <Container>
          <SectionLabel label="Dashboard" />
          <h1 className="mt-4 font-display text-4xl text-ink-950">
            Welcome back, {user.name.split(" ")[0]}.
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-ink-950">Your appointments</h2>
            <LinkButton to="/book-appointment" variant="secondary">
              Book another
            </LinkButton>
          </div>

          {appointments.length === 0 ? (
            <div className="mt-6 border border-dashed border-ink-900/30 p-8 text-center">
              <p className="text-ink-700">You don't have any appointments yet.</p>
              <LinkButton to="/book-appointment" className="mt-4 inline-flex">
                Book your first appointment
              </LinkButton>
            </div>
          ) : (
            <ul className="mt-6 divide-y divide-line border border-line">
              {appointments.map((appointment) => (
                <li
                  key={appointment.id}
                  className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium text-ink-950">{appointment.speciality}</p>
                    <p className="text-sm text-ink-700">
                      {appointment.date} · {appointment.patientName}
                    </p>
                    {appointment.notes && (
                      <p className="mt-1 text-sm text-ink-600">{appointment.notes}</p>
                    )}
                  </div>
                  <Button variant="ghost" onClick={() => handleCancel(appointment.id)}>
                    Cancel
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
