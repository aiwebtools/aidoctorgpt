/**
 * Single source of truth for indexable site content.
 * Feeds: routes, on-site search index, and the sitemap generator.
 * Keep this file free of React/browser imports — the sitemap script imports it in Node.
 */

export const SITE_URL = 'https://aidoctorgpt.lovable.app';

export type LaunchKind = 'INSITE version' | 'CHATGPT version' | 'EXTERNAL WEB APP' | 'EXTERNAL WEBSITE';

export interface LaunchLink {
  label: string;
  kind: LaunchKind;
  /** Internal route (starts with "/") or absolute external URL. */
  href: string;
  /** Play the Medicus sound instead of the general click sound. */
  medicusSound?: boolean;
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ContentPage {
  slug: string;
  type: 'tool' | 'topic';
  title: string;
  /** H1 shown on the page. */
  heading: string;
  /** Meta description + search result snippet. */
  summary: string;
  keywords: string[];
  intro: string;
  sections: ContentSection[];
  links: LaunchLink[];
}

export const TOOL_PAGES: ContentPage[] = [
  {
    slug: 'medicus-ai-doctor-gpt',
    type: 'tool',
    title: 'Medicus — The Personal AI Doctor GPT',
    heading: 'Medicus — The Personal AI Doctor GPT',
    summary:
      'Medicus is the personal AI Doctor GPT: describe your symptoms and get a clear explanation, likely causes, self-care steps, and the warning signs that mean you should seek care now.',
    keywords: [
      'doctor gpt',
      'medical gpt',
      'health gpt',
      'medicus',
      'ai doctor',
      'free ai doctor',
      'symptom checker',
      'ai medical advice',
    ],
    intro:
      'Medicus is the personal AI Doctor GPT at the heart of this site. Tell it what you are feeling — how long, how bad, what makes it better or worse — and it works through your symptoms the way a careful clinician would: questions first, then a plain-language explanation of what is most likely going on and what to do about it.',
    sections: [
      {
        heading: 'What Medicus does',
        paragraphs: [
          'Medicus takes your age, sex, existing conditions and medications into account before it answers, and it asks follow-up questions when something important is missing. It explains conditions, medications, dosing ranges, side effects and interactions in language anyone can follow.',
        ],
        bullets: [
          'Symptom analysis with likely explanations, ranked most to least probable',
          'Both pharmacy-counter and holistic at-home options for treatment',
          'Photo analysis of rashes, injuries, swelling and skin changes',
          'Reads uploaded lab results, blood work and imaging reports and explains every value',
          'Clear red-flag list: the exact signs that mean go to emergency care now',
        ],
      },
      {
        heading: 'Two ways to use Medicus',
        paragraphs: [
          'The in-site version runs right here on this website — no account, no app store, with photo and document uploads built in. The ChatGPT version is the original custom GPT hosted on ChatGPT and needs a ChatGPT account. Both follow the same medical reasoning instructions.',
          'If the in-site version is busy because community credits for the day are used up, the site offers you the ChatGPT version instead so you are never left without an answer.',
        ],
      },
      {
        heading: 'Who it is for',
        paragraphs: [
          'Medicus was written for people who cannot easily reach traditional medical care — no insurance, no clinic nearby, no appointment for weeks — and who still need detailed, practical guidance. It is informational and educational only, and it will always tell you when a situation needs a real doctor rather than a chat window.',
        ],
      },
    ],
    links: [
      { label: 'Doctor GPT (INSITE version)', kind: 'INSITE version', href: '/doctor-gpt' },
      {
        label: 'Medicus (CHATGPT version)',
        kind: 'CHATGPT version',
        href: 'https://chatgpt.com/g/g-69c4da4473b0819185462889b7348a28-medicus-wellcheck-gpt',
        medicusSound: true,
      },
    ],
  },
  {
    slug: 'dental-gpt',
    type: 'tool',
    title: 'Dental GPT — AI Dentist for Tooth and Gum Problems',
    heading: 'Dental GPT — AI Help for Teeth and Gums',
    summary:
      'Dental GPT explains toothaches, gum pain, abscesses, chipped teeth and sensitivity, with at-home relief you can use tonight and the signs that mean you need a dentist urgently.',
    keywords: ['dental gpt', 'ai dentist', 'toothache help', 'gum pain', 'dental ai', 'tooth abscess advice'],
    intro:
      'Dental pain has a way of arriving on a Friday night. Dental GPT is the oral-health specialist of the suite: it works out what kind of tooth or gum problem you are describing, what is causing it, and what you can safely do until you can be seen.',
    sections: [
      {
        heading: 'What it covers',
        paragraphs: [
          'Dental GPT handles everyday oral problems and emergencies alike, and it is direct about which is which.',
        ],
        bullets: [
          'Toothache, sensitivity to hot and cold, and cracked or chipped teeth',
          'Bleeding, swollen or receding gums and gum disease',
          'Abscesses and infections — including when swelling becomes dangerous',
          'Wisdom teeth, braces discomfort, lost fillings and crowns',
          'Whitening, daily care, and preventing the next problem',
        ],
      },
      {
        heading: 'Emergency guidance',
        paragraphs: [
          'Facial swelling, fever with tooth pain, or trouble swallowing are not wait-until-Monday problems. Dental GPT flags these clearly and tells you to get emergency care instead of home remedies.',
        ],
      },
    ],
    links: [
      {
        label: 'Dental GPT (CHATGPT version)',
        kind: 'CHATGPT version',
        href: 'https://chatgpt.com/g/g-67cbcbcf3a38819183974f2d062d5d7f-dental-gpt-expert',
      },
    ],
  },
  {
    slug: 'petcare-veterinarian-gpt',
    type: 'tool',
    title: 'PetCare GPT — AI Veterinarian for Dogs, Cats and More',
    heading: 'PetCare GPT — Your AI Veterinarian',
    summary:
      'PetCare GPT is an AI veterinarian for dogs, cats and other pets: symptoms, poisoning risks, dosing questions, behaviour changes and when an animal needs an emergency vet.',
    keywords: [
      'veterinarian gpt',
      'petcare gpt',
      'ai vet',
      'dog symptoms ai',
      'cat health ai',
      'pet poison help',
    ],
    intro:
      'Pets cannot tell you where it hurts. PetCare GPT reads the signs you can see — appetite, energy, breathing, stool, limping, scratching — and helps you work out how worried to be and what to do next.',
    sections: [
      {
        heading: 'What it helps with',
        paragraphs: ['A working AI veterinary assistant for the questions that come up between vet visits.'],
        bullets: [
          'Vomiting, diarrhoea, loss of appetite and lethargy',
          'Skin, coat, ear and eye problems',
          'Limping, injuries and suspected fractures',
          'Ate something it should not have — chocolate, grapes, medication, plants',
          'Behaviour changes, anxiety and senior-pet care',
        ],
      },
      {
        heading: 'Emergencies come first',
        paragraphs: [
          'Bloated abdomen, collapse, laboured breathing, suspected poisoning and straining to urinate are true emergencies. PetCare GPT says so immediately rather than offering home care.',
        ],
      },
    ],
    links: [
      {
        label: 'PetCare / Veterinarian GPT (EXTERNAL WEB APP)',
        kind: 'EXTERNAL WEB APP',
        href: 'https://petcaregpt.lovable.app/',
      },
    ],
  },
  {
    slug: 'mental-wellness-gpt',
    type: 'tool',
    title: 'Mental Wellness GPT — AI Support for Stress, Anxiety and Sleep',
    heading: 'Mental Wellness GPT — A Calm Place to Think',
    summary:
      'Mental Wellness GPT offers private, judgement-free support for stress, anxiety, low mood, burnout and sleep, with grounding techniques and crisis guidance when it matters.',
    keywords: [
      'mental wellness gpt',
      'ai therapy chat',
      'anxiety help ai',
      'stress support',
      'ai mental health',
      'sleep problems help',
    ],
    intro:
      'Mental Wellness GPT is a private space to put what you are feeling into words. It listens, reflects it back clearly, and offers practical techniques rather than platitudes.',
    sections: [
      {
        heading: 'What it offers',
        paragraphs: ['Support between appointments, or when there are no appointments to be had.'],
        bullets: [
          'Talking through anxiety, low mood, grief and burnout',
          'Grounding, breathing and cognitive techniques you can use in the moment',
          'Sleep routines and habits that actually hold up',
          'Preparing for a hard conversation or a doctor visit',
          'Understanding what therapy options exist and how to access them',
        ],
      },
      {
        heading: 'In a crisis',
        paragraphs: [
          'This is not a crisis service. If you are thinking about harming yourself, contact your local emergency number or a suicide prevention line right now — in the US, call or text 988. Mental Wellness GPT will always point you there first.',
        ],
      },
    ],
    links: [
      {
        label: 'Mental Wellness GPT (EXTERNAL WEB APP)',
        kind: 'EXTERNAL WEB APP',
        href: 'https://mentalwellnessgpt.lovable.app/',
      },
    ],
  },
  {
    slug: 'apothecary-gpt',
    type: 'tool',
    title: 'Apothecary GPT — Lost Homeopathic Remedies and Home Formulations',
    heading: 'Apothecary GPT — The Old Remedies, Explained',
    summary:
      'Apothecary GPT recovers traditional homeopathic remedies and at-home medication formulations, explaining ingredients, preparation, dosing and safety in modern terms.',
    keywords: [
      'apothecary gpt',
      'homeopathic remedies',
      'herbal medicine ai',
      'home remedies',
      'natural medicine gpt',
      'traditional remedies',
    ],
    intro:
      'Before the pharmacy there was the apothecary. Apothecary GPT specialises in the remedies that knowledge nearly lost — herbal preparations, tinctures, poultices and home formulations — and explains them with modern safety sense attached.',
    sections: [
      {
        heading: 'What it knows',
        paragraphs: [
          'Apothecary GPT treats traditional medicine seriously and honestly: what a remedy was used for, what is actually in it, how it was prepared, and what the evidence and risks look like today.',
        ],
        bullets: [
          'Herbal remedies and their historical and modern uses',
          'Tinctures, salves, teas, syrups and poultices, step by step',
          'Ingredient sourcing, potency and shelf life',
          'Interactions between herbs and prescription medication',
          'Which traditional remedies are genuinely useful and which are not worth the risk',
        ],
      },
      {
        heading: 'Safety first',
        paragraphs: [
          'Natural does not mean harmless. Dose matters, purity matters, and some herbs interact badly with prescription medicines. Apothecary GPT flags those interactions rather than glossing over them.',
        ],
      },
    ],
    links: [
      {
        label: 'Apothecary GPT (CHATGPT version)',
        kind: 'CHATGPT version',
        href: 'https://chatgpt.com/g/g-68c9e33310148191ae3df594ec4012dd-apothecary-gpt',
      },
    ],
  },
];

export const TOPIC_PAGES: ContentPage[] = [
  {
    slug: 'what-is-doctor-gpt',
    type: 'topic',
    title: 'What Is Doctor GPT? A Plain-English Explanation',
    heading: 'What Is Doctor GPT?',
    summary:
      'Doctor GPT is an AI you can describe symptoms to and get a structured medical explanation from. Here is exactly what it does, what it cannot do, and how to get a useful answer.',
    keywords: ['what is doctor gpt', 'doctor gpt explained', 'medical gpt', 'health gpt', 'ai doctor meaning'],
    intro:
      'Doctor GPT is a medical AI assistant: you describe your symptoms in ordinary words, and it responds the way a thorough clinician would — clarifying questions first, then likely explanations, treatment options and the warning signs that change the plan.',
    sections: [
      {
        heading: 'How it is different from searching the internet',
        paragraphs: [
          'A search engine returns pages written for everyone. Doctor GPT answers for you specifically: your age, your history, your medications, the exact pattern of your symptoms. It weighs those together instead of handing you the worst-case article at the top of the results.',
          'It also holds a conversation. If your first description is vague, it asks what it needs rather than guessing.',
        ],
      },
      {
        heading: 'What it can do',
        paragraphs: ['Used well, Doctor GPT does most of what a good pre-appointment conversation does.'],
        bullets: [
          'Explain what your symptoms most likely mean and why',
          'Describe treatments — both pharmaceutical and at-home',
          'Explain a medication: purpose, dosing, side effects, interactions',
          'Read photos of injuries and rashes, and uploaded lab reports',
          'Tell you plainly when something needs urgent in-person care',
        ],
      },
      {
        heading: 'What it cannot do',
        paragraphs: [
          'It cannot examine you, order tests, prescribe, or take responsibility for your care. It is informational and educational. Anything severe, sudden, worsening, or simply frightening belongs with a real clinician.',
        ],
      },
      {
        heading: 'How to get a genuinely useful answer',
        paragraphs: [
          'Give it the detail you would give a doctor: when it started, what it feels like, what makes it better or worse, what you have already tried, your age and sex, existing conditions and every medication and supplement you take. Attach a photo if there is something to see. Vague questions get vague answers; specific ones get remarkably good ones.',
        ],
      },
    ],
    links: [
      { label: 'Doctor GPT (INSITE version)', kind: 'INSITE version', href: '/doctor-gpt' },
      { label: 'Read about Medicus', kind: 'INSITE version', href: '/tools/medicus-ai-doctor-gpt' },
    ],
  },
  {
    slug: 'free-ai-symptom-checker',
    type: 'topic',
    title: 'Free AI Symptom Checker — How to Use One Properly',
    heading: 'Using a Free AI Symptom Checker',
    summary:
      'A free AI symptom checker is only as good as what you tell it. How to describe symptoms, what a good answer looks like, and the red flags that mean stop typing and get care.',
    keywords: [
      'free ai symptom checker',
      'symptom checker',
      'ai symptom analysis',
      'check symptoms online free',
      'online doctor free',
    ],
    intro:
      'Symptom checkers have a bad reputation because the old ones were checklists that concluded everything was cancer. An AI symptom checker works differently: it reasons over the whole picture you give it, asks what is missing, and tells you how urgent the situation actually is.',
    sections: [
      {
        heading: 'Describe symptoms the way clinicians do',
        paragraphs: ['Work through these and your answer improves dramatically.'],
        bullets: [
          'Where exactly is it, and does it move anywhere else?',
          'When did it start, and is it constant or coming in waves?',
          'What does it feel like — sharp, dull, burning, crushing, itching?',
          'How bad is it out of ten, and what makes it better or worse?',
          'What else is happening — fever, rash, nausea, breathlessness, weight change?',
          'Your age, sex, conditions, medications, allergies, recent travel',
        ],
      },
      {
        heading: 'Stop and get emergency care for these',
        paragraphs: [
          'No symptom checker, AI or otherwise, should be used for these. Call emergency services.',
        ],
        bullets: [
          'Chest pain or pressure, especially with sweating, nausea or arm and jaw pain',
          'Trouble breathing, or lips and face turning blue',
          'Sudden weakness on one side, face droop, confusion or slurred speech',
          'Bleeding that will not stop, or vomiting blood',
          'A severe sudden headache unlike any before',
          'Stiff neck with fever, or a rash that does not fade under pressure',
          'Thoughts of harming yourself',
        ],
      },
      {
        heading: 'What a good answer looks like',
        paragraphs: [
          'It should explain the most likely cause and why, mention what else it could be, give you something practical to do, and state the specific signs that would change the advice. If an answer gives you a label with no reasoning and no red flags, ask it to go further.',
        ],
      },
    ],
    links: [{ label: 'Check symptoms with Doctor GPT (INSITE version)', kind: 'INSITE version', href: '/doctor-gpt' }],
  },
  {
    slug: 'ai-medical-advice-online',
    type: 'topic',
    title: 'AI Medical Advice Online — How Much Can You Trust It?',
    heading: 'AI Medical Advice Online: How Far Can You Trust It?',
    summary:
      'Where AI medical advice is genuinely strong, where it fails, and how to use it safely when a clinic visit is not realistic.',
    keywords: [
      'ai medical advice',
      'online medical advice free',
      'is ai medical advice safe',
      'ai health advice',
      'ask a doctor online free',
    ],
    intro:
      'Millions of people now ask an AI about their health before they ask anyone else, usually because it is free, immediate and does not judge. That is reasonable — as long as you know where the line is.',
    sections: [
      {
        heading: 'Where AI is genuinely strong',
        paragraphs: ['On explanation and preparation, AI is often better than a rushed appointment.'],
        bullets: [
          'Explaining a diagnosis or a test result in words you understand',
          'Medication questions: what it does, how it is dosed, what it clashes with',
          'Sorting "keep an eye on this" from "get this looked at"',
          'Everyday complaints — colds, minor wounds, rashes, sprains, indigestion',
          'Helping you prepare the right questions for a real appointment',
        ],
      },
      {
        heading: 'Where it falls short',
        paragraphs: [
          'It cannot touch, listen, or test. It cannot see the pallor you did not mention. It can be confidently wrong about rare conditions, and it does not know anything about you that you did not type. For anything severe, progressive, or affecting a baby, an elderly person or a pregnancy, treat AI as background reading and nothing more.',
        ],
      },
      {
        heading: 'Using it safely',
        paragraphs: [
          'Be complete and honest in what you tell it. Never stop or change a prescribed medication on an AI answer alone. Take its red-flag warnings seriously — when it tells you to be seen, be seen. And treat every answer as informational guidance, not a diagnosis.',
        ],
      },
    ],
    links: [{ label: 'Ask Doctor GPT (INSITE version)', kind: 'INSITE version', href: '/doctor-gpt' }],
  },
  {
    slug: 'can-ai-replace-a-doctor',
    type: 'topic',
    title: 'Can AI Replace a Doctor? An Honest Answer',
    heading: 'Can AI Replace a Doctor?',
    summary:
      'No — and here is precisely why, plus the real role AI does play for people with little or no access to medical care.',
    keywords: [
      'can ai replace doctors',
      'ai vs doctor',
      'ai doctor limitations',
      'is ai doctor safe',
      'future of ai medicine',
    ],
    intro:
      'The short answer is no. The useful answer is about what AI does instead, and why that still matters enormously to people without easy access to care.',
    sections: [
      {
        heading: 'What a doctor does that AI cannot',
        paragraphs: ['Medicine is not only information retrieval.'],
        bullets: [
          'Physical examination — listening, palpating, actually seeing you',
          'Ordering and interpreting tests within a full clinical picture',
          'Prescribing, procedures, referrals and follow-up',
          'Legal and professional responsibility for your care',
          'Noticing what you did not think to mention',
        ],
      },
      {
        heading: 'What AI adds',
        paragraphs: [
          'Unlimited patience, availability at three in the morning, no cost, no waiting room and no embarrassment. For someone with no insurance, no nearby clinic or a six-week wait, structured, careful guidance is not competing with a doctor — it is competing with nothing at all.',
        ],
      },
      {
        heading: 'The sensible way to think about it',
        paragraphs: [
          'Treat AI as the extremely well-read friend who happens to know medicine: worth listening to, worth asking questions of, and never the person who signs off on your treatment. The best outcome is usually AI first to understand the situation, a clinician next to act on it.',
        ],
      },
    ],
    links: [
      { label: 'Try Doctor GPT (INSITE version)', kind: 'INSITE version', href: '/doctor-gpt' },
      { label: 'Amazon Clinic (EXTERNAL WEBSITE)', kind: 'EXTERNAL WEBSITE', href: 'https://clinic.amazon.com' },
      { label: 'One Medical (EXTERNAL WEBSITE)', kind: 'EXTERNAL WEBSITE', href: 'https://health.amazon.com/onemedical' },
    ],
  },
  {
    slug: 'how-to-read-your-lab-results',
    type: 'topic',
    title: 'How to Read Your Lab Results and Blood Work',
    heading: 'How to Read Your Lab Results',
    summary:
      'What the common blood test values mean, why "out of range" is not automatically bad news, and how to have an AI read your report with you.',
    keywords: [
      'how to read lab results',
      'blood work explained',
      'understand blood test',
      'lab results meaning',
      'cbc explained',
      'ai read lab results',
    ],
    intro:
      'Lab reports are written for clinicians, not patients: abbreviations, reference ranges and a flag in the margin. Here is how to read yours without spiralling.',
    sections: [
      {
        heading: 'The panels you will usually see',
        paragraphs: ['Most routine blood work is one or more of these.'],
        bullets: [
          'CBC — red cells, white cells and platelets: anaemia, infection, clotting',
          'Metabolic panel — glucose, electrolytes, kidney and liver markers',
          'Lipid panel — cholesterol and triglycerides, for heart risk',
          'Thyroid panel — TSH, T3 and T4, for energy, weight and mood symptoms',
          'HbA1c — your average blood sugar over roughly three months',
          'Inflammation markers — CRP and ESR, non-specific signs of inflammation',
        ],
      },
      {
        heading: 'Reference ranges are not verdicts',
        paragraphs: [
          'A range covers about 95% of healthy people, which means roughly one healthy person in twenty falls outside it on any given test. A value slightly outside the range is common and often meaningless. What matters is how far outside, whether several related values moved together, and how it compares to your own previous results.',
        ],
      },
      {
        heading: 'Let the AI read it with you',
        paragraphs: [
          'The in-site Doctor GPT accepts a photo or a PDF of your report. It will walk the values one by one, explain each in plain language, flag what is genuinely out of range, connect it to the symptoms you describe, and tell you which results are worth raising with your doctor. It is explanation, not diagnosis — the ordering clinician still interprets your results.',
        ],
      },
    ],
    links: [{ label: 'Upload your results to Doctor GPT (INSITE version)', kind: 'INSITE version', href: '/doctor-gpt' }],
  },
  {
    slug: 'home-remedies-and-at-home-medication',
    type: 'topic',
    title: 'Home Remedies and At-Home Medication Basics',
    heading: 'Home Remedies and At-Home Medication Basics',
    summary:
      'Which home remedies are actually worth using, how to stock a real home medicine kit, and the safety rules that keep at-home treatment from going wrong.',
    keywords: [
      'home remedies',
      'at home medication',
      'home medicine kit',
      'natural remedies that work',
      'treat illness at home',
      'no prescription care',
    ],
    intro:
      'When care is expensive or far away, home treatment stops being a lifestyle choice and becomes the plan. Doing it well means knowing which remedies hold up, and knowing exactly where home care ends.',
    sections: [
      {
        heading: 'Remedies with real support behind them',
        paragraphs: ['These are widely accepted, low-risk and genuinely useful.'],
        bullets: [
          'Oral rehydration solution for vomiting and diarrhoea — the single highest-value home treatment there is',
          'Honey for cough in anyone over one year old',
          'Salt-water gargles and steam for sore throat and congestion',
          'Ice for the first 48 hours of an injury, then gentle heat',
          'Clean running water and a covered dressing for minor wounds',
          'Ginger for nausea; fibre and fluids for constipation',
        ],
      },
      {
        heading: 'A home kit worth having',
        paragraphs: ['Assemble this before you need it, not during.'],
        bullets: [
          'Paracetamol/acetaminophen and ibuprofen, with a written dose chart',
          'Oral rehydration sachets',
          'Antihistamine, antiseptic, hydrocortisone cream and antifungal cream',
          'Bandages, gauze, tape, tweezers and scissors',
          'Digital thermometer, and a blood pressure cuff if anyone at home needs one',
        ],
      },
      {
        heading: 'Rules that keep home care safe',
        paragraphs: [
          'Dose by weight for children, never by guess. Never double up two products containing the same drug — paracetamol hides inside many cold remedies, and overdose is silent until the liver damage is done. Never take someone else\'s prescription. Check herbs against your prescriptions for interactions. And set yourself a limit in advance: if it is not clearly improving in the time you expect, escalate to a clinician.',
        ],
      },
    ],
    links: [
      { label: 'Apothecary GPT (CHATGPT version)', kind: 'CHATGPT version', href: 'https://chatgpt.com/g/g-68c9e33310148191ae3df594ec4012dd-apothecary-gpt' },
      { label: 'Ask Doctor GPT (INSITE version)', kind: 'INSITE version', href: '/doctor-gpt' },
    ],
  },
];

export const ALL_PAGES: ContentPage[] = [...TOOL_PAGES, ...TOPIC_PAGES];

export const pagePath = (page: ContentPage) =>
  page.type === 'tool' ? `/tools/${page.slug}` : `/learn/${page.slug}`;

export const findPage = (type: ContentPage['type'], slug: string) =>
  ALL_PAGES.find((page) => page.type === type && page.slug === slug);

/** Full searchable text for one page. */
export const pageBodyText = (page: ContentPage) =>
  [
    page.intro,
    ...page.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])]),
  ].join(' ');
