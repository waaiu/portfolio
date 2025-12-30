import React, { createContext, useState, useContext, ReactNode } from 'react';
import enTranslation from '../locales/en.json';
import viTranslation from '../locales/vi.json';

type Language = 'en' | 'vi';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
}

interface ExperienceData {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

interface Translation {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    available: string;
    title_line1: string;
    title_highlight: string;
    intro_p1: string;
    intro_p2: string;
    view_projects: string;
    contact_me: string;
    card_status: string;
  };
  about: {
    tech_arsenal: string;
    title: string;
    header: string;
    header_br: string;
    p1_pre: string;
    p1_post: string;
    p2: string;
    p3: string;
    years_exp: string;
    perf_boost: string;
  };
  experience: {
    career_path: string;
    work_exp: string;
    items: ExperienceData[];
  };
  projects: {
    portfolio: string;
    featured: string;
    view_github: string;
    items: ProjectData[];
  };
  contact: {
    get_in_touch: string;
    header: string;
    subtext: string;
    label_email: string;
    label_phone: string;
    label_location: string;
    label_follow: string;
    form_name: string;
    form_email: string;
    form_subject: string;
    form_message: string;
    btn_send: string;
    subjects: {
      inquiry: string;
      consulting: string;
      job: string;
      other: string;
    }
  };
  footer: {
    rights: string;
  };
}

const translations: Record<Language, Translation> = {
  en: enTranslation as Translation,
  vi: viTranslation as Translation,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
