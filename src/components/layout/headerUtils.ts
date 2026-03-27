
export const playMedicusSound = () => {
  try {
    const audio = new Audio('/sounds/medicus-click.mp3');
    audio.volume = 0.7;
    audio.play().catch(() => {});
  } catch {}
};

export const handleChatRedirect = () => {
  playMedicusSound();
  window.open('https://chatgpt.com/g/g-69c4da4473b0819185462889b7348a28-medicus-wellcheck-gpt', '_blank');
};

export const handleVetGPTRedirect = () => {
  window.open('https://petcaregpt.lovable.app/', '_blank');
};

export const handleDentalGPTRedirect = () => {
  window.open('https://chatgpt.com/g/g-67cbcbcf3a38819183974f2d062d5d7f-dental-gpt-expert', '_blank');
};

export const handleMentalWellnessGPTRedirect = () => {
  window.open('https://mentalwellnessgpt.lovable.app/', '_blank');
};

export const handleApothecaryGPTRedirect = () => {
  window.open('https://chatgpt.com/g/g-68c9e33310148191ae3df594ec4012dd-apothecary-gpt', '_blank');
};

export const handleAmazonClinicRedirect = () => {
  window.open('https://clinic.amazon.com', '_blank');
};

export const handleOneMedicalRedirect = () => {
  window.open('https://health.amazon.com/onemedical', '_blank');
};

export const handleAntibioticsRedirect = () => {
  window.open('https://ozio.com', '_blank');
};

export const handleMoreAIToolsRedirect = () => {
  window.open('https://aiwebtools.lovable.app/?via=aiwebtools', '_blank');
};
