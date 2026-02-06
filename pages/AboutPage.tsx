
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Globe, Award, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Editorial Intro */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-10"
              >
                <div className="w-12 h-[1px] bg-blue-600" />
                <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Our Legacy</span>
              </motion.div>
              <h1 className="text-7xl md:text-9xl font-heading font-black text-slate-900 leading-[0.85] tracking-tighter mb-10">
                Building <br /><span className="text-blue-600">The Modern</span> <br />Industrial Age.
              </h1>
            </div>
            <div className="space-y-8 pb-10 border-l border-slate-100 pl-12">
               <p className="text-2xl text-slate-500 font-light leading-relaxed">
                 Founded on the principles of precision and integrity, KAT Group has transformed from a regional provider into a global force in workforce and technical management.
               </p>
               <div className="flex gap-10">
                 <div>
                   <span className="text-4xl font-black text-[#0a1d4d] block">2023</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Founded</span>
                 </div>
                 <div>
                   <span className="text-4xl font-black text-[#0a1d4d] block">50k+</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Deployed</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-32 bg-[#0a1d4d] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-5">
           <Globe className="w-[600px] h-[600px] animate-pulse" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-8">Guided by Global Excellence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: Shield, title: "Zero Compromise", desc: "Our HSE standards are the foundation of every deployment." },
               { icon: Target, title: "Precision Match", desc: "We utilize proprietary AI to map technical skills to project needs." },
               { icon: Award, title: "Certified Quality", desc: "ISO 9001:2015 compliant processes across 12 sectors." }
             ].map((val, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group"
               >
                 <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                   <val.icon className="w-8 h-8" />
                 </div>
                 <h4 className="text-2xl font-bold mb-4">{val.title}</h4>
                 <p className="text-slate-400 font-light leading-relaxed">{val.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Global Locations Map Conceptual */}
      <section className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-heading font-black text-slate-900 tracking-tighter mb-10">Strategic Presence</h2>
              <ul className="space-y-10">
                <li className="flex gap-6">
                  <div className="w-4 h-4 rounded-full bg-blue-600 mt-2 shrink-0 animate-ping" />
                  <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2">Sharjah HQ</h4>
                    <p className="text-slate-500 font-light">The neural center for our Global Strategy and Compliance operations.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                   <div className="w-4 h-4 rounded-full bg-blue-600 mt-2 shrink-0" />
                   <div>
                    <h4 className="font-bold text-xl text-slate-900 mb-2">Dubai Regional Office</h4>
                    <p className="text-slate-500 font-light">Managing the rapid deployment of technical teams across GCC projects.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 h-[600px] w-full bg-white rounded-[4rem] shadow-2xl relative overflow-hidden border border-slate-100">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-96 h-96 text-[#0a1d4d] opacity-10 animate-spin-slow" />
               </div>
               <div className="absolute inset-0 p-20 flex flex-col justify-end">
                  <div className="space-y-4">
                    <span className="text-blue-600 font-black uppercase text-[10px] tracking-widest">Expansion Track</span>
                    <h3 className="text-3xl font-heading font-bold text-slate-900">12 Global Hubs by 2026</h3>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
