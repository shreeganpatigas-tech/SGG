/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  CheckSquare, 
  Globe, 
  Package, 
  Tag, 
  Award, 
  UserCheck, 
  ExternalLink, 
  Scale, 
  RefreshCw, 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ArrowRight,
  Check,
  FileText,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';

// =========================================================================
// 1. DATA TYPES & TOC LIST CONFIGURATION
// =========================================================================

interface TocItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const tocItems: TocItem[] = [
  { id: 'acceptance', label: 'Acceptance of Terms', icon: <CheckSquare size={16} /> },
  { id: 'usage', label: 'Website Usage', icon: <Globe size={16} /> },
  { id: 'products-services', label: 'Products & Services', icon: <Package size={16} /> },
  { id: 'pricing', label: 'Pricing & Quotations', icon: <Tag size={16} /> },
  { id: 'intellectual-property', label: 'Intellectual Property', icon: <Award size={16} /> },
  { id: 'responsibilities', label: 'User Responsibilities', icon: <UserCheck size={16} /> },
  { id: 'third-party', label: 'Third-Party Links', icon: <ExternalLink size={16} /> },
  { id: 'liability', label: 'Limitation of Liability', icon: <Scale size={16} /> },
  { id: 'changes', label: 'Changes to Terms', icon: <RefreshCw size={16} /> },
  { id: 'governing-law', label: 'Governing Law', icon: <BookOpen size={16} /> },
  { id: 'contact', label: 'Contact Information', icon: <Mail size={16} /> }
];

// =========================================================================
// 2. REUSABLE SUB-COMPONENTS (Modular Clean Architecture)
// =========================================================================

/**
 * PolicyCard Component
 * Premium container styled with soft shadows and optional hover transitions.
 */
interface PolicyCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  id?: string;
}

