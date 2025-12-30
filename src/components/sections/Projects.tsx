import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
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
      delayChildren: 0.1
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
} as const;

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div>
            <motion.h2
              variants={fadeInUp}
              className="text-[13px] font-bold tracking-[2px] text-accent uppercase mb-3"
            >
              {t.projects.portfolio}
            </motion.h2>
            <motion.h3
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-bold text-secondary"
            >
              {t.projects.featured}
            </motion.h3>
          </div>
          <motion.a
            variants={fadeInUp}
            href="https://github.com/waaiu"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-accent font-semibold hover:text-accentDark transition-colors mt-4 md:mt-0"
            whileHover={{ x: 5 }}
          >
            {t.projects.view_github} <Github size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {t.projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white rounded-xl border border-[#e0e0e0] overflow-hidden flex flex-col h-full"
              variants={cardVariant}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                borderColor: '#007cba'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-secondary/80 flex items-center justify-center gap-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-secondary hover:bg-accent hover:text-white transition-colors cursor-pointer"
                    title="View Code"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full text-secondary hover:bg-accent hover:text-white transition-colors cursor-pointer"
                    title="View Project"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <motion.h4
                  className="text-xl font-bold text-secondary mb-3 group-hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                </motion.h4>
                <p className="text-[#4e4d50] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <motion.div
                  className="flex flex-wrap gap-2 mt-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } }
                  }}
                >
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-[#f7f7f7] text-[#383838] text-xs font-semibold rounded-full border border-[#f0f0f0]"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      whileHover={{
                        backgroundColor: '#007cba',
                        color: '#fff',
                        borderColor: '#007cba'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 text-center md:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/waaiu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accentDark transition-colors">
            {t.projects.view_github} <Github size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
