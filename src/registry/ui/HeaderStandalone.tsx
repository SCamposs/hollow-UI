/**
 * hollow-UI - Header Component Standalone
 * Standalone version without Next.js dependency
 * Developed by Ítalo Soares Campos
 */

"use client";

import React from "react";
import { HeaderButton } from "./HeaderButton";
import { ThemeToggleStandalone } from "./ThemeToggleStandalone";
import { Bell, Settings, User, Menu, LucideIcon } from "lucide-react";

interface HeaderAction {
  /** Identificador único da ação */
  id: string;
  /** Ícone do Lucide React */
  icon?: LucideIcon;
  /** Conteúdo personalizado (para imagens, texto, etc.) */
  children?: React.ReactNode;
  /** Tooltip do botão */
  title?: string;
  /** Função executada ao clicar */
  onClick?: () => void;
  /** Mostrar badge de notificação */
  showBadge?: boolean;
  /** Número do badge */
  badgeCount?: number;
  /** Se verdadeiro, desabilita a ação */
  disabled?: boolean;
}

interface HeaderStandaloneProps {
  /** Logo da aplicação (caminho ou componente) */
  logo?: string | React.ReactNode;
  /** Título da aplicação */
  title?: string;
  /** Array de ações do header */
  actions?: HeaderAction[];
  /** Se verdadeiro, inclui o ThemeToggle automaticamente */
  showThemeToggle?: boolean;
  /** Se verdadeiro, mostra o botão de menu mobile */
  showMobileMenu?: boolean;
  /** Função do menu mobile */
  onMobileMenuClick?: () => void;
  /** Cor de fundo personalizada */
  backgroundColor?: string;
  /** Classes CSS adicionais */
  className?: string;
}

const defaultActions: HeaderAction[] = [
  {
    id: "notifications",
    icon: Bell,
    title: "Notificações",
    showBadge: true,
    badgeCount: 0,
  },
  {
    id: "settings",
    icon: Settings,
    title: "Configurações",
  },
  {
    id: "profile",
    icon: User,
    title: "Perfil do usuário",
  },
];

export function HeaderStandalone({
  logo = "/hollow-logo.png",
  title,
  actions = defaultActions,
  showThemeToggle = true,
  showMobileMenu = true,
  onMobileMenuClick,
  backgroundColor = "bg-primary",
  className = "",
}: HeaderStandaloneProps) {
  return (
    <div
      className={`${backgroundColor} border-b-2 border-primary text-white shadow-lg dark:bg-card dark:text-foreground dark:border-b-2 dark:border-[#9a1c1f] contrast:bg-card contrast:text-foreground contrast:border-b-2 contrast:border-[#9a1c1f] ${className}`}
    >
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Título */}
          <div className="flex items-center gap-3">
            {/* Menu Mobile */}
            {showMobileMenu && (
              <div className="md:hidden">
                <HeaderButton
                  icon={Menu}
                  title="Menu"
                  onClick={onMobileMenuClick}
                />
              </div>
            )}

            {/* Logo */}
            <div className="flex items-center">
              {typeof logo === "string" ? (
                <img
                  src={logo}
                  alt="Logo"
                  width={1280}
                  height={276}
                  className="h-9 w-max"
                />
              ) : (
                logo
              )}
            </div>

            {/* Título */}
            {title && (
              <h1 className="text-lg font-semibold text-white dark:text-foreground contrast:text-foreground hidden sm:block">
                {title}
              </h1>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-1">
            {/* Ações customizadas */}
            {actions.map((action) => (
              <HeaderButton
                key={action.id}
                icon={action.icon}
                title={action.title}
                onClick={action.onClick}
                showBadge={action.showBadge}
                badgeCount={action.badgeCount}
                disabled={action.disabled}
              >
                {action.children}
              </HeaderButton>
            ))}

            {/* Theme Toggle */}
            {showThemeToggle && <ThemeToggleStandalone />}
          </div>
        </div>
      </div>
    </div>
  );
}
