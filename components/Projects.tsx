import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-[13px] font-bold tracking-[2px] text-accent uppercase mb-3">{t.projects.portfolio}</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-secondary">{t.projects.featured}</h3>
          </div>
          <a href="https://github.com/waaiu" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-accent font-semibold hover:text-accentDark transition-colors mt-4 md:mt-0">
            {t.projects.view_github} <Github size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.projects.items.map((project) => (
            <div key={project.id} className="group bg-white rounded-xl border border-[#e0e0e0] overflow-hidden hover:shadow-soft transition-all duration-300 flex flex-col h-full">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-secondary hover:bg-accent hover:text-white transition-colors cursor-pointer" title="View Code">
                    <Github size={20} />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-secondary hover:bg-accent hover:text-white transition-colors cursor-pointer" title="View Project">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-secondary mb-3 group-hover:text-accent transition-colors">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                </h4>
                <p className="text-[#4e4d50] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#f7f7f7] text-[#383838] text-xs font-semibold rounded-full border border-[#f0f0f0]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <a href="https://github.com/waaiu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accentDark transition-colors">
            {t.projects.view_github} <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};