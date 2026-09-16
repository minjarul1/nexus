import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://minjarul1.github.io',
  base: '/nexus',
  integrations: [
    tailwind({
      applyBaseForCommonCss: false,
    }),
  ],
});
