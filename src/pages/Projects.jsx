import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Shop shoes faster with smart filters (color, price, brand), quick search, and add-to-cart. Works perfectly on any device.",
      tags: ["Html", "CSS", "JavaScript", "Web Development", "responsive"],
      github: "https://github.com/muskannarang12/shoe-web",
      youtubeId: "QnGVuxVxEvk", // Replace with actual YouTube ID
      demo: "https://youtu.be/QnGVuxVxEvk"
    },
    {
      title: "NotesVault",
      description: "Notes Vault, a full-stack task and notes management website designed for productivity and security.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Full Stack", "responsive"],
      github: "https://github.com/muskannarang12/notes-vault",
      linkedin: "https://www.linkedin.com/posts/your-linkedin-post",
      youtubeId: "LUdvOseXjfU" ,
      demo: "https://youtu.be/LUdvOseXjfU"
    },
    {
      title: "BlogSphere",
      description: "BlogSphere is a dynamic blogging platform where users can create, share, and explore blogs.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Full Stack", "responsive"],
      github: "https://github.com/muskannarang12/Blogsphere",
      linkedin: "https://www.linkedin.com/posts/your-linkedin-post",
      youtubeId: "nkZi7XyJRC4" ,
      demo : "https://youtu.be/nkZi7XyJRC4"
    },
    {
      title: "PixalVoyage",
      description: "Image search website with clean functionality and beautiful dark mode UI.",
      tags: ["Html", "CSS", "JavaScript", "Web Development", "API"],
      github: "https://github.com/muskannarang12/image_search",
      linkedin: "https://www.linkedin.com/posts/your-linkedin-post",
      youtubeId: "uW0hGW5NFI0" ,
      demo :"https://youtu.be/uW0hGW5NFI0" ,
    },
    {
      title: "School Management System",
      description: "An integrated platform that simplifies school operations.",
      tags: ["Html", "CSS", "PHP", "JavaScript", "MySQL"],
      github: "https://github.com/muskannarang12/school_management_system",
      youtubeId: "3D_T7vi0QCg" ,
      demo: "https://youtu.be/3D_T7vi0QCg"
    },
    {
      title: "LexiQuest",
      description: "Dictionary website providing comprehensive word details.",
      tags: ["Html", "CSS", "JavaScript", "Web Development", "API"],
      github: "https://github.com/muskannarang12/app_dictionary",
      youtubeId: "Q896y-YhrRo" ,
      demo : "https://youtu.be/Q896y-YhrRo"

    },
    {
      title: "To Do List",
      description: "Task management system with create, edit, and delete capabilities.",
      tags: ["Html", "CSS", "JavaScript"],
      github: "https://github.com/muskannarang12/to_do_list",
      youtubeId: "oGdn_rZpBgw",
      demo: "https://youtu.be/oGdn_rZpBgw"

    },
    {
      title: "Fashion Recommender System",
      description: "Find matching fashion items through image-based search.",
      tags: ["Python", "CNN", "Tensorflow", "Machine learning"],
      github: "https://github.com/muskannarang12/Fashion_recommender",
      media: "/videos/fc.png" // Keeping as image
    },
    {
      title: "2048 game with modification",
      description: "Expanded 8x8 game board with target tile set to 4096.",
      tags: ["Java", "project", "GUI", "Game", "DSA"],
      github: "https://github.com/muskannarang12/2048-game-project-of-data-structure",
      media: "/videos/2048.png" // Keeping as image
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [projectsPerView, setProjectsPerView] = useState(3);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProjectsPerView(1);
      } else if (window.innerWidth < 1024) {
        setProjectsPerView(2);
      } else {
        setProjectsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextProjects = () => {
    setStartIndex(prev => 
      prev >= projects.length - projectsPerView ? 0 : prev + 1
    );
  };

  const prevProjects = () => {
    setStartIndex(prev => 
      prev <= 0 ? projects.length - projectsPerView : prev - 1
    );
  };

  const visibleProjects = projects.slice(startIndex, startIndex + projectsPerView);

  const adjustedProjects = 
    startIndex + projectsPerView > projects.length
      ? [
          ...visibleProjects,
          ...projects.slice(0, projectsPerView - (projects.length - startIndex))
        ]
      : visibleProjects;

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#FF0099] pb-10 mb-4 font-mono text-center"
        >
          My Projects
        </motion.h2>

        <div className="relative">
          <button 
            onClick={prevProjects}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-[#FF0099] rounded-full p-2 ml-4 md:-ml-6 transition-all duration-300 shadow-lg"
            aria-label="Previous projects"
          >
            <FaChevronLeft className="text-white text-xl md:text-2xl" />
          </button>
          
          <button 
            onClick={nextProjects}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-[#FF0099] rounded-full p-2 mr-4 md:-mr-6 transition-all duration-300 shadow-lg"
            aria-label="Next projects"
          >
            <FaChevronRight className="text-white text-xl md:text-2xl" />
          </button>

          <div 
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-500"
          >
            {adjustedProjects.map((project, index) => (
              <motion.div
                key={`${startIndex}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl border border-gray-800 hover:border-[#FF0099] transition-all duration-300 h-full flex flex-col"
              >
                {/* Media Container - handles both YouTube videos and images */}
                <div className="relative aspect-video overflow-hidden flex-shrink-0 bg-black">
                  {project.youtubeId ? (
                    <>
                      <iframe
                        src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=0&modestbranding=1&rel=0`}
                        className="w-full h-full object-cover"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={project.title}
                      ></iframe>
                    
                    </>
                  ) : (
                    <img 
                      src={project.media} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 bg-gray-900/50 backdrop-blur-sm flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#d9f731] font-mono">{project.title}</h3>
                      <p className="text-gray-400 mt-1 font-mono text-sm">{project.description}</p>
                    </div>
                    <div className="flex gap-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#FF0099] transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub size={20} />
                      </a>
                      {project.linkedin && (
                        <a 
                          href={project.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#0077B5] transition-colors"
                          aria-label={`Share ${project.title} on LinkedIn`}
                        >
                          <FaLinkedin size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-mono hover:bg-[#FF0099] hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Demo Button */}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-[#FF0099] text-white px-3 py-1 rounded-md text-sm font-mono flex items-center gap-1 hover:bg-[#e60088] transition-colors shadow-lg"
                  >
                    Live Demo <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: Math.ceil(projects.length / projectsPerView) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i * projectsPerView)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                startIndex === i * projectsPerView ? 'bg-[#FF0099] w-6' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`View projects ${i * projectsPerView + 1} to ${Math.min((i + 1) * projectsPerView, projects.length)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
