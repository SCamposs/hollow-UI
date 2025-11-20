"use client";

import React from "react";
import { Button } from "@/registry/ui/button";
import { Home, Package, FileText, BookOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const sections = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      href: "/",
      description: "Página inicial do hollow-UI",
    },
    {
      id: "components",
      label: "Componentes",
      icon: Package,
      href: "/components",
      description: "Biblioteca de componentes UI",
    },
    {
      id: "docs",
      label: "Documentação",
      icon: FileText,
      href: "/docs",
      description: "Guias e documentação",
    },
    {
      id: "examples",
      label: "Exemplos",
      icon: BookOpen,
      href: "/examples",
      description: "Exemplos de uso dos componentes",
    },
  ];

  const getActiveSection = () => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/components")) return "components";
    if (pathname.startsWith("/docs")) return "docs";
    if (pathname.startsWith("/examples")) return "examples";
    return "home";
  };

  return (
    <div className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-3.5 py-4 sm:py-6">
          {sections.map((section) => {
            const IconComponent = section.icon;
            const isActive = getActiveSection() === section.id;

            return (
              <Link key={section.id} href={section.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`flex items-center justify-start space-x-1 px-4 sm:px-8 py-3 sm:py-6 rounded-lg transition-all duration-200 min-w-57 w-full sm:w-auto ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md transform scale-[1.02] contrast:bg-secondary/50 contrast:border-2"
                      : "text-muted-foreground shadow-sm hover:text-foreground hover:bg-secondary/50 hover:shadow-md"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold text-sm">{section.label}</div>
                    <div className="text-xs opacity-75 max-w-48 hidden sm:block">
                      {section.description}
                    </div>
                  </div>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
