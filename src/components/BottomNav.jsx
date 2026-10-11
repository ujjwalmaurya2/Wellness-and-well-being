import React from 'react';
import { Home, Sparkles, Utensils, Activity, Calendar } from 'lucide-react';

export default function BottomNav({ currentView = 'home', onNavigate, onBookClick }) {
  const handleNavClick = (target) => {
    if (target === 'home') {
      if (currentView !== 'home') {
        onNavigate('home');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (target === 'programs') {
      if (currentView !== 'home') {
        onNavigate('home');
        setTimeout(() => scrollToId('programs'), 120);
      } else {
        scrollToId('programs');
      }
    } else if (target === 'indian-plate') {
      if (currentView !== 'home') {
        onNavigate('home');
        setTimeout(() => scrollToId('indian-plate'), 120);
      } else {
        scrollToId('indian-plate');
      }
    } else if (target === 'dashboard') {
      onNavigate(currentView === 'dashboard' ? 'home' : 'dashboard');
    } else if (target === 'book') {
      onBookClick();
    }
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 65;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const isHomeActive = currentView === 'home';
  const isDashboardActive = currentView === 'dashboard';

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-[#FAF8F2]/95 backdrop-blur-2xl border-t border-forest/15 shadow-[0_-4px_24px_rgba(40,75,60,0.12)] px-2 py-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))]"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 items-center gap-1">
        
        {/* 1. HOME TAB */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-150 active:scale-90 ${
            isHomeActive
              ? 'text-forest font-bold'
              : 'text-charcoal/60 hover:text-forest'
          }`}
        >
          <Home className={`w-5 h-5 ${isHomeActive ? 'text-forest stroke-[2.5]' : 'text-charcoal/60'}`} />
          <span className="text-[10px] tracking-tight mt-0.5 font-medium leading-none">Home</span>
        </button>

        {/* 2. PROGRAMS TAB */}
        <button
          type="button"
          onClick={() => handleNavClick('programs')}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-charcoal/60 hover:text-forest transition-all duration-150 active:scale-90"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px] tracking-tight mt-0.5 font-medium leading-none">Programs</span>
        </button>

        {/* 3. INDIAN DIET / THALI TAB */}
        <button
          type="button"
          onClick={() => handleNavClick('indian-plate')}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl text-charcoal/60 hover:text-forest transition-all duration-150 active:scale-90"
        >
          <Utensils className="w-5 h-5" />
          <span className="text-[10px] tracking-tight mt-0.5 font-medium leading-none">Thali Diet</span>
        </button>

        {/* 4. MY WELLNESS APP COMPANION TAB (FEATURED) */}
        <button
          type="button"
          onClick={() => handleNavClick('dashboard')}
          className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-150 relative active:scale-90 ${
            isDashboardActive
              ? 'text-forest font-bold'
              : 'text-forest/80 hover:text-forest'
          }`}
        >
          <div className="relative">
            <Activity className={`w-5 h-5 ${isDashboardActive ? 'text-forest stroke-[2.5]' : 'text-forest'}`} />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-freshGreen opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-freshGreen"></span>
            </span>
          </div>
          <span className={`text-[10px] tracking-tight mt-0.5 font-medium leading-none ${isDashboardActive ? 'font-bold text-forest' : ''}`}>
            Wellness
          </span>
        </button>

        {/* 5. BOOK CONSULTATION CTA TAB */}
        <button
          type="button"
          onClick={() => handleNavClick('book')}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-xl bg-forest text-ivory shadow-xs active:scale-90 transition-all duration-150"
        >
          <Calendar className="w-4.5 h-4.5 text-warmYellow" />
          <span className="text-[10px] tracking-tight mt-0.5 font-bold leading-none text-ivory">
            Book Call
          </span>
        </button>

      </div>
    </nav>
  );
}
