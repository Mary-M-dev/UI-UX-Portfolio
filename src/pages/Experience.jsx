import { motion } from 'framer-motion';
import { experience, skills } from '../data/projects';

export default function ExperiencePage() {
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl opacity-10 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Experience<span className="text-yellow-500">.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-6 mb-20">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-500/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-yellow-500 font-medium">{exp.company}</p>
                  </div>
                  <p className="text-gray-400 text-sm mt-2 md:mt-0">{exp.duration}</p>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, aidx) => (
                    <li key={aidx} className="text-gray-300 flex items-start gap-3">
                      <span className="text-yellow-500 mt-1">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              Skills & Tools<span className="text-yellow-500">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-500/30 transition-all"
                >
                  <h3 className="text-lg font-bold text-yellow-500 mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm border border-yellow-500/20 hover:border-yellow-500/50 hover:bg-yellow-500/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
