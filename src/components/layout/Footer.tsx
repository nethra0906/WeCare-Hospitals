import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { PulseDivider } from "../ui/PulseDivider";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-ink-950 text-paper-100">
      <Container className="pt-10">
        <PulseDivider className="mb-10 text-rust-600/70" />
      </Container>
      <Container className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg text-paper-50">WeCare Hospitals</p>
          <p className="mt-2 max-w-xs text-sm text-paper-100/70">
            Multi-speciality care built around clear communication, fast access to
            emergency help, and appointments that fit your day.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-100/50">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="hover:text-rust-400" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-rust-400" to="/reviews">
                Patient reviews
              </Link>
            </li>
            <li>
              <Link className="hover:text-rust-400" to="/book-appointment">
                Book an appointment
              </Link>
            </li>
            <li>
              <Link className="hover:text-rust-400" to="/virtual-tour">
                Virtual tour
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-100/50">
            Get help
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="hover:text-rust-400" to="/emergency">
                Emergency
              </Link>
            </li>
            <li>
              <Link className="hover:text-rust-400" to="/contact">
                Contact us
              </Link>
            </li>
            <li>
              <Link className="hover:text-rust-400" to="/login">
                Patient login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-100/50">
            Legal
          </p>
          <ul className="mt-3 space-y-2 text-sm text-paper-100/70">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-paper-50/10 py-6 text-xs text-paper-100/50 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} WeCare Hospitals. All rights reserved.</p>
        <p>Built as a demo project — not a real healthcare provider.</p>
      </Container>
    </footer>
  );
}
