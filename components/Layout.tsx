import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { DEFAULT_PROJECTS } from '../constants';
import QuoteForm from './QuoteForm';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, setPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
        setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navLinks = [
    { page: Page.Home, label: t('nav.home') },
    { page: Page.Projects, label: t('nav.projects') },
    { page: Page.Services, label: t('nav.services') },
    { page: Page.Template, label: t('nav.template') },
    { page: Page.About, label: t('nav.about') },
    { page: Page.Contact, label: t('nav.contact') },
  ];

  const logoUrl = "https://raw.githubusercontent.com/kounsokong/logo_gallery/refs/heads/main/shastra_construction.png";

  return (
    <div className={`flex flex-col min-h-screen ${language === 'km' ? 'font-khmer' : 'font-sans'} bg-background-light`}>
      {/* Navbar - Pill Style */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-6`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group z-50" onClick={() => setPage(Page.Home)}>
                <div className="bg-white/90 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/20 shadow-sm hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-3">
                    <img 
                        src={logoUrl} 
                        alt="Shastra Construction" 
                        className="h-8 md:h-9 w-auto object-contain" 
                    />
                    <span className="hidden md:block font-serif font-brand font-bold text-xl tracking-tight text-text-main">
                        Shastra Home<span className="text-primary">.</span>
                    </span>
                </div>
            </div>

            {/* Desktop Nav - Connected Pill Style */}
            {/* Hidden on tablet (md), visible on large screens (lg) */}
            <nav className="hidden lg:flex p-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-card border border-white/40 absolute left-1/2 transform -translate-x-1/2 z-40">
                {navLinks.map((link) => {
                    const isActive = currentPage === link.page;
                    return (
                        <button
                            key={link.page}
                            onClick={() => setPage(link.page)}
                            className={`relative px-4 xl:px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 z-10 flex items-center justify-center h-full ${
                                isActive 
                                ? 'text-white' 
                                : 'text-text-main hover:text-primary hover:bg-gray-50'
                            }`}
                        >
                             {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary rounded-full shadow-md"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    style={{ zIndex: -1 }}
                                />
                            )}
                            <div className="flex items-center gap-2">
                                {link.label}
                                {/* Badge for Projects */}
                                {link.page === Page.Projects && (
                                    <span className={`flex items-center justify-center w-5 h-5 text-[10px] font-bold rounded-full shadow-sm ${
                                        isActive ? 'bg-black text-white' : 'bg-gray-100 text-text-sub'
                                    }`}>
                                        {DEFAULT_PROJECTS.length}
                                    </span>
                                )}
                            </div>
                        </button>
                    )
                })}
            </nav>

            <div className="flex items-center gap-4 z-50">
                 {/* Language Switcher */}
                 <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full p-1 border border-white/20 shadow-sm">
                    <button 
                        onClick={() => setLanguage('en')} 
                        className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300 ${language === 'en' ? 'bg-primary text-white shadow-sm' : 'text-text-sub hover:text-text-main hover:bg-white/50'}`}
                    >
                        EN
                    </button>
                    <button 
                        onClick={() => setLanguage('km')} 
                        className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300 ${language === 'km' ? 'bg-primary text-white shadow-sm' : 'text-text-sub hover:text-text-main hover:bg-white/50'}`}
                    >
                        KH
                    </button>
                </div>

                {/* Quote Button - Visible on LG screens */}
                <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="hidden lg:block px-8 py-3 rounded-full bg-primary text-white text-sm font-bold transition-all duration-300 hover:bg-primary-dark shadow-sm hover:shadow-lg"
                >
                {t('nav.quote')}
                </button>
                
                 {/* Mobile Menu Toggle - Visible on below LG */}
                 <button 
                    className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-text-main shadow-sm border border-white/20 hover:scale-105 transition-transform"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="material-symbols-outlined text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
                </button>
            </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background-light lg:hidden flex flex-col h-screen pt-24 px-6 overflow-y-auto pb-8"
          >
             <div className="flex flex-col gap-3">
                {navLinks.map((link, i) => (
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    key={link.page}
                    onClick={() => setPage(link.page)}
                    className={`text-3xl md:text-5xl font-serif text-left py-2 border-b border-gray-200 ${currentPage === link.page ? 'text-text-main italic pl-4 border-l-4 border-l-primary' : 'text-gray-400 hover:text-primary hover:pl-2 transition-all'}`}
                >
                    {link.label}
                </motion.button>
                ))}
                
                <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => {
                        setMobileMenuOpen(false);
                        setIsQuoteModalOpen(true);
                    }}
                    className="w-full py-4 rounded-full bg-text-main text-white text-lg font-bold mt-4 shadow-xl shrink-0"
                >
                {t('nav.quote')}
                </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className=""
        >
            {children}
        </motion.div>
      </main>

      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end pointer-events-none">
        
        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="pointer-events-auto w-12 h-12 bg-white text-text-main border border-gray-200 rounded-full shadow-lg hover:border-text-main transition-colors flex items-center justify-center"
              title="Back to Top"
            >
              <span className="material-symbols-outlined text-xl">arrow_upward</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

       {/* Quote Modal */}
       <AnimatePresence>
        {isQuoteModalOpen && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsQuoteModalOpen(false)}
            >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-2xl max-h-[85dvh] md:max-h-[90vh] overflow-y-auto scrollbar-hide rounded-sm shadow-2xl relative"
            >
                <button 
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-text-main transition-colors"
                >
                <span className="material-symbols-outlined">close</span>
                </button>
                <div className="p-6 md:p-8">
                <QuoteForm />
                </div>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>

      {/* Footer - Comprehensive */}
      <footer className="bg-primary pt-20 pb-10 border-t border-white/10 text-white">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Logo & Desc */}
                <div className="space-y-6">
                     <div onClick={() => setPage(Page.Home)} className="cursor-pointer inline-block">
                        <h1 className="text-4xl font-serif font-brand font-bold tracking-tight text-white">
                            Shastra Home<span className="text-black">.</span>
                        </h1>
                     </div>
                     <p className="text-white/80 text-lg font-light leading-relaxed max-w-sm">
                        "{t('footer.desc')}"
                     </p>
                </div>

                {/* Company */}
                <div>
                     <h4 className="font-medium text-sm uppercase tracking-widest text-white mb-6">{t('footer.company')}</h4>
                     <ul className="space-y-4 text-sm text-white/80">
                        <li><button onClick={() => setPage(Page.Home)} className="hover:text-white transition-colors">{t('nav.home')}</button></li>
                        <li><button onClick={() => setPage(Page.Projects)} className="hover:text-white transition-colors">{t('nav.projects')}</button></li>
                        <li><button onClick={() => setPage(Page.Services)} className="hover:text-white transition-colors">{t('nav.services')}</button></li>
                        <li><button onClick={() => setPage(Page.Template)} className="hover:text-white transition-colors">{t('nav.template')}</button></li>
                        <li><button onClick={() => setPage(Page.About)} className="hover:text-white transition-colors">{t('nav.about')}</button></li>
                        <li><button onClick={() => setPage(Page.Contact)} className="hover:text-white transition-colors">{t('nav.contact')}</button></li>
                     </ul>
                </div>

                {/* Services */}
                <div>
                     <h4 className="font-medium text-sm uppercase tracking-widest text-white mb-6">{t('footer.services')}</h4>
                     <ul className="space-y-4 text-sm text-white/80">
                        <li><button onClick={() => setPage(Page.Services)} className="hover:text-white transition-colors text-left">{t('service.1.title')}:</button></li>
                        <li><button onClick={() => setPage(Page.Services)} className="hover:text-white transition-colors text-left">{t('service.2.title')}</button></li>
                        <li><button onClick={() => setPage(Page.Services)} className="hover:text-white transition-colors text-left">{t('service.3.title')}</button></li>
                        <li><button onClick={() => setPage(Page.Services)} className="hover:text-white transition-colors text-left">{t('service.4.title')}</button></li>
                     </ul>
                </div>

                {/* Contact */}
                <div>
                     <h4 className="font-medium text-sm uppercase tracking-widest text-white mb-6">{t('footer.contact')}</h4>
                     <ul className="space-y-6 text-sm text-white/80">
                        <li className="flex items-start gap-3">
                             <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'wght' 700" }}>location_on</span>
                             <span className="leading-relaxed">123 Construction Ave,<br/>Bangalore, India</span>
                        </li>
                        <li className="flex items-center gap-3">
                             <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'wght' 700" }}>call</span>
                             <span>+855 98 660 266 / +855 60 660 266</span>
                        </li>
                         <li className="flex items-center gap-3">
                             <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'wght' 700" }}>mail</span>
                             <a href="mailto:info@shastraconstruction.com" className="hover:text-white transition-colors">info@shastraconstruction.com</a>
                        </li>
                     </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
                 <p className="text-sm text-white/80 text-center md:text-left">
                     © 2023 Shastra Home. {t('footer.rights')}
                 </p>
                 <div className="flex gap-6 text-sm text-white/80">
                     <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                     <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
                 </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;