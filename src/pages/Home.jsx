
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const ConfettiParticle = ({ x, y, angle, speed, color, size, shape }) => {
  return (
    <motion.div
      className={`absolute pointer-events-none ${shape === 'circle' ? 'rounded-full' : 'rounded-sm'}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
      initial={{ opacity: 1, y: 0, x: 0 }}
      animate={{
        opacity: [1, 1, 0],
        y: `+=${100 * speed}`,
        x: `+=${50 * Math.sin(angle)}`,
        rotate: 360,
      }}
      transition={{
        duration: 2 + Math.random(),
        ease: "linear",
      }}
    />
  );
};

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [displayIm, setDisplayIm] = useState('');
  const [displayRole, setDisplayRole] = useState('');
  const fullText = "Hello there! I'm";
  const fullName = "Muskan Narang";
  const imText = "I'm";
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Full Stack Developer", "Web Developer"];
  const colors = ["#FF0080", "#7928CA", "#FF4D4D", "#F9CB28"];
  const [confetti, setConfetti] = useState([]);
  const containerRef = useRef(null);

  const createConfetti = () => {
    const particles = [];
    const colors = ['#FF0099', '#FF0080', '#7928CA', '#FF4D4D', '#F9CB28', '#d9f731', '#FFFFFF'];
    const shapes = ['circle', 'square'];
    
    for (let i = 0; i < 150; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        angle: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 3 + Math.random() * 7,
        shape: shapes[Math.floor(Math.random() * shapes.length)]
      });
    }
    setConfetti(particles);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      createConfetti();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Combined animation starter
  useEffect(() => {
    // Left side animation
    let i = 0;
    const leftTyping = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(leftTyping);
        let j = 0;
        const nameLines = fullName.split('\n');
        let currentLine = 0;
        let currentText = '';
        const nameTyping = setInterval(() => {
          if (currentLine < nameLines.length) {
            if (j < nameLines[currentLine].length) {
              currentText += nameLines[currentLine][j];
              setDisplayName(currentText + (currentLine < nameLines.length - 1 ? '\n' : ''));
              j++;
            } else {
              currentLine++;
              j = 0;
              currentText += '\n';
              if (currentLine >= nameLines.length) {
                clearInterval(nameTyping);
              }
            }
          }
        }, 100);
      }
    }, 100);

    // Right side animation
    let k = 0;
    const rightTyping = setInterval(() => {
      if (k < imText.length) {
        setDisplayIm(imText.substring(0, k + 1));
        k++;
      } else {
        clearInterval(rightTyping);
        startRoleAnimation();
      }
    }, 100);

    return () => {
      clearInterval(leftTyping);
      clearInterval(rightTyping);
    };
  }, []);

  const startRoleAnimation = () => {
    let l = 0;
    const currentRoleText = roles[currentRole];
    const roleTyping = setInterval(() => {
      if (l < currentRoleText.length) {
        setDisplayRole(currentRoleText.substring(0, l + 1));
        l++;
      } else {
        clearInterval(roleTyping);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setDisplayRole('');
        }, 2000);
      }
    }, 100);
  };

  useEffect(() => {
    if (displayIm === imText) {
      startRoleAnimation();
    }
  }, [currentRole]);

  return (
    <section 
      ref={containerRef}
      className=" bottom-20 min-h-screen bg-black text-white flex items-center justify-center p-4 sm:p-8 relative overflow-hidden"
    >
      {/* Confetti Particles */}
      {confetti.map((particle) => (
        <ConfettiParticle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          angle={particle.angle}
          speed={particle.speed}
          color={particle.color}
          size={particle.size}
          shape={particle.shape}
        />
      ))}

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-6 md:gap-4">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-2/5 text-center md:text-right md:pr-8 order-1 md:order-none"
        >
          <div className="text-lg md:text-xl text-gray-300 font-mono tracking-wider">
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: displayText.length === fullText.length ? 0 : Infinity }}
              className="ml-1"
            >
              {displayText.length === fullText.length ? '' : '|'}
            </motion.span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#FF0099] mt-2 font-mono tracking-tighter whitespace-pre-line">
            {displayName}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: displayName === fullName ? 0 : Infinity }}
              className="ml-1"
            >
              {displayName === fullName ? '' : '|'}
            </motion.span>
          </h1>
        </motion.div>

        {/* Center Image */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 relative mx-4 order-3 md:order-none">
          <motion.div
            animate={{
              rotate: 360,
              borderColor: colors,
              boxShadow: colors.map(color => `0 0 30px 5px ${color === '#F9CB28' ? '#F9CB28' : color}`),
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border-4"
            style={{
              background: 'conic-gradient(from 0deg, #FF0080, #7928CA, #FF4D4D, #F9CB28, #FF0080)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              padding: '4px',
            }}
          />
          
          <motion.div
            className="absolute inset-4 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center"
            animate={{
              boxShadow: colors.map(color => `0 0 25px ${color === '#F9CB28' ? '#F9CB28' : color}`),
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img 
              src="/images/mypic.jpg" 
              alt="Muskan"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full md:w-2/5 text-center md:text-left md:pl-8 flex flex-col justify-between h-full order-2 md:order-none"
        >
          <div>
            <div className="text-lg md:text-xl text-gray-300 font-mono tracking-wider">
              {displayIm}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: displayIm.length === imText.length ? 0 : Infinity }}
                className="ml-1"
              >
                {displayIm.length === imText.length ? '' : '|'}
              </motion.span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 font-mono tracking-tighter">
              <span className={currentRole === 0 ? 'text-[#FF0099]' : 'text-[#d9f731]'}>
                {displayRole}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: displayRole.length === roles[currentRole].length ? 0 : Infinity }}
                  className="ml-1"
                >
                  {displayRole.length === roles[currentRole].length ? '' : '|'}
                </motion.span>
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-row justify-center md:flex-col md:items-end gap-6 md:gap-10 mt-6 md:mt-0 md:absolute md:bottom-7 md:right-8">
            <a 
              href="https://github.com/muskannarang12" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-[#e64ca8] transition-colors"
            >
              <FaGithub size={20} className="md:w-10" />
            </a>
            <a 
              href="https://www.linkedin.com/in/muskan-parkash-narang-514512269/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-[#FF0099] transition-colors"
            >
              <FaLinkedin size={20} className="md:w-10" />
            </a>
            <a 
              href="https://www.instagram.com/muskan_narang12/profilecard/?igsh=eTJmZGE5eGpvNzRt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-[#FF0099] transition-colors"
            >
              <FaInstagram size={20} className="md:w-10" />
            </a>
            <a 
              href="https://www.fiverr.com/s/o86PPlV" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-[#1DBF73] transition-colors"
            >
              <SiFiverr size={20} className="md:w-10" />
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}