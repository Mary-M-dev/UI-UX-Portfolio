import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  const CardContent = () => (
    <div className="bg-white border border-black/8 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
      
      {/* Image / Preview Area */}
      <div
        className="relative h-52 overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: project.cardBg || '#F3F4F6' }}
      >
        {project.id === 'dtma' ? (
          /* Laptop mockup for DTMA */
          <div className="flex flex-col items-center scale-[0.55] origin-center">
            <div className="bg-gray-800 rounded-xl p-1.5 shadow-xl border-2 border-gray-700" style={{ width: '480px' }}>
              <div className="overflow-hidden rounded-lg bg-black">
                <img src={project.image} alt="DTMA" className="w-full h-auto object-contain block" />
              </div>
            </div>
            <div className="bg-gray-700 rounded-b-md" style={{ width: '500px', height: '4px' }}></div>
            <div className="bg-gray-800 rounded-b-lg" style={{ width: '520px', height: '8px' }}></div>
          </div>
        ) : project.id === 'reserve-me' ? (
          /* Phone mockup for Reserve Me */
          <div className="flex items-center justify-center h-full">
            <div className="relative scale-[0.65] origin-center" style={{ width: '140px', height: '280px' }}>
              <div className="absolute inset-0 bg-gray-800 rounded-[2rem] border-4 border-gray-600 shadow-2xl"></div>
              <div className="absolute -left-1.5 top-14 w-1 h-6 bg-gray-600 rounded-l-full"></div>
              <div className="absolute -left-1.5 top-24 w-1 h-8 bg-gray-600 rounded-l-full"></div>
              <div className="absolute -right-1.5 top-20 w-1 h-10 bg-gray-600 rounded-r-full"></div>
              <div className="absolute inset-1.5 rounded-[1.6rem] overflow-hidden flex flex-col" style={{ backgroundColor: '#8B0000' }}>
                <div className="flex-1 flex items-center justify-center flex-col gap-2">
                  <svg width="32" height="36" viewBox="0 0 48 56" fill="white">
                    <rect x="21" y="0" width="6" height="7" rx="3"/>
                    <path d="M24 5 C13 5 8 14 8 24 L8 38 L3 42 L45 42 L40 38 L40 24 C40 14 35 5 24 5Z"/>
                    <ellipse cx="24" cy="50" rx="5" ry="5"/>
                    <rect x="22" y="42" width="4" height="10" rx="2"/>
                  </svg>
                  <p className="text-white font-bold text-[9px] tracking-wide">Reserve me</p>
                  <p className="text-white/60 text-[7px]">Reservation made easy</p>
                </div>
                <div className="flex justify-center pb-2">
                  <div className="w-10 h-0.5 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        ) : project.id === 'health-mobile' ? (
          /* Phone mockup for AFYACARE with Coming Soon */
          <div className="flex items-center justify-center h-full">
            <div className="relative scale-[0.65] origin-center" style={{ width: '140px', height: '280px' }}>
              <div className="absolute inset-0 bg-gray-800 rounded-[2rem] border-4 border-gray-600 shadow-2xl"></div>
              <div className="absolute -left-1.5 top-14 w-1 h-6 bg-gray-600 rounded-l-full"></div>
              <div className="absolute -left-1.5 top-24 w-1 h-8 bg-gray-600 rounded-l-full"></div>
              <div className="absolute -right-1.5 top-20 w-1 h-10 bg-gray-600 rounded-r-full"></div>
              <div className="absolute inset-1.5 rounded-[1.6rem] overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#f0fdf4' }}>
                <div className="text-center px-4">
                  <img src="/Afyacare logo.svg" alt="AFYACARE" className="w-20 h-auto mx-auto" />
                </div>
              </div>
            </div>
          </div>
        ) : project.image ? (
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

        {/* Coming Soon Badge */}
        {project.comingSoon && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            Coming Soon
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
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group"
    >
      {project.comingSoon ? (
        <div className="cursor-not-allowed">
          <CardContent />
        </div>
      ) : (
        <Link to={`/case-study/${project.id}`}>
          <CardContent />
        </Link>
      )}
    </motion.div>
  );
}
