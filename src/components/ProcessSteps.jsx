import React from 'react';
import { Compass, Users, FileText, Sparkles, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS, IMAGES } from '../data/content';

export default function ProcessSteps() {
  const iconMap = {
    Compass: Compass,
    Users: Users,
    FileText: FileText,
    Sparkles: Sparkles,
  };

  const stepThumbnails = [
    IMAGES.southIndianBreakfast, // Discover: food preferences
    IMAGES.heroSecondary,        // Consult: 1-on-1 discussion
    IMAGES.indianThali,          // Personalize: custom blueprint
    IMAGES.activeYoga,           // Review: sustainable lifestyle
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/60 text-forest text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-freshGreen" />
            <span>Structured Consultation Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight">
            How Your Journey Unfolds
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            A collaborative, four-step clinical pathway from your first consultation to effortless, long-term healthy habits.
          </p>
        </div>

        {/* 4 Process Steps Layout */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-sage/60 -translate-y-12 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComp = iconMap[step.icon] || Compass;
              const thumbnail = stepThumbnails[idx];

              return (
                <div
                  key={step.step}
                  className="bg-ivory rounded-3xl p-6 border border-sage/50 hover:border-freshGreen/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Top Row: Step Number & Mini Photo Thumbnail */}
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-extrabold text-forest/20 group-hover:text-forest transition-colors">
                        {step.step}
                      </span>
                      <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-white shadow-sm shrink-0">
                        <img
                          src={thumbnail}
                          alt={step.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Badge & Icon */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-forest text-ivory flex items-center justify-center shrink-0 shadow-sm">
                        <IconComp className="w-5 h-5 text-warmYellow" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-sage/60 text-forest">
                        {step.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1.5 pt-1">
                      <h3 className="text-xl font-bold text-charcoal group-hover:text-forest transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider">
                        {step.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-charcoal leading-relaxed pt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Visual bottom indicator */}
                  <div className="pt-4 border-t border-sage/30 mt-4 flex items-center justify-between text-xs text-charcoal-muted">
                    <span>Phase {idx + 1}</span>
                    <span className="font-bold text-forest group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
