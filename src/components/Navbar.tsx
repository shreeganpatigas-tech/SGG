/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Phone, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import Logo from './Logo';
import { ActivePage } from '../types';

// Mega Menu Asset Imports
import indGasImg from '../assets/images/products/industrial-oxygen.png';
import medGasImg from '../assets/images/products/medical-oxygen.png';
import cryoImg from '../assets/images/products/lco2.png';
import lpgImg from '../assets/images/products/industrial-bulk-lpg.png';
import equipImg from '../assets/images/products/equipment-accessories.png';
import corpProfileImg from '../assets/images/company/corporate-profile.png';

import hospitalImg from '../assets/images/industries/hospital.png';
import steelImg from '../assets/images/industries/steel.png';
import cementImg from '../assets/images/industries/cement.png';
import chemicalImg from '../assets/images/industries/chemical.png';
import foodImg from '../assets/images/industries/food.png';
import metalImg from '../assets/images/industries/metal.png';

interface NavbarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
}

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'company' | 'products' | 'industries' | null>(null);
  
  // Mobile accordion states
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Apple-style Scroll Behavior State
  const [scrollState, setScrollState] = useState({
    isVisible: true,
    isAtTop: true,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtTop = currentScrollY < 20;

      // Only hide if we scroll down AND we've scrolled past a threshold
      const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 100;

      // Close mega menu if user scrolls down aggressively
      if (activeDropdown && isScrollingDown) {
        setActiveDropdown(null);
      }

      setScrollState({
        isVisible: !isScrollingDown,
        isAtTop: isAtTop
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeDropdown]);

  // Premium Mega Menu Hover Management
  const handleMouseEnter = (menu: 'company' | 'products' | 'industries') => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleProductCategoryClick = (category: string, scrollToEquip = false) => {
    localStorage.setItem('selected_product_category', category);
    if (scrollToEquip) {
      localStorage.setItem('scroll_to_equipment', 'true');
    } else {
      localStorage.removeItem('scroll_to_equipment');
    }
    handleNavClick('products' as ActivePage);
  };

  const handleIndustryClick = (id: string) => {
    localStorage.setItem('selected_industry_id', id);
    handleNavClick('industries' as ActivePage);
  };

  const MAIN_LINKS = [
    { label: 'Home', page: 'home' as ActivePage },
    { label: 'Company', page: 'about' as ActivePage, menu: 'company' as const },
    { label: 'Products', page: 'products' as ActivePage, menu: 'products' as const },
    { label: 'Industries', page: 'industries' as ActivePage, menu: 'industries' as const },
    { label: 'Infrastructure', page: 'infrastructure' as ActivePage },
    { label: 'Safety', page: 'safety' as ActivePage },
    { label: 'Careers', page: 'careers' as ActivePage },
    { label: 'Contact', page: 'contact' as ActivePage }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-[18px] border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrollState.isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 backdrop-blur-none'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 xl:px-6 h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Company Name Container */}
          <button
            onClick={() => handleNavClick('home' as ActivePage)}
            className="flex items-center gap-3 xl:gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A30000] rounded-sm group shrink-0 min-w-max"
            aria-label="SGGPL Home"
          >
            <picture className="shrink-0">
              <source srcSet="/assets/logo/logo.svg" type="image/svg+xml" />
              <img
                src="/assets/logo/logo.png"
                alt="SGGPL Logo"
                className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] object-contain h-[42px] md:h-[46px] lg:h-[50px] xl:h-[56px] group-hover:scale-105"
                onError={(e) => { e.currentTarget.src = '/assets/logo/logo.png'; }}
              />
            </picture>
            <div className="flex flex-col justify-center text-left whitespace-nowrap shrink-0">
              <span className="font-bold text-[#1C1E21] text-[13px] md:text-sm lg:text-base xl:text-lg leading-none uppercase tracking-tight group-hover:text-[#A30000] transition-colors">
                Shree Ganpati
              </span>
              <span className="font-medium text-slate-500 text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] tracking-[0.15em] leading-tight mt-1 uppercase">
                Gastech Private Limited
              </span>
            </div>
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden xl:flex items-center justify-center gap-3 xl:gap-4 2xl:gap-7 h-full min-w-max shrink-0" aria-label="Main Navigation">
            {MAIN_LINKS.map((item) => {
              const isActive = activePage === item.page;
              return (
                <div
                  key={item.label}
                  onMouseEnter={() => item.menu && handleMouseEnter(item.menu)}
                  onMouseLeave={() => item.menu && handleMouseLeave()}
                  className="relative h-full flex items-center shrink-0"
                >
                  <button
                    onClick={() => handleNavClick(item.page)}
                    className={`flex items-center gap-1.5 text-[10px] 2xl:text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A30000]/50 rounded-sm py-2 px-1 whitespace-nowrap shrink-0 ${
                      isActive ? 'text-[#A30000]' : 'text-slate-600 hover:text-[#A30000]'
                    }`}
                  >
                    {item.label}
                    {item.menu && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.menu ? 'rotate-180 text-[#A30000]' : 'text-slate-400'
                        }`}
                      />
                    )}
                  </button>

                  {/* Active Page Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A30000]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right CTAs (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 2xl:gap-3 pl-4 xl:pl-6 border-l border-slate-200/60 shrink-0 min-w-max">
            <a
              href="tel:+917987594387"
              className="flex items-center justify-center gap-1.5 2xl:gap-2 px-3 py-2 2xl:px-4 2xl:py-2.5 border border-slate-200 bg-white rounded-full text-[9px] 2xl:text-[10px] font-bold tracking-widest uppercase text-slate-700 hover:border-[#A30000] hover:text-[#A30000] hover:shadow-md transition-all duration-300 whitespace-nowrap shrink-0"
              aria-label="Call Us"
            >
              <Phone size={12} /> <span className="hidden xl:inline">Call</span>
            </a>
            <a
              href="https://wa.me/917987594387"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 2xl:gap-2 px-3 py-2 2xl:px-4 2xl:py-2.5 bg-[#25D366] text-white rounded-full text-[9px] 2xl:text-[10px] font-bold tracking-widest uppercase hover:bg-[#1EBE5D] hover:shadow-md transition-all duration-300 whitespace-nowrap shrink-0"
              aria-label="WhatsApp Us"
            >
              <MessageSquare size={12} /> <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex xl:hidden items-center gap-4 shrink-0">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center text-slate-800 hover:text-[#A30000] transition-colors focus:outline-none"
              aria-label="Open Mobile Menu"
            >
              <Menu size={28} className="stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PREMIUM MEGA MENUS */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => handleMouseEnter(activeDropdown)}
              onMouseLeave={handleMouseLeave}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl border-b border-black/5 shadow-2xl z-40 overflow-hidden"
            >
              {/* --- COMPANY MEGA MENU --- */}
              {activeDropdown === 'company' && (
                <div className="max-w-[1400px] mx-auto h-[520px] flex p-10 gap-16">
                  <div className="w-[40%] rounded-2xl relative overflow-hidden group shadow-lg">
                    <img src={corpProfileImg} alt="SGGPL Corporate Profile" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-10">
                      <h3 className="text-white text-3xl font-display font-light tracking-tight mb-3">Our Legacy</h3>
                      <p className="text-white/80 font-light text-sm leading-relaxed max-w-sm">Delivering cryogenic gas and energy solutions since 1993. Guided by absolute compliance and engineering values.</p>
                    </div>
                  </div>
                  <div className="w-[60%] py-6 flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#A30000] mb-8 border-b border-slate-100 pb-4 inline-block max-w-max">Explore SGGPL</span>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                      <MegaCompanyLink title="Company Overview" onClick={() => handleNavClick('about' as ActivePage)} />
                      <MegaCompanyLink title="Leadership" onClick={() => handleNavClick('about' as ActivePage)} />
                      <MegaCompanyLink title="Mission" onClick={() => handleNavClick('about' as ActivePage)} />
                      <MegaCompanyLink title="Vision" onClick={() => handleNavClick('about' as ActivePage)} />
                      <MegaCompanyLink title="Infrastructure" onClick={() => handleNavClick('infrastructure' as ActivePage)} />
                      <MegaCompanyLink title="Safety & Compliance" onClick={() => handleNavClick('safety' as ActivePage)} />
                      <MegaCompanyLink title="Careers at SGGPL" onClick={() => handleNavClick('careers' as ActivePage)} />
                      <MegaCompanyLink title="Downloads & Resources" onClick={() => handleNavClick('about' as ActivePage)} />
                      <MegaCompanyLink title="Contact Us" onClick={() => handleNavClick('contact' as ActivePage)} />
                    </div>
                  </div>
                </div>
              )}

              {/* --- PRODUCTS MEGA MENU --- */}
              {activeDropdown === 'products' && (
                <div className="max-w-[1400px] mx-auto h-[520px] flex p-10 gap-12">
                  <div 
                    className="w-[40%] rounded-2xl relative overflow-hidden group shadow-lg cursor-pointer" 
                    onClick={() => handleNavClick('products' as ActivePage)}
                  >
                    <img src={indGasImg} alt="Industrial Gas Solutions" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                      <h3 className="text-white text-3xl font-display font-light tracking-tight mb-3">Engineering Excellence</h3>
                      <p className="text-white/80 font-light text-sm mb-6 leading-relaxed max-w-sm">High-purity gases powering modern fabrication, healthcare, and advanced manufacturing globally.</p>
                      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
                        Explore Catalog <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                  <div className="w-[60%] flex flex-col justify-between h-full">
                    <div className="grid grid-cols-2 gap-4">
                      <MegaProductCard title="Industrial Gases" desc="Oxygen, Nitrogen, Argon" img={indGasImg} onClick={() => handleProductCategoryClick('industrial')} />
                      <MegaProductCard title="Medical Gases" desc="Certified IP Grade Supplies" img={medGasImg} onClick={() => handleProductCategoryClick('medical')} />
                      <MegaProductCard title="Cryogenic Liquids" desc="LOX, LCO₂, LAR Tanks" img={cryoImg} onClick={() => handleProductCategoryClick('cryogenic')} />
                      <MegaProductCard title="Commercial LPG" desc="Bulk Thermal Heating Fuel" img={lpgImg} onClick={() => handleProductCategoryClick('lpg')} />
                      <MegaProductCard title="Equipment & Accs" desc="Precision High-Pressure Regulators" img={equipImg} onClick={() => handleProductCategoryClick('equipment', true)} />
                    </div>
                    
                    <a href="tel:+917987594387" className="mt-auto bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#A30000]/10 text-[#A30000] rounded-full flex items-center justify-center group-hover:bg-[#A30000] group-hover:text-white transition-colors duration-300">
                          <Phone size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 tracking-tight group-hover:text-[#A30000] transition-colors">Need Help Choosing?</p>
                          <p className="text-xs text-slate-500 font-light mt-0.5">Talk to a certified SGGPL engineer today.</p>
                        </div>
                      </div>
                      <ArrowRight size={20} className="text-slate-300 group-hover:text-[#A30000] group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              )}

              {/* --- INDUSTRIES MEGA MENU --- */}
              {activeDropdown === 'industries' && (
                <div className="max-w-[1400px] mx-auto p-10 h-[520px] flex flex-col justify-center">
                  <div className="grid grid-cols-3 gap-6 h-full">
                    <MegaIndustryCard title="Hospitals & Healthcare" desc="Critical life-support medical gases." img={hospitalImg} onClick={() => handleIndustryClick('healthcare')} />
                    <MegaIndustryCard title="Steel & Metallurgy" desc="Smelting and furnace enrichment." img={steelImg} onClick={() => handleIndustryClick('steel')} />
                    <MegaIndustryCard title="Cement & Kilns" desc="Rotary kiln thermal fuel." img={cementImg} onClick={() => handleIndustryClick('cement')} />
                    <MegaIndustryCard title="Chemical Processing" desc="Inert blanketing and purging." img={chemicalImg} onClick={() => handleIndustryClick('chemical')} />
                    <MegaIndustryCard title="Food & Cold Chains" desc="MAP and cryogenic freezing." img={foodImg} onClick={() => handleIndustryClick('food')} />
                    <MegaIndustryCard title="Metal Fabrication" desc="Precision welding shielding." img={metalImg} onClick={() => handleIndustryClick('fabrication')} />
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ========================================================================= */}
      {/* MOBILE FULL SCREEN DRAWER */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white z-[100] flex flex-col overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white/80 backdrop-blur-md z-10 shrink-0">
              <Logo className="h-9" variant="dark" />
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-full text-slate-800 hover:bg-slate-100 transition-colors"
                aria-label="Close Mobile Menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 pb-32 space-y-1">
              <MobileNavLink title="Home" onClick={() => handleNavClick('home' as ActivePage)} active={activePage === 'home'} />
              
              <MobileAccordion title="Company" isOpen={mobileCompanyOpen} setOpen={setMobileCompanyOpen}>
                <div className="pl-4 border-l border-slate-100 space-y-1 mt-2">
                  <MobileSubLink title="Company Overview" onClick={() => handleNavClick('about' as ActivePage)} />
                  <MobileSubLink title="Infrastructure" onClick={() => handleNavClick('infrastructure' as ActivePage)} />
                  <MobileSubLink title="Safety & Compliance" onClick={() => handleNavClick('safety' as ActivePage)} />
                  <MobileSubLink title="Careers" onClick={() => handleNavClick('careers' as ActivePage)} />
                </div>
              </MobileAccordion>

              <MobileAccordion title="Products" isOpen={mobileProductsOpen} setOpen={setMobileProductsOpen}>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <MobileProductCard title="Industrial" img={indGasImg} onClick={() => handleProductCategoryClick('industrial')} />
                  <MobileProductCard title="Medical" img={medGasImg} onClick={() => handleProductCategoryClick('medical')} />
                  <MobileProductCard title="Cryogenic" img={cryoImg} onClick={() => handleProductCategoryClick('cryogenic')} />
                  <MobileProductCard title="LPG" img={lpgImg} onClick={() => handleProductCategoryClick('lpg')} />
                  <MobileProductCard title="Equipment" img={equipImg} onClick={() => handleProductCategoryClick('equipment', true)} className="col-span-2" />
                </div>
              </MobileAccordion>

              <MobileAccordion title="Industries" isOpen={mobileIndustriesOpen} setOpen={setMobileIndustriesOpen}>
                <div className="pl-4 border-l border-slate-100 space-y-1 mt-2">
                  <MobileSubLink title="Hospital & Healthcare" onClick={() => handleIndustryClick('healthcare')} />
                  <MobileSubLink title="Steel & Metallurgy" onClick={() => handleIndustryClick('steel')} />
                  <MobileSubLink title="Cement & Kilns" onClick={() => handleIndustryClick('cement')} />
                  <MobileSubLink title="Chemical Processing" onClick={() => handleIndustryClick('chemical')} />
                  <MobileSubLink title="Food & Cold Chains" onClick={() => handleIndustryClick('food')} />
                  <MobileSubLink title="Metal Fabrication" onClick={() => handleIndustryClick('fabrication')} />
                </div>
              </MobileAccordion>

              <MobileNavLink title="Infrastructure" onClick={() => handleNavClick('infrastructure' as ActivePage)} active={activePage === 'infrastructure'} />
              <MobileNavLink title="Safety" onClick={() => handleNavClick('safety' as ActivePage)} active={activePage === 'safety'} />
              <MobileNavLink title="Careers" onClick={() => handleNavClick('careers' as ActivePage)} active={activePage === 'careers'} />
              <MobileNavLink title="Contact" onClick={() => handleNavClick('contact' as ActivePage)} active={activePage === 'contact'} />
            </div>

            {/* Mobile Footer CTAs */}
            <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-100 p-6 flex flex-col gap-3 pb-8 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
              <div className="flex gap-3">
                <a
                  href="tel:+917987594387"
                  className="w-1/2 flex items-center justify-center gap-2 py-4 border border-slate-200 bg-white rounded-xl text-slate-700 font-bold tracking-widest uppercase text-[11px] hover:border-[#A30000] hover:text-[#A30000] transition-colors"
                >
                  <Phone size={14} /> Call
                </a>
                <a
                  href="https://wa.me/917987594387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-white rounded-xl font-bold tracking-widest uppercase text-[11px] shadow-sm hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageSquare size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ============================================================================
// REUSABLE MEGA MENU COMPONENTS
// ============================================================================

const MegaCompanyLink = ({ title, onClick }: { title: string, onClick: () => void }) => (
  <div 
    onClick={onClick} 
    className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100"
  >
    <span className="font-semibold text-sm text-slate-700 group-hover:text-[#A30000] tracking-tight">{title}</span>
    <ChevronRight size={16} className="text-slate-300 group-hover:translate-x-1 group-hover:text-[#A30000] transition-all" />
  </div>
);

const MegaProductCard = ({ title, desc, img, onClick }: { title: string, desc: string, img: string, onClick: () => void }) => (
  <div 
    onClick={onClick} 
    className="group flex flex-col bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 overflow-hidden cursor-pointer h-full"
  >
    <div className="h-28 overflow-hidden relative bg-slate-50">
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
    </div>
    <div className="p-4 flex flex-col justify-between flex-1 bg-white">
      <div>
        <h4 className="font-semibold text-sm tracking-tight text-slate-800 group-hover:text-[#A30000] transition-colors">{title}</h4>
        <p className="text-xs text-slate-500 font-light mt-1 truncate">{desc}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#A30000] transition-colors">View Details</span>
        <ArrowRight size={14} className="text-slate-300 group-hover:translate-x-1 group-hover:text-[#A30000] transition-all" />
      </div>
    </div>
  </div>
);

const MegaIndustryCard = ({ title, desc, img, onClick }: { title: string, desc: string, img: string, onClick: () => void }) => (
  <div 
    onClick={onClick} 
    className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 w-full h-full"
  >
    <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
    <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
      <h4 className="text-white text-lg font-display font-semibold mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400 ease-out">{title}</h4>
      <p className="text-white/70 text-xs font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-400 ease-out delay-75">{desc}</p>
    </div>
    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
      <ArrowRight size={14} className="text-white -rotate-45" />
    </div>
  </div>
);

// ============================================================================
// REUSABLE MOBILE MENU COMPONENTS
// ============================================================================

const MobileNavLink = ({ title, active, onClick }: { title: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick} 
    className={`w-full text-left py-4 px-2 text-lg font-display font-medium border-b border-slate-100 transition-colors ${
      active ? 'text-[#A30000]' : 'text-slate-900'
    }`}
  >
    {title}
  </button>
);

const MobileAccordion = ({ title, isOpen, setOpen, children }: { title: string, isOpen: boolean, setOpen: (v: boolean) => void, children: React.ReactNode }) => (
  <div className="border-b border-slate-100">
    <button 
      onClick={() => setOpen(!isOpen)} 
      className={`w-full text-left py-4 px-2 text-lg font-display font-medium flex items-center justify-between transition-colors ${
        isOpen ? 'text-[#A30000]' : 'text-slate-900'
      }`}
    >
      <span>{title}</span>
      <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#A30000]' : 'text-slate-400'}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden pb-4"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const MobileSubLink = ({ title, onClick }: { title: string, onClick: () => void }) => (
  <button 
    onClick={onClick} 
    className="w-full text-left py-3 px-2 text-[15px] font-medium text-slate-600 hover:text-[#A30000] transition-colors"
  >
    {title}
  </button>
);

const MobileProductCard = ({ title, img, onClick, className = '' }: { title: string, img: string, onClick: () => void, className?: string }) => (
  <div onClick={onClick} className={`relative rounded-xl overflow-hidden h-28 shadow-sm cursor-pointer border border-slate-100 ${className}`}>
    <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/40" />
    <span className="absolute bottom-3 left-3 text-white text-[11px] font-bold tracking-widest uppercase drop-shadow-md">{title}</span>
  </div>
);