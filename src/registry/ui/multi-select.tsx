/**
 * Component: multi-select
 * Developed by: Ítalo Soares Campos
 * Library: @scmposs/hollow-ui
 * Homepage: https://github.com/SCamposs/hollow-ui
 */

"use client";

import * as React from "react";
import { XIcon } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Badge } from "./badge";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { cn } from "@/lib/utils";

export interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface MultiSelectProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Button>,
  "value" | "onChange" | "size" | "children"
> {
  options: MultiSelectOption[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  placeholder?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  emptyMessage?: string;
  maxDisplay?: number;
  size?: "sm" | "default";
}

function MultiSelect({
  options,
  value = [],
  onValueChange,
  placeholder = "Selecione...",
  searchable = true,
  searchPlaceholder = "Buscar...",
  emptyMessage = "Nenhum resultado encontrado.",
  maxDisplay = 3,
  className,
  disabled = false,
  size = "default",
  ...props
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);

    if (!isOpen) {
      setSearchValue("");
    }
  };

  const selectedOptions = options.filter((option) =>
    value.includes(option.value),
  );

  // Filtrar opções apenas pela busca, não remover as selecionadas
  const filteredOptions = options.filter(
    (option) =>
      searchValue === "" ||
      option.label.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const handleSelect = (optionValue: string) => {
    const newValue = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue];
    onValueChange?.(newValue);
  };

  const handleRemove = (optionValue: string) => {
    const newValue = value.filter((v) => v !== optionValue);
    onValueChange?.(newValue);
  };

  return (
    <Popover open={open} onOpenChange={handleOpenChange} modal={true}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between min-h-9 h-auto py-2 px-3 hover:bg-muted group",
            selectedOptions.length > 0 && "text-left",
            size === "sm" && "min-h-8",
            className,
          )}
          disabled={disabled}
          {...props}
        >
          <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
            {selectedOptions.length > 0 ? (
              <>
                {selectedOptions.slice(0, maxDisplay).map((option) => (
                  <Badge
                    key={option.value}
                    variant="secondary"
                    className="text-xs px-2 py-0.5 gap-1.5 h-6 font-normal"
                  >
                    <span className="truncate max-w-[150px]">
                      {option.label}
                    </span>
                    <span
                      role="button"
                      tabIndex={0}
                      className="ml-0.5 hover:bg-muted-foreground/20 rounded-sm p-0.5 transition-colors cursor-pointer inline-flex"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(option.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          e.stopPropagation();
                          handleRemove(option.value);
                        }
                      }}
                    >
                      <XIcon className="h-3 w-3" />
                    </span>
                  </Badge>
                ))}
                {selectedOptions.length > maxDisplay && (
                  <Badge
                    variant="secondary"
                    className="text-xs px-2 py-0.5 h-6 font-normal"
                  >
                    +{selectedOptions.length - maxDisplay}
                  </Badge>
                )}
              </>
            ) : (
              <span className="text-muted-foreground text-sm">
                {placeholder}
              </span>
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start" sideOffset={4}>
        <Command>
          {searchable && (
            <CommandInput
              placeholder={searchPlaceholder}
              value={searchValue}
              onValueChange={setSearchValue}
            />
          )}
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {filteredOptions.map((option) => {
                const isSelected = value.includes(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => handleSelect(option.value)}
                    disabled={option.disabled}
                    className="flex items-center gap-2 px-2 py-2 cursor-pointer hover:bg-primary"
                  >
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => handleSelect(option.value)}
                      disabled={option.disabled}
                      className="pointer-events-none data-[state=checked]:bg-muted data-[state=checked]:border-muted-foreground/30 "
                    />
                    <span className="flex-1 text-sm">{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { MultiSelect };
