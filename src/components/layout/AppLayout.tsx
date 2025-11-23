"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";
import { BackToTopButton } from "@/registry/ui/BackToTopButton";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Sidebar } from "./Sidebar";
import { usePathname } from "next/navigation";
import { BasicThemeToggleHeader } from "../ui/BasicThemeToggleHeader";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const showSidebar = !isHomePage;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-12 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center flex-col">
              <div className="flex items-center -translate-x-4.5">
                <Image
                  src="/just-logo.png"
                  alt="hollow-UI logo"
                  width={281}
                  height={281}
                  className="h-9 w-auto mr-1 translate-y-1 dark:hidden block"
                />
                <Image
                  src="/just-logo-white.png"
                  alt="hollow-UI white logo"
                  width={281}
                  height={281}
                  className="h-9 w-auto mr-1 translate-y-1 hidden dark:block"
                />
                <Image
                  src="/just-name.png"
                  alt="hollow-UI"
                  width={452}
                  height={66}
                  className="w-38 h-auto translate-y-0.5 dark:hidden"
                />
                <Image
                  src="/just-name-white.png"
                  alt="hollow-UI"
                  width={452}
                  height={66}
                  className="w-38 h-auto hidden dark:block "
                />
              </div>

              <p className="text-xs text-muted-foreground">
                Por Ítalo Soares Campos
              </p>
            </Link>
            <div className="flex items-center space-x-3">
              <BasicThemeToggleHeader />
              <Link
                href="https://github.com/SCamposs/hollow-UI#hollow-UI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary"
                  disabled={true}
                  title="Repositório do hollow-UI no GitHub atualmente privado"
                >
                  <FaGithub className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Badge variant="outline" className="text-xs">
                v1.0.0
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      {showSidebar ? (
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-48 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 h-screen overflow-hidden">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-x-hidden mr-10">{children}</main>
        </div>
      ) : (
        <main className="flex-1">{children}</main>
      )}

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-muted-foreground">
                Desenvolvido por <strong>Ítalo Soares Campos</strong>
              </span>
            </div>
            <p className="text-muted-foreground">hollow-UI</p>
          </div>
          <div className="text-center mt-6 pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              © 2025 hollow-UI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <BackToTopButton />
    </div>
  );
}
