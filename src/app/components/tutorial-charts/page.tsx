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
import { Badge } from "@/registry/ui/badge";
import { BarChart, TrendingUp, Palette } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/registry/ui/chart";
import {
  Bar,
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  Cell,
  Pie,
  XAxis,
  YAxis,
  Area,
  AreaChart as RechartsAreaChart,
  ResponsiveContainer,
} from "recharts";

// Dados de exemplo genéricos
const chartDataExample = [
  { month: "Jan", problemas: 45, concluidos: 32, abertos: 13 },
  { month: "Fev", problemas: 52, concluidos: 41, abertos: 11 },
  { month: "Mar", problemas: 38, concluidos: 29, abertos: 9 },
  { month: "Abr", problemas: 61, concluidos: 48, abertos: 13 },
];

const pieChartData = [
  { name: "Concluído", value: 231, fill: "var(--chart-concluido)" },
  { name: "Em Análise", value: 89, fill: "var(--chart-em-analise)" },
  { name: "Enviado", value: 45, fill: "var(--chart-enviado)" },
  { name: "Cancelado", value: 23, fill: "var(--chart-cancelado)" },
];

const statusData = [
  { status: "CRÍTICO", count: 12, fill: "var(--chart-crit)" },
  { status: "MODERADO", count: 25, fill: "var(--chart-moderate)" },
  { status: "LEVE", count: 34, fill: "var(--chart-light)" },
  { status: "PREVENTIVO", count: 18, fill: "var(--chart-prevent)" },
];

const chartConfig = {
  tasks: {
    label: "Tarefas Totais",
    color: "var(--chart-1)",
  },
  concluidos: {
    label: "Tarefas Concluídas",
    color: "var(--chart-2)",
  },
  problemas: {
    label: "Problemas",
    color: "var(--chart-3)",
  },
} as const;

