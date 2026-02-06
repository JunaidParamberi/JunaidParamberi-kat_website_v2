
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'dark' | 'glass' | 'outline';
  icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'blue', icon }) => {
  const styles = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    dark: "bg-[#0a1d4d] text-white border-white/10",
    glass: "bg-white/10 backdrop-blur-md text-white border-white/20",
    outline: "bg-transparent border border-slate-200 text-slate-600"
  };

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest border transition-all ${styles[variant]}`}>
      {icon && <span className="w-3.5 h-3.5">{icon}</span>}
      {children}
    </div>
  );
};

export default Badge;
