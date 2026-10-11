import React, { useState, useEffect } from 'react';
import {
  Calendar, Clock, CheckCircle2, MessageCircle, Send,
  ShieldCheck, Video, Building2, Phone, Sparkles, User, Mail, AlertCircle, RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND, IMAGES } from '../data/content';

export default function BookingSection({ prefilledData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    mode: 'video',
    goal: 'Weight Management & Fat Loss',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  // If user navigated from the assessment with prefilled preferences
  useEffect(() => {
    if (prefilledData?.programName) {
      setFormData((prev) => ({
        ...prev,
        goal: prefilledData.programName,
        mode: prefilledData.support === 'in-person' ? 'in-person' : 'video',
      }));
    }
  }, [prefilledData]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact phone number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate realistic asynchronous network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedBooking({
        ...formData,
        bookingRef: 'NW-' + Math.floor(100000 + Math.random() * 900000),
        timestamp: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
      });

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#284B3C', '#71966B', '#F3C969'],
        });
      } catch (err) {
        // Safe fallback
      }
    }, 1200);
  };

  const handleResetForm = () => {
    setSubmittedBooking(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      mode: 'video',
      goal: 'Weight Management & Fat Loss',
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      message: '',
    });
  };

  const getWhatsAppBookingText = () => {
    if (!submittedBooking) return '';
    return encodeURIComponent(
      `Hello ${BRAND.nutritionistName}, I submitted a consultation request on your website (Ref: ${submittedBooking.bookingRef}) for '${submittedBooking.goal}'. Name: ${submittedBooking.name}, Mode: ${submittedBooking.mode}. Looking forward to connecting!`
    );
  };

  return (
    <section id="book" className="py-10 sm:py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage/60 text-forest text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-warmYellow-dark" />
            <span>Consultation Booking</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-tight">
            Take the First Step Towards Health
          </h2>
          <p className="text-xs sm:text-base text-charcoal/75 leading-relaxed">
            Schedule your deep-dive 1-on-1 consultation or connect instantly via WhatsApp.
          </p>
        </div>

        {/* Split Layout Container */}
        <div className="bg-ivory rounded-2xl sm:rounded-4xl p-4 sm:p-10 lg:p-12 border border-sage/60 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Welcoming Information & Image */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="relative rounded-3xl overflow-hidden shadow-soft border-4 border-white aspect-[4/3] bg-sage/20">
                <img
                  src={IMAGES.heroSecondary}
                  alt="Nutrition Consultation Discussion"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-semibold bg-forest/80 px-2.5 py-1 rounded-md text-sage-200">
                    Comprehensive 45-Min Session
                  </span>
                  <p className="text-sm font-bold text-ivory mt-1">
                    Confidential & Evidence-Based
                  </p>
                </div>
              </div>

              {/* Consultation Inclusions */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-charcoal">
                  What Happens in Your Initial Consultation:
                </h3>
                <div className="space-y-2 text-xs sm:text-sm text-charcoal">
                  <div className="flex items-start gap-2.5 bg-white/80 p-2.5 rounded-xl border border-sage/40">
                    <CheckCircle2 className="w-4 h-4 text-freshGreen shrink-0 mt-0.5" />
                    <span>In-depth review of your medical reports, routines & dietary history</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white/80 p-2.5 rounded-xl border border-sage/40">
                    <CheckCircle2 className="w-4 h-4 text-freshGreen shrink-0 mt-0.5" />
                    <span>Identification of subtle lifestyle & glycemic triggers</span>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white/80 p-2.5 rounded-xl border border-sage/40">
                    <CheckCircle2 className="w-4 h-4 text-freshGreen shrink-0 mt-0.5" />
                    <span>Co-creation of your customized Indian meal blueprint</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-4 rounded-2xl bg-freshGreen/15 border border-freshGreen/30 space-y-2">
                <div className="flex items-center gap-2 text-forest font-bold text-xs uppercase tracking-wider">
                  <MessageCircle className="w-4 h-4 text-freshGreen" />
                  <span>Prefer Quick WhatsApp Inquiry?</span>
                </div>
                <p className="text-xs text-charcoal leading-relaxed">
                  Have questions about pricing or slot availability? Message our consultation desk directly for instant assistance.
                </p>
                <a
                  href={`https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    "Hello Dietitian Priya, I would like to book an initial nutrition consultation."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-forest hover:text-freshGreen transition-colors pt-1"
                >
                  <span>Chat on WhatsApp ({BRAND.whatsappDisplay})</span>
                  <span>→</span>
                </a>
              </div>

            </div>

            {/* Right Column: Interactive Appointment Request Form */}
            <div className="lg:col-span-7">
              {!submittedBooking ? (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-sage/60 shadow-soft space-y-4 text-left"
                >
                  <div className="border-b border-sage/40 pb-3">
                    <h3 className="text-xl font-bold text-charcoal">
                      Request Consultation Appointment
                    </h3>
                    <p className="text-xs text-charcoal-muted">
                      Fill out your details below. We will confirm your slot within 2 to 4 business hours.
                    </p>
                  </div>

                  {/* Name field */}
                  <div>
                    <label htmlFor="booking-name" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        id="booking-name"
                        name="fullName"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rohini Sen"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-forest transition-all ${
                          errors.name ? 'border-coral-dark bg-coral/5' : 'border-sage/60 bg-ivory/50'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-coral-dark mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-phone" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="booking-phone"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-forest transition-all ${
                          errors.phone ? 'border-coral-dark bg-coral/5' : 'border-sage/60 bg-ivory/50'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-coral-dark mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="booking-email" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        id="booking-email"
                        name="emailAddress"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rohini@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-forest transition-all ${
                          errors.email ? 'border-coral-dark bg-coral/5' : 'border-sage/60 bg-ivory/50'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-coral-dark mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Mode & Goal Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-mode" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                        Consultation Format
                      </label>
                      <select
                        id="booking-mode"
                        name="consultationMode"
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-sage/60 bg-ivory/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest"
                      >
                        <option value="video">Online Video Consultation</option>
                        <option value="in-person">In-Person Clinic (Mumbai [Demo])</option>
                        <option value="audio">Phone / WhatsApp Audio</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="booking-goal" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                        Primary Focus Area
                      </label>
                      <select
                        id="booking-goal"
                        name="focusArea"
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-sage/60 bg-ivory/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest"
                      >
                        <option value="Weight Management & Fat Loss">Weight Management & Fat Loss</option>
                        <option value="Fat-Loss Lifestyle Coaching">Fat-Loss Lifestyle Coaching</option>
                        <option value="PCOS / Thyroid / Hormonal Support">PCOS / Thyroid / Hormonal Support</option>
                        <option value="Sustainable Healthy Habit Coaching">Healthy Habit Coaching</option>
                        <option value="General Healthy Indian Diet">General Healthy Indian Diet</option>
                      </select>
                    </div>
                  </div>

                  {/* Date & Time Slot Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="booking-date" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                        Preferred Date (Optional)
                      </label>
                      <input
                        id="booking-date"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-sage/60 bg-ivory/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest"
                      />
                    </div>

                    <div>
                      <label htmlFor="booking-time" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                        Preferred Time of Day
                      </label>
                      <select
                        id="booking-time"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-sage/60 bg-ivory/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="booking-message" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                      Anything specific you would like the nutritionist to know? (Optional)
                    </label>
                    <textarea
                      id="booking-message"
                      name="clientMessage"
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Work night shifts, vegetarian food preferences, recent lab test results..."
                      className="w-full px-4 py-2.5 rounded-xl border border-sage/60 bg-ivory/50 text-sm focus:outline-none focus:ring-2 focus:ring-forest resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-2xl bg-forest text-ivory font-semibold text-sm hover:bg-forest-light active:scale-[0.98] transition-all shadow-card flex items-center justify-center gap-2 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Confirming Booking Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-warmYellow" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-charcoal-muted text-center pt-1">
                    🔒 Demo Submission: Your details are processed securely for this prototype demonstration.
                  </p>
                </form>
              ) : (
                /* Simulated Booking Confirmation Screen */
                <div className="bg-white p-6 sm:p-10 rounded-3xl border-2 border-freshGreen/40 shadow-soft text-left space-y-6 animate-fadeIn">
                  <div className="flex items-center gap-3 pb-4 border-b border-sage/40">
                    <div className="w-12 h-12 rounded-2xl bg-freshGreen/20 flex items-center justify-center text-forest">
                      <CheckCircle2 className="w-7 h-7 text-freshGreen" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-freshGreen">
                        Request Received [Demo Simulation]
                      </span>
                      <h3 className="text-xl font-extrabold text-charcoal">
                        Thank You, {submittedBooking.name}!
                      </h3>
                    </div>
                  </div>

                  {/* Summary Card */}
                  <div className="p-5 rounded-2xl bg-ivory border border-sage/60 space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-charcoal-muted">Reference Number:</span>
                      <strong className="text-forest font-mono">{submittedBooking.bookingRef}</strong>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-charcoal-muted">Program / Focus:</span>
                      <strong className="text-charcoal">{submittedBooking.goal}</strong>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-charcoal-muted">Format:</span>
                      <strong className="text-charcoal capitalize">{submittedBooking.mode} Consultation</strong>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-charcoal-muted">Contact:</span>
                      <strong className="text-charcoal">{submittedBooking.phone}</strong>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-charcoal-muted">Preferred Time:</span>
                      <strong className="text-charcoal">{submittedBooking.preferredTime}</strong>
                    </div>
                  </div>

                  {/* WhatsApp Forwarding Action */}
                  <div className="space-y-3">
                    <p className="text-xs text-charcoal-muted">
                      For rapid confirmation, you can forward this booking summary directly to Dietitian Priya's WhatsApp desk:
                    </p>
                    <a
                      href={`https://wa.me/${BRAND.whatsappNumber.replace(/[^0-9]/g, '')}?text=${getWhatsAppBookingText()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-freshGreen/20 text-forest font-bold text-xs sm:text-sm hover:bg-freshGreen/30 transition-colors flex items-center justify-center gap-2 border border-freshGreen/40"
                    >
                      <MessageCircle className="w-4 h-4 text-freshGreen" />
                      <span>Confirm Faster via WhatsApp ({BRAND.whatsappDisplay})</span>
                    </a>
                  </div>

                  {/* Reset Demo */}
                  <div className="pt-2 text-center">
                    <button
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-1.5 text-xs text-charcoal-muted hover:text-forest transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit another demonstration request</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
