import React from 'react';
import { Mail, MapPin, Github, Phone, Linkedin, Facebook } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            <div className="p-10 lg:p-16 flex flex-col justify-between bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
              <div>
                <h2 className="text-[13px] font-bold tracking-[2px] text-[#b3b3b3] uppercase mb-4">{t.contact.get_in_touch}</h2>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">{t.contact.header}</h3>
                <p className="text-[#b3b3b3] leading-relaxed mb-12">
                  {t.contact.subtext}
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#313131] flex items-center justify-center text-accent">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[#b3b3b3] uppercase tracking-wider font-semibold">{t.contact.label_email}</p>
                      <a href="mailto:datph1210@gmail.com" className="text-white hover:text-accent transition-colors text-lg">datph1210@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#313131] flex items-center justify-center text-accent">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[#b3b3b3] uppercase tracking-wider font-semibold">{t.contact.label_phone}</p>
                      <a href="tel:+84333073558" className="text-white hover:text-accent transition-colors text-lg">+84 333073558</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#313131] flex items-center justify-center text-accent">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-[#b3b3b3] uppercase tracking-wider font-semibold">{t.contact.label_location}</p>
                      <p className="text-white text-lg">Vietnam</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:mt-2">
                <p className="text-sm text-[#b3b3b3] uppercase tracking-wider font-semibold mb-2">{t.contact.label_follow}</p>
                <div className="flex gap-4 mb-6">
                  <a href="https://github.com/waaiu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#383838] flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                    <Github size={18} />
                  </a>
                  <a href="https://vn.linkedin.com/in/đạt-phạm-huy-744594240" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#383838] flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://www.facebook.com/phamdat1210/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#383838] flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                    <Facebook size={18} />
                  </a>
                </div>

                {/* <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="đạt-phạm-huy-744594240" data-version="v1">
                  <a className="badge-base__link LI-simple-link" href="https://vn.linkedin.com/in/đạt-phạm-huy-744594240?trk=profile-badge">Phạm Huy Đạt</a>
                </div> */}
              </div>
            </div>

            <div className="p-10 lg:p-16 bg-white text-secondary">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold uppercase tracking-wider">{t.contact.form_name}</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-[#fafafa] border border-[#e0e0e0] rounded-md px-4 py-3 focus:bg-white focus:border-[#111111] outline-none transition-colors"
                      placeholder={t.contact.form_name}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold uppercase tracking-wider">{t.contact.form_email}</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-[#fafafa] border border-[#e0e0e0] rounded-md px-4 py-3 focus:bg-white focus:border-[#111111] outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold uppercase tracking-wider">{t.contact.form_subject}</label>
                  <select
                    id="subject"
                    className="w-full bg-[#fafafa] border border-[#e0e0e0] rounded-md px-4 py-3 focus:bg-white focus:border-[#111111] outline-none transition-colors appearance-none"
                  >
                    <option>{t.contact.subjects.inquiry}</option>
                    <option>{t.contact.subjects.consulting}</option>
                    <option>{t.contact.subjects.job}</option>
                    <option>{t.contact.subjects.other}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold uppercase tracking-wider">{t.contact.form_message}</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-[#fafafa] border border-[#e0e0e0] rounded-md px-4 py-3 focus:bg-white focus:border-[#111111] outline-none transition-colors resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <Button variant="solid" className="w-full justify-center !py-4 hover:!transform-none hover:!translate-y-0">
                    {t.contact.btn_send}
                  </Button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};