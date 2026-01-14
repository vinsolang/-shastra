import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  // Find CEO from the TEAM constant
  const ceo = TEAM.find(m => m.role.toLowerCase().includes('ceo')) || TEAM[0];

  const values = [
    { title: t('value.reliability'), icon: 'handshake', desc: t('value.reliability.desc') },
    { title: t('value.quality_assurance'), icon: 'verified', desc: t('value.quality_assurance.desc') },
    { title: t('value.elevated_standards'), icon: 'workspace_premium', desc: t('value.elevated_standards.desc') },
    { title: t('value.long_term_value'), icon: 'diamond', desc: t('value.long_term_value.desc') }
  ];

  return (
    <div className="bg-background-light min-h-screen">
      
      {/* New Hero Section with Image */}
      <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
        {/* Background Image - Modern Architecture with Greenery */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop" 
                alt="Modern sustainable home"
                className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-0.5 w-12 bg-primary"></div>
                    <span className="text-white/90 font-semibold tracking-[0.2em] uppercase text-sm">
                        {t('about.hero.tag')}
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1]">
                    {t('about.hero.title')}
                </h1>
                <p className="text-white/80 text-xl md:text-2xl font-light">
                    {t('about.hero.desc')}
                </p>
            </motion.div>
        </div>
      </div>

      {/* Narrative Section - The new texts */}
      <section className="py-24 bg-white relative">
         <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left Side - Visual Decoration or Title */}
                <div className="lg:col-span-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 bg-background-light border-l-4 border-primary"
                    >
                         <span className="material-symbols-outlined text-4xl text-primary mb-4">spa</span>
                         <h3 className="text-2xl font-serif font-bold text-text-main mb-4">{t('about.narrative.title')}</h3>
                         <div className="w-16 h-1 bg-text-sub/20"></div>
                    </motion.div>
                </div>

                {/* Right Side - The Text Content */}
                <div className="lg:col-span-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                    >
                        <motion.p 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            className="text-xl md:text-2xl font-serif leading-relaxed text-text-main mb-8"
                        >
                            {t('about.intro.p1')}
                        </motion.p>
                        
                        <motion.p 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            className="text-xl md:text-2xl font-serif leading-relaxed text-text-main mb-8"
                        >
                            {t('about.intro.p2')}
                        </motion.p>
                    </motion.div>
                </div>

            </div>
         </div>
      </section>

      {/* Our Goal Section - New */}
      <section className="py-24 bg-text-main text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
             <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
             >
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-6 block">
                    {t('about.goal.title')}
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed font-medium">
                    "{t('about.goal.desc')}"
                </h2>
             </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 md:py-32 bg-background-light relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 pointer-events-none opacity-50"></div>
         <div className="container mx-auto px-6 relative z-10">
            
            <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
                <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-3 block">{t('about.mv.tag')}</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main">{t('about.mv.title')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                
                {/* Mission */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group bg-white p-8 md:p-10 shadow-lg border-t-4 border-primary"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-primary text-2xl">flag</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-main">{t('about.mission.title')}</h3>
                    </div>
                    <div className="w-24 h-1 bg-primary mb-6"></div>
                    <p className="text-text-sub text-lg leading-relaxed font-light">{t('about.mission.desc')}</p>
                </motion.div>

                {/* Vision */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative group bg-white p-8 md:p-10 shadow-lg border-t-4 border-black"
                >
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-black text-2xl">visibility</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-main">{t('about.vision.title')}</h3>
                    </div>
                    <div className="w-24 h-1 bg-black mb-6"></div>
                    <p className="text-text-sub text-lg leading-relaxed font-light">{t('about.vision.desc')}</p>
                </motion.div>

            </div>
         </div>
      </section>

      {/* Core Values Strip */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-2 block">{t('values.tag')}</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-text-main">{t('values.title')}</h2>
                </div>
                <p className="text-text-sub text-lg max-w-lg leading-relaxed">
                    {t('values.desc')}
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {values.map((val, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="text-left p-6 bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform">{val.icon}</span>
                            <h4 className="font-bold text-lg text-text-main font-serif">{val.title}</h4>
                        </div>
                        <p className="text-sm text-text-sub leading-relaxed">{val.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Dedicated CEO Message Section (Moved Here) */}
      <section className="py-24 bg-background-light relative overflow-hidden">
          <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
                   {/* Image Column */}
                   <motion.div 
                        initial={{ opacity: 0, scale: 0.95, x: -20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 lg:w-5/12 relative"
                   >
                        <div className="relative aspect-[3/4] overflow-hidden shadow-2xl z-10">
                            <img src={ceo.image} alt={ceo.name} className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white z-20">
                                <p className="font-serif font-bold text-xl">{ceo.name}</p>
                                <p className="text-xs uppercase tracking-widest text-primary font-bold">{t('about.ceo.title')}</p>
                            </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/30 z-0"></div>
                   </motion.div>

                   {/* Content Column */}
                   <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-7/12"
                   >
                       <span className="material-symbols-outlined text-5xl text-primary/20 mb-6">format_quote</span>
                       <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight text-text-main mb-8 italic">
                           {t('about.ceo.message')}
                       </h2>
                       
                       <div className="space-y-6 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-300"></div>
                            
                            <div className="pl-6">
                                <p className="text-text-sub text-lg leading-relaxed font-light mb-6">
                                    "{t('about.ceo.quote_detail')}"
                                </p>
                                
                                <div className="flex items-center gap-4">
                                     <div className="h-px w-12 bg-primary"></div>
                                     <div className="font-serif text-xl font-bold text-text-main">{ceo.name}</div>
                                </div>
                            </div>
                       </div>
                   </motion.div>
              </div>
          </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Team</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-6">{t('about.leadership.title')}</h2>
                <p className="text-text-sub font-light text-lg">{t('about.leadership.desc')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {TEAM.map((member, index) => (
                    <motion.div 
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="group"
                    >
                        <div className="relative overflow-hidden mb-8 aspect-[3/4] bg-white shadow-lg">
                            <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" 
                            />
                            {/* Overlay Card */}
                            <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur p-6 shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <p className="text-sm font-light leading-relaxed text-text-sub italic">"{member.bio}"</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-serif font-bold text-text-main mb-1">{member.name}</h3>
                            <p className="text-primary text-xs font-bold uppercase tracking-widest">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;