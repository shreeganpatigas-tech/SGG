/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  MessageSquare, 
  Building2, 
  ShieldCheck, 
  FileText, 
  Briefcase, 
  HeartHandshake, 
  UserCheck, 
  Users, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle, 
  TrendingUp, 
  ExternalLink 
} from 'lucide-react';

import heroImage from "../assets/images/contact/hero.png";
import operationalTimelineImage from "../assets/images/contact/operational-timeline.png";

interface ContactProps {
  onNavigate?: (page: string) => void;
}

// ============================================================================
// 1. ContactCard Component (Quick Contact Section)
// ============================================================================
interface ContactCardProps {
  key?: React.Key;
  icon: React.ReactNode;
  title: string;
  detail: string;
  description: string;
  btnText: string;
  href: string;
  isExternal?: boolean;
  index: number;
}

export function ContactCard({ icon, title, detail, description, btnText, href, isExternal, index }: ContactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-white border border-slate-200/60 p-8 rounded-sm shadow-sm hover:shadow-xl hover:border-[#A30000]/20 transition-all duration-300 flex flex-col justify-between h-full group"
      id={`quick-contact-card-${index}`}
    >
      <div className="space-y-6">
        <div className="w-14 h-14 bg-[#A30000]/5 text-[#A30000] rounded-sm flex items-center justify-center transition-colors duration-300 group-hover:bg-[#A30000] group-hover:text-white shrink-0 shadow-xs">
          {icon}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-display font-bold uppercase tracking-wider text-slate-900 group-hover:text-[#A30000] transition-colors">
            {title}
          </h3>
          <p className="text-sm font-semibold text-slate-800 tracking-tight font-mono">
            {detail}
          </p>
          <p className="text-xs text-slate-500 font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="inline-flex items-center text-xs font-semibold text-[#A30000] hover:text-neutral-900 transition-colors gap-2 cursor-pointer uppercase tracking-wider"
        >
          <span>{btnText}</span>
          <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}

// ============================================================================
// 2. BusinessCard Component (Business Enquiry Hub Section)
// ============================================================================
interface BusinessCardProps {
  key?: React.Key;
  icon: React.ReactNode;
  title: string;
  description: string;
  btnText: string;
  href: string;
  isExternal?: boolean;
  index: number;
}

export function BusinessCard({ icon, title, description, btnText, href, isExternal, index }: BusinessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="bg-slate-50/50 border border-slate-200/50 hover:border-[#A30000]/20 p-8 rounded-sm shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group"
      id={`business-hub-card-${index}`}
    >
      <div className="space-y-5">
        <div className="w-12 h-12 bg-[#A30000]/5 text-[#A30000] rounded-sm flex items-center justify-center transition-colors duration-300 group-hover:bg-[#A30000] group-hover:text-white shrink-0">
          {icon}
        </div>
        <div className="space-y-2">
          <h4 className="text-base font-display font-medium text-slate-800 tracking-tight group-hover:text-[#A30000] transition-colors">
            {title}
          </h4>
          <p className="text-xs text-slate-500 font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-slate-200/40">
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="w-full flex items-center justify-center gap-2 py-3 bg-[#A30000] hover:bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-sm hover:shadow-md cursor-pointer text-center"
        >
          <span>{btnText}</span>
          <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}

// ============================================================================
// 3. FAQAccordion Component (FAQ Section)
// ============================================================================
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto" id="faq-accordion-root">
      {items.map((item, idx) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-slate-200 rounded-sm bg-white hover:border-slate-300/80 transition-all duration-200 shadow-sm overflow-hidden"
            id={`faq-item-container-${idx}`}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 select-none cursor-pointer focus:outline-none focus:bg-slate-50/50"
              aria-expanded={isOpen}
              id={`faq-btn-${idx}`}
            >
              <span className="text-sm sm:text-base font-semibold text-slate-800 tracking-tight font-sans">
                {item.question}
              </span>
              <span
                className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180 text-[#A30000]' : ''
                }`}
              >
                <ChevronDown size={18} className="stroke-[2]" />
              </span>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-6 py-5 sm:px-8 sm:py-6 text-xs sm:text-sm text-slate-500 font-light leading-relaxed bg-slate-50/50 border-t border-slate-100">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================================
// 4. MapSection Component (Google Map)
// ============================================================================
interface MapSectionProps {
  title: string;
  description: string;
  mapUrl: string;
}

export function MapSection({ title, description, mapUrl }: MapSectionProps) {
  return (
    <section id="google-map-section" className="py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#A30000] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-[#A30000]/5 border border-[#A30000]/10 px-3 py-1 rounded-sm inline-block">
            Corporate Office
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-light text-slate-900 tracking-tight" id="map-heading">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-2xl mx-auto" id="map-description">
            {description}
          </p>
          <div className="w-12 h-[2px] bg-[#A30000] mx-auto mt-2" />
        </div>

        <div className="w-full h-[450px] rounded-sm overflow-hidden border border-slate-200 shadow-md bg-white p-2 transition-shadow hover:shadow-xl duration-300">
          <iframe
            src={mapUrl}
            className="w-full h-full rounded-sm border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shree Ganpati Gastech Office Location Map"
          />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 5. CTASection Component (Final CTA Section)
// ============================================================================
interface CTASectionProps {
  heading: string;
  supportingText: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export function CTASection({ 
  heading, 
  supportingText, 
  primaryButtonText, 
  secondaryButtonText, 
  onPrimaryClick, 
  onSecondaryClick 
}: CTASectionProps) {
  return (
    <section className="bg-slate-50 border-t border-slate-100 py-20 sm:py-24" id="contact-cta-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-[#A30000] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-[#A30000]/5 border border-[#A30000]/10 px-3 py-1 rounded-sm inline-block">
          Connect With Us
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-light text-slate-900 tracking-tight" id="cta-heading">
          {heading}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-2xl mx-auto" id="cta-desc">
          {supportingText}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4" id="cta-buttons">
          <button
            onClick={onPrimaryClick}
            className="px-6 py-3.5 bg-[#A30000] text-white hover:bg-neutral-900 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer shadow-md hover:shadow-lg inline-block"
            id="cta-btn-primary"
          >
            {primaryButtonText}
          </button>
          <button
            onClick={onSecondaryClick}
            className="px-6 py-3.5 bg-white text-slate-800 border border-slate-200 hover:border-slate-800 hover:text-slate-950 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer inline-block"
            id="cta-btn-secondary"
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN CONTACT PAGE COMPONENT
// ============================================================================
export default function Contact({ onNavigate }: ContactProps) {

  const quickContacts = [
    {
      title: 'Call Us',
      detail: '+91 7987594387',
      description: 'Speak directly with our team for immediate sales, logistics, or operational support.',
      btnText: 'Call Now',
      href: 'tel:+917987594387',
      icon: <Phone size={24} />
    },
    {
      title: 'Email Us',
      detail: 'shreeganpatigastech@gmail.com',
      description: 'Send us your technical specification charts, RFQs, or long-term contract parameters.',
      btnText: 'Open Email App',
      href: 'mailto:shreeganpatigastech@gmail.com?subject=Enterprise%20Enquiry%20-%20Shree%20Ganpati%20Gastech',
      icon: <Mail size={24} />
    },
    {
      title: 'WhatsApp',
      detail: 'Direct Chat Access',
      description: 'Interact with our client onboarding team instantly for cylinder refills and quick estimates.',
      btnText: 'One Click Chat',
      href: 'https://wa.me/917987594387',
      isExternal: true,
      icon: <MessageSquare size={24} />
    },
    {
      title: 'Visit Us',
      detail: 'Burhar, Shahdol, MP',
      description: 'Shree Ganpati Gastech Private Limited, Burhar, Shahdol - 484110, Madhya Pradesh, India.',
      btnText: 'Open Google Maps',
      href: 'https://www.google.com/maps/search/?api=1&query=SHREE+GANPATI+GASTECH+PRIVATE+LIMITED+Burhar+Shahdol+Madhya+Pradesh+484110',
      isExternal: true,
      icon: <MapPin size={24} />
    }
  ];

  const businessHub = [
    {
      title: 'Product Enquiry',
      description: 'Request specifications and supply parameters for industrial gases, medical gases, specialty gases, commercial LPG, and gas systems.',
      btnText: 'Contact Desk',
      href: 'mailto:shreeganpatigastech@gmail.com?subject=Product%20Enquiry%20-%20SGGPL'
    },
    {
      title: 'Sales & Quotations',
      description: 'Connect with our enterprise sales desk for custom quoting on high-pressure cylinder supply agreements and long-term contract pricing.',
      btnText: 'Request Pricing',
      href: 'mailto:shreeganpatigastech@gmail.com?subject=Quotation%20Request%20-%20SGGPL'
    },
    {
      title: 'Dealership & Distribution',
      description: 'Evaluate regional commercial representation, distribution routes, cylinder inventory allocations, and market expansion opportunities.',
      btnText: 'Become a Partner',
      href: 'mailto:shreeganpatigastech@gmail.com?subject=Dealership%20and%20Distribution%20Enquiry%20-%20SGGPL'
    },
    {
      title: 'Corporate Partnerships',
      description: 'Discuss strategic joint ventures, double-walled liquid storage setups, manifold system pipeline installations, or corporate acquisitions.',
      btnText: 'Discuss Alliance',
      href: 'mailto:shreeganpatigastech@gmail.com?subject=Corporate%20Partnership%20Proposal%20-%20SGGPL'
    },
    {
      title: 'Customer Support',
      description: 'Submit dispatch queries, exchange-out schedules, valve checks, cylinder recertifications, or general billing inquiries.',
      btnText: 'Connect Support',
      href: 'https://wa.me/917987594387'
    },
    {
      title: 'Vendor Registration',
      description: 'For suppliers of raw materials, heavy-duty valves, cylinder tubes, high-pressure regulators, manifold parts, and procurement contracts.',
      btnText: 'Apply as Vendor',
      href: 'mailto:shreeganpatigastech@gmail.com?subject=Vendor%20Registration%20Enquiry%20-%20SGGPL'
    }
  ];

  const faqItems = [
    {
      id: 'faq-1',
      question: 'How can I request a quotation?',
      answer: 'You can request a quotation by connecting with our Sales & Quotations desk in the Business Enquiry Hub, calling our hotline at +91 7987594387, or emailing shreeganpatigastech@gmail.com with your gas specifications and volume requirements.'
    },
    {
      id: 'faq-2',
      question: 'Which products do you supply?',
      answer: 'We supply a complete range of high-pressure industrial gases (Oxygen, Nitrogen, Argon, CO2, Helium), Medical Oxygen I.P., Nitrous Oxide I.P., Specialty Gases, Commercial LPG, and a full line of industrial gas regulators, manifolds, and distribution equipment.'
    },
    {
      id: 'faq-3',
      question: 'Which industries do you serve?',
      answer: 'We serve steelmaking, metallurgical complexes, chemical plants, pharmaceuticals, healthcare facilities, metal fabrication, laser cutting, commercial kitchens, and manufacturing sectors.'
    },
    {
      id: 'faq-4',
      question: 'How do I become a dealer?',
      answer: 'SGGPL welcomes distribution and dealership enquiries. You can reach out directly via our Dealership desk in the Business Enquiry Hub or call us to discuss territorial opportunities, inventory requirements, and certification protocols.'
    },
    {
      id: 'faq-5',
      question: 'How can I contact Sales?',
      answer: 'You can contact our sales team directly at shreeganpatigastech@gmail.com or by calling our hotline +91 7987594387. Alternatively, use the quick WhatsApp link for instant messaging.'
    },
    {
      id: 'faq-6',
      question: 'What are your office hours?',
      answer: 'Our corporate office is open Monday through Saturday from 9:00 AM to 7:00 PM IST. Our filling plants and cylinder distribution fleets operate on extended shifts to ensure consistent delivery parameters.'
    },
    {
      id: 'faq-7',
      question: 'Can I order in bulk?',
      answer: 'Yes, we specialize in high-volume supplies. We coordinate bulk orders using liquid tankers, cylinder quad manifolds, and custom storage setups designed to match your facility\'s consumption cycle.'
    },
    {
      id: 'faq-8',
      question: 'Do you supply outside Madhya Pradesh?',
      answer: 'Yes, we provide gas solutions and commercial LPG supply programs to clients across Central India. Contact our logistics desk to evaluate transport compliance and scheduling options for your specific region.'
    }
  ];

  const handleScrollToEnquiryHub = () => {
    const target = document.getElementById('business-enquiry-hub');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+917987594387';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917987594387', '_blank');
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#A30000] selection:text-white" id="contact-page-root">
      
      {/* 1. HERO (Fortune 500 Editorial Split Layout) */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white overflow-hidden border-b border-slate-100 py-16 sm:py-24 md:py-32" id="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Rich Typography */}
            <div className="lg:col-span-7 space-y-6 text-left" id="hero-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A30000]/5 border border-[#A30000]/10 rounded-sm" id="hero-tag">
                <span className="w-1.5 h-1.5 bg-[#A30000] rounded-full animate-pulse" />
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#A30000]">
                  SGGPL Communications Desk
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-light tracking-tight text-slate-900 leading-[1.1]" id="hero-heading">
                Contact SGGPL
              </h1>
              
              <div className="w-16 h-[2px] bg-[#A30000]" id="hero-accent-line" />
              
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-2xl" id="hero-desc">
                Whether you need industrial gases, medical gases, specialty gases, commercial LPG, industrial equipment, or wish to discuss a business opportunity, our team is ready to assist you with prompt and professional support.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4" id="hero-cta">
                <button
                  onClick={handleCallNow}
                  className="px-6 py-3.5 bg-[#A30000] text-white hover:bg-neutral-900 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer shadow-md hover:shadow-lg flex items-center gap-2"
                  id="btn-call-now"
                >
                  <Phone size={14} />
                  Call Now
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="px-6 py-3.5 bg-white text-slate-800 border border-slate-200 hover:border-slate-800 hover:text-slate-950 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer flex items-center gap-2"
                  id="btn-whatsapp"
                >
                  <MessageSquare size={14} className="text-emerald-600" />
                  WhatsApp
                </button>
              </div>
            </div>

            {/* Right Column - Industrial Team Graphic / Image */}
            <div className="lg:col-span-5 relative" id="hero-right">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#A30000]/10 to-transparent rounded-sm blur-2xl -z-10" />
              <div className="overflow-hidden border border-slate-200/60 shadow-2xl rounded-sm aspect-[4/3] bg-slate-100">
                <img
                  src={heroImage}
                  alt="Industrial corporate boardroom and office reception area"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white border border-slate-100 shadow-xl p-4 rounded-sm hidden sm:flex items-center gap-3">
                <div className="p-2 bg-[#A30000]/5 rounded-sm text-[#A30000]">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase text-[#A30000] tracking-widest">Responsive Desk</p>
                  <p className="text-xs text-slate-500 font-light">Under 24H Response Time</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. QUICK CONTACT (4 Premium Cards) */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100" id="quick-contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#A30000] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-[#A30000]/5 border border-[#A30000]/10 px-3 py-1 rounded-sm inline-block">
              Immediate Access
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-slate-900 tracking-tight" id="quick-heading">
              Quick Contact
            </h2>
            <div className="w-12 h-[2px] bg-[#A30000] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="quick-contacts-grid">
            {quickContacts.map((c, idx) => (
              <ContactCard
                key={idx}
                icon={c.icon}
                title={c.title}
                detail={c.detail}
                description={c.description}
                btnText={c.btnText}
                href={c.href}
                isExternal={c.isExternal}
                index={idx}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 3. BUSINESS ENQUIRY HUB (6 Premium Cards - No Forms) */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-100" id="business-enquiry-hub">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#A30000] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-[#A30000]/5 border border-[#A30000]/10 px-3 py-1 rounded-sm inline-block">
              Dedicated Verticals
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-slate-900 tracking-tight" id="hub-heading">
              Business Enquiry Hub
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              Skip standard forms and connect directly with the specific SGGPL corporate departments responsible for handling your inquiries.
            </p>
            <div className="w-12 h-[2px] bg-[#A30000] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="business-hub-grid">
            {businessHub.map((item, idx) => {
              let matchingIcon = <FileText size={20} />;
              if (idx === 0) matchingIcon = <Building2 size={20} />;
              if (idx === 1) matchingIcon = <TrendingUp size={20} />;
              if (idx === 2) matchingIcon = <Users size={20} />;
              if (idx === 3) matchingIcon = <HeartHandshake size={20} />;
              if (idx === 4) matchingIcon = <UserCheck size={20} />;
              if (idx === 5) matchingIcon = <Briefcase size={20} />;

              return (
                <BusinessCard
                  key={idx}
                  icon={matchingIcon}
                  title={item.title}
                  description={item.description}
                  btnText={item.btnText}
                  href={item.href}
                  index={idx}
                />
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. BUSINESS HOURS (Premium Information Grid) */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100" id="business-hours-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Graphic Overlay Side */}
            <div className="lg:col-span-5" id="hours-graphic">
              <div className="overflow-hidden border border-slate-200 shadow-xl rounded-sm aspect-[4/5] bg-slate-100 relative">
                <img
                  src={operationalTimelineImage}
                  alt="Professional workplace and business meetings"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#A30000]/10 mix-blend-multiply" />
              </div>
            </div>

            {/* Right Information Side */}
            <div className="lg:col-span-7 space-y-8 text-left" id="hours-content">
              <div className="space-y-3">
                <span className="text-[#A30000] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-[#A30000]/5 border border-[#A30000]/10 px-3 py-1 rounded-sm inline-block">
                  Operations Timeline
                </span>
                <h3 className="text-3xl font-display font-light text-slate-900 tracking-tight">
                  Business Hours & Support Availability
                </h3>
                <div className="w-12 h-[2px] bg-[#A30000]" />
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                Shree Ganpati Gastech Private Limited operates a highly efficient logistics structure. While our corporate office welcomes communications during standard times, our physical filling operations run continuously to sustain uninterrupted medical and industrial cylinder logistics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4" id="hours-points">
                
                <div className="border border-slate-100 bg-slate-50/50 p-6 rounded-sm space-y-2">
                  <div className="flex items-center gap-2.5 text-[#A30000]">
                    <Clock size={16} />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">Corporate Hours</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">Monday – Saturday</p>
                  <p className="text-xs text-slate-500 font-light">9:00 AM – 7:00 PM IST</p>
                </div>

                <div className="border border-slate-100 bg-slate-50/50 p-6 rounded-sm space-y-2">
                  <div className="flex items-center gap-2.5 text-[#A30000]">
                    <AlertCircle size={16} />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">Emergency Contact</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">+91 7987594387</p>
                  <p className="text-xs text-slate-500 font-light">24/7 Priority Logistics Assistance</p>
                </div>

                <div className="border border-slate-100 bg-slate-50/50 p-6 rounded-sm space-y-2 sm:col-span-2">
                  <div className="flex items-center gap-2.5 text-emerald-600">
                    <CheckCircle2 size={16} />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">Department Response Guarantee</span>
                  </div>
                  <p className="text-xs text-slate-500 font-light">
                    Every message submitted to our regional email channels is logged into our internal ERP system and audited for response. SGGPL strives to reply to all formal inquiries within <strong>24 operational hours</strong>.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. GOOGLE MAP */}
      <MapSection 
        title="Find Our Office"
        description="Visit us during business hours or contact us directly for assistance with industrial and medical gas requirements."
        mapUrl="https://maps.google.com/maps?q=SHREE+GANPATI+GASTECH+PRIVATE+LIMITED+Burhar+Shahdol+Madhya+Pradesh+484110&t=&z=14&ie=UTF8&iwloc=&output=embed"
      />

      {/* 6. FAQ (Accordion) */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-100" id="faq-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#A30000] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-[#A30000]/5 border border-[#A30000]/10 px-3 py-1 rounded-sm inline-block">
              Information Desk
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-slate-900 tracking-tight" id="faq-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
              Review immediate parameters regarding our industrial and medical gas solutions, cylinder refilling operations, and dealer application processes.
            </p>
            <div className="w-12 h-[2px] bg-[#A30000] mx-auto mt-2" />
          </div>

          <FAQAccordion items={faqItems} />

        </div>
      </section>

      {/* 7. FINAL CTA */}
      <CTASection 
        heading="Let's Build Long-Term Business Relationships"
        supportingText="Whether you are looking for industrial gases, medical gases, commercial LPG, industrial gas equipment, or long-term supply partnerships, our team is ready to assist you with dependable service and professional support."
        primaryButtonText="Call Us"
        secondaryButtonText="WhatsApp"
        onPrimaryClick={handleCallNow}
        onSecondaryClick={handleWhatsApp}
      />

    </div>
  );
}