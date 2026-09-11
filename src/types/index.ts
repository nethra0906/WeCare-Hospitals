export interface User {
  id: string;
  name: string;
  email: string;
}

/**
 * A user record as persisted in the demo data store. Never expose
 * `passwordHash`/`passwordSalt` through the AuthContext — only the public
 * {@link User} shape leaves the storage layer.
 */
export interface StoredUser extends User {
  passwordHash: string;
  passwordSalt: string;
  createdAt: string;
}

export type Speciality =
  | "General Medicine"
  | "Cardiology"
  | "Pediatrics"
  | "Neurology"
  | "Orthopedics"
  | "Dermatology";

export interface Appointment {
  id: string;
  /** Null for a booking made without an account ("guest checkout"). */
  userId: string | null;
  patientName: string;
  phone: string;
  speciality: Speciality;
  date: string;
  notes?: string;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface PatientReview {
  id: string;
  quote: string;
  author: string;
  department: Speciality;
}
