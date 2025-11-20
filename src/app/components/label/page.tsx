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
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import { Checkbox } from "@/registry/ui/checkbox";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";

export default function LabelPage() {
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
            <span className="text-foreground">Label</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Label</h1>
            <p className="text-xl text-muted-foreground">
              Rótulos acessíveis para elementos de formulário.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Label com diferentes usos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 p-6 bg-muted/20 rounded-md">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Aceito os termos e condições</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="label" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { Label } from "@scmposs/hollow-ui"

<Label htmlFor="email">Email</Label>
<Input type="email" id="email" />

// Com checkbox
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Aceito os termos</Label>
</div>`}
            />
          </section>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Formulário de Cadastro</h4>
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-form">Email *</Label>
                    <Input
                      type="email"
                      id="email-form"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha *</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Sua senha"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Com Checkboxes</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter">Receber newsletter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="updates" />
                    <Label htmlFor="updates">
                      Notificações de atualizações
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing">Ofertas promocionais</Label>
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
