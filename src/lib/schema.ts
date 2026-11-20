import { site, openingHoursSpecification } from '../data/site';
import { leadPractitioner } from '../data/team';
import { services } from '../data/services';
import type { FAQ } from '../data/faq';

export interface SchemaOptions {
  title?: string;
  description?: string;
  path?: string;
  breadcrumbs?: { name: string; path: string }[];
  service?: { name: string; description: string; slug: string };
  condition?: { name: string; description: string; slug: string };
  faqs?: FAQ[];
  reviews?: { quote: string; author: string }[];
  includePhysician?: boolean;
}

function absoluteUrl(path: string) {
  if (path.startsWith('http')) return path;
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
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
    image: [
      absoluteUrl('/images/1920-chiro-004.webp'),
      ...(leadPractitioner.image ? [absoluteUrl(leadPractitioner.image)] : []),
    ],
    logo: absoluteUrl('/images/logo2.webp'),
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
    sameAs: [...site.sameAs],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.googleReviews.ratingValue,
      reviewCount: site.googleReviews.reviewCount,
      bestRating: site.googleReviews.bestRating,
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Holistic health services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalProcedure',
          name: service.name,
          url: `${site.url}/services/${service.slug}`,
        },
      })),
    },
  };

  return schema;
}

export function physicianSchema() {
  // Steve: degree, license numbers, NPI, school, headshot, and profile URL stay off this
  // schema until they are supplied for Dr. Allen Beck. knowsAbout is the clinic's existing topic list.
  const physician: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${site.url}/#physician`,
    name: leadPractitioner.name,
    jobTitle: leadPractitioner.role,
    medicalSpecialty: ['Chiropractic', 'Acupuncture'],
    url: `${site.url}/about`,
    worksFor: {
      '@type': 'MedicalClinic',
      '@id': `${site.url}/#organization`,
      name: site.name,
    },
    knowsAbout: [
      'Chiropractic',
      'Acupuncture',
      'Whiplash',
      'Back Pain',
      'Neck Pain',
      'Prenatal Chiropractic',
    ],
  };

  if (leadPractitioner.image) {
    physician.image = absoluteUrl(leadPractitioner.image);
  }

  return physician;
}

export function serviceSchema(service: { name: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.name,
    description: service.description,
    url: `${site.url}/services/${service.slug}`,
    image: absoluteUrl(services.find((s) => s.slug === service.slug)?.heroImage || '/images/toledo-hero.webp'),
    provider: {
      '@type': 'MedicalClinic',
      '@id': `${site.url}/#organization`,
      name: site.name,
    },
    areaServed: site.region,
  };
}

export function conditionSchema(condition: { name: string; description: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: condition.name,
    description: condition.description,
    url: `${site.url}/conditions/${condition.slug}`,
    about: {
      '@type': 'MedicalCondition',
      name: condition.name,
    },
    audience: {
      '@type': 'PeopleAudience',
      geographicArea: {
        '@type': 'AdministrativeArea',
        name: 'Toledo, Ohio',
      },
    },
    sourceOrganization: {
      '@type': 'MedicalClinic',
      '@id': `${site.url}/#organization`,
      name: site.name,
    },
  };
}

export function faqPageSchema(faqs: FAQ[]) {
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

  if (options.condition) {
    graphs.push(conditionSchema(options.condition));
  }

  if (options.faqs?.length) {
    graphs.push(faqPageSchema(options.faqs));
  }

  if (options.reviews?.length) {
    graphs.push(...reviewSchemas(options.reviews));
  }

  if (options.breadcrumbs?.length) {
    graphs.push(breadcrumbSchema(options.breadcrumbs));
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graphs,
  };
}
