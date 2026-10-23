import React from 'react';
import { MessageCircle, Calculator, ShieldCheck, Clock, Award, Hammer, ArrowRight, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/interiorsData';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onOpenWhatsApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote, onOpenWhatsApp }) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Hero Image with Measured Scrim */}
      <div className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[620px] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/mohinz_hero_interior_1792770679759.jpg"
            alt="Mohinz Interiors Luxury Living Room Showcase"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Measured Scrim for WCAG AA Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
          <div className="absolute inset-0 bg-[#5D4037]/20 mix-blend-multiply" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl space-y-6">
            
            {/* Editorial Kicker without pill badges */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wider uppercase text-[#D4AF37]">
              <span>Kandigai, Chennai</span>
              <span aria-hidden="true">·</span>
              <span>12+ Years Craftsmanship</span>
              <span aria-hidden="true">·</span>
              <span>ISO Grade Joinery</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.15] text-balance">
              MOHINZ INTERIORS
            </h1>

            {/* Core Specializations */}
            <p className="text-base sm:text-xl text-neutral-200 font-medium tracking-wide">
              Wood Works <span className="text-[#D4AF37]">•</span> Kitchen Works <span className="text-[#D4AF37]">•</span> Flooring <span className="text-[#D4AF37]">•</span> Wall Works
            </p>

            <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
              We engineer luxury living spaces, modular kitchens, and high-productivity corporate offices across Chennai with precision German joinery, 45-day guaranteed delivery, and transparent pricing.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#c49f2e] text-[#2D2422] font-semibold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <Calculator className="w-4 h-4 text-[#2D2422]" />
                <span>Get Instant Quote</span>
              </button>

              <button
                onClick={onOpenWhatsApp}
                className="px-6 py-3.5 border-2 border-white/90 hover:border-white text-white hover:bg-white/10 font-semibold text-sm sm:text-base rounded-lg backdrop-blur-xs transition-all flex items-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>WhatsApp</span>
              </button>

              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="px-4 py-3 text-neutral-200 hover:text-white font-medium text-sm flex items-center gap-2 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Abrar: <span className="font-mono tabular-nums">{BRAND_INFO.phone}</span></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Proof Strip */}
      <div className="bg-[#5D4037] text-white py-6 border-y border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            
            <div className="flex items-center gap-3.5 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                <Hammer className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-white">450+</p>
                <p className="text-xs text-neutral-300">Projects Delivered</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-white">10-Year</p>
                <p className="text-xs text-neutral-300">Material Warranty</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-white">45 Days</p>
                <p className="text-xs text-neutral-300">Guaranteed Handover</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-white">100%</p>
                <p className="text-xs text-neutral-300">Factory Joinery Finish</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
