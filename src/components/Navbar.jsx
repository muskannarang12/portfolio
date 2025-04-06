import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME', path: '/' },
    { id: 'about', label: 'ABOUT', path: '/about' },
    { id: 'projects', label: 'PROJECTS', path: '/projects' },
    { id: 'skills', label: 'SKILLS', path: '/skills' },
    { id: 'services', label: 'SERVICES', path: '/services' }, 
    { id: 'contact', label: 'CONTACT', path: '/contact' }
  ];

  const cvUrl = '/videos/muskan_cv.pdf';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4 flex justify-between items-center text-white mix-blend-difference"
    >
      {/* Desktop Navigation - Updated with larger text */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="relative group text-lg uppercase tracking-widest font-bold hover:text-[#FF0099] transition-colors duration-300"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => handleNavClick(item.id)}
          >
            <motion.span 
              className="block relative"
              animate={{
                color: hoveredItem === item.id ? '#FF0099' : '#FFFFFF'
              }}
              transition={{ duration: 0.3 }}
            >
              {item.label}
              {hoveredItem === item.id && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF0099]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                  layoutId="navUnderline"
                />
              )}
            </motion.span>
          </button>
        ))}
      </div>

      {/* CV Download Button - Desktop - Updated with larger size */}
      <motion.a
        href={cvUrl}
        download="Muskan_Narang_CV.pdf"
        className="hidden md:flex items-center gap-2 bg-[#FF0099] hover:bg-[#e64ca8] text-white px-4 py-2 rounded-full text-base uppercase tracking-widest font-bold transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaDownload />
        <span>Download CV</span>
      </motion.a>

      {/* Mobile CV Download Button */}
      <motion.a
        href={cvUrl}
        download="Muskan_Narang_CV.pdf"
        className="md:hidden flex items-center gap-1 bg-[#FF0099] hover:bg-[#e64ca8] text-white px-2 py-1 rounded-full text-xs uppercase tracking-widest font-bold transition-colors duration-300 mr-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaDownload size={12} />
        <span>CV</span>
      </motion.a>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-2xl z-50"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? null : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden fixed inset-0 bg-black z-40 flex flex-col items-start p-8 pt-20"
          >
            <button 
              className="absolute top-6 right-6 text-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaTimes />
            </button>

            {navItems.map((item) => (
              <button
                key={item.id}
                className="w-full py-4 text-xl uppercase tracking-widest font-bold text-white hover:text-[#FF0099] transition-colors border-b border-gray-800 text-left"
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
