
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left: Info */}
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-8"
              >
                Connect Globally
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-heading font-black text-slate-900 tracking-tighter leading-[0.9] mb-10">
                Let's Build <br /><span className="text-blue-600">The Future.</span>
              </h1>
              <p className="text-xl text-slate-500 font-light mb-16 leading-relaxed max-w-lg">
                Whether you need elite technical teams or specialized industrial manpower, our consultants are ready to deploy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 rounded-[2rem] bg-white shadow-sm border border-slate-100 group hover:border-blue-500 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Call Strategy</h4>
                  <p className="text-sm text-slate-500 font-light">+971 58 662 2510</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-white shadow-sm border border-slate-100 group hover:border-blue-500 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Email Desk</h4>
                  <p className="text-sm text-slate-500 font-light">info@katgroup.ae</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100"
            >
              <h3 className="text-3xl font-heading font-bold mb-10 text-slate-900">Project Inquiry</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                    <input type="text" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Company</label>
                    <input type="text" className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="Global Infra Ltd." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Service Requirement</label>
                  <select className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500/20 outline-none transition-all appearance-none">
                    <option>Technical Services</option>
                    <option>Manpower Supply</option>
                    <option>Overseas Recruitment</option>
                    <option>Heavy Equipment</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Message</label>
                  <textarea rows={4} className="w-full px-8 py-5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" placeholder="Tell us about your project requirements..." />
                </div>
                <button className="w-full bg-[#0a1d4d] text-white py-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-4 hover:shadow-2xl hover:bg-blue-900 transition-all">
                  Send Proposal <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
