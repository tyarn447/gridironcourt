// @ts-check
import { defineConfig } from 'astro/config';

// Deployed at https://tyarn447.github.io/gridironcourt while DNS is unset.
//
// TO SWITCH TO thegridironcourt.com once DNS is pointed (see README):
//   1. SITE = 'https://thegridironcourt.com'  and  BASE = '/'
//   2. echo 'thegridironcourt.com' > public/CNAME
//   3. Settings -> Pages -> Custom domain
// Every link in the site goes through withBase(), so nothing else changes.
const SITE = 'https://tyarn447.github.io';
const BASE = '/gridironcourt';

export default defineConfig({
  site: SITE,
  base: BASE,
  markdown: { shikiConfig: { theme: 'css-variables' } },
});
