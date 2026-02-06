
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

interface SlideData {
  id: number;
  badge: string;
  title: string;
  titleGradient: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  type: 'image' | 'video';
  media: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    badge: "GLOBAL MANPOWER EXCELLENCE",
    title: "Powering",
    titleGradient: "Global Giants",
    description: "The definitive partner for manpower supply and high-spec technical services. We deploy elite teams that define industrial excellence.",
    primaryCta: "Our Capabilities",
    secondaryCta: "The KAT Method",
    type: 'video',
    media: "https://assets.mixkit.co/videos/preview/mixkit-industrial-welding-at-night-21782-large.mp4"
  },
  {
    id: 2,
    badge: "TECHNICAL INNOVATION",
    title: "Engineering",
    titleGradient: "The Future",
    description: "Specialized technical services for Oil & Gas, Infrastructure, and Energy sectors. Precision engineering at every industrial scale.",
    primaryCta: "Technical Desk",
    secondaryCta: "Case Studies",
    type: 'video',
    media: "https://assets.mixkit.co/videos/preview/mixkit-automated-industrial-robotic-arm-31518-large.mp4"
  },
  {
    id: 3,
    badge: "STRATEGIC RECRUITMENT",
    title: "Elite Talent.",
    titleGradient: "Deployed.",
    description: "Sourcing and deploying the world's most specialized workforce to support your growth velocity and operational stability.",
    primaryCta: "Request Talent",
    secondaryCta: "Global Reach",
    type: 'video',
    media: "https://assets.mixkit.co/videos/preview/mixkit-engineer-working-on-a-tablet-in-a-factory-42616-large.mp4"
  },
  {
    id: 4,
    badge: "ENERGY INFRASTRUCTURE",
    title: "Renewable",
    titleGradient: "Energy Grids",
    description: "Supporting the global transition with specialized technical manpower for solar, wind, and sustainable power grids.",
    primaryCta: "Energy Services",
    secondaryCta: "Sustainability",
    type: 'video',
    media: "https://assets.mixkit.co/videos/preview/mixkit-working-on-an-electrical-box-43152-large.mp4"
  }
];

const SLIDE_DURATION = 12000;

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const currentSlide = HERO_SLIDES[current];

  return (
    <section className="relative h-screen min-h-[600px] w-full bg-[#0a1d4d] overflow-hidden">
      {/* Media Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
          >
            {currentSlide.type === 'video' ? (
              <video
                key={currentSlide.media}
                src={currentSlide.media}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover opacity-60 mix-blend-overlay"
              />
            ) : (
              <img
                src={currentSlide.media}
                alt={currentSlide.title}
                className="h-full w-full object-cover opacity-60 mix-blend-overlay"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1d4d] via-[#0a1d4d]/70 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-600/20 backdrop-blur-md border border-white/10 text-blue-400 text-[9px] font-black uppercase tracking-[0.3em] mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              {currentSlide.badge}
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[110px] font-heading font-black text-white leading-[0.9] tracking-tighter mb-8 break-words">
              {currentSlide.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-[length:200%_auto] animate-text-gradient">
                {currentSlide.titleGradient}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light mb-10">
              {currentSlide.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                {currentSlide.primaryCta}
              </Button>
              <Button variant="ghost" size="lg">
                {currentSlide.secondaryCta}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-700 rounded-full h-1.5 overflow-hidden ${
              current === idx 
                ? 'w-10 bg-white shadow-lg shadow-white/20' 
                : 'w-1.5 bg-white/20 hover:bg-white/40'
            }`}
          >
             {current === idx && (
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '100%' }}
                 transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                 className="h-full bg-blue-400"
               />
             )}
          </button>
        ))}
      </div>

      {/* Scroll Label */}
      <div className="absolute bottom-10 right-10 z-30 hidden md:flex items-center gap-6 group cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">Scroll</span>
        <div className="relative w-6 h-10 rounded-full border border-white/20 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 15, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-blue-500 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
