import { motion } from 'framer-motion';
import Button from '../components/Button';

export default function Contact() {
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
              Let's Work Together<span className="text-yellow-500">.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I'm always interested in discussing new projects and opportunities. Let's connect!
            </p>
          </motion.div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
                    placeholder="What's this about?"
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
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to chat about design and product strategy, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-500/30 transition-all">
                  <h4 className="text-yellow-500 font-semibold mb-2">Email</h4>
                  <a href="mailto:mary@example.com" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    mary@example.com
                  </a>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-500/30 transition-all">
                  <h4 className="text-yellow-500 font-semibold mb-2">LinkedIn</h4>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500 transition-colors">
                    linkedin.com/in/marymwirigi
                  </a>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-500/30 transition-all">
                  <h4 className="text-yellow-500 font-semibold mb-2">Location</h4>
                  <p className="text-gray-300">Nairobi, Kenya</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect on social</h4>
                <div className="flex gap-4">
                  {[
                    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
                    { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
                    { name: 'Behance', url: 'https://behance.net', icon: '🎨' },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all text-xl"
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
