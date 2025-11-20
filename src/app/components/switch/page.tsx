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
import { Switch } from "@/registry/ui/switch";
import { Label } from "@/registry/ui/label";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";

export default function SwitchPage() {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
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
            <span className="text-foreground">Switch</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Switch</h1>
            <p className="text-xl text-muted-foreground">
              Controles de alternância para ativar/desativar configurações.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Switch com diferentes estados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 p-6 bg-muted/20 rounded-md">
                <div className="flex items-center space-x-2">
                  <Switch id="default" />
                  <Label htmlFor="default">Switch padrão</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="checked" defaultChecked />
                  <Label htmlFor="checked">Switch ativado</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="disabled" disabled />
                  <Label htmlFor="disabled">Switch desabilitado</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="switch" />

          {/* Usage */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Uso do Switch"
              code={`import { Switch } from "@scmposs/hollow-ui"
import { Label } from "@scmposs/hollow-ui"

<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Notificações</Label>
</div>

// Switch ativado por padrão
<Switch id="theme" defaultChecked />

// Switch desabilitado
<Switch id="disabled" disabled />`}
            />
          </section>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Configurações do Perfil</h4>
                <div className="space-y-4 max-w-md">
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="profile-public"
                      className="text-sm font-medium"
                    >
                      Perfil público
                    </Label>
                    <Switch id="profile-public" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="show-email" className="text-sm font-medium">
                      Mostrar email
                    </Label>
                    <Switch id="show-email" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label
                      htmlFor="allow-messages"
                      className="text-sm font-medium"
                    >
                      Permitir mensagens
                    </Label>
                    <Switch id="allow-messages" defaultChecked />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">
                  Configurações de Notificação
                </h4>
                <div className="space-y-4 max-w-md">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label
                        htmlFor="email-notif"
                        className="text-sm font-medium"
                      >
                        Email
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Receber notificações por email
                      </p>
                    </div>
                    <Switch id="email-notif" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label
                        htmlFor="push-notif"
                        className="text-sm font-medium"
                      >
                        Push
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Notificações push no navegador
                      </p>
                    </div>
                    <Switch id="push-notif" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label
                        htmlFor="marketing"
                        className="text-sm font-medium"
                      >
                        Marketing
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Ofertas e promoções
                      </p>
                    </div>
                    <Switch id="marketing" />
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
