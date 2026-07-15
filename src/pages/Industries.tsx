/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulse,
  Flame,
  Layers,
  Wrench,
  Droplet,
  Activity,
  Cpu,
  Building2,
  Gauge,
  Shield,
  Wind,
  GitCommit,
  CheckCircle,
  Truck,
  Award,
  PhoneCall,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Zap,
  HardHat,
  Search,
  X
} from 'lucide-react';
import { ActivePage } from '../types';

import heroImage from "../assets/images/industries/hero.png";
import hospitalImage from "../assets/images/industries/hospital.png";
import steelImage from "../assets/images/industries/steel.png";
import cementImage from "../assets/images/industries/cement.png";
import metalImage from "../assets/images/industries/metal.png";
import chemicalImage from "../assets/images/industries/chemical.png";
import foodImage from "../assets/images/industries/food.png";
import manufacturingImage from "../assets/images/industries/manufacturing.png";
import infrastructureImage from "../assets/images/industries/infrastructure.png";
import powerGenerationImage from "../assets/images/industries/power-generation.png";
import miningImage from "../assets/images/industries/mining.png";
import engineeringImage from "../assets/images/industries/engineering.png";
import getInTouchImage from "../assets/images/industries/get-in-touch.png";

interface ApplicationDetail {
  title: string;
  desc: string;
  iconName: string;
}

interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  tagline: string;
  overview: string;
  productsSupplied: string[];
  applications: ApplicationDetail[];
  benefits: string[];
  image: string;
}

