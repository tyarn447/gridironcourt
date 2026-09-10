# The Gridiron Court

A high-fantasy chronicle of the football season — written for the people who
love someone who watches it.

Read `VOICE.md` before writing anything. It is the whole product.

## Adding a dispatch

Create `src/content/posts/week-NN-house-house.md`:

```yaml
---
chapter: "Chapter Two"
title: "A Marriage of Convenience"   # the romance trope, not the matchup
trope: "Marriage of convenience"
season: 2026
week: 2
date: 2026-09-14
houses: ["cowboys", "eagles"]        # slugs — drives the house pages
line: "They lost it on the tush push. Again."   # the pull quote. this is the product.
excerpt: "One sentence for the front page."
draft: false
---
```

Body is the post. 500–700 words. Three to five beats. See `VOICE.md`.

## Adding a house chronicle

`src/content/houses/<slug>.md`. All 32 exist already as stubs. Fill the body
sections and flip `chronicled: true` — that removes the "not yet chronicled"
notice and un-italicizes it in the sidebar.

## Local

```
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Analytics

GoatCounter, self-contained in `src/components/Analytics.astro`.

1. Make a free account at <https://www.goatcounter.com> and pick a site code.
2. Put that code in `src/config.ts` (`GOATCOUNTER_CODE`).
3. That's it. Nothing loads until the code is set, and it never runs in
   `npm run dev` — only production builds.

No cookies, no consent banner needed, ~3KB. Dashboard lives at
`https://<code>.goatcounter.com`. A `<noscript>` pixel catches JS-blocked
visitors, which on a link-forwarded blog is not a small share of them.

## Deploying

Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`.
In the repo: **Settings → Pages → Source → GitHub Actions**.

### DNS for thegridironcourt.com

`public/CNAME` claims the custom domain, so **the site will 404 until DNS is
pointed.** At your registrar, for the apex domain:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | tyarn447.github.io |

Then **Settings → Pages → Custom domain** → `thegridironcourt.com`, and tick
**Enforce HTTPS** once the certificate is issued (can take an hour).

To launch before DNS is ready, follow the fallback comment in
`astro.config.mjs`.
