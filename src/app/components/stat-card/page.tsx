"use client";

import React from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import { Badge } from "@/registry/ui/badge";
import { StatCard, StatCardGrid } from "@/registry/ui/StatCard";
import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  DollarSign,
  Activity,
  Zap,
  Target,
  BarChart3,
  PieChart,
} from "lucide-react";

export default function StatCardPage() {
  // Dados de exemplo
  const dashboardStats = [
    {
      title: "Total de Problemas",
      value: 247,
      variant: "red" as const,
      icon: TrendingUp,
    },
    {
      title: "Em Aberto",
      value: 89,
      variant: "yellow" as const,
      icon: Activity,
    },
    {
      title: "Resolvidos",
      value: 158,
      variant: "green" as const,
      icon: Target,
    },
    {
      title: "Tempo Médio",
      value: "2.3h",
      variant: "blue" as const,
      icon: Zap,
    },
  ];

  const salesStats = [
    {
      title: "Vendas Totais",
      value: "R$ 45,2k",
      description: "+12% vs mês anterior",
      variant: "green" as const,
      icon: DollarSign,
    },
    {
      title: "Novos Clientes",
      value: 128,
      description: "+8% esta semana",
      variant: "blue" as const,
      icon: Users,
    },
    {
      title: "Pedidos",
      value: 342,
      description: "+23% vs ontem",
      variant: "purple" as const,
      icon: ShoppingCart,
    },
    {
      title: "Taxa de Conversão",
      value: "3.2%",
      description: "-0.4% vs ontem",
      variant: "orange" as const,
      icon: BarChart3,
    },
  ];

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
            <span className="text-foreground">StatCard</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-400 dark:from-green-700 dark:to-blue-700 rounded-lg flex items-center justify-center">
                <PieChart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">StatCard</h1>
                <Badge variant="secondary" className="mt-2">
                  Padrão hollow-UI
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Componente para exibir estatísticas com gradientes coloridos e
              diferentes variantes.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Exemplo baseado nos cards de resumo do hollow-UI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Dashboard de Problemas</h4>
                <StatCardGrid cards={dashboardStats} columns={4} />
              </div>

              <div>
                <h4 className="font-medium mb-3">Estatísticas de Vendas</h4>
                <StatCardGrid cards={salesStats} columns={2} />
              </div>
            </CardContent>
          </Card>

          {/* Instalação */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Instalação</CardTitle>
              <CardDescription>
                Como usar o StatCard em seu projeto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="Uso Básico"
                code={`import { StatCard } from "@scmposs/hollow-ui";

<StatCard
  title="Total de Vendas"
  value="R$ 45,2k"
  variant="green"
  icon={DollarSign}
/>`}
              />
            </CardContent>
          </Card>

          {/* Props da API */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>API do Componente</CardTitle>
              <CardDescription>
                Propriedades disponíveis para o StatCard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-2 text-left">
                        Prop
                      </th>
                      <th className="border border-border p-2 text-left">
                        Tipo
                      </th>
                      <th className="border border-border p-2 text-left">
                        Default
                      </th>
                      <th className="border border-border p-2 text-left">
                        Descrição
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2 font-mono text-sm">
                        title
                      </td>
                      <td className="border border-border p-2">string</td>
                      <td className="border border-border p-2">-</td>
                      <td className="border border-border p-2">
                        Título da estatística
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono text-sm">
                        value
                      </td>
                      <td className="border border-border p-2">
                        string | number
                      </td>
                      <td className="border border-border p-2">-</td>
                      <td className="border border-border p-2">
                        Valor principal a ser exibido
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono text-sm">
                        description
                      </td>
                      <td className="border border-border p-2">string</td>
                      <td className="border border-border p-2">-</td>
                      <td className="border border-border p-2">
                        Descrição ou subtítulo opcional
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono text-sm">
                        icon
                      </td>
                      <td className="border border-border p-2">LucideIcon</td>
                      <td className="border border-border p-2">-</td>
                      <td className="border border-border p-2">
                        Ícone a ser exibido
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono text-sm">
                        variant
                      </td>
                      <td className="border border-border p-2">
                        &quot;red&quot; | &quot;yellow&quot; | &quot;green&quot;
                        | &quot;blue&quot; | &quot;purple&quot; |
                        &quot;orange&quot; | &quot;gray&quot;
                      </td>
                      <td className="border border-border p-2">
                        &quot;blue&quot;
                      </td>
                      <td className="border border-border p-2">
                        Variante de cor que define o gradiente
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono text-sm">
                        size
                      </td>
                      <td className="border border-border p-2">
                        &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;
                      </td>
                      <td className="border border-border p-2">
                        &quot;md&quot;
                      </td>
                      <td className="border border-border p-2">
                        Tamanho do componente
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono text-sm">
                        compact
                      </td>
                      <td className="border border-border p-2">boolean</td>
                      <td className="border border-border p-2">false</td>
                      <td className="border border-border p-2">
                        Se verdadeiro, exibe layout mais compacto
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono text-sm">
                        className
                      </td>
                      <td className="border border-border p-2">string</td>
                      <td className="border border-border p-2">-</td>
                      <td className="border border-border p-2">
                        Classes CSS adicionais
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Variantes */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Variantes de Cor</CardTitle>
              <CardDescription>
                Diferentes gradientes disponíveis para diferentes contextos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard title="Red" value="247" variant="red" />
                <StatCard title="Yellow" value="89" variant="yellow" />
                <StatCard title="Green" value="158" variant="green" />
                <StatCard title="Blue" value="2.3h" variant="blue" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <StatCard title="Purple" value="42" variant="purple" />
                <StatCard title="Orange" value="3.2%" variant="orange" />
                <StatCard title="Gray" value="128" variant="gray" />
              </div>

              <CodeBlock
                title="Variantes"
                code={`<StatCard title="Críticos" value="12" variant="red" />
<StatCard title="Atenção" value="23" variant="yellow" />
<StatCard title="Resolvidos" value="45" variant="green" />
<StatCard title="Em Análise" value="8" variant="blue" />
<StatCard title="KPMs" value="15" variant="purple" />
<StatCard title="Moderados" value="34" variant="orange" />
<StatCard title="Total" value="127" variant="gray" />`}
              />
            </CardContent>
          </Card>

          {/* Tamanhos */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Tamanhos</CardTitle>
              <CardDescription>
                Diferentes tamanhos para diferentes contextos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-end gap-4 justify-center">
                <StatCard
                  title="Pequeno"
                  value="12"
                  variant="green"
                  size="sm"
                  icon={Users}
                />
                <StatCard
                  title="Médio"
                  value="123"
                  variant="blue"
                  size="md"
                  icon={TrendingUp}
                />
                <StatCard
                  title="Grande"
                  value="1.2k"
                  variant="purple"
                  size="lg"
                  icon={DollarSign}
                />
              </div>

              <CodeBlock
                title="Tamanhos"
                code={`<StatCard title="Pequeno" value="12" size="sm" />
<StatCard title="Médio" value="123" size="md" />
<StatCard title="Grande" value="1.2k" size="lg" />`}
              />
            </CardContent>
          </Card>

          {/* StatCardGrid */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>StatCardGrid</CardTitle>
              <CardDescription>
                Componente para organizar múltiplos StatCards em grid responsivo
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Grid 2 Colunas</h4>
                <StatCardGrid
                  cards={[
                    {
                      title: "Tarefas Ativas",
                      value: 45,
                      variant: "blue",
                      icon: Activity,
                    },
                    {
                      title: "Tarefas Concluídas",
                      value: 123,
                      variant: "green",
                      icon: Target,
                    },
                  ]}
                  columns={2}
                />
              </div>

              <CodeBlock
                title="StatCardGrid"
                code={`import { StatCardGrid } from "@scmposs/hollow-ui";
import { Activity, Target } from "lucide-react";

const cards = [
  {
    title: "Tarefas Ativas",
    value: 45,
    variant: "blue",
    icon: Activity,
  },
  {
    title: "Tarefas Concluídas", 
    value: 123,
    variant: "green",
    icon: Target,
  },
];

<StatCardGrid cards={cards} columns={2} gap="md" />`}
              />
            </CardContent>
          </Card>

          {/* Layout Compacto */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Layout Compacto</CardTitle>
              <CardDescription>
                Versão mais compacta para espaços reduzidos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard
                  title="Vendas"
                  value="R$ 12k"
                  variant="green"
                  compact
                  icon={DollarSign}
                />
                <StatCard
                  title="Clientes"
                  value="248"
                  variant="blue"
                  compact
                  icon={Users}
                />
                <StatCard
                  title="Pedidos"
                  value="89"
                  variant="purple"
                  compact
                  icon={ShoppingCart}
                />
                <StatCard
                  title="Conversão"
                  value="3.2%"
                  variant="orange"
                  compact
                  icon={TrendingUp}
                />
              </div>

              <CodeBlock
                title="Layout Compacto"
                code={`<StatCard 
  title="Vendas" 
  value="R$ 12k" 
  variant="green" 
  compact 
  icon={DollarSign} 
/>`}
              />
            </CardContent>
          </Card>

          {/* Exemplo de Sistema Completo */}
          <Card>
            <CardHeader>
              <CardTitle>Exemplo: Sistema Completo</CardTitle>
              <CardDescription>
                Como usar em um sistema de gestão
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="StatusReportDashboard.tsx"
                code={`import { StatCard, StatCardGrid } from "@scmposs/hollow-ui";
import { TrendingUp, Activity, Target, Zap } from "lucide-react";

export function StatusReportDashboard({ estatisticas }) {
  const cards = [
    {
      title: "Total de Problemas",
      value: estatisticas.totalProblemas,
      variant: "red",
      icon: TrendingUp,
    },
    {
      title: "Em Aberto",
      value: estatisticas.problemasAbertos,
      variant: "yellow", 
      icon: Activity,
    },
    {
      title: "Resolvidos",
      value: estatisticas.problemasResolvidos,
      variant: "green",
      icon: Target,
    },
    {
      title: "Tempo Médio",
      value: estatisticas.tempoMedio,
      variant: "blue",
      icon: Zap,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Resumo Atual
        </CardTitle>
      </CardHeader>
      <CardContent>
        <StatCardGrid cards={cards} columns={2} />
      </CardContent>
    </Card>
  );
}`}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
