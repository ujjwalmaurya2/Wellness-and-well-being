import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/content';
import ArticleModal from './ArticleModal';

export default function JournalSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="journal" className="py-16 sm:py-24 bg-sage-50/40 relative border-t border-sage/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/60 text-forest text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-freshGreen" />
            <span>Nutrition Journal & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight">
            Evidence-Based Eating Made Simple
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Demystifying metabolic science, traditional Indian food wisdom, and sustainable daily habits.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden border border-sage/50 hover:border-freshGreen/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col group"
            >
              {/* Cover Image Frame */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-sage/20">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full shadow-sm ${article.categoryColor}`}>
                  {article.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs text-charcoal-muted font-medium">
                    <Clock className="w-3.5 h-3.5 text-freshGreen" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-charcoal group-hover:text-forest transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                {/* Read Button */}
                <div className="pt-3 border-t border-sage/30 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-forest hover:text-freshGreen transition-colors group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-charcoal-light">
                    Clinical Digest
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </section>
  );
}
