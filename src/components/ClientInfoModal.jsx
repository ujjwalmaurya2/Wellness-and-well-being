import React from 'react';
import { X, Sparkles, CheckCircle2, Palette, ShieldCheck, ArrowRight, Layers } from 'lucide-react';

export default function ClientInfoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-elevated border border-sage/60 z-10 space-y-6 my-8 text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-sage/40">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-forest text-warmYellow flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-forest uppercase tracking-wider">
                iWAAT Agency Presentation Dossier
              </span>
              <h3 className="text-xl font-bold text-charcoal">
                Client Concept Architecture
              </h3>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-charcoal-muted hover:text-charcoal" aria-label="Close dialog">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content sections */}
        <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-1 text-xs sm:text-sm text-charcoal leading-relaxed">
          
          {/* Section: Strategic Rationale */}
          <div className="p-4 rounded-2xl bg-ivory border border-sage/50 space-y-2">
            <h4 className="font-bold text-forest flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-freshGreen" />
              <span>Concept Strategy & Positioning</span>
            </h4>
            <p className="text-charcoal-muted text-xs leading-relaxed">
              Designed specifically for the modern Indian health consumer who seeks sustainable fat loss without abandoning cultural staples (dal, roti, rice, sabzi). Positions the nutritionist as an empathetic clinical authority rather than a restrictive drill sergeant.
            </p>
          </div>

          {/* Color System Breakdown */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-charcoal flex items-center gap-1.5">
              <Palette className="w-4 h-4 text-forest" />
              <span>Color System & Brand Psychology</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded-xl border border-sage/60 bg-[#FAF8F2]">
                <strong className="block text-charcoal">Warm Ivory</strong>
                <span className="text-[10px] text-charcoal-muted">#FAF8F2 (Base)</span>
              </div>
              <div className="p-2.5 rounded-xl border border-sage/60 bg-[#284B3C] text-white">
                <strong className="block">Deep Forest</strong>
                <span className="text-[10px] opacity-80">#284B3C (Authority)</span>
              </div>
              <div className="p-2.5 rounded-xl border border-sage/60 bg-[#71966B] text-white">
                <strong className="block">Fresh Green</strong>
                <span className="text-[10px] opacity-80">#71966B (Vitality)</span>
              </div>
              <div className="p-2.5 rounded-xl border border-sage/60 bg-[#F3C969] text-charcoal">
                <strong className="block">Warm Yellow</strong>
                <span className="text-[10px] text-charcoal-muted">#F3C969 (Energy)</span>
              </div>
            </div>
          </div>

          {/* Client Handover Checklist */}
          <div className="space-y-2">
            <h4 className="font-bold text-charcoal flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-freshGreen" />
              <span>Ready for One-Click Client Customization</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-charcoal-muted list-disc pl-5">
              <li>Replace <strong>Brand Name & Logo</strong> in <code className="text-forest font-mono">src/data/content.js</code></li>
              <li>Insert <strong>Verified Nutritionist Credentials & IDA/RD Registration Number</strong></li>
              <li>Connect client's active <strong>WhatsApp Business phone number</strong></li>
              <li>Swap in approved client reviews and photography</li>
              <li>Configure custom clinic location or hospital affiliations</li>
            </ul>
          </div>

          {/* Future Scale Roadmap */}
          <div className="p-4 rounded-2xl bg-sage/20 border border-sage/50 space-y-2">
            <h4 className="font-bold text-forest text-xs uppercase tracking-wider">
              Technical Scalability for Live Launch
            </h4>
            <p className="text-xs text-charcoal-muted">
              Built on production-ready React & Tailwind CSS. Ready to connect directly with Razorpay/UPI payment links, automated Google Calendar / Calendly appointment booking, and WhatsApp CRM webhooks upon client approval.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-sage/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-forest text-ivory text-xs sm:text-sm font-semibold hover:bg-forest-light transition-all"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}
