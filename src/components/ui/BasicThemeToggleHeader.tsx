"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Button } from "../../registry/ui/button";

export function BasicThemeToggleHeader() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="sm"
      className="text-foreground hover:scale-110 transition-transform duration-200 p-2 dark:text-foreground dark:hover:bg-muted group"
      aria-label="Alternar tema"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 dark:text-foreground transition-transform duration-300 group-hover:rotate-[20deg] group-hover:scale-110" />
      ) : (
        <Sun className="w-5 h-5 dark:text-foreground transition-transform duration-300 group-hover:rotate-180" />
      )}
    </Button>
  );
}
