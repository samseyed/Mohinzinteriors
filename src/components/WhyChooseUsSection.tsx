import React, { useState } from 'react';
import { Check, X, Shield, Clock, Award, DollarSign, ChevronDown, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS, COMPARISON_DATA } from '../data/interiorsData';

export const WhyChooseUsSection: React.FC = () => {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section className="py-20 bg-white border-b border-[#2D2422]/10" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching the prompt: "Why Choose Mohinz Interiors?" */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
            Trust & Quality Benchmark
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#2D2422] tracking-tight">
            Why Choose Mohinz Interiors?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            We deliver the design excellence of top architectural firms with the accountability of dedicated master craftsmen.
          </p>
        </div>

        {/* 4 Pillars Grid matching prompt's 4 list tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_POINTS.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#F8F5F2] p-7 rounded-2xl border border-neutral-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Check icon with clean circular accent */}
                <div className="w-12 h-12 rounded-xl bg-white border border-[#D4AF37]/30 flex items-center justify-center text-[#5D4037] mb-5 shadow-xs">
                  <Check className="w-6 h-6 text-[#D4AF37] stroke-[2.5]" />
                </div>
                
                <h3 className="text-lg font-bold text-[#2D2422] mb-1">
                  {item.title}
                </h3>
                
                <p className="text-xs font-semibold text-[#5D4037] mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-baseline justify-between">
                <span className="text-sm font-bold font-mono text-[#5D4037]">{item.stat}</span>
                <span className="text-[11px] text-neutral-500">{item.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Toggle & Drawer */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="text-center">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#5D4037] bg-[#FAF7F2] hover:bg-[#F3ECE6] rounded-xl border border-[#5D4037]/20 transition-all cursor-pointer"
            >
              <span>{showComparison ? 'Hide Comparison Table' : 'Compare: Mohinz Interiors vs Local Carpenters'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showComparison ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {showComparison && (
            <div className="mt-6 bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="grid grid-cols-12 bg-[#5D4037] text-white p-4 text-xs font-bold uppercase tracking-wider">
                <div className="col-span-4 sm:col-span-4">Feature / Standard</div>
                <div className="col-span-4 sm:col-span-4 text-[#D4AF37]">Mohinz Interiors</div>
                <div className="col-span-4 sm:col-span-4 text-neutral-300">Local Contractors</div>
              </div>

              <div className="divide-y divide-neutral-100">
                {COMPARISON_DATA.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 p-4 text-xs items-center hover:bg-neutral-50">
                    <div className="col-span-4 sm:col-span-4 font-semibold text-[#2D2422]">
                      {row.feature}
                    </div>
                    <div className="col-span-4 sm:col-span-4 text-neutral-700 flex items-start gap-1.5 pr-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.mohinz}</span>
                    </div>
                    <div className="col-span-4 sm:col-span-4 text-neutral-500 flex items-start gap-1.5">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.others}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
