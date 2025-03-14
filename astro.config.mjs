// @ts-check
import { defineConfig } from "astro/config";

// @ts-ignore
import electron from "astro-electron";

import react from "@astrojs/react";

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
