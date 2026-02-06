
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../constants';
import { ChevronRight, ArrowRight, CheckCircle2, Shield, Zap, Target, Award, ArrowLeft } from 'lucide-react';

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = SERVICES_DATA.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="py-40 text-center bg-[#0a1d4d] min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-heading font-bold text-white mb-6">Service Not Found</h2>
        <Link to="/services" className="text-blue-400 hover:text-white transition-colors">Return to Services</Link>
      </div>
    );
  }

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Immersive Hero Header */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-slate-900 z-10 opacity-60"></div>
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={service.image} 
          className="absolute inset-0 w-full h-full object-cover" 
          alt={service.title} 
        />
        
        {/* Back Button */}
        <div className="absolute top-32 left-6 md:left-12 z-30">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </motion.button>
        </div>
        
        <div className="relative z-20 container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-600/20 backdrop-blur-md border border-white/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8"
            >
              <Zap className="w-3 h-3" /> Industry Leading Solution
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-[100px] font-heading font-black leading-[0.85] tracking-tighter mb-8"
            >
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? "block" : "block text-blue-500"}>{word}</span>
              ))}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-200 font-light leading-relaxed max-w-2xl"
            >
              {service.shortDescription}
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/50">Explore Expertise</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <div className="relative z-30 -mt-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[4rem] shadow-2xl p-12 md:p-24 border border-slate-100">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              {/* Left Side: Core Narrative */}
              <div className="lg:col-span-7 space-y-16">
                <motion.div {...fadeIn}>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 tracking-tight">
                    Strategic <span className="text-blue-600">Transformation.</span>
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-xl font-light first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:float-left first-letter:mr-3">
                    {service.longDescription}
                  </p>
                </motion.div>

                {/* Core Services Grid */}
                <div className="space-y-12">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 flex items-center gap-4">
                    <div className="h-8 w-1 bg-blue-600" /> Professional Capabilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.coreServices.map((core, i) => (
                      <motion.div 
                        key={i}
                        {...fadeIn}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-[#0a1d4d] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-xl text-slate-900 mb-4">{core.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-light">{core.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {service.additionalServices && (
                  <div className="space-y-12 pt-8">
                    <h3 className="text-2xl font-heading font-bold text-slate-900 flex items-center gap-4">
                      <div className="h-8 w-1 bg-blue-400" /> Specialized Offerings
                    </h3>
                    <div className="space-y-4">
                      {service.additionalServices.map((add, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          className="flex items-center justify-between p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all"
                        >
                          <div className="flex items-center gap-6">
                            <div className="text-blue-600 font-black text-xl">0{i + 1}</div>
                            <div>
                              <h4 className="font-bold text-slate-900">{add.title}</h4>
                              <p className="text-slate-500 text-xs font-light">{add.description}</p>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-300" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side: Specifications & Sidebar */}
              <div className="lg:col-span-5 space-y-10">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-[#0a1d4d] rounded-[3rem] p-12 text-white relative overflow-hidden"
                >
                  <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20" />
                  <h3 className="text-3xl font-heading font-bold mb-10 tracking-tight">Key Benefits</h3>
                  
                  <div className="space-y-10">
                    {[
                      { icon: Shield, title: "Unmatched Compliance", desc: "Rigorous ISO & local safety standards integration." },
                      { icon: Target, title: "Surgical Precision", desc: "Talent matching mapped to your technical stack." },
                      { icon: Award, title: "Quality Guarantee", desc: "SLA-backed performance across every contract." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-6">
                        <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                          <item.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                          <p className="text-white/60 text-sm font-light leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 pt-10 border-t border-white/10">
                    <Link to="/#contact" className="flex items-center justify-between w-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 rounded-[2rem] font-bold transition-all transform hover:scale-105">
                      Request a Proposal <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>

                {/* Navigation Widget */}
                <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100">
                  <h3 className="text-xl font-heading font-bold mb-8 text-slate-900">Related Domains</h3>
                  <div className="flex flex-col gap-3">
                    {SERVICES_DATA.filter(s => s.slug !== slug).map(s => (
                      <Link 
                        key={s.slug} 
                        to={`/services/${s.slug}`}
                        className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-100 hover:border-blue-400 hover:shadow-lg transition-all"
                      >
                        <span className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{s.title}</span>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Dynamic CTA Footer Section for this page */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-7xl font-heading font-black text-slate-900 leading-none tracking-tighter">
              Ready to <span className="text-blue-600">Scale</span> Your Industrial Footprint?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/#contact" className="bg-[#0a1d4d] text-white px-12 py-6 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
                Contact Strategy Team
              </Link>
              <Link to="/portfolio" className="bg-white text-slate-900 border-2 border-slate-200 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all">
                See Our Track Record
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
