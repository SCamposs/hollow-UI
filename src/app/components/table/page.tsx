/**
 * hollow-UI - Table Demo Page
 * Desenvolvido por Ítalo Soares Campos
 */

"use client";

import React from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { InstallationSection } from "@/components/ui/InstallationSection";
import { Button } from "@/registry/ui/button";
import { Badge } from "@/registry/ui/badge";
import { Checkbox } from "@/registry/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import {
  MoreVertical,
  Edit,
  Eye,
  Trash2,
  ArrowUpDown,
  Filter,
  Download,
} from "lucide-react";

// Dados de exemplo para a tabela
const vehicleData = [
  {
    id: "001",
    placa: "ABC-1234",
    modelo: "Volvo FH540",
    tipo: "Cavalo Mecânico",
    status: "Ativo",
    motorista: "João Silva",
    combustivel: "82%",
    manutencao: "2025-02-15",
  },
  {
    id: "002",
    placa: "DEF-5678",
    modelo: "Mercedes Actros",
    tipo: "Truck",
    status: "Manutenção",
    motorista: "-",
    combustivel: "45%",
    manutencao: "2025-01-20",
  },
  {
    id: "003",
    placa: "GHI-9012",
    modelo: "Scania R450",
    tipo: "Cavalo Mecânico",
    status: "Ativo",
    motorista: "Maria Santos",
    combustivel: "95%",
    manutencao: "2025-03-10",
  },
  {
    id: "004",
    placa: "JKL-3456",
    modelo: "Iveco Daily",
    tipo: "Van",
    status: "Inativo",
    motorista: "-",
    combustivel: "12%",
    manutencao: "2025-01-25",
  },
];

const userData = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@empresa.com",
    role: "Motorista",
    department: "Logística",
    status: "Ativo",
    lastLogin: "2025-01-14",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@empresa.com",
    role: "Supervisor",
    department: "Operações",
    status: "Ativo",
    lastLogin: "2025-01-14",
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    email: "carlos@empresa.com",
    role: "Analista",
    department: "Manutenção",
    status: "Inativo",
    lastLogin: "2025-01-10",
  },
];

