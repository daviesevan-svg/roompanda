# Roompanda — marketing website

The public marketing site for **Roompanda**, the guest-facing starter kit for new
PMS products (built by the Channex team). Channex is the pipe; Roompanda commoditises
the complement — a live IBE, guest website, vouchers and Google Hotel Ads, on each
hotel's brand. API-first, with an MCP server so AI agents can make real bookings.

This is a **plain static website** — hand-written HTML, CSS and a little vanilla
JavaScript. No framework, no build step, no SPA. Just open the files or serve the
folder.

## Pages

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Landing / marketing page aimed at PMS builders (kit, live IBE demo, Channex, MCP, pricing, hotel-via-PMS note). |
| [`developers.html`](developers.html) | Developer documentation (quickstart, auth, API reference, MCP, webhooks, SDKs). |
| [`assets/styles.css`](assets/styles.css) | Resets, fonts, animations, hover/focus and responsive rules. Layout values live inline on the elements (they are the final design values). |
| [`assets/main.js`](assets/main.js) | Landing interactions: mobile menu. |
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

---

© 2026 Roompanda · Built by the Channex team.
