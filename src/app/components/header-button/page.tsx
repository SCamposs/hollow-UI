/**
 * hollow-UI - HeaderButton Demo Page
 * Desenvolvido por Ítalo Soares Campos
 */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import { HeaderButton } from "@/registry/ui/HeaderButton";

import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import {
  Bell,
  Settings,
  User,
  Search,
  MessageSquare,
  Shield,
  Heart,
  Star,
  Download,
  Upload,
  RefreshCw,
  Plus,
} from "lucide-react";
import Image from "next/image";

export default function HeaderButtonDemo() {
  const [bellCount, setBellCount] = useState(3);
  const [messageCount, setMessageCount] = useState(8);

  const handleBellClick = () => {
    setBellCount((prev) => (prev > 0 ? 0 : 3));
  };

  const handleMessageClick = () => {
    setMessageCount((prev) => (prev > 0 ? 0 : 8));
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-6">
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
            <span className="text-foreground">HeaderButton</span>
          </div>

          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              HeaderButton
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Componente de botão especializado para cabeçalhos de aplicações,
              com suporte a ícones, badges de notificação, conteúdo
              personalizado e temas. Seguindo o padrão do hollow-UI.
            </p>
          </div>

          {/* Exemplo Simples */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Botões Básicos
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              HeaderButtons simples com ícones e tooltips:
            </p>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <HeaderButton
                  icon={Settings}
                  title="Configurações"
                  onClick={() => alert("Configurações clicadas!")}
                />
                <HeaderButton
                  icon={User}
                  title="Perfil do usuário"
                  onClick={() => alert("Perfil clicado!")}
                />
                <HeaderButton
                  icon={Search}
                  title="Buscar"
                  onClick={() => alert("Busca clicada!")}
                />
                <HeaderButton
                  icon={Shield}
                  title="Segurança"
                  onClick={() => alert("Segurança clicada!")}
                />
              </div>
            </div>

            <CodeBlock
              title="Uso Básico"
              code={`import { HeaderButton } from "@/registry/ui/HeaderButton";
import { Settings, User, Search, Shield } from "lucide-react";

<HeaderButton 
  icon={Settings} 
  title="Configurações"
  onClick={() => alert("Configurações clicadas!")}
/>
<HeaderButton 
  icon={User} 
  title="Perfil do usuário"
  onClick={() => alert("Perfil clicado!")}
/>`}
            />
          </section>

          {/* Botões com Badge */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Botões com Badge de Notificação
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              HeaderButtons com badges para indicar notificações ou contadores:
            </p>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <HeaderButton
                  icon={Bell}
                  title="Notificações"
                  onClick={handleBellClick}
                  showBadge={true}
                  badgeCount={bellCount}
                />
                <HeaderButton
                  icon={MessageSquare}
                  title="Mensagens"
                  onClick={handleMessageClick}
                  showBadge={true}
                  badgeCount={messageCount}
                />
                <HeaderButton
                  icon={Star}
                  title="Favoritos"
                  onClick={() => alert("Favoritos!")}
                  showBadge={true}
                  badgeCount={127}
                />
                <HeaderButton
                  icon={Heart}
                  title="Curtidas"
                  onClick={() => alert("Curtidas!")}
                  showBadge={true}
                  badgeCount={15}
                />
              </div>
            </div>

            <CodeBlock
              title="Botões com Badge"
              code={`<HeaderButton 
  icon={Bell}
  title="Notificações"
  onClick={handleBellClick}
  showBadge={true}
  badgeCount={3}
/>
<HeaderButton 
  icon={MessageSquare}
  title="Mensagens" 
  onClick={handleMessageClick}
  showBadge={true}
  badgeCount={8}
/>`}
            />
          </section>

          {/* Conteúdo Personalizado */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Conteúdo Personalizado
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              HeaderButtons com conteúdo personalizado como imagens ou elementos
              personalizados:
            </p>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <HeaderButton
                  title="Assistant"
                  onClick={() => alert("Assistant clicked!")}
                >
                  <Image
                    src="/knight.gif"
                    alt="Assistant"
                    width={375}
                    height={335}
                    className="h-5 w-auto dark:hidden"
                  />
                  <Image
                    src="/knight.gif"
                    alt="Assistant"
                    width={375}
                    height={335}
                    className="h-5 w-auto hidden dark:block"
                  />
                </HeaderButton>

                <HeaderButton
                  title="Logo Example"
                  onClick={() => alert("Logo clicada!")}
                >
                  <Image
                    src="/just-logo.png"
                    alt="Example"
                    width={32}
                    height={32}
                    className="h-4 w-auto"
                  />
                </HeaderButton>

                <HeaderButton
                  title="Texto personalizado"
                  onClick={() => alert("Texto clicado!")}
                >
                  <span className="text-xs font-bold">DEV</span>
                </HeaderButton>
              </div>
            </div>

            <CodeBlock
              title="Conteúdo Personalizado"
              code={`<HeaderButton 
  title="Assistant"
  onClick={() => alert("Assistant clicked!")}
>
  <Image
    src="/knight.gif"
    alt="Assistant"
    width={375}
    height={335}
    className="h-5 w-auto dark:hidden"
  />
  <Image
    src="/knight.gif"
    alt="Assistant"
    width={375}
    height={335}
    className="h-5 w-auto hidden dark:block"
  />
</HeaderButton>

<HeaderButton 
  title="Texto personalizado"
  onClick={() => alert("Texto clicado!")}
>
  <span className="text-xs font-bold">DEV</span>
</HeaderButton>`}
            />
          </section>

          {/* Diferentes Variants */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Variações de Estilo
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              HeaderButtons com diferentes variants do componente Button:
            </p>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 flex-wrap">
                <HeaderButton
                  icon={Download}
                  title="Ghost (padrão)"
                  variant="ghost"
                  onClick={() => alert("Ghost!")}
                />
                <HeaderButton
                  icon={Upload}
                  title="Default"
                  variant="default"
                  onClick={() => alert("Default!")}
                />
                <HeaderButton
                  icon={RefreshCw}
                  title="Secondary"
                  variant="secondary"
                  onClick={() => alert("Secondary!")}
                />
                <HeaderButton
                  icon={Plus}
                  title="Outline"
                  variant="outline"
                  onClick={() => alert("Outline!")}
                />
              </div>
            </div>

            <CodeBlock
              title="Diferentes Variants"
              code={`<HeaderButton 
  icon={Download}
  title="Ghost (padrão)"
  variant="ghost"
  onClick={() => alert("Ghost!")}
/>
<HeaderButton 
  icon={Upload}
  title="Default"
  variant="default"
  onClick={() => alert("Default!")}
/>
<HeaderButton 
  icon={RefreshCw}
  title="Secondary"
  variant="secondary"
  onClick={() => alert("Secondary!")}
/>`}
            />
          </section>

          {/* Estados e Interações */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Estados e Interações
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              HeaderButtons demonstrando diferentes estados
              (habilitado/desabilitado):
            </p>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <HeaderButton
                  icon={Settings}
                  title="Botão habilitado"
                  onClick={() => alert("Habilitado!")}
                />
                <HeaderButton
                  icon={Settings}
                  title="Botão desabilitado"
                  onClick={() => alert("Não deveria funcionar!")}
                  disabled={true}
                />
                <HeaderButton
                  icon={Bell}
                  title="Com badge desabilitado"
                  onClick={() => alert("Não deveria funcionar!")}
                  showBadge={true}
                  badgeCount={5}
                  disabled={true}
                />
              </div>
            </div>

            <CodeBlock
              title="Estados Diferentes"
              code={`<HeaderButton 
  icon={Settings}
  title="Botão habilitado"
  onClick={() => alert("Habilitado!")}
/>
<HeaderButton 
  icon={Settings}
  title="Botão desabilitado"
  onClick={() => alert("Não deveria funcionar!")}
  disabled={true}
/>`}
            />
          </section>

          {/* Exemplo de Header Completo */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Exemplo de Header Completo
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Como seria um header completo usando HeaderButtons (simulando o
              hollow-UI):
            </p>

            <div className="bg-primary text-white p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                  <Image
                    src="/just-logo.png"
                    alt="EXAMPLE"
                    width={1280}
                    height={276}
                    className="h-9 w-max"
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-1">
                  <HeaderButton
                    icon={Bell}
                    title="Notificações"
                    onClick={() => alert("Notificações!")}
                    showBadge={true}
                    badgeCount={5}
                  />

                  <HeaderButton
                    title="Assistant"
                    onClick={() => alert("Assistant clicked!")}
                  >
                    <Image
                      src="/knight.gif"
                      alt="Assistant"
                      width={375}
                      height={335}
                      className="h-5 w-auto dark:hidden"
                    />
                    <Image
                      src="/knight.gif"
                      alt="Assistant"
                      width={375}
                      height={335}
                      className="h-5 w-auto hidden dark:block"
                    />
                  </HeaderButton>

                  <HeaderButton
                    icon={Settings}
                    title="Configurações"
                    onClick={() => alert("Configurações!")}
                  />

                  <HeaderButton
                    icon={User}
                    title="Perfil"
                    onClick={() => alert("Perfil!")}
                  />
                </div>
              </div>
            </div>

            <CodeBlock
              title="Header Completo"
              code={`<div className="bg-red-600 text-white p-4 rounded-lg">
  <div className="flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center">
      <Image src="/just-logo.png" alt="EXAMPLE" className="h-9 w-max" />
    </div>

    {/* Actions */}
    <div className="flex items-center space-x-1">
      <HeaderButton 
        icon={Bell}
        title="Notificações"
        showBadge={true}
        badgeCount={5}
      />
      <HeaderButton 
        title="Assistant"
      >
        <Image src="/knight.gif" alt="Assistant" className="h-5 w-auto dark:hidden" />
        <Image src="/knight.gif" alt="Assistant" className="h-5 w-auto hidden dark:block" />
      </HeaderButton>
      <HeaderButton icon={Settings} title="Configurações" />
      <HeaderButton icon={User} title="Perfil" />
    </div>
  </div>
</div>`}
            />
          </section>

          {/* Props e Interface */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Interface e Props
            </h2>

            <CodeBlock
              title="HeaderButton Interface"
              code={`interface HeaderButtonProps {
  /** Ícone do Lucide React */
  icon?: LucideIcon;
  /** Conteúdo personalizado do botão (para imagens ou outros elementos) */
  children?: React.ReactNode;
  /** Texto do tooltip que aparece ao fazer hover */
  title?: string;
  /** Função executada ao clicar no botão */
  onClick?: () => void;
  /** Variant do botton (padrão: ghost) */
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  /** Tamanho do botão (padrão: sm) */
  size?: "default" | "sm" | "lg" | "icon";
  /** Classes CSS adicionais */
  className?: string;
  /** Se verdadeiro, mostra um badge de notificação */
  showBadge?: boolean;
  /** Número para exibir no badge */
  badgeCount?: number;
  /** Se verdadeiro, desabilita o botão */
  disabled?: boolean;
}`}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Props Principais
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      icon
                    </code>{" "}
                    - Ícone do Lucide React (opcional)
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      children
                    </code>{" "}
                    - Conteúdo personalizado (opcional)
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      title
                    </code>{" "}
                    - Tooltip text (opcional)
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      onClick
                    </code>{" "}
                    - Função de clique (opcional)
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Características
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Estilo otimizado para headers</li>
                  <li>• Badges de notificação automáticos</li>
                  <li>• Suporte a conteúdo personalizado</li>
                  <li>• Hover effects e transições</li>
                  <li>• Totalmente acessível</li>
                  <li>• Suporte completo a temas</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
