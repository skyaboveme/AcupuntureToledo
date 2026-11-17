# Toledo Holistic Healthcare

Modern, SEO-optimized marketing website for [Toledo Holistic Healthcare](https://acupuncturetoledo.com/) — a holistic chiropractic, acupuncture, and wellness clinic in Toledo, Ohio.

Built with **Astro 7**, **TypeScript**, and **Tailwind CSS 4**. Deployed as a Cloudflare Worker with static assets.

- **GitHub:** [skyaboveme/AcupuntureToledo](https://github.com/skyaboveme/AcupuntureToledo)
- **Cloudflare Worker:** `acupunturetoledo` (account `aa96f50b9174b128d2cbe8f6db54b940`)
- **Production domain:** https://acupuncturetoledo.com

## Quick Start

```bash
npm install
npm run dev      # Start dev server at http://localhost:4318
npm run build    # Production build to ./dist
npm run preview  # Preview production build
npm run deploy   # Build and deploy to Cloudflare Workers
```

Workers Builds is connected to the GitHub `main` branch. Pushing to `main` runs `npm run build` then `npx wrangler deploy`.

## Project Structure

```
src/
├── components/     # Reusable UI (Header, Footer, forms, cards)
├── data/           # Business content (services, team, FAQ, etc.)
├── layouts/        # BaseLayout with SEO + schema
├── lib/            # SEO and schema.org helpers
├── pages/          # Route pages
│   └── services/   # Individual service pages ([slug].astro)
└── styles/         # Global CSS + Tailwind theme
public/
├── favicon.svg
├── llms.txt        # AI-readable business summary
├── robots.txt
└── images/         # Clinic photos and logo
wrangler.jsonc      # Cloudflare Worker name, assets, account
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services, why-us, testimonials, FAQ preview |
| `/about` | Practice story + team bios |
| `/services` | Services overview |
| `/services/[slug]` | Individual service pages (9 services) |
| `/conditions` | Conditions we treat |
| `/testimonials` | Patient reviews |
| `/faq` | Frequently asked questions |
| `/locations` | Toledo office, hours, map |
| `/billing` | Insurance & billing |
| `/contact` | Contact form, hours, map |

Legacy `.php` URLs from the previous site redirect to the matching new routes.

## Before Launch Checklist

### 1. Remaining photos

| File to add | Used in |
|-------------|---------|
| `public/images/jared-mainous.webp` | About page — Dr. Jared Mainous (still a placeholder) |

Lori, the office, logo, and service photos are already in `public/images/`. Set `team[0].image` in `src/data/team.ts` once Dr. Jared's photo is added.

### 2. Wire Up Contact Form

The contact form (`src/components/ContactForm.astro`) validates client-side but needs a backend before go-live. Options:

- **[Formspree](https://formspree.io/)** — set `FORM_ACTION` to your Formspree endpoint
- **Cloudflare Worker** — handle POST in a Worker and email via an API
- **Email API** — SendGrid, Resend, etc.

Change `FORM_ACTION` in `ContactForm.astro` from `'#'` to your endpoint URL.

### 3. Content TODOs

- **Saturday hours** — marked Closed (not listed on original site)
- **Insurance panel list** — general statement only; no specific carrier list available
- **Pricing** — not provided; no fee schedule included
- **Social profiles** — no verified social links; omitted from schema `sameAs`
- **Dr. Jared photo** — not in the previous image set

## SEO & Structured Data

### On-Page SEO
- Unique `<title>` and meta description per page (Toledo + service/condition keywords)
- Canonical URLs via `site` config
- Open Graph + Twitter Card tags on every page
- `sitemap-index.xml` via `@astrojs/sitemap`
- `robots.txt` allowing crawl with sitemap reference
- `llms.txt` for AI assistant discoverability
- Semantic HTML5, proper heading hierarchy, skip link
- Internal linking between services, conditions, about, contact

### Schema.org JSON-LD
- **MedicalClinic / MedicalBusiness / LocalBusiness** on all pages (real NAP, geo, hours)
- **Physician** schema for Dr. Jared Mainous on home and about pages
- **MedicalProcedure** (Service) schema on each service page
- **FAQPage** schema on `/faq`
- **Review** schema on `/testimonials` (no invented `ratingValue` or `aggregateRating`)
- **BreadcrumbList** on nested pages

## Design

Calming holistic wellness palette:
- Sage greens, warm cream backgrounds, teal accents
- Lora (serif) + Source Sans 3 (sans) via Google Fonts
- Mobile-first responsive layout
- WCAG AA contrast targets
- Keyboard-navigable nav and FAQ accordion

## License

Website code is provided for Toledo Holistic Healthcare LLC. Business content belongs to the clinic.
