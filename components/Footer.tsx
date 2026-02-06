
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { FOOTER_CONTENT, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const { description, hq_sharjah, hq_dubai, phone, email, socials, copyright } = FOOTER_CONTENT;

  return (
    <footer id="contact" className="bg-[#0a1d4d] text-white pt-32 pb-16 overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-10">
            <Link to="/">
              <img 
                src="https://katgroup.ae/assets/images/logo.png" 
                alt="KAT Group Logo" 
                className="h-24 brightness-0 invert object-contain" 
              />
            </Link>
            <p className="text-blue-100/60 text-sm leading-relaxed font-light">
              {description}
            </p>
            <div className="flex gap-4">
              {socials.map((name, i) => {
                const Icon = (LucideIcons as any)[name];
                return (
                  <motion.a 
                    key={i} 
                    href="#" 
                    whileHover={{ y: -5, backgroundColor: '#3b82f6' }}
                    className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center transition-all"
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl mb-10 uppercase tracking-[0.3em] text-blue-400">Navigation</h4>
            <ul className="space-y-5 text-blue-100/60 text-sm font-medium">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-xl mb-10 uppercase tracking-[0.3em] text-blue-400">Global HQ</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ul className="space-y-8 text-blue-100/80 text-[15px] font-light">
                <FooterContactItem icon="MapPin" label="Sharjah Headquarters" value={hq_sharjah} />
                <FooterContactItem icon="MapPin" label="Dubai Regional Office" value={hq_dubai} />
              </ul>
              <ul className="space-y-8 text-blue-100/80 text-[15px] font-light">
                <FooterContactItem icon="Phone" value={phone} centered />
                <FooterContactItem icon="Mail" value={email} centered />
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-blue-100/40 text-[10px] font-black uppercase tracking-[0.5em]">
          <p>{copyright}</p>
          <div className="flex gap-10">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/compliance" className="hover:text-white transition-colors">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterContactItem = ({ icon, label, value, centered }: { icon: string; label?: string; value: string; centered?: boolean }) => {
  const Icon = (LucideIcons as any)[icon];
  return (
    <li className={`flex gap-5 ${centered ? 'items-center' : ''}`}>
      {centered ? (
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
          {Icon && <Icon className="w-5 h-5 text-blue-500" />}
        </div>
      ) : (
        Icon && <Icon className="w-10 h-10 text-blue-500 shrink-0" />
      )}
      <div className="space-y-1">
        {label && <p className="font-bold text-white uppercase text-xs tracking-widest">{label}</p>}
        <p>{value}</p>
      </div>
    </li>
  );
};

export default Footer;
