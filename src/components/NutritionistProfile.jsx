import React, { useState } from 'react';
import { Award, BookOpen, HeartHandshake, Sparkles, CheckCircle2, Calendar, FileText, X } from 'lucide-react';
import { BRAND, IMAGES } from '../data/content';

export default function NutritionistProfile({ onBookClick }) {
  const [bioModalOpen, setBioModalOpen] = useState(false);

  const pillars = [
    {
      title: "Evidence-Based Clinical Science",
      desc: "Rooted in clinical biochemical nutrition, metabolic health, and peer-reviewed human research.",
      icon: Award,
      color: "text-forest",
      bg: "bg-forest/10",
    },
    {
      title: "Deep Respect for Indian Food Culture",
      desc: "No banning roti, dal, or regional traditions. We optimize proportions and culinary preparations.",
      icon: HeartHandshake,
      color: "text-coral",
      bg: "bg-coral/15",
    },
    {
      title: "Sustainable Metabolic Longevity",
      desc: "Designed to keep your thyroid active and lean muscle preserved so fat loss is lasting, not temporary.",
      icon: Sparkles,
      color: "text-warmYellow-dark",
      bg: "bg-warmYellow/20",
    },
    {
      title: "Zero Guilt & Mindful Relationship",
      desc: "Guilt has no place on a dinner plate. We foster peaceful, confident eating at family gatherings.",
      icon: BookOpen,
      color: "text-freshGreen",
      bg: "bg-freshGreen/15",
    },
  ];

  return (
    <section id="approach" className="py-10 sm:py-16 lg:py-24 bg-sage-50/50 relative border-t border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Photo Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Portrait */}
              <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white aspect-[4/5] bg-sage/30 relative">
                <img
                  src={IMAGES.nutritionistPortrait}
                  alt={`${BRAND.nutritionistName} - Lead Clinical Nutritionist`}
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
                
                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-forest/80 backdrop-blur-md px-2.5 py-1 rounded-md text-sage-200">
                    Lead Nutrition Consultant [Placeholder]
                  </span>
                  <h3 className="text-lg font-bold text-ivory mt-1">
                    {BRAND.nutritionistName}
                  </h3>
                  <p className="text-xs text-ivory/80">
                    {BRAND.nutritionistCredentials}
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Photo: Digital Nutrition Review */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-44 sm:w-52 aspect-square rounded-2xl overflow-hidden shadow-elevated border-4 border-white hidden sm:block bg-ivory">
                <img
                  src={IMAGES.nutritionistWorkspace}
                  alt="Reviewing personalized client nutrition plans"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-forest/20 backdrop-blur-[1px] flex items-center justify-center p-2 text-center">
                  <span className="text-[11px] font-bold text-white bg-forest/90 px-2 py-1 rounded shadow">
                    Digital Nutrition Review
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Credentials */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Meet Your Practitioner</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
                Nutrition That Fits Your Real Life
              </h2>

              <p className="text-xs sm:text-base text-charcoal/80 leading-relaxed font-normal italic">
                "Good nutrition should work with your lifestyle, food preferences, and everyday routine — not against them."
              </p>
            </div>

            <p className="text-xs sm:text-base text-charcoal/80 leading-relaxed">
              Every body operates on unique biochemical rhythms. Rather than enforcing generic, imported diet templates or starvation regimes, my practice harmonizes modern nutritional science with wholesome Indian culinary wisdom. Together, we co-create sustainable routines that you can joyfully maintain for decades.
            </p>

            {/* 4 Practice Pillars in 2-Col on mobile */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-1">
              {pillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-sage/50 shadow-2xs space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${pillar.bg} flex items-center justify-center shrink-0`}>
                        <IconComp className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${pillar.color}`} />
                      </div>
                      <h4 className="text-[11px] sm:text-xs font-bold text-charcoal leading-tight">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-[10px] sm:text-xs text-charcoal/70 leading-tight">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setBioModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest text-ivory text-xs sm:text-sm font-semibold hover:bg-forest-light active:scale-[0.98] transition-all shadow-soft"
              >
                <FileText className="w-4 h-4 text-warmYellow" />
                <span>Get to Know Your Nutritionist</span>
              </button>

              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-forest text-xs sm:text-sm font-semibold border border-sage hover:border-freshGreen/40 transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4 text-forest" />
                <span>Schedule a 1-on-1 Consultation</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Bio & Philosophy Modal */}
      {bioModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm" onClick={() => setBioModalOpen(false)}></div>
          <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-elevated border border-sage/60 z-10 space-y-5 my-8">
            <div className="flex items-center justify-between pb-3 border-b border-sage/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-freshGreen/40">
                  <img src={IMAGES.nutritionistPortrait} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal">{BRAND.nutritionistName}</h3>
                  <p className="text-xs text-charcoal-muted">{BRAND.nutritionistCredentials}</p>
                </div>
              </div>
              <button onClick={() => setBioModalOpen(false)} className="p-1 text-charcoal-muted hover:text-charcoal">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-charcoal leading-relaxed max-h-[50vh] overflow-y-auto pr-1">
              <div className="p-3 bg-ivory rounded-xl border border-sage/40">
                <p className="font-semibold text-forest text-xs uppercase tracking-wider mb-1">
                  Practitioner Information [Client Demo Note]
                </p>
                <p className="text-charcoal-muted text-xs">
                  This bio is configured as a demonstration template for iWAAT's client presentation. The prospective nutritionist client can easily insert their verified clinical degree, university, registration number (IDA/RD), clinical awards, and clinic addresses here.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-charcoal mb-1">Practice Specializations</h4>
                <ul className="list-disc pl-5 space-y-1 text-charcoal-muted">
                  <li>Sustainable Weight Management & Body Composition</li>
                  <li>Metabolic Syndrome & Pre-diabetes Glycemic Control</li>
                  <li>PCOS / PCOD & Hormonal Health Nutrition</li>
                  <li>Executive Wellness & Travel Lifestyle Nutrition</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-charcoal mb-1">Our Core Consultation Creed</h4>
                <p className="text-charcoal-muted">
                  "No starvation. No elimination of entire food groups. No reliance on artificial fat burners. Real nourishment comes from seasonal, accessible, culturally resonant foods prepared with mindfulness and metabolic balance."
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-sage/40 flex justify-end">
              <button
                onClick={() => {
                  setBioModalOpen(false);
                  onBookClick();
                }}
                className="px-5 py-2.5 rounded-xl bg-forest text-ivory text-xs sm:text-sm font-semibold hover:bg-forest-light transition-all"
              >
                Book Discovery Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
