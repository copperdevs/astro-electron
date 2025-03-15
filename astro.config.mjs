// @ts-check
import { defineConfig } from "astro/config";

// @ts-ignore
import electron from "astro-electron";

import react from "@astrojs/react";
import { resolve } from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [
    electron({
      main: {
        entry: "src/electron/main.ts",
      },
      preload: {
        input: "src/electron/preload.ts",
      },
    }),
    react(),
  ],
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    build: {
      rollupOptions: {
        external: [/^node:.*/],
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
  },
  experimental: {
    svg: true,
    contentIntellisense: true,
    headingIdCompat: true,
  },
  devToolbar: {
    enabled: false,
  },
});
