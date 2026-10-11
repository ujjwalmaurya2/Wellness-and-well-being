import React from 'react';
import { X, ShieldCheck, FileText, AlertTriangle } from 'lucide-react';
import { BRAND } from '../data/content';

export default function PolicyModal({ type, onClose }) {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: "Privacy Policy [Client Demo Template]",
      icon: ShieldCheck,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-charcoal leading-relaxed">
          <p>
            At <strong>{BRAND.studioName}</strong>, client privacy and medical confidentiality are paramount. This demonstration privacy framework outlines how client consultation enquiries, health questionnaires, and communication data will be securely managed.
          </p>
          <h4 className="font-bold text-forest">1. Information Collection</h4>
          <p>
            We collect personal details (name, contact number, email) and optional dietary/lifestyle notes solely for the purpose of scheduling consultations and providing personalized nutritional coaching.
          </p>
          <h4 className="font-bold text-forest">2. Medical Confidentiality</h4>
          <p>
            Blood reports, health metrics, and personal coaching notes shared by clients are strictly confidential between the client and the registered clinical nutritionist. They will never be sold, rented, or distributed to third-party commercial entities.
          </p>
          <h4 className="font-bold text-forest">3. Client Presentation Notice</h4>
          <p className="italic text-charcoal-muted">
            * This policy is a demonstration draft prepared by iWAAT. When launching the live client site, the nutritionist's specific clinical clinic privacy terms and regulatory compliance will be finalized.
          </p>
        </div>
      ),
    },
    terms: {
      title: "Terms & Conditions [Client Demo Template]",
      icon: FileText,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-charcoal leading-relaxed">
          <p>
            Welcome to <strong>{BRAND.studioName}</strong>. By accessing our website and engaging in our consultation programs, you agree to the following coaching principles:
          </p>
          <h4 className="font-bold text-forest">1. Scope of Nutrition Coaching</h4>
          <p>
            Nutritional coaching is an advisory and educational service focused on diet, portioning, lifestyle balance, and healthy habit formation. It works alongside, and does not replace, primary medical care from your personal physician.
          </p>
          <h4 className="font-bold text-forest">2. Client Commitment</h4>
          <p>
            Sustainable body recomposition and metabolic improvements require active client participation, consistency with meal planning, and transparent communication regarding dietary adherence.
          </p>
          <h4 className="font-bold text-forest">3. Rescheduling & Consultations</h4>
          <p>
            Consultation appointments can be rescheduled up to 12 hours prior to the scheduled slot to ensure optimal calendar management.
          </p>
        </div>
      ),
    },
    disclaimer: {
      title: "Health & Medical Information Disclaimer",
      icon: AlertTriangle,
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-charcoal leading-relaxed">
          <div className="p-3 bg-warmYellow/20 border border-warmYellow-dark/30 rounded-xl text-forest font-medium">
            Important Consumer Health Disclosure
          </div>
          <p>
            The content, articles, thali breakdowns, and assessment recommendations published on this website are intended solely for general nutritional education, wellness awareness, and demonstration purposes.
          </p>
          <p>
            They are not intended to diagnose, cure, mitigate, or treat any medical condition, disease, or acute metabolic pathology. Always consult your primary physician, endocrinologist, or qualified clinical specialist before embarking on any significant dietary intervention or physical exercise protocol.
          </p>
          <p>
            Individual nutritional needs vary significantly based on medical history, genetics, pharmaceutical regimens, pregnancy status, and metabolic baselines. Individual outcomes are not guaranteed.
          </p>
        </div>
      ),
    },
  };

  const item = contentMap[type] || contentMap.privacy;
  const IconComp = item.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-elevated border border-sage/60 z-10 space-y-5 my-8">
        <div className="flex items-center justify-between pb-3 border-b border-sage/40">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
              <IconComp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
          </div>
          <button onClick={onClose} className="p-1 text-charcoal-muted hover:text-charcoal" aria-label="Close dialog">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[55vh] overflow-y-auto pr-1 text-left">
          {item.body}
        </div>

        <div className="pt-3 border-t border-sage/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-forest text-ivory text-xs sm:text-sm font-semibold hover:bg-forest-light transition-all"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
