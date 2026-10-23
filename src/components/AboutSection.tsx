import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Shield, Wrench, Ruler, Award, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/interiorsData';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'craft' | 'materials' | 'process'>('craft');

  return (
    <section className="py-20 bg-white border-b border-[#2D2422]/10" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching the prompt */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Mohinz Distinction</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#5D4037] tracking-tight">
            Crafting Elegant Spaces
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Mohinz Interiors specializes in premium interior design and execution services. We transform homes, offices, and commercial spaces with modern designs and exceptional craftsmanship.
          </p>
        </div>

        {/* 2-Column Split: Visual Narrative & Pillars */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Tabbed Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 bg-[#F8F5F2] p-8 sm:p-10 rounded-2xl border border-[#2D2422]/5">
            <div>
              {/* Functional Segmented Controls */}
              <div className="flex items-center gap-2 p-1.5 bg-white rounded-xl border border-[#2D2422]/10 max-w-md">
                <button
                  onClick={() => setActiveTab('craft')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'craft'
                      ? 'bg-[#5D4037] text-white shadow-sm'
                      : 'text-[#2D2422]/70 hover:text-[#5D4037]'
                  }`}
                >
                  Architectural Craft
                </button>
                <button
                  onClick={() => setActiveTab('materials')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'materials'
                      ? 'bg-[#5D4037] text-white shadow-sm'
                      : 'text-[#2D2422]/70 hover:text-[#5D4037]'
                  }`}
                >
                  Grade-A Materials
                </button>
                <button
                  onClick={() => setActiveTab('process')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === 'process'
                      ? 'bg-[#5D4037] text-white shadow-sm'
                      : 'text-[#2D2422]/70 hover:text-[#5D4037]'
                  }`}
                >
                  45-Day Handover
                </button>
              </div>

              {/* Dynamic Tab Content */}
              <div className="mt-8 space-y-4">
                {activeTab === 'craft' && (
                  <div className="space-y-4 text-neutral-700">
                    <h3 className="text-xl font-bold text-[#5D4037]">Precision Joinery Engineered for Longevity</h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                      Every panel, hinge, and drawer box at Mohinz Interiors is manufactured using calibrated CNC computerized machinery and hot-melt German PUR edge-banders. Unlike traditional on-site carpenters who saw wood with uneven tolerances, our modular components lock together with millimeter perfection.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-3">
                      <div className="bg-white p-4 rounded-xl border border-neutral-200">
                        <p className="text-2xl font-bold font-mono text-[#5D4037]">0.2mm</p>
                        <p className="text-xs text-neutral-500 mt-1">Laser Edge-Banding Tolerance</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-neutral-200">
                        <p className="text-2xl font-bold font-mono text-[#5D4037]">100%</p>
                        <p className="text-xs text-neutral-500 mt-1">Moisture & Termite Shielded</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'materials' && (
                  <div className="space-y-4 text-neutral-700">
                    <h3 className="text-xl font-bold text-[#5D4037]">IS:710 Marine Plywood & Authentic Hardware</h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                      We strictly avoid commercial MDF or hollow boards for core cabinetry. All kitchen carcases and wet-area woodwork are constructed using Boiling Water Proof (BWP) 710 Grade Marine Plywood with genuine Hafele, Blum, and Hettich hardware backed by manufacturer warranties.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        <span>Greenply / Century 710 Marine Grade Core</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        <span>German Blum Soft-Close Systems tested for 200,000 cycles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        <span>Quartz & Granite non-porous anti-stain surfaces</span>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'process' && (
                  <div className="space-y-4 text-neutral-700">
                    <h3 className="text-xl font-bold text-[#5D4037]">Milestone-Driven 45-Day Promise</h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                      We eliminate the stress of unending renovation delays. With 85% of joinery pre-fabricated in our state-of-the-art facility, on-site assembly at your Chennai property takes only 10 to 14 days without noise pollution or carpentry dust.
                    </p>
                    <div className="space-y-2.5 pt-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-medium border-b border-neutral-200 pb-2">
                        <span className="text-[#5D4037]">Days 1–7</span>
                        <span className="text-neutral-600">3D Design & Material Selection</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm font-medium border-b border-neutral-200 pb-2">
                        <span className="text-[#5D4037]">Days 8–30</span>
                        <span className="text-neutral-600">Factory Production & Quality Audit</span>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm font-medium pb-2">
                        <span className="text-[#5D4037]">Days 31–45</span>
                        <span className="text-neutral-600">On-Site Assembly, Lighting & Handover</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-4 border-t border-[#2D2422]/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-neutral-500">Need personal guidance for your Chennai home?</p>
                <p className="text-sm font-semibold text-[#5D4037]">Consult directly with Abrar Ahamed</p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 bg-[#5D4037] hover:bg-[#462F28] text-white text-xs sm:text-sm font-semibold rounded-lg flex items-center gap-2 cursor-pointer transition-colors whitespace-nowrap"
              >
                <span>Book Free Site Visit</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Feature Card & Founder Credential */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md group border border-[#2D2422]/10 flex-1 min-h-[300px]">
              <img
                src="/src/assets/images/mohinz_luxury_kitchen_1792770680050.jpg"
                alt="Bespoke Kitchen Island Craftsmanship"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Factory Finished</span>
                <h4 className="text-xl font-bold mt-1">Modular Kitchen Island Suite</h4>
                <p className="text-xs text-neutral-300 mt-1">Dark walnut timber carcase with seamless quartz waterfall bar</p>
              </div>
            </div>

            {/* Founder / Lead Credential Box */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#5D4037] text-[#D4AF37] flex items-center justify-center font-display font-bold text-2xl shrink-0">
                A
              </div>
              <div>
                <h4 className="text-base font-bold text-[#2D2422]">{BRAND_INFO.leadDesigner}</h4>
                <p className="text-xs text-neutral-500">{BRAND_INFO.leadTitle}</p>
                <p className="text-xs text-[#5D4037] mt-1 font-medium">Headquartered in Kandigai, servicing all Chennai regions</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
