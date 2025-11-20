/**
 * hollow-UI - HeaderButton Component
 * Developed by Ítalo Soares Campos
 */

"use client";

import React from "react";
import { Button } from "./button";
import { LucideIcon } from "lucide-react";

interface HeaderButtonProps {
  /** Ícone do Lucide React */
  icon?: LucideIcon;
  /** Conteúdo personalizado do botão (para imagens ou outros elementos) */
  children?: React.ReactNode;
  /** Texto do tooltip que aparece ao fazer hover */
  title?: string;
  /** Função executada ao clicar no botão */
  onClick?: () => void;
  /** Variant do botton (padrão: ghost) */
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  /** Tamanho do botão (padrão: sm) */
  size?: "default" | "sm" | "lg" | "icon";
  /** Classes CSS adicionais */
  className?: string;
  /** Se verdadeiro, mostra um badge de notificação */
  showBadge?: boolean;
  /** Número para exibir no badge */
  badgeCount?: number;
  /** Se verdadeiro, desabilita o botão */
  disabled?: boolean;
}

export function HeaderButton({
  icon: Icon,
  children,
  title,
  onClick,
  variant = "ghost",
  size = "sm",
  className = "",
  showBadge = false,
  badgeCount = 0,
  disabled = false,
}: HeaderButtonProps) {
  const baseClasses =
    "text-white hover:bg-white/20 hover:scale-110 transition-transform duration-200 p-2 dark:text-foreground dark:hover:bg-muted contrast:text-foreground relative group";

  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className={combinedClasses}
      title={title}
      disabled={disabled}
    >
      {/* Renderizar ícone ou conteúdo personalizado */}
      {Icon && <Icon className="w-4 h-4" />}
      {children}

      {/* Badge de notificação */}
      {showBadge && badgeCount > 0 && (
        <span className="absolute -top-1 -right-1 w-4 h-4 text-xs flex items-center justify-center p-0 min-w-4 bg-red-500 text-white rounded-full font-medium group-hover:scale-110 transition-transform will-change-transform z-10">
          {badgeCount > 99 ? "99+" : badgeCount}
        </span>
      )}
    </Button>
  );
}
