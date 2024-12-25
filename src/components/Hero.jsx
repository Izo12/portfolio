import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Izo12', color: 'hover:text-gray-800' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ismaila-gning', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: 'https://x.com/Ismaila9Gning', color: 'hover:text-blue-400' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary-400/30 blur-3xl mix-blend-multiply dark:mix-blend-soft-light animate-float" 
             style={{ top: '10%', left: '60%', animationDelay: '0s' }}></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-secondary-400/30 blur-3xl mix-blend-multiply dark:mix-blend-soft-light animate-float" 
             style={{ top: '50%', left: '20%', animationDelay: '2s' }}></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent-400/30 blur-3xl mix-blend-multiply dark:mix-blend-soft-light animate-float" 
             style={{ top: '30%', left: '40%', animationDelay: '4s' }}></div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0" 
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Main heading with animated gradient text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            <span className="inline-block bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-transparent bg-clip-text animate-gradient bg-300% pb-2">
              Ismaila Gning
            </span>
          </motion.h1>

          {/* Animated typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-20"
          >
            <div className="absolute w-full">
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light mb-8">
                <span className="inline-block">
                  Développeur Full Stack passionné par la création
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text font-medium">
                  de solutions numériques innovantes
                </span>
              </h2>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10">Me contacter</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#projects"
              className="group relative px-8 py-4 overflow-hidden rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 dark:border-gray-700"
            >
              <span className="relative z-10 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 text-transparent bg-clip-text group-hover:opacity-80 transition-opacity duration-300">
                Voir mes projets
              </span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center space-x-6 mt-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform hover:-translate-y-1 transition-all duration-300 text-gray-600 dark:text-gray-400 ${social.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