const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Hospitals & Healthcare',
    iconName: 'HeartPulse',
    tagline: 'Certified Clinical Delivery & Patient Care',
    overview: 'Safe, high-purity medical-grade gases compliant with Indian Pharmacopoeia (I.P.) standards, serving critical care networks, multi-specialty hospitals, and emergency clinical systems.',
    productsSupplied: ['Medical Oxygen I.P.', 'Nitrous Oxide I.P.', 'Medical Air', 'Carbon Dioxide USP'],
    applications: [
      {
        title: 'Critical Ventilation',
        desc: 'Continuous patient respiratory support in intensive care units, emergency beds, and operations.',
        iconName: 'Wind'
      },
      {
        title: 'Surgical Anesthesia',
        desc: 'High-purity nitrous oxide and oxygen carrier mixtures for clinical anesthetic theatres.',
        iconName: 'Gauge'
      }
    ],
    benefits: [
      'Strict Indian Pharmacopoeia compliance.',
      'Continuous cylinder cascade logistics.'
    ],
    image: hospitalImage
  },
  {
    id: 'steel',
    name: 'Steel & Metallurgy',
    iconName: 'Flame',
    tagline: 'High-Temperature Combustion & Alloy Shielding',
    overview: 'Essential high-volume gases for thermal heating, billet cutting, and protective blanketing optimized for blast furnaces, steel refineries, and alloy casting lines.',
    productsSupplied: ['Industrial Oxygen', 'Industrial Nitrogen', 'Industrial Argon', 'Commercial LPG'],
    applications: [
      {
        title: 'Furnace Enrichment',
        desc: 'Injecting high-purity oxygen to raise melt temperatures, speed cycles, and cut fuel waste.',
        iconName: 'Flame'
      },
      {
        title: 'Alloy Shielding',
        desc: 'Inert argon gas shrouds protecting molten structural steel from atmospheric contamination.',
        iconName: 'Shield'
      }
    ],
    benefits: [
      'Maximized steel melt times.',
      'Reduced thermal oxidation defects.'
    ],
    image: steelImage
  },
  {
    id: 'cement',
    name: 'Cement & Kilns',
    iconName: 'Layers',
    tagline: 'Alternative Thermal Fuel & Combustion Support',
    overview: 'High-calorific commercial LPG and oxygen combustion solutions supporting heavy thermal calcination and preheating inside massive rotary kilns.',
    productsSupplied: ['Commercial LPG', 'Industrial Oxygen'],
    applications: [
      {
        title: 'Preheater Firing',
        desc: 'Bulk commercial LPG injection systems to fast-track raw meal calcination before kiln entry.',
        iconName: 'Flame'
      },
      {
        title: 'Combustion Optimization',
        desc: 'Enriched oxygen streams boosting kiln flame temperatures and thermal efficiency.',
        iconName: 'Gauge'
      }
    ],
    benefits: [
      'Substantially reduced fuel emissions vs traditional coal.',
      'Consistent, stable kiln heat distribution.'
    ],
    image: cementImage
  },
  {
    id: 'fabrication',
    name: 'Metal Fabrication & Welding',
    iconName: 'Wrench',
    tagline: 'Pore-Free Joint Integrity & Precision Profiling',
    overview: 'High-grade industrial shielding gases and oxy-fuel cutting systems formulated to protect electric arcs and ensure clean, high-precision structural steel fabrication.',
    productsSupplied: ['Industrial Argon', 'Carbon Dioxide', 'Industrial Oxygen', 'Dissolved Acetylene'],
    applications: [
      {
        title: 'TIG & MIG Shielding',
        desc: 'High-purity Argon and CO2 protective envelopes shielding joints from ambient gas defects.',
        iconName: 'Shield'
      },
      {
        title: 'Oxy-Fuel Torch Cutting',
        desc: 'Using high-purity oxygen and acetylene for rapid, slag-free structural plate cutting.',
        iconName: 'Flame'
      }
    ],
    benefits: [
      'Extremely minimal weld spatter and cleanup labor.',
      'Stable electric arc transfer.'
    ],
    image: metalImage
  },
  {
    id: 'chemical',
    name: 'Chemical & Petrochemical',
    iconName: 'Droplet',
    tagline: 'Explosion Mitigation & Thermal Reaction Controls',
    overview: 'High-pressure purging, inert blanketing, and process cooling solutions designed to preserve absolute safety across petrochemical units and reactors.',
    productsSupplied: ['Industrial Nitrogen', 'Carbon Dioxide', 'Liquid Nitrogen'],
    applications: [
      {
        title: 'Reactor Blanketing',
        desc: 'Displacing hazardous oxygen in chemical tanks to prevent fumes auto-ignition.',
        iconName: 'Shield'
      },
      {
        title: 'Pipeline Purging',
        desc: 'Dry nitrogen streams evacuating residual hydrocarbons and damp moisture during turnarounds.',
        iconName: 'Wind'
      }
    ],
    benefits: [
      'Reliable prevention of explosive vapor mixtures.',
      'Cryogenic thermal reaction control.'
    ],
    image: chemicalImage
  },
  {
    id: 'food',
    name: 'Food Processing & Cold Chain',
    iconName: 'Activity',
    tagline: 'Atmosphere Control & Freshness Preservation',
    overview: 'Food-grade preservation packaging gas and cryogenic freezing agents to lock in textures, retard spoilage, and maintain cold chains.',
    productsSupplied: ['Carbon Dioxide', 'Industrial Nitrogen', 'Liquid Nitrogen'],
    applications: [
      {
        title: 'Modified Atmosphere Packaging',
        desc: 'Displacing package oxygen with nitrogen to prevent fresh produce mold and spoil.',
        iconName: 'Wind'
      },
      {
        title: 'Cryogenic Shock Freezing',
        desc: 'Instant, deep cooling using liquid nitrogen to protect natural cell structure and moisture.',
        iconName: 'Layers'
      }
    ],
    benefits: [
      'Extended retail shelf life without artificial preservatives.',
      'Minimized food dehydration loss.'
    ],
    image: foodImage
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    iconName: 'Cpu',
    tagline: 'Automated Line Assist & Component Assembly',
    overview: 'Continuous-line industrial gas supply configured for automated metal-shaping lasers, furnace heat treatment, and oxidation-free electronic assembly lines.',
    productsSupplied: ['Industrial Nitrogen', 'Industrial Argon', 'Carbon Dioxide', 'Commercial LPG'],
    applications: [
      {
        title: 'Laser Assist Cutting',
        desc: 'Using high-pressure nitrogen to blow molten slag for flawless, clean cut edges.',
        iconName: 'Cpu'
      },
      {
        title: 'Oxidation Control',
        desc: 'Maintaining inert nitrogen shrouds during heated manufacturing line assemblies.',
        iconName: 'Shield'
      }
    ],
    benefits: [
      'Sharp, smooth, weld-ready metal edges.',
      'Improved line component durability.'
    ],
    image: manufacturingImage
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    iconName: 'Building2',
    tagline: 'Structural Steel Fabrication & Field Assembly',
    overview: 'Rugged, high-capacity gas manifolds and cutting support engineered for civil infrastructure, bridges, highway foundations, and heavy structural frames.',
    productsSupplied: ['Industrial Oxygen', 'Dissolved Acetylene', 'Commercial LPG'],
    applications: [
      {
        title: 'Structural Steel Sizing',
        desc: 'High-efficiency oxy-fuel flame cutting of heavy steel plates and pile structures.',
        iconName: 'Wrench'
      },
      {
        title: 'Field Manifold Supply',
        desc: 'Modular cylinder manifolds feeding continuous welding stations across rough terrain.',
        iconName: 'Layers'
      }
    ],
    benefits: [
      'High mobility setups for severe field conditions.',
      'Joint parameters meeting rigid civil inspection codes.'
    ],
    image: infrastructureImage
  },
  {
    id: 'power',
    name: 'Power Generation',
    iconName: 'Gauge',
    tagline: 'Turbine Safety Purging & Thermal Protection',
    overview: 'Inert purging gas and high-pressure system blankets designed to secure electrical generator enclosures and protect heavy thermal pipelines.',
    productsSupplied: ['Industrial Nitrogen', 'Industrial Argon', 'Carbon Dioxide'],
    applications: [
      {
        title: 'Generator Displacements',
        desc: 'Safely displacing air or hydrogen inside large generator casings during shutdowns.',
        iconName: 'Gauge'
      },
      {
        title: 'Feedline Dry-Blankets',
        desc: 'Dry nitrogen blankets protecting empty boilers and pipelines from oxygen corrosion.',
        iconName: 'Wind'
      }
    ],
    benefits: [
      'Enhanced risk prevention during maintenance turnarounds.',
      'Prevention of expensive turbine oxide corrosion.'
    ],
    image: powerGenerationImage
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical',
    iconName: 'Shield',
    tagline: 'Sterile Process Inerting & Packaging Stability',
    overview: 'High-purity inerting, blanketing, and pressure testing gases meeting validation requirements for synthesis processes, sterile filling, and active ingredients.',
    productsSupplied: ['Industrial Nitrogen', 'Carbon Dioxide', 'Specialty Gases'],
    applications: [
      {
        title: 'Ampoule & Vial Purging',
        desc: 'Inerting headspace voids with high-purity nitrogen before seal-packing.',
        iconName: 'Droplet'
      },
      {
        title: 'Fermentation Shrouding',
        desc: 'Providing non-reactive sterile atmospheric overlays for active processing tanks.',
        iconName: 'Shield'
      }
    ],
    benefits: [
      'Eliminated oxidation of reactive formulations.',
      'High-purity validation compliance records.'
    ],
    image: hospitalImage
  },
  {
    id: 'mining',
    name: 'Mining',
    iconName: 'Wind',
    tagline: 'Extraction Process Support & Heavy Vehicle Repair',
    overview: 'Bulk oxygen enrichment and heavy mechanical repair gas delivery systems optimized for deep mineral leaching and ore processing facilities.',
    productsSupplied: ['Industrial Oxygen', 'Industrial Nitrogen', 'Commercial LPG'],
    applications: [
      {
        title: 'Leaching Acceleration',
        desc: 'Oxygen enrichment inside leaching circuits to optimize precious metal recovery.',
        iconName: 'Layers'
      },
      {
        title: 'Machinery Maintenance',
        desc: 'High-strength structural shielding gases for rapid fabrication of earthmovers.',
        iconName: 'Wrench'
      }
    ],
    benefits: [
      'Optimized chemical extraction recovery rates.',
      'Rugged delivery logistics mapped to remote locations.'
    ],
    image: miningImage
  },
  {
    id: 'engineering',
    name: 'Engineering',
    iconName: 'GitCommit',
    tagline: 'Workshop Heat Treatment & High-Accuracy R&D',
    overview: 'Certified reference standards, zero-gases, and heat-treating atmospheres designed for metallurgical testing and mechanical R&D laboratories.',
    productsSupplied: ['Specialty Gases', 'Industrial Argon', 'Industrial Nitrogen', 'Carbon Dioxide'],
    applications: [
      {
        title: 'Analytical Calibration',
        desc: 'Certified reference mixtures calibrating scientific sensors and chromatographs.',
        iconName: 'GitCommit'
      },
      {
        title: 'Atmosphere Hardening',
        desc: 'Inert protective atmospheres preventing surface defects during steel carburizing.',
        iconName: 'Flame'
      }
    ],
    benefits: [
      'Highly repeatable analytical reference baselines.',
      'Uniform metal hardness with zero warps.'
    ],
    image: engineeringImage
  }
];