export default function TutorialChartsPage() {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
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
            <span className="text-foreground">Guia de Charts</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <BarChart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Guia de Charts</h1>
                <Badge variant="secondary" className="mt-2">
                  Guia de Uso
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Aprenda como usar os componentes de gráficos com as cores
              padronizadas do hollow-UI.
            </p>
          </div>

          {/* Cores Padronizadas */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Paleta de Cores hollow-UI
              </CardTitle>
              <CardDescription>
                Cores padronizadas definidas no sistema de temas para
                consistência visual
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Cores principais */}
              <div>
                <h4 className="font-semibold mb-3">Cores Principais</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-1)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-1</div>
                    <div className="text-xs text-muted-foreground">#d00b12</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #d00b12
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-2)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-2</div>
                    <div className="text-xs text-muted-foreground">#9a1c1f</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #9a1c1f
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-3)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-3</div>
                    <div className="text-xs text-muted-foreground">#f87171</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #f87171
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-4)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-4</div>
                    <div className="text-xs text-muted-foreground">#64748b</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #64748b
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-5)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-5</div>
                    <div className="text-xs text-muted-foreground">#94a3b8</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #94a3b8
                    </div>
                  </div>
                </div>
              </div>

              {/* Cores de Status */}
              <div>
                <h4 className="font-semibold mb-3">
                  Cores de Status de Tarefas
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-concluido)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-concluido</div>
                    <div className="text-xs text-muted-foreground">#6ee7b7</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #22c55e
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-em-analise)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-em-analise</div>
                    <div className="text-xs text-muted-foreground">#22d3ee</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #3b82f6
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-enviado)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-enviado</div>
                    <div className="text-xs text-muted-foreground">#a855f7</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #8b5cf6
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-cancelado)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-cancelado</div>
                    <div className="text-xs text-muted-foreground">#a1a1aa</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #64748b
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-warning)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-warning</div>
                    <div className="text-xs text-muted-foreground">#e11d48</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #f43f5e
                    </div>
                  </div>
                </div>
              </div>

              {/* Cores de Programa */}
              <div>
                <h4 className="font-semibold mb-3">Cores de Programa</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-program-1)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-program-1</div>
                    <div className="text-xs text-muted-foreground">#ef4444</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #f43f5e
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-program-2)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-program-2</div>
                    <div className="text-xs text-muted-foreground">#dc2626</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #c81e3c
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-program-3)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-program-3</div>
                    <div className="text-xs text-muted-foreground">#b91c1c</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #a7182f
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-program-4)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-program-4</div>
                    <div className="text-xs text-muted-foreground">#991b1b</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #7a1222
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-program-5)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-program-5</div>
                    <div className="text-xs text-muted-foreground">#7f1d1d</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #4a0b13
                    </div>
                  </div>
                </div>
              </div>

              {/* Cores de Criticidade */}
              <div>
                <h4 className="font-semibold mb-3">Cores de Criticidade</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-crit)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-crit</div>
                    <div className="text-xs text-muted-foreground">#ff4848</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #ef4444
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-moderate)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-moderate</div>
                    <div className="text-xs text-muted-foreground">#ff8c3a</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #f97316
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-light)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-light</div>
                    <div className="text-xs text-muted-foreground">#ffd24b</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #eab308
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-prevent)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-prevent</div>
                    <div className="text-xs text-muted-foreground">#44ff88</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #22c55e
                    </div>
                  </div>
                </div>
              </div>

              {/* Cores de Métricas */}
              <div>
                <h4 className="font-semibold mb-3">Cores de Métricas</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-metric-1)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-metric-1</div>
                    <div className="text-xs text-muted-foreground">#10b981</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #10b981
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-metric-2)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-metric-2</div>
                    <div className="text-xs text-muted-foreground">#3b82f6</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #3b82f6
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-metric-3)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-metric-3</div>
                    <div className="text-xs text-muted-foreground">#f59e0b</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #f59e0b
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-metric-4)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-metric-4</div>
                    <div className="text-xs text-muted-foreground">#ef4444</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #ef4444
                    </div>
                  </div>
                </div>
              </div>

              {/* Cores de Performance */}
              <div>
                <h4 className="font-semibold mb-3">Cores de Performance</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-performance-1)" }}
                    ></div>
                    <div className="text-xs font-mono">
                      --chart-performance-1
                    </div>
                    <div className="text-xs text-muted-foreground">#059669</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #059669
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-performance-2)" }}
                    ></div>
                    <div className="text-xs font-mono">
                      --chart-performance-2
                    </div>
                    <div className="text-xs text-muted-foreground">#dc2626</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #dc2626
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-performance-3)" }}
                    ></div>
                    <div className="text-xs font-mono">
                      --chart-performance-3
                    </div>
                    <div className="text-xs text-muted-foreground">#7c3aed</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #7c3aed
                    </div>
                  </div>
                </div>
              </div>

              {/* Cores Adicionais */}
              <div>
                <h4 className="font-semibold mb-3">Cores Adicionais</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-baby)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-baby</div>
                    <div className="text-xs text-muted-foreground">#4384fd</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #6f98f2
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 mx-auto rounded-lg border-2 border-border mb-2"
                      style={{ backgroundColor: "var(--chart-selected)" }}
                    ></div>
                    <div className="text-xs font-mono">--chart-selected</div>
                    <div className="text-xs text-muted-foreground">#8884d8</div>
                    <div className="text-xs text-muted-foreground opacity-70">
                      Dark: #ffffffa5
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configuração Inicial */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>1. Configuração das Variáveis CSS</CardTitle>
              <CardDescription>
                Defina as variáveis de cor no seu globals.css seguindo o padrão
                hollow-UI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="globals.css"
                code={`:root {
  /* Cores principais dos gráficos - valores HSL */
  --chart-1: 356 91% 43%;  /* #d00b12 */
  --chart-2: 356 73% 35%;  /* #9a1c1f */
  --chart-3: 0 70% 70%;    /* #f87171 */
  --chart-4: 215 16% 47%;  /* #64748b */
  --chart-5: 215 14% 64%;  /* #94a3b8 */
  
  /* Cores específicas de status */
  --chart-concluido: 149 76% 67%;    /* #6ee7b7 */
  --chart-em-analise: 186 78% 53%;   /* #22d3ee */
  --chart-enviado: 271 81% 56%;      /* #a855f7 */
  --chart-cancelado: 0 0% 64%;       /* #a1a1aa */
  --chart-warning: 348 83% 47%;      /* #e11d48 */
  
  /* Cores de criticidade */
  --chart-crit: 0 100% 64%;      /* #ff4848 */
  --chart-moderate: 20 95% 60%;  /* #ff8c3a */
  --chart-light: 44 100% 64%;    /* #ffd24b */
  --chart-prevent: 140 100% 64%; /* #44ff88 */
  
  /* Cores de Métricas e Performance */
  --chart-metric-1: 158 64% 52%;    /* #10b981 */
  --chart-metric-2: 221 83% 53%;    /* #3b82f6 */
  --chart-metric-3: 38 92% 50%;     /* #f59e0b */
  --chart-metric-4: 0 84% 60%;      /* #ef4444 */
  --chart-performance-1: 160 84% 39%;  /* #059669 */
  --chart-performance-2: 0 74% 42%;    /* #dc2626 */
  --chart-performance-3: 262 83% 58%;  /* #7c3aed */
}

.dark {
  /* Adaptações para modo escuro - mantém compatibilidade */
  --chart-1: 356 91% 43%;         /* #d00b12 */
  --chart-2: 356 73% 35%;         /* #9a1c1f */
  --chart-3: 0 70% 70%;           /* #f87171 */
  --chart-concluido: 142 71% 45%; /* #22c55e */
  --chart-em-analise: 221 83% 53%; /* #3b82f6 */
  --chart-enviado: 262 83% 58%;   /* #8b5cf6 */
  --chart-cancelado: 215 16% 47%; /* #64748b */
  --chart-crit: 0 84% 60%;        /* #ef4444 */
  --chart-moderate: 21 90% 48%;   /* #f97316 */
  --chart-light: 45 93% 47%;      /* #eab308 */
  --chart-prevent: 142 71% 45%;   /* #22c55e */
}

.contrast {
  /* Adaptações para alto contraste */
  --chart-1: 356 91% 43%;    /* #d00b12 */
  --chart-2: 356 73% 35%;    /* #9a1c1f */
  --chart-3: 0 100% 70%;     /* #ff6666 */
  --chart-4: 0 0% 100%;      /* #ffffff */
  --chart-5: 0 0% 80%;       /* #cccccc */
  --chart-concluido: 142 71% 45%;  /* #22c55e */
  --chart-em-analise: 221 83% 53%; /* #3b82f6 */
  --chart-enviado: 61 100% 97%;    /* #f6ff00 */
  --chart-cancelado: 0 0% 38%;     /* #616060 */
  --chart-crit: 0 100% 50%;        /* #ff0000 */
  --chart-moderate: 60 100% 50%;   /* #ffff00 */
  --chart-light: 60 100% 50%;      /* #ffff00 */
  --chart-prevent: 120 100% 50%;   /* #00ff00 */
}`}
              />
            </CardContent>
          </Card>

          {/* Gráfico de Barras */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>2. Gráfico de Barras - Problemas Mensais</CardTitle>
              <CardDescription>
                Exemplo baseado no gráfico de tarefas mensais Control
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="h-80 w-full -translate-x-5">
                <ChartContainer config={chartConfig} className="h-80 w-full">
                  <RechartsBarChart data={chartDataExample}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar
                      dataKey="problemas"
                      fill="var(--chart-1)"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="concluidos"
                      fill="var(--chart-2)"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="problemas"
                      fill="var(--chart-3)"
                      radius={[4, 4, 0, 0]}
                    />
                  </RechartsBarChart>
                </ChartContainer>
              </div>

              <CodeBlock
                title="Componente - GraficoPRMensal.tsx"
                code={`"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", problemas: 45, concluidos: 32, abertos: 13 },
  { month: "Fev", problemas: 52, concluidos: 41, abertos: 11 },
  { month: "Mar", problemas: 38, concluidos: 29, abertos: 9 },
  { month: "Abr", problemas: 61, concluidos: 48, abertos: 13 },
  { month: "Mai", problemas: 44, concluidos: 36, abertos: 8 },
  { month: "Jun", problemas: 57, concluidos: 45, abertos: 12 },
];

const chartConfig = {
  problemas: {
    label: "Problemas Totais",
    color: "var(--chart-1)",
  },
  concluidos: {
    label: "Problemas Resolvidos", 
    color: "var(--chart-2)",
  },
  problemas: {
    label: "Problemas",
    color: "var(--chart-3)",
  },
};

export function GraficoPRMensal() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Problemas por Mês</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-80">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="problemas" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="concluidos" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="abertos" fill="var(--chart-3)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}`}
              />
            </CardContent>
          </Card>

          {/* Gráfico de Pizza */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>3. Gráfico de Pizza - Status dos Problemas</CardTitle>
              <CardDescription>
                Distribuição de status usando as cores específicas do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="h-80">
                <ChartContainer
                  config={{}}
                  className="mx-auto aspect-square max-h-80 h-full"
                >
                  <RechartsPieChart>
                    <ChartTooltip
                      content={<ChartTooltipContent nameKey="name" />}
                    />
                    <Pie
                      data={pieChartData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <ChartLegend content={<ChartLegendContent />} />
                  </RechartsPieChart>
                </ChartContainer>
              </div>

              <CodeBlock
                title="Componente - GraficoStatusProblemas.tsx"
                code={`"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Concluído", value: 231, fill: "var(--chart-concluido)" },
  { name: "Em Análise", value: 89, fill: "var(--chart-em-analise)" },
  { name: "Enviado", value: 45, fill: "var(--chart-enviado)" },
  { name: "Cancelado", value: 23, fill: "var(--chart-cancelado)" },
];

export function GraficoStatusProblemas() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Status dos Problemas</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{}} className="mx-auto aspect-square max-h-[300px]">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
            >
              {data.map((entry, index) => (
                <Cell key={\`cell-\${index}\`} fill={entry.fill} />
              ))}
            </Pie>
            <ChartLegend content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}`}
              />
            </CardContent>
          </Card>

          {/* Gráfico de Área */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                4. Gráfico de Área - Problemas por Criticidade
              </CardTitle>
              <CardDescription>
                Usando as cores específicas de criticidade do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="h-80 w-full">
                <ChartContainer
                  config={{
                    crit: { label: "Crítico", color: "var(--chart-crit)" },
                    moderate: {
                      label: "Moderado",
                      color: "var(--chart-moderate)",
                    },
                    light: { label: "Leve", color: "var(--chart-light)" },
                    prevent: {
                      label: "Preventivo",
                      color: "var(--chart-prevent)",
                    },
                  }}
                  className="h-80 w-full"
                >
                  <RechartsAreaChart
                    data={[
                      {
                        month: "Jan",
                        crit: 15,
                        moderate: 22,
                        light: 28,
                        prevent: 12,
                      },
                      {
                        month: "Fev",
                        crit: 12,
                        moderate: 25,
                        light: 31,
                        prevent: 15,
                      },
                      {
                        month: "Mar",
                        crit: 18,
                        moderate: 28,
                        light: 25,
                        prevent: 18,
                      },
                      {
                        month: "Abr",
                        crit: 10,
                        moderate: 23,
                        light: 34,
                        prevent: 22,
                      },
                      {
                        month: "Mai",
                        crit: 14,
                        moderate: 20,
                        light: 29,
                        prevent: 19,
                      },
                      {
                        month: "Jun",
                        crit: 8,
                        moderate: 18,
                        light: 32,
                        prevent: 25,
                      },
                    ]}
                  >
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="prevent"
                      stackId="1"
                      stroke="var(--chart-prevent)"
                      fill="var(--chart-prevent)"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="light"
                      stackId="1"
                      stroke="var(--chart-light)"
                      fill="var(--chart-light)"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="moderate"
                      stackId="1"
                      stroke="var(--chart-moderate)"
                      fill="var(--chart-moderate)"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="crit"
                      stackId="1"
                      stroke="var(--chart-crit)"
                      fill="var(--chart-crit)"
                      fillOpacity={0.6}
                    />
                    <ChartLegend content={<ChartLegendContent />} />
                  </RechartsAreaChart>
                </ChartContainer>
              </div>

              <CodeBlock
                title="Componente - GraficoProblemasPrograma.tsx"
                code={`"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { AreaChart, Area, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", crit: 15, moderate: 22, light: 28, prevent: 12 },
  { month: "Fev", crit: 12, moderate: 25, light: 31, prevent: 15 },
  { month: "Mar", crit: 18, moderate: 28, light: 25, prevent: 18 },
  { month: "Abr", crit: 10, moderate: 23, light: 34, prevent: 22 },
  { month: "Mai", crit: 14, moderate: 20, light: 29, prevent: 19 },
  { month: "Jun", crit: 8, moderate: 18, light: 32, prevent: 25 },
];

const chartConfig = {
  crit: { label: "Crítico", color: "var(--chart-crit)" },
  moderate: { label: "Moderado", color: "var(--chart-moderate)" },
  light: { label: "Leve", color: "var(--chart-light)" },
  prevent: { label: "Preventivo", color: "var(--chart-prevent)" },
};

export function GraficoProblemasPrograma() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolução de Problemas por Criticidade</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-80">
          <AreaChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area 
              type="monotone" 
              dataKey="prevent" 
              stackId="1" 
              stroke="var(--chart-prevent)" 
              fill="var(--chart-prevent)" 
              fillOpacity={0.6}
            />
            <Area 
              type="monotone" 
              dataKey="light" 
              stackId="1" 
              stroke="var(--chart-light)" 
              fill="var(--chart-light)" 
              fillOpacity={0.6}
            />
            <Area 
              type="monotone" 
              dataKey="moderate" 
              stackId="1" 
              stroke="var(--chart-moderate)" 
              fill="var(--chart-moderate)" 
              fillOpacity={0.6}
            />
            <Area 
              type="monotone" 
              dataKey="crit" 
              stackId="1" 
              stroke="var(--chart-crit)" 
              fill="var(--chart-crit)" 
              fillOpacity={0.6}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}`}
              />
            </CardContent>
          </Card>

          {/* Instalação do Recharts */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>5. Instalação e Dependências</CardTitle>
              <CardDescription>
                Pacotes necessários para implementar os gráficos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CodeBlock title="Instalação" code="npm install recharts" />

              <div className="bg-blue-50 border border-blue-200 dark:bg-blue-500/20 dark:border-blue-600 rounded-lg p-4 mt-6">
                <p className="text-sm text-black dark:text-white contrast:text-black">
                  <strong>💡 Nota:</strong> Os componentes Chart
                  (ChartContainer, ChartTooltip, etc.) já estão incluídos no
                  hollow-UI e são baseados no shadcn/ui com estilizações
                  customizadas.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Padrões de Uso */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>6. Padrões e Boas Práticas</CardTitle>
              <CardDescription>
                Diretrizes para uso consistente dos gráficos no hollow-UI
                Control
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">🎨 Uso de Cores</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>
                      <strong>chart-1 a chart-5:</strong> Para séries de dados
                      gerais
                    </li>
                    <li>
                      <strong>chart-concluido, chart-em-analise, etc.:</strong>{" "}
                      Especificamente para status de problemas
                    </li>
                    <li>
                      <strong>chart-crit, chart-moderate, etc.:</strong> Para
                      níveis de criticidade
                    </li>
                    <li>
                      <strong>chart-metric-1 a chart-metric-4:</strong> Para
                      métricas e indicadores diversos
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">
                    📊 Tipos de Gráfico por Contexto
                  </h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>
                      <strong>Barras:</strong> Comparações mensais, contagens
                      por categoria
                    </li>
                    <li>
                      <strong>Pizza:</strong> Distribuição de status, proporções
                    </li>
                    <li>
                      <strong>Linha:</strong> Tendências ao longo do tempo
                    </li>
                    <li>
                      <strong>Área:</strong> Volumes cumulativos, progressão
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🎯 Responsividade</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>
                      Sempre use <code>ChartContainer</code> para wrapper
                      responsivo
                    </li>
                    <li>
                      Defina altura fixa ou use classes como <code>h-80</code>
                    </li>
                    <li>Configure tooltips e legendas para mobile</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">♿ Acessibilidade</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside ml-4">
                    <li>
                      Use <code>ChartTooltip</code> para informações detalhadas
                    </li>
                    <li>
                      Inclua legendas com <code>ChartLegend</code>
                    </li>
                    <li>Teste com modo de alto contraste</li>
                    <li>Forneça textos alternativos quando necessário</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exemplo Completo */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Exemplo Completo: Dashboard de Performance
              </CardTitle>
              <CardDescription>
                Implementação completa baseada no padrão hollow-UI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                title="Dashboard.tsx - Exemplo Completo"
                code={`"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, Cell } from "recharts";

// Dados de exemplo
const performanceData = [
  { month: "Jan", metric1: 85, metric2: 72, metric3: 68, metric4: 91 },
  { month: "Fev", metric1: 88, metric2: 75, metric3: 71, metric4: 89 },
  { month: "Mar", metric1: 92, metric2: 78, metric3: 74, metric4: 87 },
  { month: "Abr", metric1: 87, metric2: 81, metric3: 77, metric4: 93 },
];

const statusDistribution = [
  { name: "Concluído", value: 231, fill: "var(--chart-concluido)" },
  { name: "Em Análise", value: 89, fill: "var(--chart-em-analise)" },
  { name: "Enviado", value: 45, fill: "var(--chart-enviado)" },
  { name: "Cancelado", value: 23, fill: "var(--chart-cancelado)" },
];

const metricConfig = {
  metric1: { label: "Qualidade", color: "var(--chart-metric-1)" },
  metric2: { label: "Prazo", color: "var(--chart-metric-2)" },
  metric3: { label: "Custo", color: "var(--chart-metric-3)" },
  metric4: { label: "Satisfação", color: "var(--chart-metric-4)" },
};

export function DashboardPerformance() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Métricas por Mês */}
      <Card>
        <CardHeader>
          <CardTitle>Performance - Métricas Mensais</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={metricConfig} className="h-80">
            <LineChart data={performanceData}>
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line 
                type="monotone" 
                dataKey="metric1" 
                stroke="var(--chart-metric-1)" 
                strokeWidth={2}
                dot={{ fill: "var(--chart-metric-1)" }}
              />
              <Line 
                type="monotone" 
                dataKey="metric2" 
                stroke="var(--chart-metric-2)" 
                strokeWidth={2}
                dot={{ fill: "var(--chart-metric-2)" }}
              />
              <Line 
                type="monotone" 
                dataKey="metric3" 
                stroke="var(--chart-metric-3)" 
                strokeWidth={2}
                dot={{ fill: "var(--chart-metric-3)" }}
              />
              <Line 
                type="monotone" 
                dataKey="metric4" 
                stroke="var(--chart-metric-4)" 
                strokeWidth={2}
                dot={{ fill: "var(--chart-metric-4)" }}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Distribuição de Status */}
      <Card>
        <CardHeader>
          <CardTitle>Distribuição de Status</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="mx-auto aspect-square max-h-[300px]">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
              <Pie
                data={statusDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, percent }) => \`\${name} \${(percent * 100).toFixed(0)}%\`}
              >
                {statusDistribution.map((entry, index) => (
                  <Cell key={\`cell-\${index}\`} fill={entry.fill} />
                ))}
              </Pie>
              <ChartLegend content={<ChartLegendContent />} />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
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
