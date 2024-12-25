import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    console.log('Clicking nav item:', href); // Debug log
    const element = document.querySelector(href);
    if (element) {
      console.log('Found element:', element); // Debug log
      const offset = 80; // Hauteur du header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Fermer le menu mobile si ouvert
      setIsMenuOpen(false);

      // Ajouter un hash à l'URL sans déclencher de défilement
      window.history.pushState(null, '', href);
    } else {
      console.log('Element not found for:', href); // Debug log
    }
  };

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Formation', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0 },
    exit: { y: -100 }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -100 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      initial="initial"
      animate="animate"
      variants={headerVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
              <div className="relative px-6 py-3 bg-white dark:bg-gray-900 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center">
                <span className="text-xl font-bold bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-transparent bg-clip-text">
                  IG
                </span>
              </div>
            </div>
            <span className="hidden md:block text-xl font-bold bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-transparent bg-clip-text">
              Ismaila Gning
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="toggle menu"
          >
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className={`bg-gradient-to-r from-primary-500 to-secondary-500 h-[2px] w-7 transform transition-all duration-300 origin-left ${isMenuOpen ? 'rotate-[42deg] translate-y-2' : ''}`}></div>
                <div className={`bg-gradient-to-r from-primary-500 to-secondary-500 h-[2px] w-7 rounded transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`bg-gradient-to-r from-primary-500 to-secondary-500 h-[2px] w-7 transform transition-all duration-300 origin-left ${isMenuOpen ? '-rotate-[42deg] -translate-y-2' : ''}`}></div>
              </div>
            </div>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 rounded-2xl shadow-xl mt-2 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  custom={i}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 hover:text-white rounded-lg transition-colors duration-300"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
