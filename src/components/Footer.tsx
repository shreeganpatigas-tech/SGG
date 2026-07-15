/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  HeartHandshake, 
  FileText, 
  ChevronUp,
  Instagram,
  Linkedin,
  MessageSquare,
  Globe,
  Gauge,
  Sparkles,
  Truck,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';
import { ActivePage } from '../types';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll height to show/hide "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Safe handlers for product filtering
  const handleProductCategoryClick = (category: string, scrollToEquip = false) => {
    localStorage.setItem('selected_product_category', category);
    if (scrollToEquip) {
      localStorage.setItem('scroll_to_equipment', 'true');
    } else {
      localStorage.removeItem('scroll_to_equipment');
    }
    handleNavClick('products');
  };

  const quickLinks: { label: string; page: ActivePage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Products', page: 'products' },
    { label: 'Industries', page: 'industries' },
    { label: 'Infrastructure', page: 'infrastructure' },
    { label: 'Safety & Quality', page: 'safety' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Careers', page: 'careers' },
    { label: 'Contact', page: 'contact' }
  ];

  const productsList = [
    { label: 'Industrial Oxygen', category: 'industrial', isEquip: false },
    { label: 'Industrial Nitrogen', category: 'industrial', isEquip: false },
    { label: 'Industrial Argon', category: 'industrial', isEquip: false },
    { label: 'Carbon Dioxide', category: 'industrial', isEquip: false },
    { label: 'Medical Oxygen', category: 'medical', isEquip: false },
    { label: 'Commercial LPG', category: 'lpg', isEquip: false },
    { label: 'Gas Equipment', category: 'all', isEquip: true },
    { label: 'Accessories', category: 'all', isEquip: true },
    { label: 'Future Products', category: 'all', isEquip: false }
  ];

  const badges = [
    'ISO 9001:2015',
    'PESO Compliant',
    '35+ Years Experience',
    '1000+ Clients Served'
  ];

  const certifications = [
    { icon: <Award size={18} />, text: 'ISO 9001:2015' },
    { icon: <CheckCircle2 size={18} />, text: 'Quality Focused' },
    { icon: <ShieldCheck size={18} />, text: 'Safety First' },
    { icon: <Truck size={18} />, text: 'Reliable Supply' },
    { icon: <HeartHandshake size={18} />, text: 'Customer Commitment' }
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram size={18} />, 
      url: 'https://www.instagram.com/shreeganpatigastech?igsh=YnlvMTl4djlsMDFz',
      hoverColor: 'hover:bg-[#E1306C] hover:text-white'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={18} />, 
      url: 'https://www.linkedin.com/company/shreeganpatigastech/',
      hoverColor: 'hover:bg-[#0077B5] hover:text-white'
    },
    { 
      name: 'WhatsApp', 
      icon: <MessageSquare size={18} className="text-emerald-500 hover:text-white" />, 
      url: 'https://wa.me/917987594387',
      hoverColor: 'hover:bg-[#25D366] hover:text-white'
    },
    { 
      name: 'Email', 
      icon: <Mail size={18} />, 
      url: 'mailto:shreeganpatigastech@gmail.com',
      hoverColor: 'hover:bg-[#A30000] hover:text-white'
    },
    { 
      name: 'Phone', 
      icon: <Phone size={18} />, 
      url: 'tel:+917987594387',
      hoverColor: 'hover:bg-slate-800 hover:text-white'
    },
    { 
      name: 'Google Maps',
      icon: <MapPin size={18} />,
      url: 'https://www.google.com/maps/search/?api=1&query=SHREE+GANPATI+GASTECH+PRIVATE+LIMITED+Burhar+Shahdol+Madhya+Pradesh+484110',
      hoverColor: 'hover:bg-[#4285F4] hover:text-white'
    }
  ];

  return (
    <footer 
      className="bg-[#F8F9FA] text-slate-600 font-sans border-t border-[#E5E7EB] relative select-none"
      id="sggpl-corporate-footer"
    >
      {/* ========================================================================= */}
      {/* 1. MAIN 5-COLUMN FOOTER CONTENT */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Column 1: COMPANY (Logo, Description, Badges) */}
          <div className="lg:col-span-1 space-y-6 flex flex-col justify-between" id="footer-col-company">
            <div className="space-y-4">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center cursor-pointer focus:outline-none"
                aria-label="SGGPL Home"
              >
                <Logo className="h-11 sm:h-12" variant="dark" />
              </button>
              
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Shree Ganpati Gastech Private Limited (SGGPL) is a trusted manufacturer and supplier of industrial, medical, specialty gases, commercial LPG, and industrial gas equipment, committed to quality, safety, and reliable customer service.
              </p>
            </div>

            {/* Badges Container */}
            <div className="flex flex-wrap gap-2 pt-2">
              {badges.map((badge, idx) => (
                <span 
                  key={idx}
                  className="border border-slate-200 text-slate-500 text-[10px] font-mono font-medium tracking-wider px-2.5 py-1 rounded-sm uppercase bg-white cursor-default shadow-2xs hover:border-[#A30000]/30 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="space-y-5" id="footer-col-links">
            <h3 className="text-slate-900 text-xs font-display font-bold uppercase tracking-widest relative pb-2 border-b border-slate-200">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="relative group py-0.5 font-sans font-light text-slate-500 hover:text-[#A30000] transition-colors duration-250 cursor-pointer text-left focus:outline-none focus:text-[#A30000]"
                  >
                    <span>{link.label}</span>
                    {/* Animated Underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A30000] group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: OUR PRODUCTS */}
          <div className="space-y-5" id="footer-col-products">
            <h3 className="text-slate-900 text-xs font-display font-bold uppercase tracking-widest relative pb-2 border-b border-slate-200">
              Our Products
            </h3>
            <ul className="space-y-2.5 text-xs">
              {productsList.map((product, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleProductCategoryClick(product.category, product.isEquip)}
                    className="relative group py-0.5 font-sans font-light text-slate-500 hover:text-[#A30000] transition-colors duration-250 cursor-pointer text-left focus:outline-none focus:text-[#A30000]"
                  >
                    <span>{product.label}</span>
                    {/* Animated Underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A30000] group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CONTACT INFORMATION */}
          <div className="space-y-5" id="footer-col-contact">
            <h3 className="text-slate-900 text-xs font-display font-bold uppercase tracking-widest relative pb-2 border-b border-slate-200">
              Corporate Office
            </h3>
            <div className="space-y-4 text-xs font-light text-slate-500">
              
              {/* Address */}
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-[#A30000] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Burhar, Shahdol,<br />
                  Madhya Pradesh,<br />
                  India – 484110
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-center group">
                <Phone size={16} className="text-[#A30000] shrink-0" />
                <a 
                  href="tel:+917987594387" 
                  className="hover:text-[#A30000] transition-colors font-medium font-sans"
                  aria-label="Call corporate desk"
                >
                  +91 7987594387
                </a>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-center group">
                <Mail size={16} className="text-[#A30000] shrink-0" />
                <a 
                  href="mailto:shreeganpatigastech@gmail.com" 
                  className="hover:text-[#A30000] transition-colors break-all"
                  aria-label="Email corporate desk"
                >
                  shreeganpatigastech@gmail.com
                </a>
              </div>

              {/* Hours */}
              <div className="flex gap-3 items-start">
                <Clock size={16} className="text-[#A30000] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-700">Monday – Saturday</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">9:30 AM – 6:30 PM IST</p>
                </div>
              </div>

            </div>
          </div>

          {/* Column 5: CONNECT WITH US (Socials) */}
          <div className="space-y-5" id="footer-col-connect">
            <h3 className="text-slate-900 text-xs font-display font-bold uppercase tracking-widest relative pb-2 border-b border-slate-200">
              Follow SGGPL
            </h3>
            
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              Stay connected with us for company updates, industry insights, new product announcements, and career opportunities.
            </p>

            {/* Premium Interactive Social Media Buttons */}
            <div className="grid grid-cols-6 gap-2 pt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 bg-white border border-slate-200/60 rounded-sm flex items-center justify-center text-slate-400 shadow-sm transition-all duration-300 transform hover:-translate-y-1 ${social.hoverColor}`}
                  aria-label={`Visit SGGPL ${social.name}`}
                  title={`SGGPL on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CERTIFICATIONS STRIP (Horizontal Centered Layout) */}
      {/* ========================================================================= */}
      <div className="border-t border-slate-200/50 border-b border-slate-200/50 bg-white/60 py-6" id="sggpl-certs-strip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 lg:gap-8 text-xs text-slate-500">
            {certifications.map((cert, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 font-sans font-medium text-slate-600 transition-colors hover:text-[#A30000] cursor-default"
              >
                <div className="text-[#A30000] shrink-0">
                  {cert.icon}
                </div>
                <span className="uppercase tracking-wider text-[11px] font-semibold">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. BOTTOM BAR (Copyright & Legal Navs) */}
      {/* ========================================================================= */}
      <div className="bg-white text-slate-400 text-[11px] py-8" id="sggpl-bottom-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Copyright text */}
          <div className="font-sans font-light text-center sm:text-left">
            <span>© 2026 Shree Ganpati Gastech Private Limited. All Rights Reserved.</span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-slate-400 font-sans font-light">
            <button 
              onClick={() => handleNavClick('privacy')}
              className="hover:text-[#A30000] transition-colors focus:outline-none"
              aria-label="Read our Privacy Policy"
            >
              Privacy Policy
            </button>
            <span className="text-slate-200 select-none">•</span>
            <button 
              onClick={() => handleNavClick('terms')}
              className="hover:text-[#A30000] transition-colors focus:outline-none"
              aria-label="Read our Terms and Conditions"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-200 select-none">•</span>
            <button 
              onClick={() => handleNavClick('home')}
              className="hover:text-[#A30000] transition-colors focus:outline-none"
              aria-label="View Sitemap"
            >
              Sitemap
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. FLOATING BACK TO TOP BUTTON (Smooth Reveal & Scroll) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={handleScrollToTop}
            className="fixed bottom-24 right-6 z-50 w-11 h-11 bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-[#A30000] hover:border-[#A30000] rounded-sm flex items-center justify-center shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#A30000] cursor-pointer"
            aria-label="Scroll Back to Top"
            title="Scroll Back to Top"
          >
            <ChevronUp size={20} className="stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

    </footer>
  );
}