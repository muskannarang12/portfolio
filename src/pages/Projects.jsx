import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight , FaLinkedin} from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Shop shoes faster with smart filters (color, price, brand), quick search, and add-to-cart. Works perfectly on any device.",
      tags: ["Html", "CSS", "JavaScript" , "Web Development" , "responsive"],
      github: "https://github.com/muskannarang12/shoe-web",
      media: "/videos/shoes_web.png",
      demo: "https://ecommerce-demo.com"
    },
    {
      title: "NotesVault",
      description: " Notes Vault, a full-stack task and notes management website designed for productivity and security. With seamless authentication, intuitive filtering, and a sleek UI, users can now access their notes anytime, anywhere!",
      tags:["React", "Node.js", "Express" , "MongoDB" , "Full Stack", , "responsive"],
      github: "https://github.com/muskannarang12/notes-vault",
      linkedin: "https://www.linkedin.com/posts/muskan-parkash-narang-514512269_react-nodejs-mongodb-activity-7311326623943868416-m13U?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEG_7WABW1qvJJoUrpZFrDV9iv2tJXUd1aw&utm_campaign=whatsapp",
      media: "/videos/notes_vault.mp4"
    },
    {
      title: "BlogSphere",
      description: "BlogSphere is a dynamic blogging platform where users can create, share, and explore blogs on various topics. Featuring user profiles, dark mode, and favorites functionality, it offers a seamless experience for writers and readers.",
      tags: ["React", "Node.js", "Express" , "MongoDB" , "Full Stack", , "responsive"],
      github: "https://github.com/muskannarang12/Blogsphere",
      linkedin: "https://www.linkedin.com/posts/muskan-parkash-narang-514512269_webdevelopment-react-nodejs-activity-7307467066423320576-Ujd9?utm_source=share&utm_medium=member_android&rcm=ACoAAEG_7WABW1qvJJoUrpZFrDV9iv2tJXUd1aw",
      media: "/videos/BlogSphere.mp4",
        demo: "https://taskapp-demo.com"
    },
    {
      title: "PixalVoyage",
      description: "this is image_search website where you can search any kind of images, What it does: Clean image search functionality. Beautiful dark mode UI. Smooth card animations and hover effects Paginated results",
      tags: ["Html", "CSS", "JavaScript" , "Web Development","API"],
      github: "https://github.com/muskannarang12/image_search",
      linkedin: "https://www.linkedin.com/posts/muskan-parkash-narang-514512269_webdevelopment-codingjourney-frontend-activity-7313211484384182272-exCY?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEG_7WABW1qvJJoUrpZFrDV9iv2tJXUd1aw&utm_campaign=whatsapp",
      media: "/videos/image_search.mp4",
       demo: "https://recipes-demo.com"
    },
 
    {
      title: "School Management System",
      description: "An integrated platform that simplifies school operations by providing tools for administration, teaching, and learning - facilitating every aspect of educational management.",
      tags: ["Html", "CSS", "PHP" , "JavaScript", "MySQL"],
      github: "https://github.com/muskannarang12/school_management_system",
      media: "/videos/school_management.mp4"
    },
    {
      title: "LexiQuest",
      description: "When you search for a word on this website, it provides comprehensive details, including its meaning, synonyms, antonyms, usage examples, and part of speech",
      tags: ["Html", "CSS", "JavaScript" , "Web Development","API"],
      github: "https://github.com/muskannarang12/app_dictionary",
      media: "/videos/app_dictionary.mp4",
      demo: "https://recipes-demo.com"
    },
    {
      title: "To Do List",
      description: "The system enables seamless task management with complete create, edit, and delete capabilities",
      tags: ["Html", "CSS",  "JavaScript"],
      github: "https://github.com/muskannarang12/to_do_list",

      media: "/videos/to_do_list.mp4"
    },
    {
      title: "Fashion Recommender System",
      description: "Find matching or complementary fashion items through image-based search.",
      tags: ["Python", "CNN",  "Tensorflow" , "Machine learning"],
      github: "https://github.com/muskannarang12/Fashion_recommender",
      media: "/videos/fc.png"
    },
    {
      title: "2048 game with modification",
      description: " The game board has been expanded to 8x8 from 4x4. Winning Tile: The target tile to win the game has been set to 4096",
      tags: ["Java", "project",  "GUI" , "Game" , "DSA" ],
      github: "https://github.com/muskannarang12/2048-game-project-of-data-structure",
      media: "/videos/2048.png"
    },

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

  // Handle cases where we're at the end of the array
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
              className="text-4xl md:text-5xl font-bold text-[#FF0099]  pb-10 mb-4 font-mono text-center"
            >
              My Projects
            </motion.h2>
            
            {/* <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 font-mono text-lg text-center mb-16 max-w-2xl mx-auto"
            >
              Here are some of my featured projects. Each one was crafted with care and attention to detail.
            </motion.p> */}
    
            <div className="relative">
              {/* Navigation Arrows */}
              <button 
                onClick={prevProjects}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-[#FF0099] rounded-full ml-4 md:-ml-6 transition-all duration-300 shadow-lg"
                aria-label="Previous projects"
              >
                <FaChevronLeft className="text-white text-xl md:text-2xl" />
              </button>
              
              <button 
                onClick={nextProjects}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-[#FF0099] rounded-full -mr-4 md:-mr-6 transition-all duration-300 shadow-lg"
                aria-label="Next projects"
              >
                <FaChevronRight className="text-white text-xl md:text-2xl" />
              </button>
    
              {/* Projects Grid */}
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
                    {/* Media Preview - handles both images and videos */}
                    <div className="relative aspect-video overflow-hidden flex-shrink-0">
                      {project.media.endsWith('.mp4') || project.media.endsWith('.webm') ? (
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        >
                          <source src={project.media} type={`video/${project.media.split('.').pop()}`} />
                        </video>
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
    
                    {/* Live Demo Button (if available) */}
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