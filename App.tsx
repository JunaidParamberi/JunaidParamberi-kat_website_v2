
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesGrid from './components/ServicesGrid';
import ExpertiseGrid from './components/ExpertiseGrid';
import Portfolio from './components/Portfolio';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import AIAdvisor from './components/AIAdvisor';
import Footer from './components/Footer';

// New Pages
import ContactPage from './pages/ContactPage';
import MediaPage from './pages/MediaPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import AboutPage from './pages/AboutPage';
import ExpertisePage from './pages/ExpertisePage';
import ServicesPage from './pages/ServicesPage';

import { LOADER_STATUSES, CTA_CONTENT } from './constants';

const PageLoader = () => {
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((prev) => (prev + 1) % LOADER_STATUSES.length);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-[1000] bg-[#0a1d4d] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[300px] h-[300px] md:w-[800px] md:h-[800px] border border-blue-400/20 rounded-full"
      />
      
      <div className="relative flex flex-col items-center px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute -inset-6 md:-inset-10 bg-blue-500/20 blur-[40px] md:blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-all duration-1000" />
          <motion.img 
            src="https://katgroup.ae/assets/images/logo.png" 
            className="h-14 md:h-28 brightness-0 invert relative z-10" 
            alt="KAT Group" 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </motion.div>

        <div className="mt-12 md:mt-16 text-center h-10 md:h-6 overflow-hidden max-w-[280px] md:max-w-none">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusIdx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-blue-400/60 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] font-heading"
            >
              {LOADER_STATUSES[statusIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-8 w-32 md:w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedPage = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const HomePage: React.FC = () => (
  <AnimatedPage>
    <Hero />
    <AboutSection />
    <ServicesGrid />
    <ExpertiseGrid />
    <Portfolio />
    <CTASection />
  </AnimatedPage>
);

const CTASection = () => {
  const { badge, title, titleLine2, description, primaryCta, secondaryCta } = CTA_CONTENT;
  return (
    <section className="py-20 md:py-32 bg-[#0a1d4d] text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8"
        >
           {badge}
        </motion.div>
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-heading font-bold mb-8 md:mb-10 leading-[1.1] md:leading-[0.9]">
          {title} <br /> {titleLine2}
        </h2>
        <p className="text-slate-400 text-lg md:text-xl mb-10 md:mb-14 max-w-2xl mx-auto font-light">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
           <CtaButton variant="primary">{primaryCta}</CtaButton>
           <CtaButton variant="secondary">{secondaryCta}</CtaButton>
        </div>
      </div>
    </section>
  );
};

const CtaButton = ({ children, variant }: { children: React.ReactNode; variant: 'primary' | 'secondary' }) => (
  <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-8 py-5 md:px-12 md:py-6 rounded-2xl font-bold text-base md:text-lg transition-all ${
      variant === 'primary' ? 'bg-white text-[#0a1d4d] hover:shadow-2xl' : 'bg-white/10 text-white hover:bg-white/20'
    }`}
  >
    {children}
  </motion.button>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence>
        {loading && <PageLoader key="loader" />}
      </AnimatePresence>
      <div className="min-h-screen bg-white selection:bg-[#0a1d4d] selection:text-white">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/expertise" element={<ExpertisePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
              <Route path="/media" element={<MediaPage />} />
              <Route path="/media/:id" element={<ArticleDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <AIAdvisor />
      </div>
    </Router>
  );
};

export default App;
