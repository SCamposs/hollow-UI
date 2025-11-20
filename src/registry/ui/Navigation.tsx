"use client";

import { Button } from "./button";
import {
  LayoutDashboard,
  FileSpreadsheet,
  Car,
  FileChartColumnIncreasing,
  ClipboardList,
  LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
}

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  items?: NavigationItem[];
  className?: string;
}

const defaultItems: NavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    description: "Visão geral e estatísticas",
  },
  {
    id: "reports",
    label: "Relatórios",
    icon: FileChartColumnIncreasing,
    description: "Gerador de relatórios",
  },
  {
    id: "data",
    label: "Dados",
    icon: FileSpreadsheet,
    description: "Gerenciamento de dados",
  },
  {
    id: "tracking",
    label: "Acompanhamento",
    icon: ClipboardList,
    description: "Acompanhamento detalhado",
  },
  {
    id: "resources",
    label: "Recursos",
    icon: Car,
    description: "Gerenciamento de recursos",
  },
];

export function Navigation({
  activeSection,
  onSectionChange,
  items = defaultItems,
  className = "",
}: NavigationProps) {
  return (
    <div className={`bg-card border-b border-border shadow-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-3.5 py-4 sm:py-6">
          {items.map((item) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => onSectionChange(item.id)}
                className={`flex items-center justify-start space-x-1 px-4 sm:px-8 py-3 sm:py-6 rounded-lg transition-all duration-200 min-w-57 w-full sm:w-auto ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground shadow-md transform scale-[1.02] contrast:bg-secondary/50 contrast:border-2"
                    : "text-muted-foreground shadow-sm hover:text-foreground hover:bg-secondary/50 hover:shadow-md"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-semibold text-sm">{item.label}</div>
                  <div className="text-xs opacity-75 max-w-48 hidden sm:block">
                    {item.description}
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
