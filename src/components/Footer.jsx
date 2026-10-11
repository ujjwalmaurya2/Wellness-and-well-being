import React, { useState } from 'react';
import {
  MessageCircle, Mail, MapPin, Phone, ShieldCheck, Heart, Sparkles, ExternalLink
} from 'lucide-react';
import { BRAND, PROGRAMS } from '../data/content';
import PolicyModal from './PolicyModal';

export default function Footer({ onBookClick }) {
  const [activePolicy, setActivePolicy] = useState(null);

  return (
    <footer className="bg-forest-900 text-ivory/90 border-t border-forest-light/40 relative">
      {/* Upper Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-forest-light flex items-center justify-center text-warmYellow shadow-sm">
                <svg className="w-6 h-6 fill-current text-warmYellow" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V19h-2v-2.07c-3.11-.47-5.5-3.08-5.5-6.27 0-.55.45-1 1-1s1 .45 1 1c0 2.21 1.79 4 4 4s4-1.79 4-4c0-.55.45-1 1-1s1 .45 1 1c0 3.19-2.39 5.8-5.5 6.27z"/>
                  <path d="M12 4c-3.31 0-6 2.69-6 6 0 .55.45 1 1 1s1-.45 1-1c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .55.45 1 1 1s1-.45 1-1c0-3.31-2.69-6-6-6z" fill="#71966B"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-ivory tracking-tight">
                  {BRAND.name}
                </span>
                <span className="text-xs text-sage-300 font-medium tracking-wide">
                  Clinical & Lifestyle Nutrition
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ivory/75 leading-relaxed">
              Personalized, evidence-based nutrition coaching designed for real Indian lives, home-cooked food habits, and sustainable metabolic wellness.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#demo-social"
                className="w-9 h-9 rounded-xl bg-forest-light/60 hover:bg-forest-light text-ivory/80 hover:text-warmYellow flex items-center justify-center transition-colors border border-forest-light"
                title="Instagram (Placeholder)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#demo-social"
                className="w-9 h-9 rounded-xl bg-forest-light/60 hover:bg-forest-light text-ivory/80 hover:text-warmYellow flex items-center justify-center transition-colors border border-forest-light"
                title="LinkedIn (Placeholder)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#demo-social"
                className="w-9 h-9 rounded-xl bg-forest-light/60 hover:bg-forest-light text-ivory/80 hover:text-warmYellow flex items-center justify-center transition-colors border border-forest-light"
                title="YouTube (Placeholder)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-freshGreen/30 hover:bg-freshGreen text-ivory flex items-center justify-center transition-colors border border-freshGreen/40"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-warmYellow">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-ivory/80">
              <li>
                <a href="#approach" className="hover:text-warmYellow transition-colors">Our Approach</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-warmYellow transition-colors">Diet Programs</a>
              </li>
              <li>
                <a href="#assessment" className="hover:text-warmYellow transition-colors">Wellness Assessment</a>
              </li>
              <li>
                <a href="#indian-plate" className="hover:text-warmYellow transition-colors">The Balanced Indian Thali</a>
              </li>
              <li>
                <a href="#process" className="hover:text-warmYellow transition-colors">Consultation Process</a>
              </li>
              <li>
                <a href="#journal" className="hover:text-warmYellow transition-colors">Nutrition Journal</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-warmYellow transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Programs Column (Col 7-9) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-warmYellow">
              Programs
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-ivory/80">
              {PROGRAMS.map((p) => (
                <li key={p.id}>
                  <a href="#programs" className="hover:text-warmYellow transition-colors block">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Studio (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-warmYellow">
              Consultation Desk
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-ivory/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-warmYellow shrink-0 mt-0.5" />
                <span>{BRAND.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-freshGreen shrink-0" />
                <span>WhatsApp: {BRAND.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-warmYellow shrink-0" />
                <span>{BRAND.email}</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onBookClick}
                  className="w-full py-2.5 px-4 rounded-xl bg-forest-light text-ivory text-xs font-semibold hover:bg-forest transition-colors border border-forest-light/60 flex items-center justify-center gap-2"
                >
                  <span>Book Initial Session</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Health Disclaimer Strip */}
        <div className="mt-12 pt-8 border-t border-forest-light/30 text-left">
          <div className="p-4 rounded-2xl bg-forest-light/30 border border-forest-light/40 text-xs text-ivory/70 leading-relaxed">
            <strong className="text-warmYellow">Health Disclaimer: </strong>
            Nutrition coaching and dietary education provided through {BRAND.studioName} are intended for lifestyle improvement and metabolic wellness. They do not constitute formal medical diagnosis or treatment for acute diseases. Always consult your personal physician before implementing significant changes to your nutrition or lifestyle.
          </div>
        </div>

        {/* Bottom Legal & Agency Attribution Row */}
        <div className="mt-8 pt-6 border-t border-forest-light/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} {BRAND.name} Studio. All rights reserved.</span>
            <button
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-warmYellow underline underline-offset-2"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActivePolicy('terms')}
              className="hover:text-warmYellow underline underline-offset-2"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => setActivePolicy('disclaimer')}
              className="hover:text-warmYellow underline underline-offset-2"
            >
              Medical Disclaimer
            </button>
          </div>

          <div className="flex items-center gap-2 bg-forest-light/50 px-3 py-1.5 rounded-lg border border-forest-light/60 text-sage-200">
            <Sparkles className="w-3.5 h-3.5 text-warmYellow" />
            <span>Presented by <strong>iWAAT</strong> for Client Demonstration</span>
          </div>
        </div>

      </div>

      {/* Policy Modal */}
      {activePolicy && (
        <PolicyModal
          type={activePolicy}
          onClose={() => setActivePolicy(null)}
        />
      )}
    </footer>
  );
}
