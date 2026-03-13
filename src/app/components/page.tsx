"use client";

import Link from "next/link";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/registry/ui/card";
import { Input } from "@/registry/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";
import { AppLayout } from "@/components/layout";
import React, { useState, useMemo } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Search, FileText, Layout, Palette } from "lucide-react";

const components = [
  // Core Components
  {
    name: "Button",
    description: "Botão altamente customizável com múltiplas variantes.",
    href: "/components/button",
    category: "core",
    tags: ["ui", "interaction", "action"],
  },
  {
    name: "Input",
    description: "Campo de entrada de texto estilizado e acessível.",
    href: "/components/input",
    category: "core",
    tags: ["form", "text", "input"],
  },
  {
    name: "Badge",
    description: "Pequenos rótulos para categorizar e marcar conteúdo.",
    href: "/components/badge",
    category: "core",
    tags: ["ui", "status", "label"],
  },
  {
    name: "Label",
    description: "Rótulo para elementos de formulário.",
    href: "/components/label",
    category: "core",
    tags: ["form", "text", "accessibility"],
  },
  {
    name: "Card",
    description: "Container flexível e extensível para exibir conteúdo.",
    href: "/components/card",
    category: "layout",
    tags: ["ui", "container", "layout"],
  },
  {
    name: "Dialog",
    description: "Modal sobreposto para interações focadas.",
    href: "/components/dialog",
    category: "overlay",
    tags: ["modal", "popup", "overlay"],
  },
  {
    name: "Popover",
    description: "Componente de overlay flutuante para conteúdo contextual.",
    href: "/components/popover",
    category: "overlay",
    tags: ["popup", "contextual", "tooltip"],
  },
  {
    name: "Select",
    description: "Seletor dropdown personalizado.",
    href: "/components/select",
    category: "form",
    tags: ["form", "dropdown", "selection"],
  },
  {
    name: "Textarea",
    description: "Campo de entrada de texto multilinha para formulários.",
    href: "/components/textarea",
    category: "form",
    tags: ["form", "text", "multiline"],
  },
  {
    name: "Checkbox",
    description: "Caixa de seleção para formulários.",
    href: "/components/checkbox",
    category: "form",
    tags: ["form", "selection", "boolean"],
  },
  {
    name: "Switch",
    description: "Controle de alternância para estados binários.",
    href: "/components/switch",
    category: "form",
    tags: ["form", "toggle", "boolean"],
  },
  {
    name: "Toggle",
    description: "Botões de alternância para estados binários e grupos.",
    href: "/components/toggle",
    category: "form",
    tags: ["form", "toggle", "button"],
  },
  {
    name: "Table",
    description: "Tabela responsiva para exibir dados tabulares.",
    href: "/components/table",
    category: "data",
    tags: ["data", "table", "grid"],
  },
  {
    name: "Accordion",
    description: "Lista de itens recolhíveis verticalmente.",
    href: "/components/accordion",
    category: "layout",
    tags: ["collapse", "expand", "navigation"],
  },
  {
    name: "Dropdown Menu",
    description: "Menu dropdown com suporte a submenus e checkboxes.",
    href: "/components/dropdown-menu",
    category: "overlay",
    tags: ["menu", "dropdown", "navigation"],
  },
  {
    name: "StatCard",
    description:
      "Cards estatísticos com gradientes e múltiplas variantes de cor.",
    href: "/components/stat-card",
    category: "data",
    tags: ["statistics", "cards", "data", "dashboard"],
  },
  {
    name: "Skeleton",
    description: "Placeholder animado para indicar carregamento de conteúdo.",
    href: "/components/skeleton",
    category: "data",
    tags: ["loading", "placeholder", "skeleton"],
  },
  {
    name: "Separator",
    description: "Linha divisória visual para separar conteúdo e seções.",
    href: "/components/separator",
    category: "layout",
    tags: ["divider", "separator", "layout"],
  },
  {
    name: "Scroll Area",
    description: "Área com scroll personalizado e estilização consistente.",
    href: "/components/scroll-area",
    category: "layout",
    tags: ["scroll", "overflow", "scrollbar"],
  },
  // Specialized Components
  {
    name: "HeaderStats",
    description: "Cards de estatísticas com efeito 3D para dashboards.",
    href: "/components/header-stats",
    category: "specialized",
    tags: ["dashboard", "statistics", "3d"],
  },
  {
    name: "InfoCard",
    description: "Card informativo com efeitos hover e botões de ação.",
    href: "/components/info-card",
    category: "specialized",
    tags: ["information", "interactive", "card"],
  },
  {
    name: "BackToTopButton",
    description: "Botão flutuante para retornar ao topo da página.",
    href: "/components/back-to-top-button",
    category: "specialized",
    tags: ["navigation", "scroll", "floating"],
  },
  {
    name: "MultiSelect",
    description: "Seleção múltipla com busca, checkboxes e badges removíveis.",
    href: "/components/multi-select",
    category: "form",
    tags: ["form", "selection", "multiple", "search"],
  },
  {
    name: "CalendarInput",
    description: "Entrada de data com formatação automática e calendário.",
    href: "/components/calendar-input",
    category: "form",
    tags: ["form", "date", "calendar", "input"],
  },
  {
    name: "FileUploadArea",
    description: "Área de upload com drag & drop e preview de arquivo.",
    href: "/components/file-upload-area",
    category: "form",
    tags: ["form", "upload", "file", "drag-drop"],
  },
  {
    name: "Navigation",
    description:
      "Componente de navegação responsivo com ícones e estados ativos.",
    href: "/components/navigation",
    category: "layout",
    tags: ["navigation", "menu", "responsive"],
  },
  {
    name: "NavRail",
    description:
      "Trilho de navegação vertical colapsável com suporte a mobile e variantes de estilo.",
    href: "/components/nav-rail",
    category: "layout",
    tags: ["navigation", "sidebar", "collapsible", "rail"],
  },
  {
    name: "StatusBadge",
    description:
      "Badge de status com ícones e cores diferenciadas por contexto.",
    href: "/components/status-badge",
    category: "specialized",
    tags: ["status", "badge", "state"],
  },
  {
    name: "HeaderButton",
    description:
      "Botão especializado para headers com badges e conteúdo personalizado.",
    href: "/components/header-button",
    category: "specialized",
    tags: ["header", "button", "badge"],
  },
  {
    name: "Header",
    description: "Cabeçalho completo com logo, título, ações e menu mobile.",
    href: "/components/header",
    category: "layout",
    tags: ["header", "navigation", "branding"],
  },
  {
    name: "Footer",
    description: "Rodapé flexível com seções, links organizados e copyright.",
    href: "/components/footer",
    category: "layout",
    tags: ["footer", "links", "copyright"],
  },
];

