"use client";

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
import { InfoCard } from "@/registry/ui/InfoCard";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";

export default function InfoCardPage() {
  const handleAprovar = (id: string) => {
    console.log("Aprovado:", id);
  };

  const handleReprovar = (id: string) => {
    console.log("Reprovado:", id);
  };

  const exampleData1 = {
    id: "001",
    status: "Aguardando aprovação",
    veiculo: "Truck Volvo FH540",
    solicitante: "João Silva",
    finalidade: "Transporte de Carga",
    periodo: "15/01/2025 - 30/01/2025",
    descricao:
      "Solicitação para transporte de equipamentos industriais para obra em Santos. Viagem de longa distância com necessidade de motorista especializado.",
    modificacoes:
      "Instalação de kit de segurança adicional e GPS tracker para monitoramento em tempo real da carga.",
  };

  const exampleData2 = {
    id: "002",
    status: "Análise técnica",
    veiculo: "Mercedes Actros 2646",
    solicitante: "Maria Santos",
    finalidade: "Logística Urbana",
    periodo: "20/01/2025 - 25/01/2025",
    descricao:
      "Transporte de materiais de construção para múltiplas obras na região metropolitana. Operação com várias paradas programadas.",
    modificacoes:
      "Adaptação da carroceria para diferentes tipos de carga e sistema de amarração reforçado.",
  };

  const exampleData3 = {
    id: "003",
    status: "Revisão final",
    veiculo: "Scania R450",
    solicitante: "Carlos Oliveira",
    finalidade: "Transporte Especial",
    periodo: "10/02/2025 - 15/02/2025",
    descricao:
      "Transporte de equipamento industrial de grande porte. Requer escolta e planejamento de rota específico devido às dimensões da carga.",
    modificacoes:
      "Configuração especial do semi-reboque e instalação de sinalização adicional para transporte de carga oversized.",
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
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
            <span className="text-foreground">InfoCard</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">InfoCard</h1>
            <p className="text-xl text-muted-foreground">
              Card informativo com efeitos hover e botões de ação interativos.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente InfoCard com diferentes estados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6 bg-muted/20 rounded-md">
                <InfoCard
                  {...exampleData1}
                  onAprovar={handleAprovar}
                  onReprovar={handleReprovar}
                />
                <InfoCard
                  {...exampleData2}
                  onAprovar={handleAprovar}
                  onReprovar={handleReprovar}
                />
                <InfoCard
                  {...exampleData3}
                  onAprovar={handleAprovar}
                  onReprovar={handleReprovar}
                />
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="info-card" />

          {/* Usage */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Uso do InfoCard"
              code={`import { InfoCard } from "@scmposs/hollow-ui"

const data = {
  id: "001",
  status: "Aguardando aprovação",
  veiculo: "Truck Volvo FH540",
  solicitante: "João Silva",
  finalidade: "Transporte de Carga",
  periodo: "15/01/2025 - 30/01/2025",
  descricao: "Descrição detalhada da solicitação...",
  modificacoes: "Modificações necessárias..."
};

const handleAprovar = (id) => {
  console.log("Aprovado:", id);
};

const handleReprovar = (id) => {
  console.log("Reprovado:", id);
};

<InfoCard
  {...data}
  onAprovar={handleAprovar}
  onReprovar={handleReprovar}
/>`}
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
                  <h4 className="font-medium">✨ Efeitos Hover</h4>
                  <p className="text-sm text-muted-foreground">
                    Animações suaves com escala e sombra ao passar o mouse
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">🎯 Botões Interativos</h4>
                  <p className="text-sm text-muted-foreground">
                    Botões de ação que aparecem somente no hover
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">📱 Responsivo</h4>
                  <p className="text-sm text-muted-foreground">
                    Layout adaptável para diferentes tamanhos de tela
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">⚡ Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Otimizado com will-change-transform
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
                  <h4 className="font-medium mb-2">InfoCard Props</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <code>id</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <div className="flex justify-between">
                      <code>status</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <div className="flex justify-between">
                      <code>veiculo</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <div className="flex justify-between">
                      <code>solicitante</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <div className="flex justify-between">
                      <code>finalidade</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <div className="flex justify-between">
                      <code>periodo</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <div className="flex justify-between">
                      <code>descricao</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <div className="flex justify-between">
                      <code>modificacoes</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <div className="flex justify-between">
                      <code>onAprovar?</code>
                      <span className="text-muted-foreground">
                        (id: string) =&gt; void
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code>onReprovar?</code>
                      <span className="text-muted-foreground">
                        (id: string) =&gt; void
                      </span>
                    </div>
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
