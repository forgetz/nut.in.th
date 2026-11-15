// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nut.in.th',
  output: 'static',
  trailingSlash: 'always',
  build: {
    // /th/terms/ -> th/terms/index.html : works on any FTP/Apache host without rewrites
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://nut.in.th/',
      i18n: {
        defaultLocale: 'th',
        locales: { th: 'th-TH', en: 'en-US' },
      },
    }),
  ],
});
