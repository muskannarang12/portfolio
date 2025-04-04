import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

export default function Contact() {
  return (
    <section id="contact"   className="min-h-screen bg-black text-white  px-4 sm:px-8 flex items-center">
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#FF0099] mb-12 font-mono text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-[#FF0099] transition-all duration-300"
          >
            <form 
              action="https://formspree.io/f/xaneplbw" 
              method="POST"
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-800 rounded-lg font-mono text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF0099]"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-4 bg-gray-800 rounded-lg font-mono text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF0099]"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="px-8 py-4 bg-[#FF0099] text-white rounded-lg font-mono font-bold tracking-wider hover:bg-[#e60088] transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-[#FF0099] transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#d9f731] font-mono mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <FaEnvelope className="text-[#FF0099] text-xl" />
                  <div>
                    <p className="font-mono">muskannarang947@gmail.com</p>
                    <p className="font-mono">muskannarang909@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <FaMapMarkerAlt className="text-[#FF0099] text-xl" />
                  <p className="font-mono">Sukkur, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-[#FF0099] transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#d9f731] font-mono mb-6">Connect With Me</h3>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/muskan-parkash-narang-514512269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-[#FF0099] hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaLinkedin className="text-xl" />
                  <span className="font-mono">LinkedIn</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/muskannarang12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-[#FF0099] hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaGithub className="text-xl" />
                  <span className="font-mono">GitHub</span>
                </motion.a>
                
                <motion.a
                  href="https://www.fiverr.com/s/o86PPlV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-[#FF0099] hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <SiFiverr className="text-xl" />
                  <span className="font-mono">Fiverr</span>
                </motion.a>
                
                <motion.a
                  href="https://www.instagram.com/muskan_narang12/profilecard/?igsh=eTJmZGE5eGpvNzRt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-[#FF0099] hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaInstagram className="text-xl" />
                  <span className="font-mono">Instagram</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-6 border-t border-gray-800 text-center text-gray-400 font-mono"
        >
          <p>Designed & Developed by Muskan Narang © 2025</p>
        </motion.div>
      </div>
    </section>
  );
}