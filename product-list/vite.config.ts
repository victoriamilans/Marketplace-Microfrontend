import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: "products",
    remotes:{
      homepage: "http://localhost:5000/assets/homePage.js"
    },
    shared: ["react"],
  }),
  tsconfigPaths(),
],
  preview: {
    host: "localhost",
    port: 5002,
    strictPort: true,
  },

  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
