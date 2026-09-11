import type { Appointment, Speciality } from "../types";
import { createId, readList, writeList } from "./storage";

const KEY = "appointments";

export interface NewAppointment {
  userId: string | null;
  patientName: string;
  phone: string;
  speciality: Speciality;
  date: string;
  notes?: string;
}

export function listAppointmentsFor(userId: string): Appointment[] {
  return readList<Appointment>(KEY)
    .filter((appointment) => appointment.userId === userId)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function addAppointment(data: NewAppointment): { ok: boolean } {
  const appointment: Appointment = {
    id: createId(),
    createdAt: new Date().toISOString(),
    ...data,
  };
  const all = readList<Appointment>(KEY);
  const ok = writeList(KEY, [...all, appointment]);
  return { ok };
}

export function cancelAppointment(id: string): void {
  const all = readList<Appointment>(KEY);
  writeList(
    KEY,
    all.filter((appointment) => appointment.id !== id),
  );
}
