import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const skillCardVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 }
  }
} as const;

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

          <motion.div
            className="flex-1 order-2 lg:order-1 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-center lg:text-left text-[13px] font-bold tracking-[2px] text-accent uppercase mb-6"
            >
              {t.about.tech_arsenal}
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={skillCardVariant}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(0,124,186,0.15)',
                    borderColor: '#007cba'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#e0e0e0] shadow-sm cursor-pointer transition-colors group"
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-[#f0f9ff] flex items-center justify-center text-accent"
                    whileHover={{ backgroundColor: '#007cba', color: '#fff' }}
                  >
                    <CheckCircle2 size={16} />
                  </motion.div>
                  <span className="font-semibold text-secondary">{skill}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative terminal line */}
            <motion.div
              className="mt-8 bg-[#111111] rounded-lg p-4 font-mono text-xs text-gray-400 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> java -version
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <span className="text-gray-300">java version "17.0.2" LTS</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
              >
                <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> docker ps
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
              >
                <span className="text-gray-300">CONTAINER ID  IMAGE        STATUS</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
              >
                <span className="text-gray-300">a1b2c3d4e5f6  oracle/db    Up 2 days</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 order-1 lg:order-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-[13px] font-bold tracking-[2px] text-accent uppercase mb-2"
            >
              {t.about.title}
            </motion.h2>
            <motion.h3
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-secondary mb-4"
            >
              {t.about.header} <br /> {t.about.header_br}
            </motion.h3>
            <motion.div
              className="space-y-4 text-[#4e4d50] text-lg font-body leading-relaxed"
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp}>
                {t.about.p1_pre} {yearsExp}+ {t.about.p1_post}
              </motion.p>
              <motion.p variants={fadeInUp}>
                {t.about.p2}
              </motion.p>
              <motion.p variants={fadeInUp}>
                {t.about.p3}
              </motion.p>
            </motion.div>

            <motion.div
              className="pt-6 grid grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                className="p-4 bg-white border border-[#e0e0e0] rounded-lg cursor-pointer"
              >
                <motion.div
                  className="text-3xl font-bold text-secondary mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100 }}
                >
                  {yearsExp}+
                </motion.div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{t.about.years_exp}</div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                className="p-4 bg-white border border-[#e0e0e0] rounded-lg cursor-pointer"
              >
                <motion.div
                  className="text-3xl font-bold text-secondary mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                >
                  5x
                </motion.div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{t.about.perf_boost}</div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
