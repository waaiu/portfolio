import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Globe } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-[#111111] text-white p-2 rounded-lg group-hover:bg-accent transition-colors">
            <Terminal size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight text-secondary">PhamDat</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[13px] font-semibold text-[#4e4d50] hover:text-accent uppercase tracking-[1px] transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-[13px] font-bold text-secondary hover:text-accent transition-colors"
          >
            <Globe size={16} />
            <span>{language === 'en' ? 'EN' : 'VI'}</span>
          </button>

          <Button variant="transparent" className="!px-6 !py-2 !text-xs" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
            {t.nav.contact}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm font-bold text-secondary hover:text-accent transition-colors"
          >
            <Globe size={18} />
            <span>{language === 'en' ? 'EN' : 'VI'}</span>
          </button>
          
          <button 
            className="text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-[#e0e0e0] shadow-xl py-6 px-6 flex flex-col space-y-4">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[15px] font-semibold text-secondary py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <Button variant="primary" className="w-full" onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView(); }}>
              {t.nav.contact}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};