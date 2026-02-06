
import React from 'react';
import { motion } from 'framer-motion';
import { SECTORS } from '../constants';
import * as Icons from 'lucide-react';

const ExpertisePage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-8"
            >
              Domain Specialization
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-heading font-black text-slate-900 tracking-tighter leading-[0.9] mb-10">
              Vertical <br /><span className="text-blue-600">Specialization.</span>
            </h1>
          </div>

          <div className="space-y-32">
            {SECTORS.map((sector, idx) => {
              const IconComponent = (Icons as any)[sector.icon];
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
                >
                  <div className="lg:w-1/2 space-y-10">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-[2rem] bg-[#0a1d4d] text-white flex items-center justify-center shadow-2xl">
                        {IconComponent && <IconComponent className="w-10 h-10" />}
                      </div>
                      <h2 className="text-5xl font-heading font-black text-slate-900 tracking-tighter uppercase italic">{sector.name}</h2>
                    </div>
                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                      {sector.longDescription || sector.description}
                    </p>
                    {sector.technicalSpecs && (
                      <div className="space-y-6">
                         <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Technical Standards</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {sector.technicalSpecs.map((spec, i) => (
                             <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                               <Icons.CheckCircle className="w-5 h-5 text-emerald-500" />
                               <span className="text-sm font-bold text-slate-700">{spec}</span>
                             </div>
                           ))}
                         </div>
                      </div>
                    )}
                  </div>
                  <div className="lg:w-1/2 w-full h-[500px] rounded-[4rem] overflow-hidden shadow-2xl relative group">
                    <img 
                      src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? '1581091226825-a6a2a5aee158' : '1504307651254-35680f356dfd'}?auto=format&fit=crop&q=80&w=1200`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                      alt={sector.name} 
                    />
                    <div className="absolute inset-0 bg-[#0a1d4d]/20 mix-blend-overlay" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;
