
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedButton from '../ui/AnimatedButton';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { IN_SITE_TOOL_LIST } from '@/content/inSiteTools';
import { handleChatRedirect, handleVetGPTRedirect, handleDentalGPTRedirect, handleMentalWellnessGPTRedirect, handleApothecaryGPTRedirect, handleAmazonClinicRedirect, handleOneMedicalRedirect, handleAntibioticsRedirect, handleMoreAIToolsRedirect, openWithGeneralSound, playGeneralSound, TOOL_URLS } from './headerUtils';

const NavigationMenu = () => {
  const navigate = useNavigate();

  const handleDownloadPrompt = () => {
    openWithGeneralSound(TOOL_URLS.openSourcePrompt);
  };

  return (
    <nav className="hidden lg:flex items-center flex-wrap gap-2 justify-end max-w-[75vw]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105">
            On-site AI Tools (INSITE version) ▾
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="z-[60] bg-popover">
          {IN_SITE_TOOL_LIST.map((tool) => (
            <DropdownMenuItem key={tool.id} onSelect={() => { playGeneralSound(); navigate(tool.path); }}>
              {tool.name} (INSITE version)
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <AnimatedButton 
        variant="primary" 
        size="sm"
        onClick={handleDentalGPTRedirect}
        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        Dental GPT (CHATGPT version)
      </AnimatedButton>
      <AnimatedButton 
        variant="primary" 
        size="sm"
        onClick={handleVetGPTRedirect}
        className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        Veterinarian GPT (EXTERNAL WEB APP)
      </AnimatedButton>
      <AnimatedButton 
        variant="primary" 
        size="sm"
        onClick={handleMentalWellnessGPTRedirect}
        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        Mental Wellness GPT (EXTERNAL WEB APP)
      </AnimatedButton>
      <AnimatedButton 
        variant="primary" 
        size="sm"
        onClick={handleApothecaryGPTRedirect}
        className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        Apothecary GPT (CHATGPT version)
      </AnimatedButton>
      <AnimatedButton 
        variant="secondary" 
        size="sm"
        onClick={handleDownloadPrompt}
        className="bg-black/30 border-purple-500/30 backdrop-blur-sm text-white hover:bg-black/40 hover:border-purple-500/50 hover:scale-105 transition-all duration-300"
      >
        Download Prompt (EXTERNAL DOCUMENT)
      </AnimatedButton>
      <AnimatedButton 
        variant="primary" 
        size="sm"
        onClick={handleChatRedirect}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        MEDICUS - AI Doctor (CHATGPT version)
      </AnimatedButton>
      <AnimatedButton 
        variant="secondary" 
        size="sm"
        onClick={handleAmazonClinicRedirect}
        className="bg-gradient-to-r from-orange-600/80 to-amber-600/80 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        Amazon Clinic (EXTERNAL WEBSITE)
      </AnimatedButton>
      <AnimatedButton 
        variant="secondary" 
        size="sm"
        onClick={handleOneMedicalRedirect}
        className="bg-gradient-to-r from-teal-600/80 to-cyan-600/80 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        One Medical (EXTERNAL WEBSITE)
      </AnimatedButton>
      <AnimatedButton 
        variant="primary" 
        size="sm"
        onClick={handleAntibioticsRedirect}
        className="bg-gradient-to-r from-red-600 to-rose-600 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        Buy Antibiotics (EXTERNAL WEBSITE)
      </AnimatedButton>
      <AnimatedButton 
        variant="secondary" 
        size="sm"
        onClick={handleMoreAIToolsRedirect}
        className="bg-gradient-to-r from-violet-600/80 to-purple-600/80 text-white border-none hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        More AI Tools (EXTERNAL WEBSITE)
      </AnimatedButton>
    </nav>
  );
};

export default NavigationMenu;
