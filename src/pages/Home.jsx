import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-20">
        {/* White Background with Pink Gradient Overlay */}
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-pink-100/30"></div>
        
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black">
                Hi, I am Mary
              </h1>
              <h2 className="text-3xl sm:text-4xl font-normal text-gray-700">
                Product Designer
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                I turn complex product challenges into simple, intuitive experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/work">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-pink-500 text-white font-medium rounded-lg shadow-md hover:bg-pink-600 transition-colors"
                  >
                    View Portfolio
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-black font-medium rounded-lg border-2 border-gray-300 hover:border-pink-500 transition-colors"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative">
                {/* Circular pink gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-transparent rounded-full transform -translate-x-8"></div>
                
                {/* Profile Image Container */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/Passport.jpeg"
                    alt="Mary Mwirigi - Product Designer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Decorative pink dots - left side */}
                <div className="absolute left-8 top-1/3 space-y-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-pink-300 rounded-full ml-2"></div>
                </div>

                {/* Decorative pink dots - right side */}
                <div className="absolute right-8 bottom-1/3 space-y-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-pink-300 rounded-full mr-2"></div>
                  <div className="w-2.5 h-2.5 bg-pink-350 rounded-full"></div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Header Row */}
          <div className="flex items-center justify-between mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Some of my latest work
            </span>
            <Link to="/work" className="text-sm text-black/60 hover:text-pink-500 transition-colors">
              See More
            </Link>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-black/10 mb-10" />

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
