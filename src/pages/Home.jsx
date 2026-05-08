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
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl opacity-10 animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-yellow-500/20 to-transparent border-2 border-yellow-500/30 flex items-center justify-center text-6xl">
              👩‍💼
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Designing AI-Augmented Digital Experiences
            <span className="text-yellow-500"> That Bridge People, Business & Technology</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Product Owner and Product Designer transforming complex digital transformation ideas into intuitive, testable, human-centered experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/work">
              <Button variant="primary" size="lg">
                View My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Let's Connect
              </Button>
            </Link>
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
