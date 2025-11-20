"use client";

import * as React from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

// Standalone Theme Context - pode ser usado sem Next.js
type Theme = "light" | "dark" | "contrast";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const StandaloneThemeContext = React.createContext<
  ThemeContextType | undefined
>(undefined);

export function StandaloneThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = React.useState<Theme>("light");

  React.useEffect(() => {
    // Recupera o tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && ["light", "dark", "contrast"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  React.useEffect(() => {
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
    <StandaloneThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </StandaloneThemeContext.Provider>
  );
}

export function useStandaloneTheme() {
  const context = React.useContext(StandaloneThemeContext);
  if (context === undefined) {
    throw new Error(
      "useStandaloneTheme must be used within a StandaloneThemeProvider"
    );
  }
  return context;
}

// Componente ThemeToggle standalone
export function ThemeToggleStandalone() {
  const { theme, setTheme } = useStandaloneTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {theme === "light" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
          {theme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem]" />}
          {theme === "contrast" && (
            <Palette className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("contrast")}>
          <Palette className="mr-2 h-4 w-4" />
          High Contrast
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
