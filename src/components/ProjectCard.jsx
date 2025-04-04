import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="h-48 bg-gray-700 relative overflow-hidden">
        <img 
          src={`/project-${project.id}.jpg`} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a 
            href="#"
            className="px-4 py-2 bg-primary rounded-lg hover:bg-primary/80 transition-colors"
          >
            Live Demo
          </a>
          <a 
            href="#"
            className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;