// @ts-ignore
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    icon({
      collections: {
        // 👇 Aquí añades el set que quieres usar
        mdi: async () => await import('@iconify-json/mdi/icons.json'),
        solar: async () => await import('@iconify-json/solar/icons.json'),
        local:  'src/icons/',
      },
    }),
  ],
});
