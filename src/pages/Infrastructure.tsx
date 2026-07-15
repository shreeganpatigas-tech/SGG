/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Flame,
  ClipboardCheck,
  Warehouse,
  Truck,
  Award,
  Shield,
  FileText,
  Calendar,
  ShieldCheck,
  Wrench,
  CheckCircle,
  Clock,
  HeartHandshake,
  Users,
  ArrowRight,
  ChevronRight,
  Activity
} from 'lucide-react';
import { ActivePage } from '../types';

import heroImage from "../assets/images/infrastructure/hero.png";
import engineeringDisciplineImage from "../assets/images/infrastructure/engineering-discipline.png";
import gasFillingImage from "../assets/images/infrastructure/gas-filling.png";
import inspectionImage from "../assets/images/infrastructure/inspection.png";
import storageImage from "../assets/images/infrastructure/storage.png";
import distributionImage from "../assets/images/infrastructure/distribution.png";
import qualityImage from "../assets/images/infrastructure/quality.png";
import safetyImage from "../assets/images/infrastructure/safety.png";
import getInTouchImage from "../assets/images/infrastructure/get-in-touch.png";

interface InfrastructureProps {
  onNavigate?: (page: ActivePage) => void;
}

interface OperationalPillar {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  highlights: string[];
}

export default function Infrastructure({ onNavigate }: InfrastructureProps) {
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

  const PILLARS: OperationalPillar[] = [
    {
      id: 'filling',
      name: 'Gas Filling Operations',
      description: 'Dedicated operational processes focused on the safe filling, handling, and distribution of industrial and medical gases while maintaining quality and operational consistency.',
      image: gasFillingImage,
      icon: <Flame className="w-5 h-5 text-brand-red" />,
      highlights: [
        'Separated manifolds isolating clinical and industrial operations.',
        'Continuous monitoring of pressure, temperature, and cylinder weights.',
        'Structured pipeline and manifold layouts conforming to safety regulations.',
        'Standard operational maintenance programs for filling manifolds.'
      ]
    },
    {
      id: 'inspection',
      name: 'Cylinder Inspection',
      description: 'Routine inspection and verification procedures help ensure cylinders remain suitable for safe handling, transportation, and customer use.',
      image: inspectionImage,
      icon: <ClipboardCheck className="w-5 h-5 text-brand-red" />,
      highlights: [
        'Rigorous internal and external visual cylinder audits.',
        'Routine neck thread checks and tare weight verification.',
        'Authorized cylinder testing routines under specified protocols.',
        'Precise valve fitting using calibrated torque systems.'
      ]
    },
    {
      id: 'storage',
      name: 'Storage & Inventory',
      description: 'Organized storage practices and systematic inventory management support uninterrupted product availability and efficient order fulfillment.',
      image: storageImage,
      icon: <Warehouse className="w-5 h-5 text-brand-red" />,
      highlights: [
        'Organized and demarcated storage zones for filled and empty cylinders.',
        'Gas-specific segregation to eliminate contamination risks.',
        'Safe cylinder securing using heavy-duty retention frames.',
        'Systematic inventory counts ensuring reliable customer fulfillment.'
      ]
    },
    {
      id: 'distribution',
      name: 'Distribution Network',
      description: 'Structured logistics planning enables timely and dependable delivery of industrial and medical gases across our service regions.',
      image: distributionImage,
      icon: <Truck className="w-5 h-5 text-brand-red" />,
      highlights: [
        'Logistical scheduling mapping optimal distribution routes.',
        'Secured transit setups with protective safety caps fitted standard.',
        'Trained loading personnel executing standard vehicle weight balancing.',
        'Continuous dispatch coordination keeping delivery schedules on time.'
      ]
    },
    {
      id: 'quality',
      name: 'Quality Management',
      description: 'Every stage of our operations emphasizes product quality, consistency, and adherence to applicable standards.',
      image: qualityImage,
      icon: <Award className="w-5 h-5 text-brand-red" />,
      highlights: [
        'Calibrated gas analyzer audits verifying batch specifications.',
        'Strict trace documentation for clinical medical gas outputs.',
        'Leak-testing of valves under standard pressure criteria.',
        'Adherence to national and regional chemical gas specifications.'
      ]
    },
    {
      id: 'safety',
      name: 'Safety Practices',
      description: 'Safe handling procedures, disciplined operational practices, and continuous awareness help maintain a secure working environment.',
      image: safetyImage,
      icon: <Shield className="w-5 h-5 text-brand-red" />,
      highlights: [
        'Comprehensive, scheduled staff safety training on high-pressure systems.',
        'Equipped emergency isolation valves at multiple terminal stations.',
        'Daily routine equipment wear and pressure relief audits.',
        'Mandatory personal protective equipment protocols for all line operators.'
      ]
    }
  ];

  const WORKFLOW_STEPS = [
    {
      step: '01',
      title: 'Customer Requirement',
      icon: <FileText className="w-5 h-5 text-brand-red" />,
      desc: 'Analyzing client-specific volume, gas purity, and delivery pressure parameters.'
    },
    {
      step: '02',
      title: 'Order Planning',
      icon: <Calendar className="w-5 h-5 text-brand-red" />,
      desc: 'Structured scheduling and resource allocation mapped to customer timelines.'
    },
    {
      step: '03',
      title: 'Quality Verification',
      icon: <ShieldCheck className="w-5 h-5 text-brand-red" />,
      desc: 'Purity verification and standard audits executed before any cylinder fills.'
    },
    {
      step: '04',
      title: 'Cylinder Preparation',
      icon: <Wrench className="w-5 h-5 text-brand-red" />,
      desc: 'Pre-filling audits, tare weight logging, and valve integrity inspections.'
    },
    {
      step: '05',
      title: 'Safe Dispatch',
      icon: <Truck className="w-5 h-5 text-brand-red" />,
      desc: 'Safe cylinder securing, safety cap attachment, and vehicle routing dispatch.'
    },
    {
      step: '06',
      title: 'Customer Delivery',
      icon: <CheckCircle className="w-5 h-5 text-brand-red" />,
      desc: 'Prompt on-site handover, verification of pressure, and receipt certification.'
    }
  ];

  const COMMITMENT_CARDS = [
    {
      title: 'Product Quality',
      desc: 'Strict compliance with certified purity baselines and industry norms.',
      icon: <Award className="w-6 h-6 text-brand-red" />
    },
    {
      title: 'Operational Discipline',
      desc: 'Rigorous adherence to standardized filling workflows and regulatory protocols.',
      icon: <Activity className="w-6 h-6 text-brand-red" />
    },
    {
      title: 'Reliable Supply',
      desc: 'Seamless logistics planning to guarantee uninterrupted client operations.',
      icon: <Clock className="w-6 h-6 text-brand-red" />
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Responsive service tailored to the dynamic needs of our industrial partners.',
      icon: <HeartHandshake className="w-6 h-6 text-brand-red" />
    }
  ];

  const TRUST_CARDS = [
    {
      title: 'Experienced Team',
      desc: 'Our professionals offer deep industrial gas expertise.',
      icon: <Users className="w-8 h-8 text-brand-red" />
    },
    {
      title: 'Reliable Operations',
      desc: 'Consistent delivery timelines and operational continuity.',
      icon: <Clock className="w-8 h-8 text-brand-red" />
    },
    {
      title: 'Quality Focus',
      desc: 'Uncompromising compliance with standards.',
      icon: <Award className="w-8 h-8 text-brand-red" />
    },
    {
      title: 'Customer Commitment',
      desc: 'Long-term relationships built on trusted service.',
      icon: <HeartHandshake className="w-8 h-8 text-brand-red" />
    },
    {
      title: 'Safety Culture',
      desc: 'Disciplined procedures guarding every operation.',
      icon: <Shield className="w-8 h-8 text-brand-red" />
    },
    {
      title: 'Professional Support',
      desc: 'Responsive assistance for all system requests.',
      icon: <Wrench className="w-8 h-8 text-brand-red" />
    }
  ];

  return (
    <div className="w-full bg-white text-brand-charcoal selection:bg-brand-red selection:text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-brand-charcoal overflow-hidden py-32 px-4 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="High-Quality Professional Industrial Facility"
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
              SGGPL Infrastructure Page
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-tight"
          >
            Infrastructure & Operational Capabilities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto font-sans font-light leading-relaxed"
          >
            Shree Ganpati Gastech Private Limited maintains organized operational infrastructure, structured workflows, and quality-focused processes to support the safe handling, storage, and distribution of industrial, medical, specialty gases, and commercial LPG.
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

      {/* OPERATIONAL OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-red text-xs font-bold uppercase tracking-widest block font-mono">
                ENGINEERING DISCIPLINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal tracking-tight">
                Our Operational Philosophy
              </h2>
              <div className="w-12 h-[2px] bg-brand-red" />
              <p className="text-sm text-neutral-500 font-sans font-light leading-relaxed">
                We believe that operational capability is built on strict compliance, regular safety check-points, and methodical storage protocols. By focusing our investment on certified handling systems, trained operations personnel, and standard-compliant facilities, SGGPL delivers the consistent quality required by manufacturing plants, clinical units, and infrastructure companies.
              </p>
              <p className="text-xs text-neutral-400 font-sans font-light leading-relaxed">
                Every batch of industrial or medical gas is documented, checked, and loaded under systematic protocols to guarantee that what reaches your site meets standard parameters.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-sm border border-slate-200 shadow-sm aspect-[16/10] bg-slate-50">
                <img
                  src={engineeringDisciplineImage}
                  alt="Industrial gas operation inspection"
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

      {/* INFRASTRUCTURE HIGHLIGHTS GRID */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
              SYSTEMATIC FRAMEWORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal tracking-tight">
              Operational Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-sans font-light">
              Demonstrated capabilities in high-purity handling, rigorous inspection workflows, and structured logistics management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white border border-slate-200/80 rounded-sm overflow-hidden flex flex-col h-full hover:border-brand-red/30 transition-all duration-300 hover:shadow-md"
              >
                {/* Large Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={pillar.image}
                    alt={pillar.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/95 border border-slate-200 px-2.5 py-1 rounded-xs flex items-center gap-1.5 shadow-xs">
                    {pillar.icon}
                    <span className="text-[10px] font-mono font-bold uppercase text-brand-charcoal">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-display font-bold text-brand-charcoal group-hover:text-brand-red transition-colors duration-200">
                      {pillar.name}
                    </h3>
                    <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <ul className="space-y-2">
                      {pillar.highlights.slice(0, 2).map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle size={12} className="text-brand-red shrink-0 mt-0.5" />
                          <span className="text-[11px] text-neutral-600 font-sans font-light">
                            {hl}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBTLE DIVIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-slate-100" />
      </div>

      {/* OPERATIONAL PROCESS - ALTERNATING DETAILED LAYOUT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
              STANDARDS IN PRACTICE
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal tracking-tight">
              Operational Focus & Standards
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light">
              Examine the strict, structured checkpoints SGGPL executes across our facilities to maintain compliance and reliability.
            </p>
          </div>

          <div className="space-y-24">
            {PILLARS.map((pillar, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={`detail-${pillar.id}`}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Left or Right Image */}
                  <div className={`col-span-1 lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative overflow-hidden rounded-sm border border-slate-100 shadow-sm aspect-[16/10] group bg-slate-50">
                      <img
                        src={pillar.image}
                        alt={pillar.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className={`col-span-1 lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-brand-red/5 rounded-xs border border-brand-red/10">
                        {pillar.icon}
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400">
                        Process Pillar 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-brand-charcoal tracking-tight">
                      {pillar.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-500 font-sans font-light leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <span className="text-[10px] font-mono font-bold uppercase text-brand-charcoal tracking-wider block">
                        Core Compliance Guidelines
                      </span>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {pillar.highlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0 mt-2" />
                            <span className="text-xs text-neutral-600 font-sans font-light leading-relaxed">
                              {hl}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUBTLE DIVIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-slate-100" />
      </div>

      {/* OPERATIONAL WORKFLOW TIMELINE */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
              SUPPLY CHAIN
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal tracking-tight">
              Operational Workflow
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light">
              From our first contact to verified cylinder offloading, SGGPL workflows keep delivery and safety completely synced.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative mt-12">
            {/* Center line for desktop */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 transform lg:-translate-x-1/2 z-0 hidden sm:block" />

            <div className="space-y-12">
              {WORKFLOW_STEPS.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={step.step}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isLeft ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Circle icon on line */}
                    <div className="absolute left-4 lg:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-brand-red flex items-center justify-center transform -translate-x-1/2 z-10 shadow-xs hidden sm:flex">
                      <span className="text-[10px] font-mono font-bold text-brand-red">
                        {step.step}
                      </span>
                    </div>

                    {/* Timeline Content Block */}
                    <div className={`w-full sm:w-[90%] lg:w-[45%] ml-12 sm:ml-16 lg:ml-0 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="bg-white p-6 sm:p-8 border border-slate-200/80 rounded-sm shadow-3xs hover:border-brand-red/20 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-1.5 bg-brand-red/5 rounded-xs">
                            {step.icon}
                          </div>
                          <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-brand-charcoal">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-500 font-sans font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SUBTLE DIVIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-slate-100" />
      </div>

      {/* QUALITY COMMITMENT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
              OUR PLEDGE
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              Quality Commitment
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light">
              We pledge simple, transparent operational standards designed to retain long-term trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMITMENT_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="p-8 border border-slate-100 rounded-sm bg-slate-50/30 hover:bg-white hover:border-slate-200 transition-all duration-300 space-y-4 shadow-3xs"
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

      {/* WHY CUSTOMERS TRUST SGGPL */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
              OPERATIONAL BENCHMARKS
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              Why Customers Trust Us
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light">
              Clear corporate values executed by real teams to safeguard consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRUST_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="p-8 border border-slate-200/60 rounded-sm bg-white hover:shadow-md transition-all duration-300 space-y-4"
              >
                <div className="p-2.5 bg-brand-red/5 text-brand-red rounded-xs border border-brand-red/10 inline-block">
                  {card.icon}
                </div>
                <h3 className="text-xs font-mono font-bold uppercase text-brand-charcoal tracking-wider">
                  {card.title}
                </h3>
                <p className="text-[11px] text-neutral-500 font-sans font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS CTA */}
      <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src={getInTouchImage}
            alt="Refinery background"
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-8">
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Reliable Infrastructure. Trusted Supply.
          </h2>
          <div className="w-12 h-[2px] bg-brand-red mx-auto" />
          <p className="text-xs sm:text-sm md:text-base text-gray-300 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            With organized operations, quality-focused processes, and a commitment to dependable service, SGGPL continues to support industries with reliable industrial and medical gas solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={handleRequestQuote}
              className="px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              Request Quote
              <ArrowRight size={13} className="stroke-[2.5]" />
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-white text-gray-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}