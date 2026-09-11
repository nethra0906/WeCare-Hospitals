import { useState } from "react";
import { PageMeta } from "../components/layout/PageMeta";
import { Container } from "../components/ui/Container";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Button } from "../components/ui/Button";
import { AmbulanceIcon, LocateIcon, PhoneIcon } from "../components/icons";

const realEmergencyNumbers = [
  { region: "India", number: "112" },
  { region: "United States / Canada", number: "911" },
  { region: "United Kingdom", number: "999" },
  { region: "European Union", number: "112" },
];

type LocateStatus = "idle" | "locating" | "error";

export function EmergencyPage() {
  const [status, setStatus] = useState<LocateStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function findNearestEr() {
    if (!("geolocation" in navigator)) {
      openMapsSearch();
      return;
    }

    setStatus("locating");
    setErrorMessage(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStatus("idle");
        openMapsSearch(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        setStatus("error");
        setErrorMessage(
          error.code === error.PERMISSION_DENIED
            ? "Location access was denied, so we'll search without it — you can pick your area on the map."
            : "Could not get your location, so we'll search without it.",
        );
        openMapsSearch();
      },
      { timeout: 8000 },
    );
  }

  function openMapsSearch(lat?: number, lng?: number) {
    const query = encodeURIComponent("hospital emergency room");
    const url =
      lat !== undefined && lng !== undefined
        ? `https://www.google.com/maps/search/${query}/@${lat},${lng},14z`
        : `https://www.google.com/maps/search/${query}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <PageMeta
        title="Emergency"
        description="Emergency assistance and nearest ER locator."
      />

      <section className="bg-signal-600 py-6 text-paper-50">
        <Container className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">
            If this is a real emergency, call your local emergency number now.
          </p>
          <a
            href="tel:112"
            className="inline-flex items-center gap-2 rounded-sm bg-paper-50 px-4 py-2 text-sm font-semibold text-signal-700"
          >
            <PhoneIcon size={16} /> Call 112
          </a>
        </Container>
      </section>

      <section className="border-b border-line bg-paper-100 py-16">
        <Container>
          <SectionLabel label="Emergency" />
          <h1 className="mt-4 max-w-2xl font-display text-4xl text-ink-950 sm:text-5xl">
            Get help fast.
          </h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="border-l-4 border-ink-900 bg-paper-100 p-6">
            <LocateIcon size={26} className="text-rust-600" />
            <h2 className="mt-3 font-display text-xl text-ink-950">
              Find the nearest ER
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              With your permission, we'll use your device's location to open a map of
              nearby emergency rooms. Nothing is sent anywhere except the maps request
              your browser makes when it opens.
            </p>
            <Button
              onClick={findNearestEr}
              disabled={status === "locating"}
              className="mt-4"
            >
              {status === "locating" ? "Locating…" : "Open nearby ERs on the map"}
            </Button>
            {errorMessage && (
              <p className="mt-2 text-sm text-signal-700">{errorMessage}</p>
            )}
          </div>

          <div className="border-l-4 border-ink-900 bg-paper-100 p-6">
            <AmbulanceIcon size={26} className="text-rust-600" />
            <h2 className="mt-3 font-display text-xl text-ink-950">
              Universal emergency numbers
            </h2>
            <p className="mt-2 text-sm text-ink-700">
              These connect to your local emergency dispatch, not to WeCare Hospitals
              directly.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {realEmergencyNumbers.map((entry) => (
                <li
                  key={entry.region}
                  className="flex items-center justify-between border-t border-line pt-2"
                >
                  <span className="text-ink-700">{entry.region}</span>
                  <a
                    href={`tel:${entry.number}`}
                    className="font-mono font-medium text-ink-900"
                  >
                    {entry.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>

        <Container className="mt-8">
          <div className="border border-dashed border-ink-900/30 bg-paper-50 p-6 text-sm text-ink-600">
            <p className="font-medium text-ink-800">
              Demo hospital lines (not a working phone number)
            </p>
            <p className="mt-1">
              A real deployment would list its own ambulance dispatch and on-call nurse
              lines here, wired to an actual switchboard. This project doesn't have one,
              so nothing below is clickable — publishing a placeholder number as a live
              emergency contact would be actively harmful.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
