'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      setIsVisible(true);
    };

    const handleTouchStart = () => {
      setIsVisible(false);
    };

    // Check if device supports hover (not touch)
    if (window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchstart', handleTouchStart);
    } else {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed w-10 h-10 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        opacity: isVisible ? 1 : 0,
        boxShadow: `
          0 0 10px 3px rgba(249, 203, 40, 0.8),
          0 0 20px 5px rgba(249, 203, 40, 0.5)
        `,
      }}
      animate={{
        transition: { 
          type: 'spring', 
          damping: 20,
          stiffness: 300,
          mass: 0.5
        }
      }}
    />
  );
}