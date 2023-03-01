import { defineConfig } from "vite";
import marko from "@marko/vite";
import postcss from './postcss.config.js';

export default defineConfig({
  plugins: [marko()],
  build: {
    minify: true,
    sourcemap: true, // Generate sourcemaps for all builds.
    emptyOutDir: false, // Avoid server & client deleting files from each other.
  },
  css: {
    postcss,
  }
});
