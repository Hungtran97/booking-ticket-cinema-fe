import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/Components"),
      layouts: path.resolve(__dirname, "src/layouts"),
      feature: path.resolve(__dirname, "src/feature"),
      api: path.resolve(__dirname, "src/api"),
    },
  },
});
