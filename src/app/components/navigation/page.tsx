/**
 * hollow-UI - Navigation Demo Page
 * Desenvolvido por Ítalo Soares Campos
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import { Navigation, NavigationItem } from "@/registry/ui/Navigation";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import { Home, User, Settings, FileText, Calendar, Mail } from "lucide-react";

export default function NavigationDemo() {
  const [activeSection, setActiveSection] = useState("home");
  const [customActiveSection, setCustomActiveSection] = useState("inicio");

  // Exemplo de items customizados
  const customItems: NavigationItem[] = [
    {
      id: "inicio",
      label: "Início",
      icon: Home,
      description: "Página inicial da aplicação",
    },
    {
      id: "perfil",
      label: "Perfil",
      icon: User,
      description: "Gerenciar perfil de usuário",
    },
    {
      id: "relatorios",
      label: "Relatórios",
      icon: FileText,
      description: "Visualizar relatórios",
    },
    {
      id: "agenda",
      label: "Agenda",
      icon: Calendar,
      description: "Calendário e agendamentos",
    },
    {
      id: "contato",
      label: "Contato",
      icon: Mail,
      description: "Entre em contato conosco",
    },
    {
      id: "configuracao",
      label: "Configuração",
      icon: Settings,
      description: "Configurações do sistema",
    },
  ];

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
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
            <span className="text-foreground">Navigation</span>
          </div>

          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Navigation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Componente de navegazione responsivo com ícones e configuração
              flexível. Ideal para menus principais, barras laterais e navegação
              horizontal.
            </p>
          </div>

          {/* Navigation Padrão */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Navegação Padrão
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Usando os items padrão definidos no componente:
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <Navigation
                activeSection={activeSection}
                onSectionChange={setActiveSection}
                className=" overflow-x-scroll modal"
              />
            </div>

            <CodeBlock
              title="Uso Básico"
              code={`import { Navigation } from "@/registry/ui/Navigation";

<Navigation />`}
            />
          </section>

          {/* Navigation Customizada */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Navegação Customizada
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Com items personalizados para diferentes seções da aplicação:
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <Navigation
                items={customItems}
                activeSection={customActiveSection}
                onSectionChange={setCustomActiveSection}
                className="overflow-x-scroll modal"
              />
            </div>

            <CodeBlock
              title="Items Customizados"
              code={`import { Navigation } from "@/registry/ui/Navigation";
import { Home, User, Settings, FileText, Calendar, Mail } from "lucide-react";

const customItems = [
  { label: "Início", href: "/", icon: Home },
  { label: "Perfil", href: "/profile", icon: User },
  { label: "Relatórios", href: "/reports", icon: FileText },
  { label: "Agenda", href: "/calendar", icon: Calendar },
  { label: "Contato", href: "/contact", icon: Mail },
  { label: "Configuração", href: "/settings", icon: Settings },
];

<Navigation items={customItems} />`}
            />
          </section>

          {/* Variações de Tamanho */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Variações de Layout
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              O componente se adapta automaticamente para dispositivos móveis e
              desktop:
            </p>

            <div className="space-y-6">
              {/* Desktop View */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Layout Desktop (tela grande)
                </h3>
                <div className="hidden md:block bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <Navigation
                    items={customItems.slice(0, 4)}
                    activeSection={customActiveSection}
                    onSectionChange={setCustomActiveSection}
                    className="overflow-x-scroll modal"
                  />
                </div>
              </div>

              {/* Mobile View */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Layout Mobile (responsivo)
                </h3>
                <div className="md:hidden bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <Navigation
                    items={customItems.slice(0, 3)}
                    activeSection={customActiveSection}
                    onSectionChange={setCustomActiveSection}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Props e Configuração */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Interface e Props
            </h2>

            <CodeBlock
              title="NavigationItem Interface"
              code={`interface NavigationItem {
  label: string;
  href: string;
  icon: React.ComponentType<any>;
}

interface NavigationProps {
  items?: NavigationItem[];
  className?: string;
}`}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Props Disponíveis
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      items
                    </code>{" "}
                    - Array de objetos NavigationItem (opcional)
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      className
                    </code>{" "}
                    - Classes CSS adicionais (opcional)
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Características
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Layout responsivo automático</li>
                  <li>• Suporte a temas (claro/escuro/contraste)</li>
                  <li>• Ícones de lucide-react</li>
                  <li>• Items padrão configuráveis</li>
                  <li>• Navegação com Next.js Link</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
