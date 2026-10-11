import React from 'react';
import { X, Sliders, CheckCircle2, AlertTriangle, RotateCcw } from 'lucide-react';

export default function PreferencesModal({
  isOpen,
  onClose,
  dietPreference,
  onUpdateDietPreference,
  mainGoal,
  onUpdateMainGoal,
  onResetAllToday,
}) {
  if (!isOpen) return null;

  const dietOptions = [
    { id: 'all', label: 'No Preference / All Options', desc: 'Browse all curated recipes and ideas' },
    { id: 'vegetarian', label: 'Vegetarian', desc: 'Plant-based, lentils, paneer, and dairy' },
    { id: 'eggetarian', label: 'Eggetarian', desc: 'Vegetarian plus eggs for convenient morning protein' },
    { id: 'non-vegetarian', label: 'Non-Vegetarian', desc: 'Includes chicken and fish options' },
  ];

  const goalOptions = [
    { id: 'weight-management', label: 'Sustainable Weight Management' },
    { id: 'better-energy', label: 'Steady Energy & Balanced Habits' },
    { id: 'gut-health', label: 'Better Digestion & Gut Health' },
    { id: 'workday-routine', label: 'Consistent Busy Workday Routine' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-elevated border border-sage/60 z-10 space-y-6 my-8 text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-sage/40">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-forest/10 flex items-center justify-center text-forest">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-forest uppercase tracking-wider">
                Personalization Controls
              </span>
              <h3 className="text-xl font-bold text-charcoal">
                My Wellness Preferences
              </h3>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-charcoal-muted hover:text-charcoal" aria-label="Close dialog">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dietary Preferences Selector */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal">
            Dietary Eating Pattern
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {dietOptions.map((opt) => {
              const isSelected = dietPreference === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onUpdateDietPreference(opt.id)}
                  className={`p-3.5 rounded-2xl text-left border-2 transition-all ${
                    isSelected
                      ? 'border-forest bg-sage/30 shadow-xs'
                      : 'border-sage/40 bg-ivory/50 hover:bg-white text-charcoal'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <strong className="text-xs sm:text-sm font-bold text-charcoal">
                      {opt.label}
                    </strong>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-forest" />}
                  </div>
                  <p className="text-[11px] text-charcoal-muted mt-1 leading-snug">
                    {opt.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Primary Goal Selector */}
        <div className="space-y-3">
          <label htmlFor="pref-main-goal" className="block text-xs font-bold uppercase tracking-wider text-charcoal">
            Primary Wellness Focus
          </label>
          <select
            id="pref-main-goal"
            name="mainGoalPreference"
            value={mainGoal}
            onChange={(e) => onUpdateMainGoal(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-sage/60 bg-ivory text-sm focus:outline-none focus:ring-2 focus:ring-forest font-medium"
          >
            {goalOptions.map((g) => (
              <option key={g.id} value={g.id}>
                {g.label}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Action */}
        <div className="pt-4 border-t border-sage/40">
          <div className="p-4 rounded-2xl bg-coral/10 border border-coral/30 flex items-start justify-between gap-3">
            <div>
              <strong className="text-xs font-bold text-coral-dark block">
                Reset Today's Logged Progress
              </strong>
              <p className="text-[11px] text-charcoal-muted mt-0.5">
                Clear all checked habits and hydration logs for today to start fresh.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                if (window.confirm("Are you sure you want to reset all of today's logged checklist items and water count?")) {
                  onResetAllToday();
                  onClose();
                }
              }}
              className="px-3 py-1.5 rounded-xl bg-coral text-white font-bold text-xs hover:bg-coral-dark transition-colors shrink-0 flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 flex items-center justify-between text-xs text-charcoal-muted">
          <span>Changes are saved instantly to your demo session.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-forest text-ivory font-bold hover:bg-forest-light transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
