import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle2, User, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/interiorsData';

interface ContactSectionProps {
  prefilledData?: {
    propertyType?: string;
    packageTier?: string;
    estimatedCost?: string;
    service?: string;
  };
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledData }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    serviceType: prefilledData?.service || 'Full Home Interior',
    message: prefilledData?.estimatedCost ? `Calculated estimate: ${prefilledData.estimatedCost} for ${prefilledData.propertyType || 'residence'}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Hello Abrar, I would like to book a site consultation with Mohinz Interiors:\n• Name: ${formState.name}\n• Phone: ${formState.phone}\n• Location: ${formState.location || 'Chennai'}\n• Service: ${formState.serviceType}\n• Note: ${formState.message || 'Please contact me'}`;
    return `https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Container matching the Flutter Color(0xFF5D4037) block */}
        <div className="bg-[#5D4037] text-white rounded-3xl overflow-hidden shadow-xl border border-[#D4AF37]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Direct Contact Details from Flutter code */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 space-y-8">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get in Touch</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  Contact Us
                </h2>
                <p className="text-neutral-300 text-sm mt-2 leading-relaxed">
                  Connect with our founder and lead project team to schedule a site inspection or visit our factory in Kandigai.
                </p>

                {/* Exact Details from Flutter prompt */}
                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block">Lead Project Director</span>
                      <p className="text-base font-bold text-white">{BRAND_INFO.leadDesigner}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block">Direct Mobile / Call</span>
                      <a href={`tel:${BRAND_INFO.phone}`} className="text-base font-mono font-semibold text-white hover:text-[#D4AF37] transition-colors">
                        {BRAND_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block">Official Inquiries</span>
                      <a href={`mailto:${BRAND_INFO.email}`} className="text-base text-white hover:text-[#D4AF37] transition-colors">
                        {BRAND_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-400 block">Studio & Works</span>
                      <p className="text-base text-white">{BRAND_INFO.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours & Immediate Connect */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-xs text-neutral-300">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>Mon – Sat: 9:00 AM – 8:00 PM | Sun: By Appointment</span>
                </div>

                <a
                  href={`https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent(BRAND_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm rounded-xl transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Instant WhatsApp Connect</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Booking Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-white text-[#2D2422]">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[#5D4037]">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-[#2D2422]">{formState.name}</span>. Abrar Ahamed will review your space details and contact you at <span className="font-mono font-semibold">{formState.phone}</span> shortly.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-3 px-5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Confirm via WhatsApp with Abrar</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="py-3 px-4 text-xs font-semibold text-neutral-600 hover:text-neutral-900 cursor-pointer"
                    >
                      Book Another Site Visit
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#2D2422]">
                      Book Free In-Home Consultation
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Our senior designer will visit your Chennai location with material samples and layout advice.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-neutral-700 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-neutral-700 block mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-neutral-700 block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@gmail.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-neutral-700 block mb-1">
                        Site Location / Locality
                      </label>
                      <input
                        type="text"
                        value={formState.location}
                        onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                        placeholder="e.g. Kandigai, OMR, Velachery"
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Primary Interior Requirement
                    </label>
                    <select
                      value={formState.serviceType}
                      onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all bg-white"
                    >
                      <option value="Full Home Interior (Turnkey)">Full Home Interior (Turnkey)</option>
                      <option value="Modular Kitchen & Dining">Modular Kitchen & Dining</option>
                      <option value="Wardrobes & Wood Works">Wardrobes & Wood Works</option>
                      <option value="Living Room & TV Console">Living Room & TV Console</option>
                      <option value="Flooring & Wall Paneling">Flooring & Wall Paneling</option>
                      <option value="False Ceiling & Lighting">False Ceiling & Lighting</option>
                      <option value="Commercial & Office Fit-out">Commercial & Office Fit-out</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Specific Notes or Room Details
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about your floor plan, possession timeline, or design preferences..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-4 bg-[#5D4037] hover:bg-[#462F28] text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-[#D4AF37]" />
                    <span>{submitting ? 'Submitting Details...' : 'Request Site Measurement & Consultation'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
