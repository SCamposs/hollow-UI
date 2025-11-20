/**
 * Component: calendar-input
 * Developed by: Ítalo Soares Campos
 * Library: @scmposs/hollow-ui
 * Homepage: https://github.com/SCamposs/hollow-ui
 */

"use client";

import { useState, useEffect } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Calendar } from "./calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface CalendarInputProps {
  id?: string;
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  onOpenChange?: (open: boolean) => void;
}

export function CalendarInput({
  id,
  value,
  onChange,
  placeholder = "dd/mm/aaaa",
  className,
  onOpenChange,
}: CalendarInputProps) {
  const [dateInput, setDateInput] = useState("");
  const [open, setOpen] = useState(false);

  // Notificar o componente pai sobre mudanças no estado de abertura
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  // Sincronizar input com o valor da data quando mudar externamente
  useEffect(() => {
    if (value) {
      setDateInput(format(value, "dd/MM/yyyy"));
    } else {
      setDateInput("");
    }
  }, [value]);

  // Garantir que o Popover feche ao desmontar o componente
  useEffect(() => {
    return () => {
      // Força o fechamento síncrono do Popover
      if (open) {
        setOpen(false);
      }
    };
  }, [open]);

  // Funções auxiliares para formatação de data
  const formatarData = (inputValue: string) => {
    const numbers = inputValue.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 4)
      return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(
      4,
      8
    )}`;
  };

  const parseData = (dateString: string): Date | null => {
    if (dateString.length !== 10) return null;
    const [day, month, year] = dateString.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    if (
      date.getDate() === day &&
      date.getMonth() === month - 1 &&
      date.getFullYear() === year
    ) {
      return date;
    }
    return null;
  };

  const isDataInvalida = (dateString: string): boolean => {
    if (dateString.length === 0) return false;
    if (dateString.length < 10) return false;
    return parseData(dateString) === null;
  };

  return (
    <div className="space-y-1">
      <div className="relative">
        <Input
          id={id}
          type="text"
          placeholder={placeholder}
          className={cn(
            "pr-10 transition-all duration-200 focus:ring-2 focus:ring-ring/20",
            isDataInvalida(dateInput)
              ? "border-destructive focus:border-destructive focus:ring-destructive/20"
              : value
              ? "border-primary bg-primary/5"
              : "",
            className
          )}
          value={dateInput}
          onChange={(e) => {
            const formatted = formatarData(e.target.value);
            setDateInput(formatted);

            if (formatted.length === 10) {
              const parsedDate = parseData(formatted);
              onChange(parsedDate || undefined);
            } else if (formatted.length === 0) {
              onChange(undefined);
            }
          }}
          onBlur={() => {
            if (value) {
              setDateInput(format(value, "dd/MM/yyyy"));
            }
          }}
        />

        <Popover open={open} onOpenChange={handleOpenChange} modal={true}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute text-muted-foreground right-1 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-muted hover:text-foreground"
              tabIndex={-1}
            >
              <CalendarIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0 z-[60]"
            align="start"
            onInteractOutside={(e) => {
              // Prevenir fechamento se o clique for no overlay do Dialog
              const target = e.target as HTMLElement;
              if (target.getAttribute("data-slot") === "dialog-overlay") {
                e.preventDefault();
                return;
              }
              handleOpenChange(false);
            }}
            onEscapeKeyDown={() => handleOpenChange(false)}
          >
            <Calendar
              mode="single"
              selected={value}
              onSelect={(date) => {
                onChange(date);
                setDateInput(date ? format(date, "dd/MM/yyyy") : "");
                handleOpenChange(false);
              }}
              className="rounded-md border shadow-xs"
              captionLayout="dropdown"
              autoFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      {isDataInvalida(dateInput) && (
        <p className="text-xs text-destructive">Data inválida</p>
      )}
    </div>
  );
}
