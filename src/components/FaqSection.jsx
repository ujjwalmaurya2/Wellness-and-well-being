import React, { useState } from 'react';
import {
  ChevronDown, HelpCircle, Stethoscope, Sliders, Globe,
  Repeat, CheckCircle2, MessageSquare, Utensils, ShieldAlert, Sparkles
} from 'lucide-react';
import { FAQS } from '../data/content';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // open first by default

  const iconMap = {
    Stethoscope, Sliders, Globe,
    Repeat, CheckCircle2, MessageSquare,
    Utensils, ShieldAlert,
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-10 sm:py-16 lg:py-24 bg-ivory relative border-t border-sage/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/60 text-forest text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-freshGreen" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-base text-charcoal/75">
            Clear, transparent answers about our clinical approach, consultations, and Indian diet philosophy.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const IconComp = iconMap[faq.icon] || HelpCircle;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-forest/30 shadow-soft'
                    : 'bg-white/70 border-sage/50 hover:border-freshGreen/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isOpen ? 'bg-forest text-ivory' : 'bg-sage/40 text-forest'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-charcoal">
                      {faq.q}
                    </span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sage/40 text-forest' : 'text-charcoal-muted'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-left animate-fadeIn">
                    <div className="pl-12 border-t border-sage/30 pt-3 text-xs sm:text-sm text-charcoal leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Supporting Note */}
        <div className="mt-10 text-center text-xs text-charcoal-muted">
          <span>Still have a question? </span>
          <a
            href="#book"
            className="text-forest font-bold hover:underline"
          >
            Send us a message through the booking form
          </a>
          <span> or WhatsApp desk.</span>
        </div>

      </div>
    </section>
  );
}
