import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { User } from "../types";
import {
  clearSessionUser,
  getSessionUser,
  registerUser,
  setSessionUser,
  verifyCredentials,
} from "../lib/auth";
import { AuthContext, type AuthContextValue } from "./auth-context";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    setUser(getSessionUser());
    setInitializing(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const result = await verifyCredentials(email, password);
    if (result.user) {
      setSessionUser(result.user);
      setUser(result.user);
    }
    return { error: result.error };
  }, []);

  const register = useCallback(async (name: string, email: string, password: string) => {
    const result = await registerUser(name, email, password);
    if (result.user) {
      setSessionUser(result.user);
      setUser(result.user);
    }
    return { error: result.error };
  }, []);

  const logout = useCallback(() => {
    clearSessionUser();
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, initializing, login, register, logout }),
    [user, initializing, login, register, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
