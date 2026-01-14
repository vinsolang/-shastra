import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { DEFAULT_TEMPLATES } from '../constants';
import { api } from '../api';
import { Template } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Templates: React.FC = () => {
    const [templates, setTemplates] = useState<Template[]>(DEFAULT_TEMPLATES);
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
    const [loading, setLoading] = useState(true);
    const { t } = useLanguage();

    useEffect(() => {
        const loadTemplates = async () => {
            try {
                const data = await api.getTemplates();
                if (data && Array.isArray(data) && data.length > 0) {
                    setTemplates(data);
                }
            } catch (e) {
                console.log("Using default templates due to error");
            } finally {
                setLoading(false);
            }
        };
        loadTemplates();
    }, []);

    // Stagger Variants
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15
          }
        }
      };
    
      const item: Variants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 15 } }
      };

    return (
        <div className="bg-background-light min-h-screen">
             {/* Premium Header Section */}
             <div className="relative bg-background-dark pt-40 pb-56 px-6 overflow-hidden">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-soft-light"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background-dark/80 to-background-dark pointer-events-none"></div>
                
                {/* Ambient Light */}
                <div className="absolute -top-[20%] right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
                <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">
                            {t('templates.tag')}
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight leading-none">
                            {t('templates.title')}
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            {t('templates.desc')}
                        </p>
                    </motion.div>
                </div>
             </div>

             <div className="container mx-auto px-6 -mt-32 relative z-20 pb-24">
                 
                 {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-white animate-bounce"></div>
                            <div className="w-3 h-3 rounded-full bg-white animate-bounce delay-100"></div>
                            <div className="w-3 h-3 rounded-full bg-white animate-bounce delay-200"></div>
                        </div>
                    </div>
                 ) : (
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {templates.map((template) => (
                            <motion.div 
                                key={template.id}
                                variants={item}
                                whileHover={{ y: -10 }}
                                className="group bg-white rounded-sm shadow-card hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer overflow-hidden"
                                onClick={() => setSelectedTemplate(template)}
                            >
                                <div className="relative h-[280px] overflow-hidden">
                                    <motion.img 
                                        src={template.image} 
                                        alt={template.title} 
                                        loading="lazy"
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                                        whileHover={{ scale: 1.05 }}
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    
                                    <div className="absolute top-0 right-0 p-4">
                                        <div className="bg-white/90 backdrop-blur-md text-text-main text-sm font-bold px-4 py-2 shadow-sm border border-white/40">
                                            {template.price}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                         <span className="px-3 py-1 bg-black/80 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest border border-white/10">
                                            {template.type}
                                         </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-serif font-bold text-text-main mb-2 group-hover:text-primary transition-colors">{template.title}</h3>
                                        <div className="h-0.5 w-12 bg-gray-100 group-hover:bg-primary transition-colors duration-500"></div>
                                    </div>
                                    
                                    <div className="flex items-center text-text-sub text-sm mb-8 font-light tracking-wide">
                                        <span className="material-symbols-outlined text-lg mr-2 text-primary/80">straighten</span>
                                        {template.size}
                                    </div>
                                    
                                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                                        <button className="text-sm font-semibold uppercase tracking-widest text-text-main group-hover:text-primary transition-colors flex items-center gap-2">
                                            {t('templates.spec')}
                                            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                                        </button>
                                        <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-text-main hover:bg-primary hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-sm">shopping_bag</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                 )}
             </div>

             {/* Details Modal */}
             <AnimatePresence>
                {selectedTemplate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedTemplate(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background-dark/90 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-sm overflow-hidden max-w-5xl w-full shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
                        >
                             <button 
                                onClick={() => setSelectedTemplate(null)}
                                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 hover:bg-white backdrop-blur rounded-full flex items-center justify-center text-text-main shadow-md transition-all hover:scale-110"
                             >
                                <span className="material-symbols-outlined">close</span>
                             </button>
                             
                             <div className="md:w-3/5 h-64 md:h-auto relative bg-gray-100">
                                <img src={selectedTemplate.image} alt={selectedTemplate.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
                             </div>
                             
                             <div className="p-8 md:p-12 md:w-2/5 flex flex-col bg-white overflow-y-auto">
                                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3">{selectedTemplate.type}</span>
                                <h3 className="text-4xl md:text-5xl font-serif text-text-main mb-6 leading-tight">{selectedTemplate.title}</h3>
                                <p className="text-text-sub text-sm md:text-base mb-8 leading-relaxed font-light">
                                    {selectedTemplate.type} {t('templates.modal.desc')}
                                </p>
                                
                                <div className="space-y-4 mb-10">
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-500 text-xs uppercase font-bold">{t('templates.area')}</span>
                                        <span className="text-text-main font-serif font-bold text-lg">{selectedTemplate.size}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                        <span className="text-gray-500 text-xs uppercase font-bold">{t('templates.cost')}</span>
                                        <span className="text-text-main font-serif font-bold text-lg">{selectedTemplate.price}</span>
                                    </div>
                                </div>

                                <div className="mt-auto space-y-3">
                                    <button className="w-full py-4 bg-text-main text-white font-bold text-sm uppercase tracking-widest hover:bg-primary transition-colors shadow-lg">
                                        {t('templates.buy')}
                                    </button>
                                    <button className="w-full py-3 border border-gray-200 text-text-sub hover:text-text-main hover:border-text-main font-bold text-xs uppercase tracking-widest transition-colors">
                                        Download PDF Brochure
                                    </button>
                                </div>
                             </div>
                        </motion.div>
                    </motion.div>
                )}
             </AnimatePresence>
        </div>
    )
}

export default Templates;