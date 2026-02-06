
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../constants';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Luxury Services Hero */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#0a1d4d]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-[1px] bg-blue-500" />
            <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px]">Capabilities Hub</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-heading font-black text-white tracking-tighter leading-[0.85] mb-12"
          >
            Global <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">Precision.</span>
          </motion.h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
            From rapid on-demand labor to specialized technical engineering, KAT Group provides the intellectual and physical capital that moves global industry forward.
          </p>
        </div>

        {/* Floating background elements */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[160px] opacity-20" />
      </section>

      {/* Main Services Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SERVICES_DATA.map((service, idx) => {
              const IconComponent = (Icons as any)[service.icon];
              return (
                <motion.div 
                  key={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="group relative h-[600px] rounded-[4rem] overflow-hidden bg-slate-900 shadow-2xl border border-slate-100"
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-[2s]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                  
                  <div className="absolute inset-0 p-12 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                      <div className="w-20 h-20 rounded-[2rem] bg-blue-600 text-white flex items-center justify-center shadow-xl group-hover:rotate-6 transition-transform">
                        {IconComponent && <IconComponent className="w-10 h-10" />}
                      </div>
                      <span className="text-white/10 font-heading text-9xl font-black leading-none group-hover:text-white/20 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-4xl font-heading font-black text-white tracking-tighter leading-none">
                        {service.title}
                      </h3>
                      <p className="text-slate-300 text-lg font-light leading-relaxed max-w-md group-hover:text-white transition-colors">
                        {service.shortDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 pt-4">
                        {service.features.map((feat, fIdx) => (
                          <span key={fIdx} className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest">
                            {feat}
                          </span>
                        ))}
                      </div>

                      <div className="pt-8 flex items-center gap-6">
                        <Link 
                          to={`/services/${service.slug}`}
                          className="bg-white text-[#0a1d4d] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-blue-600 hover:text-white transition-all transform hover:translate-x-2"
                        >
                          Explore Vertical
                        </Link>
                        <Icons.ArrowRight className="w-6 h-6 text-white/50 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industrial Methodology Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-5xl font-heading font-black text-slate-900 tracking-tighter mb-8 leading-none">
                  The <span className="text-blue-600">KAT Method</span> of Workforce Deployment.
                </h2>
                <div className="space-y-8">
                  {[
                    { title: "Talent Mapping", desc: "Proprietary AI matching for technical skill sets and soft skill alignment." },
                    { title: "Compliance Core", desc: "Rigorous vetting against international ISO and local UAE labor standards." },
                    { title: "Rapid Scale", desc: "Ability to deploy 100+ technical staff within 14-day project sprints." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center font-black text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h4>
                        <p className="text-slate-500 font-light leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                 <div className="absolute -inset-4 bg-blue-600/10 rounded-[4rem] blur-2xl" />
                 <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" 
                  className="relative z-10 w-full h-[600px] object-cover rounded-[4rem] shadow-2xl" 
                  alt="Industrial Precision" 
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Global Sector CTA */}
      <section className="py-32 bg-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-slate-900 tracking-tighter mb-10 leading-none">
              Need a Custom Workforce Strategy?
            </h2>
            <Link to="/contact" className="inline-block bg-[#0a1d4d] text-white px-16 py-8 rounded-[2.5rem] font-black text-lg shadow-2xl hover:bg-blue-600 transition-all hover:scale-105 active:scale-95">
              Consult an Industrial Strategist
            </Link>
         </div>
      </section>
    </div>
  );
};

export default ServicesPage;
