import { logger } from "../utils/logger.js";
import {
  writeFile,
  fileExists,
  readFile,
  getProjectRoot,
  installDependencies,
  detectPackageManager,
} from "../utils/fs.js";
import path from "path";

// ─── CSS Token Template ───────────────────────────────────────────────────────
// Injected into globals.css so all components render correctly out-of-the-box.

const HOLLOW_UI_TOKEN_MARKER = "/* hollow-UI Design Tokens */";

const cssTokensBlock = `${HOLLOW_UI_TOKEN_MARKER}

@custom-variant dark (&:is(.dark *));
@custom-variant contrast (&:is(.contrast *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

/* Light theme */
:root {
  --radius: 0.625rem;
  --background: #ffffff;
  --foreground: #1f2937;
  --card: #ffffff;
  --card-foreground: #1f2937;
  --popover: #ffffff;
  --popover-foreground: #1f2937;
  --primary: #2e4a78;
  --primary-foreground: #ffffff;
  --secondary: #f8fafc;
  --secondary-foreground: #374151;
  --muted: #f1f5f9;
  --muted-foreground: #64748b;
  --accent: #3d5fa8;
  --accent-foreground: #ffffff;
  --destructive: #dc2626;
  --border: #e2e8f0;
  --input: #e2e8f0;
  --ring: #2e4a78;
  --chart-1: #2e4a78;
  --chart-2: #3d5fa8;
  --chart-3: #6b8fd4;
  --chart-4: #94b3e8;
  --chart-5: #bdd4f7;
  --sidebar: #f8fafc;
  --sidebar-foreground: #1f2937;
  --sidebar-primary: #2e4a78;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #f1f5f9;
  --sidebar-accent-foreground: #374151;
  --sidebar-border: #e2e8f0;
  --sidebar-ring: #2e4a78;
}

/* Dark theme */
.dark {
  --background: #0a0e1a;
  --foreground: #d4d8e8;
  --card: #12161f;
  --card-foreground: #d4d8e8;
  --popover: #12161f;
  --popover-foreground: #d4d8e8;
  --primary: #c4d0e3;
  --primary-foreground: #0a0e1a;
  --secondary: #1a1f2e;
  --secondary-foreground: #d4d8e8;
  --muted: #1a1f2e;
  --muted-foreground: #8a97b0;
  --accent: #2a3447;
  --accent-foreground: #c4d0e3;
  --destructive: #d94141;
  --border: #1e2433;
  --input: #1e2433;
  --ring: #c4d0e3;
  --chart-1: #c4d0e3;
  --chart-2: #d4dded;
  --chart-3: #a8b8d4;
  --chart-4: #4a5a78;
  --chart-5: #5d6b86;
  --sidebar: #0d1117;
  --sidebar-foreground: #d4d8e8;
  --sidebar-primary: #c4d0e3;
  --sidebar-primary-foreground: #0a0e1a;
  --sidebar-accent: #1a1f2e;
  --sidebar-accent-foreground: #d4d8e8;
  --sidebar-border: #1e2433;
  --sidebar-ring: #c4d0e3;
}

/* High-contrast theme */
.contrast {
  --background: #000000;
  --foreground: #ffffff;
  --card: #000000;
  --card-foreground: #ffffff;
  --popover: #000000;
  --popover-foreground: #ffffff;
  --primary: #ffff00;
  --primary-foreground: #000000;
  --secondary: #1a1a1a;
  --secondary-foreground: #ffffff;
  --muted: #000000;
  --muted-foreground: #ffffff;
  --accent: #3d5fa8;
  --accent-foreground: #ffffff;
  --destructive: #ff0000;
  --border: #ffff00;
  --input: #000000;
  --ring: #3d5fa8;
  --chart-1: #3d5fa8;
  --chart-2: #6b8fd4;
  --chart-3: #94b3e8;
  --chart-4: #ffffff;
  --chart-5: #cccccc;
  --sidebar: #000000;
  --sidebar-foreground: #ffffff;
  --sidebar-primary: #3d5fa8;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #1a1a1a;
  --sidebar-accent-foreground: #ffffff;
  --sidebar-border: #ffff00;
  --sidebar-ring: #3d5fa8;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`;

// Minimal globals.css created when no CSS file is found at all
const minimalGlobalsCss = `@import "tailwindcss";

${cssTokensBlock}
`;

// ─── Globals CSS detection ────────────────────────────────────────────────────

const GLOBALS_SEARCH_PATHS = [
  ["src", "app", "globals.css"],
  ["app", "globals.css"],
  ["src", "styles", "globals.css"],
  ["styles", "globals.css"],
  ["src", "index.css"],
  ["src", "globals.css"],
];

