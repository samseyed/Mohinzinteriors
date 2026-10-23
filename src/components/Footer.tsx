import React from 'react';
import { Phone, Mail, MapPin, Heart, Shield } from 'lucide-react';
import { BRAND_INFO } from '../data/interiorsData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D2422] text-neutral-300 pt-16 pb-24 lg:pb-16 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-[#5D4037] text-[#D4AF37] flex items-center justify-center font-display font-bold text-lg border border-[#D4AF37]/40">
                M
              </span>
              <span className="text-xl font-display font-bold text-white tracking-tight">
                MOHINZ INTERIORS
              </span>
            </div>
            
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Crafting elegant spaces across Chennai. Specialized in precision wood joinery, luxury modular kitchens, acoustic wall paneling, and turnkey interior execution.
            </p>

            <div className="text-xs text-neutral-400 space-y-1 pt-1">
              <p><strong className="text-white">Principal Designer:</strong> {BRAND_INFO.leadDesigner}</p>
              <p><strong className="text-white">Works & Studio:</strong> {BRAND_INFO.address}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Interior Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Custom Wood Works & Wardrobes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Luxury Modular Kitchens</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Flooring & Italian Marble</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Acoustic Wall Paneling</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">False Ceilings & Magnetic Tracks</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial & Office Fit-outs</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Chennai Service Hubs
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We deploy dedicated on-site installation teams across:
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] text-neutral-300">
              {['Kandigai', 'Vandalur', 'Kelambakkam', 'OMR Expressway', 'Velachery', 'Tambaram', 'Medavakkam', 'Anna Nagar', 'Perungudi', 'ECR'].map((hub) => (
                <span key={hub} className="px-2 py-1 rounded bg-white/5 border border-white/10">
                  {hub}
                </span>
              ))}
            </div>

            <div className="pt-3 flex items-center gap-2 text-xs text-[#D4AF37]">
              <Shield className="w-4 h-4" />
              <span>10-Year Written Structural Warranty on All Plywood Carcases</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} Mohinz Interiors. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-neutral-300 font-mono">
              {BRAND_INFO.phone}
            </a>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-neutral-300">
              {BRAND_INFO.email}
            </a>
            <span aria-hidden="true">·</span>
            <span>Chennai, TN</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
