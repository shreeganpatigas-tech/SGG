/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Industries from './pages/Industries';
import Infrastructure from './pages/Infrastructure';
import Safety from './pages/Safety';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import { ActivePage } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const fullHash = window.location.hash.replace('#', '');
      const hashStr = fullHash.split('?')[0];
      
      const validPages: ActivePage[] = [
        'home',
        'about',
        'products',
        'industries',
        'infrastructure',
        'safety',
        'careers',
        'contact',
        'privacy',
        'terms'
      ];
      
      if (hashStr === 'quote') {
        window.location.hash = 'contact?tab=rfq';
        setActivePage('contact');
      } else if (hashStr === 'contact') {
        setActivePage('contact');
      } else if (validPages.includes(hashStr as ActivePage)) {
        setActivePage(hashStr as ActivePage);
      } else if (hashStr === '') {
        setActivePage('home');
      } else {
        // Simple fallback
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // trigger on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: ActivePage) => {
    if (page === 'quote') {
      window.location.hash = 'contact?tab=rfq';
      setActivePage('contact');
    } else {
      window.location.hash = page;
      setActivePage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'about':
        return <About onNavigate={navigateTo} />;
      case 'products':
        return <Products onNavigate={navigateTo} />;
      case 'industries':
        return <Industries onNavigate={navigateTo} />;
      case 'infrastructure':
        return <Infrastructure onNavigate={navigateTo} />;
      case 'safety':
        return <Safety onNavigate={navigateTo} />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      default:
        return <NotFound onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Premium Header */}
      <Navbar activePage={activePage} onNavigate={navigateTo} />

      {/* Breadcrumbs - Elegant, Minimal, Visible on all pages except Home */}
      {activePage !== 'home' && (
        <div className="bg-slate-50 border-b border-slate-200/50 py-3" id="sggpl-breadcrumbs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-[12px] text-slate-500 font-sans">
            <button 
              onClick={() => navigateTo('home')}
              className="hover:text-[#A30000] font-medium transition-colors cursor-pointer uppercase tracking-wider"
            >
              Home
            </button>
            <span className="text-slate-300 font-light">/</span>
            <span className="text-slate-700 font-semibold uppercase tracking-wider">
              {activePage === 'safety' ? 'Safety & Quality' : 
               activePage === 'infrastructure' ? 'Infrastructure' : 
               activePage === 'careers' ? 'Careers' : 
               activePage === 'contact' ? 'Contact Us' : 
               activePage === 'privacy' ? 'Privacy Policy' : 
               activePage === 'terms' ? 'Terms & Conditions' : 
               activePage.charAt(0).toUpperCase() + activePage.slice(1)}
            </span>
          </div>
        </div>
      )}

      {/* Main Content Area with animated page transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}