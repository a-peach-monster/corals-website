import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Absolute sub-path base for this GitHub Pages project site
// (kaopiu.github.io/corals-website/). Must match BrowserRouter's
// basename in src/main.tsx (read via import.meta.env.BASE_URL) so
// React Router's routes resolve against the real deployed path.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: isSsrBuild ? "dist-ssr" : "dist",
    assetsDir: "assets",
    sourcemap: false,
    // The SSR bundle is loaded via a plain `import()` from scripts/prerender.mjs
    // (an ESM script, since package.json has "type": "module"), so it must be
    // emitted as ESM rather than Vite's default CJS for SSR builds.
    rollupOptions: isSsrBuild
      ? {
          output: {
            format: "es",
          },
        }
      : undefined,
  },
}));
