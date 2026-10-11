import React from 'react';
import { X, CheckCircle2, Clock, Users, Calendar, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { BRAND } from '../data/content';

export default function ProgramModal({ program, onClose, onBookProgram }) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-elevated border border-sage/60 overflow-hidden z-10 my-8">
        {/* Header Image with close button */}
        <div className="relative h-56 sm:h-64 w-full bg-sage/20">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${program.badgeColor}`}>
              {program.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ivory">
              {program.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Metadata pill row */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-charcoal">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sage/40 text-forest font-semibold">
              <Clock className="w-4 h-4" />
              <span>Duration: {program.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sage/40 text-forest font-semibold">
              <Users className="w-4 h-4" />
              <span>Format: 1-on-1 Dedicated</span>
            </div>
          </div>

          {/* Deep Overview */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal-muted mb-2">
              Program Overview
            </h3>
            <p className="text-sm sm:text-base text-charcoal leading-relaxed">
              {program.details}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal-muted mb-3">
              What Is Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal bg-ivory/80 p-2.5 rounded-xl border border-sage/40">
                  <CheckCircle2 className="w-4 h-4 text-freshGreen shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who it is suitable for */}
          <div className="p-4 rounded-2xl bg-sage/20 border border-sage/50">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-forest shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-forest uppercase tracking-wider">Ideal For</p>
                <p className="text-xs sm:text-sm text-charcoal mt-0.5">{program.suitableFor}</p>
              </div>
            </div>
          </div>

          {/* Responsible Health Disclaimer */}
          <p className="text-[11px] text-charcoal-muted italic border-t border-sage/40 pt-4">
            * Demonstration Program: Real client nutritional plans are formulated following comprehensive personal consultation and medical history review. No program claims or guarantees rapid weight loss.
          </p>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 bg-ivory/60 border-t border-sage/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
              `Hello Dietitian Priya, I would like to enquire specifically about the ${program.title} program.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-freshGreen/15 text-forest text-xs sm:text-sm font-semibold hover:bg-freshGreen/25 transition-colors border border-freshGreen/25"
          >
            <MessageCircle className="w-4 h-4 text-freshGreen" />
            <span>Enquire on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onBookProgram(program);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-forest text-ivory text-xs sm:text-sm font-semibold hover:bg-forest-light transition-all shadow-soft"
          >
            <Calendar className="w-4 h-4 text-warmYellow" />
            <span>Book Initial Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
}
