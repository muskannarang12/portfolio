'use client'; // Required for framer-motion in Next.js

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition((prev) => {
        if (prev.x !== e.clientX || prev.y !== e.clientY) {
          return { x: e.clientX, y: e.clientY };
        }
        return prev;
      });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  return (
    <motion.div
      className="fixed w-10 h-10 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: position.x - 20,
        y: position.y - 20,
        transition: { 
          type: 'spring', 
          mass: 0.1,
          damping: 10,
          stiffness: 100
        }
      }}
      style={{
        boxShadow: `
          0 0 10px 3px rgba(249, 203, 40, 0.8),
          0 0 20px 5px rgba(249, 203, 40, 0.5)
        `
      }}
    />
  );
}
