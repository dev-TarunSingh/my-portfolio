import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      components: "/src/components",
      admin: "/src/admin",
      ui: "/src/components/ui",
    },
  },
  server: {
    proxy: {
      // Forward API requests to backend server during development
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        ws: false,
      },
    },
  },
});
