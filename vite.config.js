import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/project-avdan-os.github.io",
  plugins: [preact()],
});
