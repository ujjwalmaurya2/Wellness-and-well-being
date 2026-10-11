import React, { useState } from 'react';
import {
  Scale, Apple, CalendarCheck, Activity,
  Monitor, Footprints, Bike,
  Video, Building2, HelpCircle,
  ArrowRight, ArrowLeft, CheckCircle2, Sparkles, RotateCcw, Calendar, MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ASSESSMENT_DATA, BRAND } from '../data/content';

export default function Assessment({ onBookWithPreferences }) {
  const [currentStep, setCurrentStep] = useState(0); // 0, 1, 2, or 3 (completed)
  const [answers, setAnswers] = useState({
    goal: null,
    lifestyle: null,
    support: null,
  });
  const [error, setError] = useState('');

  const steps = ASSESSMENT_DATA.steps;

  const iconComponents = {
    Scale, Apple, CalendarCheck, Activity,
    Monitor, Footprints, Bike,
    Video, Building2, HelpCircle,
  };

  const handleSelectOption = (stepId, optionId) => {
    setAnswers((prev) => ({
      ...prev,
      [stepId]: optionId,
    }));
    setError('');
  };

  const handleNext = () => {
    const currentStepId = steps[currentStep].id;
    if (!answers[currentStepId]) {
      setError('Please select an option before continuing.');
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setError('');
    } else {
      // Completed!
      setCurrentStep(3);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#284B3C', '#71966B', '#F3C969', '#F28B76'],
        });
      } catch (err) {
        // Fallback gracefully
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setError('');
    }
  };

  const handleReset = () => {
    setAnswers({
      goal: null,
      lifestyle: null,
      support: null,
    });
    setCurrentStep(0);
    setError('');
  };

  // Recommendation generator based on answers
  const getRecommendation = () => {
    let programName = "Weight Management & Metabolic Health";
    let programBadge = "Metabolic Focus";
    let advice = "A balanced approach focusing on portion calibration, stable blood glucose, and sustainable Indian home meals.";
    let timeline = "12 Weeks Guided Transformation";

    if (answers.goal === 'manage-weight') {
      programName = "Weight Management & Metabolic Health";
      advice = "We'll build a gentle 300-500 kcal deficit using everyday dal, roti, and paneer/egg recipes without hunger pangs.";
      timeline = "12 Weeks";
    } else if (answers.goal === 'eating-habits') {
      programName = "Sustainable Healthy Habit Coaching";
      advice = "We will optimize your meal timing, improve gut digestion, and eliminate the 4:00 PM energy slump.";
      timeline = "8 Weeks";
    } else if (answers.goal === 'consistent-routine') {
      programName = "Fat-Loss Lifestyle Coaching for Working Professionals";
      advice = "We will design quick 15-minute desk lunchbox ideas, evening cravings prevention, and social dining guidelines.";
      timeline = "8 to 12 Weeks";
    } else if (answers.goal === 'personalized-diet') {
      programName = "Personalized Clinical Nutrition (Hormone & Gut Support)";
      advice = "We'll tailor low-glycemic, anti-inflammatory Indian meal plans tailored to your specific lab reports (PCOS/Thyroid/HbA1c).";
      timeline = "12 to 16 Weeks";
    }

    let supportMode = "Online Video & Daily WhatsApp";
    if (answers.support === 'in-person') {
      supportMode = "In-Person Clinic Sessions (Mumbai Studio [Demo])";
    } else if (answers.support === 'undecided') {
      supportMode = "Complimentary 10-Min Discovery Call";
    }

    return { programName, programBadge, advice, timeline, supportMode };
  };

  const rec = getRecommendation();

  return (
    <section id="assessment" className="py-10 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-sage/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/50 text-forest text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-freshGreen" />
            <span>Interactive Nutrition Quiz</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal tracking-tight leading-tight">
            Your Wellness Journey Starts Here
          </h2>
          <p className="text-xs sm:text-base text-charcoal/75">
            Tell us a little about your goals so we can help you choose the right next step.
          </p>
        </div>

        {/* Assessment Card Box */}
        <div className="bg-ivory rounded-3xl p-6 sm:p-10 border border-sage/60 shadow-card relative">
          
          {/* Progress Bar (Visible during steps 0, 1, 2) */}
          {currentStep < 3 && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold text-charcoal-muted mb-2">
                <span>Step {currentStep + 1} of {steps.length}</span>
                <span className="text-forest">{Math.round(((currentStep + 1) / steps.length) * 100)}% Completed</span>
              </div>
              <div className="w-full h-2 bg-sage/40 rounded-full overflow-hidden">
                <div
                  className="h-full bg-forest transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Steps Content (0, 1, 2) */}
          {currentStep < 3 ? (
            <div className="space-y-6">
              {/* Step Question */}
              <div className="text-left space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
                  {steps[currentStep].title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted">
                  {steps[currentStep].subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {steps[currentStep].options.map((option) => {
                  const IconComp = iconComponents[option.icon] || Sparkles;
                  const isSelected = answers[steps[currentStep].id] === option.id;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption(steps[currentStep].id, option.id)}
                      className={`text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                        isSelected
                          ? 'border-forest bg-sage/30 shadow-soft'
                          : 'border-sage/50 bg-white hover:border-freshGreen/40 hover:bg-white/90'
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-forest text-ivory' : 'bg-sage/40 text-forest'
                        }`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm sm:text-base font-bold text-charcoal">
                            {option.label}
                          </span>
                          {isSelected && (
                            <CheckCircle2 className="w-5 h-5 text-forest shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-charcoal-muted leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-xs text-coral-dark font-medium pt-1 animate-shake">
                  {error}
                </p>
              )}

              {/* Actions Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-sage/40">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                    currentStep === 0
                      ? 'text-charcoal/30 cursor-not-allowed'
                      : 'text-charcoal hover:text-forest hover:bg-sage/30'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest text-ivory text-xs sm:text-sm font-semibold hover:bg-forest-light active:scale-[0.98] transition-all shadow-soft"
                >
                  <span>{currentStep === steps.length - 1 ? 'See Recommended Plan' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Completed Screen: Personalized Recommendation */
            <div className="space-y-6 text-left animate-fadeIn">
              <div className="flex items-center justify-between pb-4 border-b border-sage/40">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-forest uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-warmYellow-dark" />
                  <span>Personalized Assessment Recommendation</span>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-charcoal-muted hover:text-forest transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
              </div>

              {/* Recommendation Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-forest/20 shadow-soft space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-forest text-ivory">
                    Recommended Pathway
                  </span>
                  <span className="text-xs text-charcoal-muted font-medium">
                    Estimated Horizon: <strong className="text-forest">{rec.timeline}</strong>
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-charcoal">
                  {rec.programName}
                </h3>

                <p className="text-sm sm:text-base text-charcoal leading-relaxed">
                  {rec.advice}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-ivory p-3 rounded-xl border border-sage/40 text-xs">
                    <span className="text-charcoal-muted block">Selected Lifestyle Match:</span>
                    <strong className="text-charcoal capitalize">
                      {answers.lifestyle ? steps[1].options.find(o => o.id === answers.lifestyle)?.label : 'Standard'}
                    </strong>
                  </div>
                  <div className="bg-ivory p-3 rounded-xl border border-sage/40 text-xs">
                    <span className="text-charcoal-muted block">Preferred Mode:</span>
                    <strong className="text-charcoal capitalize">
                      {rec.supportMode}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onBookWithPreferences({ programName: rec.programName, ...answers })}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-forest text-ivory text-sm font-semibold hover:bg-forest-light active:scale-[0.98] transition-all shadow-soft"
                >
                  <Calendar className="w-4 h-4 text-warmYellow" />
                  <span>Book Consultation With This Plan</span>
                </button>

                <a
                  href={`https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Hello Dietitian Priya, I completed your website wellness assessment and was recommended the '${rec.programName}'. I would like to consult with you.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-freshGreen/15 text-forest text-sm font-semibold hover:bg-freshGreen/25 transition-colors border border-freshGreen/30"
                >
                  <MessageCircle className="w-4 h-4 text-freshGreen" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>

              <p className="text-[11px] text-charcoal-muted/70 italic text-center sm:text-left">
                * Note: This recommendation is a guided demonstration preview. Individual clinical assessment will be confirmed during your initial deep-dive consultation.
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
