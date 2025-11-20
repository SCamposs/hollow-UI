import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  tsconfig: "./tsconfig.build.json",
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  external: [
    "react",
    "react-dom",
    "next",
    "next/image",
    "next/link",
    "@radix-ui/*",
    "lucide-react",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
  ],
  banner: {
    js: "// hollow-UI v1.0.0 - Developed by Ítalo Soares Campos",
  },
});
