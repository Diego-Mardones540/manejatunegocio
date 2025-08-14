// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [tailwind(), mdx()],
  base : 'Portafolio.io',
  site:'https://github.com/Diego-Mardones540/Portafolio.io'
});