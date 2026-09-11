import { createContext } from "react";
import type { User } from "../types";

export interface AuthContextValue {
  user: User | null;
  /** True only while the initial session is being read from storage. */
  initializing: boolean;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  register: (
    name: string,
    email: string,
    password: string,
  ) => Promise<{ error?: string }>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
