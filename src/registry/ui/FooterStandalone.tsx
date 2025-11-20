/**
 * hollow-UI - Footer Component Standalone
 * Standalone version without Next.js dependency
 * Developed by Ítalo Soares Campos
 */

"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface FooterLink {
  /** Label do link */
  label: string;
  /** URL ou path do link */
  href: string;
  /** Ícone do Lucide React */
  icon?: LucideIcon;
  /** Se verdadeiro, abre em nova aba */
  external?: boolean;
  /** Título do link (tooltip) */
  title?: string;
}

interface FooterSection {
  /** Título da seção */
  title: string;
  /** Array de links da seção */
  links: FooterLink[];
}

interface FooterStandaloneProps {
  /** Logo do footer (path ou JSX) */
  logo?: string | React.ReactNode;
  /** Nome da empresa/aplicação */
  brandName?: string;
  /** Descrição da empresa/aplicação */
  description?: string;
  /** Array de seções do footer */
  sections?: FooterSection[];
  /** Texto de copyright personalizado */
  copyrightText?: string;
  /** Versão da aplicação */
  version?: string;
  /** Cor de fundo personalizada */
  backgroundColor?: string;
  /** Classes CSS adicionais */
  className?: string;
}

export function FooterStandalone({
  logo = "/just_logo.png",
  brandName = "hollow-UI",
  description = "Biblioteca de componentes React para aplicações modernas e acessíveis.",
  sections = [],
  copyrightText,
  version,
  backgroundColor = "bg-primary",
  className = "",
}: FooterStandaloneProps) {
  const currentYear = new Date().getFullYear();
  const defaultCopyright =
    copyrightText ||
    `© ${currentYear} ${brandName}. Todos os direitos reservados.`;

  return (
    <footer
      className={`${backgroundColor} border-t border-primary mt-auto dark:bg-card dark:text-foreground dark:border-t-2 dark:border-[#9a1c1f] contrast:bg-card contrast:text-foreground contrast:border-t-2 contrast:border-[#9a1c1f] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Conteúdo principal */}
        <div
          className={`grid grid-cols-1 md:grid-cols-${Math.min(
            sections.length + 1,
            4
          )} gap-8`}
        >
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {typeof logo === "string" ? (
                <img
                  src={logo}
                  width={32}
                  height={32}
                  alt={`${brandName} Logo`}
                  className="h-8 w-8"
                />
              ) : (
                logo
              )}
              <span className="text-lg font-semibold text-white dark:text-foreground contrast:text-foreground">
                {brandName}
              </span>
            </div>
            {description && (
              <p className="text-sm text-white/80 max-w-xs dark:text-muted-foreground contrast:text-muted-foreground">
                {description}
              </p>
            )}
          </div>

          {/* Seções de Links */}
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide dark:text-foreground contrast:text-foreground">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.links.map((link, linkIndex) => {
                  const IconComponent = link.icon;
                  const linkProps = {
                    className:
                      "flex items-center text-sm text-white/80 hover:text-white transition-colors dark:text-muted-foreground dark:hover:text-foreground contrast:text-muted-foreground contrast:hover:text-foreground",
                    title: link.title,
                    ...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }),
                  };

                  return (
                    <a key={linkIndex} href={link.href} {...linkProps}>
                      {IconComponent && (
                        <IconComponent className="w-4 h-4 mr-2" />
                      )}
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Linha separadora e copyright */}
        <div className="mt-8 pt-8 border-t border-primary/30 dark:border-t dark:border-primary/30 contrast:border-t contrast:border-primary/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/70 dark:text-muted-foreground contrast:text-muted-foreground">
              {defaultCopyright}
            </p>
            {version && (
              <p className="text-sm text-white/70 mt-2 md:mt-0 dark:text-muted-foreground contrast:text-muted-foreground">
                Versão {version}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
