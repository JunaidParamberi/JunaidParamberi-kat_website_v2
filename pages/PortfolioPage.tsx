
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PORTFOLIO.map(item => item.category))];
  const filteredItems = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter(item => item.category === filter);

  return (
    <div className="pt-24 min-h-screen bg-[#0a1d4d] text-white">
      {/* Editorial Header */}
      <section className="relative py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[1px] bg-blue-500" />
            <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px]">Track Record</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-[0.85] mb-12"
          >
            Industrial <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">Impact.</span>
          </motion.h1>

          {/* Luxury Filter Bar */}
          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 md:px-8 py-3 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Museum Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div 
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className={`
                    ${idx % 3 === 0 ? 'md:col-span-2 lg:col-span-8' : 'md:col-span-1 lg:col-span-4'} 
                    group relative h-[450px] md:h-[500px] rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border border-white/10
                  `}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d4d] via-transparent to-transparent" />
                  
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                    <span className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-4 block">
                      {item.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-heading font-black text-white mb-6 tracking-tighter group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                      <p className="text-slate-300 mb-6 md:mb-8 font-light max-w-md text-sm md:text-base">
                        {item.description}
                      </p>
                      <Link 
                        to={`/portfolio/${item.id}`}
                        className="inline-flex items-center gap-4 bg-white text-[#0a1d4d] px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all"
                      >
                        Explore Case Study <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
