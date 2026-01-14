import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useInView, useMotionValue } from 'framer-motion';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Templates from './components/Templates';
import { Page } from './types';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-20px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplay(Math.floor(latest));
        });
        return () => unsubscribe();
    }, [springValue]);

    return <span ref={ref}>{display}{suffix}</span>;
};

const AppContent = () => {
  const [currentPage, setPage] = useState<Page>(Page.Home);
  const { t } = useLanguage();

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <div>
            <Hero setPage={setPage} />
            
            {/* Stats Section - Refined */}
            <div className="bg-background-light pt-10 pb-20">
               <div className="container mx-auto px-6">
                 <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto border-y border-gray-200 py-16 px-4 md:px-12"
                 >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left group cursor-default">
                            <p className="text-5xl lg:text-6xl font-serif font-bold text-text-main mb-2 group-hover:text-primary transition-colors duration-300">
                                <Counter value={120} suffix="+" />
                            </p>
                            <p className="text-text-sub text-xs lg:text-sm uppercase tracking-[0.2em] font-bold">Experienced people</p>
                        </div>
                        
                        {/* Stat 2 */}
                        <div className="flex flex-col items-center text-center group cursor-default">
                            <p className="text-5xl lg:text-6xl font-serif font-bold text-text-main mb-2 group-hover:text-primary transition-colors duration-300">
                                <Counter value={15} suffix="+" />
                            </p>
                            <p className="text-text-sub text-xs lg:text-sm uppercase tracking-[0.2em] font-bold">Years of Excellence</p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center md:items-end text-center md:text-right group cursor-default">
                            <p className="text-5xl lg:text-6xl font-serif font-bold text-text-main mb-2 group-hover:text-primary transition-colors duration-300">
                                <Counter value={50} suffix="+" />
                            </p>
                            <p className="text-text-sub text-xs lg:text-sm uppercase tracking-[0.2em] font-bold">Awards Won</p>
                        </div>
                    </div>
                 </motion.div>
               </div>
            </div>

            <Services isHomePage={true} />
            <Projects />
            
            {/* CTA Section */}
            <section className="py-32 bg-black text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">{t('cta.title')}</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light">{t('cta.desc')}</p>
                    <motion.button 
                        onClick={() => setPage(Page.Contact)}
                        className="px-10 py-4 bg-white text-text-main hover:bg-primary hover:text-white font-semibold text-base uppercase tracking-widest transition-all duration-300 rounded-full shadow-glow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('cta.btn')}
                    </motion.button>
                </div>
            </section>
          </div>
        );
      case Page.Projects:
        return <Projects />;
      case Page.Services:
        return <Services />;
      case Page.Template:
        return <Templates />;
      case Page.About:
        return <About />;
      case Page.Contact:
        return <Contact />;
      default:
        return <Projects />;
    }
  };

  return (
    <Layout currentPage={currentPage} setPage={setPage}>
      {renderContent()}
    </Layout>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;