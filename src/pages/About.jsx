import { motion } from 'framer-motion';

export default function About() {
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
              About Me<span className="text-yellow-500">.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My journey from Economics & Sociology to Product Design
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  My journey into product design began with a foundation in Economics and Sociology. These disciplines taught me to think critically about systems, human behavior, and the intersection of business and society.
                </p>
                <p className="text-lg leading-relaxed">
                  I transitioned into Product Design because I realized that the most impactful work happens at the intersection of user needs, business outcomes, and technological possibilities. I'm passionate about creating digital experiences that are not just beautiful, but meaningful.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, I specialize in AI-augmented product design—leveraging artificial intelligence to create smarter, more personalized experiences that solve real problems. I believe in human-centered design that respects user agency while delivering business value.
                </p>
                <p className="text-lg leading-relaxed">
                  My approach combines strategic thinking with hands-on design execution, always keeping the user at the center while balancing business objectives and technical constraints.
                </p>
              </div>
            </motion.div>

            {/* Right: Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative">
                {[
                  { year: '2021', label: 'Started Design Journey', icon: '🎓' },
                  { year: '2022', label: 'First Design Internships', icon: '💼' },
                  { year: '2023', label: 'Product Owner Role', icon: '🚀' },
                  { year: '2024', label: 'AI-Augmented Design Focus', icon: '🤖' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                    className="flex gap-4 mb-6"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/50 flex items-center justify-center text-xl">
                        {item.icon}
                      </div>
                      {idx < 3 && <div className="w-0.5 h-12 bg-yellow-500/20 mt-2" />}
                    </div>
                    <div className="pt-2">
                      <p className="text-yellow-500 font-semibold">{item.year}</p>
                      <p className="text-gray-300">{item.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 bg-white/5 border border-white/10 rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-6">My Design Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Human-Centered',
                  description: 'Every design decision starts with understanding real user needs and pain points.',
                },
                {
                  title: 'Strategic Thinking',
                  description: 'Balancing user desires with business goals to create sustainable solutions.',
                },
                {
                  title: 'AI-Augmented',
                  description: 'Leveraging technology to create smarter, more personalized experiences.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-xl font-bold text-yellow-500 mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
