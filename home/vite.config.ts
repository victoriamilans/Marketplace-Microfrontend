import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "home",
      filename: "homePage.js",
      exposes: {
        "./HeaderComponent": "./src/components/HeaderComponent",
        "./FooterComponent": "./src/components/FooterComponent",
      },
      shared: ["react", "react-dom"],
    }),
    tsconfigPaths(),
  ],
  preview: {
    host: "localhost",
    port: 5001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
