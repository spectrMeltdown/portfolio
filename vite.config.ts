import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import eslint from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [tailwindcss(), eslint()],
  build: {
    sourcemap: false, // disables source maps entirely
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
