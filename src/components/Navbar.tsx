import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Calculator, Smartphone, Monitor } from 'lucide-react';
import { BRAND_INFO } from '../data/interiorsData';

interface NavbarProps {
  onOpenQuote: () => void;
  isMobilePreview: boolean;
  setIsMobilePreview: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, isMobilePreview, setIsMobilePreview }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Featured Projects', href: '#projects' },
    { label: 'Why Mohinz', href: '#why-us' },
    { label: 'Cost Estimator', href: '#estimator' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F5F2]/95 backdrop-blur-md border-b border-[#2D2422]/10 transition-all">
      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single element brand wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-[#5D4037] text-[#D4AF37] flex items-center justify-center font-display font-bold text-lg shadow-sm border border-[#D4AF37]/30">
              M
            </span>
            <span className="text-xl sm:text-2xl font-display font-bold tracking-tight text-[#2D2422] group-hover:text-[#5D4037] transition-colors whitespace-nowrap">
              MOHINZ INTERIORS
            </span>
          </a>
        </div>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#2D2422]/80">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-[#5D4037] transition-colors cursor-pointer py-1 border-b-2 border-transparent hover:border-[#D4AF37] whitespace-nowrap shrink-0 text-left"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 primary action & contact affordance */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick Phone Call Button */}
          <a
            href={`tel:${BRAND_INFO.phone}`}
            aria-label="Call Mohinz Interiors"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#5D4037] bg-white border border-[#5D4037]/20 px-3 py-2 rounded-lg hover:border-[#D4AF37] hover:bg-[#FAF7F2] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono tabular-nums">{BRAND_INFO.phone}</span>
          </a>

          {/* Primary Action Button */}
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#5D4037] hover:bg-[#462F28] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-[#D4AF37]" />
            <span>Get Quote</span>
          </button>

          {/* Mobile frame toggle for reviewing responsive Flutter mobile view */}
          <button
            onClick={() => setIsMobilePreview(!isMobilePreview)}
            title={isMobilePreview ? "Switch to standard desktop view" : "Preview Flutter mobile app viewport"}
            className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#5D4037] bg-[#EAE3DC] hover:bg-[#DFD6CE] rounded-md transition-colors"
          >
            {isMobilePreview ? (
              <>
                <Monitor className="w-3.5 h-3.5" />
                <span>Full Web</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5 text-[#5D4037]" />
                <span>Flutter View</span>
              </>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg text-[#2D2422] hover:bg-black/5"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#2D2422]/10 bg-[#F8F5F2] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-left text-sm font-medium text-[#2D2422] hover:text-[#5D4037] hover:bg-black/5 rounded-md"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#2D2422]/10 flex flex-col gap-2">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium text-[#5D4037] bg-white border border-[#5D4037]/20 rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call: {BRAND_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Abrar Ahamed</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
