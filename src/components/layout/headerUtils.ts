
export const TOOL_URLS = {
  medicusChatGPT: 'https://chatgpt.com/g/g-69c4da4473b0819185462889b7348a28-medicus-wellcheck-gpt',
  dentalChatGPT: 'https://chatgpt.com/g/g-67cbcbcf3a38819183974f2d062d5d7f-dental-gpt-expert',
  veterinarianWebApp: 'https://petcaregpt.lovable.app/',
  mentalWellnessWebApp: 'https://mentalwellnessgpt.lovable.app/',
  apothecaryChatGPT: 'https://chatgpt.com/g/g-68c9e33310148191ae3df594ec4012dd-apothecary-gpt',
  amazonClinic: 'https://clinic.amazon.com',
  oneMedical: 'https://health.amazon.com/onemedical',
  antibiotics: 'https://ozio.com',
  moreAiTools: 'https://aiwebtools.lovable.app/?via=aiwebtools',
  openSourcePrompt: 'https://docs.google.com/document/d/e/2PACX-1vSoix5D-3HfYurJZdgqjQ7n2y6UuwRlB_HqtA1yDfgkQ6Wk6djLrVDwjD-hIBSlnNHkBCWgeF2rmXlK/pub',
} as const;
const MEDICUS_SOUND = '/sounds/medicus-click.mp3';
const GENERAL_SOUND = '/sounds/general-click.mp3';

const audioCache: Record<string, HTMLAudioElement> = {};

const getCachedAudio = (soundPath: string) => {
  if (!audioCache[soundPath]) {
    const audio = new Audio(soundPath);
    audio.preload = 'auto';
    audio.volume = 0.95;
    audioCache[soundPath] = audio;
  }
  return audioCache[soundPath];
};

const warmupSounds = () => {
  getCachedAudio(MEDICUS_SOUND).load();
  getCachedAudio(GENERAL_SOUND).load();
};

if (typeof window !== 'undefined') {
  warmupSounds();
  window.addEventListener('pointerdown', warmupSounds, { once: true, passive: true });
  window.addEventListener('touchstart', warmupSounds, { once: true, passive: true });
}

const playClickSound = (soundPath: string) => {
  try {
    const audio = getCachedAudio(soundPath);
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch {
    // Audio may be blocked by a browser setting; navigation should still continue.
  }
};

const openWithSound = (url: string, soundPath: string) => {
  const popup = window.open('', '_blank', 'noopener,noreferrer');
  playClickSound(soundPath);

  if (popup) {
    popup.location.replace(url);
    return;
  }

  window.open(url, '_blank', 'noopener,noreferrer');
};

export const playMedicusSound = () => playClickSound(MEDICUS_SOUND);
export const playGeneralSound = () => playClickSound(GENERAL_SOUND);

export const openWithMedicusSound = (url: string) => openWithSound(url, MEDICUS_SOUND);
export const openWithGeneralSound = (url: string) => openWithSound(url, GENERAL_SOUND);

export const handleChatRedirect = () => {
  openWithSound(TOOL_URLS.medicusChatGPT, MEDICUS_SOUND);
};

export const handleVetGPTRedirect = () => {
  openWithSound(TOOL_URLS.veterinarianWebApp, GENERAL_SOUND);
};

export const handleDentalGPTRedirect = () => {
  openWithSound(TOOL_URLS.dentalChatGPT, GENERAL_SOUND);
};

export const handleMentalWellnessGPTRedirect = () => {
  openWithSound(TOOL_URLS.mentalWellnessWebApp, GENERAL_SOUND);
};

export const handleApothecaryGPTRedirect = () => {
  openWithSound(TOOL_URLS.apothecaryChatGPT, GENERAL_SOUND);
};

export const handleAmazonClinicRedirect = () => {
  openWithSound(TOOL_URLS.amazonClinic, GENERAL_SOUND);
};

export const handleOneMedicalRedirect = () => {
  openWithSound(TOOL_URLS.oneMedical, GENERAL_SOUND);
};

export const handleAntibioticsRedirect = () => {
  openWithSound(TOOL_URLS.antibiotics, GENERAL_SOUND);
};

export const handleMoreAIToolsRedirect = () => {
  openWithSound(TOOL_URLS.moreAiTools, GENERAL_SOUND);
};
