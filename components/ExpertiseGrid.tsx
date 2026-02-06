
import React from 'react';
import { motion } from 'framer-motion';
import { SECTORS } from '../constants';
import * as Icons from 'lucide-react';

const SECTOR_METADATA: Record<string, { image: string; color: string; tags: string[] }> = {
  'Oil & Gas': {
    image: 'https://images.unsplash.com/photo-1516195851888-6f1a981a8a21?auto=format&fit=crop&q=80&w=800',
    color: 'from-orange-500 to-red-600',
    tags: ['Offshore', 'Safety First', 'HSE']
  },
  'Infrastructure': {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-500 to-indigo-600',
    tags: ['Civil', 'Bridges', 'Giga Projects']
  },
  'Healthcare': {
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    color: 'from-emerald-400 to-teal-600',
    tags: ['Medical', 'DHA/MOH', 'Specialists']
  },
  'Manufacturing': {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    color: 'from-amber-400 to-yellow-600',
    tags: ['Assembly', 'Automation', 'Plant Ops']
  },
  'Energy': {
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    color: 'from-cyan-400 to-blue-600',
    tags: ['Solar', 'Grid', 'Renewables']
  },
  'Logistics': {
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    color: 'from-purple-500 to-violet-600',
    tags: ['SCM', 'Warehousing', 'Last Mile']
  }
};

const ExpertiseGrid: React.FC = () => {
  return (
    <section id="expertise" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-[1px] bg-blue-600" />
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Strategic Verticals</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-heading font-black text-slate-900 leading-none tracking-tighter"
            >
              Industry <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-400">Mastery.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-md font-light text-lg border-l border-slate-200 pl-8"
          >
            We don't just supply labor; we deploy specialized intellectual and technical capital tailored to the unique rigors of global industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECTORS.map((sector, idx) => {
            const IconComponent = (Icons as any)[sector.icon];
            const meta = SECTOR_METADATA[sector.name] || SECTOR_METADATA['Infrastructure'];
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white h-[500px] rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-700"
              >
                {/* Background Image Reveal */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
                  <img src={meta.image} alt={sector.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/20" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <motion.div 
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-gradient-to-br ${meta.color} group-hover:text-white transition-all duration-500 shadow-sm`}
                      >
                        {IconComponent && <IconComponent className="w-8 h-8" />}
                      </motion.div>
                      <span className="text-slate-100 font-heading text-7xl font-black leading-none select-none tracking-tighter opacity-0 group-hover:opacity-10 transition-opacity">
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-3xl font-heading font-black text-slate-900 group-hover:text-white mb-4 tracking-tighter transition-colors">
                      {sector.name}
                    </h4>
                    
                    <p className="text-slate-500 group-hover:text-slate-200 leading-relaxed font-light text-[15px] mb-6 transition-colors">
                      {sector.description}
                    </p>

                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {meta.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-50 group-hover:border-white/10 flex items-center justify-between transition-colors">
                    <button className="flex items-center gap-2 text-[#0a1d4d] group-hover:text-blue-400 font-black text-[11px] uppercase tracking-[0.2em] transition-colors">
                      Sector Insights <Icons.ArrowUpRight className="w-4 h-4" />
                    </button>
                    <div className={`w-0 h-[2px] bg-gradient-to-r ${meta.color} group-hover:w-24 transition-all duration-700`} />
                  </div>
                </div>

                {/* Glass Border Accent on Hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-white/20 rounded-[3rem] pointer-events-none transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;
