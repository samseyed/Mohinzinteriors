import React, { useState } from 'react';
import { 
  Armchair, 
  UtensilsCrossed, 
  Grid3X3, 
  Layers, 
  BedDouble, 
  Tv, 
  Building2, 
  Lightbulb, 
  ChevronRight, 
  X, 
  Check, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SERVICES_DATA, InteriorService, BRAND_INFO } from '../data/interiorsData';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<InteriorService | null>(null);

  // Map icon names to Lucide icons
  const getIcon = (name: string, className: string) => {
    switch (name) {
      case 'Armchair':
        return <Armchair className={className} />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className={className} />;
      case 'Grid3X3':
        return <Grid3X3 className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'BedDouble':
        return <BedDouble className={className} />;
      case 'Tv':
        return <Tv className={className} />;
      case 'Building2':
        return <Building2 className={className} />;
      case 'Lightbulb':
        return <Lightbulb className={className} />;
      default:
        return <Armchair className={className} />;
    }
  };

  return (
    <section className="py-20 bg-[#F8F5F2]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
              Comprehensive Interior Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#2D2422] tracking-tight">
              Our Services
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl">
              From bespoke modular kitchens and custom wood joinery to acoustic ceilings and commercial workspaces.
            </p>
          </div>
          <div className="text-xs text-neutral-500 hidden sm:block">
            Click any service to view specifications & pricing
          </div>
        </div>

        {/* 8-Card Grid matching Flutter UI: isMobile ? 2 : 4 with 16px radius cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES_DATA.map((service) => {
            const isSelected = selectedService?.id === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`group relative text-left bg-white p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[170px] sm:min-h-[210px] ${
                  isSelected
                    ? 'border-[#D4AF37] shadow-md ring-2 ring-[#D4AF37]/20'
                    : 'border-neutral-200/80 shadow-xs hover:shadow-md hover:border-[#D4AF37]/60 hover:-translate-y-0.5'
                }`}
              >
                {/* Flutter style Gold Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#FAF7F2] group-hover:bg-[#FAF3E0] flex items-center justify-center transition-colors border border-[#D4AF37]/20">
                  {getIcon(service.iconName, "w-8 h-8 text-[#D4AF37] transition-transform group-hover:scale-110")}
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-base sm:text-lg font-bold text-[#2D2422] group-hover:text-[#5D4037] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-2 mt-1 hidden sm:block">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Micro Action link */}
                <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] font-semibold text-[#5D4037]">
                  <span className="font-mono text-neutral-600">{service.startingPrice}</span>
                  <span className="flex items-center text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                    Details <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Service Detail Modal Sheet */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div 
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                    {selectedService.category}
                  </span>
                  <h3 className="text-2xl font-bold font-display mt-0.5">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">Service Overview</h4>
                  <p className="text-sm sm:text-base text-neutral-700 mt-2 leading-relaxed">
                    {selectedService.fullDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Highlights */}
                  <div className="bg-[#F8F5F2] p-4 rounded-xl border border-neutral-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#5D4037] flex items-center gap-1.5 mb-2.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Key Highlights</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-700">
                      {selectedService.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials */}
                  <div className="bg-[#F8F5F2] p-4 rounded-xl border border-neutral-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#5D4037] flex items-center gap-1.5 mb-2.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Materials & Hardware</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-700">
                      {selectedService.materialsUsed.map((mat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5D4037] shrink-0 mt-1.5" />
                          <span>{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer with Starting Price & CTA */}
                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-neutral-500">Indicative Pricing</span>
                    <p className="text-lg font-bold font-mono text-[#5D4037]">{selectedService.startingPrice}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        const title = selectedService.title;
                        setSelectedService(null);
                        onSelectServiceForQuote(title);
                      }}
                      className="px-5 py-2.5 bg-[#5D4037] hover:bg-[#462F28] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <span>Get Custom Estimate</span>
                      <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
