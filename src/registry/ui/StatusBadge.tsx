/**
 * hollow-UI - StatusBadge Component
 * Developed by Ítalo Soares Campos
 */

import React from "react";
import {
  Check,
  CircleCheck,
  Clock,
  ClockAlert,
  OctagonPause,
  Send,
  Truck,
  X,
} from "lucide-react";

interface StatusBadgeProps {
  status: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  size = "md",
  className = "",
}) => {
  // Ícones para cada status
  const icons: Record<string, React.JSX.Element> = {
    // Status de tarefas/itens
    ENVIADO: (
      <span title="Enviado">
        <Send size={14} />
      </span>
    ),
    "EM ANÁLISE": (
      <span title="Em análise">
        <Clock size={16} />
      </span>
    ),
    CONCLUÍDO: (
      <span title="Concluído">
        <Check size={16} />
      </span>
    ),
    // Status de processos
    "EM ANDAMENTO": (
      <span title="Em andamento">
        <ClockAlert size={16} />
      </span>
    ),
    FINALIZADO: (
      <span title="Finalizado">
        <CircleCheck size={16} />
      </span>
    ),
    // Status geral
    CANCELADO: (
      <span title="Cancelado">
        <X size={16} strokeWidth={2.5} />
      </span>
    ),
    // Status de veículos
    PARADO: (
      <span title="Parado">
        <OctagonPause size={16} />
      </span>
    ),
    RODANDO: (
      <span title="Rodando">
        <Truck size={16} />
      </span>
    ),
    // Status gerais para outras aplicações
    ATIVO: (
      <span title="Ativo">
        <Check size={16} />
      </span>
    ),
    INATIVO: (
      <span title="Inativo">
        <X size={16} strokeWidth={2.5} />
      </span>
    ),
    PENDENTE: (
      <span title="Pendente">
        <Clock size={16} />
      </span>
    ),
    APROVADO: (
      <span title="Aprovado">
        <CircleCheck size={16} />
      </span>
    ),
    REJEITADO: (
      <span title="Rejeitado">
        <X size={16} strokeWidth={2.5} />
      </span>
    ),
  };

  // Cores diferenciadas para cada status
  const colors: Record<string, string> = {
    // Status de tarefas/itens - tons azuis/roxos
    ENVIADO:
      "bg-purple-100 text-purple-800 border border-purple-300 dark:bg-purple-900/30 dark:text-purple-200 dark:border-purple-700 contrast:bg-purple-200 contrast:text-purple-900 contrast:border-purple-600",
    "EM ANÁLISE":
      "bg-blue-100 text-blue-800 border border-blue-300 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700 contrast:bg-blue-200 contrast:text-blue-900 contrast:border-blue-600",
    CONCLUÍDO:
      "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-700 contrast:bg-emerald-200 contrast:text-emerald-900 contrast:border-emerald-600",

    // Status de processos - tons laranja/verdes mais saturados
    "EM ANDAMENTO":
      "bg-orange-100 text-orange-800 border border-orange-300 dark:bg-orange-900/30 dark:text-orange-200 dark:border-orange-700 contrast:bg-orange-200 contrast:text-orange-900 contrast:border-orange-600",
    FINALIZADO:
      "bg-green-100 text-green-800 border border-green-300 dark:bg-green-900/30 dark:text-green-200 dark:border-green-700 contrast:bg-green-200 contrast:text-green-900 contrast:border-green-600",

    // Status geral - tons neutros
    CANCELADO:
      "bg-gray-100 text-gray-700 border border-gray-300 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-600 contrast:bg-gray-200 contrast:text-gray-900 contrast:border-gray-600",

    // Status de veículos - tons específicos
    PARADO:
      "bg-red-100 text-red-800 border border-red-300 dark:bg-red-900/30 dark:text-red-200 dark:border-red-700 contrast:bg-red-200 contrast:text-red-900 contrast:border-red-600",
    RODANDO:
      "bg-teal-100 text-teal-800 border border-teal-300 dark:bg-teal-900/30 dark:text-teal-200 dark:border-teal-700 contrast:bg-teal-200 contrast:text-teal-900 contrast:border-teal-600",

    // Status gerais para outras aplicações
    ATIVO:
      "bg-green-100 text-green-800 border border-green-300 dark:bg-green-900/30 dark:text-green-200 dark:border-green-700 contrast:bg-green-200 contrast:text-green-900 contrast:border-green-600",
    INATIVO:
      "bg-gray-100 text-gray-700 border border-gray-300 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-600 contrast:bg-gray-200 contrast:text-gray-900 contrast:border-gray-600",
    PENDENTE:
      "bg-yellow-100 text-yellow-800 border border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-700 contrast:bg-yellow-200 contrast:text-yellow-900 contrast:border-yellow-600",
    APROVADO:
      "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-700 contrast:bg-emerald-200 contrast:text-emerald-900 contrast:border-emerald-600",
    REJEITADO:
      "bg-red-100 text-red-800 border border-red-300 dark:bg-red-900/30 dark:text-red-200 dark:border-red-700 contrast:bg-red-200 contrast:text-red-900 contrast:border-red-600",
  };

  // Textos limpos e organizados
  const texts: Record<string, string> = {
    ENVIADO: "Enviado",
    "EM ANÁLISE": "Em análise",
    CONCLUÍDO: "Concluído",
    "EM ANDAMENTO": "Em andamento",
    FINALIZADO: "Finalizado",
    CANCELADO: "Cancelado",
    PARADO: "Parado",
    RODANDO: "Rodando",
    ATIVO: "Ativo",
    INATIVO: "Inativo",
    PENDENTE: "Pendente",
    APROVADO: "Aprovado",
    REJEITADO: "Rejeitado",
  };

  // Tooltips explicativos
  const tooltips: Record<string, string> = {
    ENVIADO: "Item enviado, aguardando análise.",
    "EM ANÁLISE": "Item está sendo analisado.",
    CONCLUÍDO: "Item foi concluído com sucesso.",
    "EM ANDAMENTO": "Processo em andamento.",
    FINALIZADO: "Processo finalizado com sucesso.",
    CANCELADO: "Item foi cancelado.",
    PARADO: "Item está parado.",
    RODANDO: "Item está em operação.",
    ATIVO: "Item está ativo no sistema.",
    INATIVO: "Item está inativo no sistema.",
    PENDENTE: "Item está aguardando aprovação.",
    APROVADO: "Item foi aprovado.",
    REJEITADO: "Item foi rejeitado.",
  };

  // Tamanhos do badge
  const sizes = {
    sm: "px-2 py-0.5 text-xs min-w-[80px]",
    md: "px-2.5 py-1 text-xs min-w-[90px] max-w-[170px]",
    lg: "px-3 py-1.5 text-sm min-w-[100px] max-w-[180px]",
  };

  const color =
    colors[status] ||
    "bg-slate-200 text-slate-800 border border-slate-400 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-500 contrast:bg-slate-300 contrast:text-slate-900 contrast:border-slate-600";
  const icon = icons[status] || null;
  const text =
    texts[status] ||
    status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
  const tooltip = tooltips[status] || "Status não reconhecido.";
  const sizeClasses = sizes[size];

  return (
    <span
      className={`inline-flex whitespace-nowrap items-center gap-1.5 rounded-full font-medium transition-all duration-200 cursor-default justify-center ${sizeClasses} ${color} ${className}`}
      title={tooltip}
      style={{ letterSpacing: "0.02em" }}
    >
      {icon}
      <span>{text}</span>
    </span>
  );
};
