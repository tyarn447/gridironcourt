/**
 * Site-wide settings.
 *
 * GOATCOUNTER: put your site code here once you've made the account at
 * https://www.goatcounter.com — if your dashboard is `gridironcourt.goatcounter.com`
 * then the code is `gridironcourt`. Leave it empty and no script is loaded at all.
 */
export const GOATCOUNTER_CODE = '';

/** Analytics never run in `npm run dev` — only in a production build. */
export const analyticsEnabled = import.meta.env.PROD && GOATCOUNTER_CODE !== '';

/**
 * Prefixes a root-relative path with the configured `base` so links keep
 * working on both tyarn447.github.io/gridironcourt and a custom domain.
 * Always pass a leading slash: withBase('/houses/eagles/')
 */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');
export const withBase = (path: string) => `${BASE}${path}` || '/';
