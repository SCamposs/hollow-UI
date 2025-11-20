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
} from "@/registry/ui/card";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";

export default function BadgePage() {
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
            <span className="text-foreground">Badge</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Badge</h1>
            <p className="text-xl text-muted-foreground">
              Rótulos e tags para categorização e identificação.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Badge com diferentes variantes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 p-6 bg-muted/20 rounded-md">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="badge" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { Badge } from "@scmposs/hollow-ui"

<Badge variant="default">Badge</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>`}
            />
          </section>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Variantes</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Padrão</Badge>
                  <Badge variant="secondary">Secundário</Badge>
                  <Badge variant="destructive">Destrutivo</Badge>
                  <Badge variant="outline">Contorno</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Status</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Ativo</Badge>
                  <Badge variant="secondary">Pendente</Badge>
                  <Badge variant="destructive">Erro</Badge>
                  <Badge variant="outline">Inativo</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Com números</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Novo (12)</Badge>
                  <Badge variant="secondary">Em análise (5)</Badge>
                  <Badge variant="outline">Concluído (28)</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
