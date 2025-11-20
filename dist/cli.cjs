#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/cli/index.ts
var import_commander = require("commander");

// src/cli/utils/logger.ts
var import_chalk = __toESM(require("chalk"));
var import_ora = __toESM(require("ora"));
var logger = {
  info: (message) => {
    console.log(import_chalk.default.blue("\u2139"), message);
  },
  success: (message) => {
    console.log(import_chalk.default.green("\u2714"), message);
  },
  warn: (message) => {
    console.log(import_chalk.default.yellow("\u26A0"), message);
  },
  error: (message) => {
    console.log(import_chalk.default.red("\u2716"), message);
  },
  break: () => {
    console.log("");
  }
};
function createSpinner(text) {
  return (0, import_ora.default)({
    text,
    color: "cyan"
  });
}

// src/cli/utils/fs.ts
var import_fs_extra = __toESM(require("fs-extra"));
var import_path = __toESM(require("path"));
var import_util = require("util");
var import_child_process = require("child_process");
var execAsync = (0, import_util.promisify)(import_child_process.exec);
async function ensureDir(dirPath) {
  await import_fs_extra.default.ensureDir(dirPath);
}
async function writeFile(filePath, content) {
  await ensureDir(import_path.default.dirname(filePath));
  await import_fs_extra.default.writeFile(filePath, content, "utf-8");
}
async function fileExists(filePath) {
  try {
    await import_fs_extra.default.access(filePath);
    return true;
  } catch (e) {
    return false;
  }
}
async function readFile(filePath) {
  return await import_fs_extra.default.readFile(filePath, "utf-8");
}
async function installDependencies(dependencies) {
  if (dependencies.length === 0) return;
  const depsString = dependencies.join(" ");
  try {
    const packageManager = await detectPackageManager();
    const installCmd = packageManager === "yarn" ? `yarn add ${depsString}` : packageManager === "pnpm" ? `pnpm add ${depsString}` : `npm install ${depsString}`;
    await execAsync(installCmd);
  } catch (error) {
    throw new Error(`Erro ao instalar depend\xEAncias: ${error}`);
  }
}
async function detectPackageManager() {
  if (await fileExists("yarn.lock")) return "yarn";
  if (await fileExists("pnpm-lock.yaml")) return "pnpm";
  return "npm";
}
function getProjectRoot() {
  return process.cwd();
}
function resolveComponentPath(componentPath) {
  const projectRoot = getProjectRoot();
  if (componentPath.startsWith("src/")) {
    return import_path.default.join(projectRoot, componentPath);
  }
  return import_path.default.join(projectRoot, "src", componentPath);
}

