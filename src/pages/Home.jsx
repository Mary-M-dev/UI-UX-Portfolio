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
      <section className="relative min-h-screen flex items-center justify-center px-0 sm:px-0 lg:px-0 overflow-hidden pb-20">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-center">

            {/* Left Column - Product Designer — dims on hover */}
            <motion.div
              animate={{ opacity: isHovering ? 0.15 : 1 }}
              transition={{ duration: 0.4 }}
              className="md:col-span-3 flex flex-col justify-center mb-12 md:mb-0"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
                    Product<br />Designer
                  </h2>
                  <div className="w-16 h-1 bg-pink-500"></div>
                </div>
                <ul className="space-y-3">
                  {['UI/UX Design', 'Design Systems', 'User Research'].map((skill) => (
                    <li key={skill} className="text-gray-700 flex items-center gap-3">
                      <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></span>
                      <span className="text-base">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Center Column - Portrait Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-6 flex justify-center mb-12 md:mb-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative w-full max-w-sm">
                {/* Left Paint Splash */}
                <motion.svg
                  className="absolute w-32 h-32 -left-10 top-1/3"
                  viewBox="0 0 100 100"
                  animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  <g fill="#BFFF00" opacity="0.7">
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
                  className="absolute w-28 h-28 -right-8 bottom-1/3"
                  viewBox="0 0 100 100"
                  animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.8 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <g fill="#EC4899" opacity="0.6">
                    <circle cx="70" cy="30" r="7" />
                    <circle cx="85" cy="45" r="6" />
                    <circle cx="75" cy="60" r="5" />
                    <circle cx="60" cy="50" r="6" />
                    <circle cx="80" cy="70" r="4" />
                    <circle cx="65" cy="75" r="5" />
                  </g>
                </motion.svg>

                {/* Portrait with flip */}
                <motion.div
                  className="relative z-10 w-full aspect-[3/3.5] overflow-hidden"
                  animate={{ rotateY: isHovering ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ perspective: 1000 }}
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
                      src="/flip.jpeg"
                      alt="Mary Mwirigi - Flip"
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Product Owner — brightens on hover */}
            <motion.div
              animate={{ opacity: isHovering ? 1 : 1 }}
              transition={{ duration: 0.4 }}
              className="md:col-span-3 flex flex-col justify-center"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
                    Product<br />Owner
                  </h2>
                  <div className="w-16 h-1 bg-pink-500"></div>
                </div>
                <ul className="space-y-3">
                  {['Product Strategy', 'Agile Architecture', 'Stakeholder Management'].map((skill) => (
                    <li key={skill} className="text-gray-700 flex items-center justify-start gap-3">
                      <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></span>
                      <span className="text-base">{skill}</span>
                    </li>
                  ))}
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
