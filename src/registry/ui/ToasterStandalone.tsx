"use client";

import { Toaster as Sonner, ToasterProps, toast } from "sonner";
import React from "react";

// Componente Toaster Standalone - sem dependência do next-themes
export function ToasterStandalone({
  theme = "light",
  ...props
}: ToasterProps & { theme?: "light" | "dark" | "contrast" }) {
  return (
    <Sonner
      theme={theme}
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
}

// Hook simplificado para usar toast sem dependências externas
export function useToastStandalone() {
  const showToast = {
    success: (message: string, options?: { description?: string }) => {
      toast.success(message, options);
    },
    error: (message: string, options?: { description?: string }) => {
      toast.error(message, options);
    },
    info: (message: string, options?: { description?: string }) => {
      toast.info(message, options);
    },
    warning: (message: string, options?: { description?: string }) => {
      toast.warning(message, options);
    },
    promise: <T,>(
      promise: Promise<T>,
      options: {
        loading: string;
        success: string | ((data: T) => string);
        error: string | ((error: any) => string);
      }
    ) => {
      toast.promise(promise, options);
    },
    dismiss: (toastId?: string | number) => {
      toast.dismiss(toastId);
    },
  };

  return { toast: showToast };
}

// Exporta também o toast diretamente do sonner para uso avançado
export { toast };
