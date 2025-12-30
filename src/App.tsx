import React, { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  useEffect(() => {
    const titles = [
      'Pham Huy Dat | Java Developer',
      '> Building scalable backends...',
      '> Spring Boot | Microservices',
      '> Open for opportunities!',
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentTitle = '';

    const typeEffect = () => {
      const fullTitle = titles[titleIndex];

      if (!isDeleting) {
        currentTitle = fullTitle.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === fullTitle.length) {
          isDeleting = true;
          setTimeout(typeEffect, 2000); // Pause at full title
          return;
        }
      } else {
        currentTitle = fullTitle.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          titleIndex = (titleIndex + 1) % titles.length;
        }
      }

      document.title = currentTitle + '|';
      setTimeout(typeEffect, isDeleting ? 25 : 50);
    };

    const timeoutId = setTimeout(typeEffect, 1000);

    return () => {
      clearTimeout(timeoutId);
      document.title = 'Pham Huy Dat | Java Developer';
    };
  }, []);
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;