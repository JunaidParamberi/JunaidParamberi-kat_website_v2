
import React from 'react';
import { PORTFOLIO } from '../constants';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h3 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Project Showcase</h3>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 leading-tight">Success Stories Across Every Industrial Mile.</h2>
          </div>
          <p className="text-slate-500 max-w-sm font-light text-lg">A glimpse into our history of delivering workforce excellence and technical precision for world-class projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PORTFOLIO.map((item, idx) => (
            <div key={idx} className="group relative rounded-[3rem] overflow-hidden bg-slate-900 h-[500px] shadow-2xl">
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d4d] via-[#0a1d4d]/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-12 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                  {item.category}
                </span>
                <h4 className="text-3xl font-heading font-bold text-white mb-4">{item.title}</h4>
                <p className="text-slate-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-light mb-6">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700 cursor-pointer">
                  Case Study <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/portfolio" className="inline-block border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-12 py-5 rounded-2xl font-bold transition-all hover:scale-105">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
