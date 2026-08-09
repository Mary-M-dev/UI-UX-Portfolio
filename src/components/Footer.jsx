import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
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

