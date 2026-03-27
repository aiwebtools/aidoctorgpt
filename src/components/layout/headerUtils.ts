
const playSound = (file: string) => {
  try { const a = new Audio(file); a.volume = 0.7; a.play().catch(() => {}); } catch {}
};

export const playMedicusSound = () => playSound('/sounds/medicus-click.mp3');
export const playGeneralSound = () => playSound('/sounds/general-click.mp3');

export const handleChatRedirect = () => {
  playMedicusSound();
  window.open('https://chatgpt.com/g/g-69c4da4473b0819185462889b7348a28-medicus-wellcheck-gpt', '_blank');
};

export const handleVetGPTRedirect = () => {
  playGeneralSound();
  window.open('https://petcaregpt.lovable.app/', '_blank');
};

export const handleDentalGPTRedirect = () => {
  playGeneralSound();
  window.open('https://chatgpt.com/g/g-67cbcbcf3a38819183974f2d062d5d7f-dental-gpt-expert', '_blank');
};

export const handleMentalWellnessGPTRedirect = () => {
  playGeneralSound();
  window.open('https://mentalwellnessgpt.lovable.app/', '_blank');
};

export const handleApothecaryGPTRedirect = () => {
  playGeneralSound();
  window.open('https://chatgpt.com/g/g-68c9e33310148191ae3df594ec4012dd-apothecary-gpt', '_blank');
};

export const handleAmazonClinicRedirect = () => {
  playGeneralSound();
  window.open('https://clinic.amazon.com', '_blank');
};

export const handleOneMedicalRedirect = () => {
  playGeneralSound();
  window.open('https://health.amazon.com/onemedical', '_blank');
};

export const handleAntibioticsRedirect = () => {
  playGeneralSound();
  window.open('https://ozio.com', '_blank');
};

export const handleMoreAIToolsRedirect = () => {
  playGeneralSound();
  window.open('https://aiwebtools.lovable.app/?via=aiwebtools', '_blank');
};
