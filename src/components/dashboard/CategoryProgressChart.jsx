import React from 'react';
import { Sunrise, Sun, Coffee, Moon, HeartPulse } from 'lucide-react';
import { HABIT_CATEGORIES } from '../../data/dashboardContent';

export default function CategoryProgressChart({ habitsByCategory }) {
  const iconMap = {
    Sunrise,
    Sun,
    Coffee,
    Moon,
    HeartPulse,
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-sage/60 shadow-soft space-y-4 text-left">
      <div className="flex items-center justify-between border-b border-sage/30 pb-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">
          Routine Completion By Category
        </h3>
        <span className="text-[11px] text-charcoal-muted">
          5 Phases of Day
        </span>
      </div>

      <div className="space-y-3.5 pt-1">
        {HABIT_CATEGORIES.map((cat) => {
          const habits = habitsByCategory[cat.id] || [];
          const total = habits.length;
          const completed = habits.filter((h) => h.completed).length;
          const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
          const IconComp = iconMap[cat.icon] || Sunrise;

          return (
            <div key={cat.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-lg ${cat.bgClass} flex items-center justify-center ${cat.textClass} shrink-0`}>
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-charcoal">{cat.name}</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal-muted font-medium text-[11px]">
                  <span>{completed}/{total}</span>
                  <span className="font-bold text-charcoal w-8 text-right">{percent}%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-sage-50 rounded-full overflow-hidden border border-sage/30">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${percent}%`,
                    backgroundColor: cat.colorHex,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