async function findGlobalsCss(
  projectRoot: string
): Promise<string | null> {
  for (const parts of GLOBALS_SEARCH_PATHS) {
    const candidate = path.join(projectRoot, ...parts);
    if (await fileExists(candidate)) return candidate;
  }
  return null;
}

// ─── Init command ─────────────────────────────────────────────────────────────

export async function init(options: { yes?: boolean }) {
  logger.info("Inicializando hollow-UI no seu projeto...");
  logger.break();

  const projectRoot = getProjectRoot();

  // ── 1. src/lib/utils.ts ──────────────────────────────────────────────────
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

  // ── 2. Instalar dependências base ────────────────────────────────────────
  logger.info("Instalando dependências base (clsx, tailwind-merge)...");
  try {
    await installDependencies(["clsx", "tailwind-merge"]);
    logger.success("Dependências instaladas: clsx, tailwind-merge");
  } catch {
    logger.warn(
      "Não foi possível instalar automaticamente. Execute manualmente:"
    );
    const pm = await detectPackageManager();
    const cmd =
      pm === "yarn"
        ? "yarn add clsx tailwind-merge"
        : pm === "pnpm"
          ? "pnpm add clsx tailwind-merge"
          : "npm install clsx tailwind-merge";
    logger.info(`  ${cmd}`);
  }

  // ── 3. Tailwind config check ─────────────────────────────────────────────
  const tailwindConfigPaths = [
    path.join(projectRoot, "tailwind.config.ts"),
    path.join(projectRoot, "tailwind.config.js"),
    path.join(projectRoot, "tailwind.config.mjs"),
  ];

  const tailwindExists = (
    await Promise.all(tailwindConfigPaths.map(fileExists))
  ).some(Boolean);

  if (!tailwindExists) {
    logger.warn("tailwind.config não encontrado");
    logger.info("Certifique-se de ter o Tailwind CSS configurado no projeto");
  } else {
    logger.success("tailwind.config encontrado");
  }

  // ── 4. CSS design tokens (globals.css) ──────────────────────────────────
  logger.break();
  logger.info("Verificando tokens de design (globals.css)...");

  const globalsPath = await findGlobalsCss(projectRoot);

  if (globalsPath) {
    const content = await readFile(globalsPath);

    if (content.includes(HOLLOW_UI_TOKEN_MARKER)) {
      logger.info(`Tokens hollow-UI já presentes em: ${path.relative(projectRoot, globalsPath)}`);
    } else {
      // Detect Tailwind version by checking the import style
      const hasTailwindV4Import = content.includes('@import "tailwindcss"') || content.includes("@import 'tailwindcss'");
      const hasTailwindV3Directives = content.includes("@tailwind base");

      let updatedContent: string;

      if (hasTailwindV4Import) {
        // Inject tokens right after the @import "tailwindcss" line
        updatedContent = content.replace(
          /(@import ["']tailwindcss["'];?\s*)/,
          `$1\n${cssTokensBlock}\n`
        );
      } else if (hasTailwindV3Directives) {
        // Inject tokens right after @tailwind utilities (end of directives)
        updatedContent = content.replace(
          /(@tailwind utilities;?\s*)/,
          `$1\n${cssTokensBlock}\n`
        );
      } else {
        // Unknown format — prepend the block
        updatedContent = `${cssTokensBlock}\n\n${content}`;
      }

      await writeFile(globalsPath, updatedContent);
      logger.success(
        `Tokens hollow-UI injetados em: ${path.relative(projectRoot, globalsPath)}`
      );
    }
  } else {
    // No globals.css found — create one at the standard Next.js location
    const defaultPath = path.join(projectRoot, "src", "app", "globals.css");
    await writeFile(defaultPath, minimalGlobalsCss);
    logger.success("Criado: src/app/globals.css com tokens hollow-UI");
    logger.warn(
      "Importe o arquivo criado no seu layout raiz: import \"./globals.css\""
    );
  }

  // ── 5. ThemeProvider hint ────────────────────────────────────────────────
  logger.break();
  logger.info("Dica: para usar tema dark/contrast, adicione ao seu layout:");
  logger.info('  <html className="dark">  ou  <html className="contrast">');
  logger.info(
    "  Ou use um ThemeProvider que troque a classe no <html>."
  );

  // ── Done ─────────────────────────────────────────────────────────────────
  logger.break();
  logger.success("Configuração inicial concluída!");
  logger.break();
  logger.info("Próximos passos:");
  logger.info("  1. Execute: npx @scmposs/hollow-ui add button");
  logger.info("  2. Ou veja todos os componentes: npx @scmposs/hollow-ui list");
  logger.info(
    "  3. Documentação completa: https://hollow-ui.vercel.app/components"
  );
  logger.break();
}
