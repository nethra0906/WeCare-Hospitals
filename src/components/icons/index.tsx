import type { IconProps } from "./Icon";
import { iconBase } from "./Icon";

export function HeartPulseIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <path d="M3 12h3.2l2-4 3 8 2.4-6H15l1.5 2H21" />
      <path d="M12 19.5S4 14.7 4 9.6C4 6.8 6.1 5 8.4 5c1.5 0 2.8.8 3.6 2 .8-1.2 2.1-2 3.6-2 2.3 0 4.4 1.8 4.4 4.6 0 5.1-8 9.9-8 9.9z" />
    </svg>
  );
}

export function PediatricIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <circle cx="12" cy="8" r="4" />
      <path d="M8.5 6.2c-.5-1-2-1.6-2.8-.8" />
      <path d="M15.5 6.2c.5-1 2-1.6 2.8-.8" />
      <path d="M5 20c1-3.5 3.8-6 7-6s6 2.5 7 6" />
      <path d="M9.5 8.5c.5.6 1.5.6 2 0M12.5 8.5c.5.6 1.5.6 2 0" />
    </svg>
  );
}

export function NeuroIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <path d="M9 4c-2.2 0-4 1.8-4 4 0 .7.2 1.4.5 2-1 .6-1.5 1.7-1.5 2.9C4 15 5.8 16.5 8 16.5c.2 1.5 1.6 2.5 3 2.5s2.8-1 3-2.5c2.2 0 4-1.5 4-3.6 0-1.2-.5-2.3-1.5-2.9.3-.6.5-1.3.5-2 0-2.2-1.8-4-4-4-.9 0-1.7.3-2.3.8C10.7 4.3 9.9 4 9 4z" />
      <path d="M9 9c.8 0 1.5.7 1.5 1.5S9.8 12 9 12M13.5 8.5c.8 0 1.5.7 1.5 1.5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <path d="M6.6 3.5 9 5.9c.4.4.4 1.1 0 1.6L7.6 9c1 2.4 3 4.4 5.4 5.4l1.4-1.4c.4-.4 1.1-.4 1.6 0l2.4 2.4c.4.4.4 1.1 0 1.6l-1.2 1.2c-.6.6-1.5.8-2.3.5-3.3-1.1-6.9-4.7-8-8-.3-.8 0-1.7.5-2.3l1.2-1.2c.4-.4.4-1.1 0-1.6z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <path d="M12 21s7-6.3 7-11.5C19 5.4 15.9 3 12 3S5 5.4 5 9.5C5 14.7 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4 6.5 12 13l8-6.5" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function LocateIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <path d="M5 12.5 9.5 17 19 7" />
    </svg>
  );
}

export function AmbulanceIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <path d="M3 16V8a1 1 0 0 1 1-1h9l4 4h2a1 1 0 0 1 1 1v4" />
      <path d="M3 16h16" />
      <circle cx="7" cy="18.5" r="1.6" />
      <circle cx="17" cy="18.5" r="1.6" />
      <path d="M8.5 10.5v3M7 12h3" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...iconBase(props)}>
      <path d="M12 3l7 3v5c0 5-3.2 8-7 10-3.8-2-7-5-7-10V6z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}