interface IndustriesProps {
  onNavigate?: (page: ActivePage) => void;
}

export default function Industries({ onNavigate }: IndustriesProps) {
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(() => {
    return localStorage.getItem('selected_industry_id') || null;
  });
  const [searchQuery, setSearchQuery] = useState('');

  React.useEffect(() => {
    localStorage.removeItem('selected_industry_id');
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedIndustry(expandedIndustry === id ? null : id);
  };

  const handleRequestQuote = () => {
    localStorage.setItem('selected_quote_gas', 'General Sector Inquiries');
    if (onNavigate) {
      onNavigate('quote');
    } else {
      window.location.hash = 'contact?tab=rfq';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactUs = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      window.location.hash = 'contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExploreProducts = () => {
    if (onNavigate) {
      onNavigate('products');
    } else {
      window.location.hash = 'products';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const filteredIndustries = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return INDUSTRIES_DATA;
    return INDUSTRIES_DATA.filter(
      (ind) =>
        ind.name.toLowerCase().includes(q) ||
        ind.tagline.toLowerCase().includes(q) ||
        ind.overview.toLowerCase().includes(q) ||
        ind.productsSupplied.some((p) => p.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const getIndustryIconComponent = (iconName: string, size = 22, className = 'text-brand-red') => {
    switch (iconName) {
      case 'HeartPulse':
        return <HeartPulse size={size} className={className} />;
      case 'Flame':
        return <Flame size={size} className={className} />;
      case 'Layers':
        return <Layers size={size} className={className} />;
      case 'Wrench':
        return <Wrench size={size} className={className} />;
      case 'Droplet':
        return <Droplet size={size} className={className} />;
      case 'Activity':
        return <Activity size={size} className={className} />;
      case 'Cpu':
        return <Cpu size={size} className={className} />;
      case 'Building2':
        return <Building2 size={size} className={className} />;
      case 'Gauge':
        return <Gauge size={size} className={className} />;
      case 'Shield':
        return <Shield size={size} className={className} />;
      case 'Wind':
        return <Wind size={size} className={className} />;
      case 'GitCommit':
        return <GitCommit size={size} className={className} />;
      default:
        return <Wrench size={size} className={className} />;
    }
  };

  return (
    <div className="w-full bg-white text-brand-charcoal selection:bg-brand-red selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-brand-charcoal overflow-hidden py-32 px-4 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Heavy Industrial Gas Supply Tanker Infrastructure"
            className="w-full h-full object-cover object-center brightness-[0.22] scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/20 to-brand-charcoal/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-brand-red/10 border border-brand-red/30 px-3.5 py-1 rounded-sm"
          >
            <span className="text-brand-red text-[11px] font-mono font-bold uppercase tracking-widest">
              SGGPL Sector Overview
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-none"
          >
            Industries We Serve
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto font-sans font-light leading-relaxed"
          >
            Shree Ganpati Gastech Private Limited supplies industrial, medical, specialty gases, commercial LPG, and related gas solutions to a diverse range of industries, supporting safe, efficient, and reliable operations across multiple sectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <button
              onClick={handleRequestQuote}
              className="px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2.5 cursor-pointer shadow-md"
            >
              Request Quote
              <ArrowRight size={13} className="stroke-[2.5]" />
            </button>
            <button
              onClick={handleExploreProducts}
              className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-white text-gray-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Products
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. INDUSTRY OVERVIEW */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-red text-xs font-bold uppercase tracking-widest block font-mono">
                Corporate Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal tracking-tight">
                Supporting the Industrial Backbone
              </h2>
              <div className="w-12 h-[2px] bg-brand-red" />
              <p className="text-sm text-neutral-500 font-sans font-light leading-relaxed">
                Industrial and clinical gases play an indispensable role in contemporary progress. Whether protecting critical alloys from atmospheric contamination, supplying stable medical-grade life support streams, or fueling thermal calcination kilns, Shree Ganpati Gastech Private Limited is an audit-compliant operational partner.
              </p>
              <p className="text-xs text-neutral-400 font-sans font-light">
                Our operations conform strictly to regulatory protocols, providing safety, structural integrity, and logistical reliability across 12 diverse industrial sectors.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Hospitals & Clinical',
                  desc: 'Certified Medical Oxygen I.P. and Nitrous Oxide matching Indian Pharmacopoeia standards.',
                  icon: <HeartPulse size={18} className="text-brand-red" />
                },
                {
                  title: 'Steel & Metallurgy',
                  desc: 'High-combustion Oxygen enrichment and ultra-pure Argon for atmospheric electric shields.',
                  icon: <Flame size={18} className="text-brand-red" />
                },
                {
                  title: 'Metal Welding',
                  desc: 'Precision double-shielding gases reducing joint spatter across structural fabrication yards.',
                  icon: <Wrench size={18} className="text-brand-red" />
                },
                {
                  title: 'Calcination Fuel',
                  desc: 'Bulk commercial LPG with continuous high thermal yields for industrial rotary kilns.',
                  icon: <Layers size={18} className="text-brand-red" />
                },
                {
                  title: 'Petrochemical Security',
                  desc: 'High-purity Nitrogen blanketing and purging to safely mitigate reactor oxygen risks.',
                  icon: <Shield size={18} className="text-brand-red" />
                },
                {
                  title: 'Automated Laser Lines',
                  desc: 'High-pressure assist gases removing slags for flawless mechanical profiling cut edges.',
                  icon: <Cpu size={18} className="text-brand-red" />
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 border border-slate-100 rounded-sm bg-slate-50/40 hover:bg-white hover:border-slate-200 hover:shadow-xs transition-all duration-300 space-y-2.5"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-brand-red/5 rounded-sm">
                      {item.icon}
                    </div>
                    <h3 className="text-xs font-mono font-bold uppercase text-brand-charcoal tracking-wider">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11px] text-neutral-500 font-sans font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY CARDS GRID SECTION */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
              SECTORS IN PROFILE
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-charcoal tracking-tight">
              12 Sectors Propelled by SGGPL Solutions
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light">
              Filter or select any industry below to examine products supplied, application systems, and strict operational benefits.
            </p>

            {/* Filter / Search input */}
            <div className="pt-8 max-w-md mx-auto relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search size={14} className="text-slate-400" />
              </span>
              <input
                type="text"
                placeholder="Search sectors, gases, or applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 text-xs bg-white border border-slate-200 rounded-sm focus:outline-hidden focus:border-brand-red transition-all font-light text-neutral-800 placeholder:text-slate-400 shadow-3xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-brand-red"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Grid Layout */}
          {filteredIndustries.length === 0 ? (
            <div className="text-center py-16 bg-white border border-slate-200/60 rounded-sm">
              <p className="text-xs text-slate-400 font-light">No industry profiles match your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIndustries.map((ind, idx) => {
                const isExpanded = expandedIndustry === ind.id;
                return (
                  <motion.div
                    key={ind.id}
                    layout="position"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.25) }}
                    className={`group bg-white border rounded-sm overflow-hidden flex flex-col h-full shadow-3xs transition-all duration-300 hover:shadow-lg ${
                      isExpanded ? 'border-brand-red/35 ring-1 ring-brand-red/5' : 'border-slate-200/80 hover:border-brand-red/20'
                    }`}
                  >
                    {/* Image Header with Zoom */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                      <img
                        src={ind.image}
                        alt={ind.name}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-104"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 px-3 py-1.5 rounded-sm shadow-sm border border-slate-100">
                        {getIndustryIconComponent(ind.iconName, 15, 'text-brand-red')}
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-800">
                          {ind.name}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-display font-bold text-neutral-800 tracking-tight group-hover:text-brand-red transition-colors duration-300">
                            {ind.name}
                          </h3>
                          <span className="text-[10px] text-brand-red/90 font-mono font-bold block mt-1">
                            {ind.tagline}
                          </span>
                        </div>

                        <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
                          {ind.overview}
                        </p>

                        {/* Products Supplied Badges */}
                        <div className="space-y-1.5">
                          <span className="text-[9px] font-mono font-bold uppercase text-neutral-400 tracking-wider block">
                            Gases Supplied
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {ind.productsSupplied.map((gas, gasIdx) => (
                              <span
                                key={gasIdx}
                                className="bg-slate-50 text-neutral-700 border border-slate-200/60 text-[9px] font-mono py-1 px-2 rounded-sm"
                              >
                                {gas}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Expandable Section: Applications and Benefits */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden space-y-5 pt-4 border-t border-slate-100 mt-2"
                            >
                              {/* Applications Cards instead of simple bullet lists */}
                              <div className="space-y-2.5">
                                <span className="text-[9px] font-mono font-bold uppercase text-neutral-400 tracking-wider block">
                                  System Applications
                                </span>
                                <div className="grid grid-cols-1 gap-2.5">
                                  {ind.applications.map((app, appIdx) => (
                                    <div
                                      key={appIdx}
                                      className="p-3 bg-slate-50 border border-slate-100 rounded-sm flex gap-3 items-start"
                                    >
                                      <div className="p-1 bg-white border border-slate-200 rounded-sm shrink-0 mt-0.5">
                                        {getIndustryIconComponent(app.iconName, 13, 'text-brand-red')}
                                      </div>
                                      <div className="space-y-0.5">
                                        <h4 className="text-[11px] font-mono font-bold text-neutral-800 uppercase leading-tight">
                                          {app.title}
                                        </h4>
                                        <p className="text-[10px] text-neutral-500 font-light leading-relaxed">
                                          {app.desc}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Benefits list */}
                              <div className="space-y-1.5">
                                <span className="text-[9px] font-mono font-bold uppercase text-neutral-400 tracking-wider block">
                                  Core Sector Advantages
                                </span>
                                <ul className="space-y-1.5">
                                  {ind.benefits.map((benefit, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-2">
                                      <CheckCircle size={11} className="text-brand-red shrink-0 mt-0.5" />
                                      <span className="text-[10px] text-neutral-600 font-sans font-light">
                                        {benefit}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Interactive Trigger Button */}
                      <div className="pt-4 border-t border-slate-100 flex justify-center">
                        <button
                          onClick={() => toggleExpand(ind.id)}
                          className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 hover:text-brand-red transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span>{isExpanded ? 'Hide Parameters' : 'View Applications'}</span>
                          <ChevronDown
                            size={12}
                            className={`text-neutral-400 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180 text-brand-red' : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 4. WHY INDUSTRIES CHOOSE SGGPL */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
              PARTNERSHIP CRITERIA
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              Why Key Sectors Trust SGGPL
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light">
              Four fundamental pillars defining our daily operations, raw material storage, and commercial distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Reliable Supply',
                desc: 'Uninterrupted road tanker routes and massive backup cylinder cascades ensuring zero plant downtime.',
                icon: <Truck size={22} className="text-brand-red" />
              },
              {
                title: 'Consistent Quality',
                desc: 'Rigorous batch chromatography analysis and direct compliance with clinical pharmacopoeia standards.',
                icon: <Award size={22} className="text-brand-red" />
              },
              {
                title: 'Safety Standards',
                desc: 'Systematic hydrostatic checks, PESO safety audits, and strict double-manifold pressure validation.',
                icon: <Shield size={22} className="text-brand-red" />
              },
              {
                title: 'Responsive Support',
                desc: 'A dedicated dispatch coordination center ready to manage industrial demands and urgent clinical fills.',
                icon: <PhoneCall size={22} className="text-brand-red" />
              }
            ].map((card, index) => (
              <div
                key={index}
                className="p-8 border border-slate-100 rounded-sm bg-slate-50/20 shadow-3xs hover:shadow-md hover:border-slate-200 transition-all duration-300 space-y-4"
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

      {/* 5. BUSINESS CTA */}
      <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src={getInTouchImage}
            alt="Refinery background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-8">
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest font-mono">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Need Gas Solutions for Your Industry?
          </h2>
          <div className="w-12 h-[2px] bg-brand-red mx-auto" />
          <p className="text-sm sm:text-base text-gray-300 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Whether you operate a hospital, manufacturing facility, fabrication workshop, cement plant, steel unit, or industrial process, our team is ready to help you identify the right gas solutions for your business.
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
              onClick={handleContactUs}
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