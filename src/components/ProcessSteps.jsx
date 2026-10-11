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
    IMAGES.southIndianBreakfast, // Discover
    IMAGES.heroSecondary,        // Consult
    IMAGES.indianThali,          // Personalize
    IMAGES.activeYoga,           // Review
  ];

  return (
    <section id="process" className="py-10 sm:py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/60 text-forest text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-freshGreen" />
            <span>Structured Consultation Flow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
            How Your Journey Unfolds
          </h2>
          <p className="text-xs sm:text-base text-charcoal/75 leading-relaxed">
            A collaborative, four-step clinical pathway from your first consultation to effortless, long-term healthy habits.
          </p>
        </div>

        {/* 4 Process Steps Layout (2x2 on Mobile, 4-Col on Desktop) */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-sage/60 -translate-y-12 -z-0"></div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 relative z-10 text-left">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComp = iconMap[step.icon] || Compass;
              const thumbnail = stepThumbnails[idx];

              return (
                <div
                  key={step.step}
                  className="bg-ivory rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-sage/50 hover:border-freshGreen/40 shadow-2xs hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-2 sm:space-y-3">
                    {/* Top Row: Step Number & Mini Photo Thumbnail */}
                    <div className="flex items-center justify-between">
                      <span className="text-xl sm:text-3xl font-extrabold text-forest/30 group-hover:text-forest transition-colors">
                        {step.step}
                      </span>
                      <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl overflow-hidden border-2 border-white shadow-xs shrink-0">
                        <img
                          src={thumbnail}
                          alt={step.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="space-y-1">
                      <h3 className="text-xs sm:text-base font-bold text-charcoal leading-snug group-hover:text-forest transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-charcoal/70 leading-tight">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Highlight Micro-Badge */}
                  <div className="pt-2 sm:pt-3 mt-2 border-t border-sage/30 flex items-center justify-between">
                    <span className="text-[9px] sm:text-[11px] font-semibold text-forest bg-sage/50 px-2 py-0.5 rounded-md truncate">
                      {step.highlight}
                    </span>
                    <IconComp className="w-3.5 h-3.5 text-freshGreen opacity-60 hidden sm:block" />
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
