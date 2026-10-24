# Portfolio — Wajeeha

A static portfolio site built with [Astro](https://astro.build). Every piece of
content lives in one file, so the site can be updated without touching markup.

## Running it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Editing the content

Almost everything you will want to change is in **`src/data/profile.ts`**:

| What | Where |
| --- | --- |
| Name, headline, intro, about text | `profile` |
| The "Available for work" pill | `profile.availability` — set `available: false` when booked |
| GitHub / LinkedIn / WhatsApp links | `profile.socials` — an empty URL hides that link |
| CV download button | `profile.resumeUrl` — put the PDF in `public/` and set e.g. `'/wajeeha-cv.pdf'` |
| Services offered | `services` |
| Projects and case studies | `projects` |
| Client quotes | `testimonials` — the section stays hidden while this is empty |
| Skills, education | `skills`, `education` |

Each project in `projects` automatically gets its own case study page at
`/projects/<slug>/`. Fill in `links.playStore`, `links.github` or `links.demo`
when they exist — empty links are hidden rather than shown as dead buttons.

## Before deploying

1. **Set your real domain** in `astro.config.mjs` (`SITE`) and in
   `public/robots.txt`. The canonical URL, sitemap and social preview image all
   depend on it, so link previews will be broken until this is correct.
2. **Copy `.env.example` to `.env`** and add a Web3Forms key to switch the
   contact form on, and a Plausible domain if you want analytics.
3. Optionally regenerate `public/og.png` if you change your headline — it is the
   image shown when the site is shared on WhatsApp, LinkedIn or X.

## Structure

```
src/
  data/profile.ts          all site content
  layouts/Layout.astro     <head>, SEO tags, JSON-LD, theme script
  components/              one file per section
  pages/index.astro        the home page
  pages/projects/[slug].astro   generated case study pages
  styles/global.css        design tokens and shared utilities
public/
  og.png                   social sharing preview image
  robots.txt
```
# portfolio-
