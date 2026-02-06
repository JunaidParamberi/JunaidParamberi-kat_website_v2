
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, ArrowRight, Quote } from 'lucide-react';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="py-40 text-center bg-[#0a1d4d] min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-heading font-bold text-white mb-6">Article Not Found</h2>
        <Link to="/media" className="text-blue-400 hover:text-white transition-colors">Return to Media Hub</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Immersive Hero Header */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-end overflow-hidden bg-slate-900">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={post.image} 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          alt={post.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-[#0a1d4d]/30 mix-blend-multiply" />
        
        <div className="relative z-20 container mx-auto px-6 pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <button
              onClick={() => navigate('/media')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Media Hub
            </button>
          </motion.div>
          
          <div className="max-w-5xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest mb-6 shadow-xl"
            >
              {post.category}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-8xl font-heading font-black leading-[1] md:leading-[0.85] tracking-tighter mb-10 text-[#0a1d4d]"
            >
              {post.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-8 text-[#0a1d4d]/60 text-[10px] font-black uppercase tracking-[0.2em]"
            >
              <div className="flex items-center gap-2"><User className="w-4 h-4 text-blue-600" /> {post.author}</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-600" /> {post.date}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-600" /> {post.readTime}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-xl prose-slate max-w-none">
                {post.content.map((paragraph, i) => (
                  <motion.p 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`text-slate-600 leading-relaxed text-xl md:text-2xl font-light mb-8 ${i === 0 ? 'first-letter:text-7xl first-letter:font-black first-letter:text-blue-600 first-letter:float-left first-letter:mr-4 first-letter:mt-2' : ''}`}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {post.quote && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-slate-50 border-l-4 border-blue-600 p-12 md:p-16 rounded-r-[3rem] relative overflow-hidden"
                >
                  <Quote className="absolute top-8 right-8 w-24 h-24 text-blue-100/50" />
                  <p className="text-3xl md:text-4xl font-heading font-black text-[#0a1d4d] tracking-tight italic leading-tight relative z-10 mb-6">
                    "{post.quote}"
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">— {post.author}, {post.authorRole}</p>
                </motion.div>
              )}

              {/* Engagement Buttons */}
              <div className="pt-16 border-t border-slate-100 flex flex-wrap gap-4">
                 <button className="flex items-center gap-3 bg-[#0a1d4d] text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-900 transition-all">
                    <Share2 className="w-5 h-5" /> Share Article
                 </button>
                 <button className="flex items-center gap-3 border-2 border-slate-200 text-[#0a1d4d] px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                    <Bookmark className="w-5 h-5" /> Save for Later
                 </button>
              </div>
            </div>

            {/* Sidebar Metadata & Related */}
            <div className="lg:col-span-4 space-y-12">
               <div className="sticky top-32 space-y-12">
                  <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Tags</h4>
                    <div className="flex flex-wrap gap-3">
                      {post.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-[#0a1d4d] text-[10px] font-bold uppercase tracking-widest cursor-default hover:border-blue-400 transition-colors">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h4 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Next Industrial Reads</h4>
                    <div className="space-y-6">
                      {BLOG_POSTS.filter(p => p.id !== id).slice(0, 2).map(related => (
                        <Link 
                          key={related.id} 
                          to={`/media/${related.id}`}
                          className="group block"
                        >
                          <div className="aspect-video rounded-3xl overflow-hidden mb-4 border border-slate-100 shadow-sm">
                            <img src={related.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={related.title} />
                          </div>
                          <h5 className="font-bold text-[#0a1d4d] group-hover:text-blue-600 transition-colors leading-tight mb-2">{related.title}</h5>
                          <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">Read Now <ArrowRight className="inline w-3 h-3 ml-1" /></span>
                        </Link>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-32 bg-[#0a1d4d] text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-10 leading-none">
              Insight Driven <br /> Workforce Mastery.
            </h2>
            <Link to="/contact" className="inline-block bg-white text-[#0a1d4d] px-16 py-8 rounded-[2.5rem] font-black text-lg shadow-2xl hover:bg-blue-400 hover:text-white transition-all hover:scale-105">
              Consult a Specialist
            </Link>
         </div>
      </section>
    </div>
  );
};

export default ArticleDetailPage;
