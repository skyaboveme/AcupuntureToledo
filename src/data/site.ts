export const site = {
  name: 'Toledo Holistic Healthcare',
  legalName: 'Toledo Holistic Healthcare LLC',
  tagline: 'We Take A Whole Body Approach To Your Healthcare',
  description:
    'Holistic, patient-centered chiropractic, acupuncture, and wellness care in Toledo, Ohio. Serving NW Ohio with a whole-person approach blending Eastern healing with modern practice.',
  url: 'https://acupuncturetoledo.com',
  phone: '419-472-7055',
  phoneTel: '+14194727055',
  email: 'faq@acupuncturetoledo.com',
  address: {
    street: '2828 W Central Ave, Suite 1',
    city: 'Toledo',
    state: 'OH',
    zip: '43606',
    full: '2828 W Central Ave, Suite 1, Toledo, OH 43606',
  },
  geo: {
    latitude: 41.677592,
    longitude: -83.612074,
  },
  // Clinic Facebook page. Steve: add Dr. Allen Beck's own profile URLs. The previous Healthgrades page was the prior doctor's and was removed.
  facebook: 'https://www.facebook.com/ToledoHolisticHealthcare',
  sameAs: [
    'https://maps.app.goo.gl/zV1mEEvmJ9atMQhM9',
    'https://www.facebook.com/ToledoHolisticHealthcare',
  ],
  googleReviews: {
    ratingValue: '4.7',
    reviewCount: 33,
    bestRating: '5',
  },
  region: 'Toledo and NW Ohio',
  mapUrl: 'https://maps.app.goo.gl/zV1mEEvmJ9atMQhM9',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=2828%20W%20Central%20Ave%2C%20Suite%201%2C%20Toledo%2C%20OH%2043606&output=embed',
  hours: [
    { day: 'Sunday', hours: 'Closed', schema: null },
    { day: 'Monday', hours: '8 AM – 6 PM', schema: { opens: '08:00', closes: '18:00' } },
    { day: 'Tuesday', hours: '8 AM – 2 PM', schema: { opens: '08:00', closes: '14:00' } },
    { day: 'Wednesday', hours: '8 AM – 6 PM', schema: { opens: '08:00', closes: '18:00' } },
    { day: 'Thursday', hours: '10 AM – 2 PM', schema: { opens: '10:00', closes: '14:00' } },
    { day: 'Friday', hours: '8 AM – 12 PM', schema: { opens: '08:00', closes: '12:00' } },
    { day: 'Saturday', hours: 'Closed', schema: null },
  ],
  differentiators: [
    {
      title: 'Holistic, Patient-Centered Approach',
      description:
        'We treat the whole person—mind, body, and spirit—not just symptoms. Your care plan is tailored to your unique health goals and lifestyle.',
    },
    {
      title: 'Experienced, Licensed Practitioners',
      description:
        'Our team includes a Doctor of Chiropractic, licensed acupuncturist, and dedicated office administrator.',
    },
    {
      title: 'Care for All Ages',
      description:
        'From newborn babies to mature retirees, we provide gentle, effective care tailored for every stage of life.',
    },
    {
      title: 'Right Care, Right Provider',
      description:
        'We are committed to finding the best care for you—even if that means referring you to a trusted partner when another provider is a better fit.',
    },
    {
      title: 'Convenient & Nurturing Environment',
      description:
        'Flexible scheduling, attentive staff, and a welcoming office designed to support your healing journey.',
    },
  ],
} as const;

export const openingHoursSpecification = site.hours
  .filter((h) => h.schema !== null)
  .map((h) => ({
    '@type': 'OpeningHoursSpecification' as const,
    dayOfWeek: h.day,
    opens: h.schema!.opens,
    closes: h.schema!.closes,
  }));
