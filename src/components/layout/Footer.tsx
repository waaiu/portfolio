import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-white border-t border-[#e0e0e0] py-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-center items-center gap-6">
        <p className="text-[#4e4d50] text-sm">
          &copy; {new Date().getFullYear()} PhamDat. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};
