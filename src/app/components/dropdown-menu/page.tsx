"use client";

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuGroup,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/registry/ui/dropdown-menu";
import { AppLayout } from "@/components/layout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import {
  User,
  Settings,
  CreditCard,
  LogOut,
  Plus,
  Mail,
  MessageSquare,
  UserPlus,
  Cloud,
  Github,
  Keyboard,
  LifeBuoy,
} from "lucide-react";

export default function DropdownMenuPage() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [position, setPosition] = React.useState("bottom");

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
            <span className="text-foreground">Dropdown Menu</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold">Dropdown Menu</h1>
              <Badge variant="secondary">Overlay</Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              Menu dropdown flutuante que exibe uma lista de ações ou opções
              quando acionado.
            </p>
          </div>

          {/* Preview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                Visualização do componente Dropdown Menu com diferentes
                configurações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 p-6 bg-muted/20 rounded-md justify-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Abrir Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Perfil</span>
                        <DropdownMenuShortcut></DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Cobrança</span>
                        <DropdownMenuShortcut></DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Configurações</span>
                        <DropdownMenuShortcut></DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sair</span>
                      <DropdownMenuShortcut></DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>

          {/* Installation */}
          <InstallationSection componentName="dropdown-menu" />

          {/* Usage */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Uso Básico
            </h2>
            <CodeBlock
              title="Exemplo básico"
              code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@scmposs/hollow-ui"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Ações</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Opção 1</DropdownMenuItem>
    <DropdownMenuItem>Opção 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
            />
          </section>

          {/* Props */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Propriedades</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">DropdownMenuItem</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4">Prop</th>
                        <th className="text-left py-2 pr-4">Tipo</th>
                        <th className="text-left py-2 pr-4">Padrão</th>
                        <th className="text-left py-2">Descrição</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">variant</td>
                        <td className="py-2 pr-4">
                          &quot;default&quot; | &quot;destructive&quot;
                        </td>
                        <td className="py-2 pr-4">&quot;default&quot;</td>
                        <td className="py-2">Estilo visual do item</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">inset</td>
                        <td className="py-2 pr-4">boolean</td>
                        <td className="py-2 pr-4">false</td>
                        <td className="py-2">Adiciona padding à esquerda</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">disabled</td>
                        <td className="py-2 pr-4">boolean</td>
                        <td className="py-2 pr-4">false</td>
                        <td className="py-2">Desabilita o item</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">onSelect</td>
                        <td className="py-2 pr-4">function</td>
                        <td className="py-2 pr-4">-</td>
                        <td className="py-2">Callback ao selecionar</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">DropdownMenuContent</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4">Prop</th>
                        <th className="text-left py-2 pr-4">Tipo</th>
                        <th className="text-left py-2 pr-4">Padrão</th>
                        <th className="text-left py-2">Descrição</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">sideOffset</td>
                        <td className="py-2 pr-4">number</td>
                        <td className="py-2 pr-4">4</td>
                        <td className="py-2">Distância do trigger em pixels</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">align</td>
                        <td className="py-2 pr-4">
                          &quot;start&quot; | &quot;center&quot; |
                          &quot;end&quot;
                        </td>
                        <td className="py-2 pr-4">&quot;center&quot;</td>
                        <td className="py-2">Alinhamento horizontal</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4 font-mono">side</td>
                        <td className="py-2 pr-4">
                          &quot;top&quot; | &quot;right&quot; |
                          &quot;bottom&quot; | &quot;left&quot;
                        </td>
                        <td className="py-2 pr-4">&quot;bottom&quot;</td>
                        <td className="py-2">Lado preferencial do trigger</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Exemplos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h4 className="font-medium mb-3">Com Checkbox Items</h4>
                <div className="flex justify-center p-4 bg-muted/20 rounded-md">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Ver Opções</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Aparência</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                      >
                        Barra de Status
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                      >
                        Barra de Atividades
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <CodeBlock
                  title="Código"
                  code={`const [showStatusBar, setShowStatusBar] = useState(true)

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Ver Opções</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>Aparência</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem
      checked={showStatusBar}
      onCheckedChange={setShowStatusBar}
    >
      Barra de Status
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-3">Com Radio Group</h4>
                <div className="flex justify-center p-4 bg-muted/20 rounded-md">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Posição: {position}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Posição do Painel</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={position}
                        onValueChange={setPosition}
                      >
                        <DropdownMenuRadioItem value="top">
                          Topo
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">
                          Rodapé
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">
                          Direita
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <CodeBlock
                  title="Código"
                  code={`const [position, setPosition] = useState("bottom")

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Posição: {position}</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
      <DropdownMenuRadioItem value="top">Topo</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="bottom">Rodapé</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`}
                />
              </div>

              <div>
                <h4 className="font-medium mb-3">Com Submenus</h4>
                <div className="flex justify-center p-4 bg-muted/20 rounded-md">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">Mais Opções</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          <span>Mensagem</span>
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <UserPlus className="mr-2 h-4 w-4" />
                            <span>Convidar</span>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              <span>Por Email</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              <span>Por Mensagem</span>
                            </DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Github className="mr-2 h-4 w-4" />
                        <span>GitHub</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <LifeBuoy className="mr-2 h-4 w-4" />
                        <span>Suporte</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled>
                        <Cloud className="mr-2 h-4 w-4" />
                        <span>API</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Com Atalhos de Teclado</h4>
                <div className="flex justify-center p-4 bg-muted/20 rounded-md">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        <Keyboard className="mr-2 h-4 w-4" />
                        Atalhos
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Atalhos do Editor</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <span>Novo Arquivo</span>
                        <DropdownMenuShortcut></DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Abrir Arquivo</span>
                        <DropdownMenuShortcut></DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Salvar</span>
                        <DropdownMenuShortcut></DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <span>Buscar</span>
                        <DropdownMenuShortcut></DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accessibility */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Acessibilidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                O componente Dropdown Menu segue as diretrizes WAI-ARIA e
                implementa:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
                <li>Navegação por teclado (Tab, Arrow Keys, Enter, Escape)</li>
                <li>Suporte a type-ahead para busca rápida</li>
                <li>Atributos ARIA apropriados para leitores de tela</li>
                <li>
                  Fechamento automático ao clicar fora ou pressionar Escape
                </li>
                <li>Foco gerenciado automaticamente</li>
                <li>Suporte para items desabilitados</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
