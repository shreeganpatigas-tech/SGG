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
  CheckCircle, 
  Eye, 
  Target, 
  ArrowRight, 
  Users, 
  Clock, 
  ChevronRight 
} from 'lucide-react';
import { ActivePage } from '../types';

import heroImage from "../assets/images/about/hero.png";
import philosophyImage from "../assets/images/about/our-philosophy.png";
import getInTouchImage from "../assets/images/about/get-in-touch.png";
import bhaskarImage from "../assets/images/about/photo-bhaskar.png";
import diwakarImage from "../assets/images/about/photo-diwakar.png";
import prabhakarImage from "../assets/images/about/photo-prabhakar.png";

interface AboutProps {
  onNavigate?: (page: ActivePage) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const coreValues = [
    {
      icon: <Shield size={24} className="text-brand-red stroke-[1.5]" />,
      title: 'Safety First',
      desc: 'Enforcing absolute compliance with PESO regulations, strict cylinder testing, and zero-compromise storage protocols at every stage.'
    },
    {
      icon: <Award size={24} className="text-brand-red stroke-[1.5]" />,
      title: 'Uncompromising Quality',
      desc: 'Systematic batch gas chromatography and analysis verify exact purity grades to meet high industrial and clinical codes.'
    },
    {
      icon: <HeartHandshake size={24} className="text-brand-red stroke-[1.5]" />,
      title: 'Integrity',
      desc: 'Conducting business with transparency, ethical responsibility, and professional transparency that forms the cornerstone of our operations.'
    },
    {
      icon: <CheckCircle size={24} className="text-brand-red stroke-[1.5]" />,
      title: 'Customer Commitment',
      desc: 'Building reliable supply pipelines and custom cylinder delivery programs that guarantee our partners never face operational delays.'
    }
  ];

  const leaders = [
    {
      name: 'Bhaskar Mishra',
      role: 'Chairman & Director',
      bio: 'Provide strategic leadership and long-term vision while guiding the company with integrity and commitment to sustainable growth.',
      image: bhaskarImage
    },
    {
      name: 'Diwakar Mishra',
      role: 'Executive Director',
      bio: 'Supports business operations and organizational development while contributing to customer satisfaction and operational excellence.',
      image: diwakarImage
    },
    {
      name: 'Prabhakar Mishra',
      role: 'Managing Director',
      bio: 'Leads the company with a focus on quality, safety, operational excellence, and long-term customer relationships.',
      image: prabhakarImage
    }
  ];

