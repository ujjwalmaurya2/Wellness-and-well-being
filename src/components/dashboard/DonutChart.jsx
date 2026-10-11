import React from 'react';
import { CheckCircle2, CircleDashed } from 'lucide-react';

export default function DonutChart({ completed = 0, total = 0, label = "Daily Goals" }) {
  // Safety check against division by zero
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const remaining = Math.max(0, total - completed);

  // SVG circular dimensions
  const size = 180;
  const strokeWidth = 16;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-3xl p-6 border border-sage/60 shadow-soft flex flex-col items-center justify-between text-center relative group">
      <div className="w-full flex items-center justify-between border-b border-sage/30 pb-3 mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">
          {label}
        </span>
        <span className="text-[11px] font-semibold bg-sage/50 text-forest px-2.5 py-0.5 rounded-full">
          Live Tracking
        </span>
      </div>

      {/* Donut SVG Ring */}
      <div className="relative w-44 h-44 flex items-center justify-center my-2">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="transform -rotate-90"
        >
          {/* Background circle (Remaining) */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#EBF2E8"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
          />
          {/* Animated Foreground circle (Completed) */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#284B3C"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />
        </svg>

        {/* Center Percentage Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-extrabold text-charcoal tracking-tight">
            {percentage}%
          </span>
          <span className="text-xs font-semibold text-charcoal-muted uppercase tracking-wider mt-0.5">
            Complete
          </span>
        </div>
      </div>

      {/* Counts & Clear Legend */}
      <div className="w-full pt-4 border-t border-sage/30 mt-2 space-y-2">
        <div className="flex items-center justify-around text-xs font-medium">
          <div className="flex items-center gap-1.5 text-forest">
            <span className="w-3 h-3 rounded-full bg-forest shrink-0"></span>
            <span><strong>{completed}</strong> Completed</span>
          </div>
          <span className="text-charcoal/20">|</span>
          <div className="flex items-center gap-1.5 text-charcoal-muted">
            <span className="w-3 h-3 rounded-full bg-sage-200 shrink-0"></span>
            <span><strong>{remaining}</strong> Remaining</span>
          </div>
        </div>
      </div>
    </div>
  );
}
