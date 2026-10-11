import React, { useState, useEffect } from 'react';
import {
  Calendar, CheckCircle2, Droplets, Utensils, Award,
  Sparkles, Sliders, RotateCcw, ArrowLeft, ArrowRight,
  ShieldCheck, Info, Flame, Heart, HeartPulse, User
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HABIT_CATEGORIES, INITIAL_HABITS } from '../../data/dashboardContent';
import DonutChart from './DonutChart';
import CategoryProgressChart from './CategoryProgressChart';
import HabitChecklist from './HabitChecklist';
import MealGuide from './MealGuide';
import HydrationTracker from './HydrationTracker';
import WeeklyConsistency from './WeeklyConsistency';
import PreferencesModal from './PreferencesModal';
import { BRAND, IMAGES } from '../../data/content';

export default function WellnessDashboard({ onBackToHome, onBookClick }) {
  // Today's Date Identifier
  const todayDateString = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const todayKey = new Date().toISOString().split('T')[0];

  // 1. Habits State with LocalStorage Persistence
  const [habits, setHabits] = useState(() => {
    try {
      const saved = localStorage.getItem(`nourishwell_habits_${todayKey}`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('LocalStorage read error:', e);
    }
    return INITIAL_HABITS;
  });

  // 2. Hydration State
  const [glassesLogged, setGlassesLogged] = useState(() => {
    try {
      const saved = localStorage.getItem(`nourishwell_water_${todayKey}`);
      if (saved) return parseInt(saved, 10);
    } catch (e) {}
    return 3; // Friendly initial demo count
  });

  const [dailyWaterTarget, setDailyWaterTarget] = useState(() => {
    try {
      const saved = localStorage.getItem('nourishwell_water_target');
      if (saved) return parseInt(saved, 10);
    } catch (e) {}
    return 8;
  });

  // 3. Planned Meals State
  const [plannedMeals, setPlannedMeals] = useState(() => {
    try {
      const saved = localStorage.getItem(`nourishwell_meals_${todayKey}`);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      morning: {
        id: "m-opt-1",
        title: "Steamed Idli with Drumstick Sambar",
        dietType: "vegetarian",
      },
      lunch: {
        id: "l-opt-1",
        title: "Balanced Indian Thali (Dal, Phulkas, Sabzi, Curd)",
        dietType: "vegetarian",
      },
    };
  });

  // 4. Preferences State
  const [dietPreference, setDietPreference] = useState(() => {
    try {
      const saved = localStorage.getItem('nourishwell_diet_pref');
      if (saved) return saved;
    } catch (e) {}
    return 'vegetarian';
  });

  const [mainGoal, setMainGoal] = useState(() => {
    try {
      const saved = localStorage.getItem('nourishwell_main_goal');
      if (saved) return saved;
    } catch (e) {}
    return 'weight-management';
  });

  const [preferencesModalOpen, setPreferencesModalOpen] = useState(false);

  // Sync state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(`nourishwell_habits_${todayKey}`, JSON.stringify(habits));
    } catch (e) {}
  }, [habits, todayKey]);

  useEffect(() => {
    try {
      localStorage.setItem(`nourishwell_water_${todayKey}`, glassesLogged.toString());
    } catch (e) {}
  }, [glassesLogged, todayKey]);

  useEffect(() => {
    try {
      localStorage.setItem('nourishwell_water_target', dailyWaterTarget.toString());
    } catch (e) {}
  }, [dailyWaterTarget]);

  useEffect(() => {
    try {
      localStorage.setItem(`nourishwell_meals_${todayKey}`, JSON.stringify(plannedMeals));
    } catch (e) {}
  }, [plannedMeals, todayKey]);

  useEffect(() => {
    try {
      localStorage.setItem('nourishwell_diet_pref', dietPreference);
    } catch (e) {}
  }, [dietPreference]);

  useEffect(() => {
    try {
      localStorage.setItem('nourishwell_main_goal', mainGoal);
    } catch (e) {}
  }, [mainGoal]);

  // Calculations
  const totalHabits = habits.length;
  const completedHabits = habits.filter((h) => h.completed).length;
  const remainingHabits = totalHabits - completedHabits;
  const dailyPercent = totalHabits > 0 ? Math.round((completedHabits / totalHabits) * 100) : 0;

  // Group habits by category for charts
  const habitsByCategory = HABIT_CATEGORIES.reduce((acc, cat) => {
    acc[cat.id] = habits.filter((h) => h.categoryId === cat.id);
    return acc;
  }, {});

  // Handlers
  const handleToggleHabit = (id) => {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id === id) {
          const nextState = !h.completed;
          if (nextState) {
            // Mini celebration if reached 100%
            if (completedHabits + 1 === totalHabits) {
              try {
                confetti({
                  particleCount: 50,
                  spread: 60,
                  origin: { y: 0.6 },
                  colors: ['#284B3C', '#71966B', '#F3C969'],
                });
              } catch (err) {}
            }
          }
          return { ...h, completed: nextState };
        }
        return h;
      })
    );
  };

  const handleResetHabits = () => {
    if (window.confirm("Reset all habit checkboxes for today?")) {
      setHabits((prev) => prev.map((h) => ({ ...h, completed: false })));
    }
  };

  const handleSelectMeal = (mealKey, option) => {
    setPlannedMeals((prev) => ({
      ...prev,
      [mealKey]: option,
    }));
  };

  const handleResetAllToday = () => {
    setHabits((prev) => prev.map((h) => ({ ...h, completed: false })));
    setGlassesLogged(0);
    setPlannedMeals({});
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-ivory min-h-screen text-charcoal pb-20 animate-fadeIn">
      
      {/* Top Demo Context Notification */}
      <div className="bg-forest-900 text-ivory text-xs py-2 px-4 border-b border-forest/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-freshGreen animate-pulse"></span>
            <span className="font-bold text-sage-200 uppercase tracking-wider text-[11px]">
              Demonstration Guest Mode
            </span>
            <span className="text-ivory/80 hidden sm:inline">
              Personalized demo companion • LocalStorage persistence enabled
            </span>
          </div>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1 font-semibold text-warmYellow hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Landing Page</span>
          </button>
        </div>
      </div>

      {/* Main Dashboard Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-8">
        
        {/* SECTION 1: Dashboard Welcome Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-sage/60 shadow-soft relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sage/20 rounded-full blur-3xl pointer-events-none -z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-sage/60 text-forest flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-forest" />
                  <span>{todayDateString}</span>
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-ivory text-charcoal-muted border border-sage/40">
                  Welcome to Your Wellness Space
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
                Your Daily Wellness Journey
              </h1>

              <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl leading-relaxed">
                Small, consistent habits help you build a healthier everyday routine without burnout or restrictive guilt.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('daily-checklist')}
                  className="px-5 py-2.5 rounded-xl bg-forest text-ivory font-bold text-xs sm:text-sm hover:bg-forest-light active:scale-95 transition-all shadow-xs flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-warmYellow" />
                  <span>View Today's Plan</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPreferencesModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-ivory text-charcoal font-semibold text-xs sm:text-sm hover:bg-sage/30 border border-sage/50 transition-colors flex items-center gap-1.5"
                >
                  <Sliders className="w-4 h-4 text-forest" />
                  <span>Edit Preferences</span>
                </button>
              </div>
            </div>

            {/* Right: Welcoming Lifestyle / Healthy Meal Mini Visual */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-white aspect-[4/3] bg-sage/20">
                <img
                  src={IMAGES.southIndianBreakfast}
                  alt="Wholesome Healthy Indian Breakfast"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                  <span className="text-[10px] font-bold bg-forest px-2 py-0.5 rounded text-sage-200">
                    Daily Focus
                  </span>
                  <p className="text-xs font-bold text-ivory mt-0.5">
                    Mindful Portioning & Consistent Habits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Two-Column Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* MAIN COLUMN (Left 8 Cols): Checklist, Meal Guide, Weekly Consistency */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Daily Goal Checklist */}
            <div id="daily-checklist">
              <HabitChecklist
                habits={habits}
                onToggleHabit={handleToggleHabit}
                onResetHabits={handleResetHabits}
              />
            </div>

            {/* Daily Meal Guide */}
            <div id="meal-guide">
              <MealGuide
                plannedMeals={plannedMeals}
                onSelectMeal={handleSelectMeal}
                dietPreference={dietPreference}
              />
            </div>

            {/* Weekly Progress & Consistency Chart */}
            <div id="weekly-progress">
              <WeeklyConsistency
                todayCompletion={dailyPercent}
              />
            </div>

            {/* Nutrition & Health Disclaimer */}
            <div className="p-5 rounded-2xl bg-white/80 border border-sage/50 text-left space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-forest font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-freshGreen" />
                <span>Nutritional Educational Tool Notice</span>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                This dashboard is an interactive wellness habit companion designed for positive lifestyle consistency. Habit tracking and recipe suggestions are general educational guidelines and do not replace personalized clinical advice or medical treatment.
              </p>
            </div>

          </div>

          {/* SIDE COLUMN (Right 4 Cols): Overall Donut Chart, Hydration, Categories, Quick Actions */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Overall Donut Progress Chart */}
            <DonutChart
              completed={completedHabits}
              total={totalHabits}
              label="Today's Habit Score"
            />

            {/* Hydration Tracker */}
            <HydrationTracker
              glassesLogged={glassesLogged}
              dailyTarget={dailyWaterTarget}
              onIncrement={() => setGlassesLogged((prev) => Math.min(25, prev + 1))}
              onDecrement={() => setGlassesLogged((prev) => Math.max(0, prev - 1))}
              onReset={() => setGlassesLogged(0)}
              onUpdateTarget={(val) => setDailyWaterTarget(val)}
            />

            {/* Category-Wise Progress Bars */}
            <CategoryProgressChart habitsByCategory={habitsByCategory} />

            {/* Personal Preferences Quick Card */}
            <div className="bg-white rounded-3xl p-5 border border-sage/60 shadow-soft text-left space-y-3">
              <div className="flex items-center justify-between border-b border-sage/30 pb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">
                  Active Settings
                </span>
                <button
                  type="button"
                  onClick={() => setPreferencesModalOpen(true)}
                  className="text-xs font-bold text-forest hover:text-freshGreen"
                >
                  Edit
                </button>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-charcoal-muted">Diet Pattern:</span>
                  <strong className="text-charcoal capitalize">{dietPreference.replace('-', ' ')}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-muted">Water Target:</span>
                  <strong className="text-charcoal">{dailyWaterTarget} Glasses</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-muted">Active Routine:</span>
                  <strong className="text-forest">Full 5 Phases</strong>
                </div>
              </div>
            </div>

            {/* Direct Consultation Upgrade Card */}
            <div className="bg-forest text-ivory rounded-3xl p-6 border border-forest-light shadow-card text-left space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-forest-light flex items-center justify-center text-warmYellow">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-ivory">
                  Need 1-on-1 Clinical Guidance?
                </h4>
                <p className="text-xs text-ivory/80 leading-relaxed mt-1">
                  Have lab reports or specific metabolic requirements? Book a 45-minute clinical consultation with {BRAND.nutritionistName}.
                </p>
              </div>
              <button
                type="button"
                onClick={onBookClick}
                className="w-full py-2.5 px-4 rounded-xl bg-warmYellow text-forest font-bold text-xs hover:bg-warmYellow-light transition-all shadow-xs"
              >
                Schedule Consultation
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Preferences Modal */}
      <PreferencesModal
        isOpen={preferencesModalOpen}
        onClose={() => setPreferencesModalOpen(false)}
        dietPreference={dietPreference}
        onUpdateDietPreference={setDietPreference}
        mainGoal={mainGoal}
        onUpdateMainGoal={setMainGoal}
        onResetAllToday={handleResetAllToday}
      />

    </div>
  );
}