export function PolicyCard({ children, className = '', hoverEffect = false, id }: PolicyCardProps) {
  return (
    <div
      id={id}
      className={`bg-white border border-slate-200/60 rounded p-6 sm:p-8 shadow-xs ${
        hoverEffect ? 'hover:shadow-md hover:border-[#A30000]/25 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * SectionDivider Component
 * High contrast minimal divider to visually structure long legal content.
 */
export function SectionDivider() {
  return <div className="h-[1px] w-full bg-slate-200/70 my-10" />;
}

/**
 * TermsSection Component
 * Individual terms clause container displaying descriptive icons and structured titles.
 */
interface TermsSectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function TermsSection({ id, title, icon, children }: TermsSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-32 space-y-5"
    >
      <div className="flex items-center gap-3.5 pb-2">
        <div className="w-10 h-10 rounded bg-[#A30000]/5 flex items-center justify-center text-[#A30000] shadow-2xs border border-[#A30000]/10 shrink-0">
          {icon}
        </div>
        <h2 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-slate-900">
          {title}
        </h2>
      </div>
      <div className="text-[15px] leading-relaxed font-sans text-slate-600 font-light space-y-4">
        {children}
      </div>
    </motion.section>
  );
}

/**
 * TableOfContents Component
 * Standardized navigation controller rendered in the sticky sidebar and mobile menu.
 */
interface TableOfContentsProps {
  activeSection: string;
  onItemClick: (id: string) => void;
  variant?: 'desktop' | 'mobile';
}

export function TableOfContents({ activeSection, onItemClick, variant = 'desktop' }: TableOfContentsProps) {
  if (variant === 'mobile') {
    return (
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none px-4 -mx-4 select-none">
        {tocItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`flex items-center gap-1.5 shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#A30000] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <nav className="space-y-1" aria-label="Terms and Conditions Chapters">
      {tocItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={`w-full flex items-center justify-between text-left px-4 py-2.5 rounded-sm transition-all duration-250 group cursor-pointer border-l-2 text-[13.5px] ${
              isActive
                ? 'bg-slate-50 border-[#A30000] text-[#A30000] font-semibold shadow-2xs'
                : 'border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`transition-colors ${isActive ? 'text-[#A30000]' : 'text-slate-400 group-hover:text-slate-600'}`}>
                {item.icon}
              </span>
              <span className="font-sans tracking-wide">{item.label}</span>
            </div>
            <ChevronRight 
              size={13} 
              className={`transition-all duration-250 ${
                isActive 
                  ? 'translate-x-0 opacity-100 text-[#A30000]' 
                  : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-slate-400'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}

/**
 * StickySidebar Component
 * Maintains sidebar stickiness inside the parent row grid with layout boundaries.
 */
interface StickySidebarProps {
  children: React.ReactNode;
}

export function StickySidebar({ children }: StickySidebarProps) {
  return (
    <aside className="sticky top-[110px] self-start space-y-6 max-h-[calc(100vh-140px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200">
      {children}
    </aside>
  );
}

// =========================================================================
// 3. MAIN TERMS & CONDITIONS COMPONENT
// =========================================================================

export default function Terms() {
  const [activeSection, setActiveSection] = useState('acceptance');

  // Dynamic SEO Setup & Page Headings Config
  useEffect(() => {
    // Standard Document Meta Updates
    document.title = "Terms & Conditions | Shree Ganpati Gastech Private Limited (SGGPL)";
    
    // Smooth scroll page load reset
    window.scrollTo({ top: 0 });
  }, []);

  // Smooth scroll offset calculations
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 110;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Setup intersection observer to track active section dynamically
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -55% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      tocItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-24" id="sggpl-terms-page">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Premium Minimal Corporate Styling) */}
      {/* ========================================================================= */}
      <section className="bg-white border-b border-slate-200/80 pt-20 pb-16 px-4" id="terms-hero">
        <div className="max-w-7xl mx-auto text-center sm:text-left">
          <div className="inline-flex items-center gap-2 bg-[#A30000]/5 border border-[#A30000]/15 text-[#A30000] px-3.5 py-1.5 rounded-sm mb-5">
            <Shield size={14} className="stroke-[2]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
              Legal Framework & Guidelines
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
            Terms & Conditions
          </h1>
          
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-sans text-slate-500">
            <p className="max-w-2xl text-[16px] text-slate-500 font-light leading-relaxed mb-1">
              These Terms & Conditions govern the use of the Shree Ganpati Gastech Private Limited website. By accessing or using this website, you agree to comply with these terms.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400">
              <Clock size={12} />
              LAST UPDATED: JULY 2026
            </span>
            <span className="text-slate-200">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-sans text-emerald-600 font-semibold uppercase bg-emerald-50 px-2.5 py-0.5 rounded-xs border border-emerald-100">
              Official Corporate Version
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE CONTENT AREA (Responsive Chapter Navigator Layout) */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Mobile Horizontal Chapter Navigator */}
        <div className="block lg:hidden mb-8 sticky top-[72px] z-30 bg-[#F8F9FA]/90 backdrop-blur-md py-3 border-b border-slate-200/40">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5 px-1">
            Navigate Terms Chapters
          </p>
          <TableOfContents 
            activeSection={activeSection} 
            onItemClick={handleScrollTo} 
            variant="mobile" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Desktop Sticky Chapter Sidebar */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <StickySidebar>
              <div className="bg-white border border-slate-200/60 rounded p-5 shadow-xs">
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-slate-100 text-slate-900 font-display font-bold text-xs uppercase tracking-wider">
                  <FileText size={16} className="text-[#A30000]" />
                  <span>Document Sections</span>
                </div>
                <TableOfContents 
                  activeSection={activeSection} 
                  onItemClick={handleScrollTo} 
                  variant="desktop" 
                />
              </div>

              {/* Assistance Callout Card */}
              <div className="bg-slate-50 border border-slate-200/50 rounded p-5">
                <h4 className="text-xs font-display font-bold text-[#A30000] uppercase tracking-wider mb-2">
                  Need Legal Clarity?
                </h4>
                <p className="text-[12px] text-slate-500 font-light leading-relaxed mb-4">
                  For official verification, contract specifics, or regulatory compliance questions, please dial our legal desk or email us directly.
                </p>
                <div className="space-y-2 text-xs">
                  <a href="tel:+917987594387" className="flex items-center gap-2 hover:text-[#A30000] transition-colors font-medium text-slate-600">
                    <Phone size={13} className="text-[#A30000]" />
                    <span>+91 7987594387</span>
                  </a>
                  <a href="mailto:shreeganpatigastech@gmail.com" className="flex items-center gap-2 hover:text-[#A30000] transition-colors font-light text-slate-500 break-all">
                    <Mail size={13} className="text-[#A30000]" />
                    <span>shreeganpatigastech@gmail.com</span>
                  </a>
                </div>
              </div>
            </StickySidebar>
          </div>

          {/* RIGHT: Document Sections Container */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-9 max-w-4xl space-y-1">
            <div className="bg-white border border-slate-200/60 rounded-lg p-6 sm:p-10 lg:p-12 shadow-sm space-y-12">
              
              {/* ========================================== */}
              {/* SECTION 1: Acceptance of Terms */}
              {/* ========================================== */}
              <TermsSection id="acceptance" title="1. Acceptance of Terms" icon={<CheckSquare size={18} />}>
                <p>
                  Welcome to the official website of Shree Ganpati Gastech Private Limited (<strong>SGGPL</strong>). By accessing, browsing, or using this digital platform and its associated communications, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                </p>
                <p>
                  These terms constitute a professional, legally appropriate agreement between you and SGGPL. If you do not agree with or object to any part of these guidelines, please discontinue using this website and our digital interfaces immediately.
                </p>
              </TermsSection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 2: Website Usage */}
              {/* ========================================== */}
              <TermsSection id="usage" title="2. Website Usage" icon={<Globe size={18} />}>
                <p>
                  SGGPL grants you a limited, non-exclusive, non-transferable, and revocable license to access and use our website strictly for professional, informational, and business interaction purposes.
                </p>
                <p>
                  As a condition of this license, you agree to the following usage criteria:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600 font-light">
                  <li>
                    <strong className="text-slate-800">Lawful Purpose:</strong> You will use the website exclusively for lawful activities in compliance with applicable local, state, and international regulations.
                  </li>
                  <li>
                    <strong className="text-slate-800">Content Integrity:</strong> You will not copy, scrap, modify, distribute, or replicate website materials, engineering diagrams, or technical descriptions for commercial exploitation without prior written consent from SGGPL.
                  </li>
                  <li>
                    <strong className="text-slate-800">System Security:</strong> You are strictly forbidden from attempting to breach, bypass, disable, or interfere with website functionality, security protocols, or back-end hosting structures.
                  </li>
                  <li>
                    <strong className="text-slate-800">Authorized Access:</strong> You will not attempt to gain unauthorized access to our administrative consoles, server databases, or private corporate communication streams.
                  </li>
                </ul>
              </TermsSection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 3: Products & Services */}
              {/* ========================================== */}
              <TermsSection id="products-services" title="3. Products & Services" icon={<Package size={18} />}>
                <p>
                  Our digital platform features information detailing our manufactured industrial gases, medical gases, high-purity specialty gases, commercial LPG, and specialized gas handling equipment.
                </p>
                <p>
                  This information is compiled and presented for general informational purposes to help prospective business partners, procurement officers, and medical facilities evaluate our industrial capabilities. SGGPL operates under strict quality standards, but we emphasize that:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600 font-light">
                  <li>
                    Product descriptions, physical properties, chemical specifications, and equipment configurations are subject to change without prior notice as we upgrade our facilities.
                  </li>
                  <li>
                    The availability of specific high-pressure gases, transport tankers, or cryogenic storage vessels may vary based on market demand, supply chain constraints, or regional distribution regulations.
                  </li>
                  <li>
                    The information provided on this website does not constitute a binding contract or a formal promise of product availability.
                  </li>
                </ul>
                <p className="mt-4">
                  Customers are strongly encouraged to contact SGGPL's sales or engineering desk directly to obtain the latest technical specifications and confirm active inventory levels before initiating procurement cycles.
                </p>
              </TermsSection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 4: Pricing & Quotations */}
              {/* ========================================== */}
              <TermsSection id="pricing" title="4. Pricing & Quotations" icon={<Tag size={18} />}>
                <p>
                  Any pricing parameters, commercial rates, or cylinder holding charges displayed or referenced on this website are indicative, non-binding estimates meant only for early planning.
                </p>
                <p>
                  Official commercial agreements are executed separately through formal transactions:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 border border-slate-200/60 rounded bg-slate-50/50">
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A30000]" />
                      Customized Quotes
                    </h5>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      Official commercial quotes are generated individually upon receipt of a formal Request for Quotation (RFQ) detailing gas volumes, purity levels, cylinder counts, and transport requirements.
                    </p>
                  </div>
                  <div className="p-4 border border-slate-200/60 rounded bg-slate-50/50">
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A30000]" />
                      Order Acceptance
                    </h5>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      All purchase orders and gas delivery schedules remain subject to thorough commercial review, credit evaluation, logistics verification, and explicit written acceptance by SGGPL management.
                    </p>
                  </div>
                </div>
              </TermsSection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 5: Intellectual Property */}
              {/* ========================================== */}
              <TermsSection id="intellectual-property" title="5. Intellectual Property" icon={<Award size={18} />}>
                <p>
                  All visual elements, interactive interfaces, brand assets, and technical documentation featured on this platform are the exclusive property of Shree Ganpati Gastech Private Limited unless explicitly stated otherwise.
                </p>
                <p>
                  This proprietary framework includes, but is not limited to:
                </p>
                <div className="flex flex-wrap gap-2.5 mt-3 select-none">
                  {[
                    'SGGPL Corporate Logo',
                    'Brand Guidelines & Visual Elements',
                    'Custom Icons & Technical Graphics',
                    'Product Images & Media Assets',
                    'Technical Texts & Copywriting',
                    'Layout Formats & Code Architecture',
                    'Information Guides & PDF Catalogs'
                  ].map((asset, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-sm border border-slate-200/40">
                      {asset}
                    </span>
                  ))}
                </div>
                <p className="mt-4">
                  These materials are protected by intellectual property laws. Any unauthorized downloading, translation, reproduction, redistribution, modification, or publication of SGGPL's brand assets or technical materials is strictly prohibited and may result in legal action.
                </p>
              </TermsSection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 6: User Responsibilities */}
              {/* ========================================== */}
              <TermsSection id="responsibilities" title="6. User Responsibilities" icon={<UserCheck size={18} />}>
                <p>
                  To preserve a secure, professional, and reliable communication network for all our corporate clients, distributors, and partners, you agree to uphold the following core commitments:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {[
                    'Supply precise, up-to-date, and authentic coordinates when filling out our contact, quote, or career forms.',
                    'Verify that any chemical, regulatory, or business specification you submit is legally permissible and technically sound.',
                    'Refrain from transmitting malicious files, software scripts, spam emails, or unauthorized advertising through our systems.',
                    'Respect all applicable local and national environmental, transport, and petroleum safety laws when corresponding with us.'
                  ].map((resp, index) => (
                    <div key={index} className="flex gap-2.5 items-start p-3 bg-slate-50 border border-slate-200/40 rounded-sm">
                      <Check size={14} className="text-[#A30000] mt-1 shrink-0 bg-[#A30000]/10 p-0.5 rounded-full" />
                      <span className="text-xs text-slate-600 font-light leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </TermsSection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 7: Third-Party Links */}
              {/* ========================================== */}
              <TermsSection id="third-party" title="7. Third-Party Links" icon={<ExternalLink size={18} />}>
                <p>
                  For your convenience and reference, SGGPL's website may contain hyperlinks directing you to external websites (such as industrial associations, government petroleum safety portals, or third-party mapping systems).
                </p>
                <p>
                  SGGPL does not own, moderate, audit, or control these external platforms. Consequently, SGGPL does not endorse and is not responsible for the contents, safety standards, security measures, or terms of use of third-party websites. Navigating to external links is done entirely at your own discretion and risk.
                </p>
              </TermsSection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 8: Limitation of Liability */}
              {/* ========================================== */}
              <TermsSection id="liability" title="8. Limitation of Liability" icon={<Scale size={18} />}>
                <p>
                  SGGPL makes reasonable efforts to ensure that the technical coordinates, product specifications, distribution details, and regulatory descriptions published on this website are current, accurate, and complete.
                </p>
                <p>
                  However, because web technologies, logistics schedules, and chemical frameworks evolve dynamically, we emphasize that:
                </p>
                <ul className="space-y-3 pl-5 list-disc text-xs text-slate-600 font-light">
                  <li>
                    The website and its contents are provided on an "as-is" and "as-available" basis without any express or implied guarantees.
                  </li>
                  <li>
                    SGGPL does not guarantee that the website's operations will be completely continuous, secure, or free from minor errors or technical interruptions.
                  </li>
                  <li>
                    We are not liable for any direct, indirect, incidental, or consequential business losses arising from your reliance on information published here.
                  </li>
                </ul>
                <p className="mt-4">
                  For safety-critical industrial applications, cryogenic layouts, medical installations, or commercial gas purchasing, you must verify all pricing, quality parameters, and delivery timelines directly with SGGPL's engineers and managers in a written purchase agreement.
                </p>
              </TermsSection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 9: Changes to Terms */}
              {/* ========================================== */}
              <TermsSection id="changes" title="9. Changes to Terms" icon={<RefreshCw size={18} />}>
                <p>
                  SGGPL reserves the right to update, modify, or append these Terms & Conditions at any stage to adapt to changing legal frameworks, commercial models, or technical website enhancements.
                </p>
                <p>
                  The "Last Updated" metadata located at the top of this document indicates when the latest modifications took effect. Any revisions will become immediately active upon publication on this page. We encourage our corporate clients, distributors, and visitors to check this page periodically to remain fully aligned with our current operational terms.
                </p>
              </TermsSection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 10: Governing Law */}
              {/* ========================================== */}
              <TermsSection id="governing-law" title="10. Governing Law" icon={<BookOpen size={18} />}>
                <p>
                  These Terms & Conditions, along with any related corporate communications, business interactions, or platform disputes, shall be governed by and interpreted in accordance with the applicable laws of India.
                </p>
                <p>
                  Any legal claims, jurisdictional arguments, or disputes arising from the use of this platform shall be subject to the exclusive jurisdiction of the competent courts in Shahdol, Madhya Pradesh, India, where the company is registered.
                </p>
              </TermsSection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 11: Contact Information */}
              {/* ========================================== */}
              <TermsSection id="contact" title="11. Contact Information" icon={<Mail size={18} />}>
                <p>
                  If you have any questions, regulatory queries, or compliance complaints regarding SGGPL's Terms & Conditions, please contact our administrative desk:
                </p>
                
                <div className="mt-6">
                  <PolicyCard className="border-l-4 border-l-[#A30000]" hoverEffect={true}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold text-[#A30000] uppercase tracking-wider">
                          Corporate Head Office
                        </h4>
                        <div className="space-y-3.5 text-xs text-slate-600 font-light">
                          <div className="flex gap-3 items-start">
                            <MapPin size={16} className="text-[#A30000] shrink-0 mt-0.5" />
                            <p className="leading-relaxed">
                              Shree Ganpati Gastech Private Limited<br />
                              Burhar, Shahdol,<br />
                              Madhya Pradesh, India<br />
                              PIN – 484110
                            </p>
                          </div>
                          <div className="flex gap-3 items-center">
                            <Clock size={16} className="text-[#A30000] shrink-0" />
                            <p>Monday – Saturday: 9:30 AM – 6:30 PM IST</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs font-bold text-[#A30000] uppercase tracking-wider">
                          Direct Communication
                        </h4>
                        <div className="space-y-3 text-xs">
                          <a 
                            href="tel:+917987594387" 
                            className="flex gap-3 items-center text-slate-600 hover:text-[#A30000] transition-colors"
                          >
                            <Phone size={16} className="text-[#A30000] shrink-0" />
                            <span className="font-medium">+91 7987594387</span>
                          </a>
                          <a 
                            href="mailto:shreeganpatigastech@gmail.com" 
                            className="flex gap-3 items-center text-slate-600 hover:text-[#A30000] transition-colors break-all"
                          >
                            <Mail size={16} className="text-[#A30000] shrink-0" />
                            <span className="font-light">shreeganpatigastech@gmail.com</span>
                          </a>
                          <div className="pt-2">
                            <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 uppercase font-bold tracking-wider bg-slate-100 px-2 py-0.5 rounded-sm">
                              🔒 SSL Secured Channel
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PolicyCard>
                </div>
              </TermsSection>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
