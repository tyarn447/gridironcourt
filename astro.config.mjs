// @ts-check
import { defineConfig } from 'astro/config';

// Live at https://gridironcourt.com (custom domain, see public/CNAME).
//
// TO ROLL BACK to the project page if DNS ever breaks:
//   1. SITE = 'https://tyarn447.github.io'  and  BASE = '/gridironcourt'
//   2. rm public/CNAME
//   3. unset the custom domain in Settings -> Pages
// Every link goes through withBase(), so nothing else changes.
const SITE = 'https://gridironcourt.com';
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  markdown: { shikiConfig: { theme: 'css-variables' } },
});
