import React from "react";
import Link from "next/link";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/registry/ui/card";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";

export default function CardPage() {
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
            <span className="text-foreground">Card</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Card</h1>
            <p className="text-xl text-muted-foreground">
              Containers flexíveis para organizar e apresentar conteúdo.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Card com diferentes configurações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-muted/20 rounded-md">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Básico</CardTitle>
                    <CardDescription>
                      Um card simples com título e descrição
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Este é o conteúdo do card.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Card com Footer</CardTitle>
                    <CardDescription>Card com botões no rodapé</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card com área de ações no rodapé.</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Confirmar</Button>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="card" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@scmposs/hollow-ui"

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição opcional</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo do card</p>
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>`}
            />
          </section>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Card de Produto</h4>
                <Card className="max-w-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>hollow-UI</CardTitle>
                      <Badge variant="secondary">v1.0.0</Badge>
                    </div>
                    <CardDescription>
                      Framework de componentes React
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Coleção moderna de componentes reutilizáveis construída
                      com React, TypeScript e Tailwind CSS.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Instalar</Button>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <h4 className="font-medium mb-3">Card de Estatísticas</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Total de Componentes</CardDescription>
                      <CardTitle className="text-3xl">30+</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground">
                        +12% em relação ao mês anterior
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Downloads</CardDescription>
                      <CardTitle className="text-3xl">1.2k</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground">
                        +25% em relação ao mês anterior
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Estrelas</CardDescription>
                      <CardTitle className="text-3xl">89</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground">
                        +8% em relação ao mês anterior
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
