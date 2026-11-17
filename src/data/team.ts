export const team = [
  {
    name: 'Dr. Jared Mainous, DC',
    role: 'Chiropractor / Acupuncturist',
    slug: 'jared-mainous',
    isPrimary: true,
    image: '/images/fam-002.webp',
    bio: `Dr. Jared Mainous, DC, is the lead practitioner at Toledo Holistic Healthcare. He graduated from Palmer College of Chiropractic in Davenport in 2018 and is licensed in Ohio as a chiropractor (04846) and acupuncturist (ACUP-00206). He performs chiropractic adjustments and acupuncture, blending Eastern healing techniques with modern clinical practice.

Patients consistently describe Dr. Jared as gentle, attentive, and thorough—a family-friendly provider who takes time to understand your body and your concerns. He makes sure you are comfortable with everything he does before proceeding, and focuses on healing rather than quick fixes.

Whether you are seeking relief from pain, support during pregnancy or postpartum, fertility care, or wellness maintenance for your whole family, Dr. Jared brings a patient-centered, holistic approach to every visit.`,
    credentials: [
      'Doctor of Chiropractic (DC)',
      'Ohio chiropractic license 04846',
      'Ohio acupuncture license ACUP-00206',
      'Palmer College of Chiropractic, Davenport (2018)',
      'NPI 1487277166',
    ],
    imageAlt: 'Dr. Jared Mainous, DC, with his family in the Toledo area',
    npi: '1487277166',
    licenses: [
      { name: 'Chiropractor', number: '04846', state: 'OH' },
      { name: 'Acupuncturist', number: 'ACUP-00206', state: 'OH' },
    ],
    education: {
      school: 'Palmer College of Chiropractic — Davenport',
      year: '2018',
    },
  },
  {
    name: 'Lori C.',
    role: 'Office Administrator',
    slug: 'lori',
    isPrimary: false,
    image: '/images/lori.webp',
    bio: `Lori C. manages scheduling, insurance coordination, and patient support at Toledo Holistic Healthcare. She works closely with every patient to find appointment times that fit busy schedules and navigates insurance questions with care and efficiency.

Patients frequently praise Lori for going above and beyond to accommodate their needs and make every visit as smooth as possible. She finds joy in hearing success stories from patients after treatment.

Outside the office, she enjoys time with her family and pets.`,
    credentials: ['Office Administration', 'Insurance & Scheduling'],
    imageAlt: 'Lori C., Office Administrator at Toledo Holistic Healthcare',
  },
] as const;

export const leadPractitioner = team[0];
