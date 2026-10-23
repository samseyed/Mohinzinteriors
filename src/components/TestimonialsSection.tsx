import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA } from '../data/interiorsData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8F5F2]" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
              Client Feedback & Reviews
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#2D2422] tracking-tight">
              What Chennai Homeowners Say
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl">
              Authentic stories from families and businesses whose spaces we had the privilege to craft.
            </p>
          </div>

          {/* Social Proof Metric Badge (Unboxed per anti-slop guidelines) */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-neutral-200/90 shadow-xs">
            <div className="flex items-center gap-1 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
              ))}
            </div>
            <div className="text-xs">
              <span className="font-bold text-[#2D2422] font-mono text-sm mr-1">4.9 / 5.0</span>
              <span className="text-neutral-500">· 180+ Completed Projects</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-7 rounded-2xl border border-neutral-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">{rev.date}</span>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#2D2422] flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">{rev.role} · {rev.location}</p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-medium text-[#5D4037] block">
                    {rev.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
