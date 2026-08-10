import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const chapters = [
  {
    title: 'Curious About How Things Work',
    paragraphs: [
      'Like many curious people, I started by looking under the hood.',
      'In 2019, I began exploring coding and software development to understand how digital products are built. I wanted to know what happened behind the screens we interact with every day.',
      'While I enjoyed learning the logic behind technology, I found myself drawn to something else. I wasn\'t just interested in how systems worked. I was fascinated by how people experienced them.',
      'Why does one product feel effortless while another feels frustrating? Why do some digital experiences make people feel confident while others leave them confused?',
      'The more I learned, the more I realized my curiosity wasn\'t really about technology alone, it was about people.',
    ],
  },
  {
    title: 'Discovering Product Design',
    paragraphs: [
      'Then, in 2023, I discovered product design. Everything clicked.',
      'It felt like the perfect blend of the things I had always been drawn to: creativity, psychology, problem-solving, storytelling, and technology.',
      'For the first time, I found a field where understanding people was just as important as understanding systems.',
      'Wanting to explore it further, I joined Moringa School\'s Product Design program, where I learned the foundations of user experience design, user research, wireframing, prototyping, and designing digital products with real users in mind.',
      'What started as curiosity quickly became conviction. The more I learned, the more certain I became that this was the path I wanted to pursue. Product design gave me a way to combine analytical thinking, creativity, and empathy to solve real-world problems. And I knew I had found what I wanted to do.',
    ],
  },
  {
    title: 'Building Solutions That Matter',
    paragraphs: [
      'Today, I work as a Product Designer and Product Owner at DigitalQatalyst (DQ), an international digital transformation company.',
      'My role goes beyond designing screens. I help shape product direction, prioritize features, collaborate with cross-functional teams, and ensure we\'re building solutions that solve real user and business problems.',
      'What excites me most is taking something complex and transforming it into an experience that feels simple, intuitive, and useful.',
      'Because behind every feature request, workflow, or dashboard is a person trying to get something done.',
    ],
  },
  {
    title: 'How I See the World',
    paragraphs: [
      'My background in Economics and Sociology continues to influence how I approach design. It taught me to understand people, behaviors, motivations, and the systems that shape decision-making.',
      'As a designer, that perspective helps me balance two things that often compete for attention: user needs and business goals.',
      'The most impactful products, in my experience, are built where those two meet.',
    ],
  },
  {
    title: 'Beyond Design',
    paragraphs: [
      'When I\'m not designing, you\'ll probably find me working on a DIY project, painting, exploring a hiking trail, listening to music, or learning something completely random on YouTube.',
      'I\'m a deeply creative person, and inspiration rarely comes from a design tool. It comes from conversations, emotions, small frustrations, and everyday moments most people overlook.',
      'Those observations constantly remind me why I chose this path in the first place. Because great products don\'t start with technology. They start with people.',
    ],
  },
  {
    title: 'Looking Ahead',
    paragraphs: [
      'I\'m still driven by the same question that first sparked my curiosity years ago: How can we make technology easier, more meaningful, and more human?',
      'As technology continues to evolve, I\'m particularly excited about the possibilities AI creates for both designers and the people they design for. I\'m constantly exploring how AI can enhance creativity, accelerate product development, uncover deeper user insights, and help build more accessible and impactful digital experiences.',
      'Rather than seeing AI as a replacement for human creativity, I see it as a powerful tool that enables us to solve problems faster, think more broadly, and focus on what matters most: understanding people and creating value for them.',
      'As I continue growing as a Product Designer and Product Owner, I hope to leverage emerging technologies alongside human-centered design to build products that simplify complexity, solve meaningful problems, and create positive impact at scale.',
    ],
  },
];

export default function MyStory() {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Heading */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-7xl font-bold text-black">
                My story<span className="text-pink-500">.</span>
              </h1>
              <h2 className="text-sm font-medium text-black/40 uppercase tracking-widest">It Started With a Question</h2>
              <p className="text-base text-black/65 leading-relaxed">
                During my university years, I spent a lot of time interacting with digital systems that were supposed to make life easier, from accommodation booking platforms to government services.
              </p>
              <p className="text-base text-black/65 leading-relaxed">
                The problem? Many of them were confusing, frustrating, and unnecessarily complicated.
              </p>
              <p className="text-base text-black/65 leading-relaxed">
                I remember thinking, Why is something designed to help people so difficult to use?
              </p>
              <p className="text-base text-black/65 leading-relaxed">
                At the time, I didn't know it, but that simple question would eventually shape my career.
              </p>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/UX.jpg"
                    alt="UX Design workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Circular passport photo overlay */}
                <div className="absolute -bottom-5 -right-4 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                  <img
                    src="/Passport.jpeg"
                    alt="Mary Mwirigi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16">
            {chapters.map((chapter, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                viewport={{ once: true }}
                className={chapter.title === 'Building Solutions That Matter'
                  ? 'relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 px-8 py-10 space-y-5'
                  : 'space-y-4'
                }
              >
                {chapter.title === 'Building Solutions That Matter' ? (
                  <>
                    {/* Subtle background accent */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl -z-0" />
                    <p className="text-xs text-pink-500 uppercase tracking-widest font-semibold relative z-10">Currently</p>
                    <h2 className="text-3xl font-bold text-black relative z-10">{chapter.title}</h2>
                    <blockquote className="border-l-4 border-pink-500 pl-5 py-1 relative z-10">
                      <p className="text-lg text-gray-700 italic leading-relaxed">
                        "What excites me most is taking something complex and transforming it into an experience that feels simple, intuitive, and useful."
                      </p>
                    </blockquote>
                    {chapter.paragraphs.filter(p => !p.includes('What excites me most')).map((para, pIdx) => (
                      <p key={pIdx} className="text-base text-black/65 leading-relaxed relative z-10">{para}</p>
                    ))}
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-black">{chapter.title}</h2>
                    {chapter.paragraphs.map((para, pIdx) => (
                      <div key={pIdx}>
                        <p className="text-base text-black/65 leading-relaxed">{para}</p>
                        {/* Image after first paragraph in Beyond Design */}
                        {chapter.title === 'Beyond Design' && pIdx === 0 && (
                          <div className="mt-6 mb-4 rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-[450px]">
                            <img src="/hike.jpeg" alt="Hiking" className="w-full h-full object-cover object-top grayscale" />
                          </div>
                        )}
                      </div>
                    ))}
                    {/* Image after Discovering Product Design */}
                    {chapter.title === 'Discovering Product Design' && (
                      <div className="mt-6 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                        <img src="/hl.jpg" alt="Discovering Product Design" className="w-full h-auto object-contain" />
                      </div>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24 pt-12 border-t border-black/10 text-center"
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-black/10"
          >
            <Link
              to="/about"
              className="text-black/50 hover:text-pink-500 transition-colors inline-flex items-center gap-2 text-sm"
            >
              ← Back to About
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
