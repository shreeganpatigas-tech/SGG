/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Gauge,
  Wind,
  HeartPulse,
  GitCommit,
  Link,
  Flame,
  ShieldAlert,
  Cpu,
  Truck,
  Droplet,
  Wrench,
  CircleDot,
  Filter,
  Search,
  X,
  ArrowRight,
  ChevronDown,
  Building2,
  Award,
  PhoneCall,
  CheckCircle,
  Activity,
  Layers
} from 'lucide-react';
import { ActivePage } from '../types';

import heroImage from '../assets/images/products/hero.png';
import industrialOxygenImage from '../assets/images/products/industrial-oxygen.png';
import industrialNitrogenImage from '../assets/images/products/industrial-nitrogen.png';
import industrialArgonImage from '../assets/images/products/industrial-argon.png';
import co2Image from '../assets/images/products/co2.png';
import medicalOxygenImage from '../assets/images/products/medical-oxygen.png';
import nitrousOxideImage from '../assets/images/products/nitrous-oxide.png';
import industrialBulkLpgImage from '../assets/images/products/industrial-bulk-lpg.png';
import lco2Image from '../assets/images/products/lco2.png';
import equipmentAccessoriesImage from '../assets/images/products/equipment-accessories.png';
import technicalAdviceImage from '../assets/images/products/technical-advice.png';
import getInTouchImage from '../assets/images/products/get-in-touch.png';

// Equipment categories exactly matching the 14 requested categories
interface EquipmentCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: string[];
}

const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  {
    id: 'cylinder-accessories',
    title: 'Cylinder Accessories',
    description: 'Vital components for high-pressure cylinder systems, ensuring valve protection and secure industrial handling.',
    iconName: 'Shield',
    items: ['Cylinder Safety Caps', 'Valve Guards', 'Cylinder Neck Rings', 'Cylinder Spindle Keys']
  },
  {
    id: 'pressure-regulators',
    title: 'Pressure Regulators',
    description: 'Precision pressure control systems designed to manage inlet and outlet flow rates for stable delivery.',
    iconName: 'Gauge',
    items: ['Single-Stage Brass Regulators', 'Two-Stage Stainless Steel Regulators', 'High-Flow Regulators', 'Multi-Cylinder Manifold Units']
  },
  {
    id: 'flow-equipment',
    title: 'Flow Equipment',
    description: 'Advanced measurement and control instruments for managing precise gas volumes and output delivery.',
    iconName: 'Wind',
    items: ['Rotameters / Purge Meters', 'Mass Flow Meters', 'Flow Control Orifices', 'Precision Needle Valves']
  },
  {
    id: 'medical-equipment',
    title: 'Medical Gas Equipment',
    description: 'Certified healthcare delivery systems engineered to support patient respiratory care and medical lines.',
    iconName: 'HeartPulse',
    items: ['Medical Oxygen Regulators', 'Flowmeters with Humidifier Bottles', 'Clinical Aspirator Units', 'BPC Flowmeters']
  },
  {
    id: 'pipeline-components',
    title: 'Pipeline Components',
    description: 'Industrial-grade distribution components for high-purity and high-pressure gas distribution networks.',
    iconName: 'GitCommit',
    items: ['Manual Isolating Valves', 'High-Pressure Manifolds', 'Non-Return Valves (NRV)', 'Safety Relief Valves (SRV)']
  },
  {
    id: 'hoses',
    title: 'Hoses',
    description: 'Flexible and robust hose assemblies engineered for high-pressure gas transfers and cryogenic systems.',
    iconName: 'Link',
    items: ['Stainless Steel Braided Hoses', 'High-Pressure PTFE Hoses', 'Flexible Cylinder Pigtails', 'Cryogenic Transfer Hoses']
  },
  {
    id: 'welding-equipment',
    title: 'Welding Equipment',
    description: 'Professional-grade gas cutting and welding apparatus engineered for heavy industrial fabrication.',
    iconName: 'Flame',
    items: ['Oxy-Fuel Cutting Torches', 'Gas Welding Blowpipes', 'Heating Blowpipes', 'Flashback Arrestors']
  },
  {
    id: 'safety-equipment',
    title: 'Safety Equipment',
    description: 'Comprehensive gas detection, containment, and mitigation systems designed to safeguard personnel.',
    iconName: 'ShieldAlert',
    items: ['Portable Gas Leak Detectors', 'Personal Protective Equipment', 'Emergency Eye Wash Stations', 'Safety Signage Kits']
  },
  {
    id: 'instrumentation',
    title: 'Instrumentation',
    description: 'Industrial-grade measurement devices for real-time monitoring of pressure, temperature, and levels.',
    iconName: 'Cpu',
    items: ['Pressure Transmitters', 'Digital Dial Thermometers', 'Gas Purging Systems', 'Differential Pressure Monitors']
  },
  {
    id: 'cylinder-handling',
    title: 'Cylinder Handling Equipment',
    description: 'Ergonomic logistics and storage solutions designed to prevent workplace accidents during cylinder transit.',
    iconName: 'Truck',
    items: ['Single Cylinder Trolleys', 'Double Cylinder Trolleys', 'Cylinder Wall Racks', 'Manifold Cage Baskets']
  },
  {
    id: 'industrial-consumables',
    title: 'Industrial Consumables',
    description: 'High-performance sealants, lubricants, and maintenance products optimized for gas system interfaces.',
    iconName: 'Droplet',
    items: ['PTFE Thread Sealant Tape', 'Oxygen-Safe Lubricants', 'Leak Detection Spray', 'High-Pressure Gaskets']
  },
  {
    id: 'pipe-fittings',
    title: 'Pipe Fittings',
    description: 'Precision double-ferrule compression and threaded fittings for leak-proof industrial line connections.',
    iconName: 'Wrench',
    items: ['Double-Ferrule Union Tees', 'Male/Female Elbows', 'Hex Nipples & Reducers', 'Stainless Steel Tubing']
  },
  {
    id: 'pressure-gauges',
    title: 'Pressure Gauges',
    description: 'High-accuracy pressure displays calibrated for industrial, vacuum, and cryogenic lines.',
    iconName: 'CircleDot',
    items: ['Bourdon Tube Pressure Gauges', 'Vacuum / Compound Gauges', 'Glycerin-Filled Gauges', 'Stainless Steel Dial Gauges']
  },
  {
    id: 'industrial-filters',
    title: 'Industrial Filters',
    description: 'Advanced filtration systems to remove particulate matter, moisture, and impurities from active gas streams.',
    iconName: 'Filter',
    items: ['Gas Line Coalescing Filters', 'Particulate Filters', 'Moisture Traps', 'High-Pressure In-Line Filters']
  }
];

