import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface ServicesProps {
  isHomePage?: boolean;
}

const Services: React.FC<ServicesProps> = ({ isHomePage = false }) => {
  const { t } = useLanguage();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 15 } }
  };

  const services = [
    { 
        id: 1, 
        icon: "architecture", 
        title: t('service.1.title'), 
        description: t('service.1.desc'),
    },
    { 
        id: 2, 
        icon: "home_work", 
        title: t('service.2.title'), 
        description: t('service.2.desc'),
    },
    { 
        id: 3, 
        icon: "engineering", 
        title: t('service.3.title'), 
        description: t('service.3.desc'),
    },
    { 
        id: 4, 
        icon: "format_paint", 
        title: t('service.4.title'), 
        description: t('service.4.desc'),
    },
  ];

  // Helper to style the brand name in the intro text
  const renderIntroText = () => {
      const text = t('services.intro_text');
      const brand = "Shastra Home";
      
      if (text.includes(brand)) {
          return (
              <>
                <span className="text-3xl md:text-5xl font-serif font-bold text-primary mr-2 align-baseline">
                    {brand}
                </span>
                {text.replace(brand, '')}
              </>
          );
      }
      return text;
  };

  return (
    <>
        <section className={`bg-background-light overflow-hidden ${isHomePage ? 'py-20 md:py-24' : 'pt-40 pb-20'}`}>
        <div className="container mx-auto px-6">
            
            {/* Editorial Heading Section - Only on Home Page */}
            {isHomePage && (
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 md:mb-20">
                    <div className="max-w-4xl">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl lg:text-7xl font-serif text-text-main leading-[1.1]"
                        >
                            {t('services.hero.title.part1')} <span className="italic font-light">{t('services.hero.title.part2')}</span> {t('services.hero.title.part3')} <span className="italic font-light">{t('services.hero.title.part4')}</span> {t('services.hero.title.part5')}
                        </motion.h2>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-10 lg:mt-4 shrink-0"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-text-sub block mb-2">{t('services.tag')}</span>
                        <a href="#services-grid" className="text-sm font-bold border-b border-text-main pb-1 hover:text-primary hover:border-primary transition-colors">
                            Scroll Down
                        </a>
                    </motion.div>
                </div>
            )}

            {/* Intro Text for Services Page Only */}
            {!isHomePage && (
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 max-w-4xl mx-auto text-center"
                 >
                     <p className="text-text-sub text-lg md:text-xl font-light leading-relaxed mb-16">
                        {renderIntroText()}
                     </p>
                     
                     <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main">
                        {t('services.intro.list_title')}
                     </h2>
                 </motion.div>
            )}

            <motion.div 
                id="services-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto"
            >
            {services.map((service) => (
                <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -8 }}
                className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col overflow-hidden rounded-sm p-8"
                >
                    {/* Icon - Moved here since image is gone */}
                    <div className="w-14 h-14 bg-background-light rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                        <span className="material-symbols-outlined text-primary text-3xl group-hover:text-white transition-colors duration-300">{service.icon}</span>
                    </div>

                    <div className="flex flex-col flex-grow">
                        <h3 className="text-2xl font-serif font-bold text-text-main mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-text-sub leading-relaxed text-base font-light">
                            {service.description}
                        </p>
                    </div>
                </motion.div>
            ))}
            </motion.div>
        </div>
        </section>

        {/* Why Choose Us Section - Simplified */}
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="max-w-4xl mx-auto"
                >
                    <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 block">{t('why.tag')}</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-6">{t('why.title')}</h2>
                    <p className="text-text-sub text-lg leading-relaxed font-light">
                        {t('why.desc')}
                    </p>
                </motion.div>
            </div>
        </section>
    </>
  );
};

export default Services;