# danieldekerlegand.github.io

Personal site — résumé and project portfolio for Daniel DeKerlegand.
Live at **<https://danieldekerlegand.github.io>**.

Built with [Astro](https://astro.build) as a fully static site. No client-side
framework, no runtime JavaScript beyond a single print handler, and every font
self-hosted — the whole site is HTML, CSS, and a handful of woff2 files.

## Content lives in one place

All copy is data, not markup. Edit these and every page updates:

| File | Holds |
| --- | --- |
| [`src/data/profile.ts`](src/data/profile.ts) | Name, title, contact, summary, current roles |
| [`src/data/resume.ts`](src/data/resume.ts) | Experience, education, skill groups |
| [`src/data/projects.ts`](src/data/projects.ts) | Portfolio entries, grouped by fabric / products / tooling |

Résumé content is kept in sync by hand with the LaTeX sources in the private
`cv` repo (`variants/cv-main.tex` is the authority for wording).

## Commands

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server at <http://localhost:4321> |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run pdf` | Regenerate `public/Daniel-DeKerlegand-CV.pdf` |
| `npx astro check` | Type-check `.astro` and `.ts` files |

## The downloadable résumé

`public/Daniel-DeKerlegand-CV.pdf` is **generated from the site itself** —
`npm run pdf` builds, serves `/resume`, and prints it through the print
stylesheet in [`src/styles/global.css`](src/styles/global.css) via headless
Chrome. That means the web résumé and the PDF cannot drift: change
`src/data/resume.ts`, run `npm run pdf`, commit both.

The script assumes Chrome at the standard macOS path; override with
`CHROME=/path/to/chrome npm run pdf`.

## Design notes

- **Type** — EB Garamond for display (echoing the LaTeX CV), Inter for body,
  JetBrains Mono for labels and project names. All self-hosted via `@fontsource`,
  so there are no external requests and no layout shift.
- **Theme** — light and dark are driven entirely by `prefers-color-scheme`
  through CSS custom properties defined once in `:root`.
- **Print** — `/resume` has a dedicated print stylesheet: black on white, nav
  and buttons dropped, entries kept off page breaks.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds and publishes to GitHub Pages. Pages must be set to **Source:
GitHub Actions** in repository settings.
