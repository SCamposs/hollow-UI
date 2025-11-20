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
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";

export default function InputPage() {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
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
            <span className="text-foreground">Input</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Input</h1>
            <p className="text-xl text-muted-foreground">
              Campos de entrada de dados estilizados e acessíveis.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Input com diferentes configurações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 p-6 bg-muted/20 rounded-md">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="disabled">Campo desabilitado</Label>
                  <Input
                    type="text"
                    id="disabled"
                    placeholder="Campo desabilitado"
                    disabled
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="input" />

          {/* Usage */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Uso do Input"
              code={`import { Input } from "@scmposs/hollow-ui"
import { Label } from "@scmposs/hollow-ui"

<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
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
                <h4 className="font-medium mb-3">Tipos de Input</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="text">Texto</Label>
                    <Input
                      type="text"
                      id="text"
                      placeholder="Digite um texto"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-ex">Email</Label>
                    <Input
                      type="email"
                      id="email-ex"
                      placeholder="exemplo@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-ex">Senha</Label>
                    <Input
                      type="password"
                      id="password-ex"
                      placeholder="Sua senha"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="number">Número</Label>
                    <Input type="number" id="number" placeholder="123" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Estados</h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="normal">Normal</Label>
                    <Input type="text" id="normal" placeholder="Campo normal" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="disabled-ex">Desabilitado</Label>
                    <Input
                      type="text"
                      id="disabled-ex"
                      placeholder="Campo desabilitado"
                      disabled
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="readonly">Somente leitura</Label>
                    <Input
                      type="text"
                      id="readonly"
                      value="Valor somente leitura"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Formulário de Contato</h4>
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      type="email"
                      id="contact-email"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      type="tel"
                      id="phone"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <Button className="w-full">Enviar mensagem</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
