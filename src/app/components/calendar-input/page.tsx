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
import { CalendarInput } from "@/registry/ui/calendar-input";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import { Calendar } from "lucide-react";

export default function CalendarInputPage() {
  const [date1, setDate1] = useState<Date | undefined>(undefined);
  const [date2, setDate2] = useState<Date | undefined>(new Date());
  const [date3, setDate3] = useState<Date | undefined>(undefined);

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
            <span className="text-foreground">Calendar Input</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Calendar Input</h1>
                <Badge variant="secondary" className="mt-2">
                  Entrada de Data
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Componente de entrada de data com formatação automática e seletor
              de calendário integrado.
            </p>
          </div>

          {/* Instalação */}
          <InstallationSection componentName="calendar-input" />

          {/* Exemplo Interativo */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplo Interativo</CardTitle>
              <CardDescription>
                Experimente diferentes usos do Calendar Input
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Data de Início</label>
                <CalendarInput
                  value={date1}
                  onChange={setDate1}
                  placeholder="Selecione a data"
                />
                {date1 && (
                  <p className="text-xs text-muted-foreground">
                    Data selecionada: {date1.toLocaleDateString("pt-BR")}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Data Pré-selecionada
                </label>
                <CalendarInput
                  value={date2}
                  onChange={setDate2}
                  placeholder="Selecione a data"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Data de Vencimento
                </label>
                <CalendarInput
                  value={date3}
                  onChange={setDate3}
                  placeholder="dd/mm/aaaa"
                />
              </div>
            </CardContent>
          </Card>

          {/* Uso Básico */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Uso Básico</CardTitle>
              <CardDescription>
                Implementação simples do Calendar Input
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`"use client";

import { useState } from "react";
import { CalendarInput } from "@/components/ui/calendar-input";

export function CalendarInputExample() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <CalendarInput
      value={date}
      onChange={setDate}
      placeholder="dd/mm/aaaa"
    />
  );
}`}
              />
            </CardContent>
          </Card>

          {/* Recursos */}
          <Card>
            <CardHeader>
              <CardTitle>Recursos</CardTitle>
              <CardDescription>Funcionalidades do componente</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Formatação automática dd/mm/aaaa enquanto digita</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Validação de data em tempo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Seletor de calendário com dropdowns de mês/ano</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Indicação visual de data válida/inválida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Compatível com formulários e dialogs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Suporte a temas (light/dark/contrast)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