  const legacyEvents = [
    {
      year: '1991',
      company: 'Sadguru Industrial Gases',
      desc: 'Beginning of the industrial gas business and establishment of long-term customer relationships.'
    },
    {
      year: '2007',
      company: 'Maharshi Gases',
      desc: 'Business expansion and wider industrial gas distribution.'
    },
    {
      year: '2012',
      company: 'Maharshi Air Solutions',
      desc: 'Expansion into broader industrial gas solutions and operational growth.'
    },
    {
      year: '2019',
      company: 'Satguru Air Products',
      desc: 'Strengthened regional presence and customer network.'
    },
    {
      year: '2026',
      company: 'Shree Ganpati Gastech Private Limited',
      desc: 'Modern corporate identity representing decades of experience, innovation, safety, quality, and future growth.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full bg-white selection:bg-brand-red selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-brand-charcoal overflow-hidden py-24 px-4 text-center">
        {/* Real Industrial Photography Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="SGGPL Heavy Industrial Gas Refining Facility"
            className="w-full h-full object-cover object-center brightness-[0.2]"
          />
          {/* Subtle overlay accent */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/40 to-brand-charcoal/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-brand-red/10 border border-brand-red/30 px-3.5 py-1 rounded-sm"
          >
            <span className="text-brand-red text-[11px] font-bold uppercase tracking-widest">
              Established 1991
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white"
          >
            About Shree Ganpati Gastech
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto font-sans font-light leading-relaxed"
          >
            Shree Ganpati Gastech Private Limited (SGGPL) is built on decades of industry experience, strong professional values, operational discipline, and an uncompromising commitment to delivering certified industrial, medical, and specialty gas solutions with absolute quality, consistency, and safety.
          </motion.p>
        </div>
      </section>

      {/* 2. CORPORATE PHILOSOPHY & INDUSTRIAL OPERATIONS PORTRAIT */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-brand-red text-xs font-bold uppercase tracking-widest border-b-2 border-brand-red pb-1">
                  OUR PHILOSOPHY
                </span>
                <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
                  Uncompromising Integrity & Operational Discipline
                </h2>
              </div>

              <div className="space-y-6 text-sm text-neutral-500 font-sans leading-relaxed">
                <p>
                  At SGGPL, our corporate philosophy dictates that success is defined through the enduring relationships we build and the strict safety benchmarks we execute daily. We operate under rigorous self-regulation and external compliance frameworks, ensuring every high-pressure cylinder filled and every transport tanker dispatched represents our core values of honesty, transparency, and operational responsibility.
                </p>
                <p>
                  We are driven by a continuous improvement ethos that influences our logistical coordination, safety checks, and staff training. By combining thirty-five years of ancestral market experience with professionalized management systems, we provide heavy steel plants, healthcare networks, food processing systems, and manufacturing industries across the region with an absolute certainty of supply.
                </p>
              </div>
            </div>

            {/* Right Picture Column */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-md border border-slate-200 p-2 bg-white">
                <img
                  src={philosophyImage}
                  alt="SGGPL Safe Gas Handling & Cylinder Verification"
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 border border-brand-red/10 rounded-sm -z-10 hidden sm:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="bg-white p-10 border border-slate-200/60 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 space-y-6">
              <div className="w-12 h-12 bg-brand-red/5 text-brand-red border border-brand-red/10 rounded-sm flex items-center justify-center">
                <Eye size={22} className="stroke-[1.5]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-display font-bold text-brand-charcoal uppercase tracking-wide">Our Vision</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                  To become the region's most trusted and responsive industrial and medical gas supplier, recognized for raising the standard of quality, safety compliance, customer confidence, and responsible corporate growth across critical national supply lines.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-10 border border-slate-200/60 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 space-y-6">
              <div className="w-12 h-12 bg-brand-red/5 text-brand-red border border-brand-red/10 rounded-sm flex items-center justify-center">
                <Target size={22} className="stroke-[1.5]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-display font-bold text-brand-charcoal uppercase tracking-wide">Our Mission</h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                  To supply premium high-purity industrial gases, medical oxygen, specialized gases, and commercial LPG with unwavering reliability, ensuring client satisfaction and uninterrupted operations through optimized logistics, technical excellence, and deep-seated commitment to safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES (4 PREMIUM EQUAL HEIGHT CARDS) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
              OUR STRATEGIC PILLARS
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              Values Engineered for Long-Term Trust
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light">
              We align our leadership, engineering practices, and business development with consistent values that safeguard our corporate reputability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-brand-light p-8 rounded-sm border border-slate-200/60 hover:border-brand-red/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group cursor-default"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-white text-brand-red border border-slate-200 rounded-sm flex items-center justify-center group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300 shadow-sm">
                    {value.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 group-hover:text-brand-red transition-colors duration-200">
                      {value.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMPANY LEGACY TIMELINE */}
      <section className="py-24 bg-brand-light border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
              CORPORATE CHRONOLOGY
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              A Decades-Long Legacy of Industry Leadership
            </h2>
            <p className="text-sm text-neutral-500 font-sans font-light">
              Tracing our history back to 1991, each chapter represents our commitment to expanding technical capabilities, structural safety, and high-purity production.
            </p>
          </div>

          {/* Desktop Horizontal Timeline (md and up) */}
          <div className="hidden md:block relative pb-8">
            {/* Connecting horizontal track line */}
            <div className="absolute top-[3.25rem] left-8 right-8 h-[2px] bg-slate-200"></div>

            <div className="grid grid-cols-5 gap-6 relative z-10">
              {legacyEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="space-y-6 relative group"
                >
                  {/* Circular Node */}
                  <div className="flex items-center justify-center">
                    <div className="w-10 h-10 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-sm z-10">
                      <Clock size={16} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Year Tag */}
                  <div className="text-center space-y-2">
                    <span className="inline-block px-3 py-1 bg-white border border-slate-200 text-brand-red font-display text-sm font-extrabold rounded-sm group-hover:border-brand-red/30 transition-all duration-300 shadow-sm">
                      {event.year}
                    </span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800 pt-1 group-hover:text-brand-red transition-colors duration-200">
                      {event.company}
                    </h3>
                    <p className="text-[11px] text-neutral-500 font-light leading-relaxed max-w-[190px] mx-auto">
                      {event.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Timeline (sm and down) */}
          <div className="block md:hidden relative">
            {/* Connecting vertical track line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-slate-200"></div>

            <div className="space-y-12 relative z-10">
              {legacyEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Clock size={18} className="text-slate-400" />
                  </div>
                  <div className="bg-white p-6 border border-slate-200/60 rounded-sm flex-grow space-y-2 shadow-sm">
                    <span className="inline-block px-2.5 py-0.5 bg-brand-red/5 border border-brand-red/10 text-brand-red font-display text-xs font-extrabold rounded-sm">
                      {event.year}
                    </span>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      {event.company}
                    </h3>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP (PREMIUM DIRECTOR CARDS) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
              BOARD OF DIRECTORS
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              Governing Leadership & Strategy
            </h2>
            <p className="text-sm text-neutral-500 font-sans font-light">
              Guided by principles of integrity, SGGPL directors drive sustainable expansion and uncompromised industrial safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="group bg-white border border-slate-200/60 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                {/* Director Portrait Photograph */}
                <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-slate-100 bg-slate-50">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark overlay on bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-display font-bold text-neutral-800 tracking-tight group-hover:text-brand-red transition-colors duration-200">
                        {leader.name}
                      </h3>
                      <p className="text-[10px] text-brand-red font-mono uppercase tracking-widest mt-1.5 font-bold">
                        {leader.role}
                      </p>
                    </div>

                    <div className="w-10 h-[2px] bg-brand-red group-hover:w-16 transition-all duration-300"></div>

                    {/* Biographies are exactly 2-3 lines only, strictly no fabrication */}
                    <p className="text-xs text-neutral-500 leading-relaxed font-sans font-light min-h-[50px]">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 text-[10px] text-neutral-400 font-mono tracking-wider uppercase">
                    SGGPL Governing Board
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CORPORATE STRENGTH BANNER (4 HIGHLIGHT CARDS) */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Clock size={20} className="text-brand-red" />,
                title: '35+',
                subtitle: 'Years of Industry Experience',
                desc: 'A trusted journey spanning ancestral expertise and robust growth.'
              },
              {
                icon: <Users size={20} className="text-brand-red" />,
                title: '1000+',
                subtitle: 'Clients Served',
                desc: 'Uninterrupted distribution pipelines across vital heavy sectors.'
              },
              {
                icon: <Award size={20} className="text-brand-red" />,
                title: 'Quality Focused',
                subtitle: 'Operations',
                desc: 'Equipped with verified chromatographs and batch analysis.'
              },
              {
                icon: <Shield size={20} className="text-brand-red" />,
                title: 'Safety First',
                subtitle: 'Culture',
                desc: 'Strict adherence to PESO norms and safety verification.'
              }
            ].map((strength, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 border border-slate-200/60 rounded-sm shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start"
              >
                <div className="p-2.5 bg-brand-red/5 border border-brand-red/10 rounded-sm text-brand-red shrink-0">
                  {strength.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-display font-extrabold text-brand-charcoal tracking-tight leading-none">
                    {strength.title}
                  </h3>
                  <p className="text-xs font-bold text-neutral-700 uppercase tracking-wide">
                    {strength.subtitle}
                  </p>
                  <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                    {strength.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION (CTA) */}
      <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
        {/* Background CTA Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={getInTouchImage}
            alt="Partner with SGGPL"
            className="w-full h-full object-cover object-center brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/60 to-brand-charcoal/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 px-4">
          <div className="space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest border-b-2 border-brand-red pb-1">
              LONG-TERM PARTNERSHIPS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mt-2">
              Let's Build Long-Term Partnerships
            </h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto font-sans font-light leading-relaxed">
              Whether you're looking for industrial gases, medical gases, specialty gases, commercial LPG, or industrial gas equipment, our team is ready to support your business requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate && onNavigate('products')}
              className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
            >
              Explore Products
              <ArrowRight size={14} className="stroke-[2]" />
            </button>
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 hover:border-white text-gray-300 hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Us
              <ChevronRight size={14} className="stroke-[2]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}