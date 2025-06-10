import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython,
  FaBootstrap, FaPhp, FaDatabase, FaMicrosoft, FaPaintBrush
} from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiMysql, SiNumpy, SiPandas, SiCanva, SiTensorflow, SiExpress } from 'react-icons/si';

const skillsMap = {
  HTML: <FaHtml5 color="#e34c26" />,
  CSS: <FaCss3Alt color="#264de4" />,
  JavaScript: <SiJavascript color="#f0db4f" />,
  "React.js": <FaReact color="#61DBFB" />,
  TailwindCSS: <SiTailwindcss color="#38bdf8" />,
  Bootstrap: <FaBootstrap color="#7952b3" />,
  "Node.js": <FaNodeJs color="#3C873A" />,
  "Express.js": <SiExpress color="white" />,
  PHP: <FaPhp color="#8892be" />,
  MySQL: <SiMysql color="#00758f" />,
  MongoDB: <SiMongodb color="#4DB33D" />,
  Git: <FaGitAlt color="#f34f29" />,
  GitHub: <FaGithub color="white" />,
  Python: <FaPython color="#3572A5" />,
  NumPy: <SiNumpy color="#013243" />,
  Pandas: <SiPandas color="#130754" />,
  Matplotlib: <SiNumpy color="#999999" />,
  "Microsoft Office": <FaMicrosoft color="#F25022" />,
  Canva: <SiCanva color="#00C4CC" />,
  Photoshop: <FaPaintBrush color="#31A8FF" />
};

const skillCategories = {
  All: [
    "HTML", "CSS", "JavaScript", "React.js", "TailwindCSS", "Bootstrap",
    "Node.js", "Express.js", "PHP", "MySQL", "MongoDB",
    "Python", "NumPy", "Pandas", "Matplotlib",
    "Git", "GitHub", "Microsoft Office", "Canva", "Photoshop"
  ],
  Frontend: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "PHP"],
  Database: ["MySQL", "MongoDB"],
  Programming: ["Python", "NumPy", "Pandas", "Matplotlib"],
  Tools: ["Git", "GitHub", "Microsoft Office", "Canva", "Photoshop"]
};

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section id="skills" className="min-h-screen bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#FF0099] font-mono mb-10"
        >
          My Skills
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-mono transition-all border 
                ${
                  selectedCategory === category
                    ? 'bg-[#FF0099] text-white border-[#FF0099]'
                    : 'bg-transparent text-gray-400 border-gray-700 hover:bg-[#FF0099] hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skillCategories[selectedCategory].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-900/60 border border-gray-800 hover:border-[#d9f731] rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition-all shadow-md hover:shadow-[#FF0099]/50"
            >
              <div className="text-3xl">
                {skillsMap[skill] || <FaPaintBrush />}
              </div>
              <p className="text-sm font-mono text-gray-300">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
