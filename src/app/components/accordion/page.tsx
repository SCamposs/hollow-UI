import React from "react";
import Link from "next/link";
import { Badge } from "@/registry/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion";
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

export default function AccordionPage() {
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
            <span className="text-foreground">Accordion</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold">Accordion</h1>
              <Badge variant="secondary">Navegação</Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Lista verticalmente empilhável de cabeçalhos que revelam ou
              ocultam conteúdo associado.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Accordion com diferentes
                configurações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-muted/20 rounded-md">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>É acessível?</AccordionTrigger>
                    <AccordionContent>
                      Sim. O componente segue o padrão WAI-ARIA para acordeões e
                      é totalmente acessível via teclado.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>É estilizável?</AccordionTrigger>
                    <AccordionContent>
                      Sim. O componente usa Tailwind CSS e pode ser totalmente
                      customizado através de classes CSS.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>É animado?</AccordionTrigger>
                    <AccordionContent>
                      Sim. As transições são suaves e podem ser personalizadas
                      através de CSS ou classes Tailwind.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="accordion" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@scmposs/hollow-ui"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Pergunta 1</AccordionTrigger>
    <AccordionContent>
      Resposta para a primeira pergunta.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Pergunta 2</AccordionTrigger>
    <AccordionContent>
      Resposta para a segunda pergunta.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
            />
          </section>

          {/* Props */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Propriedades</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Accordion</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4">Prop</th>
                        <th className="text-left py-2 pr-4">Tipo</th>
                        <th className="text-left py-2 pr-4">Padrão</th>
                        <th className="text-left py-2">Descrição</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">type</td>
                        <td className="py-2 pr-4">
                          &quot;single&quot; | &quot;multiple&quot;
                        </td>
                        <td className="py-2 pr-4">-</td>
                        <td className="py-2">
                          Define se um ou múltiplos itens podem ser abertos
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">collapsible</td>
                        <td className="py-2 pr-4">boolean</td>
                        <td className="py-2 pr-4">false</td>
                        <td className="py-2">
                          Permite fechar todos os itens (apenas
                          type=&quot;single&quot;)
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">defaultValue</td>
                        <td className="py-2 pr-4">string | string[]</td>
                        <td className="py-2 pr-4">-</td>
                        <td className="py-2">
                          Valor(es) inicial(is) do accordion
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">value</td>
                        <td className="py-2 pr-4">string | string[]</td>
                        <td className="py-2 pr-4">-</td>
                        <td className="py-2">Valor controlado do accordion</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">onValueChange</td>
                        <td className="py-2 pr-4">function</td>
                        <td className="py-2 pr-4">-</td>
                        <td className="py-2">Callback quando o valor muda</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">disabled</td>
                        <td className="py-2 pr-4">boolean</td>
                        <td className="py-2 pr-4">false</td>
                        <td className="py-2">Desabilita todo o accordion</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">AccordionItem</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4">Prop</th>
                        <th className="text-left py-2 pr-4">Tipo</th>
                        <th className="text-left py-2 pr-4">Padrão</th>
                        <th className="text-left py-2">Descrição</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">value</td>
                        <td className="py-2 pr-4">string</td>
                        <td className="py-2 pr-4">-</td>
                        <td className="py-2">Identificador único do item</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">disabled</td>
                        <td className="py-2 pr-4">boolean</td>
                        <td className="py-2 pr-4">false</td>
                        <td className="py-2">
                          Desabilita este item específico
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">className</td>
                        <td className="py-2 pr-4">string</td>
                        <td className="py-2 pr-4">-</td>
                        <td className="py-2">Classes CSS adicionais</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h4 className="font-medium mb-3">Accordion de FAQ</h4>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>
                      Como instalar o hollow-UI?
                    </AccordionTrigger>
                    <AccordionContent>
                      Você pode instalar o hollow-UI usando npm ou yarn:
                      <br />
                      <code className="bg-muted px-2 py-1 rounded mt-2 inline-block">
                        npm install @scmposs/hollow-ui@latest
                      </code>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger>
                      É compatível com Next.js?
                    </AccordionTrigger>
                    <AccordionContent>
                      Sim! O hollow-UI foi desenvolvido com Next.js e é
                      totalmente compatível com todas as versões recentes,
                      incluindo o App Router.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>
                      Posso customizar os componentes?
                    </AccordionTrigger>
                    <AccordionContent>
                      Absolutamente! Todos os componentes aceitam className e
                      podem ser totalmente customizados com Tailwind CSS ou CSS
                      personalizado.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger>
                      Há suporte a modo escuro?
                    </AccordionTrigger>
                    <AccordionContent>
                      Sim! Todos os componentes suportam modo escuro através do
                      sistema de temas do Tailwind CSS. Basta configurar o dark
                      mode no seu projeto.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <h4 className="font-medium mb-3">Múltiplos Itens Abertos</h4>
                <CodeBlock
                  title="Permitir múltiplos itens abertos"
                  code={`<Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Seção 1</AccordionTrigger>
    <AccordionContent>Conteúdo da seção 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Seção 2</AccordionTrigger>
    <AccordionContent>Conteúdo da seção 2</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Seção 3</AccordionTrigger>
    <AccordionContent>Conteúdo da seção 3</AccordionContent>
  </AccordionItem>
</Accordion>`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-3">Accordion Controlado</h4>
                <CodeBlock
                  title="Estado controlado com React"
                  code={`const [value, setValue] = useState("item-1")

<Accordion type="single" value={value} onValueChange={setValue}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Item Controlado 1</AccordionTrigger>
    <AccordionContent>Este é um accordion controlado.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Item Controlado 2</AccordionTrigger>
    <AccordionContent>Você pode controlar o estado externamente.</AccordionContent>
  </AccordionItem>
</Accordion>`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-3">Com Conteúdo Complexo</h4>
                <Accordion type="single" collapsible>
                  <AccordionItem value="complex-1">
                    <AccordionTrigger>Componentes UI</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm">
                          O hollow-UI inclui diversos componentes:
                        </p>
                        <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                          <li>Botões e Badges</li>
                          <li>Cards e Dialogs</li>
                          <li>Inputs e Selects</li>
                          <li>Charts e Gráficos</li>
                          <li>E muito mais...</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="complex-2">
                    <AccordionTrigger>Guias Disponíveis</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge>Novo</Badge>
                          <span className="text-sm">Guia de Charts</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge>Novo</Badge>
                          <span className="text-sm">Guia de Tema</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge>Novo</Badge>
                          <span className="text-sm">Guia de Toast</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>

          {/* Accessibility */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Acessibilidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                O componente Accordion segue as diretrizes WAI-ARIA e
                implementa:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
                <li>
                  Suporte completo para navegação via teclado (Tab, Enter,
                  Espaço)
                </li>
                <li>
                  Atributos ARIA apropriados (aria-expanded, aria-controls)
                </li>
                <li>Indicadores visuais claros de estado (aberto/fechado)</li>
                <li>Foco visível e animações suaves</li>
                <li>Suporte para leitores de tela</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
