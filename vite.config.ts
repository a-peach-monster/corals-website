import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Absolute sub-path base for this GitHub Pages project site
// (kaopiu.github.io/corals-website/). Must match BrowserRouter's
// basename in src/main.tsx (read via import.meta.env.BASE_URL) so
// React Router's routes resolve against the real deployed path.
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});
