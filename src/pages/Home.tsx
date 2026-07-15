/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  Award, 
  ArrowRight, 
  Eye, 
  ClipboardList, 
  Gauge, 
  Flame, 
  CheckCircle2 
} from 'lucide-react';
import { ActivePage } from '../types';
import { PRODUCTS, INDUSTRIES } from '../data';

// Corrected import paths based on your folder structure
import heroImage from "../assets/images/hero/hero.png";
import corporateProfileImage from "../assets/images/company/corporate-profile.png";
import getInTouchImage from "../assets/images/about/get-in-touch.png";

function Counter({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = React.useState(value);
  const ref = React.useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const match = value.match(/^([\d.]+)(.*)$/);
          if (!match) return;
          
          const target = parseFloat(match[1]);
          const suffix = match[2] || '';
          const startTime = performance.now();
          const isFloat = value.includes('.');
          
          const animate = (currentTime: number) => {
            const elapsed = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            
            // easeOutQuad
            const easeProgress = progress * (2 - progress);
            const current = easeProgress * target;
            
            if (ref.current) {
              ref.current.textContent = isFloat 
                ? `${current.toFixed(2)}${suffix}`
                : `${Math.floor(current)}${suffix}`;
            }
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return <span ref={ref}>{value}</span>;
}

interface HomeProps {
  onNavigate: (page: ActivePage) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // Get precisely ordered featured products
  const featuredProductIds = ['oxygen-ind', 'nitrogen-ind', 'argon-ind', 'co2-ind', 'med-oxygen', 'lpg-bulk'];
  const featuredProducts = featuredProductIds
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter((p): p is typeof PRODUCTS[0] => !!p);

  // Get precisely ordered featured industries
  const featuredIndustryIds = ['hospitals', 'steel', 'cement', 'fabrication', 'chemical', 'food'];
  const featuredIndustries = featuredIndustryIds
    .map(id => INDUSTRIES.find(ind => ind.id === id))
    .filter((ind): ind is typeof INDUSTRIES[0] => !!ind);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="w-full bg-white selection:bg-brand-red selection:text-white">
      {/* 1. Fortune 500 Editorial Light Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#FDFDFD] border-b border-slate-200/60 overflow-hidden py-16 lg:py-0 px-4">
        {/* Subtle geometric line pattern in background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-black"></div>
          <div className="absolute top-0 left-2/4 w-[1px] h-full bg-black"></div>
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-black"></div>
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-black"></div>
          <div className="absolute top-2/3 left-0 w-full h-[1px] bg-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Content Column */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Verification Tag */}
            <div className="inline-flex items-center gap-2 bg-brand-red/5 border border-brand-red/20 px-3.5 py-1 rounded-sm text-brand-red text-[11px] font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
              PESO Licensed & ISO 9001:2015 Certified Operations
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-none text-brand-charcoal">
                Precision Gases.<br />
                <span className="text-brand-red">Engineered Safety.</span><br />
                Uncompromising Trust.
              </h1>
              <p className="text-sm sm:text-base text-neutral-500 max-w-xl font-sans font-normal leading-relaxed">
                Delivering high-purity industrial, medical, and specialty gas solutions with absolute quality standards, consistent supply integrity, and strict safety protocols for critical sectors across India.
              </p>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onNavigate('quote')}
                className="px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-sm flex items-center justify-center gap-2.5 cursor-pointer shadow-sm hover:shadow-[0_4px_12px_rgba(163,0,0,0.15)]"
              >
                Request Quotation
                <ArrowRight size={14} className="stroke-[2]" />
              </button>
              <button
                onClick={() => onNavigate('products')}
                className="px-8 py-4 bg-white border border-slate-300 hover:border-brand-charcoal hover:bg-slate-50 text-brand-charcoal font-bold text-xs uppercase tracking-widest transition-all duration-300 rounded-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Gas Catalog
                <Eye size={14} className="stroke-[2]" />
              </button>
            </div>

            {/* Verified Trust Indicators */}
            <div className="pt-6 border-t border-slate-200/60 max-w-lg">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-red shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700">PESO Authorized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-red shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700">ISO 9001:2015 Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-red shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700">Dedicated Fleet Logistics</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image / Visualization Column */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Framed Image Container */}
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-slate-50 border border-slate-200 p-3 rounded-sm shadow-sm relative z-10 overflow-hidden group">
              <div className="w-full h-full overflow-hidden rounded-sm relative">
                <img
                  src={heroImage}
                  alt="SGGPL Premium Gas Distribution Infrastructure"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                />
                {/* Clean industrial red gradient border accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                
                {/* Subtle Text Overlays in Image margins */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <p className="text-[10px] font-mono font-bold tracking-widest text-brand-red uppercase">Operational Excellence</p>
                  <p className="text-sm font-display font-bold leading-tight">Shri Ganpati Gastech High-Pressure Distribution Center</p>
                </div>
              </div>
            </div>

            {/* Decorative Architectural Frame Element behind the image */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-slate-200 rounded-sm -z-10 hidden lg:block"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Values Section (3 Premium Cards) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest border-b-2 border-brand-red pb-1">
              ENGINEERING DISCIPLINE
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              Our Core Operational Commitments
            </h2>
            <p className="text-sm text-neutral-500 font-sans font-light">
              We govern every cylinder filling operation and supply dispatch with unwavering professional principles.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: ShieldCheck,
                title: 'Absolute Safety First',
                desc: 'PESO licensed operations and mandatory multi-point safety validation protocols protect our workforce and your facility.'
              },
              {
                icon: Award,
                title: 'Strict Quality Standards',
                desc: 'Rigorous gas chromatography and analytical purity verification ensure all products meet strict industrial and medical codes.'
              },
              {
                icon: Truck,
                title: 'Reliable Supply Security',
                desc: 'A dedicated delivery fleet and organized replenishment scheduling ensure your critical operations never experience downtime.'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-brand-light p-8 rounded-sm border border-slate-200/60 hover:border-brand-red/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group cursor-default"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-white text-brand-red border border-slate-200 rounded-sm flex items-center justify-center group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300 shadow-sm">
                    <value.icon size={22} className="stroke-[1.5]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-display font-bold text-brand-charcoal group-hover:text-brand-red transition-colors duration-200">
                      {value.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Company Stats (Verified Corporate Indicators) */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                id: '01',
                value: '35+',
                label: 'Years of Experience',
                desc: 'Delivering trusted industrial and medical gas solutions with decades of established market expertise.',
                tag: 'FOUNDATION'
              },
              {
                id: '02',
                value: '1000+',
                label: 'Clients Served',
                desc: 'Supplying reliable bulk and cylinder gas solutions to diverse heavy manufacturing hubs and hospitals.',
                tag: 'TRUSTED REACH'
              },
              {
                id: '03',
                value: '99.99%',
                label: 'Purity Standards',
                desc: 'Committed to delivering high-purity specialized gases that meet strict laboratory and clinical specifications.',
                tag: 'PRECISION QUALITY'
              }
            ].map((stat) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="bg-white p-8 rounded-sm border border-slate-200/60 flex flex-col justify-between transition-all duration-300 relative overflow-hidden cursor-default shadow-sm"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-mono font-bold text-slate-300 tracking-widest uppercase">
                      INDICATOR {stat.id}
                    </span>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-sm uppercase">
                      {stat.tag}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-4xl sm:text-5xl font-display font-extrabold text-brand-red tracking-tight leading-none">
                      <Counter value={stat.value} />
                    </div>
                    <h3 className="text-sm font-sans font-bold text-brand-charcoal uppercase tracking-wider">
                      {stat.label}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-500 font-light leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Company Profile Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content Column */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-red text-xs font-bold uppercase tracking-widest border-b-2 border-brand-red pb-1">
                CORPORATE PROFILE
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal tracking-tight mt-2">
                Providing Vital Industrial & Medical Gas Solutions
              </h2>
              <div className="space-y-4">
                <p className="text-sm text-neutral-500 leading-relaxed font-sans font-normal">
                  Shree Ganpati Gastech Private Limited (SGGPL) is a premier manufacturer and supplier of high-purity industrial, medical, and specialty gases, alongside bulk commercial LPG fuel. Driven by engineering excellence and strict regulatory compliance, we provide stable fuel and gas supplies critical to steelworks, healthcare facilities, cement kilns, chemical processors, and general manufacturing across the region.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed font-sans font-light">
                  Our facilities leverage high-standard cylinder filling manifolds, strict safety audits, and certified batch analysis to guarantee product integrity. SGGPL prioritizes absolute safety, rigorous quality control, and dedicated distribution logistics to ensure your facility maintains seamless, uninterrupted operations.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-2 cursor-pointer"
                >
                  Discover SGGPL History
                  <ArrowRight size={12} className="stroke-[2]" />
                </button>
              </div>
            </motion.div>

            {/* Right Picture Column */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-md border border-slate-200 p-2 bg-white">
                <img
                  src={corporateProfileImage}
                  alt="SGGPL High-Purity Gas Cylinders and Plant Assets"
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 bg-brand-charcoal text-white p-5 rounded-sm shadow-xl hidden sm:block border border-neutral-800">
                <p className="font-mono text-2xl font-bold text-brand-red leading-none">SGGPL</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 mt-1.5 font-bold">Uncompromising Quality & Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Showcase Section (Featured Grid) */}
      <section className="py-24 bg-brand-light border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div className="space-y-1">
              <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
                PRODUCT SHOWCASE
              </span>
              <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
                Featured Industrial & Medical Gases
              </h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="text-xs font-bold text-brand-red hover:text-brand-red-hover uppercase tracking-widest flex items-center gap-1 cursor-pointer group"
            >
              Explore Full Gas Catalog
              <ChevronRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white border border-slate-200/60 hover:border-brand-red/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full rounded-sm overflow-hidden group"
              >
                {/* Product Image Panel */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 border-b border-slate-100">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-104"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-brand-charcoal text-white text-[9px] uppercase tracking-widest font-mono py-1 px-2.5 font-bold rounded-sm border border-neutral-700">
                    {prod.category}
                  </div>
                </div>

                {/* Product Content Block */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-base font-display font-bold text-neutral-800 tracking-tight group-hover:text-brand-red transition-colors duration-200">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-neutral-500 mt-2 font-light leading-relaxed">
                    {prod.tagline}
                  </p>

                  {/* Purity Banner (if officially verified) */}
                  {prod.purity && (
                    <div className="mt-3 inline-flex">
                      <span className="text-[9px] text-brand-red font-mono font-bold tracking-wider bg-brand-red/5 border border-brand-red/10 rounded-sm py-0.5 px-2">
                        Purity: {prod.purity}
                      </span>
                    </div>
                  )}

                  {/* Target Applications list */}
                  <div className="mt-6 flex-grow space-y-2">
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                      Key Applications
                    </span>
                    {prod.applications.slice(0, 2).map((app, idx) => (
                      <div key={idx} className="text-[11px] text-slate-600 flex items-start gap-1.5 leading-snug">
                        <span className="w-1 h-1 bg-brand-red rounded-full mt-1.5 shrink-0" />
                        <span className="font-sans font-light">{app}</span>
                      </div>
                    ))}
                  </div>

                  {/* Standard Operations Actions */}
                  <div className="pt-5 border-t border-slate-100 mt-6 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => onNavigate('quote')}
                      className="text-center py-2 bg-brand-red hover:bg-brand-red-hover hover:text-white border border-brand-red hover:border-brand-red-hover text-[10px] font-bold text-white uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-sm"
                    >
                      Request Quote
                    </button>
                    <button
                      onClick={() => onNavigate('products')}
                      className="text-center py-2 border border-slate-200 hover:border-brand-charcoal text-[10px] font-bold text-brand-charcoal uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-sm"
                    >
                      Specifications
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries Served Section (Full Grid of 6 sectors) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
              INDUSTRIES SERVED
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              Powering Vital Industrial Sectors
            </h2>
            <p className="text-sm text-neutral-500 font-sans font-light">
              We engineer stable, high-pressure bulk and cylinder gas supplies tailored for sector-specific regulatory standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredIndustries.map((ind) => (
              <div
                key={ind.id}
                className="bg-brand-light border border-slate-200/60 hover:bg-white hover:border-brand-red/20 hover:shadow-lg transition-all duration-300 p-8 rounded-sm flex flex-col h-full group"
              >
                {/* Industry Photo Block */}
                <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6 bg-slate-100 border border-slate-200/30">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-base font-display font-bold text-brand-charcoal group-hover:text-brand-red transition-colors duration-200 tracking-tight">
                  {ind.name}
                </h3>

                <p className="text-xs text-neutral-500 mt-3 leading-relaxed flex-grow font-light">
                  {ind.description}
                </p>

                {/* Gases Used Badge Area */}
                <div className="mt-6 pt-5 border-t border-slate-200/60">
                  <p className="text-[9px] text-slate-400 font-sans font-bold uppercase tracking-widest">Gases Supplied</p>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {ind.gasesUsed.slice(0, 3).map((gas, idx) => (
                      <span key={idx} className="text-[9px] bg-white border border-slate-200/60 px-2 py-0.5 rounded-sm text-neutral-600 font-mono tracking-wide">
                        {gas}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Trigger */}
                <div className="pt-5 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate('industries')}
                    className="text-xs font-bold text-brand-red hover:text-brand-red-hover uppercase tracking-widest flex items-center gap-1.5 cursor-pointer"
                  >
                    Explore Sectors
                    <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Comprehensive Safety, Quality & Compliance Section */}
      <section className="py-24 bg-brand-light border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
              COMMITMENT TO SAFETY
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              PESO Licensed Operations & Quality Compliance
            </h2>
            <p className="text-sm text-neutral-500 font-sans font-light">
              SGGPL enforces strict engineering discipline, robust compliance, and rigorous quality control protocols to protect your assets and verify product purity.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: ShieldCheck,
                title: 'PESO Compliance',
                desc: 'All filling operations, manifolds, and bulk storage installations operate in absolute conformity with Petroleum and Explosives Safety Organisation guidelines.'
              },
              {
                icon: Gauge,
                title: 'Cylinder Testing',
                desc: 'Routine hydrostatic testing, wall integrity checks, and internal cleaning procedures are systematically conducted to ensure secure pressure-containment.'
              },
              {
                icon: ClipboardList,
                title: 'Quality Verification',
                desc: 'Calibrated laboratory analyzers verify exact gas specifications. Strict valve leak tests are completed on every batch prior to dispatch approval.'
              },
              {
                icon: Flame,
                title: 'Safe Handling',
                desc: 'All logistics and warehouse staff undergo comprehensive hazard and safety training, ensuring compliant transport and secure handling at your site.'
              }
            ].map((safety, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 bg-white border border-slate-200/60 rounded-sm hover:border-brand-red/20 hover:shadow-md transition-all duration-300 group flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <div className="p-2.5 bg-brand-red/5 text-brand-red border border-brand-red/10 rounded-sm w-fit group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300">
                    <safety.icon size={18} className="stroke-[1.5]" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">{safety.title}</h4>
                    <p className="text-xs text-neutral-500 font-light leading-relaxed">
                      {safety.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. Bottom Call to Action (CTA) - Standard Corporate Banner */}
      <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
        {/* Background CTA Image with overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={getInTouchImage}
            alt="Get in Touch with SGGPL"
            className="w-full h-full object-cover object-center mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-8">
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Ready to Upgrade Your Gas Supply?
          </h2>
          <div className="w-12 h-[2px] bg-brand-red mx-auto" />
          <p className="text-sm sm:text-base text-gray-300 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Partner with SGGPL for reliable, high-purity industrial and medical gas solutions. Our engineering and support teams are available to assist with your specific operational requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => onNavigate('quote')}
              className="px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              Request Quote
              <ArrowRight size={13} className="stroke-[2.5]" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
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