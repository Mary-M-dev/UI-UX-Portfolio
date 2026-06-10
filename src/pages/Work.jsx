import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Work() {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* ── Hero Section ── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-7xl font-bold text-black leading-none">
                portfolio<span className="text-pink-500">.</span>
              </h1>
              <p className="text-lg text-black/60 max-w-md leading-relaxed">
                Check out some of my latest product design case studies.
              </p>
              <p className="text-base text-black/40 max-w-sm leading-relaxed">
                I've worked on digital products across EdTech, FinTech, and enterprise — focusing on experiences that are intuitive, meaningful, and human-centered.
              </p>
            </motion.div>

            {/* Right: Floating UI Preview Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-64 hidden md:block"
            >
              {/* Card 1 */}
              <div className="absolute top-0 right-24 w-48 bg-white rounded-xl shadow-lg border border-black/8 p-3 rotate-2">
                <div className="w-full h-24 bg-pink-50 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-pink-400 text-2xl">✏️</span>
                </div>
                <div className="h-2 bg-black/10 rounded w-3/4 mb-1" />
                <div className="h-2 bg-black/6 rounded w-1/2" />
              </div>
              {/* Card 2 */}
              <div className="absolute top-10 right-4 w-44 bg-white rounded-xl shadow-lg border border-black/8 p-3 -rotate-2">
                <div className="w-full h-20 bg-blue-50 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-blue-400 text-2xl">📊</span>
                </div>
                <div className="h-2 bg-black/10 rounded w-full mb-1" />
                <div className="h-2 bg-black/6 rounded w-2/3" />
              </div>
              {/* Card 3 */}
              <div className="absolute bottom-0 right-16 w-40 bg-white rounded-xl shadow-lg border border-black/8 p-3 rotate-1">
                <div className="w-full h-16 bg-green-50 rounded-lg mb-2 flex items-center justify-center">
                  <span className="text-green-400 text-2xl">🔧</span>
                </div>
                <div className="h-2 bg-black/10 rounded w-5/6 mb-1" />
                <div className="h-2 bg-black/6 rounded w-1/3" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Projects Grid with Textured Background ── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: '#F2EFE9' }}
      >
        {/* UX Quote Watermarks */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <span className="absolute top-12 left-1/2 -translate-x-1/2 text-3xl md:text-4xl font-bold text-black/[0.03] whitespace-nowrap tracking-wide italic">
            Don't Make Me Think
          </span>
          <span className="absolute top-1/2 left-8 -rotate-90 origin-left text-2xl font-bold text-black/[0.03] whitespace-nowrap tracking-widest italic">
            Test early
          </span>
          <span className="absolute bottom-64 left-1/2 -translate-x-1/4 text-2xl md:text-3xl font-bold text-black/[0.03] whitespace-nowrap tracking-wide italic">
            Friction is the enemy
          </span>
          <span className="absolute bottom-32 right-8 text-2xl md:text-3xl font-bold text-black/[0.03] whitespace-nowrap tracking-wide italic">
            You are not your user
          </span>
          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-4xl md:text-6xl font-black text-black/[0.03] whitespace-nowrap tracking-widest uppercase">
            DESIGN
          </span>
          {/* Stars */}
          <span className="absolute bottom-40 left-12 text-black/[0.04] text-3xl">★</span>
          <span className="absolute bottom-20 right-40 text-black/[0.04] text-2xl">★</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Link to={`/case-study/${project.id}`}>
                  {/* Paper Card */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative">

                    {/* Pink Tape */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-5 bg-pink-400 opacity-80 rounded-sm z-10 rotate-1" />

                    {/* Image Area */}
                    <div
                      className="relative h-52 overflow-hidden flex items-center justify-center"
                      style={{ backgroundColor: project.cardBg || '#F3F4F6' }}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-full ${project.imageStyle === 'contain' ? 'object-contain p-4' : 'object-cover object-top'}`}
                        />
                      ) : (
                        <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                          {project.icon}
                        </div>
                      )}

                      {/* NDA Badge */}
                      {project.nda && (
                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          🔒 NDA
                        </div>
                      )}
                    </div>

                    {/* Card Info */}
                    <div className="p-5 pt-4">
                      <p className="text-xs text-black/40 mb-1 uppercase tracking-widest">
                        {project.category || project.tags?.[0] || 'Case Study'}
                      </p>
                      <h3 className="text-sm font-semibold text-black leading-snug group-hover:text-pink-500 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
