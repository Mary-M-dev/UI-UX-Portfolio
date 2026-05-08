import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link to={`/case-study/${project.id}`}>
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300">
          {/* Project Image */}
          <div className="relative h-64 bg-gradient-to-br from-yellow-500/10 to-transparent overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center text-yellow-500 font-medium text-sm group-hover:gap-2 transition-all">
              View Case Study
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
