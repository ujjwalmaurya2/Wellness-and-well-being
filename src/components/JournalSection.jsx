import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/content';
import ArticleModal from './ArticleModal';

export default function JournalSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="journal" className="py-10 sm:py-16 lg:py-24 bg-sage-50/40 relative border-t border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/60 text-forest text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-freshGreen" />
            <span>Nutrition Journal & Insights</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
            Evidence-Based Eating Made Simple
          </h2>
          <p className="text-xs sm:text-base text-charcoal/75 leading-relaxed">
            Demystifying metabolic science, traditional Indian food wisdom, and sustainable daily habits.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-sage/50 hover:border-freshGreen/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col group text-left"
            >
              {/* Cover Image Frame */}
              <div className="relative h-40 sm:h-56 overflow-hidden bg-sage/20">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className={`absolute top-2.5 left-2.5 text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full shadow-xs ${article.categoryColor}`}>
                  {article.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-charcoal-muted font-medium">
                    <Clock className="w-3.5 h-3.5 text-freshGreen" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-charcoal group-hover:text-forest transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {article.summary}
                  </p>
                </div>

                {/* Read Full Article Button */}
                <div className="pt-2.5 border-t border-sage/30 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-forest hover:text-freshGreen transition-colors group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-charcoal-light font-medium bg-ivory px-2 py-0.5 rounded">
                    Evidence Based
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Reading Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </section>
  );
}
