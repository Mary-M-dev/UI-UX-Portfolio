import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Mary Mwirigi
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection('work')}
            className="hover:text-gold transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-gold transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-gold transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 space-y-4">
          <button
            onClick={() => scrollToSection('work')}
            className="block w-full text-left hover:text-gold transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left hover:text-gold transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left hover:text-gold transition-colors"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
