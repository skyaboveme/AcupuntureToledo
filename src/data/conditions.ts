export const conditions = [
  {
    slug: 'back-pain',
    name: 'Back Pain',
    shortDescription:
      'Caused by poor posture, spinal misalignment, or injury; chiropractic relieves discomfort and restores mobility naturally.',
    description: `Back pain is one of the most common reasons patients visit Toledo Holistic Healthcare. Whether your discomfort stems from poor posture, spinal misalignment, a workplace injury, or everyday strain, chronic back pain can limit your mobility and quality of life.

Dr. Jared Mainous, DC, uses gentle chiropractic adjustments to address the root cause of your pain—not just mask symptoms. By restoring proper spinal alignment and nervous system function, we help your body heal naturally. Many Toledo and NW Ohio patients find lasting relief without relying on medication.

We also integrate complementary therapies such as acupuncture and cold laser therapy when appropriate to support your recovery.`,
    relatedServices: ['chiropractic', 'acupuncture', 'cold-laser-therapy'],
  },
  {
    slug: 'neck-pain',
    name: 'Neck Pain',
    shortDescription:
      'Often from stress, poor posture, or whiplash; adjustments restore function and relieve tension.',
    description: `Neck pain frequently results from stress, poor posture, prolonged desk work, or whiplash from auto accidents. Tension in the cervical spine can radiate into your shoulders, cause headaches, and restrict your range of motion.

Our chiropractic care focuses on restoring proper neck alignment and relieving muscle tension. Dr. Jared takes a gentle, patient-centered approach—especially important for patients recovering from whiplash or chronic stress-related tension.

If you are in the Toledo area and struggling with neck pain, we can help you regain comfort and mobility through drug-free, holistic care.`,
    relatedServices: ['chiropractic', 'acupuncture'],
  },
  {
    slug: 'headaches',
    name: 'Headaches',
    shortDescription:
      'Tension headaches and migraines from misaligned vertebrae or muscle tension; drug-free relief.',
    description: `Tension headaches and migraines are often linked to misaligned vertebrae, muscle tension in the neck and shoulders, or nervous system dysfunction. Rather than relying on pain medication alone, many patients find lasting relief through chiropractic care.

At Toledo Holistic Healthcare, we assess your spine, posture, and lifestyle factors to identify triggers and underlying causes. Chiropractic adjustments, acupuncture, and targeted therapies can reduce headache frequency and intensity—helping you get back to your daily life in NW Ohio without the side effects of long-term medication use.`,
    relatedServices: ['chiropractic', 'acupuncture'],
  },
  {
    slug: 'auto-injuries',
    name: 'Auto Injuries',
    shortDescription:
      'Whiplash, spinal misalignment, and muscle strain after car accidents; adjustments speed recovery.',
    description: `Car accidents can cause whiplash, spinal misalignment, muscle strain, and lingering pain that may not appear until days or weeks later. Prompt chiropractic care after an auto injury can speed recovery and prevent chronic issues from developing.

We work with most private insurance for car accidents and coordinate care to document your progress. Dr. Jared's gentle techniques are well-suited for patients recovering from collision-related injuries throughout the Toledo area.`,
    relatedServices: ['chiropractic', 'acupuncture', 'electrical-muscle-stimulation', 'cold-laser-therapy'],
  },
  {
    slug: 'sports-injuries',
    name: 'Sports Injuries',
    shortDescription:
      'Joint pain, muscle strains, and ligament injuries; aids pain relief and performance recovery.',
    description: `Whether you are a weekend warrior or a competitive athlete in NW Ohio, sports injuries like joint pain, muscle strains, and ligament damage can sideline you from the activities you love.

Our holistic approach combines chiropractic adjustments, soft tissue therapies, and rehabilitative techniques to reduce pain, restore function, and support performance recovery. We tailor treatment plans to your sport, injury, and goals—helping you return to play safely and stronger.`,
    relatedServices: ['chiropractic', 'electrical-muscle-stimulation', 'cold-laser-therapy'],
  },
  {
    slug: 'work-injuries',
    name: 'Work Injuries',
    shortDescription:
      'Repetitive strain and workplace accidents leading to chronic pain; promotes healing and mobility.',
    description: `Repetitive strain injuries, lifting accidents, and workplace ergonomics issues are common sources of chronic pain for Toledo workers. We treat work-related injuries with a focus on healing, mobility, and preventing re-injury.

We work with workers compensation insurance and develop care plans that address both immediate pain relief and long-term functional recovery—so you can return to work with confidence.`,
    relatedServices: ['chiropractic', 'electrical-muscle-stimulation'],
  },
  {
    slug: 'fertility',
    name: 'Fertility',
    shortDescription:
      'Adjustments help improve nervous system function, key to reproductive health.',
    description: `Chiropractic care can play a supportive role in reproductive health by optimizing nervous system function—a key factor in fertility. Spinal misalignments may interfere with the communication between your brain and reproductive organs.

Dr. Jared provides gentle, holistic chiropractic support for patients on their fertility journey in the Toledo area. We work alongside your existing medical team and take a whole-body approach to support your reproductive wellness goals.`,
    relatedServices: ['chiropractic', 'acupuncture', 'fertility'],
  },
] as const;

export type Condition = (typeof conditions)[number];
