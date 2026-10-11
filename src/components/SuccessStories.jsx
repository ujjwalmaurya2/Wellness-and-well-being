import React from 'react';
import { Quote, Sparkles, CheckCircle2, ShieldAlert, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export default function SuccessStories() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/60 text-forest text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-coral" />
            <span>Real Everyday Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
            Realistic Transformations in Everyday Life
          </h2>
          <p className="text-xs sm:text-base text-charcoal/75 leading-relaxed">
            Coaching that fits busy Indian working schedules, family dinners, and real life routines.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-left">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-ivory rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-sage/50 hover:border-freshGreen/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Icon watermark */}
              <div className="absolute top-4 right-4 text-sage/40 group-hover:text-sage/70 transition-colors pointer-events-none">
                <Quote className="w-7 h-7 sm:w-10 sm:h-10" />
              </div>

              <div className="space-y-3 relative z-10">
                {/* Focus Tag */}
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-forest text-ivory text-[11px] sm:text-xs font-semibold">
                  {item.tag}
                </span>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-charcoal leading-relaxed italic">
                  "{item.quote}"
                </p>

                {/* Outcome badge */}
                <div className="p-2 sm:p-2.5 bg-white rounded-xl border border-sage/40 flex items-center gap-2 text-[11px] sm:text-xs font-medium text-forest">
                  <CheckCircle2 className="w-3.5 h-3.5 text-freshGreen shrink-0" />
                  <span>{item.outcome}</span>
                </div>
              </div>

              {/* Profile Card */}
              <div className="pt-3.5 border-t border-sage/40 mt-4 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-freshGreen/40 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-charcoal">
                    {item.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-charcoal-muted">
                    {item.location} • {item.program}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory & Ethical Transparency Note */}
        <div className="mt-8 sm:mt-12 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-sage-50/60 border border-sage/40 flex items-start gap-2.5 max-w-2xl mx-auto text-left">
          <ShieldAlert className="w-4 h-4 text-freshGreen shrink-0 mt-0.5" />
          <p className="text-[10px] sm:text-xs text-charcoal/70 leading-relaxed">
            <strong>Demonstration Client Note:</strong> Client names and testimonials are illustrative examples based on real-world Indian nutritional therapy protocols. Individual metabolic timelines vary based on adherence, lifestyle factors, and lab profiles.
          </p>
        </div>

      </div>
    </section>
  );
}
