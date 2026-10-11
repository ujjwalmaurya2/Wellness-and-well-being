import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Calendar, 
  Sparkles, 
  ChevronRight, 
  ChevronDown, 
  Activity, 
  ArrowLeft, 
  Home, 
  FileCheck, 
  Workflow, 
  BookOpen, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { BRAND } from '../data/content';

export default function Navbar({ onBookClick, currentView = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const dropdownRef = useRef(null);

  // Scroll detection for navbar elevation & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (currentView === 'home') {
        const sections = [
          { id: 'hero', key: 'home' },
          { id: 'programs', key: 'programs' },
          { id: 'indian-plate', key: 'indian-plate' },
          { id: 'approach', key: 'approach' },
          { id: 'assessment', key: 'assessment' },
          { id: 'process', key: 'process' },
          { id: 'journal', key: 'journal' },
          { id: 'faq', key: 'faq' },
          { id: 'book', key: 'book' }
        ];

        const scrollPosition = window.scrollY + 140;
        let current = 'home';
        for (let i = 0; i < sections.length; i++) {
          const el = document.getElementById(sections[i].id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              current = sections[i].key;
              break;
            } else if (scrollPosition >= top) {
              current = sections[i].key;
            }
          }
        }
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Auto-close dropdowns when view changes
  useEffect(() => {
    setMoreDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [currentView]);

  // Click outside listener for "More" dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Primary Landing Page Links (Core 4 always visible on desktop)
  const homePrimaryLinks = [
    { name: 'Home', href: '#hero', id: 'home' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Indian Plate', href: '#indian-plate', id: 'indian-plate' },
    { name: 'Our Approach', href: '#approach', id: 'approach' },
  ];

  // Secondary Links (In "More" luxury dropdown on medium/laptop screens, visible on wide screens)
  const homeSecondaryLinks = [
    { 
      name: 'Assessment', 
      href: '#assessment', 
      id: 'assessment',
      desc: '3-min readiness test', 
      icon: Sparkles 
    },
    { 
      name: 'Process', 
      href: '#process', 
      id: 'process',
      desc: 'Our 4-stage framework', 
      icon: Workflow 
    },
    { 
      name: 'Journal', 
      href: '#journal', 
      id: 'journal',
      desc: 'Evidence-based articles', 
      icon: BookOpen 
    },
    { 
      name: 'FAQ', 
      href: '#faq', 
      id: 'faq',
      desc: 'Common diet queries', 
      icon: HelpCircle 
    },
  ];

  // All Landing Page Links for Mobile Drawer
  const allHomeLinks = [
    ...homePrimaryLinks,
    ...homeSecondaryLinks.map(({ name, href, id }) => ({ name, href, id }))
  ];

  // Dashboard Links (When on /my-wellness)
  const dashboardNavLinks = [
    { name: 'Daily Checklist', href: '#daily-checklist', id: 'daily-checklist' },
    { name: 'Meal Guide', href: '#meal-guide', id: 'meal-guide' },
    { name: 'Weekly Consistency', href: '#weekly-progress', id: 'weekly-progress' },
  ];

  const handleLinkClick = (e, href, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);

    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        scrollToTarget(href);
      }, 120);
      return;
    }

    scrollToTarget(href);
  };

  const scrollToTarget = (href) => {
    if (href === '#hero' || href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(40,75,60,0.08)] border-b border-forest/10 py-2.5'
          : 'bg-ivory/90 backdrop-blur-md border-b border-forest/5 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 lg:gap-4">
          
          {/* ============================================================ */}
          {/* 1. BRAND LOGO (Always returns to Home smoothly) */}
          {/* ============================================================ */}
          <button
            type="button"
            onClick={() => {
              if (currentView !== 'home') {
                onNavigate('home');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-xl text-left flex-shrink-0"
            title="NourishWell Studio Home"
          >
            {/* Elegant Organic Botanical Crest */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-forest flex items-center justify-center text-ivory shadow-soft group-hover:scale-105 group-hover:shadow-card transition-all duration-200 border border-forest-light/40">
              <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V19h-2v-2.07c-3.11-.47-5.5-3.08-5.5-6.27 0-.55.45-1 1-1s1 .45 1 1c0 2.21 1.79 4 4 4s4-1.79 4-4c0-.55.45-1 1-1s1 .45 1 1c0 3.19-2.39 5.8-5.5 6.27z" fill="#F3C969"/>
                <path d="M12 4c-3.31 0-6 2.69-6 6 0 .55.45 1 1 1s1-.45 1-1c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .55.45 1 1 1s1-.45 1-1c0-3.31-2.69-6-6-6z" fill="#71966B"/>
              </svg>
            </div>
            
            {/* Brand Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg sm:text-xl lg:text-2xl text-forest tracking-tight font-sans">
                  {BRAND.name}
                </span>
                <span className="text-[9px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-full bg-warmYellow/30 text-forest border border-warmYellow/50 hidden xs:inline-block">
                  STUDIO
                </span>
              </div>
              <span className="text-[10px] text-charcoal/60 tracking-wide font-medium hidden sm:inline-block">
                Personalized Indian Nutrition
              </span>
            </div>
          </button>

          {/* ============================================================ */}
          {/* 2. DESKTOP NAVIGATION (Consistent & Protected against overflow) */}
          {/* ============================================================ */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-shrink min-w-0">
            {currentView === 'home' ? (
              <>
                {/* Core Landing Page Links (Always visible) */}
                {homePrimaryLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href, link.id)}
                      className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all duration-150 whitespace-nowrap ${
                        isActive
                          ? 'text-forest bg-forest/10 font-bold shadow-2xs'
                          : 'text-charcoal/80 hover:text-forest hover:bg-forest/5'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}

                {/* Wide Screens: Show remaining links directly (xl breakpoint) */}
                <div className="hidden 2xl:flex items-center gap-1">
                  {homeSecondaryLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href, link.id)}
                        className={`px-2.5 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all duration-150 whitespace-nowrap ${
                          isActive
                            ? 'text-forest bg-forest/10 font-bold'
                            : 'text-charcoal/80 hover:text-forest hover:bg-forest/5'
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </div>

                {/* Medium/Laptop Screens (1024px-1439px): Luxury "More ▾" Popover */}
                <div className="relative 2xl:hidden" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                    className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all ${
                      moreDropdownOpen || ['assessment', 'process', 'journal', 'faq'].includes(activeSection)
                        ? 'text-forest bg-forest/10 font-bold'
                        : 'text-charcoal/80 hover:text-forest hover:bg-forest/5'
                    }`}
                  >
                    <span>More</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-forest' : 'text-charcoal/60'}`} />
                  </button>

                  {/* Dropdown Menu Box */}
                  {moreDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-ivory/95 backdrop-blur-xl border border-forest/15 shadow-[0_12px_36px_rgba(40,75,60,0.14)] p-2 z-50 animate-fadeIn space-y-1">
                      {homeSecondaryLinks.map((item) => {
                        const Icon = item.icon;
                        const isSubActive = activeSection === item.id;
                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleLinkClick(e, item.href, item.id)}
                            className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                              isSubActive
                                ? 'bg-forest/10 text-forest font-bold'
                                : 'hover:bg-forest/5 text-charcoal/90 hover:text-forest'
                            }`}
                          >
                            <div className="w-7 h-7 rounded-lg bg-sage/60 text-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-semibold leading-tight">{item.name}</span>
                              <span className="text-[11px] text-charcoal/60 leading-tight mt-0.5">{item.desc}</span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* DASHBOARD VIEW NAVIGATION LINKS */
              <>
                {/* Consistent HOME button on dashboard */}
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs xl:text-sm font-bold text-forest bg-forest/10 hover:bg-forest/15 rounded-full transition-colors whitespace-nowrap"
                  title="Return to Main Landing Page"
                >
                  <Home className="w-3.5 h-3.5 text-forest" />
                  <span>Home</span>
                </button>

                {dashboardNavLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.id)}
                    className="px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold text-charcoal/80 hover:text-forest hover:bg-forest/5 rounded-full transition-all whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                ))}

                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-forest text-ivory tracking-wide uppercase shadow-2xs hidden xl:inline-block">
                  Live Companion
                </span>
              </>
            )}
          </nav>

          {/* ============================================================ */}
          {/* 3. RIGHT ACTIONS CLUSTER (Responsive & Never Truncated) */}
          {/* ============================================================ */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 xl:gap-3 flex-shrink-0">
            
            {/* "My Wellness" Interactive Client Portal Pill */}
            {currentView === 'home' ? (
              <button
                type="button"
                onClick={() => onNavigate('dashboard')}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-forest/8 hover:bg-forest/15 border border-forest/20 text-forest hover:border-forest/40 active:scale-95 transition-all duration-200 shadow-2xs group"
                title="Open Personal Wellness Dashboard"
              >
                <Activity className="w-3.5 h-3.5 text-forest group-hover:text-forest-light" />
                <span className="hidden xs:inline whitespace-nowrap">My Wellness</span>
                <span className="xs:hidden whitespace-nowrap">Portal</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-freshGreen opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-freshGreen"></span>
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-forest text-ivory ring-2 ring-forest/20 active:scale-95 transition-all shadow-soft"
                title="Return to Main Website"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-warmYellow" />
                <span className="whitespace-nowrap">Main Site</span>
              </button>
            )}

            {/* WhatsApp Direct Enquiry (Hidden on Mobile, Compact on Laptops, Expanded on Large Desktops) */}
            <a
              href={`https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                "Hello Dietitian Priya, I would like to enquire about your personalized nutrition consultation."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-freshGreen/10 hover:bg-freshGreen/20 text-forest border border-freshGreen/30 transition-all duration-150 active:scale-95"
              title="Chat with Dietitian Priya on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-freshGreen fill-freshGreen/20" />
              <span className="hidden xl:inline whitespace-nowrap">WhatsApp</span>
            </a>

            {/* Primary Consultation Booking CTA (Guaranteed No Wrap or Overflow) */}
            <button
              onClick={onBookClick}
              className="whitespace-nowrap flex-shrink-0 inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4.5 sm:py-2.5 rounded-xl bg-gradient-to-r from-forest to-forest-light text-ivory hover:shadow-card hover:brightness-105 active:scale-[0.98] transition-all duration-200 border border-forest/30 shadow-soft group"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-warmYellow group-hover:rotate-12 transition-transform" />
              <span className="hidden xs:inline">Book Consultation</span>
              <span className="xs:hidden">Book</span>
            </button>

            {/* Mobile / Tablet Menu Button (Visible below 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-xl text-charcoal hover:bg-forest/10 hover:text-forest transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. MOBILE DRAWER MENU & BACKDROP OVERLAY */}
      {/* ============================================================ */}
      {mobileMenuOpen && (
        <>
          {/* Dimmed backdrop overlay */}
          <div 
            className="lg:hidden fixed inset-0 top-[60px] bg-charcoal/40 backdrop-blur-xs z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Solid Drawer Content */}
          <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#FAF8F2] border-b border-forest/15 shadow-2xl p-5 space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto z-50">
            
            {/* Quick Portal Switcher Banner */}
            <div className="pb-3 border-b border-forest/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate(currentView === 'home' ? 'dashboard' : 'home');
                }}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-forest text-ivory font-bold text-sm shadow-soft hover:bg-forest-light transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-warmYellow" />
                  <span>
                    {currentView === 'home' 
                      ? 'Open Personal Wellness Dashboard' 
                      : '← Back to Main Website'}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-ivory/60" />
              </button>
            </div>

            {/* Nav Links List */}
            <div className="flex flex-col space-y-1">
              {(currentView === 'home' ? allHomeLinks : dashboardNavLinks).map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-forest/10 text-forest font-bold'
                        : 'text-charcoal hover:bg-forest/5 hover:text-forest'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.name === 'Home' && <Home className="w-4 h-4 text-forest" />}
                      {link.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-charcoal/40" />
                  </a>
                );
              })}
            </div>

            {/* Action CTAs in Mobile Drawer */}
            <div className="pt-3 border-t border-forest/10 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest text-ivory font-bold text-sm shadow-soft"
              >
                <Calendar className="w-4 h-4 text-warmYellow" />
                <span>Book Your Consultation</span>
              </button>

              <a
                href={`https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  "Hello Dietitian Priya, I would like to enquire about your nutrition programs."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-freshGreen/15 text-forest font-bold text-sm border border-freshGreen/30 hover:bg-freshGreen/25 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-freshGreen" />
                <span>Chat on WhatsApp ({BRAND.whatsappDisplay})</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
