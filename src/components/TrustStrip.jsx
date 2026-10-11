import React from 'react';
import { Target, UtensilsCrossed, Flame, MessageSquareHeart } from 'lucide-react';
import { TRUST_VALUES } from '../data/content';

export default function TrustStrip() {
  const iconMap = {
    Target: Target,
    UtensilsCrossed: UtensilsCrossed,
    Flame: Flame,
    MessageSquareHeart: MessageSquareHeart,
  };

  return (
    <section className="py-4 sm:py-10 bg-white/60 border-y border-sage/40">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
          {TRUST_VALUES.map((item) => {
            const IconComponent = iconMap[item.icon] || Target;
            return (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3.5 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-ivory/70 hover:bg-white border border-sage/40 hover:border-freshGreen/30 transition-all duration-200 group text-left"
              >
                <div
                  className={`w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-2xl ${item.bgColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                >
                  <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${item.iconColor}`} />
                </div>
                <div className="space-y-0.5">
                  <h2 className="text-xs sm:text-sm font-bold text-charcoal tracking-tight leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-[10px] sm:text-xs text-charcoal/70 leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
