"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  /** Título da estatística */
  title: string;
  /** Valor principal a ser exibido */
  value: string | number;
  /** Descrição ou subtítulo opcional */
  description?: string;
  /** Ícone a ser exibido */
  icon?: LucideIcon;
  /** Variante de cor que define o gradiente */
  variant?: "red" | "yellow" | "green" | "blue" | "purple" | "orange" | "gray";
  /** Tamanho do componente */
  size?: "sm" | "md" | "lg";
  /** Classes CSS adicionais */
  className?: string;
  /** Se verdadeiro, exibe apenas o valor sem título */
  compact?: boolean;
}

const gradientVariants = {
  red: "bg-gradient-to-br from-red-200/10 via-red-300/10 to-red-400/10 dark:bg-gradient-to-br dark:from-red-600/10 dark:via-red-700/20 dark:to-red-800/30 contrast:bg-red-900",
  yellow:
    "bg-gradient-to-br from-yellow-200/10 via-yellow-300/10 to-yellow-400/10 dark:bg-gradient-to-br dark:from-yellow-600/10 dark:via-yellow-700/20 dark:to-yellow-800/30 contrast:bg-yellow-900",
  green:
    "bg-gradient-to-br from-green-200/10 via-green-300/10 to-green-400/10 dark:bg-gradient-to-br dark:from-green-600/10 dark:via-green-700/20 dark:to-green-800/30 contrast:bg-green-900",
  blue: "bg-gradient-to-br from-blue-200/10 via-blue-300/10 to-blue-400/10 dark:bg-gradient-to-br dark:from-blue-600/10 dark:via-blue-700/20 dark:to-blue-800/30 contrast:bg-blue-900",
  purple:
    "bg-gradient-to-br from-purple-200/10 via-purple-300/10 to-purple-400/10 dark:bg-gradient-to-br dark:from-purple-600/10 dark:via-purple-700/20 dark:to-purple-800/30 contrast:bg-purple-900",
  orange:
    "bg-gradient-to-br from-orange-200/10 via-orange-300/10 to-orange-400/10 dark:bg-gradient-to-br dark:from-orange-600/10 dark:via-orange-700/20 dark:to-orange-800/30 contrast:bg-orange-900",
  gray: "bg-gradient-to-br from-gray-200/10 via-gray-300/10 to-gray-400/10 dark:bg-gradient-to-br dark:from-gray-600/10 dark:via-gray-700/20 dark:to-gray-800/30 contrast:bg-gray-900",
};

const sizeVariants = {
  sm: {
    container: "p-2",
    value: "text-lg",
    title: "text-xs",
    icon: "w-3 h-3",
  },
  md: {
    container: "p-3",
    value: "text-2xl",
    title: "text-xs",
    icon: "w-4 h-4",
  },
  lg: {
    container: "p-4",
    value: "text-3xl",
    title: "text-sm",
    icon: "w-5 h-5",
  },
};

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  variant = "blue",
  size = "md",
  className,
  compact = false,
}: StatCardProps) {
  const sizeClasses = sizeVariants[size];
  const gradientClass = gradientVariants[variant];

  return (
    <div
      className={cn(
        "text-center rounded-lg border-none",
        gradientClass,
        sizeClasses.container,
        className
      )}
    >
      {/* Ícone (se fornecido e não compacto) */}
      {Icon && !compact && (
        <div className="flex justify-center mb-2">
          <Icon
            className={cn(
              sizeClasses.icon,
              "text-muted-foreground dark:text-foreground"
            )}
          />
        </div>
      )}

      {/* Valor principal */}
      <div className={cn("font-bold text-foreground", sizeClasses.value)}>
        {value}
      </div>

      {/* Título */}
      {!compact && (
        <div
          className={cn(
            "text-muted-foreground dark:text-foreground mt-1",
            sizeClasses.title
          )}
        >
          {title}
        </div>
      )}

      {/* Descrição opcional */}
      {description && !compact && (
        <div
          className={cn(
            "text-muted-foreground/80 dark:text-foreground/80 mt-1",
            "text-xs"
          )}
        >
          {description}
        </div>
      )}

      {/* Layout compacto com ícone inline */}
      {compact && (
        <div className="flex items-center justify-center gap-2 mt-1">
          {Icon && (
            <Icon
              className={cn(
                sizeClasses.icon,
                "text-muted-foreground dark:text-foreground"
              )}
            />
          )}
          <span
            className={cn(
              "text-muted-foreground dark:text-foreground",
              sizeClasses.title
            )}
          >
            {title}
          </span>
        </div>
      )}
    </div>
  );
}

// Componente wrapper para múltiplos StatCards organizados em grid
export interface StatCardGridProps {
  /** Array de props para cada StatCard */
  cards: StatCardProps[];
  /** Número de colunas no grid */
  columns?: 1 | 2 | 3 | 4 | 6;
  /** Gap entre os cards */
  gap?: "sm" | "md" | "lg";
  /** Classes CSS adicionais */
  className?: string;
}

const gridColumns = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
};

const gridGaps = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

export function StatCardGrid({
  cards,
  columns = 2,
  gap = "md",
  className,
}: StatCardGridProps) {
  return (
    <div className={cn("grid", gridColumns[columns], gridGaps[gap], className)}>
      {cards.map((cardProps, index) => (
        <StatCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
