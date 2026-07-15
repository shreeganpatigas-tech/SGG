/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  ShieldCheck, 
  TrendingUp, 
  Handshake, 
  Lightbulb, 
  Users, 
  Settings, 
  Activity, 
  Globe, 
  Wrench, 
  Truck, 
  PenTool, 
  GraduationCap, 
  Award, 
  Phone, 
  Mail, 
  ArrowRight, 
  Search, 
  MessageSquare, 
  UserCheck, 
  Building2,
  FileText,
  CalendarDays,
  ExternalLink
} from 'lucide-react';
import { ActivePage } from '../types';

import heroImage from "../assets/images/careers/hero.png";
import professionalEnvironmentImage from "../assets/images/careers/professional-environment.png";
import strategicCoordinationImage from "../assets/images/careers/strategic-coordination.png";
import dynamicExecutionImage from "../assets/images/careers/dynamic-execution.png";
import skillsDevelopmentImage from "../assets/images/careers/skills-development.png";
import highPressureDisciplineImage from "../assets/images/careers/high-pressure-discipline.png";
import timelessStandardImage from "../assets/images/careers/timeless-standard.png";
import zeroAccidentImage from "../assets/images/careers/zero-accident.png";

interface CareersProps {
  onNavigate?: (page: ActivePage) => void;
}

