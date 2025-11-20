"use client";

import React, { useState } from "react";
import { Copy, Check, SquareTerminal, Terminal } from "lucide-react";

interface CodeBlockProps {
  title?: string;
  code: string;
  language?: string;
}

export function CodeBlock({ title, code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Falha ao copiar código:", err);
    }
  };

  return (
    <div className="bg-muted dark:bg-gray-900 rounded-lg overflow-hidden border ">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
          <span className="flex text-sm font-medium dark:text-gray-200 gap-2">
            {(title === "Instalar pacote completo" ||
              title === "Adicionar componente ao projeto" ||
              title === "Instalação") && (
              <Terminal
                strokeWidth={2.5}
                size={18}
                className="border-[1.8px] border-gray-900 dark:border-gray-200 p-0.5 rounded-xs"
              />
            )}
            {title}
          </span>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 px-2 py-1 text-xs dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded"
            title="Copiar código"
          >
            {copied ? (
              <>
                <Check
                  size={14}
                  className="text-green-500 dark:text-green-400"
                />
                <span className="text-green-500 dark:text-green-400">
                  Copiado!
                </span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm modal">
        <code className="dark:text-gray-300 language-{language}">{code}</code>
      </pre>
    </div>
  );
}
