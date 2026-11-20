import type { FAQ } from './faq';

export const services = [
  {
    slug: 'chiropractic',
    name: 'Chiropractic',
    image: '/images/1000-chiro-016.webp',
    imageAlt: 'Chiropractic adjustment at Toledo Holistic Healthcare in Toledo, Ohio',
    heroImage: '/images/1920-chiro-086.webp',
    heroImageAlt: 'Chiropractic care at Toledo Holistic Healthcare in Toledo, Ohio',
    shortDescription:
      'Gentle spinal adjustments to restore alignment, relieve pain, and support whole-body wellness for all ages.',
    description: `Chiropractic care is the foundation of Toledo Holistic Healthcare. Dr. Allen Beck uses precise, gentle adjustments to correct spinal misalignments, improve nervous system function, and help your body heal naturally.

Whether you are dealing with back pain, neck pain, headaches, auto injuries, sports injuries, or simply want to maintain optimal health, chiropractic care addresses the root cause—not just symptoms. Our patient-centered approach ensures you are comfortable with every technique before treatment begins.

We serve patients of all ages in Toledo and NW Ohio, from infants to seniors, with techniques tailored to each individual's needs.`,
    whatToExpect: `Your first visit includes a thorough consultation and examination. Dr. Allen Beck will discuss your health history, concerns, and goals before recommending a personalized care plan. Adjustments are performed with the gentlest techniques appropriate for your condition and comfort level.`,
    benefits: [
      'Drug-free pain relief',
      'Improved mobility and posture',
      'Nervous system optimization',
      'Support for injury recovery',
      'Wellness care for all ages',
    ],
    relatedConditions: ['back-pain', 'neck-pain', 'headaches', 'auto-injuries', 'whiplash-toledo', 'sports-injuries', 'work-injuries'],
    faqs: [
      {
        question: 'What happens during a first chiropractic visit?',
        answer:
          'Dr. Allen Beck reviews your history, examines your spine, and explains what he finds before any adjustment. You will know the plan and can ask questions first. Follow-up visits are typically shorter than that first appointment.',
      },
      {
        question: 'Is chiropractic care safe for kids?',
        answer:
          'Yes. We modify techniques for infants, children, and teens. Parents stay involved, and nothing proceeds until you are comfortable. Many Toledo families use chiropractic as part of wellness care, not only after an injury.',
      },
      {
        question: 'Do adjustments hurt?',
        answer:
          'Care is meant to be gentle. Dr. Allen Beck chooses the lightest technique that fits your body and will not continue a move you are uneasy about. Tell us about osteoporosis, recent surgery, or pregnancy so we can adapt.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'acupuncture',
    name: 'Acupuncture',
    image: '/images/1000-chiro-003.webp',
    imageAlt: 'Acupuncture treatment at Toledo Holistic Healthcare in Toledo, Ohio',
    heroImage: '/images/1920-chiro-023.webp',
    heroImageAlt: 'Acupuncture session at Toledo Holistic Healthcare in Toledo, Ohio',
    shortDescription:
      'Traditional Eastern healing technique using fine needles to balance energy, reduce pain, and promote healing.',
    description: `Acupuncture is a time-tested healing modality that Dr. Allen Beck integrates into his holistic practice. By inserting fine, sterile needles at specific points along the body's meridians, acupuncture helps restore balance, reduce pain, and support the body's natural healing processes.

Patients throughout Toledo seek acupuncture for pain management, stress relief, headaches, fertility support, and overall wellness. Dr. Allen Beck's gentle technique and thorough approach make acupuncture accessible even for first-time patients.

This Eastern healing practice complements chiropractic care beautifully, addressing both structural and energetic aspects of your health.`,
    whatToExpect: `During an acupuncture session, you will relax comfortably while fine needles are placed at targeted points. Most patients feel minimal discomfort—many find the experience deeply relaxing. Sessions typically last 20–45 minutes depending on your treatment plan.`,
    benefits: [
      'Pain and tension relief',
      'Stress reduction',
      'Improved energy flow',
      'Support for fertility and wellness',
      'Complements chiropractic care',
    ],
    relatedConditions: ['back-pain', 'neck-pain', 'headaches', 'fertility'],
    faqs: [
      {
        question: 'What does acupuncture feel like?',
        answer:
          'Needles are very fine. Most people feel a light pinch or a dull ache, then settle in and often relax or doze. Dr. Allen Beck places points for your goals—pain, stress, headaches, or fertility support—and checks in throughout the visit.',
      },
      {
        question: 'How long is an acupuncture appointment?',
        answer:
          'Sessions typically last 20–45 minutes depending on your plan. First visits include extra time for history and questions. Wear comfortable clothing that allows access to arms, legs, or the back.',
      },
      {
        question: 'Is acupuncture safe if I have never tried it?',
        answer:
          'Yes. We use sterile, single-use needles and a gentle technique. You will hear the plan before needles go in. Let us know if you are pregnant, take blood thinners, or feel anxious about needles so we can pace the visit.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'cupping',
    name: 'Cupping',
    image: '/images/1000-chiro-039.webp',
    imageAlt: 'Cupping therapy to release muscle tension at Toledo Holistic Healthcare',
    heroImage: '/images/1920-chiro-028.webp',
    heroImageAlt: 'Cupping treatment for muscle pain in Toledo, Ohio',
    shortDescription:
      'Traditional therapy using suction cups to increase blood flow, release muscle tension, and promote healing.',
    description: `Cupping is an ancient healing technique that uses suction cups placed on the skin to increase blood flow, release muscle tension, and promote healing. This therapy is often used alongside acupuncture and chiropractic care for patients dealing with chronic pain, muscle tightness, and inflammation.

At Toledo Holistic Healthcare, cupping is offered as part of our integrative approach to wellness. Many patients in the Toledo area find cupping provides significant relief from stubborn muscle tension that other therapies alone may not fully address.`,
    whatToExpect: `During a cupping session, cups are placed on specific areas of your body to create gentle suction. You may feel a pulling sensation that most patients find relieving rather than painful. Temporary circular marks may appear but typically fade within a few days.`,
    benefits: [
      'Increased blood circulation',
      'Muscle tension release',
      'Reduced inflammation',
      'Complements acupuncture',
      'Natural pain relief',
    ],
    relatedConditions: ['back-pain', 'neck-pain', 'sports-injuries'],
    faqs: [
      {
        question: 'Does cupping leave marks?',
        answer:
          'Temporary circular marks are common and usually fade within a few days. They are not bruises from injury. Wear clothing that covers the area if you have an event the same week, and tell us if you bruise easily.',
      },
      {
        question: 'Is cupping painful?',
        answer:
          'You will feel suction and a pulling sensation. Most patients describe it as relieving rather than sharp. Cups are placed on tight or inflamed areas and used alongside chiropractic or acupuncture when that combination helps.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'fertility',
    name: 'Fertility Support',
    image: '/images/1000-chiro-022.webp',
    imageAlt: 'Fertility support with chiropractic and acupuncture in Toledo, Ohio',
    heroImage: '/images/1920-chiro-035.webp',
    heroImageAlt: 'Holistic fertility care at Toledo Holistic Healthcare',
    shortDescription:
      'Chiropractic and acupuncture support to optimize nervous system function for reproductive health.',
    description: `Fertility support at Toledo Holistic Healthcare focuses on optimizing nervous system function—a key factor in reproductive health. Chiropractic adjustments help ensure clear communication between your brain and reproductive organs, while acupuncture can support hormonal balance and reduce stress.

Dr. Allen Beck works with patients on their fertility journey throughout NW Ohio, providing gentle, holistic care that complements your existing medical team. We take a whole-body approach, addressing spinal alignment, stress, and overall wellness to support your reproductive health goals.`,
    whatToExpect: `Your fertility support plan begins with a comprehensive consultation covering your health history and goals. Treatment may include gentle chiropractic adjustments, acupuncture, and lifestyle guidance tailored to your unique situation.`,
    benefits: [
      'Nervous system optimization',
      'Stress reduction',
      'Hormonal balance support',
      'Whole-body wellness approach',
      'Complements medical fertility care',
    ],
    relatedConditions: ['fertility'],
    faqs: [
      {
        question: 'How does chiropractic support fertility?',
        answer:
          'We work on nervous system function, spinal alignment, and stress—factors that influence reproductive health. Acupuncture may be included. This is supportive care that sits next to your OB or fertility clinic, not a replacement for medical treatment.',
      },
      {
        question: 'When in my cycle should I book?',
        answer:
          'Book a consultation first. Dr. Allen Beck will time chiropractic and acupuncture around your cycle, IUI, or IVF calendar if you share those dates. Bring notes from your physician if they have restrictions.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'pregnancy',
    name: 'Pregnancy Care',
    image: '/images/1000-chiro-047.webp',
    imageAlt: 'Prenatal chiropractic care for pregnancy comfort in Toledo, Ohio',
    heroImage: '/images/1920-chiro-041.webp',
    heroImageAlt: 'Gentle pregnancy chiropractic adjustment in Toledo',
    shortDescription:
      'Gentle prenatal chiropractic care to support comfort, alignment, and wellness throughout pregnancy.',
    // Steve: supply Dr. Allen Beck's prenatal background. The previous line credited the prior doctor with extensive experience caring for expectant mothers and was not kept.
    description: `Pregnancy places unique demands on your body, and gentle prenatal chiropractic care can help you stay comfortable and aligned throughout each trimester. Care includes postpartum support for both mother and baby.

Our family-friendly practice welcomes patients at every stage of pregnancy. Adjustments are modified for safety and comfort, addressing common pregnancy-related concerns like back pain, pelvic alignment, and sciatica.`,
    whatToExpect: `Prenatal visits are adapted to your stage of pregnancy with specialized positioning and gentle techniques. Dr. Allen Beck will discuss your symptoms and concerns, then provide adjustments designed for expectant mothers. Many patients continue care postpartum and bring their newborns for gentle pediatric adjustments.`,
    benefits: [
      'Pregnancy comfort and alignment',
      'Pelvic balance support',
      'Drug-free pain relief',
      'Postpartum recovery support',
      'Pediatric care for newborns',
    ],
    relatedConditions: ['back-pain', 'neck-pain'],
    faqs: [
      {
        question: 'Is prenatal chiropractic safe?',
        answer:
          'Care is adapted for each trimester with specialized positioning and gentle techniques. Tell us you are pregnant when you book. Patients often come for back pain, pelvic alignment, and sciatica, and many continue after delivery with care for mother and baby.',
      },
      {
        question: 'Can my baby be adjusted after birth?',
        answer:
          'Yes. We provide gentle pediatric chiropractic for newborns and infants, including families who started care during pregnancy. Techniques are not the same as adult adjustments. We explain each step before we begin.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'electrical-muscle-stimulation',
    name: 'Electrical Muscle Stimulation',
    image: '/images/1000-chiro-119.webp',
    imageAlt: 'Electrical muscle stimulation therapy at Toledo Holistic Healthcare',
    heroImage: '/images/1920-chiro-122.webp',
    heroImageAlt: 'EMS pads used for muscle recovery in Toledo, Ohio',
    shortDescription:
      'Therapeutic electrical impulses to reduce pain, decrease inflammation, and accelerate muscle recovery.',
    description: `Electrical Muscle Stimulation (EMS) uses controlled electrical impulses to stimulate muscles, reduce pain, decrease inflammation, and accelerate recovery. This therapy is commonly used alongside chiropractic adjustments for patients recovering from injuries, dealing with muscle spasms, or managing chronic pain.

At Toledo Holistic Healthcare, EMS is integrated into comprehensive treatment plans for auto injuries, sports injuries, work injuries, and other conditions requiring soft tissue rehabilitation.`,
    whatToExpect: `During EMS therapy, electrodes are placed on targeted areas of your body. You will feel a gentle tingling or pulsing sensation as the electrical impulses stimulate your muscles. Sessions are comfortable and typically last 10–15 minutes as part of your visit.`,
    benefits: [
      'Pain and spasm reduction',
      'Decreased inflammation',
      'Accelerated muscle recovery',
      'Improved circulation',
      'Complements chiropractic care',
    ],
    relatedConditions: ['auto-injuries', 'whiplash-toledo', 'sports-injuries', 'work-injuries', 'back-pain'],
    faqs: [
      {
        question: 'What does electrical muscle stimulation feel like?',
        answer:
          'Electrodes go on the sore area and you feel a tingling or pulsing while the muscle works. Visits are typically 10–15 minutes as part of a chiropractic appointment. It is used for spasms, inflammation, and recovery after auto, sport, or work injuries.',
      },
      {
        question: 'Is EMS the same as a TENS unit at home?',
        answer:
          'They are related but not identical. In the office we set the session to your injury and combine it with adjustments. Ask before using a home unit on a new injury, especially after surgery or if you have a pacemaker.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'cold-laser-therapy',
    name: 'Cold Laser Therapy',
    image: '/images/1000-chiro-124.webp',
    imageAlt: 'Cold laser therapy for inflammation and tissue healing in Toledo, Ohio',
    heroImage: '/images/1920-chiro-123.webp',
    heroImageAlt: 'Low-level laser therapy at Toledo Holistic Healthcare',
    shortDescription:
      'Low-level laser therapy to reduce inflammation, promote tissue healing, and relieve pain without heat or incision.',
    description: `Cold Laser Therapy (also known as low-level laser therapy) uses specific wavelengths of light to penetrate tissues and stimulate cellular healing. This non-invasive therapy reduces inflammation, promotes tissue repair, and relieves pain—without heat, incision, or downtime.

Dr. Allen Beck incorporates cold laser therapy into treatment plans for patients with sports injuries, auto injuries, chronic pain, and soft tissue conditions throughout the Toledo area.`,
    whatToExpect: `Cold laser therapy is painless and non-invasive. A handheld device is applied to the treatment area for a few minutes per site. Most patients feel nothing during the session, though some notice mild warmth or tingling. Multiple sessions may be recommended for optimal results.`,
    benefits: [
      'Non-invasive pain relief',
      'Reduced inflammation',
      'Accelerated tissue healing',
      'No downtime required',
      'Safe for most patients',
    ],
    relatedConditions: ['back-pain', 'auto-injuries', 'whiplash-toledo', 'sports-injuries'],
    faqs: [
      {
        question: 'Does cold laser therapy hurt?',
        answer:
          'No. The light is applied with a handheld device and you should not feel heat or cutting. Some people notice mild warmth or tingling. There is no downtime, so you can return to your day after the visit.',
      },
      {
        question: 'How many cold laser sessions will I need?',
        answer:
          'That depends on the injury. Soft-tissue and sports injuries often need a short series rather than a single visit. Dr. Allen Beck will recommend a count after he sees the area and how you respond.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'electro-meridian-imaging',
    name: 'Electro-Meridian Imaging',
    image: '/images/1000-chiro-026.webp',
    imageAlt: 'Electro-meridian imaging diagnostic scan in Toledo, Ohio',
    heroImage: '/images/1920-chiro-003.webp',
    heroImageAlt: 'Meridian assessment to guide acupuncture at Toledo Holistic Healthcare',
    shortDescription:
      'Advanced diagnostic tool mapping energy pathways to guide personalized acupuncture and holistic treatment.',
    description: `Electro-Meridian Imaging (EMI) is an advanced diagnostic tool that maps the body's energy pathways (meridians) to identify imbalances and guide personalized treatment. This technology helps Dr. Allen Beck tailor acupuncture and holistic care plans based on objective data about your body's energetic health.

For patients in Toledo seeking a data-informed approach to Eastern medicine, EMI provides valuable insights that enhance the precision and effectiveness of your treatment plan.`,
    whatToExpect: `During an EMI session, a painless scanning process measures electrical conductivity at specific acupuncture points. Results are reviewed with you to understand imbalances and inform your personalized care plan. The process is quick, comfortable, and non-invasive.`,
    benefits: [
      'Objective meridian assessment',
      'Personalized treatment planning',
      'Enhanced acupuncture precision',
      'Tracks progress over time',
      'Non-invasive diagnostic tool',
    ],
    relatedConditions: [],
    faqs: [
      {
        question: 'What is electro-meridian imaging?',
        answer:
          'EMI is a painless scan of electrical conductivity at acupuncture points. It maps meridian imbalances so acupuncture and other care can be more specific. Results are reviewed with you the same visit.',
      },
      {
        question: 'Does the EMI scan hurt?',
        answer:
          'No. It is a quick, non-invasive measurement—no needles during the scan itself. Needles, if recommended, come after you see the findings and agree to the plan.',
      },
    ] satisfies FAQ[],
  },
] as const;

export type Service = (typeof services)[number];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
