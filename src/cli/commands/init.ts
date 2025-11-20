import { logger } from "../utils/logger.js";
import { writeFile, fileExists, getProjectRoot } from "../utils/fs.js";
import path from "path";

export async function init(options: { yes?: boolean }) {
  logger.info("Inicializando hollow-UI no seu projeto...");
  logger.break();

  const projectRoot = getProjectRoot();

  const utilsPath = path.join(projectRoot, "src", "lib", "utils.ts");
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
    logger.info("Arquivo src/lib/utils.ts já existe");
  }

  const tailwindConfigPath = path.join(projectRoot, "tailwind.config.ts");
  const tailwindExists = await fileExists(tailwindConfigPath);

  if (!tailwindExists) {
    logger.warn("tailwind.config.ts não encontrado");
    logger.info(
      "Certifique-se de ter o Tailwind CSS configurado no seu projeto"
    );
  } else {
    logger.success("tailwind.config.ts encontrado");
  }

  logger.break();
  logger.success("Configuração inicial concluída!");
  logger.break();
  logger.info("Próximos passos:");
  logger.info("  1. Certifique-se de ter o Tailwind CSS instalado");
  logger.info("  2. Execute: npx @scmposs/hollow-ui add button");
  logger.info("  3. Ou veja todos os componentes: npx @scmposs/hollow-ui list");
  logger.break();
}
