import React, { useMemo } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const skills = [
  "Java 8+", 
  "Spring Boot", 
  "Microservices", 
  "Spring Cloud",
  "JHipster",
  "React.js", 
  "Docker", 
  "Oracle Database", 
  "Redis & RabbitMQ", 
  "Restful & SOAP"
];

export const About: React.FC = () => {
  const { t } = useLanguage();
  
  const yearsExp = useMemo(() => {
    const startDate = new Date('2021-04-01');
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25)); 
    return diffYears;
  }, []);

  return (
    <section id="about" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 order-2 lg:order-1 w-full">
            <h3 className="text-center lg:text-left text-[13px] font-bold tracking-[2px] text-accent uppercase mb-6">{t.about.tech_arsenal}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#e0e0e0] shadow-sm hover:border-accent hover:shadow-md transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-full bg-[#f0f9ff] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-semibold text-secondary">{skill}</span>
                </div>
              ))}
            </div>
            
            {/* Decorative terminal line */}
            <div className="mt-8 bg-[#111111] rounded-lg p-4 font-mono text-xs text-gray-400">
               <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> java -version <br/>
               <span className="text-gray-300">java version "17.0.2" LTS</span> <br/>
               <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> docker ps <br/>
               <span className="text-gray-300">CONTAINER ID  IMAGE        STATUS</span><br/>
               <span className="text-gray-300">a1b2c3d4e5f6  oracle/db    Up 2 days</span>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2 space-y-6">
            <h2 className="text-[13px] font-bold tracking-[2px] text-accent uppercase mb-2">{t.about.title}</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              {t.about.header} <br/> {t.about.header_br}
            </h3>
            <div className="space-y-4 text-[#4e4d50] text-lg font-body leading-relaxed">
              <p>
                {t.about.p1_pre} {yearsExp}+ {t.about.p1_post}
              </p>
              <p>
                {t.about.p2}
              </p>
              <p>
                {t.about.p3}
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-4">
               <div className="p-4 bg-white border border-[#e0e0e0] rounded-lg">
                 <div className="text-3xl font-bold text-secondary mb-1">{yearsExp}+</div>
                 <div className="text-xs text-gray-500 uppercase tracking-wider">{t.about.years_exp}</div>
               </div>
               <div className="p-4 bg-white border border-[#e0e0e0] rounded-lg">
                 <div className="text-3xl font-bold text-secondary mb-1">5x</div>
                 <div className="text-xs text-gray-500 uppercase tracking-wider">{t.about.perf_boost}</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};