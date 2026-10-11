import React from 'react';
import { X, Clock, Calendar, CheckCircle2, Bookmark, Share2, Sparkles } from 'lucide-react';

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-elevated border border-sage/60 overflow-hidden z-10 my-8">
        
        {/* Header Cover Image */}
        <div className="relative h-60 sm:h-72 w-full bg-sage/20">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white space-y-2">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${article.categoryColor}`}>
              {article.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ivory leading-snug">
              {article.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto text-left">
          
          {/* Metadata */}
          <div className="flex items-center justify-between text-xs text-charcoal-muted border-b border-sage/40 pb-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-freshGreen" />
                {article.readTime}
              </span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
            <span className="font-semibold text-forest">Nutrition Education Series</span>
          </div>

          {/* Key Takeaways Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-sage/25 border border-sage/60 space-y-2.5">
            <div className="flex items-center gap-2 text-forest font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-warmYellow-dark" />
              <span>Key Clinical Takeaways</span>
            </div>
            <div className="space-y-1.5">
              {article.takeaways.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-freshGreen shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Article Full Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-charcoal leading-relaxed font-normal">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="pt-4 border-t border-sage/40 text-[11px] text-charcoal-muted/80 italic">
            * Medical Disclaimer: This publication is provided for general nutrition education and awareness. It does not replace individualized clinical dietary advice from a registered healthcare professional.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-ivory/80 border-t border-sage/40 flex items-center justify-between">
          <span className="text-xs text-charcoal-muted">
            Found this article helpful?
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-forest text-ivory text-xs sm:text-sm font-semibold hover:bg-forest-light transition-colors"
          >
            Close Reader
          </button>
        </div>

      </div>
    </div>
  );
}
