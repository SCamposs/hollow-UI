"use client";

import React from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/ui/card";
import { Terminal, CheckCircle, Package, List } from "lucide-react";

export default function CLIPage() {
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
            <span className="text-foreground">CLI</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              CLI - Interface de Linha de Comando
            </h1>
            <p className="text-xl text-muted-foreground">
              Use a CLI do hollow-UI para adicionar componentes diretamente ao
              seu projeto com controle total do código.
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                Início Rápido
              </CardTitle>
              <CardDescription>
                Comece a usar a CLI em 3 passos simples
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs">
                    1
                  </span>
                  Inicializar o Projeto
                </h4>
                <CodeBlock
                  title="Execute apenas uma vez"
                  code="npx @scmposs/hollow-ui init"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Configura seu projeto criando arquivos necessários como{" "}
                  <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                    src/lib/utils.ts
                  </code>
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs">
                    2
                  </span>
                  Adicionar Componentes
                </h4>
                <CodeBlock
                  title="Adicione os componentes que precisa"
                  code="npx @scmposs/hollow-ui add button card badge"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Os componentes são copiados para{" "}
                  <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                    src/components/ui/
                  </code>{" "}
                  com todas as dependências
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs">
                    3
                  </span>
                  Usar no Código
                </h4>
                <CodeBlock
                  title="Importe e use"
                  code={`import { Button } from "@/components/ui/button"

export function MyComponent() {
  return <Button>Clique aqui</Button>
}`}
                />
              </div>
            </CardContent>
          </Card>

          {/* Comandos Disponíveis */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Comandos Disponíveis
            </h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    init
                  </CardTitle>
                  <CardDescription>
                    Inicializa a configuração do hollow-UI no seu projeto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock title="Uso" code="npx @scmposs/hollow-ui init" />
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">O que faz:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>
                        Cria{" "}
                        <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                          src/lib/utils.ts
                        </code>{" "}
                        com a função{" "}
                        <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                          cn()
                        </code>
                      </li>
                      <li>Verifica se o Tailwind CSS está instalado</li>
                      <li>Prepara a estrutura de pastas</li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm font-medium mb-2">Opções:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                          -y, --yes
                        </code>{" "}
                        - Pula confirmações
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Package className="w-5 h-5 text-blue-500" />
                    add
                  </CardTitle>
                  <CardDescription>
                    Adiciona um ou mais componentes ao seu projeto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-2">
                        Adicionar um componente:
                      </p>
                      <CodeBlock code="npx @scmposs/hollow-ui add button" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">
                        Adicionar múltiplos componentes:
                      </p>
                      <CodeBlock code="npx @scmposs/hollow-ui add button card badge input" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Opções:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                          -o, --overwrite
                        </code>{" "}
                        - Sobrescreve arquivos existentes
                      </li>
                      <li>
                        <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                          -a, --all
                        </code>{" "}
                        - Adiciona todos os componentes
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <List className="w-5 h-5 text-purple-500" />
                    list
                  </CardTitle>
                  <CardDescription>
                    Lista todos os componentes disponíveis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CodeBlock title="Uso" code="npx @scmposs/hollow-ui list" />
                  <p className="text-sm text-muted-foreground mt-3">
                    Mostra todos os componentes organizados por categoria com
                    informações sobre dependências.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Vantagens */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Por Que Usar a CLI?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Controle Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Os componentes são copiados para seu projeto. Você pode
                    modificar, customizar e adaptar como quiser.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Sem Dependências Extras
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Não adiciona pacotes desnecessários ao seu{" "}
                    <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                      node_modules
                    </code>
                    . Apenas o código que você usa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Tree-Shaking Perfeito
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Apenas o código dos componentes que você usa é incluído no
                    bundle final.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Código-Fonte Visível
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Veja exatamente como cada componente funciona. Ótimo para
                    aprendizado e debug.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Preciso rodar{" "}
                    <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                      init
                    </code>{" "}
                    sempre?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Não! O comando{" "}
                    <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                      init
                    </code>{" "}
                    precisa ser executado apenas uma vez por projeto para
                    configurar os arquivos iniciais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Posso modificar os componentes?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sim! Essa é a principal vantagem. Os componentes são
                    copiados para seu projeto e você tem total liberdade para
                    modificá-los.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    E as atualizações?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Como o código está no seu projeto, você controla quando
                    atualizar. Use{" "}
                    <code className="px-1.5 py-0.5 bg-muted rounded text-xs">
                      --overwrite
                    </code>{" "}
                    para sobrescrever componentes com versões mais recentes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">
                    Posso usar CLI e NPM juntos?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Não é recomendado misturar as duas abordagens no mesmo
                    projeto. Escolha uma e mantenha consistência.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
