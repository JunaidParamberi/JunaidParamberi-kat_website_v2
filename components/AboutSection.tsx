
import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ABOUT_CONTENT } from '../constants';
import Button from './ui/Button';
import Badge from './ui/Badge';
import SectionHeader from './ui/SectionHeader';

const AboutSection: React.FC = () => {
  const { badge, title, titleAccent, description, quote, quoteAuthor, mainImage, ctaText, values } = ABOUT_CONTENT;

  return (
    <section id="about" className="py-20 md:py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -left-12 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" 
            />
            <div className="relative rounded-[3rem] md:rounded-[3.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-slate-100 group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.5 }}
                src={mainImage} 
                alt="KAT Group Mission" 
                className="w-full h-[400px] md:h-[500px] lg:h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d4d]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-[#0a1d4d] text-white p-6 md:p-8 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl max-w-[280px] md:max-w-xs lg:max-w-sm backdrop-blur-md"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-2 lg:mb-4">{quoteAuthor}</p>
              <p className="text-lg md:text-xl lg:text-2xl font-heading font-medium leading-tight italic">"{quote}"</p>
            </motion.div>
          </motion.div>

          <div className="space-y-8 md:space-y-10 lg:space-y-12 order-1 md:order-2">
            <SectionHeader 
              badge={badge}
              title={title}
              titleAccent={titleAccent}
              description={description}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
              {values.map((item, i) => (
                <ValueCard key={i} {...item} index={i} />
              ))}
            </div>

            <Button variant="dark" size="xl">
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) => {
  const IconComponent = (LucideIcons as any)[icon];
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="group p-4 lg:p-6 rounded-3xl hover:bg-slate-50 transition-colors"
    >
      <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-[#0a1d4d] group-hover:bg-[#0a1d4d] group-hover:text-white transition-all duration-500 mb-4 lg:mb-6">
        {IconComponent && <IconComponent className="w-6 h-6 lg:w-8 lg:h-8" />}
      </div>
      <h4 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2 lg:mb-4">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed font-light">{desc}</p>
    </motion.div>
  );
};

export default AboutSection;
