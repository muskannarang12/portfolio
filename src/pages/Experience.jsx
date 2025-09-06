'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section 
      ref={ref} 
      className="min-h-screen bg-black text-white flex items-center justify-center p-6 sm:p-8"
    >
      <div className="w-full max-w-4xl text-center">
        {/* Heading */}
        <motion.h2 
          style={{ y }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FF0099] mb-8 font-mono"
        >
          Experience
        </motion.h2>

        {/* Experience Card */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-gray-700 shadow-lg text-left"
        >
          {/* Role + Company */}
          <h3 className="text-xl sm:text-2xl font-semibold text-[#d9f731] font-mono">
            Full Stack Developer (Intern)
          </h3>
          <p className="text-sm text-gray-400 font-mono mb-4">
            InventoCube LLC, Karachi — Jul 2025 – Sep 2025
          </p>

          {/* Responsibilities */}
          <ul className="list-disc pl-5 space-y-2 text-gray-300 font-mono">
            <li>
              Converted the company’s official WordPress website into a fully responsive React-based site —{" "}
              <a
                href="https://test.inventocube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                test.inventocube.com
              </a>
            </li>
            <li>
              Developed and deployed another fully responsive animated website —{" "}
              <a
                href="https://unitedummah.techgraphi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                unitedummah.techgraphi.com
              </a>
            </li>
            <li>
              Improved user experience by making UI/UX enhancements and implementing mobile responsiveness across projects.
            </li>
            <li>
              Contributed to maintaining and updating existing websites, ensuring performance optimization and smooth functionality.
            </li>
            <li>
              Worked on both frontend and backend tasks, gaining hands-on full stack development experience.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
