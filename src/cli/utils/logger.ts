import chalk from "chalk";
import ora from "ora";

export const logger = {
  info: (message: string) => {
    console.log(chalk.blue("ℹ"), message);
  },

  success: (message: string) => {
    console.log(chalk.green("✔"), message);
  },

  warn: (message: string) => {
    console.log(chalk.yellow("⚠"), message);
  },

  error: (message: string) => {
    console.log(chalk.red("✖"), message);
  },

  break: () => {
    console.log("");
  },
};

export function createSpinner(text: string) {
  return ora({
    text,
    color: "cyan",
  });
}
