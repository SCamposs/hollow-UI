/**
 * hollow-UI - Header Demo Page
 * Desenvolvido por Ítalo Soares Campos
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import { Header } from "@/registry/ui/Header";

import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import {
  Bell,
  Settings,
  User,
  MessageSquare,
  Shield,
  Heart,
  Star,
  Download,
  Upload,
  Search,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";

export default function HeaderDemo() {
  const [notificationCount, setNotificationCount] = useState(5);
  const [messageCount, setMessageCount] = useState(12);

  // Ações customizadas para diferentes exemplos
  const basicActions = [
    {
      id: "notifications",
      icon: Bell,
      title: "Notificações",
      showBadge: true,
      badgeCount: notificationCount,
      onClick: () => {
        setNotificationCount((prev) => (prev > 0 ? 0 : 5));
        alert("Notificações!");
      },
    },
    {
      id: "settings",
      icon: Settings,
      title: "Configurações",
      onClick: () => alert("Configurações!"),
    },
    {
      id: "profile",
      icon: User,
      title: "Perfil",
      onClick: () => alert("Perfil!"),
    },
  ];

  const extendedActions = [
    {
      id: "search",
      icon: Search,
      title: "Buscar",
      onClick: () => alert("Busca!"),
    },
    {
      id: "messages",
      icon: MessageSquare,
      title: "Mensagens",
      showBadge: true,
      badgeCount: messageCount,
      onClick: () => {
        setMessageCount((prev) => (prev > 0 ? 0 : 12));
        alert("Mensagens!");
      },
    },
    {
      id: "favorites",
      icon: Star,
      title: "Favoritos",
      onClick: () => alert("Favoritos!"),
    },
    {
      id: "help",
      icon: HelpCircle,
      title: "Ajuda",
      onClick: () => alert("Ajuda!"),
    },
  ];

  const socialActions = [
    {
      id: "likes",
      icon: Heart,
      title: "Curtidas",
      showBadge: true,
      badgeCount: 28,
      onClick: () => alert("Curtidas!"),
    },
    {
      id: "downloads",
      icon: Download,
      title: "Downloads",
      onClick: () => alert("Downloads!"),
    },
    {
      id: "uploads",
      icon: Upload,
      title: "Uploads",
      onClick: () => alert("Uploads!"),
    },
  ];

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
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
            <span className="text-foreground">Header</span>
          </div>

          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Header
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Componente de cabeçalho completo e flexível para aplicações,
              seguindo o padrão do hollow-UI. Inclui logo, título, ações
              personalizáveis, theme toggle e menu mobile responsivo.
            </p>
          </div>

          {/* Installation Section */}
          <InstallationSection componentName="header" />

          {/* Nota sobre Logo */}
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 my-6">
            <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
              <span className="text-xl">💡</span> Logo Padrão
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              O componente Header vem com um logo padrão do hollow-UI que se
              adapta automaticamente aos temas claro e escuro. Você pode
              substituí-lo facilmente usando a prop{" "}
              <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                logo
              </code>{" "}
              com seu próprio caminho de imagem ou componente JSX personalizado.
            </p>
          </div>

          {/* Header Básico */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Header Básico
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Header simples com logo, ações padrão e theme toggle:
            </p>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <Header
                actions={basicActions}
                onMobileMenuClick={() => alert("Menu mobile!")}
              />
            </div>

            <CodeBlock
              title="Header Básico"
              code={`import { Header } from "@/registry/ui/Header";
import { Bell, Settings, User } from "lucide-react";

const basicActions = [
  {
    id: "notifications",
    icon: Bell,
    title: "Notificações",
    showBadge: true,
    badgeCount: 5,
    onClick: () => alert("Notificações!"),
  },
  {
    id: "settings",
    icon: Settings,
    title: "Configurações",
    onClick: () => alert("Configurações!"),
  },
  {
    id: "profile", 
    icon: User,
    title: "Perfil",
    onClick: () => alert("Perfil!"),
  },
];

<Header 
  actions={basicActions}
  onMobileMenuClick={() => alert("Menu mobile!")}
/>`}
            />
          </section>

          {/* Header com Título */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Header com Título
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Header incluindo título da aplicação:
            </p>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <Header
                title="Minha Aplicação hollow-UI"
                actions={basicActions}
                onMobileMenuClick={() => alert("Menu mobile!")}
              />
            </div>

            <CodeBlock
              title="Header com Título"
              code={`<Header 
  title="Minha Aplicação hollow-UI"
  actions={basicActions}
  onMobileMenuClick={() => alert("Menu mobile!")}
/>`}
            />
          </section>

          {/* Header Estendido */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Header Estendido
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Header com mais ações, incluindo conteúdo personalizado como o
              Assistente (opcional):
            </p>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <Header
                title="Sistema Completo"
                actions={extendedActions}
                onMobileMenuClick={() => alert("Menu mobile!")}
              />
            </div>

            <CodeBlock
              title="Header Estendido"
              code={`const extendedActions = [
  {
    id: "search",
    icon: Search,
    title: "Buscar",
    onClick: () => alert("Busca!"),
  },
  {
    id: "messages",
    icon: MessageSquare,
    title: "Mensagens",
    showBadge: true,
    badgeCount: 12,
    onClick: () => alert("Mensagens!"),
  },
  {
    id: "assistant",
    title: "Assistente",
    onClick: () => alert("Assistente!"),
    children: (
      <>
        <Image
          src="/assistant1.png"
          alt="assistente"
          width={375}
          height={335}
          className="h-5 w-auto dark:hidden"
        />
        <Image
          src="/assistant1-branco.png"
          alt="assistente"
          width={375}
          height={335}
          className="h-5 w-auto hidden dark:block"
        />
      </>
    ),
  },
];

<Header 
  title="Sistema Completo"
  actions={extendedActions}
/>`}
            />
          </section>

          {/* Header Social */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Header para Aplicação Social
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Exemplo de header para uma aplicação social com diferentes tipos
              de ações:
            </p>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <Header
                title="Social Network"
                actions={socialActions}
                onMobileMenuClick={() => alert("Menu mobile!")}
              />
            </div>

            <CodeBlock
              title="Header Social"
              code={`const socialActions = [
  {
    id: "likes",
    icon: Heart,
    title: "Curtidas",
    showBadge: true,
    badgeCount: 28,
    onClick: () => alert("Curtidas!"),
  },
  {
    id: "downloads",
    icon: Download,
    title: "Downloads",
    onClick: () => alert("Downloads!"),
  },
  {
    id: "uploads",
    icon: Upload,
    title: "Uploads",
    onClick: () => alert("Uploads!"),
  },
];

<Header 
  title="Social Network"
  actions={socialActions}
/>`}
            />
          </section>

          {/* Header Personalizado */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Header Personalizado
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Header com logo personalizado, sem theme toggle e cor de fundo
              diferente:
            </p>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <Header
                logo={
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">UI</span>
                    </div>
                    <span className="text-white font-semibold">CustomApp</span>
                  </div>
                }
                actions={[
                  {
                    id: "shield",
                    icon: Shield,
                    title: "Segurança",
                    onClick: () => alert("Segurança!"),
                  },
                  {
                    id: "settings",
                    icon: Settings,
                    title: "Configurações",
                    onClick: () => alert("Configurações!"),
                  },
                ]}
                showThemeToggle={false}
                backgroundColor="bg-blue-600"
                onMobileMenuClick={() => alert("Menu mobile personalizado!")}
              />
            </div>

            <CodeBlock
              title="Header Personalizado"
              code={`<Header 
  logo={
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">UI</span>
      </div>
      <span className="text-white font-semibold">CustomApp</span>
    </div>
  }
  actions={[
    {
      id: "shield",
      icon: Shield,
      title: "Segurança",
      onClick: () => alert("Segurança!"),
    },
    {
      id: "settings",
      icon: Settings,
      title: "Configurações",
      onClick: () => alert("Configurações!"),
    },
  ]}
  showThemeToggle={false}
  backgroundColor="bg-blue-600"
/>`}
            />
          </section>

          {/* Demonstração Responsiva */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Comportamento Responsivo
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              O Header se adapta automaticamente a diferentes tamanhos de tela:
            </p>

            <div className="grid gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Desktop (com título visível)
                </h3>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <Header
                    title="Sistema Desktop"
                    actions={basicActions.slice(0, 2)}
                    showMobileMenu={false}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Mobile (com botão de menu)
                </h3>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="md:hidden">
                    <Header
                      title="Sistema Mobile"
                      actions={basicActions.slice(0, 1)}
                      onMobileMenuClick={() => alert("Menu mobile aberto!")}
                    />
                  </div>
                  <div className="hidden md:block">
                    <p className="p-4 text-center text-gray-500">
                      Redimensione a janela ou visualize em dispositivo móvel
                      para ver o menu mobile
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dependências */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Dependências
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              O componente Header depende dos seguintes pacotes:
            </p>
            <CodeBlock
              title="Instalar dependências"
              code={`npm install lucide-react next-themes`}
            />
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Componentes Relacionados
                </h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• HeaderButton - Botões de ação do header</li>
                  <li>• ThemeToggle - Alternador de tema</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Utilitários
                </h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>• @/lib/utils - Funções auxiliares</li>
                  <li>• next/image - Otimização de imagens</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Props e Interface */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Interface e Props
            </h2>

            <CodeBlock
              title="Header Interfaces"
              code={`interface HeaderAction {
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

interface HeaderProps {
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
}`}
            />

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Props Principais
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      logo
                    </code>{" "}
                    - Logo como string (path) ou JSX personalizado
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      title
                    </code>{" "}
                    - Título da aplicação (opcional)
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      actions
                    </code>{" "}
                    - Array de ações do header
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      showThemeToggle
                    </code>{" "}
                    - Incluir theme toggle (padrão: true)
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      showMobileMenu
                    </code>{" "}
                    - Mostrar botão menu mobile (padrão: true)
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      backgroundColor
                    </code>{" "}
                    - Cor de fundo personalizada
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Características
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>✓ Layout responsivo automático</li>
                  <li>✓ Menu mobile integrado</li>
                  <li>✓ Theme toggle com suporte a dark mode</li>
                  <li>✓ Ações personalizáveis com badges</li>
                  <li>✓ Suporte a ícones do Lucide React</li>
                  <li>✓ Conteúdo personalizado (imagens, JSX)</li>
                  <li>✓ Logo com suporte automático a temas</li>
                  <li>✓ Acessibilidade com tooltips</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Uso Avançado */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Avançado
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Logo Personalizado com Temas
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Você pode usar imagens diferentes para tema claro e escuro:
                </p>
                <CodeBlock
                  title="Logo com tema"
                  code={`<Header 
  logo={
    <>
      <Image
        src="/logo-light.png"
        alt="Logo"
        width={200}
        height={50}
        className="h-9 w-auto dark:hidden"
      />
      <Image
        src="/logo-dark.png"
        alt="Logo"
        width={200}
        height={50}
        className="h-9 w-auto hidden dark:block"
      />
    </>
  }
  actions={actions}
/>`}
                />
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Ações com Estado Dinâmico
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Badges podem ser atualizados dinamicamente:
                </p>
                <CodeBlock
                  title="Estado dinâmico"
                  code={`const [notifications, setNotifications] = useState(5);

const actions = [
  {
    id: "notifications",
    icon: Bell,
    title: "Notificações",
    showBadge: true,
    badgeCount: notifications,
    onClick: () => {
      setNotifications(0); // Limpar notificações
    },
  },
];

<Header actions={actions} />`}
                />
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Integração com Sistema de Navegação
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Conecte o header com um menu lateral:
                </p>
                <CodeBlock
                  title="Com menu lateral"
                  code={`const [isMenuOpen, setIsMenuOpen] = useState(false);

<Header 
  title="Minha Aplicação"
  onMobileMenuClick={() => setIsMenuOpen(!isMenuOpen)}
  actions={actions}
/>

{isMenuOpen && (
  <MobileSidebar 
    isOpen={isMenuOpen}
    onClose={() => setIsMenuOpen(false)}
  />
)}`}
                />
              </div>
            </div>
          </section>

          {/* Botão do assistente removido dos exemplos */}
          <div className="pt-8">
            {/* Botão do assistente removido dos exemplos */}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
