import { defineConfig } from "vite";

export default defineConfig({
  // Use relative asset paths in the build so the site works whether it's
  // hosted at a domain root or in a subfolder (e.g. GitHub Pages).
  base: "./",
  server: {
    open: true,
  },
});
