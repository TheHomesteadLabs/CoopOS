import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://homesteadlabs.ca',
  integrations: [tailwind()],
});
