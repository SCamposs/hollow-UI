import fs from "fs-extra";
import path from "path";
import { promisify } from "util";
import { exec } from "child_process";

const execAsync = promisify(exec);

export async function ensureDir(dirPath: string): Promise<void> {
  await fs.ensureDir(dirPath);
}

export async function writeFile(
  filePath: string,
  content: string
): Promise<void> {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, content, "utf-8");
}

export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function readFile(filePath: string): Promise<string> {
  return await fs.readFile(filePath, "utf-8");
}

export async function copyFile(src: string, dest: string): Promise<void> {
  await ensureDir(path.dirname(dest));
  await fs.copyFile(src, dest);
}

export async function installDependencies(
  dependencies: string[]
): Promise<void> {
  if (dependencies.length === 0) return;

  const depsString = dependencies.join(" ");

  try {
    const packageManager = await detectPackageManager();
    const installCmd =
      packageManager === "yarn"
        ? `yarn add ${depsString}`
        : packageManager === "pnpm"
        ? `pnpm add ${depsString}`
        : `npm install ${depsString}`;

    await execAsync(installCmd);
  } catch (error) {
    throw new Error(`Erro ao instalar dependências: ${error}`);
  }
}

export async function detectPackageManager(): Promise<"npm" | "yarn" | "pnpm"> {
  if (await fileExists("yarn.lock")) return "yarn";
  if (await fileExists("pnpm-lock.yaml")) return "pnpm";
  return "npm";
}

export function getProjectRoot(): string {
  return process.cwd();
}

export function resolveComponentPath(componentPath: string): string {
  const projectRoot = getProjectRoot();

  if (componentPath.startsWith("src/")) {
    return path.join(projectRoot, componentPath);
  }

  return path.join(projectRoot, "src", componentPath);
}
