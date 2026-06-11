import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link to={`/case-study/${project.id}`}>
        <div className="bg-white border border-black/8 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
          
          {/* Image / Preview Area */}
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
            ) : project.id === 'health-mobile' ? (
              /* Mini phone mockup for AFYACARE */
              <div className="flex items-center justify-center h-full">
                <div className="relative" style={{ width: '90px', height: '180px' }}>
                  <div className="absolute inset-0 bg-gray-700 rounded-[1.4rem] border-2 border-gray-500 shadow-lg"></div>
                  <div className="absolute -left-1 top-10 w-0.5 h-4 bg-gray-500 rounded-l-full"></div>
                  <div className="absolute -right-1 top-12 w-0.5 h-6 bg-gray-500 rounded-r-full"></div>
                  <div className="absolute inset-1 rounded-[1.1rem] overflow-hidden flex flex-col items-center justify-center gap-1" style={{ backgroundColor: '#0f172a' }}>
                    <span className="text-lg">🏥</span>
                    <p className="text-white font-bold text-[7px] tracking-wide">AFYACARE</p>
                    <p className="text-white/40 text-[6px]">Coming Soon</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-7xl opacity-30 group-hover:scale-110 transition-transform duration-300">
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
          <div className="p-5">
            {/* Category */}
            <p className="text-xs text-black/40 mb-2 uppercase tracking-wide">
              {project.category || project.tags?.[0] || 'Case Study'}
            </p>

            {/* Title */}
            <h3 className="text-base font-semibold text-black leading-snug group-hover:text-pink-500 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
