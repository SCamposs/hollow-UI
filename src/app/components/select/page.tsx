import React from "react";
import Link from "next/link";
import { Badge } from "@/registry/ui/badge";
import { Button } from "@/registry/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";
import { Label } from "@/registry/ui/label";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";

export default function SelectPage() {
  return (
    <AppLayout>
      <main className="container mx-auto px-4 py-8">
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
            <span className="text-foreground">Select</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Select</h1>
            <p className="text-xl text-muted-foreground">
              Seletores dropdown para escolha de opções.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Select com diferentes configurações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 p-6 bg-muted/20 rounded-md">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um framework" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="vue">Vue</SelectItem>
                      <SelectItem value="angular">Angular</SelectItem>
                      <SelectItem value="svelte">Svelte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="select" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@scmposs/hollow-ui"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione uma opção" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Opção 1</SelectItem>
    <SelectItem value="option2">Opção 2</SelectItem>
  </SelectContent>
</Select>`}
            />
          </section>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Seleção de País</h4>
                <div className="max-w-sm">
                  <Label htmlFor="country">País</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="br">🇧🇷 Brasil</SelectItem>
                      <SelectItem value="us">🇺🇸 Estados Unidos</SelectItem>
                      <SelectItem value="ca">🇨🇦 Canadá</SelectItem>
                      <SelectItem value="mx">🇲🇽 México</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Formulário de Perfil</h4>
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label>Cargo</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu cargo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dev">Desenvolvedor</SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                        <SelectItem value="pm">Product Manager</SelectItem>
                        <SelectItem value="qa">QA Engineer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Experiência</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Anos de experiência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="junior">
                          0-2 anos (Júnior)
                        </SelectItem>
                        <SelectItem value="pleno">3-5 anos (Pleno)</SelectItem>
                        <SelectItem value="senior">6+ anos (Sênior)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </AppLayout>
  );
}
