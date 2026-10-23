import React from 'react';
import { Home, Layers, Image, Calculator, PhoneCall } from 'lucide-react';
import { BRAND_INFO } from '../data/interiorsData';

interface MobileBottomNavProps {
  onOpenEstimator: () => void;
  activeSection?: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenEstimator }) => {
  const scrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <div className="grid grid-cols-5 h-16 max-w-lg mx-auto px-2">
        
        <button
          onClick={() => scrollTo('top')}
          className="flex flex-col items-center justify-center text-[10px] font-semibold text-[#5D4037] hover:text-[#D4AF37] transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4 mb-1" />
          <span>Home</span>
        </button>

        <button
          onClick={() => scrollTo('services')}
          className="flex flex-col items-center justify-center text-[10px] font-semibold text-neutral-600 hover:text-[#5D4037] transition-colors cursor-pointer"
        >
          <Layers className="w-4 h-4 mb-1" />
          <span>Services</span>
        </button>

        <button
          onClick={() => scrollTo('projects')}
          className="flex flex-col items-center justify-center text-[10px] font-semibold text-neutral-600 hover:text-[#5D4037] transition-colors cursor-pointer"
        >
          <Image className="w-4 h-4 mb-1" />
          <span>Projects</span>
        </button>

        <button
          onClick={onOpenEstimator}
          className="flex flex-col items-center justify-center text-[10px] font-semibold text-[#D4AF37] hover:text-[#5D4037] transition-colors cursor-pointer"
        >
          <Calculator className="w-4 h-4 mb-1" />
          <span>Estimate</span>
        </button>

        <a
          href={`tel:${BRAND_INFO.phone}`}
          className="flex flex-col items-center justify-center text-[10px] font-semibold text-neutral-600 hover:text-[#5D4037] transition-colors"
        >
          <PhoneCall className="w-4 h-4 mb-1 text-[#5D4037]" />
          <span>Call</span>
        </a>

      </div>
    </nav>
  );
};
