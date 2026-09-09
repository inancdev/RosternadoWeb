// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rosternado.com',

  // No `base` — apex custom domain, site served from root.
  trailingSlash: 'never',

  build: {
    // 'file' emits src/pages/privacy.astro -> dist/privacy.html.
    // The default 'directory' emits dist/privacy/index.html and would 404 the URLs
    // hardcoded in shipped app builds and in the store listings. See R1.
    format: 'file',
    // Default '_astro' is stripped by Jekyll on branch deploys. Actions artifact
    // deploys skip Jekyll, so this is insurance for a branch-deploy fallback.
    assets: 'assets',
  },

  integrations: [
    sitemap({
      // Astro emits extensionless sitemap entries, but the site is served as flat
      // .html files and every canonical carries the extension. Keep them identical
      // so crawlers are not told about a second, non-canonical URL for each page.
      serialize(item) {
        const u = new URL(item.url);
        if (u.pathname !== '/' && !u.pathname.endsWith('.html')) {
          u.pathname = `${u.pathname.replace(/\/$/, '')}.html`;
          item.url = u.href;
        }
        return item;
      },
    }),
  ],
});