import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Get exercise from CLI args: npm run dev -- 03
const args = process.argv.slice(2);
const exercise = args.find((arg) => /^\d+$/.test(arg)) || "03";

export default defineConfig({
  root: resolve(__dirname, exercise),
  publicDir: resolve(__dirname, exercise, "public"),
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: resolve(__dirname, "dist", exercise),
    emptyOutDir: true,
  },
});
