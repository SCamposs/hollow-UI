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
import { BackToTopButton } from "@/registry/ui/BackToTopButton";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";

export default function BackToTopButtonPage() {
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
            <span className="text-foreground">BackToTopButton</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">BackToTopButton</h1>
            <p className="text-xl text-muted-foreground">
              Botão flutuante para retornar ao topo da página com detecção
              automática de scroll.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                O botão aparece automaticamente após rolar 300px da página. Role
                para baixo para testar!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-muted/20 rounded-md">
                <div className="text-center">
                  <Badge variant="secondary" className="mb-4">
                    Botão ativo no footer da página
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    O BackToTopButton está integrado no layout principal. Role
                    para baixo para vê-lo aparecer.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Demo Content to Enable Scrolling */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Conteúdo de Demonstração</CardTitle>
              <CardDescription>
                Conteúdo adicional para permitir scroll e testar o funcionamento
                do botão
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Seção {i + 1}</h3>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium.
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="back-to-top-button" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { BackToTopButton } from "@scmposs/hollow-ui"

// Uso básico
<BackToTopButton />`}
            />
          </section>

          {/* Features */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Características</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">🎯 Detecção Automática</h4>
                  <p className="text-sm text-muted-foreground">
                    Aparece automaticamente após rolar 300px da página
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">✨ Scroll Suave</h4>
                  <p className="text-sm text-muted-foreground">
                    Animação suave ao retornar ao topo da página
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">📱 Responsivo</h4>
                  <p className="text-sm text-muted-foreground">
                    Posicionamento otimizado para diferentes telas
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">🤝 Integração</h4>
                  <p className="text-sm text-muted-foreground">
                    Posicionamento personalizável via props
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Props */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Props</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">BackToTopButton Props</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <code>offsetRight?</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Controla o posicionamento horizontal. Default:
                      &quot;right-4&quot;
                    </p>
                    <div className="flex justify-between">
                      <code>offsetBottom?</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      Controla o posicionamento vertical. Default:
                      &quot;bottom-22&quot;
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* More Demo Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Mais Conteúdo de Teste</CardTitle>
              <CardDescription>
                Continue rolando para testar o botão de volta ao topo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i + 10} className="border rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Exemplo {i + 11}</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      Suspendisse potenti. Nullam euismod, nisl eget ultricies
                      aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc
                      eget nisl. Sed euismod, nisl eget ultricies aliquam, nunc
                      nisl aliquet nunc, quis aliquam nisl nunc eget nisl.
                    </p>
                    <p className="text-muted-foreground">
                      Vestibulum ante ipsum primis in faucibus orci luctus et
                      ultrices posuere cubilia curae; Donec velit neque, auctor
                      sit amet aliquam vel, ullamcorper sit amet ligula. Proin
                      eget tortor risus.
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
