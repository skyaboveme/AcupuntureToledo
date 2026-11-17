import { site, openingHoursSpecification } from '../data/site';
import { leadPractitioner } from '../data/team';

export interface SchemaOptions {
  title?: string;
  description?: string;
  path?: string;
  breadcrumbs?: { name: string; path: string }[];
  service?: { name: string; description: string; slug: string };
  faqs?: { question: string; answer: string }[];
  reviews?: { quote: string; author: string }[];
  includePhysician?: boolean;
}

export function clinicSchema(options: SchemaOptions = {}) {
  const url = options.path ? `${site.url}${options.path}` : site.url;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'MedicalBusiness', 'LocalBusiness'],
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    description: options.description || site.description,
    url,
    telephone: site.phoneTel,
    email: site.email,
    image: `${site.url}/images/toledo-hero.webp`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification,
    medicalSpecialty: ['Chiropractic', 'Acupuncture'],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      geoRadius: '50000',
    },
    priceRange: '$$',
  };

  return schema;
}

export function physicianSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${site.url}/#physician`,
    name: leadPractitioner.name,
    jobTitle: 'Doctor of Chiropractic',
    medicalSpecialty: ['Chiropractic', 'Acupuncture'],
    worksFor: {
      '@type': 'MedicalClinic',
      '@id': `${site.url}/#organization`,
      name: site.name,
    },
    url: `${site.url}/about`,
  };
}

export function serviceSchema(service: { name: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.name,
    description: service.description,
    url: `${site.url}/services/${service.slug}`,
    provider: {
      '@type': 'MedicalClinic',
      '@id': `${site.url}/#organization`,
      name: site.name,
    },
    areaServed: site.region,
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function reviewSchemas(reviews: { quote: string; author: string }[]) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: review.quote,
    author: {
      '@type': 'Person',
      name: review.author,
    },
    itemReviewed: {
      '@type': 'MedicalClinic',
      '@id': `${site.url}/#organization`,
      name: site.name,
    },
  }));
}

export function breadcrumbSchema(breadcrumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${site.url}${crumb.path}`,
    })),
  };
}

export function buildPageSchema(options: SchemaOptions = {}) {
  const graphs: Record<string, unknown>[] = [clinicSchema(options)];

  if (options.includePhysician) {
    graphs.push(physicianSchema());
  }

  if (options.service) {
    graphs.push(serviceSchema(options.service));
  }

  if (options.faqs?.length) {
    graphs.push(faqPageSchema(options.faqs));
  }

  if (options.breadcrumbs?.length) {
    graphs.push(breadcrumbSchema(options.breadcrumbs));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graphs,
  };
}
