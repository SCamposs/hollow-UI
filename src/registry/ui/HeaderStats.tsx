/**
 * Component: header-stats
 * Developed by: Ítalo Soares Campos
 * Library: @scmposs/hollow-ui
 * Homepage: https://github.com/SCamposs/hollow-ui
 */

/**
 * hollow-UI - HeaderStats Components
 * Developed by Ítalo Soares Campos
 *
 * HeaderStats: Responsive grid (1 column mobile, 2 tablet, 4 desktop)
 * HeaderStatsGrid: Fixed 2x2 grid (always 2 columns)
 * HeaderStatCardMini: Smaller and more compact version
 */

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { LucideIcon } from "lucide-react";

interface HeaderStatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
  onClick?: () => void;
}

function HeaderStatCard({
  title,
  value,
  description,
  icon: Icon,
  borderColor,
  iconBgColor,
  iconColor,
  onClick,
}: HeaderStatCardProps) {
  return (
    <div className="card-3d-effect">
      <Card
        className={`${borderColor} shadow-sm hover:shadow-md cursor-pointer gap-2`}
        onClick={onClick}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          <div
            className={`h-8 w-8 ${iconBgColor} rounded-lg flex items-center justify-center`}
          >
            <Icon className={`w-4 h-4 ${iconColor}`} />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-black/80 dark:text-white contrast:text-white">
            {value}
          </div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}

interface HeaderStatCardMiniProps {
  title: string;
  icon: LucideIcon;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
  value?: string | number;
  description: string;
}

export function HeaderStatCardMini({
  title,
  icon: Icon,
  borderColor,
  iconBgColor,
  iconColor,
  value,
  description,
}: HeaderStatCardMiniProps) {
  // Versão menor e mais compacta e sem a animação 3d do card / ainda com value
  return (
    <Card className={`${borderColor} shadow-sm gap-0 py-3`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div
          className={`h-10 w-10 ${iconBgColor} rounded-lg flex items-center justify-center`}
        >
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-black/80 dark:text-white contrast:text-white">
          {value !== undefined ? value : "-"}
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

interface HeaderStatCardCompactProps {
  title: string;
  value?: string | number;
  description?: string;
  icon: LucideIcon;
  borderColor: string;
  iconBgColor: string;
  iconColor: string;
  badgeValue?: string | number;
  progressValue?: number;
  hasShadow?: boolean;
  shadowColor?: string;
}

export function HeaderStatCardCompact({
  title,
  value,
  description,
  icon: Icon,
  borderColor,
  iconBgColor,
  iconColor,
  badgeValue,
  progressValue,
  hasShadow = false,
  shadowColor = "slate",
}: HeaderStatCardCompactProps) {
  // Versão super compacta inline (sem Card wrapper)

  // Mapeamento de cores de sombra (Tailwind requer classes completas)
  const shadowColorMap: { [key: string]: string } = {
    slate:
      "shadow-md hover:shadow-lg dark:shadow-slate-900/30 dark:hover:shadow-slate-900/50",
    purple:
      "shadow-md hover:shadow-lg dark:shadow-purple-900/30 dark:hover:shadow-purple-900/50",
    green:
      "shadow-md hover:shadow-lg dark:shadow-green-900/30 dark:hover:shadow-green-900/50",
    blue: "shadow-md hover:shadow-lg dark:shadow-blue-900/30 dark:hover:shadow-blue-900/50",
    red: "shadow-md hover:shadow-lg dark:shadow-red-900/30 dark:hover:shadow-red-900/50",
    yellow:
      "shadow-md hover:shadow-lg dark:shadow-yellow-900/30 dark:hover:shadow-yellow-900/50",
    orange:
      "shadow-md hover:shadow-lg dark:shadow-orange-900/30 dark:hover:shadow-orange-900/50",
    indigo:
      "shadow-md hover:shadow-lg dark:shadow-indigo-900/30 dark:hover:shadow-indigo-900/50",
    pink: "shadow-md hover:shadow-lg dark:shadow-pink-900/30 dark:hover:shadow-pink-900/50",
    teal: "shadow-md hover:shadow-lg dark:shadow-teal-900/30 dark:hover:shadow-teal-900/50",
  };

  const shadowClass = hasShadow
    ? shadowColorMap[shadowColor] || shadowColorMap.slate
    : "";

  // Determina a cor da barra de progresso baseado no valor
  const getProgressColor = (value: number) => {
    if (value <= 33) return "bg-red-500";
    if (value <= 66) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div
      className={`flex group items-center gap-3 p-3 bg-muted/30 dark:bg-muted/10 rounded-lg ${borderColor} ${shadowClass} transition-shadow duration-200`}
    >
      <div className={`p-2 ${iconBgColor} rounded-lg`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <div className="flex-1">
        {badgeValue !== undefined ? (
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-muted">
              {badgeValue}
            </span>
          </div>
        ) : (
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
        )}
        {value !== undefined && (
          <p className="text-lg font-bold text-foreground">{value}</p>
        )}
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {progressValue !== undefined && (
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-muted mt-2">
            <div
              className={`h-full ${getProgressColor(
                progressValue
              )} transition-all duration-200 opacity-80 group-hover:opacity-100`}
              style={{ width: `${progressValue}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

interface HeaderStatsProps {
  stats: Array<{
    title: string;
    value: string | number;
    description: string;
    icon: LucideIcon;
    borderColor: string;
    iconBgColor: string;
    iconColor: string;
    onClick?: () => void;
  }>;
}

export function HeaderStats({ stats }: HeaderStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-0">
      {stats.map((stat, index) => (
        <HeaderStatCard key={index} {...stat} />
      ))}
    </div>
  );
}

interface HeaderStatsGridProps {
  stats: Array<{
    title: string;
    value: string | number;
    description: string;
    icon: LucideIcon;
    borderColor: string;
    iconBgColor: string;
    iconColor: string;
    onClick?: () => void;
  }>;
  columns?: number;
}

export function HeaderStatsGrid({ stats, columns = 2 }: HeaderStatsGridProps) {
  return (
    <div
      className={`grid gap-4 mb-5`}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {stats.map((stat, index) => (
        <HeaderStatCard key={index} {...stat} />
      ))}
    </div>
  );
}
