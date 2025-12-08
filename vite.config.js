import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",  // root of the project
  server: {
    watch: {
      usePolling: false,
    },
  },
  build: {
    outDir: "assets/dist",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "assets/js/main.js"),
      },
      output: {
        entryFileNames: "main.min.js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "main.min.css";
          }
          return assetInfo.name;
        },
      },
    },
  },
});