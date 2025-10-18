import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Portfolio/", // 👈 update this if your repo name is different
  // Use root base so the built app expects assets at the domain root.
  // When using a custom domain (or User/Org pages) assets should be served from '/'.
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
