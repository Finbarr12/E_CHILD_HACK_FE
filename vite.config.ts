import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "tsx",
    include: /src\/.*\.tsx?$/,
    exclude: /node_modules/,
  },
  build: {
    outDir: "dist",
  },
});