const guias = [
  {
    name: "Guia de Tema",
    description:
      "Guia completo para configurar sistema de temas em seu projeto.",
    href: "/components/tutorial-tema",
    category: "guias",
    tags: ["theme", "configuration", "setup"],
  },
  {
    name: "Guia de Charts",
    description: "Aprenda a usar gráficos com as cores padrão do hollow-UI.",
    href: "/components/tutorial-charts",
    category: "guias",
    tags: ["charts", "graphs", "data-visualization"],
  },
  {
    name: "Guia de Uso - Toast",
    description: "Sistema de notificações toast elegante e customizável.",
    href: "/components/sonner",
    category: "guias",
    tags: ["toast", "notification", "feedback"],
  },
];

const categoryIcons = {
  core: Layout,
  form: FileText,
  layout: Layout,
  overlay: Layout,
  data: FileText,
  specialized: Palette,
  guias: FileText,
};

const categoryNames = {
  core: "Componentes Base",
  form: "Formulários",
  layout: "Layout",
  overlay: "Sobreposições",
  data: "Dados",
  specialized: "Especializados",
  guias: "Guias de Uso",
};

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Combine components and guias for filtering
  const allItems = useMemo(() => {
    return [
      ...components.map((item) => ({ ...item, type: "component" })),
      ...guias.map((item) => ({ ...item, type: "guia" })),
    ];
  }, []);

  // Filter items based on search query and category
  const filteredItems = useMemo(() => {
    let filtered = allItems;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    return filtered;
  }, [allItems, searchQuery, selectedCategory]);

  // Group filtered items by category
  const groupedItems = useMemo(() => {
    const groups: { [key: string]: typeof filteredItems } = {};

    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });

    return groups;
  }, [filteredItems]);

  // Get unique categories from all items (not filtered)
  const availableCategories = useMemo(() => {
    const categories = new Set(allItems.map((item) => item.category));
    return Array.from(categories).sort();
  }, [allItems]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Installation Section */}
        <div className="mb-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Instalação</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Via NPM</h3>
              <section className="space-y-4 mb-8">
                <CodeBlock
                  title="Instalação"
                  code="npm install @scmposs/hollow-ui@latest"
                />
              </section>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Via CLI</h3>
              <section className="space-y-4 mb-8">
                <CodeBlock
                  title="Inicializar projeto"
                  code="npx @scmposs/hollow-ui init"
                />
                <CodeBlock
                  title="Adicionar componentes"
                  code="npx @scmposs/hollow-ui add button card badge"
                />
              </section>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Uso</h3>
              <section className="space-y-4 mb-8">
                <CodeBlock
                  title="Exemplo de uso"
                  code={`import { Button } from "@scmposs/hollow-ui"

function App() {
  return <Button>Clique aqui</Button>
}`}
                />
              </section>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Componentes & Guias</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Componentes bonitos e reutilizáveis construídos com Radix UI e
            Tailwind CSS, além de guias completos para configuração e uso.
          </p>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar componentes e guias..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Select
              value={selectedCategory || "all"}
              onValueChange={(value) =>
                setSelectedCategory(value === "all" ? "" : value)
              }
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Todas as categorias" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as categorias</SelectItem>
                {availableCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {categoryNames[category as keyof typeof categoryNames] ||
                      category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {(searchQuery || selectedCategory) && (
              <Button
                variant="clearFilter"
                onClick={clearFilters}
                className="whitespace-nowrap"
              >
                Limpar Filtros
              </Button>
            )}
          </div>

          {/* Results Summary */}
          <div className="text-sm text-muted-foreground mb-6">
            {searchQuery || selectedCategory ? (
              <>
                Mostrando {filteredItems.length} de {allItems.length} itens
                {searchQuery && ` para "${searchQuery}"`}
                {selectedCategory &&
                  ` na categoria "${
                    categoryNames[
                      selectedCategory as keyof typeof categoryNames
                    ]
                  }"`}
              </>
            ) : (
              `${allItems.length} componentes e guias disponíveis`
            )}
          </div>
        </div>

        {/* Content Sections */}
        {Object.keys(groupedItems).length === 0 ? (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Nenhum resultado encontrado</p>
              <p className="text-sm">Tente ajustar sua pesquisa ou filtros</p>
            </div>
            {(searchQuery || selectedCategory) && (
              <Button variant="outline" onClick={clearFilters}>
                Limpar Filtros
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(groupedItems)
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([category, items]) => {
                const IconComponent =
                  categoryIcons[category as keyof typeof categoryIcons] ||
                  Layout;
                return (
                  <section key={category}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-muted/90 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-foreground dark:text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">
                          {categoryNames[
                            category as keyof typeof categoryNames
                          ] || category}
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          {items.length} {items.length === 1 ? "item" : "itens"}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {items.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <Card className="h-full hover:shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer group">
                            <CardHeader className="pb-4">
                              <div className="flex items-start justify-between">
                                <CardTitle className="text-lg group-hover:text-accent dark:group-hover:text-primary transition-colors">
                                  {item.name}
                                </CardTitle>
                                <Badge
                                  variant={
                                    item.type === "guia"
                                      ? "secondary"
                                      : "outline"
                                  }
                                  className="text-xs shrink-0 ml-2"
                                >
                                  {item.type === "guia" ? "Guia" : "Componente"}
                                </Badge>
                              </div>
                              <CardDescription className="text-sm leading-relaxed">
                                {item.description}
                              </CardDescription>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-1 mt-3">
                                {item.tags.slice(0, 3).map((tag: string) => (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                                {item.tags.length > 3 && (
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    +{item.tags.length - 3}
                                  </Badge>
                                )}
                              </div>
                            </CardHeader>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </section>
                );
              })}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
