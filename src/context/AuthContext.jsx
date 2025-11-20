// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Store one registered user for this demo
  const [registeredUser, setRegisteredUser] = useState(() => {
    const stored = localStorage.getItem("appRegisteredUser");
    return stored ? JSON.parse(stored) : null;
  });

  // Restore active session on refresh
  useEffect(() => {
    const storedSession = localStorage.getItem("appCurrentUser");
    if (storedSession) {
      setUser(JSON.parse(storedSession));
    }
  }, []);

  // Keep session in localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("appCurrentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("appCurrentUser");
    }
  }, [user]);

  const register = (data, callback) => {
    setRegisteredUser(data);
    localStorage.setItem("appRegisteredUser", JSON.stringify(data));
    if (callback) callback();
  };

  const login = (username, password, callback) => {
    if (
      registeredUser &&
      registeredUser.username === username &&
      registeredUser.password === password
    ) {
      setUser(registeredUser);
      if (callback) callback();
    } else {
      alert("Invalid credentials or user not registered.");
    }
  };

  const logout = (callback) => {
    setUser(null);
    if (callback) callback();
  };

  const updateProfile = (updates) => {
    setUser((prev) => {
      if (!prev) return prev;
      const next = { ...prev, ...updates };
      setRegisteredUser(next);
      localStorage.setItem("appRegisteredUser", JSON.stringify(next));
      return next;
    });
  };

  const value = {
    user,
    isAuthenticated: !!user,
    register,
    login,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
