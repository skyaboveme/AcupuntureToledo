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
    name: 'Aleshia Deiners',
    role: 'Licensed Massage Therapist',
    slug: 'aleshia',
    isPrimary: false,
    image: '/images/aleshia.webp',
    bio: `Aleshia Deiners is a Licensed Massage Therapist offering in-house massage therapy at Toledo Holistic Healthcare. She blends relaxation techniques with targeted deep tissue work to address muscle tension, stress, and chronic pain.

As the owner of 10 Eleven Massage, Aleshia is licensed by the State Medical Board of Ohio and completed 750 hours of massage and bodywork training at Orion Institute. Her sessions complement chiropractic and acupuncture care, helping patients release tension and support their overall healing process.

She enjoys music, plants, and spending time with her family. Whether you're seeking relaxation or deep, targeted work, Aleshia has you covered.`,
    credentials: ['Licensed Massage Therapist', 'Owner, 10 Eleven Massage', 'State Medical Board of Ohio'],
    imageAlt: 'Aleshia Deiners, Licensed Massage Therapist at Toledo Holistic Healthcare',
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
