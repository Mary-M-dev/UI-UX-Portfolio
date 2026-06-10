import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4.01 0 4.75 2.64 4.75 6.07V24h-4v-8.93c0-2.13-.04-4.87-2.97-4.87-2.97 0-3.42 2.32-3.42 4.72V24H8V8z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const BehanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zm-7.718-3.967c-.088-1.95-1.246-2.563-2.457-2.563-1.281 0-2.306.652-2.633 2.563h5.09zM8.506 14.557c.873-.355 1.416-1.093 1.416-2.187 0-1.712-1.32-2.818-3.619-2.818H0v9.896h6.368c2.44 0 4.011-1.154 4.011-3.115 0-1.333-.62-2.25-1.873-2.776zM4 10.898h1.726c.962 0 1.689.496 1.689 1.366 0 .857-.653 1.371-1.705 1.371H4v-2.737zm0 4.49h2.017c1.086 0 1.837.496 1.837 1.465 0 .965-.733 1.464-1.849 1.464H4v-2.929z"/>
  </svg>
);

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Portfolio', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/marymwirigiproductdesigner/' },
    { name: 'Behance', icon: <BehanceIcon />, url: 'https://www.behance.net/marynmwirigi' },
  ];

  return (
    <footer className="border-t border-white/10" style={{ backgroundColor: '#010A08' }}>
      {/* Back to Top Button */}
      <div className="flex justify-center pt-8 pb-4">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-pink-500 hover:text-pink-500 transition-all"
        >
          ↑
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left: Copyright */}
          <p className="text-white/60 text-sm">
            © 2026 Mary Mwirigi
          </p>

          {/* Center: Navigation Links */}
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white/70 hover:text-white text-sm transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right: Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-pink-500 transition-colors"
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

