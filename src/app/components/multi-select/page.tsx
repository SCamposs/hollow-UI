"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/registry/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { MultiSelect, MultiSelectOption } from "@/registry/ui/multi-select";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import { ListFilter } from "lucide-react";

export default function MultiSelectPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const tagOptions: MultiSelectOption[] = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "devops", label: "DevOps" },
    { value: "mobile", label: "Mobile" },
    { value: "design", label: "Design" },
    { value: "data", label: "Data Science" },
    { value: "ai", label: "Inteligência Artificial" },
  ];

  const categoryOptions: MultiSelectOption[] = [
    { value: "technology", label: "Tecnologia" },
    { value: "business", label: "Negócios" },
    { value: "marketing", label: "Marketing" },
    { value: "sales", label: "Vendas" },
    { value: "support", label: "Suporte" },
    { value: "hr", label: "Recursos Humanos" },
  ];

  const countryOptions: MultiSelectOption[] = [
    { value: "br", label: "Brasil" },
    { value: "us", label: "Estados Unidos" },
    { value: "uk", label: "Reino Unido" },
    { value: "ca", label: "Canadá" },
    { value: "au", label: "Austrália" },
    { value: "de", label: "Alemanha" },
    { value: "fr", label: "França" },
    { value: "es", label: "Espanha" },
    { value: "it", label: "Itália" },
    { value: "jp", label: "Japão" },
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
            <span className="text-foreground">Multi Select</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <ListFilter className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Multi Select</h1>
                <Badge variant="secondary" className="mt-2">
                  Seleção Múltipla
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Componente de seleção múltipla com busca, checkboxes e badges
              removíveis.
            </p>
          </div>

          {/* Instalação */}
          <InstallationSection componentName="multi-select" />

          {/* Exemplo Interativo */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplo Interativo</CardTitle>
              <CardDescription>
                Experimente o componente Multi Select em diferentes cenários
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Exemplo 1 */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Áreas de Interesse
                </label>
                <MultiSelect
                  options={tagOptions}
                  value={selectedTags}
                  onValueChange={setSelectedTags}
                  placeholder="Selecione as áreas..."
                  searchPlaceholder="Buscar área..."
                  maxDisplay={3}
                />
                {selectedTags.length > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Selecionados: {selectedTags.join(", ")}
                  </p>
                )}
              </div>

              {/* Exemplo 2 */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Categorias</label>
                <MultiSelect
                  options={categoryOptions}
                  value={selectedCategories}
                  onValueChange={setSelectedCategories}
                  placeholder="Selecione as categorias..."
                  searchPlaceholder="Buscar categoria..."
                  maxDisplay={2}
                />
              </div>

              {/* Exemplo 3 - Com tamanho pequeno */}
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Países (Tamanho Pequeno)
                </label>
                <MultiSelect
                  options={countryOptions}
                  value={selectedCountries}
                  onValueChange={setSelectedCountries}
                  placeholder="Selecione os países..."
                  searchPlaceholder="Buscar país..."
                  size="sm"
                  maxDisplay={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Uso Básico */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Uso Básico</CardTitle>
              <CardDescription>
                Implementação simples do componente Multi Select
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`"use client";

import { useState } from "react";
import { MultiSelect, MultiSelectOption } from "@/components/ui/multi-select";

export function MultiSelectExample() {
  const [selected, setSelected] = useState<string[]>([]);

  const options: MultiSelectOption[] = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" },
    { value: "devops", label: "DevOps" },
  ];

  return (
    <MultiSelect
      options={options}
      value={selected}
      onValueChange={setSelected}
      placeholder="Selecione..."
    />
  );
}`}
              />
            </CardContent>
          </Card>

          {/* Props */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Props</CardTitle>
              <CardDescription>
                Propriedades disponíveis para o componente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2 font-semibold">Prop</th>
                      <th className="text-left p-2 font-semibold">Tipo</th>
                      <th className="text-left p-2 font-semibold">Padrão</th>
                      <th className="text-left p-2 font-semibold">Descrição</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">options</td>
                      <td className="p-2 font-mono text-xs">
                        MultiSelectOption[]
                      </td>
                      <td className="p-2">-</td>
                      <td className="p-2">Array de opções disponíveis</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">value</td>
                      <td className="p-2 font-mono text-xs">string[]</td>
                      <td className="p-2">[]</td>
                      <td className="p-2">Valores selecionados</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">onValueChange</td>
                      <td className="p-2 font-mono text-xs">
                        (value: string[]) =&gt; void
                      </td>
                      <td className="p-2">-</td>
                      <td className="p-2">Callback quando a seleção muda</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">placeholder</td>
                      <td className="p-2 font-mono text-xs">string</td>
                      <td className="p-2">&quot;Selecione...&quot;</td>
                      <td className="p-2">Texto placeholder</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">searchable</td>
                      <td className="p-2 font-mono text-xs">boolean</td>
                      <td className="p-2">true</td>
                      <td className="p-2">Habilita busca</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">
                        searchPlaceholder
                      </td>
                      <td className="p-2 font-mono text-xs">string</td>
                      <td className="p-2">&quot;Buscar...&quot;</td>
                      <td className="p-2">Placeholder do campo de busca</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">emptyMessage</td>
                      <td className="p-2 font-mono text-xs">string</td>
                      <td className="p-2">
                        &quot;Nenhum resultado encontrado.&quot;
                      </td>
                      <td className="p-2">Mensagem quando não há resultados</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">maxDisplay</td>
                      <td className="p-2 font-mono text-xs">number</td>
                      <td className="p-2">3</td>
                      <td className="p-2">Número máximo de badges visíveis</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">disabled</td>
                      <td className="p-2 font-mono text-xs">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Desabilita o componente</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">size</td>
                      <td className="p-2 font-mono text-xs">
                        &quot;sm&quot; | &quot;default&quot;
                      </td>
                      <td className="p-2">&quot;default&quot;</td>
                      <td className="p-2">Tamanho do componente</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Exemplos Avançados */}
          <Card>
            <CardHeader>
              <CardTitle>Exemplos Avançados</CardTitle>
              <CardDescription>Casos de uso mais complexos</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`// Com opções desabilitadas
const options: MultiSelectOption[] = [
  { value: "option1", label: "Opção 1" },
  { value: "option2", label: "Opção 2", disabled: true },
  { value: "option3", label: "Opção 3" },
];

// Sem busca
<MultiSelect
  options={options}
  value={selected}
  onValueChange={setSelected}
  searchable={false}
  placeholder="Selecione sem busca..."
/>

// Com limite de exibição personalizado
<MultiSelect
  options={options}
  value={selected}
  onValueChange={setSelected}
  maxDisplay={5}
  placeholder="Até 5 badges visíveis..."
/>`}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
