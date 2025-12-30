import React, { useMemo } from 'react';
import { ArrowRight, Terminal, Server, Cloud, Database } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const yearsExp = useMemo(() => {
    const startDate = new Date('2021-04-01');
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25)); 
    return diffYears;
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#f0f0f0] to-transparent rounded-full blur-3xl opacity-50 -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-t from-[#f0f0f0] to-transparent rounded-full blur-2xl opacity-50 -z-10" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#f7f7f7] px-4 py-2 rounded-full border border-[#e0e0e0]">
              <span className="w-2 h-2 rounded-full bg-[#2ac56c] animate-pulse"></span>
              <span className="text-[12px] uppercase tracking-wider font-semibold text-gray-600">{t.hero.available}</span>
            </div>
            
            <h1 className="text-[46px] lg:text-[72px] leading-[1.1] font-bold tracking-tight text-secondary">
              {t.hero.title_line1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#4e4d50]">
                {t.hero.title_highlight}
              </span>
            </h1>
            
            <p className="text-[18px] lg:text-[20px] text-[#4e4d50] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-body">
              {t.hero.intro_p1} {yearsExp}+ {t.hero.intro_p2}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.hero.view_projects}
              </Button>
              <Button variant="transparent" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.hero.contact_me}
              </Button>
            </div>
            
            <div className="pt-12 flex items-center justify-center lg:justify-start gap-8 text-[#b3b3b3]">
               <div className="flex items-center gap-2">
                 <Terminal size={20} />
                 <span className="font-mono text-sm">Java 8+</span>
               </div>
               <div className="flex items-center gap-2">
                 <Server size={20} />
                 <span className="font-mono text-sm">Spring Boot</span>
               </div>
               <div className="flex items-center gap-2">
                 <Database size={20} />
                 <span className="font-mono text-sm">Microservices</span>
               </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative z-10 bg-white rounded-2xl shadow-soft border border-[#e0e0e0] p-6 lg:p-10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
               <div className="flex items-center gap-2 mb-6 border-b border-[#f0f0f0] pb-4">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                 </div>
                 <div className="ml-4 text-xs text-gray-400 font-mono">ServiceController.java</div>
               </div>
               <div className="space-y-1 font-mono text-sm text-[#383838] leading-6">
                  <div><span className="text-purple">@RestController</span></div>
                  <div><span className="text-purple">@RequestMapping</span>(<span className="text-accent">"/api/v1/payments"</span>)</div>
                  <div><span className="text-purple">public class</span> <span className="text-[#b58900]">PaymentController</span> {'{'}</div>
                  
                  <div className="pl-4">
                    <span className="text-purple">@PostMapping</span>(<span className="text-accent">"/process"</span>)
                  </div>
                  <div className="pl-4">
                    <span className="text-purple">public</span> ResponseEntity&lt;?&gt; process(<span className="text-purple">@RequestBody</span> TxnRequest req) {'{'}
                  </div>
                  <div className="pl-8 text-gray-400">// Optimized processing logic</div>
                  <div className="pl-8">
                     <span className="text-purple">return</span> service.execute(req);
                  </div>
                  <div className="pl-4">{'}'}</div>
                  <div>{'}'}</div>

                   <div className="h-px bg-[#f0f0f0] my-2"></div>
                  <div className="text-gray-400 italic">
                    {t.hero.card_status}
                  </div>
               </div>
            </div>
            {/* Decorative background for the code card */}
            <div className="absolute inset-0 bg-secondary rounded-2xl transform translate-x-4 translate-y-4 -z-10 opacity-5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};