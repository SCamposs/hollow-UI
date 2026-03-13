"use client";

import React, { useState } from "react";
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
import { InstallationSection } from "@/components/ui/InstallationSection";
import { Badge } from "@/registry/ui/badge";
import { NavRail, type NavRailItem } from "@/registry/ui/NavRail";
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Bell,
  BarChart3,
  ShieldCheck,
  Layers,
  Navigation2,
} from "lucide-react";

// ─── Demo data ────────────────────────────────────────────────────────────────

const demoItems: NavRailItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "users", label: "Usuários", icon: Users },
  { id: "reports", label: "Relatórios", icon: BarChart3 },
  { id: "documents", label: "Documentos", icon: FileText },
  { id: "notifications", label: "Notificações", icon: Bell },
  {
    id: "permissions",
    label: "Permissões",
    icon: ShieldCheck,
    disabled: true,
    disabledMessage: "Módulo indisponível",
  },
  { id: "settings", label: "Configurações", icon: Settings },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NavRailPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

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
            <span className="text-foreground">NavRail</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 rounded-lg flex items-center justify-center">
                <Navigation2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">NavRail</h1>
                <Badge variant="secondary" className="mt-2">
                  Padrão hollow-UI
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Trilho de navegação vertical colapsável com suporte a drawer
              mobile, itens desabilitados e três variantes de estilo.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                NavRail interativo — abra em tela grande para ver o comportamento
                colapsável. Em telas menores, use o botão flutuante.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border border-border rounded-lg min-h-64 flex overflow-hidden">
                <NavRail
                  items={demoItems}
                  value={activeTab}
                  onValueChange={setActiveTab}
                  defaultCollapsed={false}
                  variant="default"
                />
                <div className="flex-1 p-6 bg-background">
                  <p className="text-sm text-muted-foreground">
                    Aba ativa:{" "}
                    <span className="font-medium text-foreground">
                      {demoItems.find((i) => i.id === activeTab)?.label ??
                        activeTab}
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Instalação</CardTitle>
              <CardDescription>Via CLI hollow-UI</CardDescription>
            </CardHeader>
            <CardContent>
              <InstallationSection componentName="nav-rail" />
            </CardContent>
          </Card>

          {/* Basic Usage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Uso Básico</CardTitle>
              <CardDescription>
                Definindo items e controlando o estado ativo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="NavRail básico"
                code={`import { useState } from "react";
import { NavRail, type NavRailItem } from "@scmposs/hollow-ui";
import { LayoutDashboard, Users, Settings } from "lucide-react";

const items: NavRailItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "users",     label: "Usuários",  icon: Users },
  { id: "settings",  label: "Config.",   icon: Settings },
];

export function AppShell() {
  const [tab, setTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen">
      <NavRail items={items} value={tab} onValueChange={setTab} />
      <main className="flex-1 p-6">{/* conteúdo */}</main>
    </div>
  );
}`}
              />
            </CardContent>
          </Card>

          {/* Variants */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Variantes</CardTitle>
              <CardDescription>
                Três aparências disponíveis via prop <code>variant</code>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {(["default", "ghost", "solid"] as const).map((v) => (
                <div key={v} className="space-y-2">
                  <h4 className="text-sm font-medium capitalize">{v}</h4>
                  <div className="border border-border rounded-lg flex overflow-hidden h-48">
                    <NavRailVariantPreview variant={v} />
                    <div className="flex-1 p-4 bg-background text-xs text-muted-foreground">
                      variant=&quot;{v}&quot;
                    </div>
                  </div>
                </div>
              ))}

              <CodeBlock
                title="Variantes"
                code={`<NavRail variant="default" items={items} value={tab} onValueChange={setTab} />
<NavRail variant="ghost"   items={items} value={tab} onValueChange={setTab} />
<NavRail variant="solid"   items={items} value={tab} onValueChange={setTab} />`}
              />
            </CardContent>
          </Card>

          {/* Sizes */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Tamanhos</CardTitle>
              <CardDescription>
                Controle a altura dos itens com a prop <code>size</code>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="Tamanhos"
                code={`<NavRail size="sm" items={items} value={tab} onValueChange={setTab} />
<NavRail size="md" items={items} value={tab} onValueChange={setTab} />
<NavRail size="lg" items={items} value={tab} onValueChange={setTab} />`}
              />
            </CardContent>
          </Card>

          {/* Controlled collapse */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Colapso Controlado</CardTitle>
              <CardDescription>
                Controle o estado colapsado externamente via{" "}
                <code>collapsed</code> e <code>onCollapsedChange</code>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="Controlled collapse"
                code={`const [collapsed, setCollapsed] = useState(false);

