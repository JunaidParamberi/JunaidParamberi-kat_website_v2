
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Fix: Omit 'children' from HTMLMotionProps to avoid type conflict with standard React.ReactNode in component body
// This ensures that the children rendered in the motion.button are strictly treated as ReactNode.
interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all rounded-2xl md:rounded-3xl active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest";
  
  const variants = {
    primary: "bg-white text-[#0a1d4d] hover:shadow-2xl hover:shadow-white/10",
    secondary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/20",
    outline: "bg-transparent border-2 border-white/20 text-white hover:bg-white/10",
    ghost: "bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-white/10",
    dark: "bg-[#0a1d4d] text-white hover:bg-blue-900 shadow-xl"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[10px]",
    md: "px-8 py-4 text-xs",
    lg: "px-10 py-5 text-sm",
    xl: "px-12 py-6 text-base md:text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : 'w-auto'} 
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-3">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-3">{icon}</span>}
    </motion.button>
  );
};

export default Button;