interface GasProduct {
  id: string;
  name: string;
  category: 'industrial' | 'medical' | 'lpg' | 'cryogenic';
  tagline: string;
  description: string;
  purity: string;
  applications: string[];
  industries: string[];
  supplyForms: string[];
  safetyInfo: string;
  image: string;
}

const GAS_PRODUCTS: GasProduct[] = [
  {
    id: 'oxygen-ind',
    name: 'Industrial Oxygen',
    category: 'industrial',
    tagline: 'High-purity oxygen for combustion, cutting, and smelting.',
    description: 'Essential for oxidation, combustion, and steelmaking processes, SGGPL Industrial Oxygen is processed and compressed under strict conditions to ensure maximum performance and safety.',
    purity: '99.5% minimum purity',
    applications: [
      'Metal cutting and welding processes (Oxy-Acetylene torching)',
      'Oxygen enrichment in blast furnaces and steel smelting',
      'Glass melting and furnace combustion optimization'
    ],
    industries: ['Steel', 'Fabrication', 'Manufacturing', 'Infrastructure'],
    supplyForms: ['High-pressure cylinders', 'Manifolds & Quads', 'Liquid transport tankers'],
    safetyInfo: 'Oxygen is a strong oxidant. Keep completely free of oils, grease, and combustible materials.',
    image: industrialOxygenImage
  },
  {
    id: 'nitrogen-ind',
    name: 'Industrial Nitrogen',
    category: 'industrial',
    tagline: 'Dry, non-reactive inert agent for blanketing, purging, and manufacturing.',
    description: 'Our Industrial Nitrogen provides a highly dry, chemical-free inert atmosphere, making it a staple for chemical synthesis, metal heat treatment, and safety purging in refineries and pipelines.',
    purity: '99.99% minimum purity',
    applications: [
      'Inert gas blanketing for volatile chemical storage tanks',
      'Pipeline safety purging, pressure testing, and leak detection',
      'Bright annealing and heat treatment of steel alloys'
    ],
    industries: ['Chemical', 'Steel Processing', 'Power Generation', 'Refineries'],
    supplyForms: ['High-pressure cylinders', 'Cylinder Cascades', 'Cryogenic road tankers'],
    safetyInfo: 'Nitrogen is a simple asphyxiant. Monitor oxygen levels in confined or poorly ventilated workspaces.',
    image: industrialNitrogenImage
  },
  {
    id: 'argon-ind',
    name: 'Industrial Argon',
    category: 'industrial',
    tagline: 'Premium shielding gas for flawless TIG/MIG electric arc welding.',
    description: 'An inert gas of choice for critical metallurgical applications, Argon provides the absolute perfect shield against atmospheric contamination during high-precision electric arc welding.',
    purity: '99.999% ultra-pure grades available',
    applications: [
      'Shielding gas for TIG (Tungsten Inert Gas) and MIG welding processes',
      'Inert atmosphere protective melting for titanium and stainless steel',
      'Argon-Oxygen Decarburization (AOD) in stainless steel smelting'
    ],
    industries: ['Fabrication', 'Steel Mills', 'Automotive', 'Manufacturing'],
    supplyForms: ['Seamless steel cylinders', 'High-volume cylinder cascades'],
    safetyInfo: 'Argon is heavier than air and can accumulate in low areas. Weld only in properly ventilated rooms.',
    image: industrialArgonImage
  },
  {
    id: 'co2-ind',
    name: 'Carbon Dioxide (CO2)',
    category: 'industrial',
    tagline: 'Versatile gas for fabrication shielding, water treatment, and food preservation.',
    description: 'From welding shielding mixtures to food freezing and pH-balancing in waste treatment, our Carbon Dioxide is purified and liquefied under pressure to meet commercial and food-grade specifications.',
    purity: '99.9% purity standards',
    applications: [
      'Shielding component in Argon-CO2 welding gas mixtures',
      'Modified Atmosphere Packaging (MAP) to extend fresh food shelf-life',
      'pH neutralization of industrial alkaline wastewater'
    ],
    industries: ['Metal Fabrication', 'Food Processing', 'Water Treatment', 'Chemical'],
    supplyForms: ['Liquefied gas cylinders with siphons', 'Standard gas cylinders'],
    safetyInfo: 'Carbon Dioxide is toxic in high concentrations. Ensure adequate ventilation in active processing rooms.',
    image: co2Image
  },
  {
    id: 'med-oxygen',
    name: 'Medical Oxygen I.P.',
    category: 'medical',
    tagline: 'Certified medical-grade oxygen complying with Indian Pharmacopoeia.',
    description: 'Manufactured and analyzed under strict drug license regulations, SGGPL Medical Oxygen I.P. is trusted by premier multi-specialty hospitals, emergency critical care centers, and home care networks across the region.',
    purity: '99.6% minimum purity, moisture-free',
    applications: [
      'Critical patient respiratory support in intensive care units and OTs',
      'Inhalation therapy for chronic pulmonary and respiratory disorders',
      'Anesthesia carrier gas during surgical procedures'
    ],
    industries: ['Hospitals', 'Emergency Clinics', 'Healthcare Centers'],
    supplyForms: ['Dedicated medical gas cylinders', 'Liquid Medical Oxygen (LMO) containers'],
    safetyInfo: 'Supports combustion vigorously. Keep completely clear of open flames, grease, oils, and sparks.',
    image: medicalOxygenImage
  },
  {
    id: 'nitrous-oxide',
    name: 'Nitrous Oxide I.P.',
    category: 'medical',
    tagline: 'High-purity clinical anesthetic and analgesia gas.',
    description: 'We supply high-purity Nitrous Oxide manufactured through the controlled decomposition of chemical ammonium nitrate, processed and filtered to eliminate trace toxic nitric oxides.',
    purity: '99.0% minimum purity',
    applications: [
      'Inhalation anesthetic in modern clinical operating theatres',
      'Analgesic relief in pediatric and dental procedures',
      'Propellant in minor cryosurgical therapies'
    ],
    industries: ['Hospitals', 'Dental Clinics', 'Surgical Centers'],
    supplyForms: ['Specialized blue painted medical cylinders'],
    safetyInfo: 'Must only be administered by certified medical professionals with active gas scavenging systems.',
    image: nitrousOxideImage
  },
  {
    id: 'lpg-bulk',
    name: 'Bulk Commercial LPG',
    category: 'lpg',
    tagline: 'High-calorific clean-burning thermal fuel for heavy industrial heating.',
    description: 'As a premium distributor of commercial Liquefied Petroleum Gas, SGGPL offers clean-burning bulk thermal solutions that lower environmental emissions compared to coal and furnace oil.',
    purity: 'High-grade commercial propane/butane mix',
    applications: [
      'Fueling metal forging and reheating annealing furnaces',
      'Rotary kiln firing in cement and manufacturing plants',
      'Baking, roasting, and thermal heating in industrial food facilities'
    ],
    industries: ['Cement', 'Steel Mills', 'Food Processing', 'Manufacturing'],
    supplyForms: ['Dedicated LPG bullet road tankers'],
    safetyInfo: 'Highly flammable and heavier than air. Install leak detectors and remote emergency shutoff valves.',
    image: industrialBulkLpgImage
  },
  {
    id: 'cryo-liquids',
    name: 'Cryogenic Liquids (LOX / LCO₂ / LAR)',
    category: 'cryogenic',
    tagline: 'Super-insulated liquid oxygen, carbon dioxide, and argon for large-scale operations.',
    description: 'For clients with high daily gas requirements, SGGPL provides cryogenic liquids (LOX, LCO₂, LAR) stored in super-insulated vacuum vessels and vaporized on-demand to minimize cylinder handling and logistics costs.',
    purity: 'High-purity liquid grades matching clinical/industrial specifications',
    applications: [
      'Continuous replenishment of Liquid Medical Oxygen (LMO) storage tanks',
      'Bulk liquid CO₂ for large-scale food freezing and water treatment',
      'Continuous assist-gas supply for high-speed industrial laser cutters'
    ],
    industries: ['Hospitals', 'Steel Refineries', 'Manufacturing', 'Food Processing'],
    supplyForms: ['Vacuum-insulated road tankers', 'On-site Cryogenic Storage Tanks (VIE)'],
    safetyInfo: 'Extremely cold liquids (-78°C to -196°C) can cause instant frostbite. Wear specialized safety gear.',
    image: lco2Image
  }
];

