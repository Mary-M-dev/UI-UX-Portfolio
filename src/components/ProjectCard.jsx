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
