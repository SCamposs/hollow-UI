"use client";

import React from "react";
import Link from "next/link";
import { Textarea } from "@/registry/ui/textarea";
import { Button } from "@/registry/ui/button";
import { Label } from "@/registry/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import { Badge } from "@/registry/ui/badge";
import { MessageSquare } from "lucide-react";

export default function TextareaPage() {
  const [value, setValue] = React.useState("");
  const charCount = value.length;
  const maxChars = 500;

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
            <span className="text-foreground">Textarea</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Textarea</h1>
                <Badge variant="secondary" className="mt-2">
                  Form Control
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Campo de entrada de texto multilinha para formulários e
              comentários.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Textarea
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 p-6 bg-muted/20 rounded-md">
                <Label htmlFor="preview-textarea">Mensagem</Label>
                <Textarea
                  id="preview-textarea"
                  placeholder="Digite sua mensagem aqui..."
                  className="min-h-[120px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="textarea" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">Uso Básico</h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { Textarea } from "@scmposs/hollow-ui"

<Textarea placeholder="Digite aqui..." />`}
            />
          </section>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
              <CardDescription>
                Diferentes casos de uso do componente Textarea
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Com Label */}
              <div>
                <h4 className="font-medium mb-3">Com Label</h4>
                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva o problema..."
                  />
                </div>
                <CodeBlock
                  code={`<div className="space-y-2">
  <Label htmlFor="description">Descrição</Label>
  <Textarea 
    id="description" 
    placeholder="Descreva o problema..." 
  />
</div>`}
                />
              </div>

              {/* Com contador de caracteres */}
              <div>
                <h4 className="font-medium mb-3">Com Contador de Caracteres</h4>
                <div className="space-y-2">
                  <Label htmlFor="comment">Comentário</Label>
                  <Textarea
                    id="comment"
                    placeholder="Adicione um comentário..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    maxLength={maxChars}
                  />
                  <p className="text-sm text-muted-foreground text-right">
                    {charCount}/{maxChars} caracteres
                  </p>
                </div>
                <CodeBlock
                  code={`const [value, setValue] = useState("");
const charCount = value.length;
const maxChars = 500;

<div className="space-y-2">
  <Label htmlFor="comment">Comentário</Label>
  <Textarea
    id="comment"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    maxLength={maxChars}
  />
  <p className="text-sm text-muted-foreground text-right">
    {charCount}/{maxChars} caracteres
  </p>
</div>`}
                />
              </div>

              {/* Desabilitado */}
              <div>
                <h4 className="font-medium mb-3">Estado Desabilitado</h4>
                <Textarea
                  placeholder="Campo desabilitado"
                  disabled
                  value="Este campo está desabilitado"
                />
                <CodeBlock
                  code={`<Textarea 
  placeholder="Campo desabilitado" 
  disabled 
  value="Este campo está desabilitado"
/>`}
                />
              </div>

              {/* Diferentes tamanhos */}
              <div>
                <h4 className="font-medium mb-3">Diferentes Tamanhos</h4>
                <div className="space-y-4">
                  <div>
                    <Label>Pequeno (min-h-16)</Label>
                    <Textarea
                      placeholder="Textarea pequeno"
                      className="min-h-16"
                    />
                  </div>
                  <div>
                    <Label>Médio (min-h-24)</Label>
                    <Textarea
                      placeholder="Textarea médio"
                      className="min-h-24"
                    />
                  </div>
                  <div>
                    <Label>Grande (min-h-32)</Label>
                    <Textarea
                      placeholder="Textarea grande"
                      className="min-h-32"
                    />
                  </div>
                </div>
                <CodeBlock
                  code={`<Textarea className="min-h-16" />
<Textarea className="min-h-24" />
<Textarea className="min-h-32" />`}
                />
              </div>

              {/* Form completo */}
              <div>
                <h4 className="font-medium mb-3">Formulário Completo</h4>
                <Card>
                  <CardHeader>
                    <CardTitle>Enviar Feedback</CardTitle>
                    <CardDescription>
                      Compartilhe sua opinião conosco
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="feedback-name">Nome</Label>
                      <input
                        id="feedback-name"
                        type="text"
                        placeholder="Seu nome"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="feedback-message">Mensagem</Label>
                      <Textarea
                        id="feedback-message"
                        placeholder="Digite seu feedback..."
                        className="min-h-32"
                      />
                    </div>
                    <Button>Enviar Feedback</Button>
                  </CardContent>
                </Card>
                <CodeBlock
                  code={`<Card>
  <CardHeader>
    <CardTitle>Enviar Feedback</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">Nome</Label>
      <Input id="name" placeholder="Seu nome" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="message">Mensagem</Label>
      <Textarea
        id="message"
        placeholder="Digite seu feedback..."
        className="min-h-32"
      />
    </div>
    <Button>Enviar Feedback</Button>
  </CardContent>
</Card>`}
                />
              </div>
            </CardContent>
          </Card>

          {/* Props */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Propriedades</CardTitle>
              <CardDescription>
                Props disponíveis para o componente Textarea
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 pr-4">Prop</th>
                      <th className="text-left py-3 pr-4">Tipo</th>
                      <th className="text-left py-3 pr-4">Padrão</th>
                      <th className="text-left py-3">Descrição</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">
                        placeholder
                      </td>
                      <td className="py-3 pr-4">string</td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">Texto de placeholder</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">value</td>
                      <td className="py-3 pr-4">string</td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">Valor controlado do textarea</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">disabled</td>
                      <td className="py-3 pr-4">boolean</td>
                      <td className="py-3 pr-4">false</td>
                      <td className="py-3">Desabilita o textarea</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">maxLength</td>
                      <td className="py-3 pr-4">number</td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">Número máximo de caracteres</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">rows</td>
                      <td className="py-3 pr-4">number</td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">Número de linhas visíveis</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">className</td>
                      <td className="py-3 pr-4">string</td>
                      <td className="py-3 pr-4">-</td>
                      <td className="py-3">Classes CSS customizadas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-muted/50 rounded-md">
                <p className="text-sm text-muted-foreground">
                  <strong>Nota:</strong> O componente aceita todas as props
                  nativas do elemento <code>textarea</code> do HTML.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Guidelines */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Diretrizes de Uso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">✅ Quando usar</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Para entrada de texto longo e multilinha</li>
                  <li>Comentários, descrições e feedback</li>
                  <li>Mensagens e conteúdo de formulários</li>
                  <li>Quando precisar de mais de uma linha de texto</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">❌ Quando evitar</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Para entrada de texto de uma única linha (use Input)</li>
                  <li>Para senhas ou dados sensíveis curtos</li>
                  <li>Quando o espaço vertical é limitado</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">💡 Dicas</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Sempre use um Label para melhor acessibilidade</li>
                  <li>
                    Considere adicionar contador de caracteres para limites
                  </li>
                  <li>Use placeholder descritivo e útil</li>
                  <li>Ajuste min-h com classes Tailwind conforme necessário</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Accessibility */}
          <Card>
            <CardHeader>
              <CardTitle>Acessibilidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Sempre associe um <code>&lt;Label&gt;</code> usando o atributo{" "}
                  <code>htmlFor</code>
                </li>
                <li>
                  Use <code>aria-describedby</code> para mensagens de erro ou
                  dicas
                </li>
                <li>
                  Considere <code>aria-invalid</code> para estados de erro
                </li>
                <li>O componente suporta navegação por teclado nativa</li>
                <li>
                  Use <code>required</code> e <code>aria-required</code> para
                  campos obrigatórios
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
