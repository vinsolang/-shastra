import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import QuoteForm from './QuoteForm';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-background-light min-h-screen">
      
      {/* Immersive Header Section */}
      <div className="relative bg-background-dark pt-40 pb-64 px-6 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background-dark/80 to-background-dark pointer-events-none"></div>
        
        {/* Ambient Light */}
        <div className="absolute -top-[20%] left-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto relative z-10 text-center max-w-5xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">
                    {t('contact.tag')}
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight leading-none">
                     {t('contact.hero.title.part1')}<span className="text-primary">{t('contact.hero.title.part2')}</span>
                </h1>
                <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                   {t('contact.desc')}
                </p>
            </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-32 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Contact Info (Left - 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 shadow-lg border-l-4 border-primary relative overflow-hidden group"
             >
                <div className="relative z-10">
                    <span className="material-symbols-outlined text-4xl text-primary mb-4">location_on</span>
                    <h3 className="font-serif font-bold text-text-main text-2xl mb-2">{t('contact.office')}</h3>
                    <p className="text-text-sub leading-relaxed">123 Construction Ave,<br/>Industrial Park,<br/>Bangalore, India 560001</p>
                </div>
                <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-[150px] text-primary">location_on</span>
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 shadow-lg border-l-4 border-black relative overflow-hidden group"
             >
                 <div className="relative z-10">
                    <span className="material-symbols-outlined text-4xl text-black mb-4">call</span>
                    <h3 className="font-serif font-bold text-text-main text-2xl mb-2">{t('contact.phone')}</h3>
                    <p className="text-text-sub text-lg font-medium">+855 98 660 266 / +855 60 660 266</p>
                    <p className="text-sm text-gray-400 mt-1">Mon-Fri from 8am to 5pm</p>
                </div>
                 <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-[150px] text-black">call</span>
                </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 shadow-lg border-l-4 border-gray-300 relative overflow-hidden group"
             >
                 <div className="relative z-10">
                    <span className="material-symbols-outlined text-4xl text-gray-400 mb-4">mail</span>
                    <h3 className="font-serif font-bold text-text-main text-2xl mb-2">{t('contact.email')}</h3>
                    <a href="mailto:info@shastraconstruction.com" className="text-text-sub text-lg hover:text-primary transition-colors">info@shastraconstruction.com</a>
                </div>
                 <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity">
                    <span className="material-symbols-outlined text-[150px] text-gray-400">mail</span>
                </div>
             </motion.div>
          </div>

          {/* Form (Right - 3 cols) */}
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="lg:col-span-3 bg-white p-8 md:p-12 shadow-2xl rounded-sm"
          >
            <QuoteForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;