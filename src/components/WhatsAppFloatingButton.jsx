import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND } from '../data/content';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive Tooltip Callout */}
      {showTooltip && (
        <div className="mb-2 bg-white rounded-2xl p-3 shadow-elevated border border-sage/60 max-w-xs text-left animate-fadeIn relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-charcoal/40 hover:text-charcoal"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-freshGreen animate-ping"></span>
            <span className="text-[11px] font-bold text-forest uppercase tracking-wide">
              Dietitian Consultation Desk
            </span>
          </div>
          <p className="text-xs text-charcoal pr-4">
            Have questions about diet plans? Chat directly with us on WhatsApp!
          </p>
        </div>
      )}

      {/* Pulsing WhatsApp CTA Button */}
      <a
        href={`https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
          "Hello Dietitian Priya, I am visiting your website and would like to ask a question about your diet programs."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-freshGreen hover:bg-forest text-white shadow-elevated flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-freshGreen/30"
        aria-label="Direct WhatsApp Consultation"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-coral rounded-full border-2 border-white animate-pulse"></span>
      </a>
    </div>
  );
}
