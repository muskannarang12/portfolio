import { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Cursor from './components/Cursor';

function MainContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isManualScroll, setIsManualScroll] = useState(false);
  const scrollTimeout = useRef(null);

  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Map paths to refs
  const pathToRef = {
    '/': homeRef,
    '/about': aboutRef,
    '/projects': projectsRef,
    '/skills': skillsRef,
    '/services': servicesRef,
    '/contact': contactRef,
  };

  // Scroll to section when path changes (only for manual navigation)
  useEffect(() => {
    if (isManualScroll) {
      const ref = pathToRef[location.pathname];
      if (ref?.current) {
        // Temporarily disable scroll listener
        setIsManualScroll(false);
        
        ref.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });

        // Re-enable scroll listener after scroll completes
        scrollTimeout.current = setTimeout(() => {
          setIsManualScroll(true);
        }, 1000);
      }
    }
  }, [location.pathname, isManualScroll]);

  // Handle scroll events to update URL
  useEffect(() => {
    const sections = [
      { path: '/', ref: homeRef },
      { path: '/about', ref: aboutRef },
      { path: '/projects', ref: projectsRef },
      { path: '/skills', ref: skillsRef },
      { path: '/services', ref: servicesRef },
      { path: '/contact', ref: contactRef },
    ];

    const handleScroll = () => {
      if (!isManualScroll) return;

      clearTimeout(scrollTimeout.current);
      
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (location.pathname !== section.path) {
              navigate(section.path, { replace: true });
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, [location.pathname, navigate, isManualScroll]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Scroll to section function for navbar clicks
  const scrollToSection = (ref, path) => {
    setIsManualScroll(false);
    navigate(path);
    setTimeout(() => {
      ref.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setTimeout(() => setIsManualScroll(true), 1000);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Cursor />
      
      <Navbar 
        scrollToHome={() => scrollToSection(homeRef, '/')}
        scrollToAbout={() => scrollToSection(aboutRef, '/about')}
        scrollToProjects={() => scrollToSection(projectsRef, '/projects')}
        scrollToSkills={() => scrollToSection(skillsRef, '/skills')}
        scrollToServices={() => scrollToSection(servicesRef, '/services')}
        scrollToContact={() => scrollToSection(contactRef, '/contact')}
      />

      <div className="pt-20 md:pt-24">
        {/* Home Section */}
        <motion.section
          ref={homeRef}
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen snap-start"
        >
          <Home scrollToAbout={() => scrollToSection(aboutRef, '/about')} />
        </motion.section>

        {/* About Section */}
        <motion.section
          ref={aboutRef}
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="min-h-screen snap-start"
        >
          <About />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          ref={projectsRef}
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="min-h-screen snap-start"
        >
          <Projects />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          ref={skillsRef}
          id="skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="min-h-screen snap-start"
        >
          <Skills />
        </motion.section>

        {/* Services Section */}
        <motion.section
          ref={servicesRef}
          id="services"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="min-h-screen snap-start"
        >
          <Services />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          ref={contactRef}
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="min-h-screen snap-start"
        >
          <Contact />
        </motion.section>
      </div>

      
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;