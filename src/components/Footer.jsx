import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Email', url: 'mailto:mary@example.com', icon: '✉️' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2">
              <span className="text-white">Mary</span>
              <span className="text-yellow-500"> Mwirigi</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Product Owner & AI-Augmented Product Designer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link to="/work" className="hover:text-yellow-500 transition-colors">Work</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500 transition-colors">About</Link></li>
              <li><Link to="/experience" className="hover:text-yellow-500 transition-colors">Experience</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all"
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Mary Mwirigi. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-yellow-500 transition-colors"
          >
            ↑ Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
