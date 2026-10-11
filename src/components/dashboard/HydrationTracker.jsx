import React, { useState } from 'react';
import { Plus, Minus, RotateCcw, Droplets, Sparkles, Settings } from 'lucide-react';

export default function HydrationTracker({
  glassesLogged = 0,
  dailyTarget = 8,
  onIncrement,
  onDecrement,
  onReset,
  onUpdateTarget,
}) {
  const [editingTarget, setEditingTarget] = useState(false);
  const [tempTarget, setTempTarget] = useState(dailyTarget);

  const percentage = dailyTarget > 0 ? Math.min(100, Math.round((glassesLogged / dailyTarget) * 100)) : 0;
  const approxMl = glassesLogged * 250;

  const handleSaveTarget = () => {
    const val = parseInt(tempTarget, 10);
    if (!isNaN(val) && val > 0 && val <= 25) {
      onUpdateTarget(val);
      setEditingTarget(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-sage/60 shadow-soft space-y-4 text-left">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-sage/30 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-freshGreen/15 flex items-center justify-center text-forest">
            <Droplets className="w-4 h-4 text-freshGreen" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
              Hydration Tracker
            </h3>
            <span className="text-[11px] text-charcoal-muted">
              {approxMl} ml consumed (~250ml / glass)
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setEditingTarget(!editingTarget)}
          className="text-xs text-charcoal-muted hover:text-forest p-1 rounded-lg hover:bg-sage/20 transition-colors"
          title="Edit target"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>

      {/* Target Setting Input (if toggled) */}
      {editingTarget && (
        <div className="p-3 bg-ivory rounded-2xl border border-sage/40 space-y-2 text-xs">
          <label htmlFor="hydration-target" className="font-bold text-charcoal block">Set Daily Glasses Target:</label>
          <div className="flex items-center gap-2">
            <input
              id="hydration-target"
              name="hydrationTarget"
              type="number"
              min="1"
              max="20"
              value={tempTarget}
              onChange={(e) => setTempTarget(e.target.value)}
              className="w-20 px-2 py-1 border border-sage rounded-lg text-center font-bold"
            />
            <button
              type="button"
              onClick={handleSaveTarget}
              className="px-3 py-1 bg-forest text-ivory rounded-lg font-bold text-xs"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditingTarget(false)}
              className="text-xs text-charcoal-muted"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Main Counter & Progress */}
      <div className="flex items-center justify-between gap-4 py-2">
        <div>
          <div className="text-3xl font-extrabold text-forest tracking-tight">
            {glassesLogged}{' '}
            <span className="text-base font-medium text-charcoal-muted">/ {dailyTarget} Glasses</span>
          </div>
          <p className="text-xs text-charcoal-muted mt-0.5">
            {percentage}% of your daily target
          </p>
        </div>

        {/* Counter Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onDecrement}
            disabled={glassesLogged <= 0}
            className="w-10 h-10 rounded-2xl bg-ivory hover:bg-sage/40 border border-sage/50 text-charcoal flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Decrease water count"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onIncrement}
            className="w-10 h-10 rounded-2xl bg-freshGreen text-ivory hover:bg-forest shadow-xs flex items-center justify-center transition-all"
            aria-label="Increase water count"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="w-full h-2.5 bg-sage-50 rounded-full overflow-hidden border border-sage/40">
          <div
            className="h-full bg-freshGreen rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      {/* Visual Glasses Row */}
      <div className="flex items-center justify-between gap-1 pt-1 overflow-hidden">
        {Array.from({ length: dailyTarget }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-3 rounded-full transition-all ${
              i < glassesLogged ? 'bg-freshGreen' : 'bg-sage-100 border border-sage/40'
            }`}
          ></div>
        ))}
      </div>

      {/* Reset & Practical Tip */}
      <div className="pt-2 flex items-center justify-between text-xs text-charcoal-muted border-t border-sage/30">
        <span className="text-[11px]">Individual fluid needs vary by activity & climate</span>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1 text-[11px] text-forest hover:text-freshGreen"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}
