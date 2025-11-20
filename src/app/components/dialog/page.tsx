import React from "react";
import Link from "next/link";
import { Button } from "@/registry/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/ui/dialog";
import { Input } from "@/registry/ui/input";
import { Label } from "@/registry/ui/label";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";

export default function DialogPage() {
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
            <span className="text-foreground">Dialog</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Dialog</h1>
            <p className="text-xl text-muted-foreground">
              Modal sobreposto para interações focadas do usuário.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Dialog com diferentes configurações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 p-6 bg-muted/20 rounded-md">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Abrir Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Exemplo de Dialog</DialogTitle>
                      <DialogDescription>
                        Este é um exemplo de como o dialog aparece na tela.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Nome
                        </Label>
                        <Input id="name" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input id="email" className="col-span-3" />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancelar</Button>
                      <Button>Salvar</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="dialog" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@scmposs/hollow-ui"

<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título do Dialog</DialogTitle>
      <DialogDescription>
        Descrição do dialog aqui.
      </DialogDescription>
    </DialogHeader>
    {/* Conteúdo do dialog */}
  </DialogContent>
</Dialog>`}
            />
          </section>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Dialog de Confirmação</h4>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive">Excluir Item</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirmar Exclusão</DialogTitle>
                      <DialogDescription>
                        Tem certeza que deseja excluir este item? Esta ação não
                        pode ser desfeita.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancelar</Button>
                      <Button variant="destructive">Excluir</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div>
                <h4 className="font-medium mb-3">Dialog de Formulário</h4>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Adicionar Usuário</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Novo Usuário</DialogTitle>
                      <DialogDescription>
                        Preencha os dados para criar um novo usuário.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="user-name">Nome completo</Label>
                        <Input id="user-name" placeholder="Nome do usuário" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-email">Email</Label>
                        <Input
                          id="user-email"
                          type="email"
                          placeholder="email@exemplo.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="user-role">Cargo</Label>
                        <Input id="user-role" placeholder="Cargo do usuário" />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Cancelar</Button>
                      <Button>Criar Usuário</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
