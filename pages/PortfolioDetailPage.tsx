
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../constants';
import { ArrowLeft, CheckCircle, Target, Play, Shield, Globe, Award } from 'lucide-react';

const PortfolioDetailPage: React.FC = () => {
  const { id } = useParams();
  const project = PORTFOLIO.find(p => p.id === id);

  if (!project) return (
    <div className="py-40 text-center min-h-screen flex items-center justify-center bg-[#0a1d4d]">
      <div className="text-white space-y-6">
        <h2 className="text-4xl font-heading font-bold">Project not found</h2>
        <Link to="/portfolio" className="text-blue-400">Back to Portfolio</Link>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center bg-[#0a1d4d] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          src={project.image} 
          className="absolute inset-0 w-full h-full object-cover" 
          alt={project.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d4d] via-[#0a1d4d]/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-blue-400 font-black uppercase tracking-[0.4em] text-[10px] mb-8 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> All Projects
          </Link>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest mb-6 inline-block shadow-lg">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black text-white tracking-tighter mb-8 leading-[0.9] break-words">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 0 ? "block" : "block text-blue-400"}>{word}</span>
              ))}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed italic">
              "{project.description}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Project Deep Dive */}
            <div className="lg:col-span-8 space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.fullCaseStudy?.stats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-[#0a1d4d] transition-all duration-500"
                  >
                    <p className="text-4xl font-heading font-black text-[#0a1d4d] group-hover:text-blue-400 mb-1 transition-colors">{stat.value}</p>
                    <p className="text-[10px] font-black text-slate-400 group-hover:text-white/60 uppercase tracking-widest transition-colors">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-12">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-6">
                  <h2 className="text-3xl font-heading font-black text-[#0a1d4d] flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Target className="w-5 h-5" />
                    </div>
                    Strategic Challenge
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-light border-l-4 border-blue-500/20 pl-8">
                    {project.fullCaseStudy?.challenge}
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-6">
                  <h2 className="text-3xl font-heading font-black text-[#0a1d4d] flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    Engineered Solution
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    {project.fullCaseStudy?.solution}
                  </p>
                </motion.div>
              </div>

              {/* Bento Media Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {project.fullCaseStudy?.gallery.map((img, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className={`${i === 0 ? 'md:col-span-8' : 'md:col-span-4'} rounded-3xl overflow-hidden shadow-sm h-64 md:h-80 relative group`}
                  >
                    <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={`Gallery ${i}`} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
               <div className="sticky top-24 p-8 rounded-[3rem] bg-[#0a1d4d] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-[60px]" />
                  <h3 className="text-xl font-heading font-bold mb-8 tracking-tight flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-400" /> Project Meta
                  </h3>
                  <ul className="space-y-6 text-[10px] font-black uppercase tracking-widest">
                    <li className="flex justify-between border-b border-white/5 pb-4">
                      <span className="text-slate-400 flex items-center gap-2"><Globe className="w-4 h-4" /> Sector</span>
                      <span className="text-blue-400">{project.category}</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-4">
                      <span className="text-slate-400 flex items-center gap-2"><Target className="w-4 h-4" /> Hub Support</span>
                      <span className="text-blue-400">UAE (GCC)</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-4">
                      <span className="text-slate-400 flex items-center gap-2"><Shield className="w-4 h-4" /> Safety</span>
                      <span className="text-blue-400">Zero Harm</span>
                    </li>
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold mt-10 hover:bg-blue-500 transition-all shadow-xl active:scale-95">
                    Consult on Project
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetailPage;
