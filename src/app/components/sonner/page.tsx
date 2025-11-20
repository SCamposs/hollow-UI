"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { Button } from "@/registry/ui/button";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Badge } from "@/registry/ui/badge";
import {
  MessageCircle,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Loader,
  Clock,
  Bell,
} from "lucide-react";
import {
  ToasterStandalone,
  useToastStandalone,
  toast,
} from "@/registry/ui/ToasterStandalone";

export default function SonnerPage() {
  const { toast: showToast } = useToastStandalone();
  const [promiseLoading, setPromiseLoading] = useState(false);

  const handlePromiseExample = () => {
    setPromiseLoading(true);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Operação concluída com sucesso!");
        } else {
          reject(new Error("Algo deu errado"));
        }
        setPromiseLoading(false);
      }, 2000);
    });

    showToast.promise(promise, {
      loading: "Processando...",
      success: (data) => `${data}`,
      error: (error) => `Erro: ${error.message}`,
    });
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <ToasterStandalone />

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
            <span className="text-foreground">Guia de Toast</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 dark:from-orange-500 dark:to-red-500 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Guia de Toast</h1>
                <Badge variant="secondary" className="mt-2">
                  Guia de Uso
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Sistema de notificações toast elegante e customizável usando
              Sonner.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Diferentes tipos de notificações toast disponíveis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  onClick={() =>
                    showToast.success("Operação realizada com sucesso!")
                  }
                  className="w-full"
                  variant="outline"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Success
                </Button>

                <Button
                  onClick={() => showToast.error("Ops! Algo deu errado")}
                  className="w-full"
                  variant="outline"
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Error
                </Button>

                <Button
                  onClick={() =>
                    showToast.warning("Atenção: Verifique os dados")
                  }
                  className="w-full"
                  variant="outline"
                >
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Warning
                </Button>

                <Button
                  onClick={() => showToast.info("Nova atualização disponível")}
                  className="w-full"
                  variant="outline"
                >
                  <Info className="w-4 h-4 mr-2" />
                  Info
                </Button>
              </div>

              <div className="space-y-2">
                <Button
                  onClick={handlePromiseExample}
                  disabled={promiseLoading}
                  className="w-full"
                  variant="outline"
                >
                  {promiseLoading ? (
                    <Loader className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Clock className="w-4 h-4 mr-2" />
                  )}
                  Promise Toast (Async)
                </Button>

                <Button
                  onClick={() =>
                    showToast.success("Toast com descrição", {
                      description:
                        "Esta é uma descrição detalhada da notificação",
                    })
                  }
                  className="w-full"
                  variant="outline"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Com Descrição
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Instalação */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Instalação</CardTitle>
              <CardDescription>
                Como instalar e configurar o Sonner em seu projeto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock title="Instalação" code="npm install sonner" />

              <div className="bg-amber-50 border border-amber-200 dark:bg-amber-500/20 dark:border-amber-600 rounded-lg p-4">
                <p className="text-sm text-black dark:text-white contrast:text-black">
                  <strong>⚠️ Importante:</strong> O componente Sonner original
                  usa next-themes que pode causar conflitos. Use a versão
                  standalone ou implemente manualmente conforme mostrado no
                  tutorial.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Implementação Standalone */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>1. Componente Toaster Standalone</CardTitle>
              <CardDescription>
                Versão independente sem dependências do Next.js
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="components/ToasterStandalone.tsx"
                code={`"use client";

import { Toaster as Sonner, ToasterProps, toast } from "sonner";
import React from "react";

// Componente Toaster Standalone - sem dependência do next-themes
export function ToasterStandalone({ 
  theme = "light",
  ...props 
}: ToasterProps & { theme?: "light" | "dark" | "contrast" }) {
  return (
    <Sonner
      theme={theme}
      className="toaster group custom-toast-position"
      position="top-right"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--success-bg": "#dcfce7",
          "--success-text": "#15803d",
          "--success-border": "#16a34a",
          "--error-bg": "#fef2f2",
          "--error-text": "#dc2626",
          "--error-border": "#ef4444",
          "--warning-bg": "#fefce8",
          "--warning-text": "#ca8a04",
          "--warning-border": "#eab308",
          "--info-bg": "#eff6ff",
          "--info-text": "#2563eb",
          "--info-border": "#3b82f6",
        } as React.CSSProperties
      }
      toastOptions={{
        style: {
          border: "1px solid var(--normal-border)",
        },
        classNames: {
          success: "toast-success",
          error: "toast-error",
          warning: "toast-warning",
          info: "toast-info",
        },
      }}
      {...props}
    />
  );
}`}
              />
            </CardContent>
          </Card>

          {/* Hook useToast */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>2. Hook useToast Simplificado</CardTitle>
              <CardDescription>
                Hook para facilitar o uso dos toasts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="hooks/useToastStandalone.ts"
                code={`// Hook simplificado para usar toast sem dependências externas
export function useToastStandalone() {
  const showToast = {
    success: (message: string, options?: { description?: string }) => {
      toast.success(message, options);
    },
    error: (message: string, options?: { description?: string }) => {
      toast.error(message, options);
    },
    info: (message: string, options?: { description?: string }) => {
      toast.info(message, options);
    },
    warning: (message: string, options?: { description?: string }) => {
      toast.warning(message, options);
    },
    promise: <T,>(
      promise: Promise<T>,
      options: {
        loading: string;
        success: string | ((data: T) => string);
        error: string | ((error: any) => string);
      }
    ) => {
      toast.promise(promise, options);
    },
    dismiss: (toastId?: string | number) => {
      toast.dismiss(toastId);
    },
  };

  return { toast: showToast };
}`}
              />
            </CardContent>
          </Card>

          {/* Configuração no Layout */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>3. Configuração no Layout</CardTitle>
              <CardDescription>
                Como adicionar o Toaster no seu layout principal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="app/layout.tsx"
                code={`import { ToasterStandalone } from "@/components/ToasterStandalone";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <ToasterStandalone />
      </body>
    </html>
  );
}`}
              />
            </CardContent>
          </Card>

          {/* CSS Personalizado */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>4. CSS Personalizado (Opcional)</CardTitle>
              <CardDescription>
                Estilos customizados baseados no hollow-UI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="globals.css"
                code={`/* Toast colors for better UX */
.toast-success {
  background-color: var(--success-bg);
  color: var(--success-text);
  border-color: var(--success-border);
}

.toast-error {
  background-color: var(--error-bg);
  color: var(--error-text);
  border-color: var(--error-border);
}

.toast-warning {
  background-color: var(--warning-bg);
  color: var(--warning-text);
  border-color: var(--warning-border);
}

.toast-info {
  background-color: var(--info-bg);
  color: var(--info-text);
  border-color: var(--info-border);
}

/* Dark theme adjustments for toasts */
.dark .toast-success {
  background-color: #064e3b;
  color: #6ee7b7;
  border-color: #059669;
}

.dark .toast-error {
  background-color: #7f1d1d;
  color: #fca5a5;
  border-color: #dc2626;
}

.dark .toast-warning {
  background-color: #78350f;
  color: #fcd34d;
  border-color: #d97706;
}

.dark .toast-info {
  background-color: #1e3a8a;
  color: #93c5fd;
  border-color: #2563eb;
}

/* Contrast theme adjustments for toasts */
.contrast .toast-success {
  background-color: #000000;
  color: #00ff00;
  border-color: #00ff00;
}

.contrast .toast-error {
  background-color: #000000;
  color: #ff0000;
  border-color: #ff0000;
}

.contrast .toast-warning {
  background-color: #000000;
  color: #ffff00;
  border-color: #ffff00;
}

.contrast .toast-info {
  background-color: #000000;
  color: #00ffff;
  border-color: #00ffff;
}

.custom-toast-position {
  z-index: 9999;
}`}
              />
            </CardContent>
          </Card>

          {/* Exemplos de Uso */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>5. Exemplos de Uso</CardTitle>
              <CardDescription>
                Diferentes formas de usar os toasts em seus componentes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Uso Básico</h4>
                <CodeBlock
                  title="Componente.tsx"
                  code={`"use client";

import { useToastStandalone } from "@/hooks/useToastStandalone";
import { Button } from "@/components/ui/button";

export function MeuComponente() {
  const { toast } = useToastStandalone();

  const handleSave = () => {
    // Simula uma operação de salvamento
    try {
      // ... lógica de salvamento
      toast.success("Dados salvos com sucesso!");
    } catch (error) {
      toast.error("Erro ao salvar os dados");
    }
  };

  return (
    <Button onClick={handleSave}>
      Salvar
    </Button>
  );
}`}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3">
                  Promise Toast (Operações Assíncronas)
                </h4>
                <CodeBlock
                  title="AsyncOperations.tsx"
                  code={`const { toast } = useToastStandalone();

const handleAsyncOperation = async () => {
  const promise = fetch('/api/data').then(res => res.json());
  
  toast.promise(promise, {
    loading: 'Carregando dados...',
    success: (data) => \`\${data.length} itens carregados!\`,
    error: 'Erro ao carregar dados',
  });
};`}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3">Toast com Descrição</h4>
                <CodeBlock
                  title="DetailedToast.tsx"
                  code={`const { toast } = useToastStandalone();

const showDetailedToast = () => {
  toast.success("Upload concluído", {
    description: "3 arquivos foram enviados com sucesso para o servidor"
  });
};`}
                />
              </div>

              <div>
                <h4 className="font-semibold mb-3">Controle Manual</h4>
                <CodeBlock
                  title="ManualControl.tsx"
                  code={`const { toast } = useToastStandalone();

const showPersistentToast = () => {
  const toastId = toast.info("Processamento em andamento...", {
    description: "Esta operação pode levar alguns minutos"
  });
  
  // Depois de um tempo, remover o toast
  setTimeout(() => {
    toast.dismiss(toastId);
    toast.success("Processamento concluído!");
  }, 5000);
};`}
                />
              </div>
            </CardContent>
          </Card>

          {/* Integração com Sistema */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>6. Integração com Sistema de Gestão</CardTitle>
              <CardDescription>
                Como usar toasts em sistemas de gestão e monitoramento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="StatusReportActions.tsx"
                code={`import { useToastStandalone } from "@/hooks/useToastStandalone";

export function StatusReportActions() {
  const { toast } = useToastStandalone();

  const handleSubmitTask = async (taskData: any) => {
    const submitPromise = fetch('/api/task/submit', {
      method: 'POST',
      body: JSON.stringify(taskData),
    });

    toast.promise(submitPromise, {
      loading: 'Enviando tarefa...',
      success: 'Tarefa enviada com sucesso! Você receberá atualizações por email.',
      error: 'Falha ao enviar tarefa. Tente novamente.',
    });
  };

  const handleStatusUpdate = (status: string) => {
    switch (status) {
      case 'CONCLUÍDO':
        toast.success('Tarefa concluída', {
          description: 'Todas as ações foram implementadas'
        });
        break;
      case 'EM_ANALISE':
        toast.info('Tarefa em análise', {
          description: 'A equipe está revisando'
        });
        break;
      case 'CANCELADO':
        toast.warning('Tarefa foi cancelada', {
          description: 'Entre em contato com o responsável para mais informações'
        });
        break;
    }
  };

  return (
    <div className="space-y-4">
      <Button onClick={() => handleSubmitPR({})}>
        Enviar Tarefa
      </Button>
      <Button onClick={() => handleStatusUpdate('CONCLUÍDO')}>
        Simular Status Update
      </Button>
    </div>
  );
}`}
              />
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle>7. Boas Práticas</CardTitle>
              <CardDescription>
                Diretrizes para usar toasts de forma eficaz
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">
                      ✅ Faça
                    </h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Use toasts para feedback imediato</li>
                      <li>Seja conciso nas mensagens</li>
                      <li>
                        Use o tipo apropriado (success, error, warning, info)
                      </li>
                      <li>Forneça contexto com descrições quando necessário</li>
                      <li>Use promise toasts para operações assíncronas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">
                      ❌ Evite
                    </h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Toasts para informações críticas</li>
                      <li>Mensagens muito longas</li>
                      <li>Múltiplos toasts simultâneos</li>
                      <li>Toasts que não se autodispensam</li>
                      <li>Uso excessivo que pode irritar o usuário</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 dark:bg-blue-500/20 dark:border-blue-600 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold mb-2">
                    💡 Dica de Acessibilidade
                  </h4>
                  <p className="text-sm">
                    Os toasts são automaticamente anunciados por leitores de
                    tela. Certifique-se de que as mensagens sejam claras e
                    informativas mesmo quando lidas fora do contexto visual.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
