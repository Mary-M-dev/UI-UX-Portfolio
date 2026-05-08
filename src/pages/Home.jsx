import { motion } from 'framer-motion';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { projects, experience, skills } from '../data/projects';

export default function Home() {
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
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <Section
        id="work"
        title="Featured Work"
        subtitle="A selection of projects where I've bridged product strategy, design, and technology"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section
        id="about"
        title="About Me"
        subtitle="My journey from Economics & Sociology to Product Design"
        dark
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-gray-300">
              <p>
                My journey into product design began with a foundation in Economics and Sociology. These disciplines taught me to think critically about systems, human behavior, and the intersection of business and society.
              </p>
              <p>
                I transitioned into Product Design because I realized that the most impactful work happens at the intersection of user needs, business outcomes, and technological possibilities. I'm passionate about creating digital experiences that are not just beautiful, but meaningful.
              </p>
              <p>
                Today, I specialize in AI-augmented product design—leveraging artificial intelligence to create smarter, more personalized experiences that solve real problems. I believe in human-centered design that respects user agency while delivering business value.
              </p>
              <p>
                My approach combines strategic thinking with hands-on design execution, always keeping the user at the center while balancing business objectives and technical constraints.
              </p>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
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
      </Section>

      {/* Experience Section */}
      <Section
        id="experience"
        title="Experience"
        subtitle="My professional journey and key achievements"
      >
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
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
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="Skills & Tools"
        subtitle="My expertise across product, design, and technology"
        dark
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-500/30 transition-all"
            >
              <h3 className="text-lg font-bold text-yellow-500 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm border border-yellow-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        title="Let's Work Together"
        subtitle="I'm always interested in discussing new projects and opportunities"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-lg p-8"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-4">Or connect with me on:</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:mary@example.com"
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all"
                >
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
