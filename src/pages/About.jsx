import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-0 sm:px-0 lg:px-0 overflow-hidden py-20">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-8">
                {/* Heading */}
                <div>
                  <h1 className="text-6xl md:text-7xl font-bold text-black mb-2">
                    about<span className="text-pink-500">.</span>
                  </h1>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-pink-500 pl-6 py-2 max-w-sm">
                  <p className="text-xl text-black/80 italic font-light">
                    "Find something you love to do, and you'll never work a day in your life."
                  </p>
                </blockquote>

                {/* Bio Paragraph */}
                <div className="space-y-4">
                  <p className="text-xl text-black/80 font-semibold">
                    Hello, am Mary Mwirigi, a Product Designer.
                  </p>
                  <p className="text-lg text-black/70 leading-relaxed max-w-lg">
                    I love creating simple, usable digital experiences that people actually enjoy using
                  </p>
                </div>

                {/* Paint Splash Dots */}
                <div className="relative mt-12 h-32">
                  <svg
                    className="absolute w-40 h-40 left-20 top-0"
                    viewBox="0 0 100 100"
                  >
                    <g fill="#BFFF00" opacity="0.5">
                      <circle cx="30" cy="20" r="8" />
                      <circle cx="50" cy="15" r="6" />
                      <circle cx="40" cy="35" r="7" />
                      <circle cx="25" cy="45" r="5" />
                      <circle cx="45" cy="50" r="6" />
                      <circle cx="35" cy="60" r="4" />
                      <circle cx="55" cy="40" r="5" />
                      <circle cx="20" cy="70" r="6" />
                      <circle cx="60" cy="65" r="4" />
                      <circle cx="15" cy="30" r="5" />
                    </g>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Portrait Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Rounded Image */}
                <div className="relative z-10 w-full aspect-[3/2.8] overflow-hidden rounded-3xl shadow-lg">
                  <img 
                    src="/IMG-20231121-WA0004 2.svg" 
                    alt="Mary Mwirigi - Product Designer & Product Owner" 
                    className="w-full h-full object-cover object-top grayscale"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white -mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              My Design Philosophy<span className="text-pink-500">.</span>
            </h2>
            
            <div className="max-w-2xl space-y-6">
              <p className="text-lg text-black/70 leading-relaxed">
                At my core, I believe great design comes from paying attention to people, their emotions, struggles, and stories. When we truly understand them, we create experiences that feel effortless, thoughtful, and human.
              </p>
            </div>
          </motion.div>

          {/* Three Pillars - Minimalist Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 mt-20">
            {[
              {
                title: 'Human-Centered',
                description: 'Every design decision starts with understanding real user needs and pain points.',
                icon: '👥',
                color: 'from-pink-500/20 to-pink-500/5'
              },
              {
                title: 'Strategic Thinking',
                description: 'Balancing user desires with business goals to create sustainable solutions.',
                icon: '🎯',
                color: 'from-pink-500/15 to-pink-500/0'
              },
              {
                title: 'AI-Augmented',
                description: 'Leveraging technology to create smarter, more personalized experiences.',
                icon: '✨',
                color: 'from-pink-500/10 to-pink-500/0'
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                {/* Icon/Visual Element */}
                <div className="mb-8 text-2xl">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-lg font-bold text-black">{item.title}</h3>
                  <p className="text-black/60 leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Skills Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Left: Heading */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-start"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                My Skills<span className="text-pink-500">.</span>
              </h2>

              {/* Paint Splash Dots */}
              <div className="relative mt-20 h-32">
                <svg
                  className="absolute w-40 h-40 left-0 top-0"
                  viewBox="0 0 100 100"
                >
                  <g fill="#BFFF00" opacity="0.5">
                    <circle cx="30" cy="20" r="8" />
                    <circle cx="50" cy="15" r="6" />
                    <circle cx="40" cy="35" r="7" />
                    <circle cx="25" cy="45" r="5" />
                    <circle cx="45" cy="50" r="6" />
                    <circle cx="35" cy="60" r="4" />
                    <circle cx="55" cy="40" r="5" />
                    <circle cx="20" cy="70" r="6" />
                    <circle cx="60" cy="65" r="4" />
                    <circle cx="15" cy="30" r="5" />
                  </g>
                </svg>
              </div>
            </motion.div>

            {/* Right: Skills Grid — 2 per row, open layout */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-x-12 gap-y-14">
                {[
                  {
                    title: 'Product Design',
                    description: 'End-to-end product design from user flows and wireframes to high-fidelity prototypes, applying design thinking and accessibility principles.',
                    icon: '✏️'
                  },
                  {
                    title: 'User Research',
                    description: 'Conducting stakeholder interviews, usability testing, and journey mapping to synthesise insights that drive design decisions.',
                    icon: '👥'
                  },
                  {
                    title: 'Prototyping',
                    description: 'Building interactive prototypes and design systems, standardising interaction patterns, typography, and component states.',
                    icon: '🔧'
                  },
                  {
                    title: 'Product Ownership',
                    description: 'Shaping product direction, defining features, prioritising work, and ensuring execution aligns with user needs and business goals.',
                    icon: '📊'
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-3"
                  >
                    {/* Icon */}
                    <div className="text-2xl mb-1">{item.icon}</div>
                    {/* Title */}
                    <h3 className="text-base font-bold text-black">{item.title}</h3>
                    {/* Description */}
                    <p className="text-black/60 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Random Facts Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left: Facts List */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">Random facts<span className="text-pink-500">.</span></h2>
              
              <ul className="space-y-6">
                {[
                  'I love hiking, it\'s where I reset and find inspiration.',
                  'I paint occasionally whenever creativity strikes.',
                  'A proud plant mum, but somehow I keep killing succulents.',
                  'I love singing, even though I absolutely cannot sing.',
                  'I find inspiration in everyday moments, music, and nature.',
                ].map((fact, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <span className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0 mt-3"></span>
                    <span className="text-lg text-black/70">{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md h-96 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/Plant.jpeg"
                  alt="Random facts image"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-start"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                My story<span className="text-pink-500">.</span>
              </h2>
              
              <p className="text-lg text-black/70 leading-relaxed mb-8">
                What does a graduate of Economics and Sociology have to do with product design? More than you'd think. My path into design began with a simple curiosity about people and technology, and grew into a passion for creating products that make life a little easier. This is the story of that journey.
              </p>

              <Link to="/my-story" className="text-black/70 hover:text-pink-500 transition-colors inline-flex items-center gap-1 underline underline-offset-4 text-base">
                Read my story →
              </Link>
            </motion.div>

            {/* Right: Image with Profile Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Main Image */}
                <div className="relative w-full h-64 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/UX.jpg"
                    alt="My story"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
