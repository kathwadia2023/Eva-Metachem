import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path is configurable for GitHub Pages project sites.
// If deploying to https://<user>.github.io/<repo>/ set VITE_BASE_PATH="/<repo>/"
// If using a custom domain (evametachem.com) at the root, leave it as "/".
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
