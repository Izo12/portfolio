import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Izo12',
      icon: FaGithub,
      hoverColor: 'hover:text-[#333333]',
      bgColor: 'from-[#2b3137] to-[#333333]'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/ismaila-gning',
      icon: FaLinkedin,
      hoverColor: 'hover:text-[#0077b5]',
      bgColor: 'from-[#0077b5] to-[#00a0dc]'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Ismaila9Gning',
      icon: FaTwitter,
      hoverColor: 'hover:text-[#1DA1F2]',
      bgColor: 'from-[#1DA1F2] to-[#0d8bd9]'
    },
    {
      name: 'Email',
      url: 'mailto:gningismaila7@gmail.com',
      icon: FaEnvelope,
      hoverColor: 'hover:text-[#EA4335]',
      bgColor: 'from-[#EA4335] to-[#d62516]'
    }
  ];

  const footerLinks = [
    { name: 'Accueil', to: 'home' },
    { name: 'À propos', to: 'about' },
    { name: 'Compétences', to: 'skills' },
    { name: 'Projets', to: 'projects' },
    { name: 'Expérience', to: 'experience' },
    { name: 'Formation', to: 'education' },
    { name: 'Contact', to: 'contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light animate-float-slow" 
             style={{ top: '-20%', right: '-20%' }}/>
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-secondary-500/10 to-accent-500/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light animate-float-slow" 
             style={{ bottom: '-10%', left: '-10%', animationDelay: '2s' }}/>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }}/>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-transparent bg-clip-text">
                  Ismaila GNING
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Développeur Full Stack & Spécialiste IA
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.bgColor} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}/>
                  <div className="relative w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <social.icon className={`w-6 h-6 text-gray-600 dark:text-gray-400 transition-colors duration-300 ${social.hoverColor}`} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links & Contact */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-12">
            {/* Navigation Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white relative inline-block">
                Navigation
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"/>
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 6 }}
                    className="transform transition-all duration-300"
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-pointer flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white relative inline-block">
                Contact
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"/>
              </h4>
              <ul className="space-y-4">
                <motion.li whileHover={{ x: 6 }} className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <FaPhone className="w-4 h-4 text-primary-500"/>
                  </div>
                  <a href="tel:+221123456789" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    +221 77 192 50 15
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 6 }} className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4 text-primary-500"/>
                  </div>
                  <a href="mailto:contact@example.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    gningismaila7@gmail.com
                  </a>
                </motion.li>
                <motion.li whileHover={{ x: 6 }} className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="w-4 h-4 text-primary-500"/>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Dakar, Sénégal
                  </span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
            {currentYear} Ismaila GNING. Tous droits réservés.
          </p>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Fait avec</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaHeart className="w-4 h-4 text-red-500" />
            </motion.div>
            <span>au Sénégal</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
