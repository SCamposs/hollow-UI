"use client";

import * as React from "react";
import { Sun, Moon, Eye } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-4 h-4" />;
      case "dark":
        return <Moon className="w-4 h-4" />;
      case "contrast":
        return <Eye className="w-4 h-4" />;
      default:
        return <Sun className="w-4 h-4" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Modo Claro";
      case "dark":
        return "Modo Escuro";
      case "contrast":
        return "Alto Contraste";
      default:
        return "Modo Claro";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-foreground hover:bg-primary/80 hover:scale-110 transition-transform duration-200 p-2"
          title={getLabel()}
        >
          {getIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center gap-2"
        >
          <Sun className="w-4 h-4 hover:text-primary" />
          Modo Claro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2"
        >
          <Moon className="w-4 h-4 hover:text-primary" />
          Modo Escuro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("contrast")}
          className="flex items-center gap-2"
        >
          <Eye className="w-4 h-4 hover:text-primary" />
          Alto Contraste
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
