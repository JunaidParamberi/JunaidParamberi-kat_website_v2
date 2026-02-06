
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import SearchModal from './SearchModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isDark = scrolled || location.pathname !== '/';

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${isDark ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="relative z-[110]">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://katgroup.ae/assets/images/logo.png" 
                alt="KAT Group Logo" 
                className={`h-10 md:h-16 transition-all duration-500 object-contain ${!isDark && !isOpen ? 'brightness-0 invert' : ''}`} 
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 items-center">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname.startsWith(item.href);
                return (
                  <div key={item.label} className="relative flex flex-col items-center">
                    <Link
                      to={item.href}
                      className={`text-[12px] font-black tracking-[0.2em] transition-all hover:text-blue-500 uppercase ${
                        isActive 
                          ? 'text-blue-600' 
                          : (isDark ? 'text-slate-900' : 'text-white')
                      }`}
                    >
                      {item.label}
                    </Link>
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute -bottom-2 w-1 h-1 bg-blue-600 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className={`p-3 rounded-full transition-colors ${
                    isSearchOpen 
                      ? 'bg-blue-600 text-white' 
                      : (isDark ? 'bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white' : 'bg-white/10 text-white hover:bg-white/20')
                  }`}
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl relative z-[120] transition-colors ${isOpen ? 'text-white' : (isDark ? 'text-slate-900' : 'text-white')}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 35, stiffness: 300 }}
              className="fixed inset-0 h-[100dvh] w-full bg-[#0a1d4d] z-[105] flex flex-col pt-32 pb-12 px-8 overflow-y-auto"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
              </div>

              <div className="relative z-10 flex flex-col h-full max-w-lg mx-auto w-full">
                <div className="flex flex-col gap-8 mb-auto">
                  {NAV_ITEMS.map((item, i) => {
                    const isActive = location.pathname.startsWith(item.href);
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, ease: "easeOut" }}
                        className="group"
                      >
                        <Link
                          to={item.href}
                          className="flex items-baseline gap-5"
                        >
                          <span className="text-blue-500 font-black text-sm tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                            0{i + 1}
                          </span>
                          <h2 className={`text-4xl sm:text-6xl font-heading font-black uppercase tracking-tighter transition-all ${
                            isActive ? 'text-blue-400' : 'text-white hover:text-blue-300'
                          }`}>
                            {item.label}
                          </h2>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile Menu Footer */}
                <div className="mt-16 space-y-12">
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.5 }}
                    className="pt-10 border-t border-white/10"
                  >
                    <button 
                      onClick={() => {
                        setIsOpen(false);
                        setIsSearchOpen(true);
                      }}
                      className="w-full flex items-center justify-between group bg-white/5 hover:bg-blue-600 transition-all p-6 rounded-3xl border border-white/5"
                    >
                      <div className="flex items-center gap-4">
                        <Search className="w-5 h-5 text-blue-400 group-hover:text-white" />
                        <span className="font-black uppercase tracking-[0.2em] text-[10px] text-white">Global Discovery</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </button>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col gap-8"
                  >
                    <div className="flex gap-4">
                      {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                        <a 
                          key={i} 
                          href="#" 
                          className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-blue-600 transition-all border border-white/5"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Operations HQ</p>
                      <p className="text-xs text-white/60 font-medium leading-relaxed">Sharjah Publishing City, <br />United Arab Emirates</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};

export default Navbar;
