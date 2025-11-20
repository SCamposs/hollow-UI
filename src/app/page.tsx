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
import { AppLayout } from "@/components/layout";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { CircleCheck, ClipboardCopy, Settings, Star } from "lucide-react";
import { BiLogoTypescript } from "react-icons/bi";
import { Input } from "@/registry/ui/input";
import { Switch } from "@/registry/ui/switch";
import { StatusBadge } from "@/registry/ui/StatusBadge";

export default function Home() {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-4">
            🎉{" "}
            <div
              data-orientation="vertical"
              role="none"
              className="mx-2 h-4 w-px bg-border"
            ></div>
            <span>Framework de Componentes hollow-UI</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Componentes UI
            <br />
            <span className="text-gradient-primary text-3xl sm:text-5xl">
              perfeitamente projetados
            </span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Uma coleção de componentes reutilizáveis construídos com Radix UI e
            Tailwind CSS. Copiáveis, customizáveis e acessíveis por padrão.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/components">
              <Button size="lg" className="min-w-50">
                Explorar Componentes
              </Button>
            </Link>
            <Link href="/cli">
              <Button
                variant="secondary"
                size="lg"
                className="min-w-25 hover:bg-muted dark:hover:text-white dark:hover:bg-primary"
              >
                Documentação CLI
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-foreground/10 rounded-md flex items-center justify-center">
                  <ClipboardCopy size={20} />
                </div>
                Copiável
              </CardTitle>
              <CardDescription>
                Componentes prontos para copiar e colar. Customize como quiser.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button size="sm" variant="outline">
                  Botão de Exemplo
                </Button>
                <div className="flex items-center space-x-2">
                  <Input placeholder="Input exemplo" className="text-sm" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-foreground/10 rounded-md flex items-center justify-center">
                  <CircleCheck size={20} />
                </div>
                Acessível
              </CardTitle>
              <CardDescription>
                Construído com Radix UI. Acessibilidade e suporte a teclado
                incluídos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Switch id="exemplo" />
                  <label htmlFor="exemplo" className="text-sm">
                    Switch acessível
                  </label>
                </div>
                <StatusBadge status="ATIVO" size="sm" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-foreground/10 rounded-md flex items-center justify-center">
                  <BiLogoTypescript size={20} />
                </div>
                TypeScript
              </CardTitle>
              <CardDescription>
                Totalmente tipado. Desenvolvido com TypeScript para melhor DX.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Componentes construídos com TypeScript para autocomplete
                  inteligente, detecção de erros e melhor experiência de
                  desenvolvimento.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Type-Safe</Badge>
                  <Badge variant="secondary">IntelliSense</Badge>
                  <Badge variant="outline">Props Tipadas</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Component Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Componentes Disponíveis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Buttons & Actions</CardTitle>
                <CardDescription>
                  Botões interativos e elementos de ação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="gap-2 flex flex-wrap">
                  <Button size="sm">Primary Button</Button>
                  <Button variant="outline" size="sm">
                    Outline Button
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Form Controls</CardTitle>
                <CardDescription>
                  Controles de formulário e entrada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Input placeholder="Digite algo..." />
                  <div className="flex items-center space-x-2">
                    <Switch id="toggle" />
                    <label htmlFor="toggle" className="text-sm">
                      Ativar opção
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status & Feedback</CardTitle>
                <CardDescription>
                  Badges e indicadores de status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                  </div>
                  <StatusBadge status="APROVADO" size="sm" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="bg-muted/50 rounded-lg p-8 text-center ">
          <div className="max-w-6xl items-center justify-center mx-auto">
            <p className="text-muted-foreground flex justify-center items-center gap-2 mb-4">
              <Image
                src="/just-name.png"
                alt="hollow-logo"
                width={452}
                height={66}
                className="h-6 w-auto translate-y-0.5 dark:hidden"
              />
              <Image
                src="/just-name-white.png"
                alt="hollow-logo"
                width={452}
                height={66}
                className="h-6 w-auto translate-y-0.5 hidden dark:block"
              />
            </p>
            <span className="text-sm text-muted-foreground  ">
              Framework de Componentes UI feito com Radix UI e Tailwind CSS para
              aumentar a escalabilidade e produtividade no desenvolvimento de
              aplicações web. Feito como um projeto open-source inicialmente
              para uso interno. Parte do{" "}
              <strong>GO BE de Ítalo Soares Campos</strong>
            </span>
            <div className="flex justify-center items-center gap-4 pt-5">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">Radix UI</Badge>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
