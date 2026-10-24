// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with your real domain once the site is deployed.
// This value is used for the sitemap, the canonical URL, and the social
// preview image — link previews will not work correctly until it is right.
const SITE = 'https://wajeeha.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
});
