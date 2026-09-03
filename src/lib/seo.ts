import { site } from '../data/site';

export interface SeoProps {
  title: string;
  description: string;
  path?: string;
  ogType?: string;
  noindex?: boolean;
}

export function seo(props: SeoProps) {
  const { title, description, path = '/', ogType = 'website', noindex = false } = props;
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const canonical = `${site.url}${path}`;

  return {
    title: fullTitle,
    description,
    canonical,
    ogType,
    noindex,
  };
}

export const defaultSeo = seo({
  title: `${site.name} — Chiropractic & Acupuncture in Toledo, OH`,
  description: site.description,
  path: '/',
});
