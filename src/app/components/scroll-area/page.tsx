import React from "react";
import Link from "next/link";
import { Scroll } from "lucide-react";
import { Badge } from "@/registry/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { ScrollArea, ScrollBar } from "@/registry/ui/scroll-area";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";

export default function ScrollAreaPage() {
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
            <span className="text-foreground">Scroll Area</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Scroll className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-4xl font-bold">Scroll Area</h1>
                  <Badge variant="secondary">Layout</Badge>
                </div>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Área com scroll personalizado e estilização consistente.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente ScrollArea com diferentes
                configurações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-muted/20 rounded-md">
                <ScrollArea className="h-72 w-full rounded-md border p-4">
                  <div className="space-y-4">
                    <h4 className="font-medium leading-none">Tags</h4>
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="text-sm border-b pb-2 last:border-0"
                      >
                        Item {i + 1} - Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="scroll-area" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { ScrollArea } from "@scmposs/hollow-ui"

<ScrollArea className="h-72 w-full rounded-md border p-4">
  <div className="space-y-4">
    {items.map((item) => (
      <div key={item.id}>{item.content}</div>
    ))}
  </div>
</ScrollArea>`}
            />
          </section>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Scroll Vertical com Lista</h4>
                <ScrollArea className="h-48 w-full rounded-md border p-4">
                  <div className="space-y-2">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="p-2 border rounded-md hover:bg-muted/50 transition-colors"
                      >
                        Item da lista {i + 1}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <div>
                <h4 className="font-medium mb-3">Scroll Horizontal</h4>
                <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                  <div className="flex w-max space-x-4 p-4">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className="shrink-0 w-64 h-32 rounded-md border bg-muted/50 flex items-center justify-center"
                      >
                        Card {i + 1}
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>

              <div>
                <h4 className="font-medium mb-3">
                  Scroll Vertical e Horizontal
                </h4>
                <ScrollArea className="h-48 w-full rounded-md border">
                  <div className="p-4">
                    <div className="w-[800px] space-y-2">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div key={i} className="p-2 border rounded-md text-sm">
                          Linha {i + 1} - Este conteúdo é largo o suficiente
                          para requerer scroll horizontal além do vertical.
                        </div>
                      ))}
                    </div>
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>

              <div>
                <h4 className="font-medium mb-3">Lista de Tags Horizontal</h4>
                <ScrollArea className="w-full whitespace-nowrap rounded-md border p-4">
                  <div className="flex gap-2">
                    {[
                      "React",
                      "TypeScript",
                      "Next.js",
                      "Tailwind CSS",
                      "Radix UI",
                      "Vercel",
                      "Git",
                      "GitHub",
                      "VS Code",
                      "Node.js",
                      "npm",
                      "pnpm",
                    ].map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </div>
            </CardContent>
          </Card>

          {/* Props */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Props</CardTitle>
              <CardDescription>
                Propriedades do componente ScrollArea
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Prop</th>
                      <th className="text-left py-2 px-4">Tipo</th>
                      <th className="text-left py-2 px-4">Padrão</th>
                      <th className="text-left py-2 px-4">Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4">
                        <code>className</code>
                      </td>
                      <td className="py-2 px-4">string</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Classes CSS adicionais</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">
                        <code>children</code>
                      </td>
                      <td className="py-2 px-4">ReactNode</td>
                      <td className="py-2 px-4">-</td>
                      <td className="py-2 px-4">Conteúdo com scroll</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3">ScrollBar Props</h4>
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Prop</th>
                      <th className="text-left py-2 px-4">Tipo</th>
                      <th className="text-left py-2 px-4">Padrão</th>
                      <th className="text-left py-2 px-4">Descrição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4">
                        <code>orientation</code>
                      </td>
                      <td className="py-2 px-4">
                        &quot;vertical&quot; | &quot;horizontal&quot;
                      </td>
                      <td className="py-2 px-4">&quot;vertical&quot;</td>
                      <td className="py-2 px-4">
                        Orientação da barra de scroll
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                <h4 className="font-medium mb-2">Quando usar</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Para exibir conteúdo que excede o espaço disponível</li>
                  <li>
                    Quando precisar de scrollbars estilizadas consistentes
                  </li>
                  <li>Em listas longas ou conteúdo dinâmico</li>
                  <li>Para galerias horizontais de cards ou imagens</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Evite usar quando</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>O conteúdo couber naturalmente no espaço disponível</li>
                  <li>
                    Precisar de paginação ou carregamento incremental (use
                    paginação)
                  </li>
                  <li>O scroll principal da página já resolve o problema</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Dicas</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Sempre defina uma altura máxima para ScrollArea vertical
                  </li>
                  <li>
                    Use ScrollBar com orientation=&quot;horizontal&quot; para
                    scroll horizontal
                  </li>
                  <li>Combine com border e rounded-md para melhor aparência</li>
                  <li>Adicione padding interno para melhor legibilidade</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Accessibility */}
          <Card>
            <CardHeader>
              <CardTitle>Acessibilidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              <p>
                O componente ScrollArea é baseado no Radix UI ScrollArea e segue
                as melhores práticas de acessibilidade:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Navegação via teclado (setas, Page Up/Down, Home/End)</li>
                <li>Suporte completo para leitores de tela</li>
                <li>Compatível com todos os dispositivos de entrada</li>
                <li>
                  Respeita as preferências de movimento reduzido do sistema
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
