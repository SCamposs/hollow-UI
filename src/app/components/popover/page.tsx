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
import { Button } from "@/registry/ui/button";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import { Badge } from "@/registry/ui/badge";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import { Switch } from "@/registry/ui/switch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from "@/registry/ui/popover";
import {
  Settings,
  User,
  Calendar,
  HelpCircle,
  Filter,
  MoreHorizontal,
  Info,
  Bell,
  Share,
} from "lucide-react";

export default function PopoverPage() {
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(false);

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
            <span className="text-foreground">Popover</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Popover</h1>
                <Badge variant="secondary" className="mt-2">
                  Overlay
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Componente de overlay flutuante para exibir conteúdo contextual
              quando ativado.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Exemplos de diferentes usos do componente Popover
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4">
                {/* Popover básico */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      <Info className="w-4 h-4 mr-2" />
                      Informações
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="space-y-2">
                      <h4 className="font-medium">Sobre este item</h4>
                      <p className="text-sm text-muted-foreground">
                        Este é um exemplo de popover com informações contextuais
                        sobre um item específico.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>

                {/* Popover com configurações */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      <Settings className="w-4 h-4 mr-2" />
                      Configurações
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">
                          Configurações
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Ajuste suas preferências abaixo.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="notifications"
                            checked={notifications}
                            onCheckedChange={setNotifications}
                          />
                          <Label htmlFor="notifications">Notificações</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch
                            id="auto-save"
                            checked={autoSave}
                            onCheckedChange={setAutoSave}
                          />
                          <Label htmlFor="auto-save">
                            Salvamento automático
                          </Label>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="username">Nome de usuário</Label>
                          <Input id="username" placeholder="Seu nome" />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                {/* Popover com filtros */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      Filtros
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Filtrar resultados</h4>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="status">Status</Label>
                          <select className="w-full p-2 border rounded-md text-sm">
                            <option>Todos</option>
                            <option>Ativo</option>
                            <option>Inativo</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="category">Categoria</Label>
                          <select className="w-full p-2 border rounded-md text-sm">
                            <option>Todas</option>
                            <option>Urgente</option>
                            <option>Normal</option>
                          </select>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            Aplicar
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1"
                          >
                            Limpar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                {/* Menu de ações */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-48">
                    <div className="space-y-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Perfil
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                      >
                        <Bell className="w-4 h-4 mr-2" />
                        Notificações
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                      >
                        <Share className="w-4 h-4 mr-2" />
                        Compartilhar
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Configurações
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>

          {/* Instalação */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Instalação</CardTitle>
              <CardDescription>
                Como instalar e usar o componente Popover
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="Instalação"
                code="npm install @radix-ui/react-popover"
              />

              <CodeBlock
                title="Uso Básico"
                code={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@scmposs/hollow-ui";

<Popover>
  <PopoverTrigger asChild>
    <Button>Abrir Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Conteúdo do popover aqui</p>
  </PopoverContent>
</Popover>`}
              />
            </CardContent>
          </Card>

          {/* API */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>API dos Componentes</CardTitle>
              <CardDescription>
                Propriedades disponíveis para cada parte do Popover
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Popover</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Componente raiz que gerencia o estado do popover.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-2 text-left">
                          Prop
                        </th>
                        <th className="border border-border p-2 text-left">
                          Tipo
                        </th>
                        <th className="border border-border p-2 text-left">
                          Default
                        </th>
                        <th className="border border-border p-2 text-left">
                          Descrição
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-2 font-mono text-sm">
                          open
                        </td>
                        <td className="border border-border p-2">boolean</td>
                        <td className="border border-border p-2">-</td>
                        <td className="border border-border p-2">
                          Estado controlado do popover
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2 font-mono text-sm">
                          onOpenChange
                        </td>
                        <td className="border border-border p-2">function</td>
                        <td className="border border-border p-2">-</td>
                        <td className="border border-border p-2">
                          Callback quando o estado muda
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">PopoverContent</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Contêiner do conteúdo do popover.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-2 text-left">
                          Prop
                        </th>
                        <th className="border border-border p-2 text-left">
                          Tipo
                        </th>
                        <th className="border border-border p-2 text-left">
                          Default
                        </th>
                        <th className="border border-border p-2 text-left">
                          Descrição
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-2 font-mono text-sm">
                          align
                        </td>
                        <td className="border border-border p-2">
                          &quot;start&quot; | &quot;center&quot; |
                          &quot;end&quot;
                        </td>
                        <td className="border border-border p-2">
                          &quot;center&quot;
                        </td>
                        <td className="border border-border p-2">
                          Alinhamento do popover
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2 font-mono text-sm">
                          side
                        </td>
                        <td className="border border-border p-2">
                          &quot;top&quot; | &quot;right&quot; |
                          &quot;bottom&quot; | &quot;left&quot;
                        </td>
                        <td className="border border-border p-2">
                          &quot;bottom&quot;
                        </td>
                        <td className="border border-border p-2">
                          Posição relativa ao trigger
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2 font-mono text-sm">
                          sideOffset
                        </td>
                        <td className="border border-border p-2">number</td>
                        <td className="border border-border p-2">4</td>
                        <td className="border border-border p-2">
                          Distância do trigger em pixels
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-2 font-mono text-sm">
                          className
                        </td>
                        <td className="border border-border p-2">string</td>
                        <td className="border border-border p-2">-</td>
                        <td className="border border-border p-2">
                          Classes CSS adicionais
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Posicionamento */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Posicionamento</CardTitle>
              <CardDescription>
                Diferentes posições e alinhamentos do popover
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-4 items-center">
                  {/* Top */}
                  <div></div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        Top
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent side="top">
                      <p className="text-sm">Popover no topo</p>
                    </PopoverContent>
                  </Popover>
                  <div></div>

                  {/* Left - Center - Right */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        Left
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent side="left">
                      <p className="text-sm">Popover à esquerda</p>
                    </PopoverContent>
                  </Popover>

                  <div className="text-center">
                    <span className="text-sm text-muted-foreground">
                      Center
                    </span>
                  </div>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        Right
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent side="right">
                      <p className="text-sm">Popover à direita</p>
                    </PopoverContent>
                  </Popover>

                  {/* Bottom */}
                  <div></div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        Bottom
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent side="bottom">
                      <p className="text-sm">Popover embaixo</p>
                    </PopoverContent>
                  </Popover>
                  <div></div>
                </div>
              </div>

              <CodeBlock
                title="Posicionamento"
                code={`<Popover>
  <PopoverTrigger asChild>
    <Button>Trigger</Button>
  </PopoverTrigger>
  <PopoverContent side="top" align="start" sideOffset={10}>
    Posicionado no topo, alinhado à esquerda
  </PopoverContent>
</Popover>`}
              />
            </CardContent>
          </Card>

          {/* Popover Controlado */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Popover Controlado</CardTitle>
              <CardDescription>
                Como controlar o estado do popover programaticamente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock
                title="Estado Controlado"
                code={`import { useState } from "react";

export function ControlledPopover() {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button>
          {open ? "Fechar" : "Abrir"} Popover
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <p>Este popover é controlado externamente</p>
          <Button onClick={() => setOpen(false)}>
            Fechar
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}`}
              />
            </CardContent>
          </Card>

          {/* Exemplos Avançados */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos Avançados</CardTitle>
              <CardDescription>
                Implementações mais complexas do Popover
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Formulário em Popover</h4>
                <CodeBlock
                  title="PopoverForm.tsx"
                  code={`import { useState } from "react";

export function PopoverForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Processar formulário
    console.log({ name, email });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Adicionar Usuário</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium">Novo Usuário</h4>
            <p className="text-sm text-muted-foreground">
              Preencha as informações abaixo
            </p>
          </div>
          <div className="space-y-3">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome completo"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@exemplo.com"
              />
            </div>
            <Button type="submit" className="w-full">
              Criar Usuário
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}`}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3">Menu Contextual</h4>
                <CodeBlock
                  title="ContextMenu.tsx"
                  code={`export function ContextMenu({ children }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-48 p-1">
        <div className="space-y-1">
          <MenuItem icon={<Copy />} text="Copiar" shortcut="Ctrl+C" />
          <MenuItem icon={<Cut />} text="Recortar" shortcut="Ctrl+X" />
          <MenuItem icon={<Paste />} text="Colar" shortcut="Ctrl+V" />
          <Separator />
          <MenuItem icon={<Trash />} text="Excluir" shortcut="Del" danger />
        </div>
      </PopoverContent>
    </Popover>
  );
}

function MenuItem({ icon, text, shortcut, danger = false }) {
  return (
    <button
      className={\`flex items-center justify-between w-full px-2 py-1.5 text-sm rounded hover:bg-accent \${
        danger ? "text-destructive" : ""
      }\`}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span>{text}</span>
      </div>
      {shortcut && (
        <span className="text-xs text-muted-foreground">{shortcut}</span>
      )}
    </button>
  );
}`}
                />
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle>Boas Práticas</CardTitle>
              <CardDescription>
                Diretrizes para uso eficaz do Popover
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">
                      ✅ Faça
                    </h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Use para conteúdo contextual e não-crítico</li>
                      <li>Mantenha o conteúdo conciso</li>
                      <li>Forneça formas alternativas de acessar o conteúdo</li>
                      <li>
                        Use posicionamento que não obstrua conteúdo importante
                      </li>
                      <li>Inclua indicadores visuais no trigger</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">
                      ❌ Evite
                    </h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Conteúdo essencial ou crítico</li>
                      <li>Popovers aninhados (popover dentro de popover)</li>
                      <li>Conteúdo muito extenso</li>
                      <li>Triggers muito pequenos para touch devices</li>
                      <li>Abrir automaticamente sem interação do usuário</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 dark:bg-blue-500/20 dark:border-blue-600 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold mb-2">
                    💡 Dica de Acessibilidade
                  </h4>
                  <p className="text-sm">
                    O Popover usa <code>role=&quot;dialog&quot;</code> e
                    gerencia foco automaticamente. Certifique-se de que triggers
                    tenham labels descritivos e que o conteúdo seja navegável
                    via teclado (Tab, Escape para fechar).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
