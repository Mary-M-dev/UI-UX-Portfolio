import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, description, tags, image }) {
  return (
    <Link to={`/case-study/${id}`}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden bg-gray-900 aspect-video mb-4 transition-transform duration-300 group-hover:scale-105">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 border border-gray-700 text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
