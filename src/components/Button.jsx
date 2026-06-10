import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon = null,
  className = '',
  ...props 
}) {
  const baseStyles = 'font-medium transition-all duration-300 rounded-lg inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-white';
  
  const variants = {
    primary: 'bg-pink-500 text-white hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105',
    secondary: 'border-2 border-pink-300 text-black hover:border-pink-500 hover:bg-pink-500/10 hover:shadow-lg hover:shadow-pink-500/20 hover:scale-105',
    ghost: 'text-black hover:text-pink-500 hover:bg-pink-300/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </motion.button>
  );
}