<NavRail
  items={items}
  value={tab}
  onValueChange={setTab}
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
/>`}
              />
            </CardContent>
          </Card>

          {/* Disabled items */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Itens Desabilitados</CardTitle>
              <CardDescription>
                Use <code>disabled</code> e <code>disabledMessage</code> para
                indicar funcionalidades indisponíveis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="Item desabilitado"
                code={`const items: NavRailItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  {
    id: "admin",
    label: "Admin",
    icon: ShieldCheck,
    disabled: true,
    disabledMessage: "Somente para administradores",
  },
];`}
              />
            </CardContent>
          </Card>

          {/* API */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>API do Componente</CardTitle>
              <CardDescription>
                Propriedades disponíveis para NavRail e NavRailItem
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">NavRail</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border text-sm">
                    <thead>
                      <tr className="bg-muted">
                        {["Prop", "Tipo", "Padrão", "Descrição"].map((h) => (
                          <th
                            key={h}
                            className="border border-border p-2 text-left"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["items", "NavRailItem[]", "—", "Lista de itens de navegação"],
                        ["value", "string", "—", "Id do item ativo"],
                        ["onValueChange", "(value: string) => void", "—", "Callback de mudança de aba"],
                        ["collapsed", "boolean", "undefined", "Estado colapsado controlado"],
                        ["defaultCollapsed", "boolean", "false", "Estado colapsado inicial (não controlado)"],
                        ["onCollapsedChange", "(v: boolean) => void", "—", "Callback de colapso"],
                        ["variant", '"default" | "ghost" | "solid"', '"default"', "Aparência do container"],
                        ["size", '"sm" | "md" | "lg"', '"md"', "Altura dos itens"],
                        ["className", "string", "—", "Classes extras para o container desktop"],
                      ].map(([prop, type, def, desc]) => (
                        <tr key={prop}>
                          <td className="border border-border p-2 font-mono text-xs">{prop}</td>
                          <td className="border border-border p-2 text-xs">{type}</td>
                          <td className="border border-border p-2 text-xs">{def}</td>
                          <td className="border border-border p-2 text-xs">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">NavRailItem</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border text-sm">
                    <thead>
                      <tr className="bg-muted">
                        {["Prop", "Tipo", "Padrão", "Descrição"].map((h) => (
                          <th
                            key={h}
                            className="border border-border p-2 text-left"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["id", "string", "—", "Identificador único do item"],
                        ["label", "string", "—", "Texto exibido ao expandir"],
                        ["icon", "React.ElementType", "—", "Ícone Lucide ou qualquer componente"],
                        ["disabled", "boolean", "false", "Desabilita o item"],
                        ["disabledMessage", "string", "—", "Tooltip exibido ao passar o mouse num item desabilitado"],
                      ].map(([prop, type, def, desc]) => (
                        <tr key={prop}>
                          <td className="border border-border p-2 font-mono text-xs">{prop}</td>
                          <td className="border border-border p-2 text-xs">{type}</td>
                          <td className="border border-border p-2 text-xs">{def}</td>
                          <td className="border border-border p-2 text-xs">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full example */}
          <Card>
            <CardHeader>
              <CardTitle>Exemplo Completo</CardTitle>
              <CardDescription>
                Integração com conteúdo dinâmico por aba
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="AppShell.tsx"
                code={`"use client";

import { useState } from "react";
import { NavRail, type NavRailItem } from "@scmposs/hollow-ui";
import {
  LayoutDashboard, Users, BarChart3,
  FileText, Settings, ShieldCheck,
} from "lucide-react";

const items: NavRailItem[] = [
  { id: "dashboard",   label: "Dashboard",    icon: LayoutDashboard },
  { id: "users",       label: "Usuários",     icon: Users },
  { id: "reports",     label: "Relatórios",   icon: BarChart3 },
  { id: "documents",   label: "Documentos",   icon: FileText },
  {
    id: "permissions",
    label: "Permissões",
    icon: ShieldCheck,
    disabled: true,
    disabledMessage: "Em breve",
  },
  { id: "settings",    label: "Configurações", icon: Settings },
];

const views: Record<string, React.ReactNode> = {
  dashboard:   <div>Dashboard</div>,
  users:       <div>Usuários</div>,
  reports:     <div>Relatórios</div>,
  documents:   <div>Documentos</div>,
  settings:    <div>Configurações</div>,
};

export function AppShell() {
  const [tab, setTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-background">
      <NavRail
        items={items}
        value={tab}
        onValueChange={setTab}
        variant="default"
        size="md"
      />
      <main className="flex-1 p-6 overflow-auto">
        {views[tab] ?? <div>Selecione uma aba</div>}
      </main>
    </div>
  );
}`}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const previewItems: NavRailItem[] = [
  { id: "a", label: "Item A", icon: Layers },
  { id: "b", label: "Item B", icon: Users },
  { id: "c", label: "Item C", icon: Settings },
];

function NavRailVariantPreview({
  variant,
}: {
  variant: "default" | "ghost" | "solid";
}) {
  const [active, setActive] = useState("a");
  return (
    <NavRail
      items={previewItems}
      value={active}
      onValueChange={setActive}
      variant={variant}
      defaultCollapsed={false}
    />
  );
}
