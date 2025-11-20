/**
 * hollow-UI - Footer Demo Page
 * Desenvolvido por Ítalo Soares Campos
 */

"use client";

import React from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import { Footer } from "@/registry/ui/Footer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import {
  Mail,
  Phone,
  FileText,
  Shield,
  LayoutDashboard,
  FileSpreadsheet,
  Car,
  FileChartColumnIncreasing,
  ClipboardList,
  ShieldCheck,
  Home,
  User,
  Settings,
  HelpCircle,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function FooterDemo() {
  // Seções de exemplo para aplicação
  const statusReportSections = [
    {
      title: "Contato",
      links: [
        {
          label: "contato@hollow-ui.dev",
          href: "mailto:contato@hollow-ui.dev",
          icon: Mail,
          title: "Enviar email",
        },
        {
          label: "(11) 99999-9999",
          href: "tel:+5511999999999",
          icon: Phone,
          title: "Ligar",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          label: "Termos de Uso",
          href: "/termos-de-uso",
          icon: FileText,
          external: true,
          title: "Termos de Uso",
        },
        {
          label: "Política de Privacidade",
          href: "/politica-de-privacidade",
          icon: Shield,
          external: true,
          title: "Política de Privacidade",
        },
        {
          label: "LGPD",
          href: "https://www.privacidade.com.br/portal-de-privacidade?token=0da414a5919d005060c1fd715586b023",
          icon: ShieldCheck,
          external: true,
          title: "Lei Geral de Proteção de Dados",
        },
      ],
    },
    {
      title: "Páginas",
      links: [
        {
          label: "Dashboard",
          href: "/inicio",
          icon: LayoutDashboard,
        },
        {
          label: "Suporte",
          href: "/suporte",
          icon: ClipboardList,
        },
        {
          label: "Lançamento",
          href: "/lancamento",
          icon: FileSpreadsheet,
        },
        {
          label: "Acompanhamento de veículos",
          href: "/veiculo",
          icon: Car,
        },
        {
          label: "Gerador de Relatórios",
          href: "/relatorio",
          icon: FileChartColumnIncreasing,
        },
      ],
    },
  ];

  // Seções simples para aplicação básica
  const basicSections = [
    {
      title: "Navegação",
      links: [
        { label: "Início", href: "/components/footer", icon: Home },
        { label: "Sobre", href: "/components/footer", icon: FileText },
        { label: "Contato", href: "/components/footer", icon: Mail },
      ],
    },
    {
      title: "Suporte",
      links: [
        { label: "Ajuda", href: "/components/footer", icon: HelpCircle },
        {
          label: "Política de Privacidade",
          href: "/components/footer",
          icon: Shield,
        },
      ],
    },
  ];

  // Seções para aplicação social
  const socialSections = [
    {
      title: "Produto",
      links: [
        { label: "Recursos", href: "/components/footer", icon: Settings },
        { label: "Preços", href: "/components/footer", icon: FileText },
        { label: "Suporte", href: "/components/footer", icon: HelpCircle },
      ],
    },
    {
      title: "Redes Sociais",
      links: [
        {
          label: "GitHub",
          href: "https://github.com",
          icon: Github,
          external: true,
          title: "Seguir no GitHub",
        },
        {
          label: "Twitter",
          href: "https://twitter.com",
          icon: Twitter,
          external: true,
          title: "Seguir no Twitter",
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com",
          icon: Linkedin,
          external: true,
          title: "Conectar no LinkedIn",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Termos", href: "/components/footer", icon: FileText },
        { label: "Privacidade", href: "/components/footer", icon: Shield },
      ],
    },
  ];

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
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
            <span className="text-foreground">Footer</span>
          </div>

          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Footer
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Componente de rodapé flexível e completo para aplicações. Inclui
              logo, descrição, seções de links organizadas, copyright e versão.
            </p>
          </div>

          {/* Footer Básico */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Footer Básico
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Footer simples com logo, nome da marca e seções básicas:
            </p>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <Footer
                brandName="Minha App"
                description="Uma aplicação simples e moderna."
                sections={basicSections}
                version="1.0.0"
              />
            </div>

            <CodeBlock
              title="Footer Básico"
              code={`import { Footer } from "@/registry/ui/Footer";
import { Home, FileText, Mail, HelpCircle, Shield } from "lucide-react";

const basicSections = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "/", icon: Home },
      { label: "Sobre", href: "/about", icon: FileText },
      { label: "Contato", href: "/contact", icon: Mail }
    ]
  },
  {
    title: "Suporte",
    links: [
      { label: "Ajuda", href: "/help", icon: HelpCircle },
      { label: "Política de Privacidade", href: "/privacy", icon: Shield }
    ]
  }
];

<FooterStandalone 
  brandName="Minha App"
  description="Uma aplicação simples e moderna."
  sections={basicSections}
  version="1.0.0"
/>`}
            />
          </section>

          {/* Footer Completo */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Footer Completo
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Footer completo com múltiplas seções:
            </p>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <Footer
                brandName="hollow-UI"
                description="Sistema de gestão e monitoramento para otimização de processos."
                sections={statusReportSections}
                version="1.0.0"
              />
            </div>

            <CodeBlock
              title="Footer Completo"
              code={`const statusReportSections = [
  {
    title: "Contato",
    links: [
      {
        label: "contato@hollow-ui.dev",
        href: "mailto:contato@hollow-ui.dev",
        icon: Mail,
        title: "Enviar email"
      },
      {
        label: "(11) 99999-9999",
        href: "tel:+5511999999999",
        icon: Phone,
        title: "Ligar"
      }
    ]
  },
  {
    title: "Legal",
    links: [
      {
        label: "Termos de Uso",
        href: "/termos-de-uso",
        icon: FileText,
        external: true,
        title: "Termos de Uso"
      },
      {
        label: "LGPD",
        href: "https://www.privacidade.com.br/portal",
        icon: ShieldCheck,
        external: true,
        title: "Lei Geral de Proteção de Dados"
      }
    ]
  }
];

<FooterStandalone 
  brandName="hollow-UI"
  description="Sistema de gestão e monitoramento."
  sections={statusReportSections}
  version="1.0.0"
/>`}
            />
          </section>

          {/* Footer Social */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Footer para Aplicação Social
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Footer com seções incluindo redes sociais e links externos:
            </p>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <Footer
                brandName="SocialApp"
                description="Conecte-se com pessoas ao redor do mundo."
                sections={socialSections}
                version="2.1.4"
              />
            </div>

            <CodeBlock
              title="Footer Social"
              code={`const socialSections = [
  {
    title: "Produto",
    links: [
      { label: "Recursos", href: "/features", icon: Settings },
      { label: "Preços", href: "/pricing", icon: FileText },
      { label: "Suporte", href: "/support", icon: HelpCircle }
    ]
  },
  {
    title: "Redes Sociais",
    links: [
      { 
        label: "GitHub", 
        href: "https://github.com", 
        icon: Github, 
        external: true,
        title: "Seguir no GitHub"
      },
      { 
        label: "Twitter", 
        href: "https://twitter.com", 
        icon: Twitter, 
        external: true,
        title: "Seguir no Twitter"
      }
    ]
  }
];

<FooterStandalone 
  brandName="SocialApp"
  description="Conecte-se com pessoas ao redor do mundo."
  sections={socialSections}
  version="2.1.4"
/>`}
            />
          </section>

          {/* Footer Personalizado */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Footer Personalizado
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Footer com logo personalizado, cor de fundo diferente e copyright
              customizado:
            </p>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <Footer
                logo={
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                }
                brandName="CustomBrand"
                description="Soluções personalizadas para seu negócio."
                sections={[
                  {
                    title: "Empresa",
                    links: [
                      { label: "Sobre nós", href: "/about", icon: User },
                      { label: "Carreiras", href: "/careers", icon: FileText },
                    ],
                  },
                ]}
                copyrightText="© 2024 CustomBrand Ltd. Todos os direitos reservados."
                backgroundColor="bg-blue-600"
              />
            </div>

            <CodeBlock
              title="Footer Personalizado"
              code={`<FooterStandalone 
  logo={
    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-lg">C</span>
    </div>
  }
  brandName="CustomBrand"
  description="Soluções personalizadas para seu negócio."
  sections={[
    {
      title: "Empresa",
      links: [
        { label: "Sobre nós", href: "/about", icon: User },
        { label: "Carreiras", href: "/careers", icon: FileText }
      ]
    }
  ]}
  copyrightText="© 2024 CustomBrand Ltd. Todos os direitos reservados."
  backgroundColor="bg-blue-600"
/>`}
            />
          </section>

          {/* Footer Minimalista */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Footer Minimalista
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Footer simples sem seções, apenas logo e copyright:
            </p>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <Footer
                brandName="MinimalApp"
                description="Simplicidade em primeiro lugar."
                sections={[]}
              />
            </div>

            <CodeBlock
              title="Footer Minimalista"
              code={`<FooterStandalone 
  brandName="MinimalApp"
  description="Simplicidade em primeiro lugar."
  sections={[]}
/>`}
            />
          </section>

          {/* Props e Interface */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Interface e Props
            </h2>

            <CodeBlock
              title="Footer Interfaces"
              code={`interface FooterLink {
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

interface FooterProps {
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
}`}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Props Principais
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      brandName
                    </code>{" "}
                    - Nome da marca/aplicação
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      description
                    </code>{" "}
                    - Descrição da empresa
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      sections
                    </code>{" "}
                    - Array de seções com links
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      version
                    </code>{" "}
                    - Versão da aplicação
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Características
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Layout responsivo automático</li>
                  <li>• Seções organizadas e flexíveis</li>
                  <li>• Links externos automáticos</li>
                  <li>• Ícones opcionais para links</li>
                  <li>• Copyright e versão automáticos</li>
                  <li>• Suporte completo a temas</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
