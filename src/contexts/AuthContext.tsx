"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  isAdmin: boolean;
  loginAsAdmin: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAdmin: false,
  loginAsAdmin: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const loginAsAdmin = () => setIsAdmin(true);
  const logout = () => setIsAdmin(false);

  return (
    <AuthContext.Provider value={{ isAdmin, loginAsAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
