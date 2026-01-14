import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Page } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  setPage: (page: Page) => void;
}

const HERO_SLIDES = [
  {
    name: "Capsule",
    location: "Kirirom, Cambodia",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/80/68/17/escape-to-romhaey-kirirom.jpg?w=1400&h=-1&s=1"
  },
  {
    name: "Cabin Modular",
    location: "Nordic Woodlands",
    image: "https://images2.dwell.com/photos/6133431940611203072/6862188582231404544/original.jpg?auto=format&q=35&w=1600"
  },
  {
    name: "Modern-villa",
    location: "Ubud, Bali",
    image: "https://images.pexels.com/photos/13203194/pexels-photo-13203194.jpeg"
  }
];

const Hero: React.FC<HeroProps> = ({ setPage }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-background-dark">
      
      {/* Background Image - Full Screen Parallax with Crossfade */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10"></div>
        
        <AnimatePresence mode="popLayout">
            <motion.img 
                key={currentSlide}
                src={HERO_SLIDES[currentSlide].image}
                alt={HERO_SLIDES[currentSlide].name}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full object-cover absolute inset-0"
            />
        </AnimatePresence>
      </motion.div>

      {/* Top Labels */}
      <motion.div 
        style={{ opacity }}
        className="absolute top-28 left-0 right-0 px-6 container mx-auto flex justify-between text-xs font-bold uppercase tracking-widest text-white/90 z-20 pointer-events-none mix-blend-plus-lighter"
      >
          <span>Dream big,<br/>Live simple.</span>
          <span className="text-right">Masterpiece<br/>of Architecture</span>
          <span className="hidden md:block text-right">Space to Recharge<br/>life's batteries.</span>
      </motion.div>

      {/* Main Title */}
      <div className="relative z-20 text-center px-4 w-full">
        <motion.h1 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[12vw] md:text-[14vw] leading-[0.8] font-bold text-white tracking-tighter select-none drop-shadow-2xl mix-blend-overlay"
        >
            Shastra Home<span className="text-primary">.</span> 
        </motion.h1>
      </div>

      {/* Floating Controls */}
      <div className="absolute bottom-10 left-0 right-0 px-6 container mx-auto flex flex-col md:flex-row justify-between items-end z-20 gap-4">
            <div className="flex gap-2 overflow-x-auto p-2 w-full md:w-auto scrollbar-hide">
                {HERO_SLIDES.map((slide, i) => (
                    <button 
                        key={i} 
                        onClick={() => setCurrentSlide(i)}
                        className={`px-5 py-2.5 rounded-full text-xs font-bold backdrop-blur-md transition-all border border-white/10 whitespace-nowrap relative ${
                            i === currentSlide 
                                ? 'bg-white text-text-main shadow-lg scale-105 z-10' 
                                : 'bg-black/30 text-white hover:bg-black/50 hover:border-white/30'
                        }`}
                    >
                        {slide.name}
                        {i === currentSlide && (
                             <motion.div 
                                layoutId="activeSlide"
                                className="absolute inset-0 border-2 border-primary/20 rounded-full" 
                             />
                        )}
                    </button>
                ))}
            </div>
            
            <AnimatePresence mode='wait'>
                <motion.span 
                    key={currentSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-white/80 text-xs font-bold drop-shadow-md hidden md:block uppercase tracking-widest bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10"
                >
                    {HERO_SLIDES[currentSlide].location}
                </motion.span>
            </AnimatePresence>
        </div>

    </section>
  );
};

export default Hero;