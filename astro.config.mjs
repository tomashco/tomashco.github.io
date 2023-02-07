import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://tomashco.github.io',
  integrations: [tailwind(), react(), mdx()],
  root: './src'
});