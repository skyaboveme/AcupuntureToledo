# Toledo Holistic Healthcare

Modern, SEO-optimized marketing website for [Toledo Holistic Healthcare](https://acupuncturetoledo.com/) — a holistic chiropractic, acupuncture, and wellness clinic in Toledo, Ohio.

Built with **Astro 7**, **TypeScript**, and **Tailwind CSS 4**. Static-generated for fast performance and strong Core Web Vitals.

## Quick Start

```bash
npm install
npm run dev      # Start dev server at http://localhost:4318
npm run build    # Production build to ./dist
npm run preview  # Preview production build
```

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
└── images/         # Placeholder images (replace before launch)
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
| `/contact` | Contact form, hours, map placeholder |

## Before Launch Checklist

### 1. Replace Placeholder Images

Real clinic and team photos should replace placeholders at these locations:

| File to add | Used in |
|-------------|---------|
| `public/images/team/jared-mainous.jpg` | About page — Dr. Jared Mainous |
| `public/images/team/aleshia.jpg` | About page — Aleshia, LMT |
| `public/images/team/lori.jpg` | About page — Lori C. |
| `public/images/services/[slug].jpg` | Individual service pages |
| `public/images/og-default.jpg` | Open Graph / social sharing (1200×630) |

Update `PlaceholderImage.astro` and `ServiceImage.astro` to use `<Image>` from `astro:assets` once real photos are available.

### 2. Wire Up Contact Form

The contact form (`src/components/ContactForm.astro`) validates client-side but needs a backend before go-live. Options:

- **[Formspree](https://formspree.io/)** — set `FORM_ACTION` to your Formspree endpoint
- **Netlify Forms** — add `netlify` attribute and deploy to Netlify
- **Serverless function** — e.g. Cloudflare Workers, AWS Lambda
- **Email API** — SendGrid, Resend, etc.

Change `FORM_ACTION` in `ContactForm.astro` from `'#'` to your endpoint URL.

### 3. Add Google Maps Embed

Replace the map placeholder on `/contact` with a Google Maps iframe embed for:
`2828 W Central Ave, Suite 1, Toledo, OH 43606`

### 4. Content TODOs

- **Saturday hours** — marked Closed (not listed on original site)
- **Insurance panel list** — general statement only; no specific carrier list available
- **Pricing** — not provided; no fee schedule included
- **Social profiles** — no verified social links; omitted from schema `sameAs`

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
