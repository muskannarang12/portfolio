// Services.jsx
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaPenAlt, FaThumbsUp } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Beautiful, responsive websites built with modern technologies like React, Vite and Tailwind CSS.",
      icon: <FaLaptopCode className="text-4xl text-[#FF0099]" />,
      skills: ["HTML/CSS", "JavaScript", "React", "Vite", "Tailwind"]
    },
    {
      title: "Backend  Development",
      description: "Robust backend solutions with Node.js, Express, and database integration.",
      icon: <FaServer className="text-4xl text-[#FF0099]" />,
      skills: ["Node.js", "Express", "PHP", "MySQL", "MongoDB"]
    },
    {
      title: "Content Writing",
      description: "Engaging content for your websites, blogs, and social media platforms.",
      icon: <FaPenAlt className="text-4xl text-[#FF0099]" />,
      skills: ["Technical Writing", "Blog Posts", "Website Content", "Social Media"]
    },
    {
      title: "Social Media Management",
      description: "Boost your online presence with strategic social media management.",
      icon: <FaThumbsUp className="text-4xl text-[#FF0099]" />,
      skills: ["Content Strategy", "Post Scheduling", "Engagement Growth", "Analytics"]
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-black text-white py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#FF0099] mb-4 font-mono text-center"
        >
          My Services
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 font-mono text-lg text-center mb-16 max-w-2xl mx-auto"
        >
          Comprehensive solutions tailored to your digital needs
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#FF0099] transition-all duration-300 h-full flex flex-col"
            >
              <div className="mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#d9f731] font-mono mb-2 text-center">{service.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{service.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {service.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-mono hover:bg-[#FF0099] hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;