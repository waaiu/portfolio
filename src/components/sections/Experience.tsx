import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const timelineItem = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
} as const;

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-[13px] font-bold tracking-[2px] text-accent uppercase mb-3"
          >
            {t.experience.career_path}
          </motion.h2>
          <motion.h3
            variants={fadeInUp}
            className="text-3xl lg:text-4xl font-bold text-secondary"
          >
            {t.experience.work_exp}
          </motion.h3>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="relative border-l border-[#e0e0e0] ml-3 md:ml-6 space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {t.experience.items.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative pl-8 md:pl-12 group"
                variants={timelineItem}
              >
                {/* Dot with animation */}
                <motion.div
                  className="absolute -left-[5px] top-2 h-[11px] w-[11px] rounded-full bg-white border-2 border-accent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.5, backgroundColor: '#007cba' }}
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <motion.h4
                      className="text-xl font-bold text-secondary group-hover:text-accent transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {exp.role}
                    </motion.h4>
                    <div className="flex items-center gap-2 text-[#4e4d50] mt-1">
                      <Briefcase size={14} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <motion.div
                    className="flex items-center gap-2 text-sm text-[#b3b3b3] font-mono mt-2 sm:mt-0 bg-[#fafafa] px-3 py-1 rounded-full border border-[#f0f0f0]"
                    whileHover={{ scale: 1.05, borderColor: '#007cba' }}
                  >
                    <Calendar size={14} />
                    {exp.period}
                  </motion.div>
                </div>

                <motion.div
                  className="bg-[#fafafa] p-6 rounded-lg border border-[#f0f0f0] shadow-sm"
                  whileHover={{
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                    borderColor: '#007cba',
                    y: -2
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3 text-[#4e4d50] text-[15px] leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <motion.span
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + 0.2 }}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
