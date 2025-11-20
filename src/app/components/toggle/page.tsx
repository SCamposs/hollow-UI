"use client";

import React from "react";
import Link from "next/link";
import { Toggle } from "@/registry/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group";
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
import {
  ToggleLeft,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from "lucide-react";

export default function TogglePage() {
  const [pressed, setPressed] = React.useState(false);
  const [boldPressed, setBoldPressed] = React.useState(false);
  const [italicPressed, setItalicPressed] = React.useState(false);
  const [underlinePressed, setUnderlinePressed] = React.useState(false);
  const [alignment, setAlignment] = React.useState("left");
  const [formatting, setFormatting] = React.useState<string[]>([]);

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
            <span className="text-foreground">Toggle & Toggle Group</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <ToggleLeft className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Toggle & Toggle Group</h1>
                <Badge variant="secondary" className="mt-2">
                  Interactive
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Botões de alternância para estados binários e seleção de opções.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização dos componentes Toggle e Toggle Group
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 p-6 bg-muted/20 rounded-md">
                <div>
                  <p className="text-sm font-medium mb-3">Toggle Simples</p>
                  <Toggle aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </Toggle>
                </div>
                <div>
                  <p className="text-sm font-medium mb-3">Toggle Group</p>
                  <ToggleGroup type="single" defaultValue="left">
                    <ToggleGroupItem value="left" aria-label="Align left">
                      <AlignLeft className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="center" aria-label="Align center">
                      <AlignCenter className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="right" aria-label="Align right">
                      <AlignRight className="h-4 w-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="toggle" />
          <InstallationSection componentName="toggle-group" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">Uso Básico</h2>
            <CodeBlock
              title="Toggle"
              code={`import { Toggle } from "@scmposs/hollow-ui"
import { Bold } from "lucide-react"

<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>`}
            />
            <CodeBlock
              title="Toggle Group"
              code={`import { ToggleGroup, ToggleGroupItem } from "@scmposs/hollow-ui"

<ToggleGroup type="single">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`}
            />
          </section>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
              <CardDescription>
                Diferentes casos de uso dos componentes Toggle e Toggle Group
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Basic Toggle */}
              <div>
                <h4 className="font-medium mb-3">Toggle Básico</h4>
                <div className="flex items-center gap-4 p-4 border rounded-md">
                  <Toggle
                    pressed={pressed}
                    onPressedChange={setPressed}
                    aria-label="Toggle feature"
                  >
                    {pressed ? "Ativado" : "Desativado"}
                  </Toggle>
                  <span className="text-sm text-muted-foreground">
                    Estado: {pressed ? "Pressionado" : "Normal"}
                  </span>
                </div>
                <CodeBlock
                  code={`const [pressed, setPressed] = useState(false);

<Toggle
  pressed={pressed}
  onPressedChange={setPressed}
  aria-label="Toggle feature"
>
  {pressed ? "Ativado" : "Desativado"}
</Toggle>`}
                />
              </div>

              {/* Toggle with Icons */}
              <div>
                <h4 className="font-medium mb-3">Toggle com Ícones</h4>
                <div className="flex items-center gap-2 p-4 border rounded-md">
                  <Toggle
                    pressed={boldPressed}
                    onPressedChange={setBoldPressed}
                    aria-label="Toggle bold"
                  >
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    pressed={italicPressed}
                    onPressedChange={setItalicPressed}
                    aria-label="Toggle italic"
                  >
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    pressed={underlinePressed}
                    onPressedChange={setUnderlinePressed}
                    aria-label="Toggle underline"
                  >
                    <Underline className="h-4 w-4" />
                  </Toggle>
                </div>
                <CodeBlock
                  code={`import { Bold, Italic, Underline } from "lucide-react"

<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>
<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>
<Toggle aria-label="Toggle underline">
  <Underline className="h-4 w-4" />
</Toggle>`}
                />
              </div>

              {/* Toggle Variants */}
              <div>
                <h4 className="font-medium mb-3">Variantes do Toggle</h4>
                <div className="flex items-center gap-4 p-4 border rounded-md">
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Default</p>
                    <Toggle variant="default" aria-label="Default variant">
                      <Bold className="h-4 w-4" />
                    </Toggle>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Outline</p>
                    <Toggle variant="outline" aria-label="Outline variant">
                      <Bold className="h-4 w-4" />
                    </Toggle>
                  </div>
                </div>
                <CodeBlock
                  code={`<Toggle variant="default">
  <Bold className="h-4 w-4" />
</Toggle>

<Toggle variant="outline">
  <Bold className="h-4 w-4" />
</Toggle>`}
                />
              </div>

              {/* Toggle Sizes */}
              <div>
                <h4 className="font-medium mb-3">Tamanhos do Toggle</h4>
                <div className="flex items-center gap-4 p-4 border rounded-md">
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Small</p>
                    <Toggle size="sm" aria-label="Small size">
                      <Bold className="h-3 w-3" />
                    </Toggle>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Default</p>
                    <Toggle size="default" aria-label="Default size">
                      <Bold className="h-4 w-4" />
                    </Toggle>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Large</p>
                    <Toggle size="lg" aria-label="Large size">
                      <Bold className="h-5 w-5" />
                    </Toggle>
                  </div>
                </div>
                <CodeBlock
                  code={`<Toggle size="sm">
  <Bold className="h-3 w-3" />
</Toggle>

<Toggle size="default">
  <Bold className="h-4 w-4" />
</Toggle>

<Toggle size="lg">
  <Bold className="h-5 w-5" />
</Toggle>`}
                />
              </div>

              {/* ToggleGroup Single */}
              <div>
                <h4 className="font-medium mb-3">
                  ToggleGroup - Seleção Única
                </h4>
                <div className="space-y-4 p-4 border rounded-md">
                  <ToggleGroup
                    type="single"
                    value={alignment}
                    onValueChange={(value) => value && setAlignment(value)}
                  >
                    <ToggleGroupItem value="left" aria-label="Align left">
                      <AlignLeft className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="center" aria-label="Align center">
                      <AlignCenter className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="right" aria-label="Align right">
                      <AlignRight className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="justify" aria-label="Align justify">
                      <AlignJustify className="h-4 w-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <p className="text-sm text-muted-foreground">
                    Alinhamento selecionado: {alignment}
                  </p>
                </div>
                <CodeBlock
                  code={`const [alignment, setAlignment] = useState("left");

<ToggleGroup
  type="single"
  value={alignment}
  onValueChange={(value) => value && setAlignment(value)}
>
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="justify" aria-label="Align justify">
    <AlignJustify className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
                />
              </div>

              {/* ToggleGroup Multiple */}
              <div>
                <h4 className="font-medium mb-3">
                  ToggleGroup - Seleção Múltipla
                </h4>
                <div className="space-y-4 p-4 border rounded-md">
                  <ToggleGroup
                    type="multiple"
                    value={formatting}
                    onValueChange={setFormatting}
                  >
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                      <Bold className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                      <Italic className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="underline"
                      aria-label="Toggle underline"
                    >
                      <Underline className="h-4 w-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <p className="text-sm text-muted-foreground">
                    Formatação ativa:{" "}
                    {formatting.length > 0 ? formatting.join(", ") : "Nenhuma"}
                  </p>
                </div>
                <CodeBlock
                  code={`const [formatting, setFormatting] = useState<string[]>([]);

<ToggleGroup
  type="multiple"
  value={formatting}
  onValueChange={setFormatting}
>
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
                />
              </div>

              {/* ToggleGroup Outline */}
              <div>
                <h4 className="font-medium mb-3">
                  ToggleGroup - Variante Outline
                </h4>
                <div className="p-4 border rounded-md">
                  <ToggleGroup
                    type="single"
                    variant="outline"
                    defaultValue="center"
                  >
                    <ToggleGroupItem value="left" aria-label="Align left">
                      <AlignLeft className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="center" aria-label="Align center">
                      <AlignCenter className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="right" aria-label="Align right">
                      <AlignRight className="h-4 w-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
                <CodeBlock
                  code={`<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
                />
              </div>

              {/* Disabled States */}
              <div>
                <h4 className="font-medium mb-3">Estados Desabilitados</h4>
                <div className="space-y-4 p-4 border rounded-md">
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Toggle Desabilitado
                    </p>
                    <Toggle disabled aria-label="Disabled toggle">
                      <Bold className="h-4 w-4" />
                    </Toggle>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">
                      ToggleGroup Desabilitado
                    </p>
                    <ToggleGroup type="single" disabled>
                      <ToggleGroupItem value="left">
                        <AlignLeft className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="center">
                        <AlignCenter className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem value="right">
                        <AlignRight className="h-4 w-4" />
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                </div>
                <CodeBlock
                  code={`<Toggle disabled>
  <Bold className="h-4 w-4" />
</Toggle>

<ToggleGroup type="single" disabled>
  <ToggleGroupItem value="left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
                />
              </div>
            </CardContent>
          </Card>

          {/* Props - Toggle */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Propriedades - Toggle</CardTitle>
              <CardDescription>
                Props disponíveis para o componente Toggle
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
                      <td className="py-3 pr-4 font-mono text-xs">variant</td>
                      <td className="py-3 pr-4">&quot;default&quot; | &quot;outline&quot;</td>
                      <td className="py-3 pr-4">&quot;default&quot;</td>
                      <td className="py-3">Estilo visual do toggle</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">size</td>
                      <td className="py-3 pr-4">&quot;default&quot; | &quot;sm&quot; | &quot;lg&quot;</td>
                      <td className="py-3 pr-4">&quot;default&quot;</td>
                      <td className="py-3">Tamanho do toggle</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">pressed</td>
                      <td className="py-3 pr-4">boolean</td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">Estado pressionado (controlado)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">
                        defaultPressed
                      </td>
                      <td className="py-3 pr-4">boolean</td>
                      <td className="py-3 pr-4">false</td>
                      <td className="py-3">
                        Estado pressionado inicial (não controlado)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">
                        onPressedChange
                      </td>
                      <td className="py-3 pr-4">
                        (pressed: boolean) =&gt; void
                      </td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">Callback quando o estado muda</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">disabled</td>
                      <td className="py-3 pr-4">boolean</td>
                      <td className="py-3 pr-4">false</td>
                      <td className="py-3">Desabilita o toggle</td>
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
                  <strong>Nota:</strong> Baseado em Radix UI Toggle. O
                  componente exporta também <code>toggleVariants</code> para uso
                  customizado com <code>cva</code>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Props - ToggleGroup */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Propriedades - ToggleGroup</CardTitle>
              <CardDescription>
                Props disponíveis para o componente ToggleGroup
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
                      <td className="py-3 pr-4 font-mono text-xs">type</td>
                      <td className="py-3 pr-4">&quot;single&quot; | &quot;multiple&quot;</td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">Modo de seleção (obrigatório)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">value</td>
                      <td className="py-3 pr-4">string | string[]</td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">
                        Valor(es) selecionado(s) (controlado)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">
                        defaultValue
                      </td>
                      <td className="py-3 pr-4">string | string[]</td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">
                        Valor(es) inicial(is) (não controlado)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">
                        onValueChange
                      </td>
                      <td className="py-3 pr-4">(value) =&gt; void</td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">Callback quando a seleção muda</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">variant</td>
                      <td className="py-3 pr-4">&quot;default&quot; | &quot;outline&quot;</td>
                      <td className="py-3 pr-4">&quot;default&quot;</td>
                      <td className="py-3">Estilo visual dos itens</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">size</td>
                      <td className="py-3 pr-4">&quot;default&quot; | &quot;sm&quot; | &quot;lg&quot;</td>
                      <td className="py-3 pr-4">&quot;default&quot;</td>
                      <td className="py-3">Tamanho dos itens</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">disabled</td>
                      <td className="py-3 pr-4">boolean</td>
                      <td className="py-3 pr-4">false</td>
                      <td className="py-3">Desabilita todos os itens</td>
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
            </CardContent>
          </Card>

          {/* Props - ToggleGroupItem */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Propriedades - ToggleGroupItem</CardTitle>
              <CardDescription>
                Props disponíveis para o componente ToggleGroupItem
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
                      <td className="py-3 pr-4 font-mono text-xs">value</td>
                      <td className="py-3 pr-4">string</td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">
                        Valor único do item (obrigatório)
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">variant</td>
                      <td className="py-3 pr-4">&quot;default&quot; | &quot;outline&quot;</td>
                      <td className="py-3 pr-4">Herda do grupo</td>
                      <td className="py-3">Sobrescreve variante do grupo</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">size</td>
                      <td className="py-3 pr-4">&quot;default&quot; | &quot;sm&quot; | &quot;lg&quot;</td>
                      <td className="py-3 pr-4">Herda do grupo</td>
                      <td className="py-3">Sobrescreve tamanho do grupo</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">disabled</td>
                      <td className="py-3 pr-4">boolean</td>
                      <td className="py-3 pr-4">false</td>
                      <td className="py-3">Desabilita apenas este item</td>
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
                  <strong>Nota:</strong> Baseado em Radix UI Toggle Group. Use
                  dentro de um componente <code>ToggleGroup</code>.
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
                  <li>
                    Para opções de formatação de texto (negrito, itálico, etc.)
                  </li>
                  <li>Configurações de visualização (grid/lista)</li>
                  <li>Alinhamento de conteúdo</li>
                  <li>Filtros que podem ser ativados/desativados</li>
                  <li>Estados binários visualmente evidentes</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">❌ Quando evitar</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Para ações que não são estados (use Button)</li>
                  <li>Em formulários complexos (use Checkbox ou Switch)</li>
                  <li>Para muitas opções (use Select ou RadioGroup)</li>
                  <li>Quando o estado não é imediatamente visível</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">💡 Dicas</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Sempre forneça aria-label descritivo para ícones</li>
                  <li>Use ToggleGroup para opções relacionadas</li>
                  <li>
                    type=&quot;single&quot; quando apenas uma opção pode estar ativa
                  </li>
                  <li>
                    type=&quot;multiple&quot; quando várias opções podem estar ativas
                    simultaneamente
                  </li>
                  <li>Prefira ícones reconhecíveis do lucide-react</li>
                  <li>Mantenha o estado pressionado visualmente claro</li>
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
                  <strong>Sempre use aria-label:</strong> Especialmente
                  importante quando o toggle contém apenas ícones
                </li>
                <li>
                  <strong>Estado pressionado:</strong> Automaticamente exposto
                  via <code>aria-pressed</code>
                </li>
                <li>
                  <strong>Navegação por teclado:</strong> Space ou Enter para
                  ativar/desativar
                </li>
                <li>
                  <strong>ToggleGroup:</strong> Suporta navegação com setas (←→)
                  entre itens
                </li>
                <li>
                  <strong>Foco visível:</strong> Indicador de foco para
                  navegação por teclado
                </li>
                <li>
                  <strong>Estados disabled:</strong> Respeitam semântica HTML e
                  são anunciados por leitores de tela
                </li>
                <li>
                  <strong>Radix UI:</strong> Baseado em componentes primitivos
                  com suporte completo a ARIA
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
