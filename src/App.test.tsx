import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";
import { renderWithProviders } from "./test/render";

describe("App routing", () => {
  it("renders the home page at /", () => {
    renderWithProviders(<App />, { route: "/" });
    expect(
      screen.getByRole("heading", { level: 1, name: /where your care comes first/i }),
    ).toBeInTheDocument();
  });

  it("renders a 404 page for an unknown route", () => {
    renderWithProviders(<App />, { route: "/nowhere" });
    expect(screen.getByText(/took a wrong turn/i)).toBeInTheDocument();
  });

  it("redirects an unauthenticated visitor away from the dashboard", () => {
    renderWithProviders(<App />, { route: "/dashboard" });
    expect(screen.getByRole("heading", { name: /welcome back\./i })).toBeInTheDocument();
  });

  it("lets a new user register and land on their dashboard", async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />, { route: "/register" });

    await user.type(screen.getByLabelText(/full name/i), "Ada Lovelace");
    await user.type(screen.getByLabelText(/^email$/i), "ada@example.com");
    await user.type(screen.getByLabelText(/^password$/i), "letters123");
    await user.type(screen.getByLabelText(/confirm password/i), "letters123");
    await user.click(screen.getByRole("button", { name: /register/i }));

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: /welcome back, ada/i }),
      ).toBeInTheDocument(),
    );
  });
});
