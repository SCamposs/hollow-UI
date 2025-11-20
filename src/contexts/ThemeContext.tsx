"use client";

// Theme management implementation - Ítalo Soares Campos (hollow-UI)
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "contrast";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Recupera o tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && ["light", "dark", "contrast"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Aplica o tema ao documento
    const root = document.documentElement;
    root.classList.remove("light", "dark", "contrast");
    root.classList.add(theme);

    // Salva no localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => {
      switch (current) {
        case "light":
          return "dark";
        case "dark":
          return "contrast";
        case "contrast":
          return "light";
        default:
          return "light";
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Exporta o context para uso externo
export { ThemeContext };
