import React, { useState } from 'react';
import { Sparkles, X, Palette, Info } from 'lucide-react';

export default function ClientDemoBanner({ onOpenInfo }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside aria-label="Demo notice" className="bg-forest-900 text-ivory text-xs py-2 px-4 border-b border-forest/40 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-freshGreen animate-pulse"></span>
          <span className="font-semibold tracking-wide uppercase text-[10px] bg-forest-light px-2 py-0.5 rounded text-sage-200">
            iWAAT Demo Preview
          </span>
          <span className="hidden sm:inline text-ivory/80">
            Interactive client concept for Nutrition & Wellness Professional
          </span>
        </div>

        <div className="flex items-center gap-4 text-ivory/90">
          <button
            onClick={onOpenInfo}
            className="inline-flex items-center gap-1 hover:text-warmYellow transition-colors underline decoration-dotted underline-offset-2"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Client Customization Notes</span>
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 hover:text-white text-ivory/60 transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
