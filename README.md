# WeCare Hospitals

A multi-speciality hospital website: online appointment booking, a patient
dashboard, an honest emergency page, and the usual marketing pages — built as
a front-end-only React + TypeScript app.

> **This is a demo project, not a real hospital.** There is no backend.
> Accounts, appointments, and contact messages are all stored in your
> browser's `localStorage`. See [Data & auth model](#data--auth-model) below
> before assuming anything here is production-ready.

## Stack

- **React 19** + **TypeScript** (strict)
- **Vite 7** — dev server and build
- **Tailwind CSS v4** — styling, via the official Vite plugin
- **React Router v7** — routing
- **Vitest** + **React Testing Library** — tests
- **ESLint** (typescript-eslint, jsx-a11y, react-hooks) + **Prettier**

No component library, no CSS-in-JS, no icon-font CDN — every icon is a small
hand-drawn inline SVG (see `src/components/icons`), which keeps the app
dependency-light and avoids the visual "generic AI template" look.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

### Scripts

| Script                  | What it does                               |
| ----------------------- | ------------------------------------------ |
| `npm run dev`           | Start the dev server with hot reload       |
| `npm run build`         | Type-check, then build a production bundle |
| `npm run preview`       | Preview the production build locally       |
| `npm run test`          | Run the test suite once                    |
| `npm run test:watch`    | Run tests in watch mode                    |
| `npm run test:coverage` | Run tests with a coverage report           |
| `npm run lint`          | Lint with ESLint                           |
| `npm run lint:fix`      | Lint and auto-fix                          |
| `npm run format`        | Format everything with Prettier            |
| `npm run format:check`  | Check formatting without writing           |
| `npm run typecheck`     | Type-check without emitting                |

CI (`.github/workflows/ci.yml`) runs all of the above on every push and pull
request.

## What's here

- **Home, About, Contact, Patient Reviews, Virtual Tour** — informational
  pages. Reviews and the "About" copy are explicitly labeled as sample/
  fictional content; the virtual tour is two real facility photos in a
  lightbox rather than a fabricated 360° capture.
- **Book an appointment** — works with or without an account (a "guest
  checkout" pattern). Logged-in bookings show up on the dashboard; guest
  bookings don't, and the confirmation screen says so.
- **Register / Log in / Dashboard** — a demo account system (see below) with
  a dashboard listing and letting you cancel your own appointments.
- **Emergency** — leads with real, universal emergency numbers (112 / 911 / 999) and a "find nearby ERs" button that uses the Geolocation API to open
  Google Maps. It deliberately does **not** publish a fake hospital phone
  number as if it were a working line — a demo app with a non-working
  "ambulance" number that looks real would be actively harmful.

## Data & auth model

There is no server. `src/lib/storage.ts` wraps `localStorage` behind a small
typed API, and everything else builds on it:

- `src/lib/auth.ts` — registers/verifies users. Passwords are salted and
  hashed with SHA-256 (Web Crypto) rather than stored in plain text, but
  this is **not** production-grade authentication: there's no server-side
  session, rate limiting, or email verification, and anyone with access to
  the same browser profile can still read the stored records.
- `src/lib/appointments.ts` / `src/lib/messages.ts` — appointment bookings
  and contact messages, namespaced the same way.

Swapping this for a real backend later means replacing these three files
with `fetch` calls to your API — every component consumes them through
`AuthContext` / direct imports, never `localStorage` directly, so the blast
radius of that change is small and contained.

## Project structure

```
src/
  components/
    icons/      hand-drawn inline SVG icon set (no icon-font dependency)
    layout/     Navbar, Footer, page chrome, route guards, PageMeta
    ui/         Button, TextField, TextArea, Container, small primitives
  context/      AuthContext (React context definition + provider)
  hooks/        useAuth, useScrollToTopOn
  lib/          auth, appointments, messages, storage, validators
  pages/        one component per route
  test/         Vitest setup + a renderWithProviders test helper
  types/        shared TypeScript types
```

## Design

The visual language is deliberately not the generic "blue gradient + rounded
cards + icon-font" hospital template: a warm paper background, a deep-navy
and terracotta palette, a serif display face (Fraunces) paired with a clean
sans (IBM Plex Sans), and a recurring heartbeat-trace divider used instead of
a plain `<hr>`. Section labels read like chart tags ("— 02 / Emergency")
rather than generic centered headings, and the specialities/reviews sections
use a left index-tab treatment instead of the ubiquitous shadow-and-hover
card.

## Accessibility

- Every form input has a real `<label>` (not just a placeholder), with
  errors wired up via `aria-invalid` / `aria-describedby` and `role="alert"`.
- Keyboard focus is visible everywhere (`:focus-visible` ring), there's a
  skip-to-content link, and the mobile nav toggle exposes
  `aria-expanded`/`aria-controls`.
- ESLint runs `eslint-plugin-jsx-a11y` in CI, so a chunk of accessibility
  regressions fail the build rather than shipping.
- `prefers-reduced-motion` disables the pulse-divider animation.

## Testing

29 tests across the storage layer, auth (registration/login, including
duplicate-email and wrong-password cases), appointments, validators, and
integration tests that drive the real router (registration → auto-login →
redirect to the dashboard; guest booking → confirmation; the 404 route; the
protected-route redirect). Run them with `npm run test`.

## Known limitations

- **No real backend.** Everything is per-browser. Clearing site data or
  switching browsers loses your account and bookings.
- **Demo auth**, not production auth — see [Data & auth model](#data--auth-model).
- The "virtual tour" ships two photos, not an actual 360° capture.
- Contact messages and guest appointment requests aren't emailed or
  forwarded anywhere; they're just saved locally, which the UI says
  explicitly rather than pretending otherwise.

## Possible next steps

- Swap `src/lib/{auth,appointments,messages}.ts` for real API calls once a
  backend exists — the rest of the app doesn't need to change.
- Add a doctor/slot model to appointment booking instead of a free-text date.
- Send contact messages via a transactional email API or ticketing webhook.
