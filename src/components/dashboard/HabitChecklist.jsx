import React, { useState } from 'react';
import {
  Check, Sunrise, Sun, Coffee, Moon, HeartPulse,
  Droplets, Utensils, Egg, Apple, Flame, UtensilsCrossed,
  Salad, ShieldCheck, Smile, Footprints, Cookie, GlassWater,
  Heart, Activity, Soup, Sparkles, Wheat, Clock, CalendarCheck,
  Bike, Bed, Wind, Droplet, Award, Filter
} from 'lucide-react';
import { HABIT_CATEGORIES } from '../../data/dashboardContent';

export default function HabitChecklist({ habits, onToggleHabit, onResetHabits }) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [showRemainingOnly, setShowRemainingOnly] = useState(false);

  const iconMap = {
    Sunrise, Sun, Coffee, Moon, HeartPulse,
    Droplets, Utensils, Egg, Apple, Flame, UtensilsCrossed,
    Salad, ShieldCheck, Smile, Footprints, Cookie, GlassWater,
    Heart, Activity, Soup, Sparkles, Wheat, Clock, CalendarCheck,
    Bike, Bed, Wind, Droplet, Award,
  };

  // Filter habits
  const filteredHabits = habits.filter((habit) => {
    const matchesCategory = activeCategoryFilter === 'all' || habit.categoryId === activeCategoryFilter;
    const matchesRemaining = showRemainingOnly ? !habit.completed : true;
    return matchesCategory && matchesRemaining;
  });

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage/60 shadow-soft space-y-6 text-left">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-sage/40 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-freshGreen" />
            <span>Interactive Daily Rituals</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
            Daily Living Checklist
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted mt-0.5">
            Check off your positive lifestyle choices throughout the day. Consistency over perfection.
          </p>
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setShowRemainingOnly(!showRemainingOnly)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 ${
              showRemainingOnly
                ? 'bg-forest text-ivory border-forest shadow-xs'
                : 'bg-ivory text-charcoal border-sage/60 hover:bg-sage/20'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>{showRemainingOnly ? 'Showing Remaining' : 'Show Remaining Only'}</span>
          </button>
        </div>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          type="button"
          onClick={() => setActiveCategoryFilter('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
            activeCategoryFilter === 'all'
              ? 'bg-forest text-ivory shadow-xs'
              : 'bg-ivory text-charcoal hover:bg-sage/30 border border-sage/50'
          }`}
        >
          All Routines ({habits.length})
        </button>
        {HABIT_CATEGORIES.map((cat) => {
          const catHabits = habits.filter((h) => h.categoryId === cat.id);
          const completedCount = catHabits.filter((h) => h.completed).length;
          const isSelected = activeCategoryFilter === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategoryFilter(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 border ${
                isSelected
                  ? 'bg-forest text-ivory border-forest shadow-xs'
                  : 'bg-ivory text-charcoal hover:bg-sage/30 border-sage/50'
              }`}
            >
              <span>{cat.shortName}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-forest-light text-sage-200' : 'bg-sage/40 text-forest'}`}>
                {completedCount}/{catHabits.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Habits List */}
      <div className="space-y-3">
        {filteredHabits.length > 0 ? (
          filteredHabits.map((habit) => {
            const category = HABIT_CATEGORIES.find((c) => c.id === habit.categoryId) || HABIT_CATEGORIES[0];
            const IconComp = iconMap[habit.icon] || Sparkles;

            return (
              <div
                key={habit.id}
                onClick={() => onToggleHabit(habit.id)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 group select-none ${
                  habit.completed
                    ? 'bg-sage-50/60 border-freshGreen/40'
                    : 'bg-ivory/50 border-sage/40 hover:bg-white hover:border-freshGreen/40 hover:shadow-soft'
                }`}
              >
                {/* Custom Checkbox */}
                <div className="pt-0.5 shrink-0">
                  <div
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                      habit.completed
                        ? 'bg-forest border-forest text-ivory'
                        : 'border-sage/80 group-hover:border-forest bg-white'
                    }`}
                  >
                    {habit.completed && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                </div>

                {/* Habit Icon */}
                <div
                  className={`w-10 h-10 rounded-xl ${category.bgClass} flex items-center justify-center shrink-0 transition-transform group-hover:scale-105`}
                >
                  <IconComp className={`w-5 h-5 ${category.textClass}`} />
                </div>

                {/* Habit Content */}
                <div className="flex-1 space-y-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`text-sm sm:text-base font-bold transition-colors ${
                        habit.completed ? 'text-forest line-through opacity-75' : 'text-charcoal'
                      }`}
                    >
                      {habit.label}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-muted/70 bg-white px-2 py-0.5 rounded-md border border-sage/40">
                      {category.shortName}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {habit.description}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center bg-ivory rounded-2xl border border-sage/40 text-charcoal-muted space-y-2">
            <Check className="w-8 h-8 text-freshGreen mx-auto" />
            <p className="text-sm font-bold text-charcoal">All habits in this view are completed!</p>
            <p className="text-xs">Great job showing up for your wellbeing today.</p>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="pt-2 flex items-center justify-between text-xs text-charcoal-muted border-t border-sage/30">
        <span>Click any row to toggle completion</span>
        <button
          type="button"
          onClick={onResetHabits}
          className="text-forest hover:text-freshGreen font-semibold underline underline-offset-2"
        >
          Reset Checklist
        </button>
      </div>
    </div>
  );
}
