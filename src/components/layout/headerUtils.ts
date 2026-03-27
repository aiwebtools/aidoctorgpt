
const MEDICUS_URL = 'https://chatgpt.com/g/g-69c4da4473b0819185462889b7348a28-medicus-wellcheck-gpt';
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
  } catch {}
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
  openWithSound(MEDICUS_URL, MEDICUS_SOUND);
};

export const handleVetGPTRedirect = () => {
  openWithSound('https://petcaregpt.lovable.app/', GENERAL_SOUND);
};

export const handleDentalGPTRedirect = () => {
  openWithSound('https://chatgpt.com/g/g-67cbcbcf3a38819183974f2d062d5d7f-dental-gpt-expert', GENERAL_SOUND);
};

export const handleMentalWellnessGPTRedirect = () => {
  openWithSound('https://mentalwellnessgpt.lovable.app/', GENERAL_SOUND);
};

export const handleApothecaryGPTRedirect = () => {
  openWithSound('https://chatgpt.com/g/g-68c9e33310148191ae3df594ec4012dd-apothecary-gpt', GENERAL_SOUND);
};

export const handleAmazonClinicRedirect = () => {
  openWithSound('https://clinic.amazon.com', GENERAL_SOUND);
};

export const handleOneMedicalRedirect = () => {
  openWithSound('https://health.amazon.com/onemedical', GENERAL_SOUND);
};

export const handleAntibioticsRedirect = () => {
  openWithSound('https://ozio.com', GENERAL_SOUND);
};

export const handleMoreAIToolsRedirect = () => {
  openWithSound('https://aiwebtools.lovable.app/?via=aiwebtools', GENERAL_SOUND);
};
