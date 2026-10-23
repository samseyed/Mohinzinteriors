import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, MessageCircle, HelpCircle, Sparkles, Building, Home, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/interiorsData';

interface CostEstimatorProps {
  initialService?: string;
  onOpenConsultationWithData?: (data: any) => void;
}

export const CostEstimatorSection: React.FC<CostEstimatorProps> = ({ onOpenConsultationWithData }) => {
  const [propertyType, setPropertyType] = useState<'1bhk' | '2bhk' | '3bhk' | 'villa' | 'office'>('3bhk');
  const [packageTier, setPackageTier] = useState<'essential' | 'premium' | 'luxury'>('premium');

  // Scope components
  const [scope, setScope] = useState({
    kitchen: true,
    masterWardrobe: true,
    secondWardrobe: true,
    tvUnit: true,
    falseCeiling: true,
    wallWorks: false,
    flooring: false,
  });

  const propertyLabels = {
    '1bhk': '1 BHK Apartment (~600 sq.ft)',
    '2bhk': '2 BHK Apartment (~1,050 sq.ft)',
    '3bhk': '3 BHK Apartment (~1,550 sq.ft)',
    'villa': '4 BHK / Luxury Villa (~2,600 sq.ft)',
    'office': 'Commercial Office (~1,200 sq.ft)',
  };

  // Base pricing matrix in INR Lakhs
  const pricingMatrix: Record<string, Record<string, number>> = {
    '1bhk': { kitchen: 1.25, masterWardrobe: 0.75, secondWardrobe: 0, tvUnit: 0.35, falseCeiling: 0.45, wallWorks: 0.30, flooring: 0.50 },
    '2bhk': { kitchen: 1.65, masterWardrobe: 0.95, secondWardrobe: 0.85, tvUnit: 0.45, falseCeiling: 0.75, wallWorks: 0.45, flooring: 0.95 },
    '3bhk': { kitchen: 2.10, masterWardrobe: 1.15, secondWardrobe: 0.95, tvUnit: 0.60, falseCeiling: 1.10, wallWorks: 0.65, flooring: 1.40 },
    'villa': { kitchen: 3.40, masterWardrobe: 1.75, secondWardrobe: 1.45, tvUnit: 0.95, falseCeiling: 1.85, wallWorks: 1.20, flooring: 2.50 },
    'office': { kitchen: 0.90, masterWardrobe: 0, secondWardrobe: 0, tvUnit: 0.70, falseCeiling: 1.40, wallWorks: 0.90, flooring: 1.60 },
  };

  const tierMultipliers = {
    essential: 0.85,
    premium: 1.0,
    luxury: 1.45,
  };

  const currentPricing = pricingMatrix[propertyType] || pricingMatrix['3bhk'];
  const multiplier = tierMultipliers[packageTier];

  // Calculate estimated total
  let totalMin = 0;
  if (scope.kitchen) totalMin += (currentPricing.kitchen || 0) * multiplier;
  if (scope.masterWardrobe) totalMin += (currentPricing.masterWardrobe || 0) * multiplier;
  if (scope.secondWardrobe) totalMin += (currentPricing.secondWardrobe || 0) * multiplier;
  if (scope.tvUnit) totalMin += (currentPricing.tvUnit || 0) * multiplier;
  if (scope.falseCeiling) totalMin += (currentPricing.falseCeiling || 0) * multiplier;
  if (scope.wallWorks) totalMin += (currentPricing.wallWorks || 0) * multiplier;
  if (scope.flooring) totalMin += (currentPricing.flooring || 0) * multiplier;

  const totalMax = totalMin * 1.18;

  const toggleScope = (key: keyof typeof scope) => {
    setScope((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const buildWhatsAppMessage = () => {
    const includedItems = Object.entries(scope)
      .filter(([_, included]) => included)
      .map(([key]) => {
        if (key === 'kitchen') return 'Modular Kitchen';
        if (key === 'masterWardrobe') return 'Master Bedroom Wardrobe';
        if (key === 'secondWardrobe') return 'Guest/Kids Wardrobe';
        if (key === 'tvUnit') return 'Living Room TV Console';
        if (key === 'falseCeiling') return 'False Ceiling & Cove Lighting';
        if (key === 'wallWorks') return 'Wall Paneling & Textures';
        if (key === 'flooring') return 'Flooring Solutions';
        return key;
      })
      .join(', ');

    const text = `Hello Abrar, I used the Mohinz Interiors cost calculator:\n• Property: ${propertyLabels[propertyType]}\n• Package Tier: ${packageTier.toUpperCase()}\n• Selected Scope: ${includedItems}\n• Estimated Budget: ₹${totalMin.toFixed(2)} - ₹${totalMax.toFixed(2)} Lakhs\nPlease let me know when we can arrange a site inspection in Chennai.`;
    return encodeURIComponent(text);
  };

  return (
    <section className="py-20 bg-[#F8F5F2]" id="estimator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Interior Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#2D2422] tracking-tight">
            Instant Estimate For Your Space
          </h2>
          <p className="text-sm text-neutral-600">
            Transparent, itemized cost calculation for Chennai properties. No hidden contractor fees.
          </p>
        </div>

        {/* 2-Column Calculator Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-xs space-y-7">
            
            {/* Step 1: Property Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#5D4037] block mb-3">
                1. Select Property Configuration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: '1bhk', label: '1 BHK' },
                  { id: '2bhk', label: '2 BHK' },
                  { id: '3bhk', label: '3 BHK' },
                  { id: 'villa', label: '4 BHK / Villa' },
                  { id: 'office', label: 'Office' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPropertyType(item.id as any)}
                    className={`py-3 px-3 text-xs sm:text-sm font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                      propertyType === item.id
                        ? 'border-[#D4AF37] bg-[#FAF7F2] text-[#5D4037] shadow-xs ring-1 ring-[#D4AF37]'
                        : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quality Finish Tier */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#5D4037] block mb-3">
                2. Select Material & Finish Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'essential',
                    name: 'Essential',
                    desc: 'BWR Plywood + Matte Laminates + Hafele hardware',
                  },
                  {
                    id: 'premium',
                    name: 'Premium (Recommended)',
                    desc: '710 Marine BWP Ply + Acrylic/PU + Blum soft-close',
                  },
                  {
                    id: 'luxury',
                    name: 'Luxury Suite',
                    desc: 'Natural Veneer + Quartz island + Fluted glass & LED',
                  },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setPackageTier(tier.id as any)}
                    className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      packageTier === tier.id
                        ? 'border-[#D4AF37] bg-[#FAF7F2] shadow-xs ring-1 ring-[#D4AF37]'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div>
                      <span className={`text-xs sm:text-sm font-bold block ${packageTier === tier.id ? 'text-[#5D4037]' : 'text-[#2D2422]'}`}>
                        {tier.name}
                      </span>
                      <span className="text-[11px] text-neutral-500 mt-1 block leading-tight">
                        {tier.desc}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Scope Checklist */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#5D4037] block mb-3">
                3. Choose Scope of Interior Works
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'kitchen', label: 'Modular Kitchen & Storage' },
                  { id: 'masterWardrobe', label: 'Master Bedroom Wardrobe' },
                  { id: 'secondWardrobe', label: 'Guest / Kids Wardrobe' },
                  { id: 'tvUnit', label: 'Living Room TV Console' },
                  { id: 'falseCeiling', label: 'False Ceiling & Cove Lighting' },
                  { id: 'wallWorks', label: 'Wall Works & Textured Louvers' },
                  { id: 'flooring', label: 'Flooring (Tile/Hardwood)' },
                ].map((item) => {
                  const key = item.id as keyof typeof scope;
                  const checked = scope[key];
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleScope(key)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                        checked
                          ? 'border-[#D4AF37]/80 bg-[#FAF7F2] text-[#2D2422]'
                          : 'border-neutral-200 text-neutral-500 bg-white hover:border-neutral-300'
                      }`}
                    >
                      <span>{item.label}</span>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                        checked ? 'bg-[#5D4037] border-[#5D4037] text-white' : 'border-neutral-300'
                      }`}>
                        {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Real-time Calculation Summary Card */}
          <div className="lg:col-span-5 sticky top-24 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/90 shadow-sm space-y-6">
            <div className="border-b border-neutral-100 pb-4">
              <span className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
                Estimated Interior Budget
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold font-mono text-[#5D4037] tabular-nums">
                  ₹{totalMin.toFixed(2)} - ₹{totalMax.toFixed(2)}
                </span>
                <span className="text-sm font-semibold text-neutral-600">Lakhs*</span>
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                *Estimated turnkey cost including materials, fabrication, hardware, and installation in Chennai.
              </p>
            </div>

            {/* Selected Breakdown */}
            <div className="space-y-3 text-xs text-neutral-700">
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Property Configuration</span>
                <span className="font-semibold text-right">{propertyLabels[propertyType]}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Finish Package</span>
                <span className="font-semibold capitalize text-[#5D4037]">{packageTier} Grade</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Execution Timeline</span>
                <span className="font-semibold font-mono tabular-nums">{BRAND_INFO.deliveryDays} Days Guarantee</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-500">Material Warranty</span>
                <span className="font-semibold font-mono tabular-nums">{BRAND_INFO.warrantyYears} Years Structural</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-3">
              <a
                href={`https://wa.me/${BRAND_INFO.phoneClean}?text=${buildWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2.5 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send Estimate to WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  if (onOpenConsultationWithData) {
                    onOpenConsultationWithData({
                      propertyType: propertyLabels[propertyType],
                      packageTier,
                      estimatedCost: `₹${totalMin.toFixed(2)} - ₹${totalMax.toFixed(2)} Lakhs`,
                    });
                  }
                }}
                className="w-full py-3.5 px-4 bg-[#5D4037] hover:bg-[#462F28] text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Book Site Visit & Lock Price</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>

            <div className="bg-[#FAF7F2] p-3.5 rounded-xl border border-[#D4AF37]/20 flex items-start gap-2.5 text-[11px] text-neutral-600">
              <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                Personal site measurement and 3D preview consultation available in Kandigai, OMR, Velachery, and surrounding Chennai locations.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
