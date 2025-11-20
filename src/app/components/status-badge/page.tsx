/**
 * hollow-UI - StatusBadge Demo Page
 * Desenvolvido por Ítalo Soares Campos
 */

"use client";

import React from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import { StatusBadge } from "@/registry/ui/StatusBadge";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";

export default function StatusBadgeDemo() {
  // Status de tarefas e processos
  const taskStatuses = [
    "ENVIADO",
    "EM ANÁLISE",
    "CONCLUÍDO",
    "EM ANDAMENTO",
    "FINALIZADO",
    "CANCELADO",
  ];

  // Status de veículos
  const vehicleStatuses = ["RODANDO", "PARADO"];

  // Status gerais
  const generalStatuses = [
    "ATIVO",
    "INATIVO",
    "PENDENTE",
    "APROVADO",
    "REJEITADO",
  ];

  const allSizes = ["sm", "md", "lg"] as const;

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-8 px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span>/</span>
          <Link href="/components" className="hover:text-foreground">
            Componentes
          </Link>
          <span>/</span>
          <span className="text-foreground">StatusBadge</span>
        </div>

        {/* Header */}
        <div className=" space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            StatusBadge
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Componente versátil para exibir status com ícones e cores
            diferenciadas. Inclui suporte para diferentes contextos: tarefas,
            processos, veículos e aplicações gerais.
          </p>
        </div>

        {/* Task Status */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Status de Tarefas e Processos
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Status para acompanhamento de tarefas e processos:
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-1">
              {taskStatuses.map((status) => (
                <StatusBadge key={status} status={status} />
              ))}
            </div>
          </div>

          <CodeBlock
            title="Status de Tarefas"
            code={`import { StatusBadge } from "@/registry/ui/StatusBadge";

<StatusBadge status="ENVIADO" />
<StatusBadge status="EM ANÁLISE" />
<StatusBadge status="CONCLUÍDO" />
<StatusBadge status="EM ANDAMENTO" />
<StatusBadge status="FINALIZADO" />
<StatusBadge status="CANCELADO" />`}
          />
        </section>

        {/* Status de Veículos */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Status de Veículos
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Status para controle operacional de veículos:
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-3">
              {vehicleStatuses.map((status) => (
                <StatusBadge key={status} status={status} />
              ))}
            </div>
          </div>

          <CodeBlock
            title="Status de Veículos"
            code={`<StatusBadge status="RODANDO" />
<StatusBadge status="PARADO" />`}
          />
        </section>

        {/* Status Gerais */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Status Gerais
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Status genéricos para diferentes tipos de aplicações:
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-3">
              {generalStatuses.map((status) => (
                <StatusBadge key={status} status={status} />
              ))}
            </div>
          </div>

          <CodeBlock
            title="Status Gerais"
            code={`<StatusBadge status="ATIVO" />
<StatusBadge status="INATIVO" />
<StatusBadge status="PENDENTE" />
<StatusBadge status="APROVADO" />
<StatusBadge status="REJEITADO" />`}
          />
        </section>

        {/* Variações de Tamanho */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Variações de Tamanho
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            O componente suporta três tamanhos diferentes:
          </p>

          <div className="space-y-6">
            {allSizes.map((size) => (
              <div key={size} className="space-y-2">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 capitalize">
                  Size: {size}{" "}
                  {size === "sm"
                    ? "(pequeno)"
                    : size === "md"
                    ? "(médio - padrão)"
                    : "(grande)"}
                </h3>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-3 items-center">
                    <StatusBadge status="ATIVO" size={size} />
                    <StatusBadge status="EM ANÁLISE" size={size} />
                    <StatusBadge status="FINALIZADO" size={size} />
                    <StatusBadge status="CANCELADO" size={size} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <CodeBlock
            title="Diferentes Tamanhos"
            code={`<StatusBadge status="ATIVO" size="sm" />
<StatusBadge status="EM ANÁLISE" size="md" />
<StatusBadge status="FINALIZADO" size="lg" />`}
          />
        </section>

        {/* Status Personalizado */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Status Personalizado
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Status não reconhecidos são exibidos com formatação padrão:
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-3">
              <StatusBadge status="CUSTOM_STATUS" />
              <StatusBadge status="outro status" />
              <StatusBadge status="TESTE" />
            </div>
          </div>

          <CodeBlock
            title="Status Personalizado"
            code={`<StatusBadge status="CUSTOM_STATUS" />
<StatusBadge status="outro status" />
<StatusBadge status="TESTE" />`}
          />
        </section>

        {/* Suporte a Temas */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Suporte a Temas
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Todos os status se adaptam automaticamente aos temas claro, escuro e
            contraste:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Tema Claro
              </h3>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <StatusBadge status="APROVADO" />
                  <StatusBadge status="PENDENTE" />
                  <StatusBadge status="REJEITADO" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Tema Escuro
              </h3>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <div className="flex flex-wrap gap-2">
                  <StatusBadge status="APROVADO" />
                  <StatusBadge status="PENDENTE" />
                  <StatusBadge status="REJEITADO" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Props e Interface */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Interface e Props
          </h2>

          <CodeBlock
            title="StatusBadge Interface"
            code={`interface StatusBadgeProps {
  status: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}`}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Props Disponíveis
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                    status
                  </code>{" "}
                  - String do status (obrigatório)
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                    size
                  </code>{" "}
                  - Tamanho: &quot;sm&quot;, &quot;md&quot; ou &quot;lg&quot;
                  (padrão: &quot;md&quot;)
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                    className
                  </code>{" "}
                  - Classes CSS adicionais (opcional)
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Características
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Ícones apropriados para cada status</li>
                <li>• Cores diferenciadas por categoria</li>
                <li>• Tooltips explicativos</li>
                <li>• Suporte completo a temas</li>
                <li>• Status personalizados aceitos</li>
                <li>• Layout responsivo</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
