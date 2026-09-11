import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "../ui/Container";
import { MenuIcon, CloseIcon, AmbulanceIcon } from "../icons";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/book-appointment", label: "Book Appointment" },
  { to: "/reviews", label: "Patient Reviews" },
  { to: "/virtual-tour", label: "Virtual Tour" },
  { to: "/contact", label: "Contact" },
];

function navLinkClasses(isActive: boolean) {
  return [
    "relative py-1.5 text-sm font-medium transition-colors",
    isActive ? "text-paper-50" : "text-paper-50/70 hover:text-paper-50",
    // The underline motif: a thin rule that grows from the center instead of
    // a flat color swap, echoing the pulse-divider used across the site.
    "after:absolute after:left-1/2 after:top-full after:h-[2px] after:bg-rust-500",
    "after:origin-center after:-translate-x-1/2 after:transition-all after:duration-200",
    isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
  ].join(" ");
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    setOpen(false);
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-50 bg-ink-900 text-paper-50 shadow-[0_1px_0_0_rgba(0,0,0,0.15)]">
      <Container className="flex h-16 items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2.5 font-display text-lg"
          onClick={() => setOpen(false)}
        >
          <img src="/images/wecare-logo.png" alt="" className="h-8 w-8 rounded-full" />
          <span>
            WeCare <span className="text-rust-500">Hospitals</span>
          </span>
        </NavLink>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => navLinkClasses(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <NavLink
            to="/emergency"
            className="inline-flex items-center gap-1.5 rounded-sm bg-signal-600 px-3.5 py-2 text-sm font-semibold text-paper-50 hover:bg-signal-700"
          >
            <AmbulanceIcon size={16} />
            Emergency
          </NavLink>
          {user ? (
            <div className="flex items-center gap-3 text-sm">
              <NavLink to="/dashboard" className="text-paper-50/80 hover:text-paper-50">
                Hi, {user.name.split(" ")[0]}
              </NavLink>
              <button
                onClick={handleLogout}
                className="rounded-sm border border-paper-50/30 px-3 py-1.5 text-paper-50/90 hover:border-paper-50"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm">
              <NavLink to="/login" className="px-2 text-paper-50/80 hover:text-paper-50">
                Log in
              </NavLink>
              <NavLink
                to="/register"
                className="rounded-sm bg-paper-50 px-3.5 py-2 font-medium text-ink-900 hover:bg-paper-100"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>

        <button
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="border-t border-paper-50/10 bg-ink-900 px-6 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-sm px-3 py-2.5 text-sm ${
                      isActive ? "bg-paper-50/10 text-paper-50" : "text-paper-50/80"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/emergency"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center gap-1.5 rounded-sm bg-signal-600 px-3 py-2.5 text-sm font-semibold text-paper-50"
              >
                <AmbulanceIcon size={16} />
                Emergency
              </NavLink>
            </li>
            <li className="mt-2 flex items-center gap-3 border-t border-paper-50/10 pt-3">
              {user ? (
                <>
                  <NavLink
                    to="/dashboard"
                    onClick={() => setOpen(false)}
                    className="text-sm text-paper-50/90"
                  >
                    Dashboard
                  </NavLink>
                  <button onClick={handleLogout} className="text-sm text-paper-50/70">
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="text-sm text-paper-50/90"
                  >
                    Log in
                  </NavLink>
                  <NavLink
                    to="/register"
                    onClick={() => setOpen(false)}
                    className="text-sm text-paper-50/90"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
