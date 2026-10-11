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
    <section id="programs" className="py-10 sm:py-16 lg:py-24 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/60 text-forest text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-freshGreen" />
            <span>Targeted Nutrition Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
            Personalized Programs for Real Life
          </h2>
          <p className="text-xs sm:text-base text-charcoal/75 leading-relaxed">
            Evidence-based nutritional coaching built around your lifestyle, favorite Indian meals, and working hours — without starvation.
          </p>
        </div>

        {/* 4 Premium Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {PROGRAMS.map((program) => {
            const IconComponent = iconMap[program.icon] || Scale;
            return (
              <div
                key={program.id}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-sage/60 hover:border-freshGreen/40 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col group text-left"
              >
                {/* Image Showcase */}
                <div className="relative h-44 sm:h-52 overflow-hidden bg-sage/20">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Badge */}
                  <span
                    className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold shadow-xs ${program.badgeColor}`}
                  >
                    {program.badge}
                  </span>

                  {/* Icon Container in Corner */}
                  <div
                    className={`absolute bottom-2.5 right-2.5 w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl ${program.iconBg} backdrop-blur-md flex items-center justify-center shadow-soft border border-white/40`}
                  >
                    <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${program.iconColor}`} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-charcoal-muted font-medium">
                      <Clock className="w-3.5 h-3.5 text-freshGreen" />
                      <span>{program.duration}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-charcoal group-hover:text-forest transition-colors leading-snug">
                      {program.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {program.shortDesc}
                    </p>
                  </div>

                  {/* Card Bottom Interaction */}
                  <div className="pt-2.5 border-t border-sage/30 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProgram(program)}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-forest hover:text-freshGreen transition-colors group/btn"
                    >
                      <span>Explore Program</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    
                    <span className="text-[10px] font-medium text-charcoal-light bg-ivory px-2 py-0.5 rounded-md">
                      1-on-1 Care
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <ProgramModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
          onBookConsultation={() => {
            const prog = selectedProgram;
            setSelectedProgram(null);
            handleBookFromModal(prog);
          }}
        />
      )}
    </section>
  );
}
