import { CodeBlock } from "@/components/ui/CodeBlock";

interface InstallationSectionProps {
  componentName: string;
}

export function InstallationSection({
  componentName,
}: InstallationSectionProps) {
  return (
    <section className="space-y-4 mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Instalação
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Via CLI (Recomendado)</h3>
          <div className="space-y-2">
            <CodeBlock
              title="1. Inicializar (primeira vez)"
              code={`npx @scmposs/hollow-ui init
npx @scmposs/hollow-ui setup`}
            />
            <CodeBlock
              title="2. Adicionar componente"
              code={`npx @scmposs/hollow-ui add ${componentName}`}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Os comandos{" "}
            <code className="px-1.5 py-0.5 bg-muted rounded text-xs">init</code>{" "}
            e{" "}
            <code className="px-1.5 py-0.5 bg-muted rounded text-xs">setup</code>{" "}
            fazem o pré-setup (necessário apenas uma vez). Se você rodar{" "}
            <code className="px-1.5 py-0.5 bg-muted rounded text-xs">add</code>{" "}
            sem isso, a CLI executa o setup automaticamente.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Via NPM</h3>
          <CodeBlock
            title="Instalar pacote completo"
            code="npm install @scmposs/hollow-ui@latest"
          />
          <p className="text-sm text-muted-foreground mt-2">
            Instala todos os componentes como dependência do projeto.
          </p>
        </div>
      </div>
    </section>
  );
}
