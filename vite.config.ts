import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import eslint from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), eslint()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
