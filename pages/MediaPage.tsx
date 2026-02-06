
import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, Clock, ArrowRight, Newspaper, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const MediaPage: React.FC = () => {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Editorial Header */}
      <section className="py-20 md:py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-[1px] bg-blue-600" />
                <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Media Hub</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-slate-900 leading-[1] lg:leading-[0.85] tracking-tighter">
                Industrial <br /><span className="text-blue-600">Insights.</span>
              </h1>
            </div>
            <div className="md:w-1/3 border-l border-slate-100 pl-8 space-y-4">
              <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">
                Stay updated with the latest in industrial manpower, technical innovations, and corporate expansion from the heart of the Middle East.
              </p>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                <Newspaper className="w-4 h-4" /> Global Press Wire Active
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
             {/* Featured Post: Hero Article */}
             <div className="md:col-span-2 lg:col-span-12">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group relative h-[500px] md:h-[550px] lg:h-[650px] rounded-[3rem] lg:rounded-[4rem] overflow-hidden bg-slate-900 shadow-2xl"
                >
                  <img src={featuredPost.image} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[2.5s]" alt="Featured" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d4d] via-transparent to-transparent" />
                  <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-end z-20">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="bg-blue-600 text-white px-4 md:px-5 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest w-fit mb-6 md:mb-8 shadow-xl"
                    >
                      Featured Story
                    </motion.div>
                    <Link to={`/media/${featuredPost.id}`}>
                      <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black text-white tracking-tighter mb-6 md:mb-8 max-w-5xl group-hover:text-blue-300 transition-colors leading-[1.1]">
                        {featuredPost.title}
                      </h2>
                    </Link>
                    <div className="flex flex-wrap gap-4 md:gap-10 text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-widest border-t border-white/10 pt-6 md:pt-8">
                       <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-400" /> {featuredPost.date}</span>
                       <span className="flex items-center gap-2"><User className="w-4 h-4 text-blue-400" /> By {featuredPost.author}</span>
                       <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-400" /> {featuredPost.readTime}</span>
                    </div>
                  </div>
                  <div className="absolute top-8 right-8 z-20">
                     <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                        <Zap className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
                     </div>
                  </div>
                </motion.div>
             </div>

             {/* Smaller Posts Grid */}
             {otherPosts.map((post, idx) => (
               <div key={idx} className="md:col-span-1 lg:col-span-6">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className="group p-6 lg:p-10 rounded-[2.5rem] lg:rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all h-full flex flex-col"
                 >
                   <div className="h-64 lg:h-80 rounded-[2rem] overflow-hidden mb-6 lg:mb-8 relative">
                     <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={post.title} />
                     <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 rounded-full bg-[#0a1d4d] text-white text-[9px] font-black uppercase tracking-widest">
                          {post.category}
                        </span>
                     </div>
                   </div>
                   <div className="flex-grow">
                     <h3 className="text-2xl lg:text-3xl font-heading font-black text-slate-900 mb-4 lg:mb-6 tracking-tighter group-hover:text-blue-600 transition-colors leading-tight">
                       {post.title}
                     </h3>
                     <p className="text-slate-500 font-light leading-relaxed mb-6 line-clamp-3 text-sm md:text-base">
                       {post.excerpt}
                     </p>
                   </div>
                   <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                     <Link 
                      to={`/media/${post.id}`}
                      className="flex items-center gap-3 text-[#0a1d4d] font-bold text-[9px] md:text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all"
                     >
                       Read Full <ArrowRight className="w-5 h-5" />
                     </Link>
                     <span className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">{post.readTime}</span>
                   </div>
                 </motion.div>
               </div>
             ))}
          </div>

          {/* Press Section Callout */}
          <section className="mt-24 md:mt-32 p-8 md:p-16 lg:p-20 rounded-[3rem] lg:rounded-[4rem] bg-[#0a1d4d] text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-blue-600/10 rounded-full blur-[80px] md:blur-[100px]" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                <div className="space-y-6 md:space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-[1px] bg-blue-400" />
                      <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px]">Corporate Communications</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter leading-none">Global Media <br /> Relations Center.</h2>
                   <p className="text-slate-300 font-light text-base lg:text-lg max-w-md">Are you a journalist or industrial researcher? Access our high-resolution press kit and official statements.</p>
                   <div className="flex flex-wrap gap-4">
                      <button className="bg-white text-[#0a1d4d] px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold hover:shadow-2xl transition-all text-sm">Media Kit</button>
                      <button className="bg-white/10 text-white border border-white/20 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold hover:bg-white/20 transition-all text-sm">Contact</button>
                   </div>
                </div>
                <div className="hidden md:grid grid-cols-2 gap-4 lg:gap-6 opacity-20">
                   {[Globe, Newspaper, Zap, User].map((Icon, i) => (
                     <div key={i} className="aspect-square bg-white/5 rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center">
                        <Icon className="w-12 h-12 lg:w-16 lg:h-16" />
                     </div>
                   ))}
                </div>
             </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
