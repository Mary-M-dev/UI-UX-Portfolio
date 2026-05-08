import { Link } from 'react-router-dom';

export default function Button({ children, variant = 'primary', to, onClick, className = '' }) {
  const baseStyles = 'px-8 py-3 font-semibold transition-all duration-300 inline-block';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-200 hover:shadow-lg',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-black',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={styles}>{children}</Link>;
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
