import React, { useState } from 'react';
import { Calendar, TrendingUp, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

export default function WeeklyConsistency({ historyData = {}, todayCompletion = 0 }) {
  const [showSampleData, setShowSampleData] = useState(false);

  // Generate last 7 days keys (e.g. Day 1 to Day 7)
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Real dates vs sample client demo data
  const sampleWeekData = [
    { day: 'Mon', percent: 75, isRecorded: true },
    { day: 'Tue', percent: 85, isRecorded: true },
    { day: 'Wed', percent: 60, isRecorded: true },
    { day: 'Thu', percent: 90, isRecorded: true },
    { day: 'Fri', percent: 80, isRecorded: true },
    { day: 'Sat', percent: 70, isRecorded: true },
    { day: 'Today', percent: todayCompletion, isRecorded: true },
  ];

  // Actual recorded data from user
  const activeDays = showSampleData
    ? sampleWeekData
    : [
        { day: 'Mon', percent: 0, isRecorded: false },
        { day: 'Tue', percent: 0, isRecorded: false },
        { day: 'Wed', percent: 0, isRecorded: false },
        { day: 'Thu', percent: 0, isRecorded: false },
        { day: 'Fri', percent: 0, isRecorded: false },
        { day: 'Sat', percent: 0, isRecorded: false },
        { day: 'Today', percent: todayCompletion, isRecorded: true },
      ];

  const recordedOnly = activeDays.filter((d) => d.isRecorded && d.percent > 0);
  const averagePercent =
    recordedOnly.length > 0
      ? Math.round(recordedOnly.reduce((acc, d) => acc + d.percent, 0) / recordedOnly.length)
      : todayCompletion;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sage/60 shadow-soft space-y-5 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sage/40 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-wider mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-freshGreen" />
            <span>Consistency Overview</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
            Your Consistency This Week
          </h3>
          <p className="text-xs text-charcoal-muted mt-0.5">
            Focus on sustainable routine adherence. We celebrate showing up, not rigid perfection.
          </p>
        </div>

        {/* Demo Toggle Button for Client Presentation */}
        <button
          type="button"
          onClick={() => setShowSampleData(!showSampleData)}
          className="self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-xl border border-sage/60 bg-ivory text-charcoal hover:bg-sage/20 transition-colors"
        >
          {showSampleData ? 'Show Real Live Data' : 'Preview 7-Day History [Demo]'}
        </button>
      </div>

      {!showSampleData && todayCompletion === 0 ? (
        <div className="p-8 text-center bg-ivory rounded-2xl border border-sage/40 space-y-2 text-charcoal-muted">
          <Calendar className="w-8 h-8 text-forest mx-auto" />
          <p className="text-sm font-bold text-charcoal">
            Your weekly journey starts today.
          </p>
          <p className="text-xs max-w-sm mx-auto">
            Complete your first checklist habits above to begin recording your personal consistency track.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* 7-Day Column Chart */}
          <div className="flex items-end justify-between gap-2 h-44 pt-4 px-2">
            {activeDays.map((item, idx) => {
              const isToday = item.day === 'Today';
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  {/* Value bubble */}
                  <span className={`text-[10px] font-bold ${isToday ? 'text-forest' : 'text-charcoal-muted'}`}>
                    {item.percent}%
                  </span>

                  {/* Vertical bar */}
                  <div className="w-full max-w-[36px] bg-sage-50 rounded-xl overflow-hidden h-32 flex items-end border border-sage/30">
                    <div
                      className={`w-full rounded-xl transition-all duration-700 ${
                        isToday
                          ? 'bg-forest'
                          : item.percent > 0
                          ? 'bg-freshGreen'
                          : 'bg-transparent'
                      }`}
                      style={{ height: `${item.percent}%` }}
                    ></div>
                  </div>

                  {/* Day label */}
                  <span
                    className={`text-xs font-semibold ${
                      isToday ? 'text-forest font-bold' : 'text-charcoal-muted'
                    }`}
                  >
                    {item.day}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Average pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-ivory rounded-2xl border border-sage/40 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-freshGreen" />
              <span>
                Weekly Consistency Average: <strong className="text-forest font-bold text-sm">{averagePercent}%</strong>
              </span>
            </div>
            <span className="text-charcoal-muted text-[11px]">
              {showSampleData ? 'Demonstration History View' : 'Calculated from active completed tasks'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