// ============================================================================
// 1. CareerValueCard Component
// ============================================================================
interface CareerValueCardProps {
  key?: React.Key;
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export function CareerValueCard({ icon, title, description, index }: CareerValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-white border border-slate-200/60 p-8 rounded-sm shadow-sm hover:shadow-xl hover:border-[#A30000]/20 transition-all duration-300 flex flex-col justify-between h-full group"
      id={`value-card-${index}`}
    >
      <div className="space-y-5">
        <div className="w-12 h-12 bg-[#A30000]/5 text-[#A30000] rounded-sm flex items-center justify-center transition-colors duration-300 group-hover:bg-[#A30000] group-hover:text-white shrink-0">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="text-base font-display font-medium text-slate-800 tracking-tight group-hover:text-[#A30000] transition-colors duration-250">
            {title}
          </h3>
          <p className="text-xs text-slate-500 font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// 2. TimelineCard Component (Hiring Journey)
// ============================================================================
interface TimelineCardProps {
  key?: React.Key;
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isLast: boolean;
}

export function TimelineCard({ step, title, description, icon, index, isLast }: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-slate-200/80 p-8 rounded-sm shadow-sm relative z-10 flex flex-col justify-between h-full group hover:border-[#A30000]/20 hover:shadow-md transition-all duration-300"
      id={`timeline-card-${index}`}
    >
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <span className="text-sm font-mono font-bold text-[#A30000] bg-[#A30000]/5 border border-[#A30000]/10 px-2.5 py-1 rounded-sm">
            STEP {step}
          </span>
          <div className="w-10 h-10 bg-[#A30000]/5 text-[#A30000] rounded-sm flex items-center justify-center group-hover:bg-[#A30000] group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-display font-bold text-slate-800 uppercase tracking-wider">
            {title}
          </h4>
          <p className="text-xs text-slate-500 font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// 3. DepartmentCard Component (Who We Look For)
// ============================================================================
interface DepartmentCardProps {
  key?: React.Key;
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export function DepartmentCard({ icon, title, description, index }: DepartmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="bg-slate-50 border border-slate-200/50 hover:border-[#A30000]/20 p-6 rounded-sm shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-4 group"
      id={`department-card-${index}`}
    >
      <div className="w-10 h-10 bg-[#A30000]/5 text-[#A30000] rounded-sm flex items-center justify-center transition-colors duration-300 group-hover:bg-[#A30000] group-hover:text-white shrink-0">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-display font-medium text-slate-800 tracking-tight group-hover:text-[#A30000] transition-colors duration-200">
          {title}
        </h4>
        <p className="text-xs text-slate-500 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// ============================================================================
// 4. TestimonialCard Component (Employee Stories - Placeholder)
// ============================================================================
interface TestimonialCardProps {
  title: string;
  description: string;
  index: number;
}

export function TestimonialCard({ title, description, index }: TestimonialCardProps) {
  return (
    <div
      className="bg-white border border-dashed border-slate-200 p-8 rounded-sm flex flex-col justify-between items-center text-center space-y-4"
      id={`testimonial-card-${index}`}
    >
      <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
        <Users size={18} />
      </div>
      <div className="space-y-2">
        <h4 className="text-sm font-display font-semibold text-slate-700 tracking-tight">
          {title}
        </h4>
        <p className="text-xs text-slate-400 font-light max-w-xs mx-auto">
          {description}
        </p>
      </div>
      <div className="text-[10px] font-mono text-[#A30000]/40 uppercase tracking-widest">
        SGGPL Careers
      </div>
    </div>
  );
}

// ============================================================================
// 5. CTASection Component (Employer Branding Business CTA)
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
    <section className="bg-slate-50 border-t border-slate-100 py-20 sm:py-24" id="careers-cta-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-[#A30000] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-[#A30000]/5 border border-[#A30000]/10 px-3 py-1 rounded-sm inline-block">
          Employer Branding
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
// MAIN CAREERS COMPONENT
// ============================================================================
export default function Careers({ onNavigate }: CareersProps) {
  
  const values = [
    {
      title: 'Professional Growth',
      description: 'Build your career through practical experience, continuous learning, and exposure to real industrial operations.',
      icon: <TrendingUp size={22} />
    },
    {
      title: 'Safety & Responsibility',
      description: 'Promote a workplace culture built on safety awareness, responsibility, and disciplined operations.',
      icon: <ShieldCheck size={22} />
    },
    {
      title: 'Integrity',
      description: 'Conduct business with honesty, transparency, and accountability.',
      icon: <Handshake size={22} />
    },
    {
      title: 'Teamwork',
      description: 'Collaborate across departments to achieve common goals and deliver value to customers.',
      icon: <Users size={22} />
    },
    {
      title: 'Innovation',
      description: 'Encourage new ideas, operational improvements, and continuous development.',
      icon: <Lightbulb size={22} />
    },
    {
      title: 'Customer Commitment',
      description: 'Every employee contributes to delivering dependable service and long-term customer satisfaction.',
      icon: <Award size={22} />
    }
  ];

  const hiringJourney = [
    {
      step: '01',
      title: 'Application',
      description: 'Submit your credentials to our HR talent database for review.',
      icon: <FileText size={20} />
    },
    {
      step: '02',
      title: 'Resume Review',
      description: 'Our operations panel reviews skills alignment against active and future requirements.',
      icon: <Search size={20} />
    },
    {
      step: '03',
      title: 'Interaction',
      description: 'Technical and behavioral discussions to evaluate alignment with our core safety culture.',
      icon: <MessageSquare size={20} />
    },
    {
      step: '04',
      title: 'Selection',
      description: 'Formal offer extension after thorough skill verification and reference checks.',
      icon: <UserCheck size={20} />
    },
    {
      step: '05',
      title: 'Joining',
      description: 'Comprehensive facility orientation and safe-handling onboarding program.',
      icon: <Building2 size={20} />
    }
  ];

  const departments = [
    {
      title: 'Engineers',
      description: 'Responsible for process controls, quality standards, and structural cylinder validation workflows.',
      icon: <Settings size={20} />
    },
    {
      title: 'Operations Professionals',
      description: 'Guarding high-pressure filling cycles, pressure safety manifolds, and storage parameters.',
      icon: <Activity size={20} />
    },
    {
      title: 'Sales & Marketing',
      description: 'Representing SGGPL to healthcare facilities, metallurgical complexes, and industrial developers.',
      icon: <Globe size={20} />
    },
    {
      title: 'Administration',
      description: 'Providing organizational backup, HR tracking, policy audits, and corporate compliance.',
      icon: <Briefcase size={20} />
    },
    {
      title: 'Logistics',
      description: 'Coordinating high-pressure cylinder delivery schedules and fleet tracking protocols.',
      icon: <Truck size={20} />
    },
    {
      title: 'Technicians',
      description: 'Performing physical operations, valve maintenance, thread checks, and refilling setup tasks.',
      icon: <Wrench size={20} />
    },
    {
      title: 'Quality Professionals',
      description: 'Running purity checks, moisture analyses, and IP standard verification tests.',
      icon: <ShieldCheck size={20} />
    },
    {
      title: 'Fresh Graduates',
      description: 'Guided career entry points exposing young talent to standard pressure system environments.',
      icon: <GraduationCap size={20} />
    }
  ];

  const lifeHighlights = [
    {
      title: 'Corporate Meetings & Alignment',
      subtitle: 'Strategic Coordination',
      description: 'Continuous dialogue ensures SGGPL teams remain aligned with customer priorities, regional logistics demand, and corporate transparency.',
      image: strategicCoordinationImage
    },
    {
      title: 'Team Collaboration & Operations',
      subtitle: 'Dynamic Execution',
      description: 'Experienced staff collaborate across departments, optimizing gas-filling cycles and maintaining delivery consistency.',
      image: dynamicExecutionImage
    },
    {
      title: 'Learning & Technical Training',
      subtitle: 'Skills Development',
      description: 'Regular technical seminars and equipment handling drills ensure every operational technician masters standard gas safety procedures.',
      image: skillsDevelopmentImage
    },
    {
      title: 'Industrial Gases Operations',
      subtitle: 'High Pressure Discipline',
      description: 'Handling heavy-duty storage, double-walled liquid containers, and calibrated cylinder manifolds with meticulous detail.',
      image: highPressureDisciplineImage
    },
    {
      title: 'Professional Environment',
      subtitle: 'Timeless Standard',
      description: 'Clean workspaces, secure storage layout rules, and clear management oversight define daily professional routines.',
      image: timelessStandardImage
    },
    {
      title: 'Safe Workplace Practices',
      subtitle: 'Zero Accident Culture',
      description: 'Strict personal protective gear usage, emergency shutoffs, and safety briefing checklists make our sites secure.',
      image: zeroAccidentImage
    }
  ];

  const handleScrollToResumeBank = () => {
    const target = document.getElementById('resume-bank-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigateToContact = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      window.location.hash = 'contact';
    }
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#A30000] selection:text-white" id="careers-page">
      
      {/* 1. HERO (Fortune 500 Editorial Split Layout) */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white overflow-hidden border-b border-slate-100 py-16 sm:py-24 md:py-32" id="careers-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A30000]/5 border border-[#A30000]/10 rounded-sm" id="hero-tag">
                <span className="w-1.5 h-1.5 bg-[#A30000] rounded-full animate-pulse" />
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#A30000]">
                  SGGPL Careers & Branding
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-light tracking-tight text-slate-900 leading-[1.1]" id="hero-heading">
                Build Your Career with SGGPL
              </h1>
              
              <div className="w-16 h-[2px] bg-[#A30000]" />
              
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-2xl" id="hero-desc">
                At Shree Ganpati Gastech Private Limited, we believe that our people are the foundation of our success. We welcome passionate, responsible, and motivated professionals who share our commitment to quality, safety, integrity, and continuous improvement.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4" id="hero-cta">
                <button
                  onClick={handleScrollToResumeBank}
                  className="px-6 py-3.5 bg-[#A30000] text-white hover:bg-neutral-900 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer shadow-md hover:shadow-lg flex items-center gap-2"
                  id="btn-submit-resume"
                >
                  Submit Resume
                  <ArrowRight size={14} />
                </button>
                <button
                  onClick={handleNavigateToContact}
                  className="px-6 py-3.5 bg-white text-slate-800 border border-slate-200 hover:border-slate-800 hover:text-slate-950 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer flex items-center gap-2"
                  id="btn-contact-hr"
                >
                  Contact HR
                </button>
              </div>
            </div>

            {/* Right Industrial Feature Image (Clean & Sharp) */}
            <div className="lg:col-span-5 relative" id="hero-image-pane">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#A30000]/10 to-transparent rounded-sm blur-2xl -z-10" />
              <div className="overflow-hidden border border-slate-200/60 shadow-2xl rounded-sm aspect-[4/3] bg-slate-100">
                <img
                  src={heroImage}
                  alt="Industrial engineering development workspace"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white border border-slate-100 shadow-xl p-4 rounded-sm hidden sm:flex items-center gap-3">
                <div className="p-2 bg-[#A30000]/5 rounded-sm text-[#A30000]">
                  <CalendarDays size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase text-[#A30000] tracking-widest">Future Ready</p>
                  <p className="text-xs text-slate-500 font-light">Join Our Talent Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WORKING AT SGGPL (Premium Editorial Section) */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100" id="working-at-sggpl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Image (Left) */}
            <div className="lg:col-span-5 order-2 lg:order-1" id="working-image-pane">
              <div className="overflow-hidden border border-slate-200/60 shadow-xl rounded-sm aspect-[4/5] bg-slate-100">
                <img
                  src={professionalEnvironmentImage}
                  alt="SGGPL clean workspace environment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content (Right) */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2 text-left" id="working-content-pane">
              <span className="text-[#A30000] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-[#A30000]/5 border border-[#A30000]/10 px-3 py-1 rounded-sm inline-block">
                Professional Environment
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-light tracking-tight text-slate-900" id="working-heading">
                Working at SGGPL
              </h2>
              <div className="w-12 h-[2px] bg-[#A30000]" />
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                <p>
                  At Shree Ganpati Gastech Private Limited, we establish a professional work environment grounded in mutual respect, disciplined compliance, and operational accountability.
                </p>
                <p>
                  We are deeply committed to fostering a safety culture. Our safety guidelines mandate detailed briefings, active risk monitoring, and personal protective compliance before anyone enters our pressure system environments.
                </p>
                <p>
                  Our personnel enjoy opportunities for continuous learning, developing specialized technical knowledge under the supervision of senior managers. We challenge our team members to take responsibility and contribute to long-term customer commitment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE VALUES (6 Premium Value Cards) */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-100" id="core-values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#A30000] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-[#A30000]/5 border border-[#A30000]/10 px-3 py-1 rounded-sm inline-block">
              Corporate Culture
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light tracking-tight text-slate-900" id="values-heading">
              Our Core Values
            </h2>
            <div className="w-12 h-[2px] bg-[#A30000] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="values-grid">
            {values.map((val, idx) => (
              <CareerValueCard
                key={idx}
                icon={val.icon}
                title={val.title}
                description={val.description}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. LIFE AT SGGPL (Alternating Premium Grid Layout) */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100" id="life-at-sggpl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#A30000] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-[#A30000]/5 border border-[#A30000]/10 px-3 py-1 rounded-sm inline-block">
              Daily Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light tracking-tight text-slate-900" id="life-heading">
              Life at SGGPL
            </h2>
            <div className="w-12 h-[2px] bg-[#A30000] mx-auto mt-2" />
          </div>

          <div className="space-y-16 sm:space-y-24" id="life-alternating-list">
            {lifeHighlights.map((hl, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                  id={`life-highlight-${idx}`}
                >
                  {/* Image container */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="overflow-hidden border border-slate-200/60 shadow-lg rounded-sm aspect-[16/10] bg-slate-100">
                      <img
                        src={hl.image}
                        alt={hl.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Text Container */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-4 text-left`}>
                    <span className="text-xs font-mono font-bold uppercase text-[#A30000] tracking-wider block">
                      {hl.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-light text-slate-900 tracking-tight">
                      {hl.title}
                    </h3>
                    <div className="w-10 h-[1.5px] bg-[#A30000]" />
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                      {hl.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. HIRING JOURNEY (Premium Timeline) */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-100" id="hiring-journey-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#A30000] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-[#A30000]/5 border border-[#A30000]/10 px-3 py-1 rounded-sm inline-block">
              Recruitment Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light tracking-tight text-slate-900" id="journey-heading">
              Our Hiring Journey
            </h2>
            <div className="w-12 h-[2px] bg-[#A30000] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" id="journey-grid">
            {hiringJourney.map((step, idx) => (
              <TimelineCard
                key={idx}
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
                index={idx}
                isLast={idx === hiringJourney.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHO WE LOOK FOR (Premium Cards) */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100" id="who-we-look-for">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#A30000] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-[#A30000]/5 border border-[#A30000]/10 px-3 py-1 rounded-sm inline-block">
              Talent Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light tracking-tight text-slate-900" id="look-heading">
              Who We Look For
            </h2>
            <div className="w-12 h-[2px] bg-[#A30000] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="departments-grid">
            {departments.map((dept, idx) => (
              <DepartmentCard
                key={idx}
                icon={dept.icon}
                title={dept.title}
                description={dept.description}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. RESUME BANK (Official Resume Submission Platform) */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100 scroll-mt-24" id="resume-bank-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-[#A30000] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest bg-[#A30000]/5 border border-[#A30000]/10 px-3 py-1 rounded-sm inline-block">
              Talent Network
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-light text-slate-900 tracking-tight" id="bank-heading">
              Join Our Talent Network
            </h2>
            <div className="w-12 h-[2px] bg-[#A30000] mx-auto mt-2" />
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
              We are always interested in connecting with talented professionals. Share your resume with us through email or contact our HR team for future opportunities.
            </p>
          </div>

          {/* SGGPL Direct HR Contact channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto" id="bank-channels">
            
            <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-sm">
              <span className="text-[10px] font-mono text-[#A30000] uppercase tracking-wider block mb-2">OFFICIAL EMAIL</span>
              <p className="text-xs text-slate-700 font-bold truncate">shreeganpatigastech@gmail.com</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-sm">
              <span className="text-[10px] font-mono text-[#A30000] uppercase tracking-wider block mb-2">HR HOTLINE</span>
              <p className="text-xs text-slate-700 font-bold">+91 7987594387</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-sm">
              <span className="text-[10px] font-mono text-[#A30000] uppercase tracking-wider block mb-2">WHATSAPP HR</span>
              <p className="text-xs text-slate-700 font-bold">Instant Chat Access</p>
            </div>

            <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-sm">
  <span className="text-[10px] font-mono text-[#0A66C2] uppercase tracking-wider block mb-2">
    LINKEDIN
  </span>
  <a
    href="https://www.linkedin.com/company/shreeganpatigastech/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs text-slate-700 font-bold"
  >
    Follow SGGPL
  </a>
</div>

          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" id="bank-buttons">
            <a
              href="mailto:shreeganpatigastech@gmail.com?subject=Resume Submission - Shree Ganpati Gastech"
              className="px-6 py-3.5 bg-[#A30000] hover:bg-neutral-900 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer shadow-md hover:shadow-lg flex items-center gap-2 w-full sm:w-auto justify-center"
              id="btn-send-resume"
            >
              <Mail size={14} />
              Send Resume
            </a>
            <a
              href="tel:+917987594387"
              className="px-6 py-3.5 bg-white text-slate-800 border border-slate-200 hover:border-slate-800 hover:text-slate-950 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer flex items-center gap-2 w-full sm:w-auto justify-center"
              id="btn-call-hr"
            >
              <Phone size={14} />
              Call HR
            </a>
            <a
              href="https://wa.me/917987594387"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-white text-emerald-600 border border-emerald-100 hover:border-emerald-600 hover:bg-emerald-50/20 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer flex items-center gap-2 w-full sm:w-auto justify-center"
              id="btn-whatsapp-hr"
            >
              <span>WhatsApp HR</span>
            </a>
          </div>

        </div>
      </section>

      {/* 9. BUSINESS CTA */}
      <CTASection 
        heading="Become Part of Our Journey"
        supportingText="We are building a team driven by integrity, quality, professionalism, and a commitment to delivering excellence. If you are passionate about contributing to the industrial gas industry, we would be pleased to hear from you."
        primaryButtonText="Email Your Resume"
        secondaryButtonText="Contact HR"
        onPrimaryClick={() => {
          window.location.href = "mailto:shreeganpatigastech@gmail.com?subject=Resume%20Submission%20-%20Shree%20Ganpati%20Gastech";
        }}
        onSecondaryClick={handleNavigateToContact}
      />

    </div>
  );
}