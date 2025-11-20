"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group custom-toast-position"
      position="top-right"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--success-bg": "#dcfce7",
          "--success-text": "#15803d",
          "--success-border": "#16a34a",
          "--error-bg": "#fef2f2",
          "--error-text": "#dc2626",
          "--error-border": "#ef4444",
          "--warning-bg": "#fefce8",
          "--warning-text": "#ca8a04",
          "--warning-border": "#eab308",
          "--info-bg": "#eff6ff",
          "--info-text": "#2563eb",
          "--info-border": "#3b82f6",
        } as React.CSSProperties
      }
      toastOptions={{
        style: {
          border: "1px solid var(--normal-border)",
        },
        classNames: {
          success: "toast-success",
          error: "toast-error",
          warning: "toast-warning",
          info: "toast-info",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
