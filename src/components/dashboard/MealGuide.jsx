import React, { useState } from 'react';
import {
  Utensils, Clock, CheckCircle2, ChevronRight, Sparkles,
  Calendar, RotateCcw, Filter, Check, Heart
} from 'lucide-react';
import { MEAL_GUIDE_DATA } from '../../data/dashboardContent';

export default function MealGuide({ plannedMeals, onSelectMeal, onToggleMealPlanned, dietPreference = 'all' }) {
  const [activeMealTime, setActiveMealTime] = useState('morning'); // 'morning', 'lunch', 'evening', 'dinner'

  const mealKeys = ['morning', 'lunch', 'evening', 'dinner'];

  const mealTimeLabels = {
    morning: 'Morning Breakfast',
    lunch: 'Midday Lunch',
    evening: 'Evening Snack (Optional)',
    dinner: 'Dinner Routine',
  };

  // Filter options according to dietary preference
  const filterOptionsByDiet = (options) => {
    if (dietPreference === 'all' || dietPreference === 'no-preference') return options;
    if (dietPreference === 'vegetarian') {
      return options.filter((o) => o.dietType === 'vegetarian');
    }
    if (dietPreference === 'eggetarian') {
      return options.filter((o) => o.dietType === 'vegetarian' || o.dietType === 'eggetarian');
    }
    if (dietPreference === 'non-vegetarian') {
      return options; // all options valid
    }
    return options;
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage/60 shadow-soft space-y-6 text-left">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sage/40 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-freshGreen/15 text-forest text-xs font-semibold uppercase tracking-wider mb-1">
            <Utensils className="w-3.5 h-3.5 text-freshGreen" />
            <span>Curated Indian Meal Ideas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
            Your Daily Meal Guide
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted mt-0.5">
            Explore balanced meal ideas and adapt them to your preferences, routine, and nutritional needs.
          </p>
        </div>

        {/* Dietary preference indicator */}
        <div className="text-xs text-charcoal-muted self-start sm:self-auto bg-ivory px-3 py-1.5 rounded-xl border border-sage/40">
          Diet: <strong className="text-forest capitalize">{dietPreference.replace('-', ' ')}</strong>
        </div>
      </div>

      {/* 4 Meal Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {mealKeys.map((key) => {
          const isSelected = activeMealTime === key;
          const currentPlanned = plannedMeals[key];
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveMealTime(key)}
              className={`p-3 rounded-2xl text-left border-2 transition-all relative ${
                isSelected
                  ? 'border-forest bg-forest text-ivory shadow-xs'
                  : 'border-sage/40 bg-ivory/50 hover:bg-white text-charcoal'
              }`}
            >
              <span className="text-[10px] uppercase font-bold tracking-wider block opacity-75">
                {key}
              </span>
              <strong className="text-xs sm:text-sm block truncate mt-0.5">
                {mealTimeLabels[key].split(' ')[0]}
              </strong>
              {currentPlanned && (
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-warmYellow animate-pulse"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Meal Section Details */}
      {(() => {
        const mealSection = MEAL_GUIDE_DATA[activeMealTime];
        const options = filterOptionsByDiet(mealSection.options);
        const currentPlannedOption = plannedMeals[activeMealTime];

        return (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-sage/20 p-3.5 rounded-2xl border border-sage/40 text-xs">
              <span className="font-bold text-forest">
                {mealSection.category} ({mealSection.timeWindow})
              </span>
              <span className="text-charcoal-muted">
                {mealSection.description}
              </span>
            </div>

            {/* Meal Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {options.map((opt) => {
                const isSelected = currentPlannedOption?.id === opt.id;

                return (
                  <div
                    key={opt.id}
                    className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                      isSelected
                        ? 'border-forest bg-sage-50/50 shadow-soft ring-2 ring-forest/20'
                        : 'border-sage/50 bg-white hover:border-freshGreen/40 hover:shadow-soft'
                    }`}
                  >
                    {/* Meal Photo Frame */}
                    <div className="relative h-44 overflow-hidden bg-sage/20">
                      <img
                        src={opt.image}
                        alt={opt.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-forest shadow-xs backdrop-blur-sm capitalize">
                        {opt.dietType}
                      </span>
                      <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-charcoal/70 text-white backdrop-blur-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {opt.prepTime}
                      </span>
                      {isSelected && (
                        <div className="absolute inset-0 bg-forest/20 backdrop-blur-[1px] flex items-center justify-center">
                          <span className="bg-forest text-ivory text-xs font-bold px-3 py-1 rounded-full shadow-soft flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5" />
                            Planned for Today
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Meal Details */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5">
                        <h4 className="text-base font-bold text-charcoal leading-snug">
                          {opt.title}
                        </h4>
                        <p className="text-xs text-charcoal-muted leading-relaxed">
                          {opt.description}
                        </p>
                      </div>

                      {/* Highlights Pill Row */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {opt.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-medium bg-ivory px-2 py-0.5 rounded-md text-forest border border-sage/40"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="pt-3 border-t border-sage/30 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => onSelectMeal(activeMealTime, opt)}
                          className={`w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                            isSelected
                              ? 'bg-forest text-ivory'
                              : 'bg-ivory hover:bg-forest hover:text-ivory text-charcoal border border-sage/60'
                          }`}
                        >
                          {isSelected ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-warmYellow" />
                              <span>Selected for Today</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-3.5 h-3.5 text-warmYellow-dark" />
                              <span>Plan This Meal</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* Planned Meals Summary Drawer */}
      <div className="p-4 sm:p-5 bg-ivory rounded-2xl border border-sage/50 space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-forest uppercase tracking-wider">
            Your Day's Meal Architecture
          </span>
          <span className="text-charcoal-muted">
            {Object.keys(plannedMeals).length} of 4 Meals Planned
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {mealKeys.map((key) => {
            const planned = plannedMeals[key];
            return (
              <div
                key={key}
                className="bg-white p-2.5 rounded-xl border border-sage/40 flex flex-col justify-between"
              >
                <span className="text-[10px] uppercase font-bold text-charcoal-muted">
                  {key}
                </span>
                <span className="font-medium text-charcoal truncate mt-0.5">
                  {planned ? planned.title : 'Not planned yet'}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
