import React, { useState } from 'react';
import { X, Calculator, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/interiorsData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, preselectedService }) => {
  const [property, setProperty] = useState('3 BHK Apartment');
  const [service, setService] = useState(preselectedService || 'Full Home Interior');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Chennai');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const text = `Hello Abrar, I would like an interior quote for Mohinz Interiors:\n• Name: ${name || 'Prospective Client'}\n• Phone: ${phone || 'Available upon request'}\n• Property: ${property}\n• Scope: ${service}\n• Location: ${location}`;
    return `https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#5D4037] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-1">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Estimate & Consultation</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold">
            Get Your Interior Estimate
          </h3>
          <p className="text-xs text-neutral-300 mt-1">
            Direct pricing from Mohinz Interiors factory in Kandigai, Chennai.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#2D2422]">
                Quote Request Registered!
              </h4>
              <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                Abrar Ahamed will review your specifications ({property} - {service}) and prepare a preliminary 3D budget for you.
              </p>
              
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send to Abrar via WhatsApp Now</span>
                </a>
                <button
                  onClick={onClose}
                  className="py-2 text-xs text-neutral-500 hover:text-neutral-900 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Property Configuration
                </label>
                <select
                  value={property}
                  onChange={(e) => setProperty(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:border-[#D4AF37] outline-none"
                >
                  <option value="1 BHK Apartment">1 BHK Apartment (~600 sq.ft)</option>
                  <option value="2 BHK Apartment">2 BHK Apartment (~1,050 sq.ft)</option>
                  <option value="3 BHK Apartment">3 BHK Apartment (~1,550 sq.ft)</option>
                  <option value="4 BHK / Villa">4 BHK / Luxury Villa (~2,500+ sq.ft)</option>
                  <option value="Commercial Office">Commercial Office / Workspace</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Primary Scope of Work
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:border-[#D4AF37] outline-none"
                >
                  <option value="Full Home Interior">Full Home Turnkey Interior</option>
                  <option value="Modular Kitchen & Island">Modular Kitchen & Island</option>
                  <option value="Wood Works & Wardrobes">Wood Works & Wardrobes</option>
                  <option value="Living Room & TV Console">Living Room & TV Console</option>
                  <option value="Flooring & Wall Works">Flooring & Wall Works</option>
                  <option value="False Ceiling & Lighting">False Ceiling & Lighting</option>
                  <option value="Commercial Office Fit-out">Commercial Office Fit-out</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:border-[#D4AF37] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 80560..."
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:border-[#D4AF37] outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700 block mb-1">
                  Location in Chennai
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Kandigai, OMR, Tambaram"
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:border-[#D4AF37] outline-none"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#5D4037] hover:bg-[#462F28] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  Get Preliminary Estimate & Callback
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#FAF7F2] hover:bg-[#F3ECE6] text-[#5D4037] border border-[#5D4037]/20 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                  <span>Connect directly on WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
