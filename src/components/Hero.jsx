import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Heart, Award, Flame, Leaf, UserCheck } from 'lucide-react';
import { BRAND, IMAGES } from '../data/content';

export default function Hero({ onBookClick, onExploreClick }) {
  return (
    <section id="hero" className="relative overflow-hidden pt-4 pb-10 sm:pt-8 sm:pb-16 lg:pt-14 lg:pb-24">
      {/* Background organic blur spots */}
      <div className="absolute top-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-sage/30 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-60 sm:w-80 h-60 sm:h-80 bg-warmYellow/15 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Mobile App Style Header & Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-sage/60 border border-freshGreen/30 text-forest text-[11px] sm:text-sm font-semibold shadow-2xs">
              <span className="p-0.5 sm:p-1 rounded-full bg-freshGreen text-ivory">
                <Leaf className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
              <span>Evidence-Based Indian Nutrition Coaching</span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-forest hidden sm:inline-block"></span>
              <span className="text-forest/80 hidden sm:inline-block">No Crash Diets</span>
            </div>

            {/* Editorial Hero Headline */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-[1.18] sm:leading-[1.12]">
                Feel Better. <br className="hidden sm:inline" />
                <span className="text-forest underline decoration-warmYellow decoration-wavy decoration-from-font">
                  Eat Better.
                </span>{' '}
                Live Better.
              </h1>
              <p className="text-xs sm:text-lg text-charcoal/80 max-w-xl font-normal leading-relaxed">
                Personalized nutrition designed around your real lifestyle, favorite Indian meals, and working routine — without starvation or unsustainable rules.
              </p>
            </div>

            {/* MOBILE ONLY: High-Impact Visual Card (Above the fold on phones) */}
            <div className="lg:hidden relative rounded-2xl overflow-hidden shadow-card border-2 border-white aspect-[16/10] bg-sage/20 my-3">
              <img
                src={IMAGES.heroMain}
                alt="Nutritionist consulting with client"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Bottom embedded app overlay */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-sage/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-freshGreen/15 flex items-center justify-center text-freshGreen font-bold shrink-0">
                    <Flame className="w-4 h-4 text-coral" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-forest leading-tight">Sustainable Fat Loss</p>
                    <p className="text-[10px] text-charcoal-muted leading-tight">Real Indian Dal, Roti & Sabzi</p>
                  </div>
                </div>
                <span className="text-[9px] font-bold bg-sage text-forest px-1.5 py-0.5 rounded">
                  100% Indian Plates
                </span>
              </div>
            </div>

            {/* Value Highlights Chips (App-like compact 2-column on mobile) */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 text-[11px] sm:text-xs text-charcoal font-semibold">
              <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1.5 rounded-xl border border-sage/60 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-freshGreen shrink-0" />
                <span className="truncate">Home Dal & Roti</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1.5 rounded-xl border border-sage/60 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-freshGreen shrink-0" />
                <span className="truncate">1-on-1 Coaching</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1.5 rounded-xl border border-sage/60 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-freshGreen shrink-0" />
                <span className="truncate">Metabolic Health</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1.5 rounded-xl border border-sage/60 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-freshGreen shrink-0" />
                <span className="truncate">No Starvation</span>
              </div>
            </div>

            {/* CTA Buttons (Touch-friendly & sleek on mobile) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-4 rounded-xl sm:rounded-2xl bg-forest text-ivory text-xs sm:text-base font-bold hover:bg-forest-light active:scale-[0.98] transition-all shadow-card group"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-warmYellow group-hover:rotate-6 transition-transform" />
                <span>Book Your Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ivory/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-white/90 hover:bg-white text-forest text-xs sm:text-base font-semibold border border-sage hover:border-freshGreen/40 transition-all shadow-2xs"
              >
                <span>Explore Our Programs</span>
              </button>
            </div>

            {/* Practitioner Mini-Card (Compact on Mobile) */}
            <div className="pt-2 sm:pt-4 border-t border-sage/50 flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-freshGreen/40 shrink-0">
                <img
                  src={IMAGES.nutritionistPortrait}
                  alt="Nutritionist Portrait"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-xs sm:text-sm text-charcoal">
                  Guided by {BRAND.nutritionistName}
                </p>
                <p className="text-charcoal-muted text-[10px] sm:text-xs">
                  {BRAND.nutritionistCredentials} • Clinical & Lifestyle Focus
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Desktop/Tablet Visual Composition */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative mx-auto max-w-none">
              
              {/* Main Lifestyle / Nutritionist Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/5] bg-sage/20">
                <img
                  src={IMAGES.heroMain}
                  alt="Nutritionist consulting with client in a warm setting"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Soft gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Embedded badge in photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-sage/50 shadow-soft">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-freshGreen/15 flex items-center justify-center text-freshGreen font-bold">
                        <Flame className="w-5 h-5 text-coral" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-forest">Sustainable Fat Loss</p>
                        <p className="text-[11px] text-charcoal-muted">No starving. Just smarter portioning.</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold bg-sage/70 text-forest px-2 py-1 rounded-md">
                      Proven Approach
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Top Right Card */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-elevated border border-sage/60 max-w-[210px] animate-float-slow">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-warmYellow/25 flex items-center justify-center text-warmYellow-dark shrink-0">
                    <Sparkles className="w-4 h-4 text-warmYellow-dark" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal">100% Indian Plates</p>
                    <p className="text-[11px] text-charcoal-muted leading-tight mt-0.5">
                      Dal, roti, paneer & regional recipes tailored to your goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Left Card */}
              <div className="absolute -bottom-6 -left-6 bg-forest text-ivory p-3.5 rounded-2xl shadow-elevated border border-forest-light max-w-[200px]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-warmYellow shrink-0" />
                  <div>
                    <p className="text-xs font-bold leading-tight">1-on-1 Dedicated Coach</p>
                    <p className="text-[10px] text-ivory/80 mt-0.5">Weekly Video & WhatsApp</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
