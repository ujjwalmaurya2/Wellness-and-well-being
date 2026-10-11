import React, { useState } from 'react';
import { Utensils, Check, Sparkles, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { INDIAN_LIFE_CARDS, THALI_EXPLORER, IMAGES } from '../data/content';

export default function IndianNutritionEditorial() {
  const [activeTab, setActiveTab] = useState('protein');

  const activeComponent = THALI_EXPLORER.components.find((c) => c.id === activeTab) || THALI_EXPLORER.components[0];

  return (
    <section id="indian-plate" className="py-16 sm:py-24 bg-ivory-200/50 relative border-t border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-freshGreen/15 text-forest text-xs font-semibold uppercase tracking-wider">
            <Utensils className="w-3.5 h-3.5 text-freshGreen" />
            <span>Rooted in Indian Culture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight">
            Healthy Eating, Made for Real Life
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Practical nutrition ideas that respect your routine, family traditions, and familiar foods. No crash cuts. No exotic superfood mandates.
          </p>
        </div>

        {/* 3 Rich Visual Editorial Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {INDIAN_LIFE_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl overflow-hidden border border-sage/60 hover:border-freshGreen/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative h-60 overflow-hidden bg-sage/20">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-white/95 text-forest shadow-sm backdrop-blur-md">
                  {card.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider">
                    {card.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-charcoal group-hover:text-forest transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal leading-relaxed pt-1">
                    {card.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="pt-3 border-t border-sage/30 flex flex-wrap gap-1.5">
                  {card.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium bg-ivory px-2.5 py-1 rounded-lg text-forest border border-sage/40"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE SHOWSTOPPER: The Balanced Indian Plate (Thali) Explorer */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-sage/60 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Thali Photograph with Interactive Overlays */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-ivory aspect-square bg-sage/20">
                <img
                  src={IMAGES.indianThali}
                  alt="Traditional Balanced Indian Thali with Dal, Roti, Sabzi, and Curd"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Floating pill badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-soft border border-sage/40 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-freshGreen animate-ping"></span>
                  <span className="text-xs font-bold text-forest">The 2:1:1 Plate Rule</span>
                </div>

                {/* Quick overlay preview badge */}
                <div className="absolute bottom-3 inset-x-3 bg-charcoal/80 backdrop-blur-md p-3 rounded-2xl text-white text-xs">
                  <p className="font-semibold text-warmYellow">Active Focus: {activeComponent.name}</p>
                  <p className="text-[11px] text-white/80 truncate mt-0.5">{activeComponent.examples}</p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Tabs & Macro Science */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-forest bg-sage/40 px-3 py-1 rounded-full">
                  Interactive Plate Breakdown
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
                  {THALI_EXPLORER.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted">
                  {THALI_EXPLORER.subtitle}
                </p>
              </div>

              {/* Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {THALI_EXPLORER.components.map((comp) => {
                  const isCurrent = comp.id === activeTab;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => setActiveTab(comp.id)}
                      className={`p-3 rounded-2xl text-left border-2 transition-all ${
                        isCurrent
                          ? 'border-forest bg-forest text-ivory shadow-soft'
                          : 'border-sage/50 bg-ivory hover:border-freshGreen/40 text-charcoal'
                      }`}
                    >
                      <span className="text-[11px] block opacity-80">{comp.badge}</span>
                      <strong className="text-xs sm:text-sm font-bold block truncate">
                        {comp.name.split(' ')[0]}
                      </strong>
                    </button>
                  );
                })}
              </div>

              {/* Active Component Details Panel */}
              <div className={`p-5 sm:p-6 rounded-2xl border-2 transition-all space-y-3.5 ${activeComponent.color}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-current/15 pb-2">
                  <h4 className="text-lg font-extrabold text-charcoal">
                    {activeComponent.name}
                  </h4>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white shadow-xs">
                    Target Portion: {activeComponent.portion}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-80 block">
                    Ideal Indian Food Sources
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-charcoal">
                    {activeComponent.examples}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-80 block">
                    Metabolic & Digestive Purpose
                  </span>
                  <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
                    {activeComponent.role}
                  </p>
                </div>

                {/* Nutritionist's Practical Kitchen Tip */}
                <div className="p-3 bg-white/90 rounded-xl border border-current/20 flex items-start gap-2.5 text-xs text-charcoal shadow-xs">
                  <Sparkles className="w-4 h-4 text-warmYellow-dark shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-forest">Practitioner's Tip: </strong>
                    {activeComponent.coachTip}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
