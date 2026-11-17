// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://acupuncturetoledo.com',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  server: {
    port: 4318,
    host: true,
  },
  redirects: {
    '/index.php': '/',
    '/about.php': '/about',
    '/contact.php': '/contact',
    '/locations.php': '/locations',
    '/all-services.php': '/services',
    '/services.php': '/services',
    '/team.php': '/about',
    '/reviews.php': '/testimonials',
    '/faq.php': '/faq',
    '/billing.php': '/billing',
    '/chiropractic.php': '/services/chiropractic',
    '/chiropractor.php': '/services/chiropractic',
    '/massage.php': '/services',
    '/services/massage': '/services',
    '/acupuncture.php': '/services/acupuncture',
    '/cupping.php': '/services/cupping',
    '/electrical-muscle-stimulation.php': '/services/electrical-muscle-stimulation',
    '/electro-meridian-imaging.php': '/services/electro-meridian-imaging',
    '/cold-laser-therapy.php': '/services/cold-laser-therapy',
    '/pregnancy.php': '/services/pregnancy',
    '/fertility.php': '/services/fertility',
    '/services/massage-therapy': '/services',
  },
});
