import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-16 sm:pt-20">
        {/* Animated background with floating effect */}
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl opacity-20 animate-float" 
            style={{ animationDelay: '0s' }}
          />
          <div 
            className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl opacity-10 animate-float" 
            style={{ animationDelay: '2s' }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 mx-auto">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-yellow-500/10 rounded-full blur-2xl opacity-60 animate-pulse" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full border-2 border-yellow-500/50 overflow-hidden shadow-2xl shadow-yellow-500/20">
                <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 flex items-center justify-center text-4xl sm:text-5xl md:text-7xl">
                  👩‍💼
                </div>
              </div>
              
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-yellow-500/20 scale-110" />
            </div>
          </motion.div>

          {/* Main Headline - Improved & Shorter */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Strategic Product Thinker
            <span className="text-yellow-500"> & AI-Powered Designer</span>
          </motion.h1>

          {/* Subheadline - Improved & Clearer */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I help product teams design AI-augmented experiences that users love and businesses scale.
            <br />
            <span className="text-gray-500">From strategy to pixel-perfect execution.</span>
          </motion.p>

          {/* CTA Buttons - Improved Copy & Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12"
          >
            <Link to="/work">
              <Button variant="primary" size="lg" className="group">
                <span>Explore My Work</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="group">
                <span>Start a Project</span>
                <svg className="w-5 h-5 group-hover:text-yellow-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Button>
            </Link>
          </motion.div>

          {/* Trust Signals - Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8 sm:pt-12 border-t border-white/10"
          >
            <p className="text-xs sm:text-sm text-gray-500 mb-6">Trusted by leading teams</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-yellow-500">50+</p>
                <p className="text-xs sm:text-sm text-gray-400">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-yellow-500">4.9★</p>
                <p className="text-xs sm:text-sm text-gray-400">Client Rating</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-yellow-500">8+</p>
                <p className="text-xs sm:text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs sm:text-sm text-gray-500">Scroll to explore</p>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 animate-bounce-down" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl opacity-10 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Featured Work<span className="text-yellow-500">.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A selection of projects where I've bridged product strategy, design, and technology
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/work">
              <Button variant="secondary" size="lg">
                View All Projects →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
