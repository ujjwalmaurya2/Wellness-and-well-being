import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Heart, Award, Flame, Leaf } from 'lucide-react';
import { BRAND, IMAGES } from '../data/content';

export default function Hero({ onBookClick, onExploreClick }) {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background organic blur spots */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-sage/30 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-warmYellow/15 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Value Messaging */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/60 border border-freshGreen/30 text-forest text-xs sm:text-sm font-semibold shadow-sm">
              <span className="p-1 rounded-full bg-freshGreen text-ivory">
                <Leaf className="w-3.5 h-3.5" />
              </span>
              <span>Evidence-Based Indian Nutrition Coaching</span>
              <span className="w-1.5 h-1.5 rounded-full bg-forest hidden sm:inline-block"></span>
              <span className="text-forest/80 hidden sm:inline-block">No Crash Diets</span>
            </div>

            {/* Editorial Hero Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-[1.12]">
                Feel Better. <br className="hidden sm:inline" />
                <span className="text-forest underline decoration-warmYellow decoration-wavy decoration-from-font">
                  Eat Better.
                </span>{' '}
                Live Better.
              </h1>
              <p className="text-lg sm:text-xl text-charcoal-muted max-w-2xl font-normal leading-relaxed pt-2">
                Personalized nutrition and sustainable weight-management guidance designed around your real lifestyle, favorite Indian meals, and working routine.
              </p>
            </div>

            {/* Value Highlights Pill Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-charcoal font-medium pt-1">
              <div className="flex items-center gap-1.5 bg-ivory-50 px-3 py-1.5 rounded-lg border border-sage/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-freshGreen" />
                <span>Eat Home-Cooked Dal & Roti</span>
              </div>
              <div className="flex items-center gap-1.5 bg-ivory-50 px-3 py-1.5 rounded-lg border border-sage/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-freshGreen" />
                <span>1-on-1 WhatsApp Coaching</span>
              </div>
              <div className="flex items-center gap-1.5 bg-ivory-50 px-3 py-1.5 rounded-lg border border-sage/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-freshGreen" />
                <span>Hormone & Metabolic Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-forest text-ivory text-base font-semibold hover:bg-forest-light active:scale-[0.98] transition-all shadow-card group"
              >
                <Calendar className="w-5 h-5 text-warmYellow group-hover:rotate-6 transition-transform" />
                <span>Book Your Consultation</span>
                <ArrowRight className="w-4 h-4 text-ivory/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/80 hover:bg-white text-forest text-base font-semibold border border-sage hover:border-freshGreen/40 transition-all shadow-sm"
              >
                <span>Explore Our Programs</span>
              </button>
            </div>

            {/* Credibility / Practitioner Note */}
            <div className="pt-4 border-t border-sage/60 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-freshGreen/40 shrink-0">
                <img
                  src={IMAGES.nutritionistPortrait}
                  alt="Nutritionist Portrait"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-charcoal">
                  Guided by {BRAND.nutritionistName}
                </p>
                <p className="text-charcoal-muted text-xs">
                  {BRAND.nutritionistCredentials} • Clinical & Lifestyle Focus
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Asymmetrical Visual Composition with Photography & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Lifestyle / Nutritionist Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/5] bg-sage/20">
                <img
                  src={IMAGES.heroMain}
                  alt="Nutritionist consulting with client in a warm, welcoming setting"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Soft gradient bottom overlay for readability */}
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

              {/* Floating Top Right Card: Indian Kitchen Friendly */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-elevated border border-sage/60 max-w-[210px] hidden sm:block animate-float-slow">
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

              {/* Floating Bottom Left Card: 1-on-1 Guidance */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-forest text-ivory p-3.5 rounded-2xl shadow-elevated border border-forest-light max-w-[200px] hidden sm:block">
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
