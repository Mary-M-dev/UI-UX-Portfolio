import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { useState } from 'react';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-12 sm:py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">

            {/* Left Column - Product Designer */}
            <motion.div
              animate={{ opacity: isHovering ? 0.15 : 1 }}
              transition={{ duration: 0.4 }}
              className="md:col-span-3 flex flex-col justify-center order-2 md:order-1"
            >
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-2 sm:mb-3">
                    Product<br />Designer
                  </h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-pink-300 to-pink-500"></div>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="text-gray-700 flex items-center gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">UI/UX Design</span>
                  </li>
                  <li className="text-gray-700 flex items-center gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">Design Systems</span>
                  </li>
                  <li className="text-gray-700 flex items-center gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">User Research</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Center Column - Portrait Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-6 flex justify-center order-1 md:order-2 mb-6 md:mb-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative w-full max-w-[280px] sm:max-w-xs">
                {/* Left Paint Splash */}
                <motion.svg
                  className="absolute w-20 h-20 sm:w-28 sm:h-28 -left-6 sm:-left-8 top-1/3 hidden sm:block"
                  viewBox="0 0 100 100"
                  animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  <defs>
                    <linearGradient id="pinkGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f9a8d4" />
                    </linearGradient>
                  </defs>
                  <g fill="url(#pinkGradientLeft)" opacity="0.7">
                    <circle cx="30" cy="20" r="8" />
                    <circle cx="50" cy="15" r="6" />
                    <circle cx="40" cy="35" r="7" />
                    <circle cx="25" cy="45" r="5" />
                    <circle cx="45" cy="50" r="6" />
                    <circle cx="35" cy="60" r="4" />
                    <circle cx="55" cy="40" r="5" />
                  </g>
                </motion.svg>

                {/* Right Paint Splash */}
                <motion.svg
                  className="absolute w-20 h-20 sm:w-24 sm:h-24 -right-4 sm:-right-6 bottom-1/3 hidden sm:block"
                  viewBox="0 0 100 100"
                  animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.8 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <defs>
                    <linearGradient id="pinkGradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f9a8d4" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <g fill="url(#pinkGradientRight)" opacity="0.6">
                    <circle cx="70" cy="30" r="7" />
                    <circle cx="85" cy="45" r="6" />
                    <circle cx="75" cy="60" r="5" />
                    <circle cx="60" cy="50" r="6" />
                    <circle cx="80" cy="70" r="4" />
                    <circle cx="65" cy="75" r="5" />
                  </g>
                </motion.svg>

                {/* Portrait */}
                <motion.div
                  className="relative z-10 w-full overflow-hidden rounded-2xl shadow-lg"
                  style={{ aspectRatio: '3/4' }}
                  animate={{ rotateY: isHovering ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: isHovering ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/IMG-20231121-WA0004 2.svg"
                      alt="Mary Mwirigi - Product Designer & Product Owner"
                      className="w-full h-full object-cover object-top grayscale"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: isHovering ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/Passport.jpeg"
                      alt="Mary Mwirigi"
                      className="w-full h-full object-cover object-top"
                      style={{ filter: 'brightness(1.08) saturate(0.3) contrast(1.05)' }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Product Owner */}
            <motion.div
              animate={{ opacity: isHovering ? 1 : 1 }}
              transition={{ duration: 0.4 }}
              className="md:col-span-3 flex flex-col justify-center order-3"
            >
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-2 sm:mb-3">
                    Product<br />Owner
                  </h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-pink-300"></div>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="text-gray-700 flex items-center gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">Product Strategy</span>
                  </li>
                  <li className="text-gray-700 flex items-center gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">Agile Architecture</span>
                  </li>
                  <li className="text-gray-700 flex items-center gap-2 sm:gap-3">
                    <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">Stakeholder Management</span>
                  </li>
                </ul>
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
            <Link to="/work" className="text-sm text-black/60 hover:text-black transition-colors">
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
