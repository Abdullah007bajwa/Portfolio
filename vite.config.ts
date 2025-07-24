import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Portfolio/", // 👈 update this if your repo name is different
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // componentTagger removed to prevent injecting unsupported props into Three.js objects
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
