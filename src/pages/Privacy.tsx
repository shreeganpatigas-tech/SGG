/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Database, 
  Activity, 
  Cookie, 
  Lock, 
  Globe, 
  UserCheck, 
  Users, 
  RefreshCw, 
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
  { id: 'introduction', label: 'Introduction', icon: <Info size={16} /> },
  { id: 'collection', label: 'Information We Collect', icon: <Database size={16} /> },
  { id: 'use', label: 'How We Use Information', icon: <Activity size={16} /> },
  { id: 'cookies', label: 'Cookies & Analytics', icon: <Cookie size={16} /> },
  { id: 'security', label: 'Data Security', icon: <Lock size={16} /> },
  { id: 'third-parties', label: 'Third-Party Services', icon: <Globe size={16} /> },
  { id: 'rights', label: 'Your User Rights', icon: <UserCheck size={16} /> },
  { id: 'children', label: "Children's Privacy", icon: <Users size={16} /> },
  { id: 'updates', label: 'Policy Updates', icon: <RefreshCw size={16} /> },
  { id: 'contact', label: 'Contact SGGPL', icon: <Mail size={16} /> }
];

// =========================================================================
// 2. REUSABLE SUB-COMPONENTS (Surgical Modular Structure)
// =========================================================================

/**
 * PolicyCard Component
 * Renders a premium container styled with soft shadows and optional hover transitions.
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
 * PolicySection Component
 * Individual policy clause container displaying descriptive icons and structured titles.
 */
interface PolicySectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function PolicySection({ id, title, icon, children }: PolicySectionProps) {
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
    <nav className="space-y-1.5" aria-label="Privacy Policy Chapters">
      {tocItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-sm transition-all duration-250 group cursor-pointer border-l-2 text-[14px] ${
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
              size={14} 
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
// 3. MAIN PRIVACY POLICY COMPONENT
// =========================================================================

export default function Privacy() {
  const [activeSection, setActiveSection] = useState('introduction');

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
    <div className="bg-[#F8F9FA] min-h-screen pb-24" id="sggpl-privacy-page">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Premium Minimal Corporate Styling) */}
      {/* ========================================================================= */}
      <section className="bg-white border-b border-slate-200/80 pt-20 pb-16 px-4" id="privacy-hero">
        <div className="max-w-7xl mx-auto text-center sm:text-left">
          <div className="inline-flex items-center gap-2 bg-[#A30000]/5 border border-[#A30000]/15 text-[#A30000] px-3.5 py-1.5 rounded-sm mb-5">
            <Shield size={14} className="stroke-[2]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
              Legal & Compliance
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
            Privacy Policy
          </h1>
          
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-sans text-slate-500">
            <p className="max-w-2xl text-[16px] text-slate-500 font-light leading-relaxed mb-1">
              Your privacy is important to us. This Privacy Policy explains how Shree Ganpati Gastech Private Limited collects, uses, protects, and manages information when you interact with our website and services.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-400">
              <Clock size={12} />
              LAST UPDATED: JULY 2026
            </span>
            <span className="text-slate-200">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-sans text-emerald-600 font-semibold uppercase bg-emerald-50 px-2.5 py-0.5 rounded-xs border border-emerald-100">
              Active Corporate Version
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
            Navigate Policy Chapters
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
                  <span>Document Index</span>
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
                  Need Legal Support?
                </h4>
                <p className="text-[12px] text-slate-500 font-light leading-relaxed mb-4">
                  For official verification, inquiries, or security reports, please dial our compliance desk or email our grievance cell directly.
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
              {/* SECTION 1: Introduction */}
              {/* ========================================== */}
              <PolicySection id="introduction" title="1. Introduction" icon={<Info size={18} />}>
                <p>
                  Shree Ganpati Gastech Private Limited (<strong>SGGPL</strong>) respects visitor privacy and values the trust our clients, partners, and employees place in us. This policy details our commitment to protecting your personal data in accordance with modern digital guidelines and business transparency standards.
                </p>
                <p>
                  We collect only the minimal data necessary to improve our service offerings, answer technical queries, prepare business quotations, and maintain the highest standard of safety in delivering gas solutions.
                </p>
              </PolicySection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 2: Information We Collect */}
              {/* ========================================== */}
              <PolicySection id="collection" title="2. Information We Collect" icon={<Database size={18} />}>
                <p>
                  We compile two primary categories of information: details you choose to submit voluntarily and details that our website software gathers automatically.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <PolicyCard className="space-y-3 bg-slate-50/50" hoverEffect={true}>
                    <h4 className="text-xs font-bold text-[#A30000] uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A30000]" />
                      Information You Provide
                    </h4>
                    <p className="text-[13px] text-slate-500 font-light leading-relaxed">
                      We collect coordinates that you provide when using our contact forms, applying for open career roles, or requesting customized product quotes.
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-sans pl-2 border-l border-slate-200">
                      <li className="flex items-center gap-2">
                        <ArrowRight size={10} className="text-[#A30000]" />
                        <span>Full name & job title</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight size={10} className="text-[#A30000]" />
                        <span>Corporate email address</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight size={10} className="text-[#A30000]" />
                        <span>Company name & business type</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight size={10} className="text-[#A30000]" />
                        <span>Active phone / WhatsApp coordinates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight size={10} className="text-[#A30000]" />
                        <span>Chemical or gas specifications</span>
                      </li>
                    </ul>
                  </PolicyCard>

