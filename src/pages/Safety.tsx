/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Shield,
  Award,
  HeartHandshake,
  ShieldCheck,
  CheckCircle,
  Clock,
  Zap,
  FileText,
  Calendar,
  ClipboardCheck,
  Truck,
  Wrench,
  Users,
  ArrowRight,
  HardHat,
  Sparkles,
  Search,
  Activity
} from 'lucide-react';
import { ActivePage } from '../types';

import heroImage from "../assets/images/safety/hero.png";
import corporatePhilosophyImage from "../assets/images/safety/corporate-philosophy.png";
import operationalDisciplineImage from "../assets/images/safety/operational-discipline.png";
import getInTouchImage from "../assets/images/safety/get-in-touch.png";

interface SafetyProps {
  onNavigate?: (page: ActivePage) => void;
}

// --------------------------------------------------
// REUSABLE HOVER-CARD COMPONENTS
// --------------------------------------------------

interface CardProps {
  key?: React.Key;
  title: string;
  desc: string;
  icon: React.ReactNode;
  index: number;
}

// 1. Safety & Quality Commitment Cards
export function SafetyCard({ title, desc, icon, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white border border-slate-100 rounded-sm p-6 hover:shadow-md hover:border-brand-red/20 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden shadow-3xs"
    >
      <div>
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        <div className="p-3 bg-brand-red/5 text-brand-red rounded-xs border border-brand-red/10 group-hover:bg-brand-red/10 transition-colors w-11 h-11 flex items-center justify-center mb-5">
          {icon}
        </div>
        <h3 className="text-sm font-mono font-bold uppercase text-brand-charcoal tracking-wide mb-2.5 group-hover:text-brand-red transition-colors duration-200">
          {title}
        </h3>
        <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

// 2. Core Principle Cards (Large Icon, Short Paragraph, Equal Height)
export function PrincipleCard({ title, desc, icon, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white border border-slate-200/80 p-6 rounded-sm hover:border-brand-red/35 hover:shadow-md transition-all duration-300 flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[2.5px] h-full bg-brand-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
      <div className="p-4 bg-brand-red/5 text-brand-red rounded-xs border border-brand-red/10 w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-base font-display font-bold text-brand-charcoal mb-2.5 tracking-tight group-hover:text-brand-red transition-colors">
        {title}
      </h3>
      <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

// 3. Timeline Workflow Step
interface TimelineStepProps {
  key?: React.Key;
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  index: number;
}

export function TimelineStep({ step, title, desc, icon, index }: TimelineStepProps) {
  const isLeft = index % 2 === 0;
  return (
    <div className={`relative flex flex-col sm:flex-row items-start ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
      {/* Circle dot on line */}
      <div className="absolute left-4 lg:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-brand-red flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xs hidden sm:flex">
        <span className="text-[10px] font-mono font-bold text-brand-red">
          {step}
        </span>
      </div>

      {/* Card Content block */}
      <div className={`w-full sm:w-[90%] lg:w-[45%] ml-12 sm:ml-16 lg:ml-0 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-white p-6 sm:p-8 border border-slate-200/80 rounded-sm shadow-3xs hover:border-brand-red/20 transition-all hover:shadow-xs"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-brand-red/5 rounded-xs border border-brand-red/10 text-brand-red">
              {icon}
            </div>
            <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-brand-charcoal">
              {title}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 font-sans font-light leading-relaxed">
            {desc}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// 4. Feature Trust Cards
export function FeatureCard({ title, desc, icon, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="p-6 sm:p-8 border border-slate-200/60 rounded-sm bg-white hover:border-brand-red/25 hover:shadow-sm transition-all duration-300 space-y-4 flex flex-col items-start"
    >
      <div className="p-3 bg-brand-red/5 text-brand-red rounded-xs border border-brand-red/10 inline-block group-hover:bg-brand-red/10">
        {icon}
      </div>
      <h3 className="text-xs font-mono font-bold uppercase text-brand-charcoal tracking-wider">
        {title}
      </h3>
      <p className="text-[11px] text-neutral-500 font-sans font-light leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

export default function Safety({ onNavigate }: SafetyProps) {
  // Navigation helper
  const handleNavigate = (page: ActivePage) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRequestQuote = () => {
    localStorage.setItem('selected_quote_gas', 'General Operational Support');
    handleNavigate('quote');
  };

  // Section 2: Safety Commitment Cards
  const safetyCommitments = [
    {
      title: 'Safe Handling',
      desc: 'We promote responsible handling, storage, and transportation practices across all business operations.',
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: 'Operational Discipline',
      desc: 'We encourage disciplined operational procedures to help maintain consistency and reliability.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      title: 'Workplace Safety',
      desc: 'We support a workplace culture built on awareness, responsibility, and continuous improvement.',
      icon: <HardHat className="w-5 h-5" />
    },
    {
      title: 'Customer Safety',
      desc: 'We work to ensure products are supplied with a strong focus on quality, safety, and dependable service.',
      icon: <Users className="w-5 h-5" />
    }
  ];

  // Section 3: Quality Commitment Cards
  const qualityCommitments = [
    {
      title: 'Quality Assurance',
      desc: 'Consistent product quality supported through established operational processes.',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Continuous Improvement',
      desc: 'Regular evaluation and improvement help strengthen our operational performance.',
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: 'Reliable Supply',
      desc: 'Focused on dependable supply and customer satisfaction.',
      icon: <Clock className="w-5 h-5" />
    },
    {
      title: 'Customer Confidence',
      desc: 'Building long-term relationships through trust, quality, and reliable service.',
      icon: <HeartHandshake className="w-5 h-5" />
    }
  ];

  // Section 4: Core Principles Cards
  const corePrinciples = [
    {
      title: 'Safety',
      desc: 'Integrating safety awareness and risk mitigation procedures into all daily operations.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Quality',
      desc: 'Delivering products that consistently align with industry specs and customer expectations.',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Integrity',
      desc: 'Conducting operations transparently, maintaining honest communication and ethical behavior.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Responsibility',
      desc: 'Upholding complete accountability for our products, workflows, and physical environment.',
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: 'Reliability',
      desc: 'Ensuring dependable delivery cycles and consistent gas parameters for long-term supply.',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Continuous Improvement',
      desc: 'Regularly auditing and updating workflows to refine safety, performance, and services.',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  // Section 5: Operational Timeline Steps
  const timelineSteps = [
    {
      step: '01',
      title: 'Customer Requirement',
      icon: <FileText className="w-5 h-5" />,
      desc: 'Analyzing client-specific volume, gas purity, and delivery pressure parameters.'
    },
    {
      step: '02',
      title: 'Order Planning',
      icon: <Calendar className="w-5 h-5" />,
      desc: 'Structured scheduling and resource allocation mapped to customer timelines.'
    },
    {
      step: '03',
      title: 'Quality Verification',
      icon: <ClipboardCheck className="w-5 h-5" />,
      desc: 'Purity verification and standard audits executed before any cylinder fills.'
    },
    {
      step: '04',
      title: 'Safe Handling',
      icon: <HardHat className="w-5 h-5" />,
      desc: 'Upholding protective procedures, safe securing, and weight verification on-site.'
    },
    {
      step: '05',
      title: 'Distribution',
      icon: <Truck className="w-5 h-5" />,
      desc: 'Logistics coordination mapping optimal routes with standard protective safety setups.'
    },
    {
      step: '06',
      title: 'Customer Support',
      icon: <Wrench className="w-5 h-5" />,
      desc: 'Responsive, long-term operational assistance and quick troubleshooting support.'
    }
  ];

  // Section 6: Compliance Cards
  const complianceCards = [
    {
      title: 'Quality Standards',
      desc: 'We are committed to maintaining high operational and product quality.',
      icon: <Award className="w-5 h-5" />
    },
    {
      title: 'Safety Practices',
      desc: 'Our operations follow established safety procedures and responsible handling practices.',
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: 'Regulatory Compliance',
      desc: 'We strive to operate in accordance with applicable industry regulations and statutory requirements.',
      icon: <ClipboardCheck className="w-5 h-5" />
    },
    {
      title: 'Responsible Operations',
      desc: 'Safety, quality, and operational discipline remain central to our business philosophy.',
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  // Section 7: Why Customers Trust SGGPL
  const trustFeatures = [
    {
      title: 'Commitment to Quality',
      desc: 'Rigorous checks and adherence to standards.',
      icon: <Award className="w-7 h-7" />
    },
    {
      title: 'Reliable Supply',
      desc: 'Proactive logistics planning and consistent fulfillment.',
      icon: <Clock className="w-7 h-7" />
    },
    {
      title: 'Safety Focus',
      desc: 'Minimizing risk across high-pressure environments.',
      icon: <Shield className="w-7 h-7" />
    },
    {
      title: 'Customer Support',
      desc: 'Responsive team ready to assist with custom parameter requests.',
      icon: <Users className="w-7 h-7" />
    },
    {
      title: 'Responsible Operations',
      desc: 'Ethical processes and verified compliance.',
      icon: <ShieldCheck className="w-7 h-7" />
    },
    {
      title: 'Long-Term Relationships',
      desc: 'Decades of trusted partnerships built on stability.',
      icon: <HeartHandshake className="w-7 h-7" />
    }
  ];

  return (
    <div className="w-full bg-white text-brand-charcoal selection:bg-brand-red selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-brand-charcoal overflow-hidden py-32 px-4 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Safety and Industrial Gas Quality Compliance Facility"
            className="w-full h-full object-cover object-center brightness-[0.25]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/30 to-brand-charcoal/95" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-brand-red/10 border border-brand-red/30 px-3 py-1 rounded-sm"
          >
            <span className="text-brand-red text-[11px] font-mono font-bold uppercase tracking-widest">
              SGGPL Standards
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-tight"
          >
            Safety & Quality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto font-sans font-light leading-relaxed"
          >
            At Shree Ganpati Gastech Private Limited, safety and quality are integral to everything we do. From product handling and storage to customer service and distribution, we are committed to maintaining responsible operational practices and delivering dependable industrial and medical gas solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <button
              onClick={() => handleNavigate('products')}
              className="px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              Explore Products
              <ArrowRight size={13} className="stroke-[2.5]" />
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-white text-gray-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. SAFETY COMMITMENT (Alternating Layout: Image Left, Content Right) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Left */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-sm border border-slate-200 shadow-sm aspect-[4/3] bg-slate-50">
                <img
                  src={corporatePhilosophyImage}
                  alt="Industrial safety practices and team inspections"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-brand-red text-xs font-bold uppercase tracking-widest block font-mono">
                  Corporate Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal tracking-tight">
                  Safety Commitment
                </h2>
                <div className="w-12 h-[2px] bg-brand-red" />
                <p className="text-xs sm:text-sm text-neutral-500 font-sans font-light leading-relaxed">
                  Protecting people and preserving safe facilities guide SGGPL's daily maneuvers. We operate on direct, verified checklists to control high-pressure risks.
                </p>
              </div>

              {/* Safety Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {safetyCommitments.map((card, idx) => (
                  <SafetyCard
                    key={idx}
                    title={card.title}
                    desc={card.desc}
                    icon={card.icon}
                    index={idx}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBTLE DIVIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-slate-100" />
      </div>

      {/* 3. QUALITY COMMITMENT (Alternating Layout: Content Left, Image Right) */}
      <section className="py-24 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Content Left */}
            <div className="lg:col-span-6 space-y-8 lg:order-1">
              <div className="space-y-4">
                <span className="text-brand-red text-xs font-bold uppercase tracking-widest block font-mono">
                  OPERATIONAL DISCIPLINE
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal tracking-tight">
                  Quality Commitment
                </h2>
                <div className="w-12 h-[2px] bg-brand-red" />
                <p className="text-xs sm:text-sm text-neutral-500 font-sans font-light leading-relaxed">
                  Continuous performance evaluation and standard-compliant storage form SGGPL's quality guidelines. Every parameter is double-checked for complete supply security.
                </p>
              </div>

              {/* Quality Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualityCommitments.map((card, idx) => (
                  <SafetyCard
                    key={idx}
                    title={card.title}
                    desc={card.desc}
                    icon={card.icon}
                    index={idx}
                  />
                ))}
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:col-span-6 lg:order-2">
              <div className="relative overflow-hidden rounded-sm border border-slate-200 shadow-sm aspect-[4/3] bg-slate-50">
                <img
                  src={operationalDisciplineImage}
                  alt="Industrial quality check and inspection processes"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBTLE DIVIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-slate-100" />
      </div>

      {/* 4. CORE PRINCIPLES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
              GUIDING VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal tracking-tight">
              Core Principles
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-sans font-light">
              Six foundational pillars driving safety, product parameters, and long-term customer relations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePrinciples.map((principle, idx) => (
              <PrincipleCard
                key={idx}
                title={principle.title}
                desc={principle.desc}
                icon={principle.icon}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SUBTLE DIVIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-slate-100" />
      </div>

      {/* 5. OPERATIONAL PRACTICES TIMELINE */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
              WORKFLOW INTEGRITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal tracking-tight">
              Operational Practices
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light">
              Our systematic operational lifecycle maintains security and quality from your requirement analysis to final drop-off.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative mt-12">
            {/* Desktop timeline center line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 transform lg:-translate-x-1/2 z-0 hidden sm:block" />

            <div className="space-y-12">
              {timelineSteps.map((step, idx) => (
                <TimelineStep
                  key={step.step}
                  step={step.step}
                  title={step.title}
                  desc={step.desc}
                  icon={step.icon}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SUBTLE DIVIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-slate-100" />
      </div>

      {/* 6. COMPLIANCE & STANDARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
              REGULATORY FRAMEWORK
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              Compliance & Standards
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light">
              Upholding essential guidelines to retain high product quality and operational confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceCards.map((card, idx) => (
              <div
                key={idx}
                className="p-8 border border-slate-100 rounded-sm bg-slate-50/20 hover:bg-white hover:border-slate-200 hover:shadow-xs transition-all duration-300 space-y-4 shadow-3xs"
              >
                <div className="p-3 bg-brand-red/5 text-brand-red rounded-sm border border-brand-red/10 inline-block">
                  {card.icon}
                </div>
                <h3 className="text-xs font-mono font-bold uppercase text-brand-charcoal tracking-wider">
                  {card.title}
                </h3>
                <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBTLE DIVIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-slate-100" />
      </div>

      {/* 7. WHY CUSTOMERS TRUST SGGPL */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
              CUSTOMER CONFIDENCE
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              Why Customers Trust SGGPL
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light">
              Clear corporate metrics executed on time by real experts to safeguard consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFeatures.map((card, idx) => (
              <FeatureCard
                key={idx}
                title={card.title}
                desc={card.desc}
                icon={card.icon}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. BUSINESS CTA */}
      <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src={getInTouchImage}
            alt="Organized warehouse container inventory background"
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-8">
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Committed to Safety. Focused on Quality.
          </h2>
          <div className="w-12 h-[2px] bg-brand-red mx-auto" />
          <p className="text-xs sm:text-sm md:text-base text-gray-300 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            At SGGPL, we believe quality products, responsible operations, and dependable service form the foundation of long-term customer relationships. Our commitment to safety and continuous improvement supports every aspect of our business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => handleNavigate('products')}
              className="px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              Explore Products
              <ArrowRight size={13} className="stroke-[2.5]" />
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-white text-gray-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}