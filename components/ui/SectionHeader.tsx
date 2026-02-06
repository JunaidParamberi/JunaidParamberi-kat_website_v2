
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  description?: string;
  light?: boolean;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  titleAccent,
  description,
  light = false,
  align = 'left'
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`mb-12 md:mb-20 ${isCentered ? 'text-center' : ''}`}>
      {badge && (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex items-center gap-4 mb-6 ${isCentered ? 'justify-center' : ''}`}
        >
          {!isCentered && <div className={`h-[1px] w-12 ${light ? 'bg-blue-400' : 'bg-blue-600'}`} />}
          <span className={`${light ? 'text-blue-400' : 'text-blue-600'} text-[10px] font-black uppercase tracking-[0.4em]`}>
            {badge}
          </span>
          {isCentered && <div className={`h-[1px] w-12 ${light ? 'bg-blue-400' : 'bg-blue-600'}`} />}
        </motion.div>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-4xl sm:text-6xl md:text-8xl font-heading font-black leading-[1] md:leading-[0.85] tracking-tighter ${light ? 'text-white' : 'text-slate-900'}`}
      >
        {title} {titleAccent && <br />}
        {titleAccent && (
          <span className={light ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-slate-400' : 'text-blue-600'}>
            {titleAccent}.
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`mt-8 text-lg md:text-xl font-light leading-relaxed max-w-2xl ${isCentered ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-slate-500'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
