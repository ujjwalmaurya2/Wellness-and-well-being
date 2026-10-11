import React, { useState } from 'react';
import { Scale, Flame, HeartPulse, Compass, ArrowRight, Sparkles, Check, Clock } from 'lucide-react';
import { PROGRAMS } from '../data/content';
import ProgramModal from './ProgramModal';

export default function Programs({ onBookClick }) {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const iconMap = {
    Scale: Scale,
    Flame: Flame,
    HeartPulse: HeartPulse,
    Compass: Compass,
  };

  const handleBookFromModal = (program) => {
    onBookClick(program);
  };

  return (
    <section id="programs" className="py-16 sm:py-24 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/60 text-forest text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-freshGreen" />
            <span>Targeted Nutrition Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight">
            Personalized Programs Designed for Real Life
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Evidence-based nutritional coaching built around your lifestyle, favorite Indian meals, and working hours — without starvation or unsustainable rules.
          </p>
        </div>

        {/* 4 Premium Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROGRAMS.map((program) => {
            const IconComponent = iconMap[program.icon] || Scale;
            return (
              <div
                key={program.id}
                className="bg-white rounded-3xl overflow-hidden border border-sage/60 hover:border-freshGreen/40 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col group"
              >
                {/* Image Showcase */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-sage/20">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Badge */}
                  <span
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${program.badgeColor}`}
                  >
                    {program.badge}
                  </span>

                  {/* Icon Container in Corner */}
                  <div
                    className={`absolute bottom-3 right-3 w-10 h-10 rounded-2xl ${program.iconBg} backdrop-blur-md flex items-center justify-center shadow-soft border border-white/40`}
                  >
                    <IconComponent className={`w-5 h-5 ${program.iconColor}`} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs text-charcoal-muted font-medium">
                      <Clock className="w-3.5 h-3.5 text-freshGreen" />
                      <span>{program.duration}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-charcoal group-hover:text-forest transition-colors leading-snug">
                      {program.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                      {program.shortDesc}
                    </p>
                  </div>

                  {/* Card Bottom Interaction */}
                  <div className="pt-3 border-t border-sage/30 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProgram(program)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-forest hover:text-freshGreen transition-colors group/btn"
                    >
                      <span>Explore Program</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    
                    <span className="text-[11px] font-medium text-charcoal-light bg-ivory px-2 py-0.5 rounded-md">
                      1-on-1 Care
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Coaching Disclaimer */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-charcoal-muted/80 bg-white/60 py-2.5 px-4 rounded-xl border border-sage/40 inline-block">
            <span className="font-semibold text-forest">Commitment to Health:</span> We prioritize metabolic health, energy, and sustainable habits over rapid, unhealthy weight loss. No crash diets or magic powders.
          </p>
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
          onBookProgram={handleBookFromModal}
        />
      )}
    </section>
  );
}
