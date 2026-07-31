import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-black">
            Let's Work Together<span className="text-pink-500">.</span>
          </h1>
          <p className="text-base text-black/50">
            Have a project in mind? I'd love to help bring your ideas to life.
          </p>
        </motion.div>
      </section>

      {/* Two-Column Layout */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Get In Touch */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-xl font-bold text-black">Get In Touch</h2>

            {/* Contact items */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center text-black/40 flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">Email</p>
                  <a href="mailto:Marynmwirigi@gmail.com" className="text-sm text-black/60 hover:text-pink-500 transition-colors">
                    Marynmwirigi@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center text-black/40 flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">Location</p>
                  <p className="text-sm text-black/60">Nairobi, Kenya</p>
                </div>
              </div>

              {/* Available for */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center text-black/40 flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">Available for</p>
                  <p className="text-sm text-black/60">Remote & Local Projects</p>
                </div>
              </div>
            </div>

            {/* Response Time card */}
            <div className="bg-gray-50 border border-black/8 rounded-xl p-5">
              <p className="text-sm font-semibold text-black mb-1">Response Time</p>
              <p className="text-sm text-black/50">I typically respond within 24 hours on business days.</p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-black mb-8">Send a Message</h2>
            <form 
              name="contact" 
              method="POST" 
              action="/contact?success=true"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-5"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              <div>
                <label className="block text-sm text-black/60 mb-1">Full Name <span className="text-pink-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-black/15 rounded-lg text-black placeholder-black/30 focus:outline-none focus:border-pink-500 transition-colors text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-black/60 mb-1">Email <span className="text-pink-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-black/15 rounded-lg text-black placeholder-black/30 focus:outline-none focus:border-pink-500 transition-colors text-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-black/60 mb-1">Message <span className="text-pink-500">*</span></label>
                <textarea
                  rows="6"
                  name="message"
                  required
                  className="w-full px-4 py-3 bg-white border border-black/15 rounded-lg text-black placeholder-black/30 focus:outline-none focus:border-pink-500 transition-colors resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-pink-500 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
