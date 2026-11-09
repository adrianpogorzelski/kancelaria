// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://spychalskiego13.pl",

  // Zachowuje obecne adresy: /kontakt, /czynnosci itd. (Netlify serwuje kontakt.html pod /kontakt)
  trailingSlash: "never",

  build: { format: "file" },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap({
    filter: (page) => !/\/(dziekujemy|404|polityka-prywatnosci)/.test(page),
  })],
});