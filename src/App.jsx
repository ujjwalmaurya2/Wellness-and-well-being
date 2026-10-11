import React, { useState, useEffect } from 'react';
import ClientDemoBanner from './components/ClientDemoBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Programs from './components/Programs';
import Assessment from './components/Assessment';
import NutritionistProfile from './components/NutritionistProfile';
import ProcessSteps from './components/ProcessSteps';
import IndianNutritionEditorial from './components/IndianNutritionEditorial';
import SuccessStories from './components/SuccessStories';
import JournalSection from './components/JournalSection';
import BookingSection from './components/BookingSection';
import FaqSection from './components/FaqSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import ClientInfoModal from './components/ClientInfoModal';
import WellnessDashboard from './components/dashboard/WellnessDashboard';
import BottomNav from './components/BottomNav';

export default function App() {
  const [clientInfoOpen, setClientInfoOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState(null);

  // View state: 'home' or 'dashboard'
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('my-wellness') || hash.includes('my-wellness')) {
        return 'dashboard';
      }
    }
    return 'home';
  });

  // Listen to browser popstate and hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('my-wellness') || hash.includes('my-wellness')) {
        setCurrentView('dashboard');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    if (view === 'dashboard') {
      window.history.pushState({}, '', '#my-wellness');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBooking = (prefillData = null) => {
    if (prefillData) {
      setBookingPrefill(prefillData);
    }

    if (currentView !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        executeScrollToBooking();
      }, 150);
    } else {
      executeScrollToBooking();
    }
  };

  const executeScrollToBooking = () => {
    const element = document.getElementById('book');
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToPrograms = () => {
    if (currentView !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const element = document.getElementById('programs');
        if (element) {
          const navOffset = 70;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById('programs');
      if (element) {
        const navOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col font-sans selection:bg-freshGreen/25 selection:text-forest pb-16 lg:pb-0">
      {/* Client Demo Agency Top Banner */}
      <ClientDemoBanner onOpenInfo={() => setClientInfoOpen(true)} />

      {/* SECTION 1: Premium Navigation with My Wellness Integration */}
      <Navbar
        onBookClick={() => scrollToBooking()}
        currentView={currentView}
        onNavigate={navigateTo}
      />

      {currentView === 'dashboard' ? (
        /* DEDICATED PERSONAL WELLNESS DASHBOARD VIEW */
        <WellnessDashboard
          onBackToHome={() => navigateTo('home')}
          onBookClick={() => scrollToBooking()}
        />
      ) : (
        /* ORIGINAL 14-SECTION CLIENT PRESENTATION HOMEPAGE */
        <main className="flex-1">
          {/* SECTION 2: Hero - The First Impression */}
          <Hero
            onBookClick={() => scrollToBooking()}
            onExploreClick={scrollToPrograms}
          />

          {/* SECTION 3: Visual Trust Strip */}
          <TrustStrip />

          {/* SECTION 4: Wellness Programs */}
          <Programs onBookClick={(program) => scrollToBooking({ programName: program.title })} />

          {/* SECTION 5: Interactive Wellness Assessment */}
          <Assessment onBookWithPreferences={(prefs) => scrollToBooking(prefs)} />

          {/* SECTION 6: Meet the Nutritionist */}
          <NutritionistProfile onBookClick={() => scrollToBooking()} />

          {/* SECTION 7: The Personalized Process */}
          <ProcessSteps />

          {/* SECTION 8: Nutrition for Real Indian Life */}
          <IndianNutritionEditorial />

          {/* SECTION 9: Results & Client Stories */}
          <SuccessStories />

          {/* SECTION 10: Nutrition Journal */}
          <JournalSection />

          {/* SECTION 11: Consultation Booking */}
          <BookingSection prefilledData={bookingPrefill} />

          {/* SECTION 12: FAQ Accordion */}
          <FaqSection />

          {/* SECTION 13: Final Call to Action */}
          <FinalCta
            onBookClick={() => scrollToBooking()}
            onExploreClick={scrollToPrograms}
          />
        </main>
      )}

      {/* SECTION 14: Dark Forest-Green Footer */}
      <Footer onBookClick={() => scrollToBooking()} />

      {/* Persistent Floating WhatsApp Help Button (Positioned above bottom nav on mobile) */}
      <WhatsAppFloatingButton />

      {/* Native App-Style Bottom Navigation Bar (Mobile & Tablet) */}
      <BottomNav
        currentView={currentView}
        onNavigate={navigateTo}
        onBookClick={() => scrollToBooking()}
      />

      {/* iWAAT Client Presentation Concept Dossier Modal */}
      <ClientInfoModal
        isOpen={clientInfoOpen}
        onClose={() => setClientInfoOpen(false)}
      />
    </div>
  );
}
