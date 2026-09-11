import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookAppointmentPage } from "./BookAppointmentPage";
import { renderWithProviders } from "../test/render";

describe("BookAppointmentPage", () => {
  it("shows validation errors instead of submitting an incomplete form", async () => {
    const user = userEvent.setup();
    renderWithProviders(<BookAppointmentPage />, { route: "/book-appointment" });

    await user.click(screen.getByRole("button", { name: /confirm booking/i }));

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/enter a valid phone number/i)).toBeInTheDocument();
  });

  it("confirms a guest booking and nudges toward creating an account", async () => {
    const user = userEvent.setup();
    renderWithProviders(<BookAppointmentPage />, { route: "/book-appointment" });

    await user.type(screen.getByLabelText(/patient name/i), "Jordan Patient");
    await user.type(screen.getByLabelText(/phone number/i), "9876543210");
    await user.type(screen.getByLabelText(/preferred date/i), "2030-01-15");
    await user.click(screen.getByRole("button", { name: /confirm booking/i }));

    expect(
      await screen.findByText(/you're on the schedule for 2030-01-15/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/you booked as a guest/i)).toBeInTheDocument();
  });
});
