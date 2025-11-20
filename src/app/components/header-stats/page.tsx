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
import {
  HeaderStats,
  HeaderStatsGrid,
  HeaderStatCardMini,
  HeaderStatCardCompact,
} from "@/registry/ui/HeaderStats";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  ClipboardClock,
  Users,
  Package,
  TrendingUp,
  Activity,
  Target,
} from "lucide-react";

export default function HeaderStatsPage() {
  const exampleStats = [
    {
      title: "Total",
      value: "2,431",
      description: "Registros no sistema",
      icon: FileText,
      borderColor: "border-l-4 border-l-slate-500",
      iconBgColor: "bg-slate-100 dark:bg-slate-900/20 contrast:bg-white/30",
      iconColor: "text-slate-600 dark:text-slate-400 contrast:text-primary",
    },
    {
      title: "Pendentes",
      value: "143",
      description: "Aguardando aprovação",
      icon: ClipboardClock,
      borderColor: "border-l-4 border-l-blue-500",
      iconBgColor: "bg-blue-100 dark:bg-blue-900/20 contrast:bg-white/30",
      iconColor: "text-blue-600 dark:text-blue-400 contrast:text-primary",
    },
    {
      title: "Concluídos",
      value: "2,108",
      description: "Finalizados com sucesso",
      icon: CheckCircle2,
      borderColor: "border-l-4 border-l-green-500",
      iconBgColor: "bg-green-100 dark:bg-green-900/20 contrast:bg-white/30",
      iconColor: "text-green-600 dark:text-green-400 contrast:text-primary",
    },
    {
      title: "Problemas",
      value: "23",
      description: "Requerem atenção",
      icon: AlertCircle,
      borderColor: "border-l-4 border-l-red-500",
      iconBgColor: "bg-red-100 dark:bg-red-900/20 contrast:bg-white/30",
      iconColor: "text-red-600 dark:text-red-400 contrast:text-primary",
    },
  ];

  const salesStats = [
    {
      title: "Vendas",
      value: "R$ 45,2k",
      description: "+12% em relação ao mês anterior",
      icon: TrendingUp,
      borderColor: "border-l-4 border-l-emerald-500",
      iconBgColor: "bg-emerald-100 dark:bg-emerald-900/20 contrast:bg-white/30",
      iconColor: "text-emerald-600 dark:text-emerald-400 contrast:text-primary",
    },
    {
      title: "Clientes",
      value: "1,234",
      description: "+5 novos esta semana",
      icon: Users,
      borderColor: "border-l-4 border-l-purple-500",
      iconBgColor: "bg-purple-100 dark:bg-purple-900/20 contrast:bg-white/30",
      iconColor: "text-purple-600 dark:text-purple-400 contrast:text-primary",
    },
    {
      title: "Produtos",
      value: "89",
      description: "No catálogo ativo",
      icon: Package,
      borderColor: "border-l-4 border-l-orange-500",
      iconBgColor: "bg-orange-100 dark:bg-orange-900/20 contrast:bg-white/30",
      iconColor: "text-orange-600 dark:text-orange-400 contrast:text-primary",
    },
  ];

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
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
            <span className="text-foreground">HeaderStats</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">HeaderStats</h1>
            <p className="text-xl text-muted-foreground">
              Cards de estatísticas com efeito 3D para dashboards e painéis de
              controle.
            </p>
          </div>

          {/* Instalação via npm e cli */}
          <InstallationSection componentName="header-stats" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { Button } from "@scmposs/hollow-ui"
          
export default function MyComponent() {
  return (
    <div>
      <Button variant="outline">Button</Button>
    </div>
  );
}
`}
            />
          </section>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview - Dashboard Administrativo</CardTitle>
              <CardDescription>
                Exemplo de uso do HeaderStats em um dashboard real
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-muted/20 rounded-md">
                <HeaderStats stats={exampleStats} />
              </div>
            </CardContent>
          </Card>

          {/* Second Example */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview - Dashboard Comercial</CardTitle>
              <CardDescription>
                Variação com métricas de vendas e negócios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-muted/20 rounded-md">
                <HeaderStatsGrid stats={salesStats} columns={3} />
              </div>
            </CardContent>
          </Card>

          {/* HeaderStatsGrid Example */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview - HeaderStatsGrid (4x2)</CardTitle>
              <CardDescription>
                Grid fixo com 4 colunas, ideal para dashboards compactos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-muted/20 rounded-md">
                <HeaderStatsGrid stats={exampleStats} columns={4} />
              </div>
            </CardContent>
          </Card>

          {/* HeaderStatsGrid Columns Example */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                Preview - HeaderStatsGrid (Colunas Personalizáveis)
              </CardTitle>
              <CardDescription>
                Demonstração das diferentes configurações de colunas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* 3 Colunas */}
                <div>
                  <h4 className="font-medium mb-2">3 Colunas</h4>
                  <div className="p-4 bg-muted/20 rounded-md">
                    <HeaderStatsGrid
                      stats={exampleStats.slice(0, 3)}
                      columns={3}
                    />
                  </div>
                </div>

                {/* 4 Colunas */}
                <div>
                  <h4 className="font-medium mb-2">4 Colunas</h4>
                  <div className="p-4 bg-muted/20 rounded-md">
                    <HeaderStatsGrid stats={exampleStats} columns={4} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* HeaderStatCardMini Example */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview - HeaderStatCardMini</CardTitle>
              <CardDescription>
                Versão compacta sem animação 3D, ideal para sidebars
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-muted/20 rounded-md grid grid-cols-4 gap-4">
                <HeaderStatCardMini
                  title="Pedidos"
                  value="567"
                  description="Em processamento"
                  icon={Package}
                  borderColor="border-l-4 border-l-purple-500"
                  iconBgColor="bg-purple-100 dark:bg-purple-900/20 contrast:bg-white/30"
                  iconColor="text-purple-600 dark:text-purple-400 contrast:text-primary"
                />
                <HeaderStatCardMini
                  title="Receita"
                  value="R$ 78,9k"
                  description="Último trimestre"
                  icon={TrendingUp}
                  borderColor="border-l-4 border-l-emerald-500"
                  iconBgColor="bg-emerald-100 dark:bg-emerald-900/20 contrast:bg-white/30"
                  iconColor="text-emerald-600 dark:text-emerald-400 contrast:text-primary"
                />
                <HeaderStatCardMini
                  title="Feedbacks"
                  value="4.8/5"
                  description="Avaliação média"
                  icon={CheckCircle2}
                  borderColor="border-l-4 border-l-green-500"
                  iconBgColor="bg-green-100 dark:bg-green-900/20 contrast:bg-white/30"
                  iconColor="text-green-600 dark:text-green-400 contrast:text-primary"
                />
                <HeaderStatCardMini
                  title="Alertas"
                  value="12"
                  description="Pendentes hoje"
                  icon={AlertCircle}
                  borderColor="border-l-4 border-l-red-500"
                  iconBgColor="bg-red-100 dark:bg-red-900/20 contrast:bg-white/30"
                  iconColor="text-red-600 dark:text-red-400 contrast:text-primary"
                />
              </div>
            </CardContent>
          </Card>

          {/* HeaderStatCardCompact Example */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview - HeaderStatCardCompact</CardTitle>
              <CardDescription>
                Versão ultra compacta inline, ideal para dashboards densos e
                sidebars
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-muted/20 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Módulo Mais Ativo */}
                  <HeaderStatCardCompact
                    title="Módulo Mais Ativo"
                    value="Gerenciamento"
                    description="45 atualizações"
                    icon={Package}
                    borderColor="border-l-4 border-l-purple-500"
                    iconBgColor="bg-purple-100 dark:bg-purple-900/30"
                    iconColor="text-purple-600 dark:text-purple-400"
                    hasShadow={true}
                    shadowColor="purple"
                  />

                  {/* Taxa de Conclusão com Badge e Progresso */}
                  <HeaderStatCardCompact
                    title="Taxa de Conclusão"
                    icon={Target}
                    borderColor="border-l-4 border-l-green-500"
                    iconBgColor="bg-green-100 dark:bg-green-900/30"
                    iconColor="text-green-600 dark:text-green-400"
                    badgeValue="87%"
                    progressValue={87}
                    hasShadow={true}
                    shadowColor="green"
                  />

                  {/* Status Geral */}
                  <HeaderStatCardCompact
                    title="Status Geral"
                    value="Ativo"
                    description="12 pendentes de 143 totais"
                    icon={Activity}
                    borderColor="border-l-4 border-l-slate-500"
                    iconBgColor="bg-slate-100 dark:bg-slate-900/30"
                    iconColor="text-slate-600 dark:text-slate-400"
                    hasShadow={true}
                    shadowColor="slate"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* HeaderStatCardCompact (Cores da Barra de Progresso) */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                Preview - HeaderStatCardCompact (Cores da Barra de Progresso)
              </CardTitle>
              <CardDescription>
                Demonstração das diferentes cores da barra de progresso
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-6 bg-muted/20 rounded-md space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <HeaderStatCardCompact
                    title="Progresso Baixo"
                    icon={Activity}
                    borderColor="border-l-4 border-l-red-500"
                    iconBgColor="bg-red-100 dark:bg-red-900/30"
                    iconColor="text-red-600 dark:text-red-400"
                    badgeValue="25%"
                    progressValue={25}
                    hasShadow={true}
                    shadowColor="red"
                  />
                  <HeaderStatCardCompact
                    title="Progresso Médio"
                    icon={Activity}
                    borderColor="border-l-4 border-l-yellow-500"
                    iconBgColor="bg-yellow-100 dark:bg-yellow-900/30"
                    iconColor="text-yellow-600 dark:text-yellow-400"
                    badgeValue="50%"
                    progressValue={50}
                    hasShadow={true}
                    shadowColor="yellow"
                  />
                  <HeaderStatCardCompact
                    title="Progresso Alto"
                    icon={Activity}
                    borderColor="border-l-4 border-l-green-500"
                    iconBgColor="bg-green-100 dark:bg-green-900/30"
                    iconColor="text-green-600 dark:text-green-400"
                    badgeValue="85%"
                    progressValue={85}
                    hasShadow={true}
                    shadowColor="green"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { HeaderStats } from "@scmposs/hollow-ui"
import { FileText, CheckCircle2, AlertCircle } from "lucide-react"

const stats = [
  {
    title: "Total",
    value: "2,431",
    description: "Registros no sistema",
    icon: FileText,
    borderColor: "border-l-4 border-l-slate-500",
    iconBgColor: "bg-slate-100 dark:bg-slate-900/20",
    iconColor: "text-slate-600 dark:text-slate-400"
  },
  {
    title: "Concluídos",
    value: "2,108", 
    description: "Finalizados com sucesso",
    icon: CheckCircle2,
    borderColor: "border-l-4 border-l-green-500",
    iconBgColor: "bg-green-100 dark:bg-green-900/20",
    iconColor: "text-green-600 dark:text-green-400"
  }
]

<HeaderStats stats={stats} />`}
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
                  <h4 className="font-medium">🎨 Efeito 3D</h4>
                  <p className="text-sm text-muted-foreground">
                    Cards com efeito de profundidade que respondem ao hover
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">🌙 Suporte a Temas</h4>
                  <p className="text-sm text-muted-foreground">
                    Funciona com light, dark e contrast mode
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">📱 Responsivo</h4>
                  <p className="text-sm text-muted-foreground">
                    Layout adaptável para diferentes tamanhos de tela
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">🎯 Clicável</h4>
                  <p className="text-sm text-muted-foreground">
                    Suporte a funções onClick para navegação
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Props */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Variantes do Componente</CardTitle>
              <CardDescription>
                Quatro versões disponíveis para diferentes necessidades
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">
                  HeaderStats (Grid Responsivo)
                </h4>
                <CodeBlock
                  code={`import { HeaderStats } from "@/components/ui/header-stats";

<HeaderStats stats={stats} />
// Grid: 1 coluna (mobile) → 2 colunas (tablet) → 4 colunas (desktop)`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">
                  HeaderStatsGrid (Grid Personalizável)
                </h4>
                <CodeBlock
                  code={`import { HeaderStatsGrid } from "@/components/ui/header-stats";

// Grid padrão (2 colunas)
<HeaderStatsGrid stats={stats} />

// Grid personalizado (3 colunas)
<HeaderStatsGrid stats={stats} columns={3} />

// Grid personalizado (4 colunas)
<HeaderStatsGrid stats={stats} columns={4} />

// Grid personalizado (1 coluna)
<HeaderStatsGrid stats={stats} columns={1} />`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">
                  HeaderStatCardMini (Compacto)
                </h4>
                <CodeBlock
                  code={`import { HeaderStatCardMini } from "@/components/ui/header-stats";

<HeaderStatCardMini
  title="Usuários"
  value="1,234"
  description="Ativos no sistema"
  icon={Users}
  borderColor="border-l-4 border-l-purple-500"
  iconBgColor="bg-purple-100 dark:bg-purple-900/20"
  iconColor="text-purple-600 dark:text-purple-400"
/>
// Sem animação 3D, mais compacto`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">
                  HeaderStatCardCompact (Ultra Compacto)
                </h4>
                <CodeBlock
                  code={`import { HeaderStatCardCompact } from "@/components/ui/header-stats";

// Exemplo simples
<HeaderStatCardCompact
  title="Módulo Ativo"
  value="Dashboard"
  description="45 atualizações"
  icon={Package}
  borderColor="border-l-4 border-l-purple-500"
  iconBgColor="bg-purple-100 dark:bg-purple-900/30"
  iconColor="text-purple-600 dark:text-purple-400"
  hasShadow={true}
  shadowColor="purple"
/>

// Com badge e barra de progresso
<HeaderStatCardCompact
  title="Taxa de Conclusão"
  icon={Target}
  borderColor="border-l-4 border-l-green-500"
  iconBgColor="bg-green-100 dark:bg-green-900/30"
  iconColor="text-green-600 dark:text-green-400"
  badgeValue="87%"
  progressValue={87}
  hasShadow={true}
  shadowColor="green"
/>
// Versão inline, super compacto para dashboards densos`}
                />
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
                  <h4 className="font-medium mb-2">HeaderStats Props</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <code>stats</code>
                      <span className="text-muted-foreground">StatItem[]</span>
                    </div>
                    <p className="text-muted-foreground">
                      Array de objetos com dados dos cards de estatística
                    </p>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">StatItem Interface</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <code>title</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <div className="flex justify-between">
                      <code>value</code>
                      <span className="text-muted-foreground">
                        string | number
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <code>description</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <div className="flex justify-between">
                      <code>icon</code>
                      <span className="text-muted-foreground">LucideIcon</span>
                    </div>
                    <div className="flex justify-between">
                      <code>borderColor</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <div className="flex justify-between">
                      <code>iconBgColor</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <div className="flex justify-between">
                      <code>iconColor</code>
                      <span className="text-muted-foreground">string</span>
                    </div>
                    <div className="flex justify-between">
                      <code>onClick?</code>
                      <span className="text-muted-foreground">function</span>
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
