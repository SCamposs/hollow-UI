import { logger, createSpinner } from "../utils/logger.js";
import {
  getComponent,
  getAllComponents,
  getComponentWithDependencies,
} from "../utils/registry.js";
import { init } from "./init.js";
import {
  writeFile,
  fileExists,
  readFile,
  resolveComponentPath,
  installDependencies,
  getProjectRoot,
} from "../utils/fs.js";
import path from "path";
import chalk from "chalk";

const HOLLOW_UI_TOKEN_MARKER = "/* hollow-UI Design Tokens */";
const GLOBALS_SEARCH_PATHS = [
  ["src", "app", "globals.css"],
  ["app", "globals.css"],
  ["src", "styles", "globals.css"],
  ["styles", "globals.css"],
  ["src", "index.css"],
  ["src", "globals.css"],
];

async function isProjectInitialized(): Promise<boolean> {
  const projectRoot = getProjectRoot();
  const utilsPath = path.join(projectRoot, "src", "lib", "utils.ts");

  if (!(await fileExists(utilsPath))) {
    return false;
  }

  for (const parts of GLOBALS_SEARCH_PATHS) {
    const globalsPath = path.join(projectRoot, ...parts);
    if (!(await fileExists(globalsPath))) {
      continue;
    }

    const content = await readFile(globalsPath);
    if (content.includes(HOLLOW_UI_TOKEN_MARKER)) {
      return true;
    }
  }

  return false;
}

export async function add(
  components: string[] = [],
  options: { all?: boolean; overwrite?: boolean } = {}
) {
  const isInitialized = await isProjectInitialized();

  if (!isInitialized) {
    logger.warn("Pré-setup não encontrado. Executando 'hollow-ui init' automaticamente...");
    logger.break();
    await init({ yes: true });
  }

  if (options.all) {
    components = getAllComponents();
    logger.info("Adicionando todos os componentes...");
  }

  if (components.length === 0) {
    logger.error("Nenhum componente especificado");
    logger.info("Use: npx @scmposs/hollow-ui add [componente]");
    logger.info(
      "Ou veja os componentes disponíveis: npx @scmposs/hollow-ui list"
    );
    return;
  }

  logger.break();

  for (const componentName of components) {
    await addComponent(componentName, options.overwrite);
  }

  logger.break();
  logger.success("Componentes adicionados com sucesso!");
}

async function addComponent(name: string, overwrite = false) {
  const component = getComponent(name);

  if (!component) {
    logger.error(`Componente "${name}" não encontrado`);
    return;
  }

  logger.info(`Adicionando ${chalk.cyan(name)}...`);

  const allComponents = getComponentWithDependencies(name);
  const allDeps = new Set<string>();

  for (const compName of allComponents) {
    const comp = getComponent(compName);
    if (!comp) continue;

    for (const file of comp.files) {
      const destPath = resolveComponentPath(file.path);
      const exists = await fileExists(destPath);

      if (exists && !overwrite) {
        logger.warn(`  Arquivo já existe: ${file.path}`);
        continue;
      }

      // Tenta encontrar o arquivo fonte em múltiplos locais possíveis
      const possiblePaths = [
        // 1. No node_modules quando instalado via npm
        path.join(
          process.cwd(),
          "node_modules",
          "@scmposs",
          "hollow-ui",
          "src",
          file.content
        ),
        // 2. Relativo ao diretório do CLI (desenvolvimento local)
        path.join(__dirname, "../..", "src", file.content),
        // 3. Relativo ao dist (quando o CLI está em dist/)
        path.join(__dirname, "..", "src", file.content),
      ];

      let sourcePath = "";
      let sourceExists = false;

      for (const tryPath of possiblePaths) {
        if (await fileExists(tryPath)) {
          sourcePath = tryPath;
          sourceExists = true;
          break;
        }
      }

      if (!sourceExists) {
        logger.error(`  Arquivo fonte não encontrado: ${file.content}`);
        logger.warn(`  Caminhos tentados: ${possiblePaths.join(", ")}`);
        continue;
      }

      let content = await readFile(sourcePath);

      // Adiciona cabeçalho com assinatura do autor
      const header = `/**
 * Component: ${compName}
 * Developed by: Ítalo Soares Campos
 * Library: @scmposs/hollow-ui
 * Homepage: https://github.com/SCamposs/hollow-ui
 */

`;
      content = header + content;

      await writeFile(destPath, content);

      logger.success(`  ${exists ? "Atualizado" : "Criado"}: ${file.path}`);
    }

    comp.dependencies.forEach((dep) => allDeps.add(dep));
  }

  if (allDeps.size > 0) {
    const spinner = createSpinner("Instalando dependências...");
    spinner.start();

    try {
      await installDependencies(Array.from(allDeps));
      spinner.succeed("Dependências instaladas");
    } catch (error) {
      spinner.fail("Erro ao instalar dependências");
      logger.error(error instanceof Error ? error.message : String(error));
    }
  }
}
