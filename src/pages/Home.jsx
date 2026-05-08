import { useEffect, useState } from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { projects } from '../data/projects';

export default function Home() {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleItems((prev) => [...new Set([...prev, entry.target.id])]);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center max-w-3xl mx-auto">
          <h1
            data-animate
            id="hero-title"
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 ${
              visibleItems.includes('hero-title') ? 'fade-in-up' : 'opacity-0'
            }`}
          >
            UI/UX Designer crafting meaningful digital experiences
          </h1>
          <p
            data-animate
            id="hero-subtitle"
            className={`text-lg md:text-xl text-gray-400 mb-8 transition-all duration-700 delay-100 ${
              visibleItems.includes('hero-subtitle') ? 'fade-in-up' : 'opacity-0'
            }`}
          >
            I focus on user-centered design that creates real impact. Let's build something extraordinary together.
          </p>
          <div
            data-animate
            id="hero-buttons"
            className={`flex flex-col md:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${
              visibleItems.includes('hero-buttons') ? 'fade-in-up' : 'opacity-0'
            }`}
          >
            <Button variant="primary">View My Work</Button>
            <Button variant="secondary">Contact Me</Button>
          </div>
        </div>
      </Section>

      {/* Featured Work Section */}
      <Section id="work" className="bg-black">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              data-animate
              id={`project-${project.id}`}
              className={`transition-all duration-700 ${
                visibleItems.includes(`project-${project.id}`) ? 'fade-in-up' : 'opacity-0'
              }`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-gray-950">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            data-animate
            id="about-image"
            className={`transition-all duration-700 ${
              visibleItems.includes('about-image') ? 'fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="bg-gray-800 aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
                alt="Mary Mwirigi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div
            data-animate
            id="about-content"
            className={`transition-all duration-700 ${
              visibleItems.includes('about-content') ? 'fade-in-up' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              With a background in Economics and Sociology, I bring a unique perspective to product design. I believe that great design is rooted in understanding people—their needs, behaviors, and aspirations.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              My journey into design was driven by a passion for creating digital experiences that matter. I focus on user-centered thinking and designing solutions that create real social impact.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not designing, you'll find me exploring new design trends, reading about behavioral psychology, or collaborating with teams to solve complex problems.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Let's Work Together</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-800 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-900 border border-gray-800 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full bg-gray-900 border border-gray-800 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <Button variant="primary" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </Section>
    </>
  );
}
