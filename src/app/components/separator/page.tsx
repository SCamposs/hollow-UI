"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "@/registry/ui/separator";
import { Badge } from "@/registry/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import { Minus } from "lucide-react";

export default function SeparatorPage() {
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
            <span className="text-foreground">Separator</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg flex items-center justify-center">
                <Minus className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Separator</h1>
                <Badge variant="secondary" className="mt-2">
                  Layout
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Linha divisória visual para separar conteúdo e seções.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Separator
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 p-6 bg-muted/20 rounded-md">
                <div>
                  <p className="text-sm">Seção 1</p>
                  <Separator className="my-4" />
                  <p className="text-sm">Seção 2</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="separator" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">Uso Básico</h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { Separator } from "@scmposs/hollow-ui"

<div>
  <p>Conteúdo acima</p>
  <Separator />
  <p>Conteúdo abaixo</p>
</div>`}
            />
          </section>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
              <CardDescription>
                Diferentes casos de uso do componente Separator
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Horizontal */}
              <div>
                <h4 className="font-medium mb-3">
                  Separator Horizontal (Padrão)
                </h4>
                <div className="space-y-1 p-4 border rounded-md">
                  <div className="text-sm font-medium">Título Principal</div>
                  <Separator className="my-2" />
                  <p className="text-sm text-muted-foreground">
                    Conteúdo da seção separado visualmente
                  </p>
                </div>
                <CodeBlock
                  code={`<div className="space-y-1">
  <div className="text-sm font-medium">Título Principal</div>
  <Separator className="my-2" />
  <p className="text-sm text-muted-foreground">
    Conteúdo da seção separado visualmente
  </p>
</div>`}
                />
              </div>

              {/* Vertical */}
              <div>
                <h4 className="font-medium mb-3">Separator Vertical</h4>
                <div className="flex items-center gap-3 p-4 border rounded-md h-20">
                  <span className="text-sm">Item 1</span>
                  <Separator orientation="vertical" />
                  <span className="text-sm">Item 2</span>
                  <Separator orientation="vertical" />
                  <span className="text-sm">Item 3</span>
                </div>
                <CodeBlock
                  code={`<div className="flex items-center gap-3 h-20">
  <span>Item 1</span>
  <Separator orientation="vertical" />
  <span>Item 2</span>
  <Separator orientation="vertical" />
  <span>Item 3</span>
</div>`}
                />
              </div>

              {/* Em menu */}
              <div>
                <h4 className="font-medium mb-3">Em Menus e Listas</h4>
                <Card>
                  <CardContent className="pt-6 space-y-1">
                    <div className="px-2 py-1.5 text-sm font-medium">
                      Configurações
                    </div>
                    <Separator />
                    <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-muted rounded-sm">
                      Perfil
                    </button>
                    <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-muted rounded-sm">
                      Preferências
                    </button>
                    <Separator className="my-1" />
                    <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-muted rounded-sm text-destructive">
                      Sair
                    </button>
                  </CardContent>
                </Card>
                <CodeBlock
                  code={`<div className="space-y-1">
  <div className="px-2 py-1.5 text-sm font-medium">Configurações</div>
  <Separator />
  <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-muted rounded-sm">
    Perfil
  </button>
  <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-muted rounded-sm">
    Preferências
  </button>
  <Separator className="my-1" />
  <button className="w-full text-left px-2 py-1.5 text-sm hover:bg-muted rounded-sm text-destructive">
    Sair
  </button>
</div>`}
                />
              </div>

              {/* Em grid */}
              <div>
                <h4 className="font-medium mb-3">Em Grid Layout</h4>
                <div className="grid grid-cols-3 gap-4 p-4 border rounded-md">
                  <div className="text-center">
                    <div className="text-2xl font-bold">150</div>
                    <div className="text-sm text-muted-foreground">Total</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Separator orientation="vertical" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">45</div>
                    <div className="text-sm text-muted-foreground">Ativos</div>
                  </div>
                </div>
                <CodeBlock
                  code={`<div className="grid grid-cols-3 gap-4">
  <div className="text-center">
    <div className="text-2xl font-bold">150</div>
    <div className="text-sm text-muted-foreground">Total</div>
  </div>
  <div className="flex items-center justify-center">
    <Separator orientation="vertical" />
  </div>
  <div className="text-center">
    <div className="text-2xl font-bold">45</div>
    <div className="text-sm text-muted-foreground">Ativos</div>
  </div>
</div>`}
                />
              </div>

              {/* Com espaçamento customizado */}
              <div>
                <h4 className="font-medium mb-3">Espaçamento Customizado</h4>
                <div className="space-y-2 p-4 border rounded-md">
                  <p className="text-sm">Espaçamento pequeno</p>
                  <Separator className="my-1" />
                  <p className="text-sm">Espaçamento médio</p>
                  <Separator className="my-4" />
                  <p className="text-sm">Espaçamento grande</p>
                  <Separator className="my-8" />
                  <p className="text-sm">Final</p>
                </div>
                <CodeBlock
                  code={`<div>
  <p>Espaçamento pequeno</p>
  <Separator className="my-1" />
  
  <p>Espaçamento médio</p>
  <Separator className="my-4" />
  
  <p>Espaçamento grande</p>
  <Separator className="my-8" />
</div>`}
                />
              </div>
            </CardContent>
          </Card>

          {/* Props */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Propriedades</CardTitle>
              <CardDescription>
                Props disponíveis para o componente Separator
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4">Prop</th>
                      <th className="text-left py-3 pr-4">Tipo</th>
                      <th className="text-left py-3 pr-4">Padrão</th>
                      <th className="text-left py-3">Descrição</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">
                        orientation
                      </td>
                      <td className="py-3 pr-4">&quot;horizontal&quot; | &quot;vertical&quot;</td>
                      <td className="py-3 pr-4">&quot;horizontal&quot;</td>
                      <td className="py-3">Orientação do separator</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">
                        decorative
                      </td>
                      <td className="py-3 pr-4">boolean</td>
                      <td className="py-3 pr-4">true</td>
                      <td className="py-3">
                        Se é apenas decorativo (não semântico)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">className</td>
                      <td className="py-3 pr-4">string</td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">Classes CSS customizadas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-muted/50 rounded-md">
                <p className="text-sm text-muted-foreground">
                  <strong>Nota:</strong> Baseado em Radix UI Separator. Quando{" "}
                  <code>decorative=false</code>, o separator tem
                  role=&quot;separator&quot; para leitores de tela.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Guidelines */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Diretrizes de Uso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">✅ Quando usar</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Para dividir seções de conteúdo relacionado</li>
                  <li>Em menus dropdown e listas</li>
                  <li>Entre grupos de botões ou ações</li>
                  <li>Para criar hierarquia visual</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">❌ Quando evitar</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Como borda de elementos (use border ao invés)</li>
                  <li>Entre cada item de uma lista longa</li>
                  <li>Quando o espaçamento já indica separação clara</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">💡 Dicas</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Use margin (my-* ou mx-*) para controlar espaçamento</li>
                  <li>
                    Separator vertical precisa de altura definida no container
                  </li>
                  <li>Mantenha consistente com o design system</li>
                  <li>
                    Use decorative=true para separadores puramente visuais
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Accessibility */}
          <Card>
            <CardHeader>
              <CardTitle>Acessibilidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Por padrão, <code>decorative=true</code> torna o separator
                  invisível para leitores de tela
                </li>
                <li>
                  Use <code>decorative=false</code> quando o separator tem
                  significado semântico
                </li>
                <li>
                  Separadores verticais precisam de{" "}
                  <code>orientation=&quot;vertical&quot;</code> explícito
                </li>
                <li>Baseado em padrões ARIA do Radix UI</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
