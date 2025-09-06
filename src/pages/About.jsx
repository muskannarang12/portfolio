'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={ref} className="min-h-screen bg-black text-white flex items-center justify-center p-6 sm:p-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* Animated Image */}
        <motion.div 
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative flex-shrink-0"
          style={{ x }}
        >
          <motion.div
            animate={{
              rotate: 360,
              borderColor: ["#FF0080", "#7928CA", "#FF4D4D", "#F9CB28"],
              boxShadow: ["0 0 30px 5px #FF0080", "0 0 30px 5px #7928CA", "0 0 30px 5px #FF4D4D", "0 0 30px 5px #F9CB28"],
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
          
          <div className="absolute inset-4 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
            <img 
              src="/images/mypic.jpg" 
              alt="Muskan Narang"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* About Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF0099] mb-4 md:mb-6 font-mono">
            About Me
          </h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 font-mono text-base sm:text-lg leading-relaxed">
            <p>
              I'm <span className="text-[#FF0099]">Muskan Narang</span>, a proud Computer Science graduate from 
              <span className="text-[#d9f731]"> Sukkur IBA University</span>, Class of 2025. 
              I successfully completed my BS in June 2025 with a <span className="text-[#d9f731]">4-year Meritorious Scholarship</span>, 
              showcasing academic excellence throughout my journey.
            </p>
            <p>
              I'm a <span className="text-[#d9f731]">Full Stack Developer</span> specializing in the MERN stack, 
              with hands-on experience building modern, responsive, and user-friendly applications. 
              My expertise bridges frontend design, backend logic, and seamless deployment.
            </p>
            <p>
              What sets me apart is my ability to combine technical depth with creative problem-solving. 
              I’m passionate about building innovative, impactful solutions that not only solve problems but also 
              deliver an engaging user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
