import React from 'react';
import { Quote, Sparkles, CheckCircle2, ShieldAlert, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export default function SuccessStories() {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/60 text-forest text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-coral" />
            <span>What Your Journey Can Look Like</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight">
            Realistic Transformations in Everyday Life
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Coaching that fits busy Indian working schedules, family dinners, and real life routines.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-ivory rounded-3xl p-6 sm:p-8 border border-sage/50 hover:border-freshGreen/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Icon watermark */}
              <div className="absolute top-6 right-6 text-sage/40 group-hover:text-sage/70 transition-colors pointer-events-none">
                <Quote className="w-10 h-10" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Focus Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-forest text-ivory text-xs font-semibold">
                  {item.tag}
                </span>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-charcoal leading-relaxed italic">
                  "{item.quote}"
                </p>

                {/* Outcome badge */}
                <div className="p-3 bg-white rounded-xl border border-sage/40 flex items-center gap-2 text-xs font-medium text-forest">
                  <CheckCircle2 className="w-4 h-4 text-freshGreen shrink-0" />
                  <span>{item.outcome}</span>
                </div>
              </div>

              {/* Profile Card */}
              <div className="pt-6 border-t border-sage/40 mt-6 flex items-center gap-3.5 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-freshGreen/40 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    {item.name}
                  </h4>
                  <p className="text-xs text-charcoal-muted">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Demonstration & Safety Notice */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-2xl bg-sage/20 border border-sage/50 flex items-start gap-3 text-left">
          <ShieldAlert className="w-5 h-5 text-forest shrink-0 mt-0.5" />
          <div className="text-xs text-charcoal-muted leading-relaxed">
            <strong className="text-forest">Demonstration & Ethical Disclosure: </strong>
            The testimonials above represent illustrative client journeys designed for this presentation demo. When deploying for live client use, approved reviews and consented client feedback will be inserted. Individual outcomes vary depending on adherence, baseline metabolic rate, genetics, and lifestyle factors.
          </div>
        </div>

      </div>
    </section>
  );
}
