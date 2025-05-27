
export const handleChatRedirect = () => {
  window.open('https://chatgpt.com/g/g-mFtK9rcS6-doctor-gpt', '_blank');
};

export const handleVetGPTRedirect = () => {
  window.open('https://petcaregpt.lovable.app/', '_blank');
};

export const handleDentalGPTRedirect = () => {
  window.open('https://chatgpt.com/g/g-67cbcbcf3a38819183974f2d062d5d7f-dental-gpt-expert', '_blank');
};

export const handleDisclaimerClick = (e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  
  // Target the comprehensive disclaimer section in the HeroSection
  setTimeout(() => {
    const disclaimerElement = document.getElementById('comprehensive-disclaimer');
    if (disclaimerElement) {
      const headerHeight = 80; // Adjust for fixed header
      const elementPosition = disclaimerElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
};