export default function TableDemo() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "ativo":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "inativo":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case "manutenção":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getFuelColor = (fuel: string) => {
    const percentage = parseInt(fuel);
    if (percentage > 70) return "text-green-600 dark:text-green-400";
    if (percentage > 30) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-8">
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
            <span className="text-foreground">Table</span>
          </div>

          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Table
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Componente de tabela flexível e responsivo para exibição de dados
              estruturados. Inclui suporte para ordenação, filtragem e ações
              contextuais.
            </p>
          </div>

          {/* Instalação */}
          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Instalação
            </h2>
            <CodeBlock
              title="Instalação"
              code="npm install @scmposs/hollow-ui@latest"
            />
          </section>

          {/* Tabela Básica */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Tabela Básica
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Exemplo simples de tabela com dados de usuários:
            </p>

            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableCaption>Lista de usuários do sistema</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Cargo</TableHead>
                      <TableHead>Departamento</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userData.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          {user.name}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>
                          <Badge
                            className={getStatusColor(user.status)}
                            variant="secondary"
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <CodeBlock
              title="Tabela Básica"
              code={`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";

<Table>
  <TableCaption>Lista de usuários do sistema</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Nome</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Cargo</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.role}</TableCell>
        <TableCell>
          <Badge variant="secondary">{user.status}</Badge>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
            />
          </section>

          {/* Tabela com Ações */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Tabela com Ações
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Tabela com botões de ação e seleção múltipla:
            </p>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Gerenciamento de Usuários</CardTitle>
                  <CardDescription>
                    Gerencie usuários do sistema com ações contextuais
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Exportar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox />
                      </TableHead>
                      <TableHead className="cursor-pointer hover:text-foreground">
                        Nome <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                      </TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Cargo</TableHead>
                      <TableHead>Último Login</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userData.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell className="font-medium">
                          {user.name}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell>
                          <Badge
                            className={getStatusColor(user.status)}
                            variant="secondary"
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <CodeBlock
              title="Tabela com Ações"
              code={`import { Checkbox } from "@/registry/ui/checkbox";
import { Button } from "@/registry/ui/button";
import { Eye, Edit, Trash2 } from "lucide-react";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-12">
        <Checkbox />
      </TableHead>
      <TableHead>Nome</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Ações</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell>
          <Checkbox />
        </TableCell>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>
          <Badge variant="secondary">{user.status}</Badge>
        </TableCell>
        <TableCell className="text-right">
          <div className="flex justify-end gap-2">
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
            />
          </section>

          {/* Tabela de Veículos */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Tabela Avançada - Controle de Veículos
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Exemplo prático com dados de veículos e indicadores visuais:
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Frota de Veículos</CardTitle>
                <CardDescription>
                  Monitoramento e controle da frota com indicadores em tempo
                  real
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Placa</TableHead>
                      <TableHead>Modelo</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Motorista</TableHead>
                      <TableHead>Combustível</TableHead>
                      <TableHead>Próx. Manutenção</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vehicleData.map((vehicle) => (
                      <TableRow key={vehicle.id}>
                        <TableCell className="font-mono text-sm">
                          {vehicle.id}
                        </TableCell>
                        <TableCell className="font-medium">
                          {vehicle.placa}
                        </TableCell>
                        <TableCell>{vehicle.modelo}</TableCell>
                        <TableCell>{vehicle.tipo}</TableCell>
                        <TableCell>{vehicle.motorista}</TableCell>
                        <TableCell>
                          <span className={getFuelColor(vehicle.combustivel)}>
                            {vehicle.combustivel}
                          </span>
                        </TableCell>
                        <TableCell>{vehicle.manutencao}</TableCell>
                        <TableCell>
                          <Badge
                            className={getStatusColor(vehicle.status)}
                            variant="secondary"
                          >
                            {vehicle.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={7}>Total de veículos</TableCell>
                      <TableCell className="text-right">
                        {vehicleData.length}
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </CardContent>
            </Card>

            <CodeBlock
              title="Tabela com Footer"
              code={`import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Placa</TableHead>
      <TableHead>Modelo</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {vehicles.map((vehicle) => (
      <TableRow key={vehicle.id}>
        <TableCell>{vehicle.placa}</TableCell>
        <TableCell>{vehicle.modelo}</TableCell>
        <TableCell>
          <Badge variant="secondary">{vehicle.status}</Badge>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">{vehicles.length}</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
            />
          </section>

          {/* Props e Interface */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Componentes e Props
            </h2>

            <CodeBlock
              title="Componentes Table"
              code={`// Componentes principais
Table          - Container principal da tabela
TableCaption   - Legenda da tabela
TableHeader    - Cabeçalho da tabela
TableBody      - Corpo da tabela
TableFooter    - Rodapé da tabela
TableRow       - Linha da tabela
TableHead      - Célula do cabeçalho
TableCell      - Célula do corpo

// Props comuns (extends HTMLElement props)
className?: string
children?: React.ReactNode

// Exemplo de uso completo
<Table>
  <TableCaption>Dados de exemplo</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Coluna 1</TableHead>
      <TableHead>Coluna 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Dados 1</TableCell>
      <TableCell>Dados 2</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Rodapé</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Características
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Layout responsivo com scroll horizontal</li>
                  <li>• Suporte a data-slot para personalização</li>
                  <li>• Hover effects integrados</li>
                  <li>• Compatível com checkbox e badges</li>
                  <li>• Suporte a sorting visual</li>
                  <li>• Estados de seleção</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Boas Práticas
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• Use TableCaption para acessibilidade</li>
                  <li>• Mantenha cabeçalhos descritivos</li>
                  <li>• Limite dados por página para performance</li>
                  <li>• Use cores consistentes para status</li>
                  <li>• Implemente paginação quando necessário</li>
                  <li>• Considere loading states</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  );
}
