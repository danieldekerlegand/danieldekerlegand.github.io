# danieldekerlegand.github.io — agent guide

Personal site: résumé + project portfolio. Static Astro build deployed to GitHub
Pages at <https://danieldekerlegand.github.io>.

This file is authoritative for this repo. It is *not* one of the neuro-symbolic
ecosystem repos described in `~/Development/CLAUDE.md` — it only *describes* them
in its portfolio, and holds no contracts or runtime code of its own.

## Quality gates

Before considering a change done:

```bash
npm run build      # must succeed
npx astro check    # must report 0 errors
```

If résumé content changed, also regenerate the PDF and commit it:

```bash
npm run pdf
```

## Development

When starting the dev server, use background mode:

```bash
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Where things live

- **Content is data.** `src/data/{profile,resume,projects}.ts` hold every piece
  of copy. Do not hardcode résumé or project text into `.astro` files.
- **Design tokens** are CSS custom properties in `:root` in
  `src/styles/global.css` — colors, fonts, measure, radius. Both themes are
  defined there; component styles reference `var(--…)` and never literal colors.
- **Component styles** are scoped `<style>` blocks inside each `.astro` file.
  `src/styles/global.css` carries only tokens, resets, layout primitives
  (`.wrap`, `.section`, `.eyebrow`, `.lede`), `.btn`, `.tag`, and print rules.
- **Pages** are `src/pages/{index,projects,resume,404}.astro`, all wrapped in
  `src/layouts/Base.astro` (meta tags, JSON-LD Person schema, nav, footer).

## Conventions

- **Accuracy over polish.** Résumé claims mirror the LaTeX source in the private
  `cv` repo (`variants/cv-main.tex`). Never invent metrics, dates, titles, or
  publications; if wording needs to change, change it in both places.
- **Private repos stay private.** Portfolio entries carry `status: 'private'`
  and render a "Closed source" label. Only add a `repo` link once that
  repository is actually public — a dead link is worse than no link.
- **No external runtime requests.** Fonts are self-hosted through `@fontsource`.
  Do not add CDN scripts, remote stylesheets, webfonts, or analytics that phone
  out without asking first.
- **Contact surface is deliberate.** Email, GitHub, and LinkedIn only — the
  phone number in the CV is intentionally kept off this public page.
- **Print matters.** `/resume` is a real deliverable; changes to résumé layout
  must be checked in print (`npm run pdf`) as well as on screen.

## Deployment

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
Pages source is set to **GitHub Actions**. `astro.config.mjs` sets `site` to the
production URL — the sitemap and canonical tags depend on it.

## Docs

Full Astro documentation: <https://docs.astro.build>
