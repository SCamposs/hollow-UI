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
import { Checkbox } from "@/registry/ui/checkbox";
import { Label } from "@/registry/ui/label";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";

export default function CheckboxPage() {
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
            <span className="text-foreground">Checkbox</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Checkbox</h1>
            <p className="text-xl text-muted-foreground">
              Caixas de seleção para formulários e seleções múltiplas.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Checkbox com diferentes estados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 p-6 bg-muted/20 rounded-md">
                <div className="flex items-center space-x-2">
                  <Checkbox id="default" />
                  <Label htmlFor="default">Checkbox padrão</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="checked" defaultChecked />
                  <Label htmlFor="checked">Checkbox marcado</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="disabled" disabled />
                  <Label htmlFor="disabled">Checkbox desabilitado</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="checkbox" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { Checkbox } from "@scmposs/hollow-ui"
import { Label } from "@scmposs/hollow-ui"

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Aceito os termos</Label>
</div>

// Checkbox marcado por padrão
<Checkbox id="newsletter" defaultChecked />

// Checkbox desabilitado
<Checkbox id="disabled" disabled />`}
            />
          </section>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Lista de Tarefas</h4>
                <div className="space-y-3 max-w-md">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="task1" defaultChecked />
                    <Label
                      htmlFor="task1"
                      className="line-through text-muted-foreground"
                    >
                      Finalizar documentação
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="task2" />
                    <Label htmlFor="task2">Implementar testes unitários</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="task3" />
                    <Label htmlFor="task3">Revisar código com a equipe</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="task4" />
                    <Label htmlFor="task4">Preparar apresentação</Label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">
                  Preferências de Notificação
                </h4>
                <div className="space-y-3 max-w-md">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="email-notif" defaultChecked />
                    <Label htmlFor="email-notif">Notificações por email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="push-notif" />
                    <Label htmlFor="push-notif">Notificações push</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sms-notif" />
                    <Label htmlFor="sms-notif">Notificações por SMS</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing-notif" />
                    <Label htmlFor="marketing-notif">
                      Ofertas promocionais
                    </Label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Filtros de Pesquisa</h4>
                <div className="grid grid-cols-2 gap-3 max-w-md">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="react" />
                    <Label htmlFor="react">React</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="vue" />
                    <Label htmlFor="vue">Vue</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="angular" />
                    <Label htmlFor="angular">Angular</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="svelte" />
                    <Label htmlFor="svelte">Svelte</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
