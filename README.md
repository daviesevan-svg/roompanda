# Roompanda — marketing website

The public marketing site for **Roompanda**, the commission-free booking engine for
independent hotels (built by the Channex team). 0% commission, an API-first
architecture, PMS integrations (Mews / Apaleo / Channex), and an MCP server that lets
AI agents make real bookings.

This is a **plain static website** — hand-written HTML, CSS and a little vanilla
JavaScript. No framework, no build step, no SPA. Just open the files or serve the
folder.

## Pages

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Landing / marketing page (hero, features, live preview, MCP, API, integrations, pricing, signup). |
| [`developers.html`](developers.html) | Developer documentation (quickstart, auth, API reference, MCP, webhooks, SDKs). |
| [`assets/styles.css`](assets/styles.css) | Resets, fonts, animations, hover/focus and responsive rules. Layout values live inline on the elements (they are the final design values). |
| [`assets/main.js`](assets/main.js) | Landing interactions: API code tabs, pricing Monthly/Annual toggle, mobile menu. |
| [`assets/docs.js`](assets/docs.js) | Docs interactions: SDK npm/pip tabs, mobile menu. |
| [`assets/favicon.svg`](assets/favicon.svg) | Panda favicon. |

Fonts (Baloo 2, Hanken Grotesk, Newsreader, JetBrains Mono) load from Google Fonts.

## Run locally

It's static — any static server works:

```bash
# Python
python3 -m http.server 8000
# or Node
npx serve .
```

Then open <http://localhost:8000>.

## Deploy — Cloudflare Pages

This repo is ready for [Cloudflare Pages](https://pages.cloudflare.com/) with **no build
step**.

**Via the dashboard:** Connect this GitHub repo, then set:

- **Framework preset:** None
- **Build command:** *(leave empty)*
- **Build output directory:** `/`

**Via Wrangler (direct upload):**

```bash
npx wrangler pages deploy . --project-name=roompanda
```

`_headers` adds basic security headers and asset caching; Cloudflare Pages applies it
automatically.

## Notes

- Room photos in the live-preview section use placeholder Unsplash images — swap them
  for real photography before launch.
- The signup form is a front-end stub (no backend yet); wire it to your provider when
  ready.
- Code/SDK samples are illustrative; update endpoints when the real API ships.

---

Recreated from the Roompanda design handoff. © 2026 Roompanda · Built by the Channex team.
