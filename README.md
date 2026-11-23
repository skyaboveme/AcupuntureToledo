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
│   ├── services/   # Individual service pages ([slug].astro)
│   └── conditions/ # Individual condition pages ([slug].astro)
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
| `/conditions` | Conditions hub (cards link to dedicated pages) |
| `/conditions/[slug]` | Individual condition pages (back pain, whiplash-toledo, etc.) |
| `/testimonials` | Patient reviews |
| `/faq` | Frequently asked questions |
| `/locations` | Toledo office, hours, map |
| `/billing` | Insurance & billing |
| `/contact` | Contact form, hours, map |

Legacy `.php` URLs from the previous site redirect to the matching new routes.

## Before Launch Checklist

### 1. Photos

Clinic photos from the previous site are in `public/images/` and used on home, about, services, conditions, locations, contact, billing, FAQ, and testimonials. `fam-002.webp`, `fam-003.webp`, and `tol-office.webp` were removed from `public/images/`: the family photos are the previous doctor's, and the exterior photo shows his name on the red awning. The about page uses Steve's photo of Dr. Allen Beck (`public/images/dr-allen-beck.jpg`). A new exterior photo is still needed.

### 2. Wire Up Contact Form

The contact form (`src/components/ContactForm.astro`) validates client-side but needs a backend before go-live. Options:

- **[Formspree](https://formspree.io/)** — set `FORM_ACTION` to your Formspree endpoint
- **Cloudflare Worker** — handle POST in a Worker and email via an API
- **Email API** — SendGrid, Resend, etc.

Change `FORM_ACTION` in `ContactForm.astro` from `'#'` to your endpoint URL.

### 3. Content TODOs

- **Saturday hours** — marked Closed (not listed on original site)
- **Insurance panel list** — general statement only; add named carriers after Lori confirms the panel
- **Pricing** — not provided; no fee schedule included
- **Social profiles** — schema `sameAs` includes Google Maps and Facebook. Healthgrades, Instagram, and WebMD stay omitted until a verified profile URL exists
- **Dr. Allen Beck biography, degree, licenses, and NPI** — not published. His photo is on the About page. Do not reuse the previous doctor's school, license numbers, NPI, Healthgrades profile, family photos, or patient quotes.

## SEO & Structured Data

### On-Page SEO
- Unique `<title>` and meta description per page (Toledo + service/condition keywords)
- Dedicated condition URLs such as `/conditions/back-pain` and `/conditions/whiplash-toledo`
- Canonical URLs via `site` config
- Unique Open Graph images per service, condition, and major page
- Descriptive image `alt` text (provider, action, and Toledo)
- `sitemap-index.xml` via `@astrojs/sitemap`
- `robots.txt` allowing crawl with sitemap reference
- `llms.txt` clinic briefing for AI crawlers (new patients, ages, no massage, parking, Q&A)
- Semantic HTML5, proper heading hierarchy, skip link
- Internal linking between services, conditions, about, contact

### Schema.org JSON-LD
- **MedicalClinic / MedicalBusiness / LocalBusiness** on all pages (NAP, geo, hours, `sameAs`, `hasOfferCatalog`)
- **aggregateRating** from Google (4.7 / 33) — do not invent additional ratings
- **Physician** for Dr. Allen Beck (name, role, and the photo Steve supplied; degree, licenses, NPI, school, and profile URL stay off until supplied)
- **MedicalProcedure** on each service page
- **MedicalWebPage** on each condition page
- **FAQPage** on `/faq`, home, billing, and every service and condition page
- **Review** on `/testimonials` (quotes only; no invented `ratingValue` on individual reviews)
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
