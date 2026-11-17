export const team = [
  {
    name: 'Dr. Jared Mainous, DC',
    role: 'Chiropractor / Acupuncturist',
    slug: 'jared-mainous',
    isPrimary: true,
    image: '',
    bio: `Dr. Jared Mainous, DC, is the lead practitioner at Toledo Holistic Healthcare. He performs chiropractic adjustments and acupuncture, blending Eastern healing techniques with modern clinical practice.

Patients consistently describe Dr. Jared as gentle, attentive, and thorough—a family-friendly provider who takes time to understand your body and your concerns. He makes sure you are comfortable with everything he does before proceeding, and focuses on healing rather than quick fixes.

Whether you are seeking relief from pain, support during pregnancy or postpartum, fertility care, or wellness maintenance for your whole family, Dr. Jared brings a patient-centered, holistic approach to every visit.`,
    credentials: ['Doctor of Chiropractic (DC)', 'Acupuncture'],
    imageAlt: 'TODO: Replace with professional photo of Dr. Jared Mainous, DC',
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
