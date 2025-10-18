import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use root base for custom domains on GitHub Pages
  base: "/",
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
  build: {
    // Optimize images and assets
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tooltip'],
        },
      },
    },
    // Compress assets
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Assets optimization
    assetsInlineLimit: 4096,
  },
}));
