import { logger } from "../utils/logger.js";
import { getRegistry } from "../utils/registry.js";
import chalk from "chalk";

export async function list() {
  logger.info("Available components in hollow-UI:");
  logger.break();

  const registry = getRegistry();
  const components = Object.keys(registry).sort();

  const categories: { [key: string]: string[] } = {
    Básicos: [],
    Formulários: [],
    Navegação: [],
    Feedback: [],
    Layout: [],
    Dados: [],
  };

  components.forEach((name) => {
    if (["button", "badge", "card"].includes(name)) {
      categories["Básicos"].push(name);
    } else if (
      ["input", "label", "checkbox", "switch", "select"].includes(name)
    ) {
      categories["Formulários"].push(name);
    } else if (
      ["navigation", "header", "footer", "header-button", "nav-rail"].includes(name)
    ) {
      categories["Navegação"].push(name);
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
      console.log(chalk.bold.cyan(`\n${category}:`));
      items.forEach((item) => {
        const component = registry[item];
        const deps = component.dependencies.length;
        console.log(
          `  ${chalk.green("•")} ${chalk.white(item)} ${chalk.gray(
            `(${deps} deps)`
          )}`
        );
      });
    }
  }

  logger.break();
  logger.info("Para adicionar um componente:");
  console.log(chalk.cyan("  npx @scmposs/hollow-ui add [componente]"));
  logger.break();
  logger.info("Exemplo:");
  console.log(chalk.cyan("  npx @scmposs/hollow-ui add button"));
  logger.break();
}
