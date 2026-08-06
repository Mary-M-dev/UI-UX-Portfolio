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
                Explore some of my recent product design work.
              </p>
              <p className="text-base text-black/40 max-w-sm leading-relaxed">
                From AI-powered product prototypes to digital transformation initiatives and user-centered experiences, each project showcases how I solve complex problems through strategy, research, and thoughtful design.
              </p>
            </motion.div>

            {/* Right: Actual project mockup previews */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-72 hidden md:block"
            >
              {/* Card 1 — DTMA (laptop, back-left) */}
              <div className="absolute top-0 left-0 w-56 bg-white rounded-2xl shadow-xl border border-black/8 p-2 -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-28 rounded-xl overflow-hidden mb-2" style={{ backgroundColor: '#E8EDF5' }}>
                  <div className="flex flex-col items-center justify-center h-full scale-[0.45] origin-center">
                    <div className="bg-gray-800 rounded-lg p-1 border border-gray-700 shadow-lg" style={{ width: '300px' }}>
                      <img src="/Screenshots/22.png" alt="DTMA" className="w-full h-auto object-contain rounded-md block" />
                    </div>
                  </div>
                </div>
                <div className="px-1 pb-1">
                  <p className="text-[9px] text-black/40 uppercase tracking-widest mb-0.5">Web App</p>
                  <p className="text-xs font-bold text-black">DTMA</p>
                </div>
              </div>

              {/* Card 2 — Reserve Me (phone, center) */}
              <div className="absolute top-8 left-36 w-52 bg-white rounded-2xl shadow-xl border border-black/8 p-2 rotate-2 hover:rotate-0 transition-transform duration-300 z-10">
                <div className="w-full h-28 rounded-xl overflow-hidden mb-2 flex items-center justify-center" style={{ backgroundColor: '#FDE8E8' }}>
                  <div className="relative scale-[0.38] origin-center" style={{ width: '140px', height: '280px' }}>
                    <div className="absolute inset-0 bg-gray-800 rounded-[2rem] border-4 border-gray-600 shadow-2xl"></div>
                    <div className="absolute inset-1.5 rounded-[1.6rem] overflow-hidden flex flex-col" style={{ backgroundColor: '#8B0000' }}>
                      <div className="flex-1 flex items-center justify-center flex-col gap-2">
                        <svg width="32" height="36" viewBox="0 0 48 56" fill="white">
                          <rect x="21" y="0" width="6" height="7" rx="3"/>
                          <path d="M24 5 C13 5 8 14 8 24 L8 38 L3 42 L45 42 L40 38 L40 24 C40 14 35 5 24 5Z"/>
                          <ellipse cx="24" cy="50" rx="5" ry="5"/>
                          <rect x="22" y="42" width="4" height="10" rx="2"/>
                        </svg>
                        <p className="text-white font-bold text-[10px]">Reserve me</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-1 pb-1">
                  <p className="text-[9px] text-black/40 uppercase tracking-widest mb-0.5">Mobile App</p>
                  <p className="text-xs font-bold text-black">Reserve Me</p>
                </div>
              </div>

              {/* Card 3 — AFYACARE (phone, front-right) */}
              <div className="absolute top-20 left-72 w-52 bg-white rounded-2xl shadow-xl border border-black/8 p-2 rotate-1 hover:rotate-0 transition-transform duration-300 z-20">
                <div className="w-full h-28 rounded-xl overflow-hidden mb-2 flex items-center justify-center" style={{ backgroundColor: '#E0F2F1' }}>
                  <div className="relative scale-[0.38] origin-center" style={{ width: '140px', height: '280px' }}>
                    <div className="absolute inset-0 bg-gray-800 rounded-[2rem] border-4 border-gray-600 shadow-2xl"></div>
                    <div className="absolute inset-1.5 rounded-[1.6rem] overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
                      <img src="/HF/O5.png" alt="AFYACARE" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="px-1 pb-1">
                  <p className="text-[9px] text-black/40 uppercase tracking-widest mb-0.5">Mobile App</p>
                  <p className="text-xs font-bold text-black">AFYACARE</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Projects Grid with Background Image ── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ 
          backgroundImage: 'url(/HF/Background.svg)',
          backgroundSize: 'contain',
          backgroundPosition: 'center 60%',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#F2EFE9'
        }}
      >
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
                {project.comingSoon ? (
                  <div className="cursor-not-allowed">
                    {/* Paper Card */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 relative">

                      {/* Pink Tape */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-5 bg-pink-400 opacity-80 rounded-sm z-10 rotate-1" />

                      {/* Image Area */}
                      <div
                        className="relative h-52 overflow-hidden flex items-center justify-center"
                        style={{ backgroundColor: project.cardBg || '#F3F4F6' }}
                      >
                        {project.id === 'health-mobile' ? (
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
                          <div className="text-6xl opacity-20">
                            {project.icon}
                          </div>
                        )}

                        {/* Coming Soon Badge */}
                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          Coming Soon
                        </div>
                      </div>

                      {/* Card Info */}
                      <div className="p-5 pt-4">
                        <p className="text-xs text-black/40 mb-1 uppercase tracking-widest">
                          {project.category || project.tags?.[0] || 'Case Study'}
                        </p>
                        <h3 className="text-sm font-semibold text-black leading-snug mb-2">
                          {project.title}
                        </h3>
                        {project.description && (
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {project.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
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
                      {project.id === 'dtma' ? (
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
                        <div className="flex items-center justify-center h-full">
                          <div className="relative scale-[0.65] origin-center" style={{ width: '140px', height: '280px' }}>
                            <div className="absolute inset-0 bg-gray-800 rounded-[2rem] border-4 border-gray-600 shadow-2xl"></div>
                            <div className="absolute -left-1.5 top-14 w-1 h-6 bg-gray-600 rounded-l-full"></div>
                            <div className="absolute -left-1.5 top-24 w-1 h-8 bg-gray-600 rounded-l-full"></div>
                            <div className="absolute -right-1.5 top-20 w-1 h-10 bg-gray-600 rounded-r-full"></div>
                            <div className="absolute inset-1.5 rounded-[1.6rem] overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
                              <img src="/HF/O5.png" alt="AFYACARE screen" className="w-full h-full object-cover" />
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
                      <h3 className="text-sm font-semibold text-black leading-snug group-hover:text-pink-500 transition-colors mb-2">
                        {project.title}
                      </h3>
                      {project.description && (
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* ── My Other Creative Work ── */}
          <div className="mt-32">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">
                My Other Creative Work<span className="text-pink-500">.</span>
              </h2>
              <p className="text-base text-black/60 max-w-2xl">
                Beyond UX/UI design, I explore visual design and creative expression through various mediums.
              </p>
            </div>

            {/* Creative Work Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: '/creative/Instagram post - 16.svg', title: 'Instagram Post' },
                { src: '/creative/Poster design 1.svg', title: 'Poster Design for a Travel Agency' },
                { src: '/creative/mag 1.svg', title: 'Magazine Cover Interior Design Company' },
                { src: '/creative/Branding.svg', title: 'Dubai Taxi Branding' },
                { src: '/creative/Banner ad  wire frame.svg', title: 'An Animated Banner Ad' },
                { src: '/creative/Banner ad  wire frame (1).svg', title: 'An Animated Banner Ad' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-black/8">
                    {/* Image Container */}
                    <div className="aspect-square bg-gray-50 overflow-hidden">
                      <img 
                        src={item.src} 
                        alt={item.title}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Title */}
                    <div className="p-4">
                      <p className="text-sm font-semibold text-black group-hover:text-pink-500 transition-colors">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