export default function Products({ onNavigate }: { onNavigate?: (page: ActivePage) => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    return localStorage.getItem('selected_product_category') || 'all';
  });
  const [expandedProducts, setExpandedProducts] = useState<Record<string, boolean>>({});
  const [equipmentSearchQuery, setEquipmentSearchQuery] = useState('');
  const [expandedEquipmentCategories, setExpandedEquipmentCategories] = useState<Record<string, boolean>>({});
  
  // Navigation scroll behavior state
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const gasProductsSectionRef = useRef<HTMLDivElement>(null);
  const equipmentSectionRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    localStorage.removeItem('selected_product_category');

    if (localStorage.getItem('scroll_to_equipment') === 'true') {
      localStorage.removeItem('scroll_to_equipment');
      setTimeout(() => {
        if (equipmentSectionRef.current) {
          equipmentSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 350);
    }
  }, []);

  // Handle sticky pill navigation hide/show on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling down
        setIsNavVisible(false);
      } else {
        // Scrolling up or at the top
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleExpand = (id: string) => {
    setExpandedProducts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleEquipmentCategory = (id: string) => {
    setExpandedEquipmentCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAllEquipment = () => {
    const allExpanded = EQUIPMENT_CATEGORIES.reduce((acc, cat) => {
      acc[cat.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setExpandedEquipmentCategories(allExpanded);
  };

  const collapseAllEquipment = () => {
    setExpandedEquipmentCategories({});
  };

  // Instant filter equipment based on query
  const filteredEquipment = useMemo(() => {
    const query = equipmentSearchQuery.toLowerCase().trim();
    if (!query) return EQUIPMENT_CATEGORIES;
    return EQUIPMENT_CATEGORIES.filter(cat => {
      return (
        cat.title.toLowerCase().includes(query) ||
        cat.description.toLowerCase().includes(query) ||
        cat.items.some(item => item.toLowerCase().includes(query))
      );
    });
  }, [equipmentSearchQuery]);

  // Handle auto-expanding matching categories when searching
  React.useEffect(() => {
    if (equipmentSearchQuery.trim()) {
      const matchExpanded = filteredEquipment.reduce((acc, cat) => {
        acc[cat.id] = true;
        return acc;
      }, {} as Record<string, boolean>);
      setExpandedEquipmentCategories(matchExpanded);
    }
  }, [equipmentSearchQuery, filteredEquipment]);

  const handleRequestQuote = (productName: string) => {
    localStorage.setItem('selected_quote_gas', productName);
    if (onNavigate) {
      onNavigate('contact');
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

  const categoriesList = [
    { value: 'all', label: 'All Products' },
    { value: 'industrial', label: 'Industrial Gases' },
    { value: 'medical', label: 'Medical Gases' },
    { value: 'lpg', label: 'Commercial LPG' },
    { value: 'cryogenic', label: 'Cryogenic Liquids' }
  ];

  const filteredGasProducts = useMemo(() => {
    if (selectedCategory === 'all') return GAS_PRODUCTS;
    return GAS_PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield size={22} className="stroke-[1.5]" />;
      case 'Gauge': return <Gauge size={22} className="stroke-[1.5]" />;
      case 'Wind': return <Wind size={22} className="stroke-[1.5]" />;
      case 'HeartPulse': return <HeartPulse size={22} className="stroke-[1.5]" />;
      case 'GitCommit': return <GitCommit size={22} className="stroke-[1.5]" />;
      case 'Link': return <Link size={22} className="stroke-[1.5]" />;
      case 'Flame': return <Flame size={22} className="stroke-[1.5]" />;
      case 'ShieldAlert': return <ShieldAlert size={22} className="stroke-[1.5]" />;
      case 'Cpu': return <Cpu size={22} className="stroke-[1.5]" />;
      case 'Truck': return <Truck size={22} className="stroke-[1.5]" />;
      case 'Droplet': return <Droplet size={22} className="stroke-[1.5]" />;
      case 'Wrench': return <Wrench size={22} className="stroke-[1.5]" />;
      case 'CircleDot': return <CircleDot size={22} className="stroke-[1.5]" />;
      case 'Filter': return <Filter size={22} className="stroke-[1.5]" />;
      default: return <Wrench size={22} className="stroke-[1.5]" />;
    }
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-white selection:bg-brand-red selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-brand-charcoal overflow-hidden py-28 px-4 text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Heavy Industrial Bulk Gas Processing Storage Vessel"
            className="w-full h-full object-cover object-center brightness-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/30 to-brand-charcoal/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-brand-red/10 border border-brand-red/30 px-3.5 py-1 rounded-sm"
          >
            <span className="text-brand-red text-[11px] font-mono font-bold uppercase tracking-widest">
              SGGPL Industrial Catalog
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white"
          >
            Industrial Gas Products & Equipment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto font-sans font-light leading-relaxed"
          >
            Shree Ganpati Gastech Private Limited supplies industrial and medical gases, commercial LPG, and a comprehensive range of gas handling equipment designed to support industries with dependable quality, safety, and reliable supply.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <button
              onClick={() => handleRequestQuote('General Inquiries')}
              className="px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2.5 cursor-pointer shadow-md"
            >
              Request Quote
              <ArrowRight size={13} className="stroke-[2.5]" />
            </button>
            <button
              onClick={() => scrollToSection(gasProductsSectionRef)}
              className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-white text-gray-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              Browse Products
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORIES */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
              OUR SUPPLY PORTFOLIO
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              Five Specialized Product Segments
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
              Industrial-grade supplies manufactured under strict quality audits, ensuring compliance with clinical pharmacopoeia standards and raw material parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Industrial Gases',
                desc: 'High-purity Oxygen, Nitrogen, Argon, and Carbon Dioxide supporting critical metal smelting and fabrication.',
                image: industrialOxygenImage,
                icon: <Flame size={20} className="text-brand-red" />,
                actionValue: 'industrial'
              },
              {
                title: 'Medical Gases',
                desc: 'Certified Medical Oxygen and Nitrous Oxide matching Indian Pharmacopoeia (I.P.) rules for healthcare lines.',
                image: medicalOxygenImage,
                icon: <HeartPulse size={20} className="text-brand-red" />,
                actionValue: 'medical'
              },
              {
                title: 'Commercial LPG',
                desc: 'Bulk commercial liquefied petroleum gas providing continuous high-calorific thermal fuel for industrial kilns.',
                image: industrialBulkLpgImage,
                icon: <Flame size={20} className="text-brand-red" />,
                actionValue: 'lpg'
              },
              {
                title: 'Cryogenic Liquids',
                desc: 'Bulk Liquid Oxygen, Liquid Nitrogen, and Liquid Argon supplied in vacuum road tankers.',
                image: lco2Image,
                icon: <Droplet size={20} className="text-brand-red" />,
                actionValue: 'cryogenic'
              },
              {
                title: 'Equipment & Accessories',
                desc: 'Industrial pressure regulators, flow meters, valves, pigtails, and safety handling systems.',
                image: equipmentAccessoriesImage,
                icon: <Wrench size={20} className="text-brand-red" />,
                actionValue: 'equipment'
              }
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="group bg-white border border-slate-200/70 rounded-sm overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer"
                onClick={() => {
                  if (cat.actionValue === 'equipment') {
                    scrollToSection(equipmentSectionRef);
                  } else {
                    setSelectedCategory(cat.actionValue);
                    scrollToSection(gasProductsSectionRef);
                  }
                }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 px-3 py-1.5 rounded-sm border border-slate-100 shadow-sm text-neutral-800">
                    {cat.icon}
                    <span className="text-[10px] font-bold uppercase tracking-wider font-display">
                      {cat.title}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase text-brand-red tracking-wider group-hover:gap-2.5 transition-all">
                    <span>View Product Line</span>
                    <ArrowRight size={12} className="stroke-[2.5]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GAS PRODUCTS & SPECIFICATIONS LIST */}
      <div ref={gasProductsSectionRef} className="scroll-mt-20" />
      
      {/* Dynamic Pill Filter Navigation - Sticky Component */}
      <section className={`bg-brand-light py-5 border-b border-slate-200/80 sticky top-16 sm:top-[72px] z-30 backdrop-blur-md bg-white/90 shadow-2xs transition-transform duration-300 ease-in-out ${isNavVisible ? 'translate-y-0' : '-translate-y-[150%] opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
              <Filter size={13} className="text-brand-red" />
              <span>Select Category:</span>
            </div>
            
            <div className="flex flex-wrap gap-1.5 w-full lg:w-auto">
              {categoriesList.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all rounded-sm cursor-pointer border ${
                    selectedCategory === cat.value
                      ? 'bg-brand-red text-white border-brand-red font-bold shadow-sm'
                      : 'bg-white text-neutral-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gas Grid */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
              GAS MODULES
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              High-Purity Gases & Supply Formats
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light">
              Explore molecular structures, analytical purity levels, typical applications, and logistics options verified by our operational team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredGasProducts.map((prod, idx) => {
              const isExpanded = !!expandedProducts[prod.id];
              return (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.25) }}
                  className="group bg-white border rounded-sm shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col h-full overflow-hidden border-slate-200/85"
                >
                  {/* Image Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 border-b border-slate-100">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute top-4 left-4 flex gap-1.5">
                      <span className="bg-brand-charcoal text-white text-[8px] uppercase tracking-widest font-mono py-1 px-2 rounded-sm font-bold shadow-sm">
                        {prod.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                    <div className="space-y-5">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-lg font-display font-bold text-neutral-800 tracking-tight">
                            {prod.name}
                          </h3>
                        </div>
                        <p className="text-xs text-neutral-500 mt-1 font-sans font-light leading-relaxed">
                          {prod.tagline}
                        </p>
                      </div>

                      {/* Technical specifications */}
                      <div className="space-y-1 py-2 px-3 bg-slate-50 border border-slate-100 rounded-sm">
                        <span className="text-[9px] font-mono font-bold uppercase text-neutral-400 tracking-wider">
                          Purity Index
                        </span>
                        <p className="text-xs text-brand-red font-mono font-bold leading-none">
                          {prod.purity}
                        </p>
                      </div>

                      {/* Applications */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase text-neutral-700 tracking-widest border-b border-slate-100 pb-0.5 block">
                          Typical Applications
                        </span>
                        <ul className="space-y-1 text-xs text-neutral-500 font-sans font-light leading-relaxed">
                          {prod.applications.map((app, appIdx) => (
                            <li key={appIdx} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 shrink-0" />
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Primary Industries Served */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase text-neutral-700 tracking-widest border-b border-slate-100 pb-0.5 block">
                          Primary Industries
                        </span>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {prod.industries.map((ind, indIdx) => (
                            <span key={indIdx} className="text-[9px] bg-slate-100 text-neutral-600 px-2 py-0.5 rounded-sm font-mono border border-slate-200/50">
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Available Supply Forms */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase text-neutral-700 tracking-widest border-b border-slate-100 pb-0.5 block">
                          Available Supply Forms
                        </span>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {prod.supplyForms.map((form, formIdx) => (
                            <span key={formIdx} className="text-[9px] bg-brand-red/5 text-brand-red px-2 py-0.5 rounded-sm font-sans font-medium border border-brand-red/10">
                              {form}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expanded Section */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden border-t border-slate-100 pt-4 mt-2 space-y-4"
                          >
                            <div className="space-y-1">
                              <span className="text-[9px] font-mono font-bold uppercase text-neutral-400">
                                Product Description
                              </span>
                              <p className="text-xs text-neutral-600 font-light leading-relaxed font-sans">
                                {prod.description}
                              </p>
                            </div>

                            <div className="bg-brand-red/5 p-3.5 border border-brand-red/10 rounded-sm space-y-1">
                              <span className="text-[9px] font-mono font-bold uppercase text-brand-red tracking-wider block">
                                Safety Compliance Reminder
                              </span>
                              <p className="text-[10px] text-neutral-600 leading-relaxed font-sans font-light">
                                {prod.safetyInfo} Always check specific cylinder pressure gauges and wear mandatory hazard protection.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Button Area */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col items-center gap-4">
                      <button
                        onClick={() => handleRequestQuote(prod.name)}
                        className="w-full flex items-center justify-center gap-1.5 py-3.5 px-4 bg-brand-red hover:bg-brand-red-hover text-white text-[10px] font-mono font-bold uppercase tracking-widest transition-all cursor-pointer rounded-xs shadow-xs"
                      >
                        <ArrowRight size={12} />
                        Request Quote
                      </button>

                      <button
                        onClick={() => toggleExpand(prod.id)}
                        className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 hover:text-brand-red transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Details' : 'Learn More'}</span>
                        <ChevronDown size={12} className={`text-neutral-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-red' : ''}`} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. EQUIPMENT CATALOGUE (WITH ALL 14 EXPANDABLE CATEGORIES) */}
      <div ref={equipmentSectionRef} className="scroll-mt-20" />
      <section className="py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
              PARTS & REGULATORS
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              Gas Equipment & Accessories Catalogue
            </h2>
            <div className="w-12 h-[2px] bg-brand-red mx-auto"></div>
            <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
              SGGPL offers technical cylinder assemblies, double-ferrule instrumentation, certified clinical regulators, and flow components supporting safe delivery networks.
            </p>
          </div>

          {/* Search bar and collapse/expand controls */}
          <div className="bg-white border border-slate-200/80 rounded-sm p-4 sm:p-6 mb-10 shadow-3xs flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search size={15} className="text-slate-400" />
              </span>
              <input
                type="text"
                placeholder="Search equipment category or components..."
                value={equipmentSearchQuery}
                onChange={(e) => setEquipmentSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand-red focus:bg-white transition-all font-light text-neutral-800 placeholder:text-slate-400"
              />
              {equipmentSearchQuery && (
                <button
                  onClick={() => setEquipmentSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-brand-red"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="flex gap-2 shrink-0">
              <button
                onClick={expandAllEquipment}
                className="px-4 py-2.5 bg-white hover:bg-slate-50 text-neutral-600 border border-slate-200 hover:border-slate-300 text-[10px] font-mono font-bold uppercase tracking-wider transition-all rounded-sm cursor-pointer"
              >
                Expand All
              </button>
              <button
                onClick={collapseAllEquipment}
                className="px-4 py-2.5 bg-white hover:bg-slate-50 text-neutral-600 border border-slate-200 hover:border-slate-300 text-[10px] font-mono font-bold uppercase tracking-wider transition-all rounded-sm cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Result helper count */}
          {equipmentSearchQuery && (
            <div className="mb-8 text-xs text-slate-500 font-light flex items-center gap-2">
              <span>Found <strong className="text-neutral-800 font-semibold">{filteredEquipment.length}</strong> matching categories for "{equipmentSearchQuery}"</span>
              <button
                onClick={() => setEquipmentSearchQuery('')}
                className="text-brand-red hover:underline font-normal text-[11px] ml-2"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* 14 Accordions Grid */}
          {filteredEquipment.length === 0 ? (
            <div className="text-center py-16 bg-white border border-slate-200/60 rounded-sm">
              <p className="text-xs text-slate-400 font-light">No equipment categories match your search terms.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEquipment.map((cat, idx) => {
                const isExpanded = !!expandedEquipmentCategories[cat.id];
                return (
                  <motion.div
                    key={cat.id}
                    layout="position"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.2) }}
                    className={`bg-white border rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-3xs hover:shadow-md cursor-pointer select-none group relative overflow-hidden h-full ${
                      isExpanded ? 'border-brand-red/40 ring-1 ring-brand-red/10' : 'border-slate-200/80 hover:border-brand-red/25'
                    }`}
                    onClick={() => toggleEquipmentCategory(cat.id)}
                  >
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-brand-red transition-transform duration-300 ${
                      isExpanded ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />

                    <div>
                      {/* Category Header Row */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="p-3 bg-brand-red/5 text-brand-red rounded-sm border border-brand-red/10 group-hover:bg-brand-red/10 transition-colors">
                          {getCategoryIcon(cat.iconName)}
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-50 border border-slate-100 text-neutral-500 rounded-sm">
                          {cat.items.length} Accessories
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-display font-bold text-neutral-800 tracking-tight mb-2 group-hover:text-brand-red transition-colors duration-200">
                        {cat.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
                        {cat.description}
                      </p>

                      {/* Accordion List */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: 'easeInOut' }}
                            className="overflow-hidden"
                            onClick={(e) => e.stopPropagation()} // Prevent close when selecting item tags
                          >
                            <div className="mt-5 pt-5 border-t border-slate-100 space-y-3">
                              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-neutral-400 block">
                                Technical Components:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {cat.items.map((item, i) => (
                                  <span
                                    key={i}
                                    className="text-[10px] bg-slate-50 text-neutral-700 border border-slate-200/80 px-2.5 py-1 rounded-sm font-sans font-light hover:border-brand-red hover:text-brand-red transition-all duration-200"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-neutral-400 group-hover:text-neutral-600 transition-colors">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                        {isExpanded ? 'Hide Components' : 'View Components'}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-brand-red' : ''}`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Banner inside section */}
          <div className="mt-16 bg-neutral-950 p-8 sm:p-12 rounded-sm border border-neutral-900 shadow-lg relative overflow-hidden text-white">
            <div className="absolute inset-0 z-0">
              <img src={technicalAdviceImage} alt="Technical Advice" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-4xl space-y-6">
              <span className="text-brand-red text-xs font-mono font-bold uppercase tracking-widest border border-brand-red/30 px-3 py-1 rounded-sm bg-brand-red/5 inline-block">
                Technical Advice
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-white">
                Require Custom Gas Distribution Equipment?
              </h3>
              <p className="text-xs text-neutral-400 font-sans font-light leading-relaxed max-w-2xl">
                SGGPL helps clients construct manifold manifolds, safe control cages, and specific cylinder pipelines. Contact our engineers to review setup layout requirements and PESO guidelines.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => handleRequestQuote('Gas Equipment & Accessories')}
                  className="flex items-center gap-2 py-3.5 px-6 bg-brand-red hover:bg-brand-red-hover text-white text-[10px] font-mono font-bold uppercase tracking-widest transition-all rounded-xs cursor-pointer shadow-md"
                >
                  Request Equipment Quote
                  <ArrowRight size={12} className="stroke-[2.5]" />
                </button>
                <button
                  onClick={handleContactUs}
                  className="flex items-center gap-2 py-3.5 px-6 bg-transparent hover:bg-white/5 text-white border border-white/20 text-[10px] font-mono font-bold uppercase tracking-widest transition-all rounded-xs cursor-pointer"
                >
                  Contact Our Engineers
                  <PhoneCall size={12} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. INDUSTRIES SERVED */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
              OPERATIONAL SYNERGIES
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              Powering Vital Industrial Fields
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
              We align our pressure distribution, purity chromatography, and cylinders with precise regulatory parameters across national supply grids.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Hospitals & Healthcare',
                desc: 'Continuous delivery of medical oxygen I.P. and nitrous oxide I.P. to ICUs, OTs, and critical care centers.',
                icon: <HeartPulse size={24} className="text-brand-red stroke-[1.5]" />
              },
              {
                title: 'Steel & Metallurgy',
                desc: 'Oxidizing combustion, inert blanketing, and high-pressure electric arc TIG/MIG welding shielding support.',
                icon: <Building2 size={24} className="text-brand-red stroke-[1.5]" />
              },
              {
                title: 'Cement & Kilns',
                desc: 'Providing high-calorific bulk commercial LPG bullets to fire kiln preheaters and power intense calcination processes.',
                icon: <Flame size={24} className="text-brand-red stroke-[1.5]" />
              },
              {
                title: 'Metal Fabrication & Welding',
                desc: 'Certified argon/CO2 shielding mixtures to guarantee structural welds are entirely free of atmospheric porosity.',
                icon: <Wrench size={24} className="text-brand-red stroke-[1.5]" />
              },
              {
                title: 'Chemical & Petrochemical',
                desc: 'Pipeline blanketing, purging systems, and safe inert atmosphere creation with high-dryness liquid nitrogen.',
                icon: <Cpu size={24} className="text-brand-red stroke-[1.5]" />
              },
              {
                title: 'Food Processing & Cold Chains',
                desc: 'Modified Atmosphere Packaging (MAP) mixtures and rapid cryogenic liquid flash freezing tunnels.',
                icon: <Droplet size={24} className="text-brand-red stroke-[1.5]" />
              }
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-brand-light p-8 rounded-sm border border-slate-200/60 hover:border-brand-red/30 transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-white text-brand-red border border-slate-200/80 rounded-sm flex items-center justify-center shadow-xs group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300">
                    {ind.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-800">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE SGGPL */}
      <section className="py-24 bg-brand-light border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
              SGGPL ADVANTAGE
            </span>
            <h2 className="text-3xl font-display font-bold text-brand-charcoal tracking-tight">
              Engineered for absolute operational trust
            </h2>
            <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
              We focus on structural integrity, verified chromatography purity, and supply consistency over short-term sales volume.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Layers size={26} className="text-brand-red stroke-[1.5]" />,
                title: 'Reliable Supply',
                desc: 'Our logistics coordinate prompt bulk transport tanker replenishment and structured cylinder deliveries across sectors.'
              },
              {
                icon: <Award size={26} className="text-brand-red stroke-[1.5]" />,
                title: 'Quality Products',
                desc: 'Strict laboratory audits, batch chromatography, and trace verification verify precise certified molecular grades.'
              },
              {
                icon: <Shield size={26} className="text-brand-red stroke-[1.5]" />,
                title: 'Safety Focused',
                desc: 'Rigorous hydrostatic cylinder testing, PESO regulatory compliance, and staff training prevent site hazards.'
              },
              {
                icon: <PhoneCall size={26} className="text-brand-red stroke-[1.5]" />,
                title: 'Customer Support',
                desc: 'Active advice on piping manifold configuration, pressure testing, and optimized storage vessel locations.'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-sm border border-slate-200/60 shadow-3xs flex flex-col justify-between h-full hover:shadow-md transition-shadow"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200/80 rounded-sm flex items-center justify-center text-brand-red shadow-2xs">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 font-sans font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BUSINESS CTA */}
      <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={getInTouchImage} alt="Get in Touch" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        </div>
        {/* Subtle background track styling */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white"></div>
          <div className="absolute top-0 left-2/4 w-[1px] h-full bg-white"></div>
          <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 px-4">
          <div className="space-y-3">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest border-b-2 border-brand-red pb-1">
              CONSULT AN ENGINEER
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mt-2">
              Looking for Industrial Gas Solutions?
            </h2>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto font-sans font-light leading-relaxed">
              Our experienced team can assist you in selecting the right gases, equipment, and accessories for your operational requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <button
              onClick={() => handleRequestQuote('General Inquiries')}
              className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red-hover text-white font-bold text-xs uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              Request Quote
              <ArrowRight size={13} className="stroke-[2.5]" />
            </button>
            <button
              onClick={handleContactUs}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 hover:border-white text-gray-300 hover:text-white font-bold text-xs uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}