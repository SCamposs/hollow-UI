"use client";

import { Clock2 } from "lucide-react";
import React, { useState } from "react";

interface InfoCardProps {
  id: string;
  status: string;
  veiculo: string;
  solicitante: string;
  finalidade: string;
  periodo: string;
  descricao: string;
  modificacoes: string;
  onAprovar?: (id: string) => void;
  onReprovar?: (id: string) => void;
}

export function InfoCard({
  id,
  status,
  veiculo,
  solicitante,
  finalidade,
  periodo,
  descricao,
  modificacoes,
  onAprovar,
  onReprovar,
}: InfoCardProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleAprovar = () => {
    if (onAprovar) {
      onAprovar(id);
    }
  };

  const handleReprovar = () => {
    if (onReprovar) {
      onReprovar(id);
    }
  };

  return (
    <div
      className="relative group bg-white dark:bg-gray-800 contrast:bg-black rounded-xl shadow-lg dark:shadow-gray-900/20 contrast:shadow-yellow-400/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01] max-w-100 will-change-transform"
      onMouseEnter={() => setHoveredCard(id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* header card */}
      <div className="will-change-transform bg-yellow-600/80 dark:bg-yellow-600/90 p-5 py-4 text-white dark:text-white contrast:text-black relative">
        <div className="will-change-transform flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-1">{status}</h2>
            <div className="will-change-transform flex gap-4 text-[16px] opacity-90 font-semibold antialiased">
              <span>Veículo: {veiculo}</span>
            </div>
          </div>
          <Clock2 className="w-7 h-7 text-white dark:text-white contrast:text-black opacity-90" />
        </div>
      </div>

      {/* card content */}
      <div className="will-change-transform p-5 space-y-2">
        <div className="will-change-transform grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500 dark:text-gray-400 contrast:text-gray-300 font-medium">
              Solicitante:
            </span>
            <p className="will-change-transform text-gray-800 dark:text-gray-200 contrast:text-white font-semibold">
              {solicitante}
            </p>
          </div>
          <div>
            <span className="text-gray-500 dark:text-gray-400 contrast:text-gray-300 font-medium">
              Finalidade:
            </span>
            <p className="will-change-transform text-gray-800 dark:text-gray-200 contrast:text-white font-semibold">
              {finalidade}
            </p>
          </div>
        </div>

        <div>
          <span className="text-gray-500 dark:text-gray-400 contrast:text-gray-300 font-medium text-sm">
            Período:
          </span>
          <p className="will-change-transform text-gray-800 dark:text-gray-200 contrast:text-white font-semibold text-md">
            {periodo}
          </p>
        </div>

        <div>
          <span className="text-gray-500 dark:text-gray-400 contrast:text-gray-300 font-medium text-sm">
            Descrição:
          </span>
          <p className="will-change-transform text-gray-700 dark:text-gray-300 contrast:text-gray-100 text-sm">
            {descricao}
          </p>
        </div>

        <div>
          <span className="text-gray-500 dark:text-gray-400 contrast:text-gray-300 font-medium text-sm">
            Modificações:
          </span>
          <p className="will-change-transform text-gray-700 dark:text-gray-300 contrast:text-gray-100 text-sm">
            {modificacoes}
          </p>
        </div>
      </div>

      {/* botoes de ação */}
      <div
        className={`absolute inset-0 flex items-end justify-end gap-3 p-5 transition-all duration-300 ${
          hoveredCard === id ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {onAprovar && (
          <button
            onClick={handleAprovar}
            className="bg-white dark:bg-gray-800 contrast:bg-black hover:bg-green-600 dark:hover:bg-green-600 contrast:hover:bg-green-400 text-green-600 dark:text-green-400 contrast:text-green-300 hover:text-white dark:hover:text-white border-2 border-green-600 dark:border-green-400 contrast:border-green-300 text-xs px-3 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg"
          >
            APROVAR
          </button>
        )}
        {onReprovar && (
          <button
            onClick={handleReprovar}
            className="bg-white dark:bg-gray-800 contrast:bg-black hover:bg-red-700 dark:hover:bg-red-600 contrast:hover:bg-red-400 text-red-700 dark:text-red-400 contrast:text-red-300 hover:text-white dark:hover:text-white border-2 border-red-700 dark:border-red-400 contrast:border-red-300 text-xs px-3 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg"
          >
            REPROVAR
          </button>
        )}
      </div>
    </div>
  );
}
