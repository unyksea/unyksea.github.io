// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://unyc.ksea.org',
  integrations: [sitemap()],
  // The chapter previously ran on Google Sites at these paths. Printed flyers, QR
  // codes, and the 2025 symposium emails still point at them, so they must not 404.
  redirects: {
    '/home': '/',
    '/about-ksea': '/about',
    '/organizers': '/leadership',
    '/schedule-booklet': '/events/2025-rit-symposium',
    '/speakers': '/events/2025-rit-symposium',
    '/direction': '/events/2025-rit-symposium',
    '/registration': '/events',
    '/event-invitations': '/events',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
