import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { DEFAULT_PROJECTS } from '../constants';
import { api } from '../api';
import { ProjectCategory, Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>('All');
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  const categories: ProjectCategory[] = ['All', 'Residential', 'Commercial', 'Industrial', 'Renovation'];

  // Map category to translation key
  const getCategoryLabel = (cat: ProjectCategory) => {
      switch(cat) {
          case 'All': return t('projects.cat.all');
          case 'Residential': return t('projects.cat.residential');
          case 'Commercial': return t('projects.cat.commercial');
          case 'Industrial': return t('projects.cat.industrial');
          case 'Renovation': return t('projects.cat.renovation');
          case 'Eco-Friendly': return t('projects.cat.eco');
          default: return cat;
      }
  };

  useEffect(() => {
    const loadProjects = async () => {
        try {
            const data = await api.getProjects();
            if (data && Array.isArray(data) && data.length > 0) {
                setProjects(data);
            }
        } catch (e) {
            console.log("Using default projects due to error");
        } finally {
            setLoading(false);
        }
    };
    loadProjects();
  }, []);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Animation Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="py-24 bg-background-light">
      <div className="container mx-auto px-6">
        
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">{t('projects.portfolio')}</span>
                <h2 className="text-5xl md:text-6xl font-serif text-text-main">{t('projects.title')}</h2>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    filter === cat 
                        ? 'bg-primary text-white border-primary' 
                        : 'bg-transparent text-text-sub border-gray-300 hover:border-primary hover:text-primary'
                    }`}
                >
                    {getCategoryLabel(cat)}
                </button>
                ))}
            </div>
          </div>
        </div>

        {loading ? (
            <div className="flex justify-center py-20">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-text-main animate-bounce"></div>
                    <div className="w-3 h-3 rounded-full bg-text-main animate-bounce delay-100"></div>
                    <div className="w-3 h-3 rounded-full bg-text-main animate-bounce delay-200"></div>
                </div>
            </div>
        ) : (
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                    <motion.div
                        layout
                        variants={item}
                        initial="hidden"
                        animate="show"
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="group cursor-pointer flex flex-col"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-200">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="absolute top-4 right-4 z-20">
                                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-sm text-text-main`}>
                                {project.status}
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-xs font-bold text-text-sub uppercase tracking-widest">{getCategoryLabel(project.category)}</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-text-main group-hover:underline decoration-1 underline-offset-4">
                                {project.title}
                            </h3>
                            <p className="text-sm text-text-sub font-light mt-1">{project.location}</p>
                        </div>
                    </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        )}

        {!loading && filteredProjects.length === 0 && (
            <div className="py-24 text-center text-text-sub border-t border-b border-gray-200">
                <p className="text-xl font-serif italic">{t('projects.no_results')}</p>
                <button onClick={() => setFilter('All')} className="mt-4 text-primary font-bold hover:underline text-sm uppercase tracking-widest">{t('projects.view_all')}</button>
            </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 bg-background-light/95 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white max-w-6xl w-full h-full md:h-[90vh] shadow-2xl relative flex flex-col md:flex-row overflow-hidden md:rounded-sm border border-gray-200"
                >
                    <button 
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-6 right-6 z-20 w-12 h-12 bg-white flex items-center justify-center text-text-main transition-colors border border-gray-100 shadow-sm rounded-full hover:bg-black hover:text-white"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>

                    <div className="md:w-3/5 h-1/2 md:h-auto relative bg-gray-100">
                        <img 
                            src={selectedProject.image} 
                            alt={selectedProject.title} 
                            className="w-full h-full object-cover" 
                        />
                    </div>

                    <div className="p-8 md:p-16 md:w-2/5 flex flex-col overflow-y-auto bg-white justify-center">
                        <div className="mb-8">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">{getCategoryLabel(selectedProject.category)}</span>
                            <h3 className="text-4xl md:text-5xl font-serif text-text-main leading-[1.1] mb-6">{selectedProject.title}</h3>
                            <div className="flex items-center gap-2 text-text-sub text-sm mb-8 pb-8 border-b border-gray-100 font-light">
                                <span className="material-symbols-outlined text-lg">location_on</span>
                                {selectedProject.location}
                            </div>
                        </div>

                        <div className="space-y-8 text-text-sub leading-relaxed font-light">
                            <div>
                                <h4 className="font-bold text-text-main mb-2 uppercase text-xs tracking-widest">Specifications</h4>
                                <p>{selectedProject.details}</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-text-main mb-2 uppercase text-xs tracking-widest">Concept</h4>
                                <p>
                                    This {selectedProject.category.toLowerCase()} project showcases our commitment to excellence. 
                                    Designed with precision and built with high-quality materials, it stands as a testament 
                                    to modern engineering and architectural beauty. 
                                </p>
                            </div>
                        </div>
                        
                        <div className="mt-auto pt-12">
                            <button onClick={() => setSelectedProject(null)} className="w-full py-4 bg-text-main text-white font-bold text-sm uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2">
                                <span>Inquire Project</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;