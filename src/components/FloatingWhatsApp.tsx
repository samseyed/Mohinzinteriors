import React, { useState } from 'react';
import { MessageCircle, Phone, X, Sparkles, FileText, CalendarCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/interiorsData';

interface FloatingWhatsAppProps {
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenConsultation, onOpenEstimator }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const directWhatsAppUrl = `https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Action Popup Menu */}
      {menuOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="bg-[#5D4037] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#D4AF37] text-[#2D2422] flex items-center justify-center font-bold text-sm">
                M
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight">Mohinz Interiors</h4>
                <p className="text-[10px] text-neutral-300">Abrar Ahamed · Kandigai, Chennai</p>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white p-1"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-3 space-y-2 text-xs">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-[#FAF7F2] text-[#2D2422] font-semibold transition-colors border border-transparent hover:border-neutral-200"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366] shrink-0" />
              <span>Direct Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-[#FAF7F2] text-[#2D2422] font-semibold transition-colors border border-transparent hover:border-neutral-200 text-left cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Calculate Interior Quote</span>
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-[#FAF7F2] text-[#2D2422] font-semibold transition-colors border border-transparent hover:border-neutral-200 text-left cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-[#5D4037] shrink-0" />
              <span>Book In-Home Site Visit</span>
            </button>

            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-[#FAF7F2] text-[#5D4037] font-semibold transition-colors border border-transparent hover:border-neutral-200"
            >
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Call: <span className="font-mono">{BRAND_INFO.phone}</span></span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button matching Flutter FloatingActionButton.extended */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle contact menu"
          className="h-12 px-5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
