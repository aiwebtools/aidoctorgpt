import { TOOL_URLS } from '@/components/layout/headerUtils';

export type InSiteToolId = 'doctor' | 'dental' | 'vet' | 'mental' | 'apothecary';

export interface InSiteTool {
  id: InSiteToolId;
  name: string;
  path: string;
  greeting: string;
  intro: string;
  placeholder: string;
  suggestions: string[];
  externalLabel: string;
  externalUrl: string;
  medicusSound?: boolean;
}

export const IN_SITE_TOOLS: Record<InSiteToolId, InSiteTool> = {
  doctor: {
    id: 'doctor',
    name: 'DOCTOR GPT',
    path: '/doctor-gpt',
    greeting: 'I am DOCTOR GPT. How can I assist you today?',
    intro:
      'Describe your symptoms — include your age, sex, height, weight, and any pre-existing conditions. You can attach photos or lab results (PDF) for analysis.',
    placeholder: 'Describe your symptoms, age, sex, and medical history...',
    suggestions: [
      "I've had a sore throat and fever for 3 days",
      'What can I do for a persistent tension headache?',
      'Natural and pharmaceutical options for acid reflux',
      'Please review my lab results (attach a PDF or photo)',
    ],
    externalLabel: 'Medicus (CHATGPT version)',
    externalUrl: TOOL_URLS.medicusChatGPT,
    medicusSound: true,
  },
  dental: {
    id: 'dental',
    name: 'DENTAL GPT',
    path: '/dental-gpt',
    greeting: 'I am DENTAL GPT. How can I help your smile today?',
    intro:
      'Describe your tooth, gum, or jaw problem — where it hurts, how long, and what triggers it. You can attach a photo of the area or a dental X-ray.',
    placeholder: 'Describe your tooth or gum problem...',
    suggestions: [
      'My tooth hurts when I drink something cold',
      'My gums bleed when I brush',
      'How do I manage a toothache until I see a dentist?',
      'Can you look at this photo of my gum? (attach a photo)',
    ],
    externalLabel: 'Dental GPT (CHATGPT version)',
    externalUrl: TOOL_URLS.dentalChatGPT,
  },
  vet: {
    id: 'vet',
    name: 'PETCARE GPT',
    path: '/petcare-gpt',
    greeting: 'I am PETCARE GPT. How is your pet doing today?',
    intro:
      "Tell me your pet's species, breed, age, weight, and symptoms. You can attach a photo of a wound, rash, or anything that worries you.",
    placeholder: "Describe your pet's species, age, and symptoms...",
    suggestions: [
      'My dog is vomiting and not eating',
      'My cat keeps scratching its ears',
      'Is chocolate dangerous for my dog?',
      'What is this lump on my pet? (attach a photo)',
    ],
    externalLabel: 'PetCare GPT (EXTERNAL WEB APP)',
    externalUrl: TOOL_URLS.veterinarianWebApp,
  },
  mental: {
    id: 'mental',
    name: 'MENTAL WELLNESS GPT',
    path: '/mental-wellness-gpt',
    greeting: "I am MENTAL WELLNESS GPT. I'm here to listen — what's on your mind?",
    intro:
      "Share what you're feeling — stress, anxiety, low mood, sleep, or relationships. This is a private, judgment-free space.",
    placeholder: "Share what's on your mind...",
    suggestions: [
      "I've been feeling anxious and can't sleep",
      'How can I handle stress at work?',
      'Give me a quick breathing exercise',
      "I've been feeling low for weeks",
    ],
    externalLabel: 'Mental Wellness GPT (EXTERNAL WEB APP)',
    externalUrl: TOOL_URLS.mentalWellnessWebApp,
  },
  apothecary: {
    id: 'apothecary',
    name: 'APOTHECARY GPT',
    path: '/apothecary-gpt',
    greeting: 'I am APOTHECARY GPT. Which remedy shall we prepare today?',
    intro:
      'Ask about traditional, herbal, and homeopathic remedies or at-home formulations — tell me the ailment and what you have on hand.',
    placeholder: 'Describe the ailment or remedy you want to make...',
    suggestions: [
      'Make a natural cough syrup from kitchen ingredients',
      'Herbal remedies for better sleep',
      'How do I make a healing salve for minor cuts?',
      'Old-time remedies for an upset stomach',
    ],
    externalLabel: 'Apothecary GPT (CHATGPT version)',
    externalUrl: TOOL_URLS.apothecaryChatGPT,
  },
};

export const IN_SITE_TOOL_LIST = Object.values(IN_SITE_TOOLS);
