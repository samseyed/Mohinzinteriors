/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { CostEstimatorSection } from './components/CostEstimatorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';
import { QuoteModal } from './components/QuoteModal';
import { BRAND_INFO } from './data/interiorsData';
import { Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [consultationData, setConsultationData] = useState<any>(undefined);
  const [isMobilePreview, setIsMobilePreview] = useState(false);

  const handleOpenQuote = (service?: string) => {
    setPreselectedService(service);
    setIsQuoteModalOpen(true);
  };

  const handleOpenWhatsApp = () => {
    window.open(
      `https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`,
      '_blank'
    );
  };

  const handleOpenConsultationWithData = (data: any) => {
    setConsultationData(data);
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#F8F5F2] font-sans antialiased text-[#2D2422] ${
      isMobilePreview ? 'p-4 sm:p-8 flex flex-col items-center justify-start bg-neutral-900 min-h-screen' : ''
    }`}>

      {/* Optional Flutter Mobile Simulator Container */}
      <div className={`w-full transition-all duration-300 ${
        isMobilePreview
          ? 'max-w-[430px] bg-[#F8F5F2] rounded-[44px] overflow-hidden shadow-2xl border-[8px] border-neutral-800 relative min-h-[880px]'
          : ''
      }`}>
        
        {/* Device Notch Simulator when Mobile Preview Mode is Active */}
        {isMobilePreview && (
          <div className="bg-neutral-800 h-6 w-full flex items-center justify-between px-6 text-[10px] text-neutral-400 font-mono">
            <span>9:41</span>
            <div className="w-20 h-4 bg-black rounded-b-xl" />
            <button
              onClick={() => setIsMobilePreview(false)}
              className="text-[#D4AF37] hover:underline cursor-pointer flex items-center gap-1"
            >
              <Monitor className="w-3 h-3" />
              <span>Exit Frame</span>
            </button>
          </div>
        )}

        {/* Top Bar Header */}
        <Navbar
          onOpenQuote={() => handleOpenQuote()}
          isMobilePreview={isMobilePreview}
          setIsMobilePreview={setIsMobilePreview}
        />

        {/* 1. Hero Banner */}
        <HeroSection
          onOpenQuote={() => handleOpenQuote()}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 2. Company Introduction (About Mohinz Interiors) */}
        <AboutSection
          onOpenConsultation={() => {
            const elem = document.getElementById('contact');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Services Grid (8 Services matching Flutter prompt) */}
        <ServicesSection
          onSelectServiceForQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
        />

        {/* 4. Featured Projects Section (Horizontal Slider & Filterable Grid) */}
        <ProjectsSection
          onOpenConsultation={() => {
            const elem = document.getElementById('contact');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Why Choose Mohinz Interiors */}
        <WhyChooseUsSection />

        {/* Cost Estimator & Quote Calculator (Livspace / Homelane style) */}
        <CostEstimatorSection
          onOpenConsultationWithData={handleOpenConsultationWithData}
        />

        {/* 6. Customer Reviews & Testimonials */}
        <TestimonialsSection />

        {/* 7. Contact Information (Abrar Ahamed, +91 8056099435, Kandigai Chennai) */}
        <ContactSection prefilledData={consultationData} />

        {/* Footer */}
        <Footer />

        {/* 8. WhatsApp Floating Button (matching Flutter FloatingActionButton.extended) */}
        <FloatingWhatsApp
          onOpenConsultation={() => {
            const elem = document.getElementById('contact');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenEstimator={() => {
            const elem = document.getElementById('estimator');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 9. Bottom Navigation Ready (Mobile Screens) */}
        <MobileBottomNav
          onOpenEstimator={() => {
            const elem = document.getElementById('estimator');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Interactive Quote / Cost Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          preselectedService={preselectedService}
        />

      </div>
    </div>
  );
}
