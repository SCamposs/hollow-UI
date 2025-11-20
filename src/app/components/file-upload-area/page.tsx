"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/registry/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { FileUploadArea } from "@/registry/ui/file-upload-area";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import { Upload, Image as ImageIcon, FileText } from "lucide-react";

export default function FileUploadAreaPage() {
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
            <span className="text-foreground">File Upload Area</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Upload className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">File Upload Area</h1>
                <Badge variant="secondary" className="mt-2">
                  Upload de Arquivos
                </Badge>
              </div>
            </div>
            <p className="text-xl text-muted-foreground">
              Área de upload com drag & drop, validação de tipo e preview do
              arquivo selecionado.
            </p>
          </div>

          {/* Instalação */}
          <InstallationSection componentName="file-upload-area" />

          {/* Exemplo Interativo */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplo Interativo</CardTitle>
              <CardDescription>
                Experimente diferentes tipos de upload
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FileUploadArea
                accept="image/*"
                label="Upload de Imagem"
                description="PNG, JPG, GIF até 10MB"
                icon={<ImageIcon className="h-8 w-8 text-foreground" />}
              />

              <FileUploadArea
                accept="application/pdf"
                label="Upload de PDF"
                description="Apenas arquivos PDF"
                icon={<FileText className="h-8 w-8 text-foreground" />}
                dashed
              />

              <FileUploadArea
                accept="*"
                label="Upload Geral"
                description="Qualquer tipo de arquivo"
                icon={<Upload className="h-8 w-8 text-foreground" />}
              />
            </CardContent>
          </Card>

          {/* Exemplos Avançados */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos Avançados</CardTitle>
              <CardDescription>
                Funcionalidades avançadas como múltiplos arquivos e callbacks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FileUploadArea
                accept="image/*"
                label="Upload Múltiplo de Imagens"
                description="Selecione várias imagens de uma vez"
                icon={<ImageIcon className="h-8 w-8 text-foreground" />}
                multiple={true}
                onFileChange={(files) => {
                  console.log("Arquivos selecionados:", files);
                }}
              />

              <FileUploadArea
                accept="application/pdf,image/*"
                label="Upload Misto (PDF + Imagens)"
                description="Aceita PDFs e imagens"
                icon={<FileText className="h-8 w-8 text-foreground" />}
                multiple={true}
                dashed
                onFileChange={(files) => {
                  console.log("Arquivos mistos:", files);
                }}
              />

              <FileUploadArea
                accept="image/*"
                label="Upload com Callback"
                description="Veja o console para os arquivos selecionados"
                icon={<Upload className="h-8 w-8 text-foreground" />}
                onFileChange={(files) => {
                  console.log("Callback acionado:", files.length, "arquivos");
                  files.forEach((file, index) => {
                    console.log(
                      `Arquivo ${index + 1}:`,
                      file.name,
                      `(${file.size} bytes)`
                    );
                  });
                }}
              />
            </CardContent>
          </Card>

          {/* Uso Básico */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Uso Básico</CardTitle>
              <CardDescription>
                Implementação simples do File Upload Area
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`import { FileUploadArea } from "@/components/ui/file-upload-area";
import { Image } from "lucide-react";

export function FileUploadExample() {
  return (
    <FileUploadArea
      accept="image/*"
      label="Upload de Imagem"
      description="PNG, JPG, GIF até 10MB"
      icon={<Image className="h-8 w-8 text-foreground" />}
    />
  );
}`}
              />
            </CardContent>
          </Card>

          {/* Uso Avançado */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Uso Avançado</CardTitle>
              <CardDescription>
                Upload múltiplo e callbacks para maior controle
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Upload Múltiplo</h4>
                <CodeBlock
                  code={`import { FileUploadArea } from "@/components/ui/file-upload-area";
import { Image } from "lucide-react";

export function MultipleFileUpload() {
  return (
    <FileUploadArea
      accept="image/*"
      label="Upload Múltiplo de Imagens"
      description="Selecione várias imagens de uma vez"
      icon={<Image className="h-8 w-8 text-foreground" />}
      multiple={true}
      onFileChange={(files) => {
        console.log("Arquivos selecionados:", files);
        // Faça algo com os arquivos, como enviar para o servidor
      }}
    />
  );
}`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-2">Upload Misto com Callback</h4>
                <CodeBlock
                  code={`import { FileUploadArea } from "@/components/ui/file-upload-area";
import { FileText } from "lucide-react";

export function MixedFileUpload() {
  const handleFileChange = (files: File[]) => {
    console.log(\`Recebidos \${files.length} arquivos:\`);
    files.forEach((file, index) => {
      console.log(\`\${index + 1}. \${file.name} - \${(file.size / 1024 / 1024).toFixed(2)} MB\`);
    });

    // Aqui você pode:
    // - Validar tamanho dos arquivos
    // - Enviar para API
    // - Mostrar preview
    // - Atualizar estado do componente pai
  };

  return (
    <FileUploadArea
      accept="application/pdf,image/*"
      label="Documentos e Imagens"
      description="Aceita PDFs e imagens"
      icon={<FileText className="h-8 w-8 text-foreground" />}
      multiple={true}
      dashed
      onFileChange={handleFileChange}
    />
  );
}`}
                />
              </div>
            </CardContent>
          </Card>

          {/* Props */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Props</CardTitle>
              <CardDescription>
                Propriedades disponíveis para o componente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2 font-semibold">Prop</th>
                      <th className="text-left p-2 font-semibold">Tipo</th>
                      <th className="text-left p-2 font-semibold">Descrição</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">accept</td>
                      <td className="p-2 font-mono text-xs">string</td>
                      <td className="p-2">
                        Tipos de arquivo aceitos (ex: &quot;image/*&quot;,
                        &quot;application/pdf&quot;)
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">label</td>
                      <td className="p-2 font-mono text-xs">string</td>
                      <td className="p-2">Rótulo do campo</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">description</td>
                      <td className="p-2 font-mono text-xs">string</td>
                      <td className="p-2">Descrição/instruções</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">icon</td>
                      <td className="p-2 font-mono text-xs">React.ReactNode</td>
                      <td className="p-2">Ícone a ser exibido</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">dashed</td>
                      <td className="p-2 font-mono text-xs">boolean</td>
                      <td className="p-2">
                        Estilo de borda tracejada diferente
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">multiple</td>
                      <td className="p-2 font-mono text-xs">boolean</td>
                      <td className="p-2">
                        Permite seleção de múltiplos arquivos
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono text-xs">onFileChange</td>
                      <td className="p-2 font-mono text-xs">
                        {"(files: File[]) => void"}
                      </td>
                      <td className="p-2">
                        Callback chamado quando arquivos são selecionados
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                  <span>Drag & drop de arquivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Clique para selecionar arquivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Validação de tipo de arquivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Preview do arquivo selecionado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Botão para remover arquivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Indicação visual de drag over</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Exibição do tamanho do arquivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Suporte a múltiplos arquivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Callback onFileChange para controle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>
                    Botão &quot;Remover todos&quot; para múltiplos arquivos
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Validação de tipos mistos (PDF + imagens)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
