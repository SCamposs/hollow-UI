"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavRailItem {
  /** Unique identifier for the item */
  id: string;
  /** Display label */
  label: string;
  /** Lucide icon component or any React element type */
  icon: React.ElementType;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Tooltip shown when the item is disabled */
  disabledMessage?: string;
}

// ─── Variants ─────────────────────────────────────────────────────────────────

const navRailContainerVariants = cva(
  "min-h-fit max-h-fit rounded-lg p-2 transition-all duration-300",
  {
    variants: {
      variant: {
        /** Muted background with light active state */
        default: "bg-muted dark:bg-muted contrast:bg-muted",
        /** Transparent background, subtle hover */
        ghost: "bg-transparent",
        /** Card-like container with border */
        solid: "bg-card border border-border shadow-sm",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

const navRailItemBaseVariants = cva(
  "flex items-center justify-start w-full px-2 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "text-muted-foreground hover:text-foreground hover:bg-background/50 dark:hover:bg-background/20",
        ghost:
          "text-muted-foreground hover:text-foreground hover:bg-muted/50",
        solid:
          "text-muted-foreground hover:text-foreground hover:bg-muted",
      },
      size: {
        sm: "h-8 text-xs",
        md: "h-10 text-sm",
        lg: "h-12 text-base",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);

const activeItemClasses: Record<NonNullable<NavRailProps["variant"]>, string> = {
  default: "bg-background text-foreground shadow-sm dark:bg-background dark:text-foreground",
  ghost: "bg-accent/20 text-accent-foreground",
  solid: "bg-primary text-primary-foreground",
};

// ─── Props ────────────────────────────────────────────────────────────────────

export interface NavRailProps
  extends VariantProps<typeof navRailContainerVariants> {
  /** Navigation items to render */
  items: NavRailItem[];
  /** Currently active item id */
  value: string;
  /** Callback fired when the active item changes */
  onValueChange: (value: string) => void;
  /** Controlled collapsed state (desktop rail) */
  collapsed?: boolean;
  /** Initial collapsed state when uncontrolled */
  defaultCollapsed?: boolean;
  /** Callback fired when collapsed state changes */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Size of each navigation item */
  size?: "sm" | "md" | "lg";
  /** Additional classes applied to the desktop rail container */
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function NavRail({
  items,
  value,
  onValueChange,
  collapsed: collapsedProp,
  defaultCollapsed = false,
  onCollapsedChange,
  variant = "default",
  size = "md",
  className,
}: NavRailProps) {
  const [internalCollapsed, setInternalCollapsed] =
    React.useState(defaultCollapsed);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isControlled = collapsedProp !== undefined;
  const collapsed = isControlled ? collapsedProp : internalCollapsed;

  const handleToggleCollapse = () => {
    const next = !collapsed;
    if (!isControlled) setInternalCollapsed(next);
    onCollapsedChange?.(next);
  };

  const iconSize =
    size === "sm" ? "w-3 h-3" : size === "lg" ? "w-5 h-5" : "w-4 h-4";

  const resolvedVariant: NonNullable<NavRailProps["variant"]> =
    variant ?? "default";

  return (
    <>
      {/* ── Desktop Rail ─────────────────────────────────────── */}
      <div
        className={cn(
          navRailContainerVariants({ variant }),
          "hidden lg:flex lg:flex-col gap-1",
          collapsed ? "w-12" : "w-48",
          className
        )}
      >
        {/* Toggle */}
        <button
          onClick={handleToggleCollapse}
          className="flex items-center justify-center w-full h-8 rounded-md hover:bg-background/50 dark:hover:bg-background/20 transition-colors shrink-0"
          title={collapsed ? "Expandir menu" : "Colapsar menu"}
          aria-label={collapsed ? "Expandir menu" : "Colapsar menu"}
        >
          {collapsed ? (
            <ChevronRight className={cn(iconSize, "shrink-0")} />
          ) : (
            <ChevronLeft className={cn(iconSize, "shrink-0")} />
          )}
        </button>

        {/* Items */}
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = value === item.id;
          return (
            <button
              key={item.id}
              onClick={() => !item.disabled && onValueChange(item.id)}
              disabled={item.disabled}
              title={
                item.disabled
                  ? item.disabledMessage
                  : collapsed
                    ? item.label
                    : undefined
              }
              className={cn(
                navRailItemBaseVariants({ variant, size }),
                isActive && activeItemClasses[resolvedVariant]
              )}
            >
              <Icon className={cn(iconSize, "shrink-0")} />
              {!collapsed && (
                <span className="ml-3 truncate">{item.label}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Mobile FAB ───────────────────────────────────────── */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed bottom-4 right-4 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
      >
        {mobileOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* ── Mobile Drawer ────────────────────────────────────── */}
      <div
        className={cn(
          "lg:hidden fixed top-0 left-0 bottom-0 z-40",
          "bg-background/95 backdrop-blur-sm border-r border-border",
          "transition-transform duration-300 ease-in-out w-64 shadow-xl overflow-y-auto",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <span className="font-medium text-sm text-foreground">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1 rounded-md hover:bg-muted transition-colors"
            aria-label="Fechar menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = value === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (!item.disabled) {
                    onValueChange(item.id);
                    setMobileOpen(false);
                  }
                }}
                disabled={item.disabled}
                title={item.disabled ? item.disabledMessage : undefined}
                className={cn(
                  navRailItemBaseVariants({ variant, size: "lg" }),
                  isActive && activeItemClasses[resolvedVariant],
                  item.disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="ml-3 text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Mobile Overlay ───────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
