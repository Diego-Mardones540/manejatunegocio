// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [tailwind(), mdx()],
  base: '/manejatunegocio',
  site: 'https://Diego-Mardones540.github.io/manejatunegocio/'
});
