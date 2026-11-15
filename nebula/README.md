# Nebula — nut.in.th

Portfolio site for **nut.in.th**, built with [Astro](https://astro.build) as plain static HTML and uploaded to the host over FTP.
The old PHP site in the repository root is kept only as a backup and is not part of this build.

## Commands (run inside `nebula/`)

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (once) |
| `npm run dev` | Local dev server at http://localhost:4321 |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve `dist/` locally to check the build |
| `npm run deploy` | Build, then upload `dist/` over FTP (settings in `.env`) |
| `npm run deploy -- --skip-build` | Upload the existing `dist/` without rebuilding |

## Pages

Every page exists in Thai (`/th/…`) and English (`/en/…`). `/` sends visitors to their language (Thai by default, remembers the last choice).

- `/th/` `/en/` — home: hero, selected work, latest gallery images, about, contact
- `/…/work/` and `/…/work/<slug>/` — projects
- `/…/gallery/` — ComfyUI images
- `/…/sites/` — links to sub-sites (nebula.nut.in.th, lunax.nut.in.th, …)
- `/…/terms/` — terms of service
- `/…/privacy/` — privacy policy (PDPA)
- `/404.html`, `sitemap-index.xml`, `robots.txt`, `.htaccess`

## Editing content

| What | Where |
| --- | --- |
| Name, contact email, GitHub/LinkedIn, hero credit | `src/i18n/ui.ts` → `site` |
| All UI text (both languages) | `src/i18n/ui.ts` → `ui.th` / `ui.en` |
| Projects | `src/content/projects/th/<slug>.md` + `en/<slug>.md` (same file name in both) |
| Sub-site links | `src/data/sites.ts` |
| Terms / privacy | `src/content/legal/{th,en}/{terms,privacy}.md` (update `updated:` when you change them) |
| Hero photo | put `src/assets/hero-nebula.jpg` (or .png/.webp). It is picked up automatically |
| Colours, spacing, type | `src/styles/tokens.css` |

Anything marked **PLACEHOLDER** should be replaced with real details. The legal pages are a reasonable template for a personal portfolio, not legal advice.

### Projects

```md
---
title: Project name
summary: One line on what it is and the result
year: 2025
role: Front-end development
stack: [Astro, TypeScript]
link: https://example.com       # optional
cover: ./cover.png              # optional, path relative to the .md file
coverAlt: Screenshot of …       # optional
featured: true                  # shown on the home page
---

Longer write-up in Markdown.
```

### Gallery (ComfyUI)

Drop images into `nebula/gallery/` and build. See `gallery/README.md` for captions.
Images are re-encoded to WebP at build time, which also strips the ComfyUI prompt/workflow metadata embedded in the PNGs.

## Deploying

1. Copy `.env.example` to `.env` (git-ignored) and fill in `FTP_HOST`, `FTP_PORT`, `FTP_USER`, `FTP_PASS`, `FTP_DIR`, `FTP_SECURE`. nut.in.th is behind Cloudflare, which does not pass FTP: use the FTP host name from the hosting panel.
2. `npm run deploy`.

The upload adds and overwrites files; it never deletes anything on the server. If old PHP files (e.g. `index.php`) are still in the web root, the included `.htaccess` sets `DirectoryIndex index.html` so the new site wins. Remove the old files from the server when you no longer need them.

Manual alternative: run `npm run build` and upload the **contents** of `dist/` (including the hidden `.htaccess`) to the web root with any FTP client.

## Design

The UI follows the [unslop](https://github.com/heydamir/unslop) rules: one ink neutral ramp, three text roles, one teal accent, a 4px spacing scale, IBM Plex Sans/Sans Thai/Mono (self-hosted), no gradients, glows or looping motion. "Nebula" lives in the name and in one real photograph in the hero. The rest of the interface stays quiet.
