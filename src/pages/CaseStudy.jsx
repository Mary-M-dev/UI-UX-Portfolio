import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import Button from '../components/Button';
import React from 'react';

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'research', label: 'Research' },
    { id: 'personas', label: 'Personas' },
    { id: 'journey', label: 'User Journey' },
    { id: 'wireframes', label: 'Wireframes' },
    { id: 'decisions', label: 'Design Decisions' },
    { id: 'screens', label: 'High Fidelity' },
    { id: 'impact', label: 'Impact' },
  ];

  return (
    <div>
      {/* Hero Section - Dark Mode with Device Mockups */}
      <div className="bg-black text-white">
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-visible pt-20 pb-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl opacity-10 animate-pulse" />
          </div>

          <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
            {/* Back Button — absolutely positioned so it doesn't push the phone down */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute top-24 left-4 sm:left-8 lg:left-12"
            >
              <Link 
                to="/work"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white border border-white/30 hover:border-white/60 px-4 py-2 rounded-lg text-sm transition-all"
              >
                ← Back to Portfolio
              </Link>
            </motion.div>

            {/* Device Mockup — centered in hero */}
            <div className="flex justify-center items-center">
              {project.category === 'Mobile App' ? (
                /* Phone mockup for mobile apps */
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  {/* Phone shell */}
                  <div className="relative" style={{ width: '220px', height: '440px' }}>
                    {/* Outer body */}
                    <div className="absolute inset-0 bg-gray-800 rounded-[2.8rem] border-4 border-gray-600 shadow-2xl"></div>
                    {/* Side buttons left */}
                    <div className="absolute -left-2 top-24 w-1.5 h-8 bg-gray-600 rounded-l-full"></div>
                    <div className="absolute -left-2 top-36 w-1.5 h-12 bg-gray-600 rounded-l-full"></div>
                    <div className="absolute -left-2 top-52 w-1.5 h-12 bg-gray-600 rounded-l-full"></div>
                    {/* Side button right */}
                    <div className="absolute -right-2 top-32 w-1.5 h-16 bg-gray-600 rounded-r-full"></div>
                    {/* Screen area */}
                    <div className="absolute inset-2 rounded-[2.3rem] overflow-hidden flex flex-col" style={{ backgroundColor: '#8B0000' }}>
                      {/* Splash animation */}
                      <div className="flex-1 flex items-center justify-center">
                        <SplashAnimation />
                      </div>
                      {/* Home indicator */}
                      <div className="flex justify-center pb-3 flex-shrink-0">
                        <div className="w-16 h-1 bg-white/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Laptop mockup for web apps */
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-gray-800 rounded-2xl p-2 shadow-2xl border-4 border-gray-700" style={{ width: '660px' }}>
                    <div className="overflow-hidden rounded-xl bg-black">
                      <img
                        src={project.caseStudyContent?.heroImage || '/hr/Screenshot 2026-06-05 153008.png'}
                        alt={`${project.title} screen`}
                        className="w-full h-auto object-contain block"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-b-lg" style={{ width: '700px', height: '6px' }}></div>
                  <div className="bg-gray-800 rounded-b-2xl" style={{ width: '740px', height: '12px' }}></div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Project Info Section - Light Mode */}
      <div className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Project Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-snug">
              {project.fullTitle || project.title}
            </h1>
            <div className="border-t border-gray-300 pt-10 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Role</p>
                  <p className="text-lg text-black">{project.role}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Product</p>
                  <p className="text-lg text-black">{project.product || project.fullTitle || project.title}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Tools</p>
                  <div className="flex flex-wrap gap-3 items-center">
                    {project.tags.map((tag, idx) => {
                      const toolIcons = {
                        'Figma': (
                          <svg key={idx} title="Figma" className="w-6 h-6" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
                            <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
                            <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
                            <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
                            <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
                          </svg>
                        ),
                        'Miro': (
                          <svg key={idx} title="Miro" className="w-6 h-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="100" rx="16" fill="#FFD02F"/>
                            <path d="M67.5 20H55.2L63.8 38.5L49 20H36.7L45.3 40.2L30.5 20H18L35.5 55L18 80H30.3L45.2 59.5L36.5 80H48.8L63.7 59.2L55 80H67.3L82 50L67.5 20Z" fill="#050038"/>
                          </svg>
                        ),
                        'Kiro': (
                          <svg key={idx} title="Kiro" className="w-7 h-7" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="100" rx="22" fill="#7C3AED"/>
                            {/* Ghost body with wavy bottom */}
                            <path d="M50 20C36 20 25 31 25 45V72L31 67L37 72L43 67L50 72L57 67L63 72L69 67L75 72V45C75 31 64 20 50 20Z" fill="white"/>
                            {/* Eyes */}
                            <ellipse cx="41" cy="47" rx="5" ry="6" fill="#1a1a1a"/>
                            <ellipse cx="59" cy="47" rx="5" ry="6" fill="#1a1a1a"/>
                          </svg>
                        ),
                        'Lovable': (
                          <svg key={idx} title="Lovable" className="w-7 h-7" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id="lovableGrad" x1="0%" y1="0%" x2="50%" y2="100%">
                                <stop offset="0%" stopColor="#FF6B35"/>
                                <stop offset="40%" stopColor="#FF3CAC"/>
                                <stop offset="100%" stopColor="#7B5CFA"/>
                              </linearGradient>
                            </defs>
                            {/* P letterform — vertical stroke + bowl */}
                            <rect x="18" y="10" width="22" height="100" rx="11" fill="url(#lovableGrad)"/>
                            <path d="M40 10 C40 10 82 10 82 42 C82 74 40 74 40 74" stroke="url(#lovableGrad)" strokeWidth="22" strokeLinecap="round" fill="none"/>
                          </svg>
                        ),
                      };
                      return toolIcons[tag] || (
                        <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">{tag}</span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Light Mode */}
      <div className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div>
            <div className="space-y-16">

              {/* ── Generic case study layout (for projects with caseStudyContent) ── */}
              {project.caseStudyContent ? (
                <GenericCaseStudy project={project} />
              ) : (
                <>
              {/* Overview */}
              <motion.section
                id="overview"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-black">Project Overview</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 text-base leading-relaxed">
                    Digital transformation is a priority for many organizations, yet professionals often struggle to find practical learning resources that help them apply transformation concepts in their day-to-day work. Existing training is frequently fragmented, overly theoretical, and disconnected from real workplace challenges.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    To address this gap, DigitalQatalyst is building the Digital Transformation Management Academy (DTMA), an AI-powered e-learning platform that helps professionals learn and apply digital transformation through structured courses, real-time support, assessments, and certification.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    In this case study, I showcase how I designed the end-to-end learner experience, covering the journey from course discovery and enrollment to learning, AI-powered support, assessments, and certification.
                  </p>
                </div>
              </motion.section>

              {/* Problem Statement */}
              <motion.section
                id="problem"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-black">The Problem</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  While online learning platforms make knowledge accessible, many learners struggle to stay engaged and apply what they learn effectively.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">Common challenges include:</p>

                <ul className="space-y-3 mb-10">
                  {[
                    'Low learner engagement',
                    'Passive content consumption',
                    'Limited support during learning',
                    'Poor knowledge retention',
                    'Weak connection between learning and real-world application',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-pink-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-2xl p-8">
                  <p className="text-xs text-pink-600 uppercase tracking-widest font-semibold mb-4">For DTMA, the challenge was</p>
                  <p className="text-gray-800 text-base leading-relaxed">
                    "How might we create an engaging learning experience that helps learners understand complex digital transformation concepts while providing continuous support and motivation throughout their learning journey?"
                  </p>
                </div>
              </motion.section>

              {/* Understanding the Problem */}
              <motion.section
                id="understanding-problem"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-black">Understanding the Problem</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Before designing the platform experience, I focused on understanding how people learn in online environments and where they typically struggle when trying to apply new knowledge in real work settings.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* What I Looked Into */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">What I Looked Into</p>
                    <ul className="space-y-3">
                      {[
                        'How learners interact with existing e-learning platforms',
                        'Where learners tend to lose motivation or drop off',
                        'How complex topics like digital transformation are currently taught online',
                        'The role of support during self-paced learning',
                        'How learners retain and apply what they learn in real situations',
                        'What makes learners feel guided versus left alone in digital learning environments',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Observations */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-4">Key Observations</p>
                    <ul className="space-y-3">
                      {[
                        'Learners often start courses with interest but lose momentum over time.',
                        'Most platforms focus heavily on content delivery, with little ongoing guidance.',
                        'Support is usually reactive — only when learners ask for help.',
                        'Learners struggle to translate theory into real workplace application.',
                        'Learning feels isolated, with limited connection or reinforcement outside the platform.',
                        'Progress without feedback or encouragement leads to drop-off.',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Design Focus */}
                <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-6">
                  <p className="text-xs text-pink-600 uppercase tracking-widest font-semibold mb-4">Design Focus That Emerged</p>
                  <p className="text-gray-700 text-sm mb-3">From these observations, the core focus became:</p>
                  <ul className="space-y-3">
                    {[
                      'How might we keep learners engaged throughout the full learning journey?',
                      'How might we make complex concepts easier to understand and apply?',
                      'How might we provide continuous guidance without overwhelming the learner?',
                      'How might we support learning beyond the platform environment?',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-800 text-sm">
                        <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              {/* Research & Discovery */}
              <motion.section
                id="research"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-black">Research & Discovery</h2>
                <p className="text-gray-700 text-base leading-relaxed mb-8">
                  After defining the problem, I explored how learners interact with e-learning platforms and what affects their ability to stay engaged and complete courses.
                </p>

                {/* Approach */}
                <div className="mb-6">
                  <h3 className="text-base font-semibold text-black mb-3">Approach</h3>
                  <p className="text-gray-700 text-base mb-3">I focused on:</p>
                  <ul className="space-y-2">
                    {[
                      'Reviewing existing e-learning platforms and learning flows',
                      'Analyzing learner behavior in self-paced courses',
                      'Studying how complex topics are delivered online',
                      'Mapping typical learner journeys from onboarding to certification',
                      'Identifying gaps in support, engagement, and retention',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-base">
                        <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Three sections stacked vertically */}
                <div className="space-y-8 mb-6">
                  {[
                    {
                      title: 'What I Learned from Existing Platforms',
                      items: [
                        'Most platforms are content-heavy but lack engaging learning experiences',
                        'Learning is often linear, with limited personalization or adaptation',
                        'Support is disconnected from the actual learning flow',
                        'Learners are expected to self-navigate with minimal guidance',
                        'There is little reinforcement after completing lessons',
                      ]
                    },
                    {
                      title: 'Learner Behavior Insights',
                      items: [
                        'Learners often start strong but lose motivation mid-course',
                        'Complex concepts need repetition and simpler explanations to be understood',
                        'Learners benefit from reminders and consistent prompts',
                        'Understanding improves when content is broken into small, conversational parts',
                        'Practice and reinforcement are key to retention',
                      ]
                    },
                    {
                      title: 'Key Opportunity Areas',
                      items: [
                        'Design a guided end-to-end learning journey',
                        'Introduce continuous engagement throughout learning',
                        'Provide contextual support when learners are stuck',
                        'Reinforce learning through practice and repetition',
                        'Make learning more conversational and easy to follow',
                      ]
                    },
                  ].map((section, idx) => (
                    <div key={idx}>
                      <p className="text-sm font-semibold text-black mb-3">{section.title}</p>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 text-base">
                            <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Direction for Design */}
                <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-6">
                  <p className="text-xs text-pink-600 uppercase tracking-widest font-semibold mb-3">Direction for Design</p>
                  <p className="text-gray-700 text-sm mb-3">These insights shaped the foundation of DTMA:</p>
                  <ul className="space-y-2">
                    {[
                      'A structured learner journey from discovery to certification',
                      'AI-assisted learning for real-time support',
                      'Conversational learning to simplify complex concepts',
                      'Continuous engagement beyond the platform (e.g., WhatsApp learning)',
                      'Strong focus on progression, reinforcement, and completion',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-800 text-sm">
                        <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              {/* Understanding the Learner Journey */}
              <motion.section
                id="learner-journey"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-black">Understanding the Learner Journey</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Before designing solutions, I mapped the learner's end-to-end experience.
                </p>

                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Key Journey Stages</h3>

                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src="/Screenshots/2.png"
                    alt="Learner journey flow"
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </motion.section>

              {/* Designing the Learning Journey */}
              <motion.section
                id="designing-journey"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-10 text-black">Designing the Learning Journey</h2>

                {/* Stage 1 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-white text-sm font-bold flex-shrink-0">1</span>
                    <h3 className="text-xl font-bold text-black">Course Discovery</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-5">
                      <p className="text-xs text-pink-600 uppercase tracking-widest font-semibold mb-2">Goal</p>
                      <p className="text-gray-800 leading-relaxed">Help learners easily find relevant digital transformation programs.</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Solution</p>
                      <ul className="space-y-2">
                        {['Course marketplace', 'Audience-specific landing pages', 'Search and filtering', 'Faculty marketplace', 'Digital perspectives exploration'].map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                            <span className="text-pink-500 font-bold mt-0.5">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Outcome</p>
                      <p className="text-gray-800 leading-relaxed text-sm">Learners can identify learning pathways relevant to their role and transformation goals.</p>
                    </div>
                  </div>

                  {/* Course Discovery Screenshots */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      '/dis/Screenshot 2026-06-05 143933.png',
                      '/dis/Screenshot 2026-06-05 144119.png',
                    ].map((src, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <img src={src} alt={`Course discovery screenshot ${i + 1}`} className="w-full h-auto object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-white text-sm font-bold flex-shrink-0">2</span>
                    <h3 className="text-xl font-bold text-black">Enrollment</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-5">
                      <p className="text-xs text-pink-600 uppercase tracking-widest font-semibold mb-2">Goal</p>
                      <p className="text-gray-800 leading-relaxed">Reduce friction during registration and course enrollment.</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Solution</p>
                      <ul className="space-y-2">
                        {['Sign up from navigation', 'Enrollment directly from course pages', 'Guided onboarding'].map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                            <span className="text-pink-500 font-bold mt-0.5">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Outcome</p>
                      <p className="text-gray-800 leading-relaxed text-sm">A seamless transition from interest to enrollment.</p>
                    </div>
                  </div>

                  {/* Enrollment Screenshots */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      '/en/Screenshot 2026-06-05 144516.png',
                      '/en/Screenshot 2026-06-05 143825.png',
                      '/en/Screenshot 2026-06-05 143737.png',
                      '/en/Screenshot 2026-06-05 141110.png',
                    ].map((src, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <img src={src} alt={`Enrollment screenshot ${i + 1}`} className="w-full h-auto object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-white text-sm font-bold flex-shrink-0">3</span>
                    <h3 className="text-xl font-bold text-black">Course Consumption</h3>
                  </div>

                  <div className="mb-4">
                    <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-5">
                      <p className="text-xs text-pink-600 uppercase tracking-widest font-semibold mb-2">Challenge</p>
                      <p className="text-gray-800 leading-relaxed">Digital transformation concepts can be complex and overwhelming.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Course Learning Environment</p>
                      <ul className="space-y-2">
                        {['Video learning', 'Audio learning mode', 'Module navigation', 'Progress tracking', 'Lesson hierarchy'].map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                            <span className="text-pink-500 font-bold mt-0.5">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">AI Learning Tools</p>
                      <ul className="space-y-2">
                        {['AI Tutor', 'AI Notes', 'Flashcards', 'WhatsApp Learning'].map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                            <span className="text-pink-500 font-bold mt-0.5">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Screenshots Gallery */}
                <div className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      '/Screenshots/Screenshot 2026-06-05 115131.png',
                      '/Screenshots/Screenshot 2026-06-05 115533.png',
                      '/Screenshots/Screenshot 2026-06-05 115845.png',
                      '/Screenshots/Screenshot 2026-06-05 115948.png',
                      '/Screenshots/Screenshot 2026-06-05 120153.png',
                      '/Screenshots/Screenshot 2026-06-05 120911.png',
                      '/Screenshots/Screenshot 2026-06-05 121028.png',
                    ].map((src, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={src}
                          alt={`DTMA screenshot ${i + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* AI-Supported Learning Experience */}
              <motion.section
                id="ai-learning"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-3 text-black">AI-Supported Learning Experience</h2>
                <p className="text-gray-500 text-lg mb-8 italic">This is where DTMA becomes differentiated.</p>

                {/* Problem */}
                <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-5 mb-8">
                  <p className="text-xs text-pink-600 uppercase tracking-widest font-semibold mb-2">Problem</p>
                  <p className="text-gray-800 leading-relaxed">Learners often leave platforms when they become confused or need clarification.</p>
                </div>

                {/* AI Tutor */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-black mb-2">AI Tutor</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">The AI Tutor acts as an on-demand learning assistant.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Capabilities</p>
                      <ul className="space-y-2">
                        {[
                          'Summarize content',
                          'Explain concepts',
                          'Generate notes',
                          'Highlight key references',
                          'Answer learner questions',
                        ].map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                            <span className="text-pink-500 font-bold mt-0.5">•</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Design Decision</p>
                      <p className="text-gray-800 leading-relaxed text-sm">Instead of requiring learners to leave the platform to search for answers, support is embedded directly into the learning experience.</p>
                    </div>
                  </div>
                </div>

                {/* AI Learn Screenshots */}
                <div className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      '/AILearn/Screenshot 2026-06-05 122517.png',
                      '/AILearn/Screenshot 2026-06-05 122559.png',
                    ].map((src, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={src}
                          alt={`AI Learning screenshot ${i + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Assessment & Reinforcement */}
              <motion.section
                id="assessment"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-black">Assessment & Reinforcement</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-5">
                    <p className="text-xs text-pink-600 uppercase tracking-widest font-semibold mb-2">Goal</p>
                    <p className="text-gray-800 leading-relaxed">Validate understanding before progression.</p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Solution</p>
                    <p className="text-gray-700 text-sm font-medium mb-2">Module-based quizzes:</p>
                    <ul className="space-y-2">
                      {[
                        '5 questions per module',
                        '70% pass threshold',
                        'Progress tracking',
                        'Module completion badges',
                      ].map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-pink-500 font-bold mt-0.5">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Outcome</p>
                    <p className="text-gray-800 leading-relaxed text-sm">Learners demonstrate mastery before advancing.</p>
                  </div>
                </div>

                {/* Certification Screenshots */}
                <div className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      '/Cetification/Screenshot 2026-06-05 123539.png',
                      '/1.png',
                    ].map((src, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <img
                          src={src}
                          alt={`Assessment screenshot ${i + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Certification Experience */}
              <motion.section
                id="certification"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-black">Certification Experience</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-5">
                    <p className="text-xs text-pink-600 uppercase tracking-widest font-semibold mb-2">Goal</p>
                    <p className="text-gray-800 leading-relaxed">Create a rewarding end-of-course experience.</p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">Solution</p>
                    <p className="text-gray-700 text-sm mb-3">After completing all modules:</p>
                    <ul className="space-y-2">
                      {[
                        'Celebration animation',
                        'Completion statistics',
                        'Certificate generation',
                        'Downloadable credential',
                      ].map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-pink-500 font-bold mt-0.5">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Certificate screens */}
                <div className="grid grid-cols-1 gap-4">
                  {[
                    '/Cetification/Screenshot 2026-06-05 123446.png',
                  ].map((src, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src={src}
                        alt={`Certificate screen ${i + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Final Experience Flow */}
              <motion.section
                id="final-flow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-black">Final Experience Flow</h2>

                <div className="flex flex-col items-center gap-0">
                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm w-full">
                    <img
                      src="/Screenshots/3.png"
                      alt="Final experience flow"
                      className="w-full h-auto object-contain block"
                    />
                  </div>
                </div>
              </motion.section>

              {/* Platform Innovations & Reflection */}
              <motion.section
                id="innovations"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-black">Platform Innovations</h2>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  DTMA introduces a more adaptive and human-centered learning experience powered by AI.
                </p>

                <ul className="space-y-4 mb-16">
                  {[
                    { title: 'AI-assisted learning', desc: 'Support is available throughout the entire learning journey, not just at fixed points.' },
                    { title: 'Conversational learning', desc: 'Learners can interact with content in a more natural, dialogue-based way.' },
                    { title: 'Multi-modal learning (read, watch, listen)', desc: 'Learners can choose how they want to consume content depending on context and preference.' },
                    { title: 'Real-time support', desc: 'Immediate help is available whenever learners get stuck, keeping progress uninterrupted.' },
                    { title: 'Accredited certification pathway', desc: 'Ensures learning outcomes translate into recognized, credible certification.' },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-pink-500 font-bold mt-1 flex-shrink-0">•</span>
                      <p className="text-gray-700 text-base leading-relaxed">
                        <span className="font-semibold text-black">{item.title}</span>
                        {' '}{item.desc}
                      </p>
                    </li>
                  ))}
                </ul>

                <h2 className="text-3xl font-bold mb-4 text-black">Reflection</h2>
                <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-6">
                  <p className="text-gray-800 text-base leading-relaxed">
                    Through DTMA, I explored how AI can be integrated into learning experiences to improve engagement, reduce learner friction, and provide contextual support throughout the learning journey. The project challenged me to design not only for content consumption, but for learner confidence, progression, and successful course completion.
                  </p>
                </div>
              </motion.section>

              {/* Next Steps */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-gray-300"
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-black">Interested in working together?</h3>
                    <p className="text-gray-600">Let's discuss how I can help with your next project</p>
                  </div>
                  <Link to="/#contact">
                    <Button variant="primary" size="lg">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </motion.section>
              </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Generic case study renderer for data-driven projects ──


// Splash animation for Reserve Me mobile mockup
function SplashAnimation() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        animate={{ rotate: [0, 25, -25, 20, -20, 12, -12, 6, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
        style={{ transformOrigin: 'top center' }}
      >
        <svg width="52" height="60" viewBox="0 0 48 56" fill="white">
          {/* Stem */}
          <rect x="21" y="0" width="6" height="7" rx="3"/>
          {/* Bell body */}
          <path d="M24 5 C13 5 8 14 8 24 L8 38 L3 42 L45 42 L40 38 L40 24 C40 14 35 5 24 5Z"/>
          {/* Clapper */}
          <ellipse cx="24" cy="50" rx="5" ry="5"/>
          <rect x="22" y="42" width="4" height="10" rx="2"/>
        </svg>
      </motion.div>
      <div className="text-center">
        <p className="text-white font-bold text-sm tracking-wide">Reserve me</p>
        <p className="text-white/60 text-xs mt-0.5">Reservation made easy</p>
      </div>
    </div>
  );
}

// Infinite horizontally-scrolling collage for Key Redesign Improvements
function FFScrollingCollage() {
  const images = ['/ff/25.png', '/ff/26.png', '/ff/27.png', '/ff/28.png'];
  const track = [...images, ...images];

  return (
    <div className="relative w-full" style={{ overflowX: 'hidden', overflowY: 'visible' }}>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        className="flex gap-4 items-end"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        style={{ width: 'max-content' }}
      >
        {track.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-2xl shadow-lg border border-gray-100"
            style={{ width: '200px' }}
          >
            <img
              src={src}
              alt={`Redesign screen ${(i % images.length) + 1}`}
              className="w-full h-auto block rounded-2xl"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Infinite horizontally-scrolling collage for Reserve Me screenshots
function RMScrollingCollage() {
  const images = [
    '/RMCollage/Splash.png',
    '/RMCollage/onboardng.png',
    '/RMCollage/onboardng 2.png',
    '/RMCollage/onboardng 3.png',
    '/RMCollage/Log in screen.png',
    '/RMCollage/Log in screen 2.png',
    '/RMCollage/Log in screen3.png',
    '/RMCollage/Log in screen4.png',
    '/RMCollage/Sign up screen.png',
    '/RMCollage/Allow location screen.png',
  ];

  // Duplicate for seamless loop
  const track = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        className="flex gap-4"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 28,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ width: 'max-content' }}
      >
        {track.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            style={{ width: '160px', height: '320px' }}
          >
            <img
              src={src}
              alt={`Reserve Me screen ${(i % images.length) + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Generic case study renderer for data-driven projects
function GenericCaseStudy({ project }) {
  const c = project.caseStudyContent;
  return (
    <div className="space-y-16">

      {/* Overview */}
      <motion.section id="overview" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-6 text-black">Overview</h2>
        <div className="space-y-4 mb-8">
          {c.overview.map((p, i) => (
            <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
          ))}
        </div>
        {c.scopeItems && (
          <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-5">
            <p className="text-xs text-pink-600 uppercase tracking-widest font-semibold mb-3">My Role — {project.role}</p>
            <ul className="space-y-2">
              {c.scopeItems.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span><span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.section>

      {/* RMCollage — infinite scrolling marquee (Reserve Me only) */}
      {project.id === 'reserve-me' && (
        <motion.section
          id="collage"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden"
        >
          <RMScrollingCollage />
        </motion.section>
      )}

      {/* The Problem */}
      {c.problem && (
        <motion.section id="problem" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-6 text-black">The Problem</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">{c.problem.intro}</p>
          {c.problem.label && <p className="text-gray-700 text-base mb-3">{c.problem.label}</p>}
          <ul className="space-y-3 mb-6">
            {c.problem.points.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-base">
                <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span><span>{item}</span>
              </li>
            ))}
          </ul>
          {c.problem.closing && <p className="text-gray-500 text-base italic">{c.problem.closing}</p>}
        </motion.section>
      )}

      {/* Old App Screens — Reserve Me only */}
      {project.id === 'reserve-me' && (
      <motion.section
        id="old-screens"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-6">The Existing App</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl">
          {[
            '/old/login.png',
            '/old/signup filled.png',
            '/old/home.png',
            '/old/WhatsApp Image 2025-06-10 at 10.01.12 AM (1).png',
            '/old/WhatsApp Image 2025-06-10 at 11.20.09 AM (1) 1.png',
            '/old/WhatsApp Image 2025-06-10 at 11.20.10 AM (3) 1.png',
          ].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <img
                src={src}
                alt={`Old Reserve Me screen ${i + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 italic mt-4">The original experience lacked visual consistency and hierarchy.</p>
      </motion.section>
      )}

      {/* Audit & Key Findings */}
      {c.audit && (
        <motion.section id="audit" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 text-black">Audit & Key Findings</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-8">To understand where improvements were needed, I conducted a UX and UI audit of the existing mobile app. The goal was to identify friction points across onboarding, authentication, and restaurant discovery.</p>
          <div className="space-y-8">
            {c.audit.map((finding, i) => (
              <div key={i} className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-lg font-bold text-black mb-2">{finding.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed mb-3">{finding.intro}</p>
                {finding.issues && (
                  <ul className="space-y-1 mb-3">
                    {finding.issues.map((issue, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span><span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {finding.impact && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mt-2">
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Impact</p>
                    <ul className="space-y-1">
                      {finding.impact.map((imp, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="text-gray-400 font-bold mt-0.5 flex-shrink-0">•</span><span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {finding.images && (
                  <div className="flex gap-3 mt-4 flex-wrap">
                    {finding.images.map((src, j) => (
                      <div key={j} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm" style={{ width: '140px' }}>
                        <img src={src} alt={`${finding.title} screen ${j + 1}`} className="w-full h-auto object-contain" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Key Insights */}
      {c.keyInsights && (
        <motion.section id="insights" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 text-black">Key Insights</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">From the audit, three core opportunities emerged:</p>
          <ul className="space-y-4">
            {c.keyInsights.map((insight, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-base">
                <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span>
                <span><span className="font-semibold text-black">{insight.title} — </span>{insight.desc}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Design Goals */}
      {c.designGoals && (
        <motion.section id="goals" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-6 text-black">Design Goals</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">Based on the findings, the redesign focused on:</p>
          <ul className="space-y-4">
            {c.designGoals.map((goal, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-base">
                <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span>
                <span><span className="font-semibold text-black">{goal.title} — </span>{goal.desc}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <img src="/md/md.png" alt="Design goals reference" className="w-full h-auto object-contain" />
          </div>
        </motion.section>
      )}

      {/* Design Approach */}
      {c.designApproach && (
        <motion.section id="approach" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-6 text-black">Design Process & Approach</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">I approached the redesign by mapping the user stories and low fidelity wireframes:</p>
          <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-5">
            <p className="text-xs text-pink-600 uppercase tracking-widest font-semibold mb-2">Guiding Question</p>
            <p className="text-gray-800 text-base leading-relaxed italic">"{c.designApproach.question}"</p>
          </div>

          {/* User journey / wireframe screens */}
          <div className="grid grid-cols-6 gap-3 mt-8">
            {['/q/q.png', '/q/q1.png', '/q/q2.png', '/q/q3.png', '/q/q4.png', '/q/q5.png'].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <img src={src} alt={`Design process screen ${i + 1}`} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Key Redesign Improvements — Reserve Me only */}
      {project.id === 'reserve-me' && c.keyImprovements && (
        <motion.section id="improvements" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-8 text-black">Key Redesign Improvements</h2>
          <div className="flex flex-col lg:flex-row gap-6 items-start">

            {/* improvements list — full width now */}
            <div className="flex-1 space-y-10">
              {c.keyImprovements.map((item, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                  {item.intro && <p className="text-gray-700 text-base leading-relaxed mb-4">{item.intro}</p>}
                  {item.points && item.points.length > 0 && (
                    <ul className="space-y-2 mb-3">
                      {item.points.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-700 text-base">
                          <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span><span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.result && (
                    <p className="text-pink-600 text-sm font-medium mt-2">Result: {item.result}</p>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Horizontal scrolling marquee below the improvements list */}
          <div className="mt-6">
            <FFScrollingCollage />
          </div>
        </motion.section>
      )}

      {/* Outcome */}
      {c.outcome && (
        <motion.section id="outcome" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-6 text-black">Outcome</h2>
          {c.outcomeIntro && <p className="text-gray-700 text-base leading-relaxed mb-4">{c.outcomeIntro}</p>}
          <ul className="space-y-3 mb-6">
            {c.outcome.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-base">
                <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span><span>{item}</span>
              </li>
            ))}
          </ul>
          {c.outcomeClosing && <p className="text-gray-600 text-base leading-relaxed">{c.outcomeClosing}</p>}
        </motion.section>
      )}

      {/* HMW Question */}
      {c.hmw && (
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-6">
            <p className="text-xs text-pink-600 uppercase tracking-widest font-semibold mb-2">Design Challenge</p>
            <p className="text-gray-800 text-base leading-relaxed italic">"{c.hmw}"</p>
          </div>
        </motion.section>
      )}

      {/* Research */}
      {c.research && Array.isArray(c.research) && (
        <motion.section id="research" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-6 text-black">Understanding the Users</h2>
          <div className="space-y-8">
            {c.research.map((section, i) => (
              <div key={i}>
                <h3 className="text-base font-semibold text-black mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-base">
                      <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span><span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Success Criteria */}
      {c.successCriteria && (
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-6 text-black">Defining Success</h2>
          <p className="text-gray-700 text-base mb-4">For this product to succeed, users should be able to:</p>
          <ul className="space-y-2">
            {c.successCriteria.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-base">
                <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">✅</span><span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Competitive Insights */}
      {c.competitiveInsights && (
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 text-black">Exploring the Market</h2>
          <p className="text-gray-700 text-base mb-4">While most platforms offered appointment booking and virtual consultations, few were intentionally designed around the needs of elderly users. Common issues included:</p>
          <ul className="space-y-2">
            {c.competitiveInsights.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-base">
                <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span><span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Design Principles */}
      {c.designPrinciples && (
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-6 text-black">Design Principles</h2>
          <div className="space-y-4">
            {c.designPrinciples.map((p, i) => (
              <div key={i} className="flex items-start gap-3 text-gray-700 text-base">
                <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span>
                <span><span className="font-semibold text-black">{p.title} — </span>{p.desc}</span>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* User Journey */}
      {c.userJourneySteps && (
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-6 text-black">Mapping the Experience</h2>
          <div className="flex flex-wrap items-center gap-2">
            {c.userJourneySteps.map((step, i, arr) => (
              <div key={i} className="flex items-center gap-2">
                <span className="bg-pink-50 border border-pink-200 text-pink-700 font-semibold px-3 py-1.5 rounded-lg text-sm">{step}</span>
                {i < arr.length - 1 && <span className="text-pink-300">↓</span>}
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Experiences Designed */}
      {c.experiencesDesigned && (
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 text-black">From Ideas to Wireframes</h2>
          <p className="text-gray-700 text-base mb-4">Rather than overwhelming users with numerous features, I prioritized a few essential experiences:</p>
          <ul className="space-y-2">
            {c.experiencesDesigned.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-base">
                <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">✅</span><span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Key Design Decisions */}
      {c.keyDesignDecisions && (
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-6 text-black">Key Design Decisions</h2>
          <div className="space-y-6">
            {c.keyDesignDecisions.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-gray-700 text-base">
                <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span>
                <span><span className="font-semibold text-black">{item.title} — </span>{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Tradeoffs */}
      {c.tradeoffs && (
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-6 text-black">Tradeoffs</h2>
          <div className="space-y-6">
            {c.tradeoffs.map((t, i) => (
              <div key={i} className="border-l-2 border-gray-200 pl-5">
                <h3 className="font-semibold text-black mb-1">{t.title}</h3>
                <p className="text-gray-700 text-sm">Decision: {t.decision}</p>
                <p className="text-gray-500 text-sm">Why: {t.why}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Final Solution */}
      {c.finalExperiences && (
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 text-black">Final Solution</h2>
          <p className="text-gray-700 text-base mb-4">The final design delivers a streamlined telehealth experience tailored to the needs of elderly Kenyans:</p>
          <ul className="space-y-2">
            {c.finalExperiences.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-base">
                <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">✅</span><span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Accessibility */}
      {c.accessibilityFeatures && (
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 text-black">Accessibility Considerations</h2>
          <p className="text-gray-700 text-base mb-4">Accessibility was integrated throughout the design process rather than treated as an afterthought:</p>
          <ul className="space-y-2">
            {c.accessibilityFeatures.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-base">
                <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">✅</span><span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Success Metrics */}
      {c.successMetrics && (
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 text-black">Measuring Success</h2>
          <p className="text-gray-700 text-base mb-4">If this product were launched, I would validate the experience through usability testing with elderly users and caregivers. Key metrics:</p>
          <ul className="space-y-2">
            {c.successMetrics.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-base">
                <span className="text-pink-500 font-bold mt-0.5 flex-shrink-0">•</span><span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Reflection */}
      {c.reflection && (
        <motion.section id="reflection" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4 text-black">Reflection</h2>
          <div className="bg-pink-50 border-l-4 border-pink-500 rounded-r-xl p-6">
            <p className="text-gray-800 text-base leading-relaxed">{c.reflection}</p>
          </div>
        </motion.section>
      )}

      {/* Contact CTA */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="pt-8 border-t border-gray-300">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-black">Interested in working together?</h3>
            <p className="text-gray-600">Let's discuss how I can help with your next project</p>
          </div>
          <Link to="/#contact">
            <Button variant="primary" size="lg">Get in Touch</Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
