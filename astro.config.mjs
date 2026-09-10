// @ts-check
import { defineConfig } from 'astro/config';

// Configured for the custom domain in public/CNAME (thegridironcourt.com).
// Site will not resolve until DNS points at GitHub Pages — see README.
//
// FALLBACK, if you'd rather launch on tyarn447.github.io/gridironcourt first:
//   1. delete public/CNAME
//   2. site: 'https://tyarn447.github.io', base: '/gridironcourt'
//   3. every root-relative link (hrefs in src/, and the markdown link in
//      src/content/houses/seahawks.md) needs the /gridironcourt prefix
export default defineConfig({
  site: 'https://thegridironcourt.com',
  base: '/',
  markdown: { shikiConfig: { theme: 'css-variables' } },
});
