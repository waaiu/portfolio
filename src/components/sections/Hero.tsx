import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Server, Cloud, Database } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

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
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#f0f0f0] to-transparent rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-t from-[#f0f0f0] to-transparent rounded-full blur-2xl -z-10"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="flex-1 space-y-8 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-[#f7f7f7] px-4 py-2 rounded-full border border-[#e0e0e0]"
            >
              <span className="w-2 h-2 rounded-full bg-[#2ac56c] animate-pulse"></span>
              <span className="text-[12px] uppercase tracking-wider font-semibold text-gray-600">{t.hero.available}</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-[46px] lg:text-[72px] leading-[1.1] font-bold tracking-tight text-secondary"
            >
              {t.hero.title_line1} <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#4e4d50]"
                initial={{ backgroundPosition: '0%' }}
                animate={{ backgroundPosition: '100%' }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              >
                {t.hero.title_highlight}
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-[18px] lg:text-[20px] text-[#4e4d50] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-body"
            >
              {t.hero.intro_p1} {yearsExp}+ {t.hero.intro_p2}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <Button variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.hero.view_projects}
              </Button>
              <Button variant="transparent" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                {t.hero.contact_me}
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="pt-12 flex items-center justify-center lg:justify-start gap-8 text-[#b3b3b3]"
            >
              <motion.div
                whileHover={{ scale: 1.1, color: '#007cba' }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Terminal size={20} />
                <span className="font-mono text-sm">Java 8+</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, color: '#007cba' }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Server size={20} />
                <span className="font-mono text-sm">Spring Boot</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, color: '#007cba' }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Database size={20} />
                <span className="font-mono text-sm">Microservices</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
          >
            <motion.div
              className="relative z-10 bg-white rounded-2xl shadow-soft border border-[#e0e0e0] p-6 lg:p-10"
              whileHover={{ rotate: 0, scale: 1.02 }}
              initial={{ rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-6 border-b border-[#f0f0f0] pb-4">
                <div className="flex gap-2">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-3 h-3 rounded-full bg-[#ff5f57] cursor-pointer"
                  />
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-3 h-3 rounded-full bg-[#febc2e] cursor-pointer"
                  />
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-3 h-3 rounded-full bg-[#28c840] cursor-pointer"
                  />
                </div>
                <div className="ml-4 text-xs text-gray-400 font-mono">ServiceController.java</div>
              </div>
              <motion.div
                className="space-y-1 font-mono text-sm text-[#383838] leading-6"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } }
                }}
              >
                <motion.div variants={fadeInUp}><span className="text-purple">@RestController</span></motion.div>
                <motion.div variants={fadeInUp}><span className="text-purple">@RequestMapping</span>(<span className="text-accent">"/api/v1/payments"</span>)</motion.div>
                <motion.div variants={fadeInUp}><span className="text-purple">public class</span> <span className="text-[#b58900]">PaymentController</span> {'{'}</motion.div>

                <motion.div variants={fadeInUp} className="pl-4">
                  <span className="text-purple">@PostMapping</span>(<span className="text-accent">"/process"</span>)
                </motion.div>
                <motion.div variants={fadeInUp} className="pl-4">
                  <span className="text-purple">public</span> ResponseEntity&lt;?&gt; process(<span className="text-purple">@RequestBody</span> TxnRequest req) {'{'}
                </motion.div>
                <motion.div variants={fadeInUp} className="pl-8 text-gray-400">// Optimized processing logic</motion.div>
                <motion.div variants={fadeInUp} className="pl-8">
                  <span className="text-purple">return</span> service.execute(req);
                </motion.div>
                <motion.div variants={fadeInUp} className="pl-4">{'}'}</motion.div>
                <motion.div variants={fadeInUp}>{'}'}</motion.div>

                <div className="h-px bg-[#f0f0f0] my-2"></div>
                <motion.div
                  className="text-gray-400 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  {t.hero.card_status}
                </motion.div>
              </motion.div>
            </motion.div>
            {/* Decorative background for the code card */}
            <div className="absolute inset-0 bg-secondary rounded-2xl transform translate-x-4 translate-y-4 -z-10 opacity-5"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
