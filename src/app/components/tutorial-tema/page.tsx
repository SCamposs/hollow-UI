"use client";

import React from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Badge } from "@/registry/ui/badge";
import { Palette, Sun, Moon, Eye, FileCode, Settings } from "lucide-react";

export default function TutorialTemaPage() {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/components" className="hover:text-foreground">
              Componentes
            </Link>
            <span>/</span>
            <span className="text-foreground">Guia de Tema</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Guia de Tema</h1>
                <Badge variant="secondary" className="mt-2">
                  Guia de Uso
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Aprenda como configurar o sistema de temas em seu projeto React
              usando este framework como base.
            </p>
          </div>

          {/* Introdução */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Por que configurar manualmente?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Para evitar conflitos de dependências entre diferentes versões
                do React e problemas com <code>createContext</code>,
                recomendamos implementar o sistema de temas manualmente em seu
                projeto. Isso garante maior compatibilidade e controle sobre o
                tema.
              </p>
              <div className="bg-amber-50 border border-amber-200 dark:bg-amber-500/20 dark:border-amber-600 rounded-lg p-4">
                <p className="text-sm text-black dark:text-white contrast:text-black">
                  <strong>💡 Dica:</strong> Esta abordagem é mais robusta e
                  permite customizações específicas para seu projeto.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Passo 1: CSS Base */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>1. Configuração do CSS Base</CardTitle>
              <CardDescription>
                Configure as variáveis CSS para os três temas: Light, Dark e
                High Contrast
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="globals.css"
                code={`@import "tailwindcss";
@import "tw-animate-css";

/* hollow-UI Framework Styles - Developed by Ítalo Soares Campos */

@custom-variant dark (&:is(.dark *));
@custom-variant contrast (&:is(.contrast *));

:root {
  --radius: 0.625rem;
  --background: #ffffff;
  --foreground: #1f2937;
  --card: #ffffff;
  --card-foreground: #1f2937;
  --popover: #ffffff;
  --popover-foreground: #1f2937;
  --primary: #2e4a78;
  --primary-foreground: #ffffff;
  --secondary: #f8fafc;
  --secondary-foreground: #374151;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;
  --accent: #3d5fa8;
  --accent-foreground: #ffffff;
  --destructive: #dc2626;
  --border: #e2e8f0;
  --input: #e2e8f0;
  --ring: #2e4a78;
  --chart-1: #2e4a78;
  --chart-2: #3d5fa8;
  --chart-3: #6b8fd4;
  --chart-4: #94b3e8;
  --chart-5: #bdd4f7;
}

.dark {
  --background: #0f172a;
  --foreground: #f8fafc;
  --card: #1e293b;
  --card-foreground: #f8fafc;
  --popover: #1e293b;
  --popover-foreground: #f8fafc;
  --primary: #5b7fc7;
  --primary-foreground: #ffffff;
  --secondary: #334155;
  --secondary-foreground: #f8fafc;
  --muted: #334155;
  --muted-foreground: #94a3b8;
  --accent: #7a9de5;
  --accent-foreground: #ffffff;
  --destructive: #ef4444;
  --border: #334155;
  --input: #334155;
  --ring: #5b7fc7;
  --chart-1: #5b7fc7;
  --chart-2: #7a9de5;
  --chart-3: #9ab8f0;
  --chart-4: #64748b;
  --chart-5: #94a3b8;
}

.contrast {
  --background: #000000;
  --foreground: #ffffff;
  --card: #000000;
  --card-foreground: #ffffff;
  --popover: #000000;
  --popover-foreground: #ffffff;
  --primary: #ffff00;
  --primary-foreground: #ffffff;
  --secondary: #1a1a1a;
  --secondary-foreground: #ffffff;
  --muted: #000000;
  --muted-foreground: #ffffff;
  --accent: #3d5fa8;
  --accent-foreground: #ffffff;
  --destructive: #ff0000;
  --border: #ffff00;
  --input: #000000;
  --ring: #3d5fa8;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}`}
              />
            </CardContent>
          </Card>

          {/* Passo 2: Context Implementation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>2. Implementação do Context</CardTitle>
              <CardDescription>
                Crie o contexto de tema em seu projeto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="contexts/ThemeContext.tsx"
                code={`"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "contrast";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Recupera o tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && ["light", "dark", "contrast"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Aplica o tema ao documento
    const root = document.documentElement;
    root.classList.remove("light", "dark", "contrast");
    root.classList.add(theme);

    // Salva no localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => {
      switch (current) {
        case "light":
          return "dark";
        case "dark":
          return "contrast";
        case "contrast":
          return "light";
        default:
          return "light";
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeContext };`}
              />
            </CardContent>
          </Card>

          {/* Passo 3: Theme Toggle Component */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>3. Componente de Toggle de Tema</CardTitle>
              <CardDescription>
                Crie um componente para alternar entre os temas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="components/ThemeToggle.tsx"
                code={`"use client";

import * as React from "react";
import { Sun, Moon, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-4 h-4" />;
      case "dark":
        return <Moon className="w-4 h-4" />;
      case "contrast":
        return <Eye className="w-4 h-4" />;
      default:
        return <Sun className="w-4 h-4" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Modo Claro";
      case "dark":
        return "Modo Escuro";
      case "contrast":
        return "Alto Contraste";
      default:
        return "Modo Claro";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-foreground hover:bg-primary/80 hover:scale-110 transition-transform duration-200 p-2"
          title={getLabel()}
        >
          {getIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center gap-2"
        >
          <Sun className="w-4 h-4 hover:text-primary" />
          Modo Claro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2"
        >
          <Moon className="w-4 h-4 hover:text-primary" />
          Modo Escuro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("contrast")}
          className="flex items-center gap-2"
        >
          <Eye className="w-4 h-4 hover:text-primary" />
          Alto Contraste
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`}
              />
            </CardContent>
          </Card>

          {/* Passo 4: Layout Integration */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>4. Integração no Layout</CardTitle>
              <CardDescription>
                Como integrar o ThemeProvider no seu layout principal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="app/layout.tsx"
                code={`import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Meu App",
  description: "App com sistema de temas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={poppins.variable}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}
              />
            </CardContent>
          </Card>

          {/* Passo 5: Usage Example */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>5. Exemplo de Uso no Header</CardTitle>
              <CardDescription>
                Como usar o ThemeToggle em seu header ou navbar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="components/Header.tsx"
                code={`"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">Meu App</h1>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Outros botões do header */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}`}
              />
            </CardContent>
          </Card>

          {/* Tailwind Config */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>6. Configuração do Tailwind CSS</CardTitle>
              <CardDescription>
                Configure o Tailwind para usar as variáveis CSS dos temas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="tailwind.config.js"
                code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`}
              />
            </CardContent>
          </Card>

          {/* Dicas Adicionais */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Dicas Importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-5 h-5 mt-0.5 text-yellow-500" />
                  <div>
                    <strong>Modo Claro:</strong> Ideal para trabalho durante o
                    dia, oferece melhor legibilidade em ambientes bem
                    iluminados.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Moon className="w-5 h-5 mt-0.5 text-blue-500" />
                  <div>
                    <strong>Modo Escuro:</strong> Reduz o cansaço visual em
                    ambientes com pouca luz e economiza bateria em telas OLED.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 mt-0.5 text-purple-500" />
                  <div>
                    <strong>Alto Contraste:</strong> Melhora a acessibilidade
                    para usuários com deficiências visuais.
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 dark:bg-blue-500/20 dark:border-blue-600 rounded-lg p-4 mt-6">
                <p className="text-sm">
                  <strong>📋 Checklist de Implementação:</strong>
                </p>
                <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                  <li>✅ Configurar variáveis CSS no globals.css</li>
                  <li>✅ Criar o ThemeContext</li>
                  <li>✅ Implementar o ThemeToggle</li>
                  <li>✅ Adicionar ThemeProvider no layout</li>
                  <li>✅ Configurar o Tailwind CSS</li>
                  <li>✅ Testar todos os três temas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Referência de Implementação */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCode className="w-5 h-5" />
                Referência: hollow-UI
              </CardTitle>
              <CardDescription>
                Este tutorial é baseado na implementação real do framework
                hollow-UI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Este framework foi desenvolvido com este mesmo sistema de temas
                e serve como referência de implementação. Você pode encontrar os
                arquivos completos no repositório do projeto.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">
                      Arquivos Principais
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-1">
                    <div>
                      <code>src/contexts/ThemeContext.tsx</code>
                    </div>
                    <div>
                      <code>src/app/globals.css</code>
                    </div>
                    <div>
                      <code>src/components/ui/ThemeToggle.tsx</code>
                    </div>
                    <div>
                      <code>tailwind.config.ts</code>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">
                      Componentes que Usam
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-1">
                    <div>
                      <code>src/components/layout/Header.tsx</code>
                    </div>
                    <div>
                      <code>src/components/layout/AppLayout.tsx</code>
                    </div>
                    <div>
                      <code>src/app/layout.tsx</code>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
