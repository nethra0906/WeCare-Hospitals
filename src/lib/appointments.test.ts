import { describe, expect, it } from "vitest";
import { addAppointment, cancelAppointment, listAppointmentsFor } from "./appointments";

describe("appointments", () => {
  it("lists only the appointments for the given user, sorted by date", () => {
    addAppointment({
      userId: "user-1",
      patientName: "A",
      phone: "1234567890",
      speciality: "Cardiology",
      date: "2030-02-01",
    });
    addAppointment({
      userId: "user-1",
      patientName: "A",
      phone: "1234567890",
      speciality: "Neurology",
      date: "2030-01-15",
    });
    addAppointment({
      userId: "user-2",
      patientName: "B",
      phone: "1234567890",
      speciality: "Pediatrics",
      date: "2030-01-10",
    });

    const mine = listAppointmentsFor("user-1");
    expect(mine).toHaveLength(2);
    expect(mine[0].date).toBe("2030-01-15");
    expect(mine[1].date).toBe("2030-02-01");
  });

  it("supports guest bookings with a null userId", () => {
    const { ok } = addAppointment({
      userId: null,
      patientName: "Guest",
      phone: "1234567890",
      speciality: "General Medicine",
      date: "2030-01-01",
    });
    expect(ok).toBe(true);
  });

  it("removes a cancelled appointment", () => {
    addAppointment({
      userId: "user-1",
      patientName: "A",
      phone: "1234567890",
      speciality: "Dermatology",
      date: "2030-03-01",
    });
    const [appointment] = listAppointmentsFor("user-1");
    cancelAppointment(appointment.id);
    expect(listAppointmentsFor("user-1")).toHaveLength(0);
  });
});
