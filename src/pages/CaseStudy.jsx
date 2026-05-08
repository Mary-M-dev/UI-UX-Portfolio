import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Button from '../components/Button';

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'research', label: 'Research' },
    { id: 'journey', label: 'User Journey' },
    { id: 'wireframes', label: 'Wireframes' },
    { id: 'decisions', label: 'Design Decisions' },
    { id: 'screens', label: 'High Fidelity' },
    { id: 'impact', label: 'Impact' },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl opacity-10 animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-6xl"
          >
            {project.icon}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {project.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center mb-8"
          >
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/20"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            {project.overview}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/">
              <Button variant="secondary">← Back to Portfolio</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sticky Table of Contents */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-sm font-bold text-yellow-500 mb-4 uppercase tracking-wider">
                Sections
              </h3>
              <nav className="space-y-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            {/* Overview */}
            <motion.section
              id="overview"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.overview}
              </p>
            </motion.section>

            {/* Problem Statement */}
            <motion.section
              id="problem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </motion.section>

            {/* Research & Insights */}
            <motion.section
              id="research"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Research & Insights</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.research}
              </p>
              <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-lg p-8 text-center">
                <p className="text-gray-400">Research insights visualization placeholder</p>
              </div>
            </motion.section>

            {/* User Journey */}
            <motion.section
              id="journey"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">User Journey</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.userJourney}
              </p>
              <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-lg p-8 text-center">
                <p className="text-gray-400">User journey map placeholder</p>
              </div>
            </motion.section>

            {/* Wireframes */}
            <motion.section
              id="wireframes"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Wireframes</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.wireframes}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-lg p-8 text-center aspect-video flex items-center justify-center"
                  >
                    <p className="text-gray-400">Wireframe {i}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Design Decisions */}
            <motion.section
              id="decisions"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Design Decisions</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.designDecisions}
              </p>
              <div className="space-y-4">
                {['Decision 1', 'Decision 2', 'Decision 3'].map((decision, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h4 className="text-yellow-500 font-semibold mb-2">{decision}</h4>
                    <p className="text-gray-400">Key rationale and implementation details</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* High Fidelity Screens */}
            <motion.section
              id="screens"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">High Fidelity Screens</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.screens}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-lg p-8 text-center aspect-video flex items-center justify-center"
                  >
                    <p className="text-gray-400">Screen {i}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Impact & Learnings */}
            <motion.section
              id="impact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Impact & Learnings</h2>
              <div className="bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-lg p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.impact}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {[
                    { metric: '+40%', label: 'Engagement' },
                    { metric: '4.8★', label: 'Rating' },
                    { metric: '50K+', label: 'Users' },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-3xl font-bold text-yellow-500 mb-2">{stat.metric}</p>
                      <p className="text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Next Steps */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2">Interested in working together?</h3>
                  <p className="text-gray-400">Let's discuss how I can help with your next project</p>
                </div>
                <Link to="/#contact">
                  <Button variant="primary" size="lg">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