// src/cli/commands/init.ts
var import_path2 = __toESM(require("path"));
async function init(options) {
  logger.info("Inicializando hollow-UI no seu projeto...");
  logger.break();
  const projectRoot = getProjectRoot();
  const utilsPath = import_path2.default.join(projectRoot, "src", "lib", "utils.ts");
  const utilsExists = await fileExists(utilsPath);
  if (!utilsExists || options.yes) {
    const utilsContent = `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;
    await writeFile(utilsPath, utilsContent);
    logger.success("Criado: src/lib/utils.ts");
  } else {
    logger.info("Arquivo src/lib/utils.ts j\xE1 existe");
  }
  const tailwindConfigPath = import_path2.default.join(projectRoot, "tailwind.config.ts");
  const tailwindExists = await fileExists(tailwindConfigPath);
  if (!tailwindExists) {
    logger.warn("tailwind.config.ts n\xE3o encontrado");
    logger.info(
      "Certifique-se de ter o Tailwind CSS configurado no seu projeto"
    );
  } else {
    logger.success("tailwind.config.ts encontrado");
  }
  logger.break();
  logger.success("Configura\xE7\xE3o inicial conclu\xEDda!");
  logger.break();
  logger.info("Pr\xF3ximos passos:");
  logger.info("  1. Certifique-se de ter o Tailwind CSS instalado");
  logger.info("  2. Execute: npx @scmposs/hollow-ui add button");
  logger.info("  3. Ou veja todos os componentes: npx @scmposs/hollow-ui list");
  logger.break();
}

// src/cli/registry.json
var registry_default = {
  button: {
    name: "button",
    files: [
      {
        path: "components/ui/button.tsx",
        content: "registry/ui/button.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: [
      "class-variance-authority",
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-slot"
    ],
    registryDependencies: [],
    type: "components:ui"
  },
  badge: {
    name: "badge",
    files: [
      {
        path: "components/ui/badge.tsx",
        content: "registry/ui/badge.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["class-variance-authority", "clsx", "tailwind-merge"],
    registryDependencies: [],
    type: "components:ui"
  },
  card: {
    name: "card",
    files: [
      {
        path: "components/ui/card.tsx",
        content: "registry/ui/card.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: [],
    type: "components:ui"
  },
  input: {
    name: "input",
    files: [
      {
        path: "components/ui/input.tsx",
        content: "registry/ui/input.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: [],
    type: "components:ui"
  },
  label: {
    name: "label",
    files: [
      {
        path: "components/ui/label.tsx",
        content: "registry/ui/label.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "@radix-ui/react-label"],
    registryDependencies: [],
    type: "components:ui"
  },
  checkbox: {
    name: "checkbox",
    files: [
      {
        path: "components/ui/checkbox.tsx",
        content: "registry/ui/checkbox.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: [
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-checkbox",
      "lucide-react"
    ],
    registryDependencies: [],
    type: "components:ui"
  },
  switch: {
    name: "switch",
    files: [
      {
        path: "components/ui/switch.tsx",
        content: "registry/ui/switch.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "@radix-ui/react-switch"],
    registryDependencies: [],
    type: "components:ui"
  },
  select: {
    name: "select",
    files: [
      {
        path: "components/ui/select.tsx",
        content: "registry/ui/select.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: [
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-select",
      "lucide-react"
    ],
    registryDependencies: [],
    type: "components:ui"
  },
  table: {
    name: "table",
    files: [
      {
        path: "components/ui/table.tsx",
        content: "registry/ui/table.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: [],
    type: "components:ui"
  },
  dialog: {
    name: "dialog",
    files: [
      {
        path: "components/ui/dialog.tsx",
        content: "registry/ui/dialog.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: [
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-dialog",
      "lucide-react"
    ],
    registryDependencies: [],
    type: "components:ui"
  },
  popover: {
    name: "popover",
    files: [
      {
        path: "components/ui/popover.tsx",
        content: "registry/ui/popover.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "@radix-ui/react-popover"],
    registryDependencies: [],
    type: "components:ui"
  },
  accordion: {
    name: "accordion",
    files: [
      {
        path: "components/ui/accordion.tsx",
        content: "registry/ui/accordion.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: [
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-accordion",
      "lucide-react"
    ],
    registryDependencies: [],
    type: "components:ui"
  },
  "dropdown-menu": {
    name: "dropdown-menu",
    files: [
      {
        path: "components/ui/dropdown-menu.tsx",
        content: "registry/ui/dropdown-menu.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: [
      "clsx",
      "tailwind-merge",
      "@radix-ui/react-dropdown-menu",
      "lucide-react"
    ],
    registryDependencies: [],
    type: "components:ui"
  },
  sonner: {
    name: "sonner",
    files: [
      {
        path: "components/ui/sonner.tsx",
        content: "registry/ui/sonner.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["sonner", "next-themes"],
    registryDependencies: [],
    type: "components:ui"
  },
  header: {
    name: "header",
    files: [
      {
        path: "components/ui/header.tsx",
        content: "registry/ui/Header.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    registryDependencies: [],
    type: "components:ui"
  },
  footer: {
    name: "footer",
    files: [
      {
        path: "components/ui/footer.tsx",
        content: "registry/ui/Footer.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: [],
    type: "components:ui"
  },
  navigation: {
    name: "navigation",
    files: [
      {
        path: "components/ui/navigation.tsx",
        content: "registry/ui/Navigation.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    registryDependencies: [],
    type: "components:ui"
  },
  "status-badge": {
    name: "status-badge",
    files: [
      {
        path: "components/ui/status-badge.tsx",
        content: "registry/ui/StatusBadge.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    registryDependencies: [],
    type: "components:ui"
  },
  "header-button": {
    name: "header-button",
    files: [
      {
        path: "components/ui/header-button.tsx",
        content: "registry/ui/HeaderButton.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    registryDependencies: ["button"],
    type: "components:ui"
  },
  "header-stats": {
    name: "header-stats",
    files: [
      {
        path: "components/ui/header-stats.tsx",
        content: "registry/ui/HeaderStats.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    registryDependencies: ["card"],
    type: "components:ui"
  },
  "info-card": {
    name: "info-card",
    files: [
      {
        path: "components/ui/info-card.tsx",
        content: "registry/ui/InfoCard.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    registryDependencies: ["card"],
    type: "components:ui"
  },
  "stat-card": {
    name: "stat-card",
    files: [
      {
        path: "components/ui/stat-card.tsx",
        content: "registry/ui/StatCard.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    registryDependencies: ["card"],
    type: "components:ui"
  },
  "back-to-top-button": {
    name: "back-to-top-button",
    files: [
      {
        path: "components/ui/back-to-top-button.tsx",
        content: "registry/ui/BackToTopButton.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    registryDependencies: ["button"],
    type: "components:ui"
  },
  "multi-select": {
    name: "multi-select",
    files: [
      {
        path: "components/ui/multi-select.tsx",
        content: "registry/ui/multi-select.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    registryDependencies: [
      "command",
      "popover",
      "badge",
      "button",
      "checkbox"
    ],
    type: "components:ui"
  },
  "calendar-input": {
    name: "calendar-input",
    files: [
      {
        path: "components/ui/calendar-input.tsx",
        content: "registry/ui/calendar-input.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "lucide-react", "date-fns"],
    registryDependencies: ["button", "input", "popover", "calendar"],
    type: "components:ui"
  },
  "file-upload-area": {
    name: "file-upload-area",
    files: [
      {
        path: "components/ui/file-upload-area.tsx",
        content: "registry/ui/file-upload-area.tsx",
        type: "registry:ui"
      }
    ],
    dependencies: ["clsx", "tailwind-merge", "lucide-react"],
    registryDependencies: ["button", "label"],
    type: "components:ui"
  }
};

// src/cli/utils/registry.ts
function getRegistry() {
  return registry_default;
}
function getComponent(name) {
  const registry = getRegistry();
  return registry[name] || null;
}
function getAllComponents() {
  const registry = getRegistry();
  return Object.keys(registry);
}
function getComponentWithDependencies(name) {
  const registry = getRegistry();
  const component = registry[name];
  if (!component) {
    return [];
  }
  const components = [name];
  for (const dep of component.registryDependencies) {
    if (!components.includes(dep)) {
      components.push(...getComponentWithDependencies(dep));
    }
  }
  return [...new Set(components)];
}

// src/cli/commands/add.ts
var import_path3 = __toESM(require("path"));
var import_chalk2 = __toESM(require("chalk"));
async function add(components = [], options = {}) {
  if (options.all) {
    components = getAllComponents();
    logger.info("Adicionando todos os componentes...");
  }
  if (components.length === 0) {
    logger.error("Nenhum componente especificado");
    logger.info("Use: npx @scmposs/hollow-ui add [componente]");
    logger.info(
      "Ou veja os componentes dispon\xEDveis: npx @scmposs/hollow-ui list"
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
async function addComponent(name, overwrite = false) {
  const component = getComponent(name);
  if (!component) {
    logger.error(`Componente "${name}" n\xE3o encontrado`);
    return;
  }
  logger.info(`Adicionando ${import_chalk2.default.cyan(name)}...`);
  const allComponents = getComponentWithDependencies(name);
  const allDeps = /* @__PURE__ */ new Set();
  for (const compName of allComponents) {
    const comp = getComponent(compName);
    if (!comp) continue;
    for (const file of comp.files) {
      const destPath = resolveComponentPath(file.path);
      const exists = await fileExists(destPath);
      if (exists && !overwrite) {
        logger.warn(`  Arquivo j\xE1 existe: ${file.path}`);
        continue;
      }
      const possiblePaths = [
        // 1. No node_modules quando instalado via npm
        import_path3.default.join(
          process.cwd(),
          "node_modules",
          "@scmposs",
          "hollow-ui",
          "src",
          file.content
        ),
        // 2. Relativo ao diretório do CLI (desenvolvimento local)
        import_path3.default.join(__dirname, "../..", "src", file.content),
        // 3. Relativo ao dist (quando o CLI está em dist/)
        import_path3.default.join(__dirname, "..", "src", file.content)
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
        logger.error(`  Arquivo fonte n\xE3o encontrado: ${file.content}`);
        logger.warn(`  Caminhos tentados: ${possiblePaths.join(", ")}`);
        continue;
      }
      let content = await readFile(sourcePath);
      const header = `/**
 * Component: ${compName}
 * Developed by: \xCDtalo Soares Campos
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
    const spinner = createSpinner("Instalando depend\xEAncias...");
    spinner.start();
    try {
      await installDependencies(Array.from(allDeps));
      spinner.succeed("Depend\xEAncias instaladas");
    } catch (error) {
      spinner.fail("Erro ao instalar depend\xEAncias");
      logger.error(error instanceof Error ? error.message : String(error));
    }
  }
}

// src/cli/commands/list.ts
var import_chalk3 = __toESM(require("chalk"));
async function list() {
  logger.info("Available components in hollow-UI:");
  logger.break();
  const registry = getRegistry();
  const components = Object.keys(registry).sort();
  const categories = {
    B\u00E1sicos: [],
    Formul\u00E1rios: [],
    Navega\u00E7\u00E3o: [],
    Feedback: [],
    Layout: [],
    Dados: []
  };
  components.forEach((name) => {
    if (["button", "badge", "card"].includes(name)) {
      categories["B\xE1sicos"].push(name);
    } else if (["input", "label", "checkbox", "switch", "select"].includes(name)) {
      categories["Formul\xE1rios"].push(name);
    } else if (["navigation", "header", "footer", "header-button"].includes(name)) {
      categories["Navega\xE7\xE3o"].push(name);
    } else if (["dialog", "popover", "sonner", "status-badge"].includes(name)) {
      categories["Feedback"].push(name);
    } else if (["accordion", "dropdown-menu", "table"].includes(name)) {
      categories["Layout"].push(name);
    } else {
      categories["Dados"].push(name);
    }
  });
  for (const [category, items] of Object.entries(categories)) {
    if (items.length > 0) {
      console.log(import_chalk3.default.bold.cyan(`
${category}:`));
      items.forEach((item) => {
        const component = registry[item];
        const deps = component.dependencies.length;
        console.log(
          `  ${import_chalk3.default.green("\u2022")} ${import_chalk3.default.white(item)} ${import_chalk3.default.gray(
            `(${deps} deps)`
          )}`
        );
      });
    }
  }
  logger.break();
  logger.info("Para adicionar um componente:");
  console.log(import_chalk3.default.cyan("  npx @scmposs/hollow-ui add [componente]"));
  logger.break();
  logger.info("Exemplo:");
  console.log(import_chalk3.default.cyan("  npx @scmposs/hollow-ui add button"));
  logger.break();
}

// src/cli/index.ts
var program = new import_commander.Command();
program.name("hollow-ui").description("hollow-UI - CLI to add components to your project").version("1.1.6");
program.command("init").description("Initialize hollow-UI configuration in your project").option("-y, --yes", "Pular confirma\xE7\xF5es e usar valores padr\xE3o").action(init);
program.command("add").description("Adiciona um componente ao seu projeto").argument("[components...]", "Nome dos componentes para adicionar").option("-a, --all", "Adicionar todos os componentes").option("-o, --overwrite", "Sobrescrever arquivos existentes").action(add);
program.command("list").description("Lista todos os componentes dispon\xEDveis").action(list);
program.parse();
