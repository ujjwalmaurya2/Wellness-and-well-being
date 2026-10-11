import React from 'react';
import { Calendar, ArrowRight, MessageCircle, Sparkles, Heart } from 'lucide-react';
import { BRAND, IMAGES } from '../data/content';

export default function FinalCta({ onBookClick, onExploreClick }) {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container with Image and Forest Overlay */}
        <div className="relative rounded-4xl overflow-hidden shadow-elevated border-4 border-white bg-forest">
          {/* Background Photography */}
          <img
            src={IMAGES.finalCtaBanner}
            alt="Healthy energetic lifestyle outdoors in morning sunlight"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-35"
            loading="lazy"
          />

          {/* Warm Dark Forest Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest/90 to-forest-light/85"></div>

          {/* Organic decorative blur */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-freshGreen/30 rounded-full blur-3xl pointer-events-none"></div>

          {/* Banner Content */}
          <div className="relative z-10 py-16 sm:py-20 px-6 sm:px-12 lg:px-16 max-w-3xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-ivory text-xs font-semibold uppercase tracking-wider border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-warmYellow" />
              <span>Begin Your Nutritional Transformation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ivory tracking-tight leading-tight">
              Small Steps. Better Habits. <br />
              <span className="text-warmYellow">A Healthier You.</span>
            </h2>

            <p className="text-base sm:text-lg text-ivory/85 leading-relaxed font-normal">
              Start with a conversation and explore an approach that fits your everyday life, Indian food culture, and working schedule.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-warmYellow text-forest text-base font-bold hover:bg-warmYellow-light active:scale-[0.98] transition-all shadow-card group"
              >
                <Calendar className="w-5 h-5 text-forest group-hover:rotate-6 transition-transform" />
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-forest group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-ivory text-base font-semibold border border-white/20 transition-all backdrop-blur-sm"
              >
                <span>Explore Programs</span>
              </button>

              <a
                href={`https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  "Hello Dietitian Priya, I would like to enquire about your nutrition consultation."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-freshGreen/30 hover:bg-freshGreen/40 text-ivory text-sm font-semibold border border-freshGreen/40 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-warmYellow" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Assurance note */}
            <p className="text-xs text-ivory/70 pt-2">
              ✓ No crash dieting • ✓ Real home-cooked food • ✓ Personalized 1-on-1 support
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
