export const team = [
  {
    name: 'Dr. Allen Beck',
    role: 'Chiropractor / Acupuncturist',
    slug: 'allen-beck',
    isPrimary: true,
    // Photo supplied by Steve. Do not swap in a generated face, or fam-002.webp / fam-003.webp (previous doctor's family).
    image: '/images/dr-allen-beck.jpg',
    // Steve: supply a biography, degree, school, license numbers, and NPI.
    // The previous doctor's school, license numbers, NPI, and review-based reputation lines were removed
    // so they are not stated as Dr. Allen Beck's.
    bio: `Dr. Allen Beck is the lead practitioner at Toledo Holistic Healthcare. He performs chiropractic adjustments and acupuncture, blending Eastern healing techniques with modern clinical practice.

Whether you are seeking relief from pain, support during pregnancy or postpartum, fertility care, or wellness maintenance for your whole family, Dr. Allen Beck brings a patient-centered, holistic approach to every visit.`,
    credentials: [] as string[],
    imageAlt: 'Dr. Allen Beck, lead practitioner at Toledo Holistic Healthcare',
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
