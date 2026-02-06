
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Layout, Briefcase, FileText, Globe, Layers } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA, PORTFOLIO, BLOG_POSTS, SECTORS } from '../constants';
import Badge from './ui/Badge';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  type: 'Service' | 'Project' | 'Article' | 'Expertise';
  title: string;
  description: string;
  url: string;
  image?: string;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Combine all searchable content into a single index
  const searchIndex = useMemo(() => {
    const items: SearchResult[] = [];

    // Add Services
    SERVICES_DATA.forEach(s => items.push({
      id: `service-${s.slug}`,
      type: 'Service',
      title: s.title,
      description: s.shortDescription,
      url: `/services/${s.slug}`,
      image: s.image
    }));

    // Add Portfolio Projects
    PORTFOLIO.forEach(p => items.push({
      id: `project-${p.id}`,
      type: 'Project',
      title: p.title,
      description: p.description,
      url: `/portfolio/${p.id}`,
      image: p.image
    }));

    // Add Blog/Media Posts
    BLOG_POSTS.forEach(b => items.push({
      id: `article-${b.id}`,
      type: 'Article',
      title: b.title,
      description: b.excerpt,
      url: `/media/${b.id}`,
      image: b.image
    }));

    // Add Sectors/Expertise
    SECTORS.forEach(sec => items.push({
      id: `sector-${sec.name}`,
      type: 'Expertise',
      title: sec.name,
      description: sec.description,
      url: `/expertise`,
      image: `https://images.unsplash.com/photo-1541888941257-234b3e839213?auto=format&fit=crop&q=80&w=400`
    }));

    return items;
  }, []);

  // Filter results based on query
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return searchIndex.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.description.toLowerCase().includes(lowerQuery) ||
      item.type.toLowerCase().includes(lowerQuery)
    ).slice(0, 8); // Limit to top 8 results for clean UI
  }, [query, searchIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isOpen]);

  const handleResultClick = (url: string) => {
    onClose();
    navigate(url);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Service': return <Layers className="w-4 h-4" />;
      case 'Project': return <Briefcase className="w-4 h-4" />;
      case 'Article': return <FileText className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start justify-center p-4 md:p-12 lg:pt-24"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0a1d4d]/95 backdrop-blur-2xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Search Input Area */}
            <div className="p-6 md:p-10 border-b border-slate-100 bg-slate-50/50">
              <div className="relative flex items-center">
                <Search className="absolute left-6 w-8 h-8 text-slate-300" />
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects, services, and industrial sectors..."
                  className="w-full pl-20 pr-16 py-8 bg-white rounded-[2rem] border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none text-xl md:text-2xl font-light text-slate-900 transition-all shadow-sm"
                />
                {query && (
                  <button 
                    onClick={() => setQuery('')}
                    className="absolute right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                )}
              </div>
            </div>

            {/* Results Area */}
            <div className="flex-grow overflow-y-auto p-6 md:p-10 bg-white">
              <AnimatePresence mode="wait">
                {query.trim() === '' ? (
                  <motion.div
                    key="quick-links"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-2">
                        <Layout className="w-4 h-4" /> Quick Destinations
                      </h4>
                      <div className="flex flex-col gap-3">
                        {['Services', 'Portfolio', 'Expertise', 'Media'].map((link) => (
                          <button
                            key={link}
                            onClick={() => handleResultClick(`/${link.toLowerCase()}`)}
                            className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 hover:border-blue-500 hover:shadow-lg transition-all group"
                          >
                            <span className="font-bold text-slate-700 group-hover:text-blue-600 uppercase text-xs tracking-widest">{link}</span>
                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 group-hover:text-blue-500 transition-all" />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="p-8 rounded-[2.5rem] border border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
                       <Search className="w-12 h-12 text-slate-200 mb-6" />
                       <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-[10px]">Start Typing</h4>
                       <p className="text-slate-500 text-sm font-light leading-relaxed">
                         Type to instantly find relevant projects, technical services, or industrial insights from our global knowledge base.
                       </p>
                    </div>
                  </motion.div>
                ) : results.length > 0 ? (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between mb-6 px-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                        Showing {results.length} Matches
                      </p>
                    </div>
                    {results.map((item, idx) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => handleResultClick(item.url)}
                        className="w-full flex items-center gap-6 p-4 md:p-6 rounded-[2rem] hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group text-left"
                      >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                          <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                        </div>
                        <div className="flex-grow space-y-2">
                          <div className="flex items-center gap-3">
                            <Badge variant="blue" icon={getTypeIcon(item.type)}>{item.type}</Badge>
                          </div>
                          <h4 className="text-lg md:text-xl font-heading font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-slate-500 text-sm font-light line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-slate-200 group-hover:text-blue-600 group-hover:translate-x-2 transition-all shrink-0" />
                      </motion.button>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="no-results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-24 text-center"
                  >
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                       <X className="w-10 h-10 text-slate-200" />
                    </div>
                    <h3 className="text-2xl font-heading font-black text-slate-900 mb-2">No results found</h3>
                    <p className="text-slate-500 max-w-sm mx-auto font-light">
                      We couldn't find anything matching "{query}". Please try a different term or contact our support team.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:px-10 py-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
               <div className="flex items-center gap-4">
                 <span className="flex items-center gap-2"><kbd className="bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-sm">ESC</kbd> to Close</span>
                 <span className="flex items-center gap-2"><kbd className="bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-sm">ENTER</kbd> to Select</span>
               </div>
               <span>KAT Group Industrial Discovery Engine</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
