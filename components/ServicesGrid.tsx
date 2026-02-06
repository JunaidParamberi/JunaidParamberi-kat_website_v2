
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { SERVICES_DATA } from '../constants';
import * as Icons from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';

const ServicesGrid: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-[#0a1d4d] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-500 blur-[120px]" 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          light
          badge="Our Core Capabilities"
          title="Workforce"
          titleAccent="Reinvented"
        />

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div 
                key={idx} 
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative min-h-[500px] md:h-[600px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-slate-900 border border-white/10"
              >
                <motion.img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-20">
                  <div className="flex justify-between items-start">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-blue-600/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:bg-blue-500 transition-all duration-500"
                    >
                      {IconComponent && <IconComponent className="w-8 h-8 md:w-10 md:h-10" />}
                    </motion.div>
                    <span className="text-white/10 font-heading text-6xl md:text-8xl font-black leading-none select-none tracking-tighter group-hover:text-white/20 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <h4 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter leading-tight md:leading-none group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light max-w-md group-hover:text-white transition-colors">
                      {service.shortDescription}
                    </p>
                    
                    <div className="pt-2 md:pt-4 flex flex-wrap gap-2 md:gap-3">
                      {service.features.map((feat, fIdx) => (
                        <span 
                          key={fIdx}
                          className="px-4 py-2 md:px-6 md:py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.15em] transition-all cursor-default hover:bg-white/10"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 md:pt-8">
                      <Link to={`/services/${service.slug}`}>
                        <Button variant="primary" size="lg" icon={<Icons.ChevronRight className="w-5 h-5" />}>
                          Case Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
