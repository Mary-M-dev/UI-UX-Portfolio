import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Button from '../components/Button';

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-gold hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-gray-400 mb-8">{project.description}</p>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 border border-gray-700 text-gray-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="bg-gray-900 aspect-video rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">The Problem</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            {project.caseStudy?.problem || 'Understanding the core challenge was essential to creating a meaningful solution. Through research and user interviews, we identified key pain points that needed to be addressed.'}
          </p>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 px-6 bg-gray-950 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Research & Insights</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            {project.caseStudy?.research || 'Our research phase involved extensive user interviews, competitive analysis, and behavioral studies. We discovered that users valued simplicity, speed, and personalization above all else.'}
          </p>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Design Process</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            {project.caseStudy?.process || 'We started with low-fidelity wireframes to explore different approaches. Through iterative testing and refinement, we developed high-fidelity designs that balanced aesthetics with functionality.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop"
                alt="Wireframes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-900 aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop"
                alt="Iterations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-gray-950 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Final Solution</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            {project.caseStudy?.solution || 'The final design delivers a clean, intuitive interface that prioritizes user needs. Every element was carefully crafted to enhance the user experience and drive engagement.'}
          </p>
          <div className="bg-gray-900 aspect-video rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt="Final Solution"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Impact & Learnings</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            {project.caseStudy?.impact || 'This project reinforced the importance of user-centered design. By focusing on real user needs and iterating based on feedback, we created a solution that truly resonates with our audience.'}
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Key learnings: The power of simplicity, the value of user feedback, and the importance of continuous iteration in creating meaningful digital experiences.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-950 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Interested in working together?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="primary">Get in Touch</Button>
            <Link to="/" className="px-8 py-3 font-semibold border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 inline-block">
              Back to Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
