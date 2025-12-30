import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
           <h2 className="text-[13px] font-bold tracking-[2px] text-accent uppercase mb-3">{t.experience.career_path}</h2>
           <h3 className="text-3xl lg:text-4xl font-bold text-secondary">{t.experience.work_exp}</h3>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-[#e0e0e0] ml-3 md:ml-6 space-y-12">
            {t.experience.items.map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-12 group">
                {/* Dot */}
                <div className="absolute -left-[5px] top-2 h-[11px] w-[11px] rounded-full bg-white border-2 border-accent group-hover:bg-accent transition-colors duration-300"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-secondary group-hover:text-accent transition-colors duration-300">
                      {exp.role}
                    </h4>
                    <div className="flex items-center gap-2 text-[#4e4d50] mt-1">
                      <Briefcase size={14} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#b3b3b3] font-mono mt-2 sm:mt-0 bg-[#fafafa] px-3 py-1 rounded-full border border-[#f0f0f0]">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <div className="bg-[#fafafa] p-6 rounded-lg border border-[#f0f0f0] shadow-sm hover:shadow-soft transition-shadow duration-300">
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#4e4d50] text-[15px] leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};