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
    <section className="py-8 sm:py-12 bg-white/60 border-y border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_VALUES.map((item) => {
            const IconComponent = iconMap[item.icon] || Target;
            return (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 rounded-2xl bg-ivory/60 hover:bg-white border border-sage/40 hover:border-freshGreen/30 transition-all duration-200 group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                >
                  <IconComponent className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <div className="space-y-1">
                  <h2 className="text-sm sm:text-base font-bold text-charcoal tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
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
