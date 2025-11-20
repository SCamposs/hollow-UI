"use client";

import React from "react";
import Link from "next/link";
import { Skeleton } from "@/registry/ui/skeleton";
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
import { Badge } from "@/registry/ui/badge";
import { Loader2 } from "lucide-react";

export default function SkeletonPage() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

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
            <span className="text-foreground">Skeleton</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                <Loader2 className="w-5 h-5 text-white animate-spin" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Skeleton</h1>
                <Badge variant="secondary" className="mt-2">
                  Feedback Visual
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Placeholder animado para indicar carregamento de conteúdo.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Skeleton em diferentes formas e
                tamanhos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 p-6 bg-muted/20 rounded-md">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
                <div className="flex gap-3">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-3 w-3/4" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="skeleton" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">Uso Básico</h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { Skeleton } from "@scmposs/hollow-ui"

// Skeleton simples
<Skeleton className="h-4 w-full" />

// Skeleton circular (avatar)
<Skeleton className="h-12 w-12 rounded-full" />

// Skeleton com dimensões customizadas
<Skeleton className="h-32 w-64" />`}
            />
          </section>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
              <CardDescription>
                Diferentes casos de uso do componente Skeleton
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Texto */}
              <div>
                <h4 className="font-medium mb-3">Carregamento de Texto</h4>
                <div className="space-y-2 p-4 border rounded-md">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
                <CodeBlock
                  code={`<div className="space-y-2">
  <Skeleton className="h-6 w-3/4" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-5/6" />
  <Skeleton className="h-4 w-4/6" />
</div>`}
                />
              </div>

              {/* Card com Avatar */}
              <div>
                <h4 className="font-medium mb-3">Card de Perfil</h4>
                <div className="p-4 border rounded-md">
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-16 w-16 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-5 w-1/3" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-3 w-2/3" />
                    </div>
                  </div>
                </div>
                <CodeBlock
                  code={`<div className="flex items-center gap-4">
  <Skeleton className="h-16 w-16 rounded-full" />
  <div className="space-y-2 flex-1">
    <Skeleton className="h-5 w-1/3" />
    <Skeleton className="h-4 w-1/2" />
    <Skeleton className="h-3 w-2/3" />
  </div>
</div>`}
                />
              </div>

              {/* Lista */}
              <div>
                <h4 className="font-medium mb-3">Lista de Itens</h4>
                <div className="space-y-3 p-4 border rounded-md">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-3 w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
                <CodeBlock
                  code={`{items.map((item) => (
  <div key={item.id} className="flex items-center gap-3">
    <Skeleton className="h-10 w-10 rounded" />
    <div className="space-y-2 flex-1">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-3 w-3/4" />
    </div>
  </div>
))}`}
                />
              </div>

              {/* Card Completo */}
              <div>
                <h4 className="font-medium mb-3">Card Completo</h4>
                <div className="border rounded-lg overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-4 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <div className="flex gap-2 pt-2">
                      <Skeleton className="h-8 w-20" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                  </div>
                </div>
                <CodeBlock
                  code={`<div className="border rounded-lg overflow-hidden">
  <Skeleton className="h-48 w-full" />
  <div className="p-4 space-y-3">
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
    <div className="flex gap-2 pt-2">
      <Skeleton className="h-8 w-20" />
      <Skeleton className="h-8 w-20" />
    </div>
  </div>
</div>`}
                />
              </div>

              {/* Demonstração Interativa */}
              <div>
                <h4 className="font-medium mb-3">Demonstração Interativa</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Este card alterna entre skeleton e conteúdo real a cada 3
                  segundos
                </p>
                <Card>
                  <CardContent className="pt-6">
                    {isLoading ? (
                      <div className="space-y-3">
                        <Skeleton className="h-8 w-2/3" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <div className="flex gap-2 pt-2">
                          <Skeleton className="h-10 w-24" />
                          <Skeleton className="h-10 w-24" />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold">
                          Conteúdo Carregado
                        </h3>
                        <p className="text-muted-foreground">
                          Este é o conteúdo real que aparece após o
                          carregamento.
                        </p>
                        <p className="text-muted-foreground">
                          O skeleton fornece uma prévia visual do layout
                          enquanto os dados são carregados.
                        </p>
                        <div className="flex gap-2 pt-2">
                          <Badge variant="default">Carregado</Badge>
                          <Badge variant="secondary">Interativo</Badge>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
                <CodeBlock
                  code={`const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  // Simula carregamento de dados
  fetchData().then(() => setIsLoading(false));
}, []);

return (
  <div>
    {isLoading ? (
      <div className="space-y-3">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    ) : (
      <div className="space-y-3">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    )}
  </div>
);`}
                />
              </div>
            </CardContent>
          </Card>

          {/* Props */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Propriedades</CardTitle>
              <CardDescription>
                Props disponíveis para o componente Skeleton
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
                      <td className="py-3 pr-4 font-mono text-xs">className</td>
                      <td className="py-3 pr-4">string</td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">
                        Classes CSS customizadas para estilização
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-muted/50 rounded-md">
                <p className="text-sm text-muted-foreground">
                  <strong>Nota:</strong> O componente Skeleton aceita todas as
                  props padrão de um elemento <code>div</code>. Use a prop{" "}
                  <code>className</code> para definir dimensões, bordas
                  arredondadas e outros estilos.
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
                  <li>Durante o carregamento inicial de dados de uma API</li>
                  <li>Em lazy loading de componentes ou seções</li>
                  <li>Para melhorar a percepção de performance da aplicação</li>
                  <li>Quando o layout final é conhecido antecipadamente</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">❌ Quando evitar</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Para carregamentos muito rápidos (&lt;300ms)</li>
                  <li>Em operações que não alteram o layout da página</li>
                  <li>Quando um spinner simples seria mais apropriado</li>
                  <li>Para conteúdo que muda constantemente</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">💡 Dicas</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Combine múltiplos skeletons para replicar o layout final
                  </li>
                  <li>Use tamanhos proporcionais ao conteúdo real</li>
                  <li>Mantenha a consistência com rounded corners do design</li>
                  <li>
                    Considere usar diferentes larguras para parecer mais natural
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Accessibility */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Acessibilidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                O componente Skeleton é puramente visual e não requer atributos
                ARIA específicos. No entanto, é importante:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Usar <code>aria-live=&quot;polite&quot;</code> no container quando o
                  conteúdo real for carregado
                </li>
                <li>
                  Considerar adicionar <code>aria-busy=&quot;true&quot;</code> durante o
                  carregamento
                </li>
                <li>
                  Garantir que leitores de tela anunciem quando o conteúdo real
                  estiver disponível
                </li>
                <li>
                  Evitar usar skeleton por tempo excessivo (idealmente &lt;5s)
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
