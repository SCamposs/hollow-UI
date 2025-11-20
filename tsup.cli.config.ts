import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/cli/index.ts"],
  format: ["cjs"],
  dts: false,
  outDir: "dist",
  clean: false,
  shims: true,
  outExtension: () => ({ js: ".cjs" }),
  bundle: true,
  external: ["fs", "path", "child_process"],
});
