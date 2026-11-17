import type { FAQ } from './faq';

export const conditions = [
  {
    slug: 'back-pain',
    name: 'Back Pain',
    image: '/images/1000-chiro-056.webp',
    imageAlt: 'Dr. Jared Mainous adjusting a patient for back pain at Toledo Holistic Healthcare in Toledo, Ohio',
    seoTitle: 'Back Pain Chiropractor in Toledo, OH',
    seoDescription:
      'Drug-free chiropractic and acupuncture for back pain in Toledo and NW Ohio. Dr. Jared Mainous, DC, treats the cause—not just symptoms. Call 419-472-7055.',
    shortDescription:
      'Caused by poor posture, spinal misalignment, or injury; chiropractic relieves discomfort and restores mobility naturally.',
    description: `Back pain is one of the most common reasons patients visit Toledo Holistic Healthcare. Whether your discomfort stems from poor posture, spinal misalignment, a workplace injury, or everyday strain, chronic back pain can limit your mobility and quality of life.

Dr. Jared Mainous, DC, uses gentle chiropractic adjustments to address the root cause of your pain—not just mask symptoms. By restoring proper spinal alignment and nervous system function, we help your body heal naturally. Many Toledo and NW Ohio patients find lasting relief without relying on medication.

We also integrate complementary therapies such as acupuncture and cold laser therapy when appropriate to support your recovery.`,
    relatedServices: ['chiropractic', 'acupuncture', 'cold-laser-therapy'],
    faqs: [
      {
        question: 'Can a chiropractor in Toledo help with lower back pain?',
        answer:
          'Yes. Dr. Jared Mainous, DC, uses gentle adjustments to restore spinal alignment and nervous system function, which often reduces back pain from posture, strain, or injury. Acupuncture and cold laser therapy may be added when they support recovery. Your first visit includes an exam so care is matched to the cause, not just the sore spot.',
      },
      {
        question: 'Do I need a referral for back pain treatment?',
        answer:
          'You do not need a referral to book. If you have auto or workers compensation coverage, bring those details so Lori can help with documentation. Call 419-472-7055 to schedule.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'neck-pain',
    name: 'Neck Pain',
    image: '/images/1000-chiro-059.webp',
    imageAlt: 'Gentle neck adjustment for cervical pain at Toledo Holistic Healthcare',
    seoTitle: 'Neck Pain & Stiffness Chiropractor in Toledo',
    seoDescription:
      'Chiropractic care for neck pain, stiffness, and desk-related tension in Toledo, OH. Gentle adjustments and acupuncture. Book at 419-472-7055.',
    shortDescription:
      'Often from stress, poor posture, or whiplash; adjustments restore function and relieve tension.',
    description: `Neck pain frequently results from stress, poor posture, prolonged desk work, or whiplash from auto accidents. Tension in the cervical spine can radiate into your shoulders, cause headaches, and restrict your range of motion.

Our chiropractic care focuses on restoring proper neck alignment and relieving muscle tension. Dr. Jared takes a gentle, patient-centered approach—especially important for patients recovering from whiplash or chronic stress-related tension.

If you are in the Toledo area and struggling with neck pain, we can help you regain comfort and mobility through drug-free, holistic care.`,
    relatedServices: ['chiropractic', 'acupuncture'],
    faqs: [
      {
        question: 'What causes neck pain that a chiropractor can treat?',
        answer:
          'Desk posture, stress, sleeping position, and whiplash are common causes we see in Toledo. Care focuses on cervical alignment and muscle tension, with acupuncture when it helps headaches or lingering tightness. Techniques stay gentle, especially after a collision.',
      },
      {
        question: 'Can neck pain cause headaches?',
        answer:
          'Yes. Misaligned vertebrae and tight muscles in the neck and shoulders often trigger tension headaches. Treating the neck can reduce both the stiffness and the headaches. See our headaches page if that is your main concern.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'headaches',
    name: 'Headaches',
    image: '/images/1000-chiro-069.webp',
    imageAlt: 'Chiropractic and acupuncture care for tension headaches in Toledo, Ohio',
    seoTitle: 'Headache & Migraine Chiropractor in Toledo, OH',
    seoDescription:
      'Drug-free chiropractic and acupuncture for tension headaches and migraines in Toledo and NW Ohio. Call Toledo Holistic Healthcare at 419-472-7055.',
    shortDescription:
      'Tension headaches and migraines from misaligned vertebrae or muscle tension; drug-free relief.',
    description: `Tension headaches and migraines are often linked to misaligned vertebrae, muscle tension in the neck and shoulders, or nervous system dysfunction. Rather than relying on pain medication alone, many patients find lasting relief through chiropractic care.

At Toledo Holistic Healthcare, we assess your spine, posture, and lifestyle factors to identify triggers and underlying causes. Chiropractic adjustments, acupuncture, and targeted therapies can reduce headache frequency and intensity—helping you get back to your daily life in NW Ohio without the side effects of long-term medication use.`,
    relatedServices: ['chiropractic', 'acupuncture'],
    faqs: [
      {
        question: 'Can chiropractic care help migraines and tension headaches?',
        answer:
          'Many patients find fewer and milder headaches when we correct neck alignment and reduce muscle tension. Acupuncture is often part of the same plan. We look at posture and daily habits so you are not only treating the pain during the visit.',
      },
      {
        question: 'Will I have to stop my headache medication?',
        answer:
          'We do not tell you to stop prescribed medication. Our care is drug-free and can sit alongside what your physician has recommended. Discuss medication changes only with the prescriber.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'auto-injuries',
    name: 'Auto Injuries',
    image: '/images/1000-chiro-068.webp',
    imageAlt: 'Whiplash and auto injury chiropractic care in Toledo, Ohio',
    seoTitle: 'Whiplash & Auto Injury Chiropractor in Toledo',
    seoDescription:
      'Chiropractic care for whiplash, spinal misalignment, and car accident injuries in Toledo, OH. We work with auto insurance. Call 419-472-7055.',
    shortDescription:
      'Whiplash, spinal misalignment, and muscle strain after car accidents; adjustments speed recovery.',
    description: `Car accidents can cause whiplash, spinal misalignment, muscle strain, and lingering pain that may not appear until days or weeks later. Prompt chiropractic care after an auto injury can speed recovery and prevent chronic issues from developing.

We work with most private insurance for car accidents and coordinate care to document your progress. Dr. Jared's gentle techniques are well-suited for patients recovering from collision-related injuries throughout the Toledo area.`,
    relatedServices: ['chiropractic', 'acupuncture', 'electrical-muscle-stimulation', 'cold-laser-therapy'],
    faqs: [
      {
        question: 'Should I see a chiropractor after a car accident in Toledo?',
        answer:
          'Yes, even if you feel “just sore.” Whiplash and spinal misalignment often show up days later. Early care can reduce the chance of chronic pain. We treat auto injuries with gentle adjustments, and we can add electrical muscle stimulation or cold laser therapy when soft tissue needs support. For delayed neck pain after a crash, see our Toledo whiplash page.',
      },
      {
        question: 'Do you bill auto insurance for accident care?',
        answer:
          'We work with most private insurance for car accidents and document your visits. Bring your claim information to the first appointment. Lori helps coordinate paperwork so you can focus on getting well.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'whiplash-toledo',
    name: 'Whiplash',
    image: '/images/1000-chiro-059.webp',
    imageAlt:
      'Dr. Jared Mainous, DC, providing gentle neck care for whiplash at Toledo Holistic Healthcare in Toledo, Ohio',
    seoTitle: 'Whiplash Chiropractor in Toledo, OH',
    seoDescription:
      'Whiplash chiropractor in Toledo for delayed neck pain, headaches, and stiffness after a car accident. Auto insurance welcome. Call 419-472-7055.',
    shortDescription:
      'Neck pain, stiffness, and headaches after a collision—even days later. Gentle chiropractic care in Toledo.',
    description: `Whiplash is one of the most common injuries we treat after car accidents in Toledo and NW Ohio. The rapid forward-and-back motion of a crash can strain the cervical spine, ligaments, and muscles. Pain, headaches, dizziness, and limited range of motion often appear a day or two later—not always at the scene.

Dr. Jared Mainous, DC, uses gentle, patient-centered adjustments rather than aggressive twisting. Care may include acupuncture, electrical muscle stimulation, or cold laser therapy when soft tissue needs extra support. We document findings for auto insurance and workers compensation when those apply.

If you were in a collision anywhere in Lucas County, you do not need a referral to book. Call 419-472-7055 as soon as you can. Related auto-injury care is also covered on our auto injuries page.`,
    relatedServices: ['chiropractic', 'acupuncture', 'electrical-muscle-stimulation', 'cold-laser-therapy'],
    faqs: [
      {
        question: 'Do I need to see a whiplash chiropractor in Toledo if I felt fine after the crash?',
        answer:
          'Yes, it is still worth an exam. Whiplash symptoms often show up 24–72 hours later as neck stiffness, headaches, or shoulder pain. Early care can reduce the chance those symptoms become chronic. Dr. Jared will examine your neck before any adjustment and explain the plan first.',
      },
      {
        question: 'Will you work with my auto accident insurance?',
        answer:
          'We work with most private insurance for car accidents and document your visits. Bring claim details to the first appointment. Lori helps with paperwork. We do not list every carrier online—call 419-472-7055 to confirm your plan.',
      },
      {
        question: 'How soon after a collision should I come in?',
        answer:
          'As soon as you can, even the same week. Waiting until pain is severe can make recovery slower. If you have red-flag symptoms such as severe headache, numbness, or loss of consciousness, seek emergency care first, then follow up here for musculoskeletal recovery.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'sports-injuries',
    name: 'Sports Injuries',
    image: '/images/1000-chiro-074.webp',
    imageAlt: 'Sports injury rehabilitation and chiropractic care in Toledo, Ohio',
    seoTitle: 'Sports Injury Chiropractor in Toledo, OH',
    seoDescription:
      'Chiropractic, EMS, and cold laser therapy for sports injuries in Toledo and NW Ohio. Return to play with a plan built around your sport. Call 419-472-7055.',
    shortDescription:
      'Joint pain, muscle strains, and ligament injuries; aids pain relief and performance recovery.',
    description: `Whether you are a weekend warrior or a competitive athlete in NW Ohio, sports injuries like joint pain, muscle strains, and ligament damage can sideline you from the activities you love.

Our holistic approach combines chiropractic adjustments, soft tissue therapies, and rehabilitative techniques to reduce pain, restore function, and support performance recovery. We tailor treatment plans to your sport, injury, and goals—helping you return to play safely and stronger.`,
    relatedServices: ['chiropractic', 'electrical-muscle-stimulation', 'cold-laser-therapy'],
    faqs: [
      {
        question: 'What sports injuries do you treat?',
        answer:
          'We commonly see joint pain, muscle strains, and ligament injuries in weekend athletes and competitors across NW Ohio. Care may include chiropractic adjustments, electrical muscle stimulation, and cold laser therapy. Tell us your sport and timeline so the plan matches how you train.',
      },
      {
        question: 'How soon can I return to activity?',
        answer:
          'That depends on the injury. We focus on reducing pain and restoring function without rushing you back in a way that causes re-injury. Dr. Jared will give you a clear next step after the exam.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'work-injuries',
    name: 'Work Injuries',
    image: '/images/1000-chiro-071.webp',
    imageAlt: 'Workers compensation chiropractic care for workplace injuries in Toledo, Ohio',
    seoTitle: 'Work Injury & Workers Comp Chiropractor in Toledo',
    seoDescription:
      'Chiropractic care for repetitive strain and workplace injuries in Toledo, OH. We work with workers compensation. Call 419-472-7055.',
    shortDescription:
      'Repetitive strain and workplace accidents leading to chronic pain; promotes healing and mobility.',
    description: `Repetitive strain injuries, lifting accidents, and workplace ergonomics issues are common sources of chronic pain for Toledo workers. We treat work-related injuries with a focus on healing, mobility, and preventing re-injury.

We work with workers compensation insurance and develop care plans that address both immediate pain relief and long-term functional recovery—so you can return to work with confidence.`,
    relatedServices: ['chiropractic', 'electrical-muscle-stimulation'],
    faqs: [
      {
        question: 'Do you accept workers compensation?',
        answer:
          'Yes. We treat work-related injuries and work with workers compensation insurance. Bring your claim details to the first visit. Care focuses on pain relief, mobility, and preventing the same injury when you return to the job.',
      },
      {
        question: 'Can chiropractic help repetitive strain from desk or lifting work?',
        answer:
          'Yes. Repetitive strain, lifting accidents, and poor ergonomics are common here. Adjustments and muscle stimulation can reduce pain while we talk through habits that keep aggravating the same area.',
      },
    ] satisfies FAQ[],
  },
  {
    slug: 'fertility',
    name: 'Fertility',
    image: '/images/1000-chiro-035.webp',
    imageAlt: 'Chiropractic and acupuncture fertility support in Toledo, Ohio',
    seoTitle: 'Fertility Chiropractic & Acupuncture in Toledo, OH',
    seoDescription:
      'Chiropractic and acupuncture to support nervous system function and fertility in Toledo and NW Ohio. Complements your medical team. Call 419-472-7055.',
    shortDescription:
      'Adjustments help improve nervous system function, key to reproductive health.',
    description: `Chiropractic care can play a supportive role in reproductive health by optimizing nervous system function—a key factor in fertility. Spinal misalignments may interfere with the communication between your brain and reproductive organs.

Dr. Jared provides gentle, holistic chiropractic support for patients on their fertility journey in the Toledo area. We work alongside your existing medical team and take a whole-body approach to support your reproductive wellness goals.`,
    relatedServices: ['chiropractic', 'acupuncture', 'fertility'],
    faqs: [
      {
        question: 'How can chiropractic or acupuncture support fertility?',
        answer:
          'We focus on nervous system function, spinal alignment, stress, and overall wellness—factors that influence reproductive health. Acupuncture may be part of the same plan. This care complements, rather than replaces, your medical fertility team.',
      },
      {
        question: 'Do you coordinate with my OB or fertility clinic?',
        answer:
          'Yes. We work alongside your existing providers. Bring any restrictions or timing notes from your physician so we can keep care aligned with your medical plan.',
      },
    ] satisfies FAQ[],
  },
] as const;

export type Condition = (typeof conditions)[number];

export function getConditionBySlug(slug: string): Condition | undefined {
  return conditions.find((c) => c.slug === slug);
}