                  <PolicyCard className="space-y-3 bg-slate-50/50" hoverEffect={true}>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      Automatically Collected
                    </h4>
                    <p className="text-[13px] text-slate-500 font-light leading-relaxed">
                      To optimize platform flow, our server automatically documents technical browsing parameters when you scroll through our media or products.
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-sans pl-2 border-l border-slate-200">
                      <li className="flex items-center gap-2">
                        <ArrowRight size={10} className="text-slate-400" />
                        <span>Web browser and operating system</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight size={10} className="text-slate-400" />
                        <span>Device category (mobile, desktop)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight size={10} className="text-slate-400" />
                        <span>Pages visited and click sequences</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight size={10} className="text-slate-400" />
                        <span>Anonymized IP address and region</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ArrowRight size={10} className="text-slate-400" />
                        <span>Time spent on individual pages</span>
                      </li>
                    </ul>
                  </PolicyCard>
                </div>
              </PolicySection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 3: How We Use Information */}
              {/* ========================================== */}
              <PolicySection id="use" title="3. How We Use Information" icon={<Activity size={18} />}>
                <p>
                  SGGPL processes your information strictly for legitimate commercial services, professional communications, and customer relationship management.
                </p>
                <p>
                  We utilize your data to complete the following operational workflows:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {[
                    'Replying directly to technical inquiries, delivery updates, and support requests.',
                    'Formulating custom corporate price estimates and commercial proposals.',
                    'Assessing candidate resumes and coordinating career interviews.',
                    'Optimizing website navigation patterns, load speeds, and overall mobile layouts.',
                    'Confirming corporate compliance with safety frameworks and petroleum guidelines.',
                    'Communicating vital product notices, safety bulletins, or facility shifts.'
                  ].map((task, index) => (
                    <div key={index} className="flex gap-2.5 items-start p-3 bg-slate-50 border border-slate-200/40 rounded-sm">
                      <Check size={14} className="text-[#A30000] mt-1 shrink-0 bg-[#A30000]/10 p-0.5 rounded-full" />
                      <span className="text-xs text-slate-600 font-light leading-relaxed">{task}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4.5 bg-[#A30000]/5 border border-[#A30000]/10 rounded">
                  <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    🔒 Our Absolute Privacy Guarantee
                  </h5>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    SGGPL does <strong>not</strong> sell, trade, rent, lease, or distribute your corporate data, transaction histories, or email address coordinates to commercial telemarketers or third-party data brokers under any circumstances.
                  </p>
                </div>
              </PolicySection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 4: Cookies & Analytics */}
              {/* ========================================== */}
              <PolicySection id="cookies" title="4. Cookies & Analytics" icon={<Cookie size={18} />}>
                <p>
                  We utilize standard website cookies (small data text files saved to your computer storage) to store basic preferences, enable interactive elements, and document aggregate, non-personal analytical statistics.
                </p>
                <p>
                  These cookies belong to three simple functional classifications:
                </p>
                <ul className="space-y-3.5 pl-5 list-disc text-xs text-slate-600 font-light">
                  <li>
                    <strong className="text-slate-800">Essential Performance Cookies:</strong> Necessary to enable secure browsing, coordinate page transitions, and maintain the current layout context.
                  </li>
                  <li>
                    <strong className="text-slate-800">Functional & Preference Cookies:</strong> Save regional choices, language preferences, and previously viewed industrial categories.
                  </li>
                  <li>
                    <strong className="text-slate-800">Analytical & Statistical Cookies:</strong> Help us measure visitor frequency, bounce rates, and popular media links in order to refine our information hierarchy.
                  </li>
                </ul>
                <p className="mt-4 text-[14px]">
                  You can choose to delete or reject cookies completely at any stage by adjusting your system's browser settings (e.g., in Chrome, Safari, Firefox, or Edge). Please note that disabling cookies may affect the interactive functionalities of certain website modules.
                </p>
              </PolicySection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 5: Data Security */}
              {/* ========================================== */}
              <PolicySection id="security" title="5. Data Security" icon={<Lock size={18} />}>
                <p>
                  SGGPL maintains reasonable technical, physical, and administrative measures to secure all collected corporate data. Secure database records, restricted workspace clearances, SSL encryption protocols, and administrative firewalls are configured to shield your credentials from unauthorized retrieval, loss, alteration, or disclosure.
                </p>
                <p>
                  While no automated framework, digital database, or network transmission is completely immune to cyber risks, our engineering teams consistently audits and enhances protective defenses. We strive to maintain robust safeguards to shield all files and client listings from potential cyber threats.
                </p>
              </PolicySection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 6: Third-Party Services */}
              {/* ========================================== */}
              <PolicySection id="third-parties" title="6. Third-Party Services" icon={<Globe size={18} />}>
                <p>
                  To deliver a premium browsing experience, SGGPL utilizes verified, secure external services. These third-party services operate independently and have their own privacy frameworks. Our integrated external providers include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 border border-slate-200/60 rounded bg-slate-50/50">
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A30000]" />
                      Google Maps Platform
                    </h5>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      Used to render precise interactive location indicators for our corporate headquarters, gas filling terminals, and distribution corridors.
                    </p>
                  </div>
                  <div className="p-4 border border-slate-200/60 rounded bg-slate-50/50">
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A30000]" />
                      Google Fonts
                    </h5>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      Supplies standardized typography files directly to your browser for a clean, legible, and uniform visual structure across pages.
                    </p>
                  </div>
                </div>
                <p className="mt-4">
                  We highly recommend checking the official privacy policies of these third-party platforms to understand their cookie management and data handling practices.
                </p>
              </PolicySection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 7: Your User Rights */}
              {/* ========================================== */}
              <PolicySection id="rights" title="7. Your User Rights" icon={<UserCheck size={18} />}>
                <p>
                  We believe you should have complete control over your personal data. Regardless of your physical location, SGGPL offers transparent facilities allowing you to action the following privacy rights:
                </p>
                <div className="space-y-4 mt-6">
                  {[
                    { title: 'Right to Access', desc: 'You have the right to request a digital duplicate of all personal records or communication parameters we store.' },
                    { title: 'Right to Correction', desc: 'You can request that we update, amend, or complete any inaccurate or outdated contact information.' },
                    { title: 'Right to Deletion', desc: "You can request the complete erasure of your corporate profile and contact details from our active files." },
                    { title: 'Right to Object', desc: 'You have the right to object to any direct communications, safety notifications, or industrial newsletters.' }
                  ].map((right, idx) => (
                    <div key={idx} className="flex gap-4 items-start pb-4 border-b border-slate-100 last:border-none">
                      <span className="text-[11px] font-mono font-bold text-[#A30000] bg-[#A30000]/5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="text-[14px] font-semibold text-slate-800 uppercase tracking-wide">{right.title}</h4>
                        <p className="text-xs text-slate-500 font-light leading-relaxed mt-0.5">{right.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6">
                  To exercise any of these privileges, please send a structured request to our compliance cell via <a href="mailto:shreeganpatigastech@gmail.com" className="text-[#A30000] hover:underline font-semibold">shreeganpatigastech@gmail.com</a>. We aim to process and resolve all genuine requests within 30 days of validation.
                </p>
              </PolicySection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 8: Children's Privacy */}
              {/* ========================================== */}
              <PolicySection id="children" title="8. Children's Privacy" icon={<Users size={18} />}>
                <p>
                  SGGPL is an industrial gas manufacturer and engineering services company serving corporate B2B clients, hospitals, and heavy infrastructure projects.
                </p>
                <p>
                  This website is designed for corporate, professional, and adult audiences. We do not intentionally compile, retain, or request personal records from minors under the age of 18. If a parent or guardian discovers that a child has submitted personal details through our platform, please notify us, and we will immediately take steps to remove that information from our servers.
                </p>
              </PolicySection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 9: Policy Updates */}
              {/* ========================================== */}
              <PolicySection id="updates" title="9. Policy Updates" icon={<RefreshCw size={18} />}>
                <p>
                  SGGPL reserves the right to periodically revise this Privacy Policy to reflect evolving industrial regulations, changing legal standards, or technical upgrades to our website.
                </p>
                <p>
                  The "Last Updated" date displayed at the top of this document indicates when the latest modifications took effect. Any revisions will become immediately active upon publication on this page. We encourage our corporate partners, clients, and visitors to check this page periodically to remain informed on how we protect their personal data.
                </p>
              </PolicySection>

              <SectionDivider />

              {/* ========================================== */}
              {/* SECTION 10: Contact SGGPL */}
              {/* ========================================== */}
              <PolicySection id="contact" title="10. Contact SGGPL" icon={<Mail size={18} />}>
                <p>
                  If you have any questions, regulatory queries, or compliance complaints regarding SGGPL's privacy practices, please contact our administrative desk:
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
              </PolicySection>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
