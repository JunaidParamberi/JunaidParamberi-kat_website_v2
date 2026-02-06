
import React from 'react';
import { PORTFOLIO } from '../constants';
import { ExternalLink, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-blue-900/40 z-10"></div>
        <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Portfolio Banner" />
        
        {/* Back Button */}
        <div className="absolute top-12 left-6 md:left-12 z-30">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </motion.button>
        </div>

        <div className="relative z-20 text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-heading font-extrabold tracking-tighter"
          >
            Our Portfolio
          </motion.h1>
          <nav className="flex items-center justify-center gap-2 text-sm font-medium tracking-widest uppercase">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 opacity-50" />
            <span className="text-blue-400">Track Record</span>
          </nav>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">Industrial Excellence Delivered</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light text-lg">We take pride in our history of successfully delivering manpower and technical solutions for global giants.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PORTFOLIO.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{item.description}</p>
                  <div className="pt-4 flex items-center gap-2 text-[#0a1d4d] font-bold text-sm cursor-pointer group-hover:gap-3 transition-all">
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Extended Mock Portfolio items */}
            {[1, 2].map((_, i) => (
              <motion.div 
                key={`extra-${i}`} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (PORTFOLIO.length + i) * 0.1 }}
                className="group bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                 <div className="relative h-72 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1541625602330-2277a4c4b28d?auto=format&fit=crop&q=80&w=800&sig=${i}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest">
                      Construction
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-slate-900">Global Infra Project {i+1}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">Providing end-to-end specialized workforce for international infrastructure maintenance.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
