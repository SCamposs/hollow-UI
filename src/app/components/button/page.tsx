"use client";

import Link from "next/link";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/ui/card";
import React, { useState } from "react";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import Image from "next/image";
import { ArrowDown, ChevronDown, FunnelX } from "lucide-react";

export default function ButtonPage() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    if (isAnimating) return; // Evita múltiplas animações simultâneas

    setIsAnimating(true);

    // Para a animação após 8 segundos (mais lenta)
    setTimeout(() => {
      setIsAnimating(false);
    }, 8000);
  };

  return (
    <AppLayout>
      {/* Animação dos personagens */}
      {isAnimating && (
        <>
          {/* Hornet - anda da direita para esquerda (na frente) */}
          <div className="fixed top-20 right-0 z-50 animate-[walkLeft_8s_linear_forwards]">
            <Image
              src="/hornet.gif"
              alt="Hornet walking"
              width={80}
              height={80}
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Knight - anda da direita para esquerda (atrás, posição inicial mais à direita) */}
          <div
            className="fixed top-20 z-45 animate-[walkLeftDelayed_8s_linear_forwards]"
            style={{ right: "-140px" }}
          >
            <Image
              src="/knight.gif"
              alt="Knight walking"
              width={80}
              height={80}
              className="object-contain"
              unoptimized
            />
          </div>
        </>
      )}

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
            <span className="text-foreground">Button</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Button</h1>
            <p className="text-xl text-muted-foreground">
              Exibe um botão ou um componente que se parece com um botão.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Button com diferentes configurações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center p-6 bg-muted/20 rounded-md">
                <Button onClick={handleButtonClick} disabled={isAnimating}>
                  {isAnimating ? (
                    <>
                      Personagens em movimento!{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <title>Hollow-knight SVG Icon</title>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M24.636 18.777c-6.75 0-11.069 1.765-11.069 1.765s-3.61-2.433-3.483-5.327s3.61-5.884 3.595-6.44s-1.575-.255-1.639-1.098s1.988-2.513 1.161-3.101s-7.283 2.163-7.283 11.227c0 7.387 5.01 9.113 5.534 10.321c.312.718-.003 8.32 2.83 13.215c2.275 3.928 7.183 4.281 10.449 4.135c4.977-.222 9.796-1.463 11.02-6.154s.239-9.987.716-11.005s6.2-5.42 5.566-11.498c-.715-6.87-5.8-11.38-7.506-9.86c-.731.653 1.352 2.18 1.256 2.99s-1.176.16-1.351 1.002s3.578 3.515 3.212 6.663c-.366 3.15-2.036 4.612-2.862 4.66s-5.741-1.495-10.146-1.495"
                        />
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18.207 31.998c2.735-.462 4.122 2.256 4.132 4.403s-1.084 3.178-2.765 3.189s-3.515-1.497-3.634-4.284c-.12-2.788 1.367-3.156 2.267-3.308m13.008-.133c-2.735-.461-4.122 2.256-4.133 4.404s1.085 3.178 2.766 3.189s3.514-1.497 3.634-4.285s-1.367-3.156-2.267-3.308"
                        />
                      </svg>
                    </>
                  ) : (
                    "Clique em mim"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="button" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { Button } from "@scmposs/hollow-ui"

        export default function MyComponent() {
          return <Button variant="outline">Button</Button>
        }`}
            />
          </section>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Variantes</h4>
                <div className="flex flex-wrap gap-4 p-4 bg-muted/20 rounded-md">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="clearFilter">
                    <FunnelX className="w-4 h-4" />
                    Limpar Filtros
                    {/* Efeito de reflexo */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out"></div>
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Tamanhos</h4>
                <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-md">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">😂</Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Com ícones</h4>
                <div className="flex gap-4 p-4 bg-muted/20 rounded-md">
                  <Button>
                    <ChevronDown className=" h-4 w-4" />
                    Com ícone
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronDown className=" h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Clear Filter Button Example */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Button Limpar Filtros</CardTitle>
              <CardDescription>
                Variação especial com efeito de reflexo para limpar filtros
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Exemplo Visual</h4>
                <div className="flex justify-center p-6 bg-muted/20 rounded-md">
                  <Button
                    variant="clearFilter"
                    className="w-full sm:w-auto flex items-center gap-1"
                  >
                    <FunnelX className="w-5 h-5" />
                    <span className="relative z-10">Limpar</span>
                    {/* Efeito de reflexo */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out"></div>
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Código de Exemplo</h4>
                <CodeBlock
                  title="Button Limpar Filtros"
                  code={`import { Button } from "@scmposs/hollow-ui"
import { FunnelX } from "lucide-react"

export default function MyComponent() {
  return (
    <Button
      variant="clearFilter"
      onClick={() => console.log('Filtros limpos!')}
      className="w-full sm:w-auto flex items-center gap-1 relative overflow-hidden group"
    >
      <FunnelX className="w-5 h-5" />
      <span className="relative z-10">Limpar</span>
      {/* Efeito de reflexo */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out"></div>
    </Button>
  )
}`}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
