import { motion } from 'framer-motion';

export default function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  dark = false 
}) {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-black' : 'bg-white/2'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {title}
              <span className="text-yellow-500">.</span>
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
}
