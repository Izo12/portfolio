import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Vérifier la position de défilement et mettre à jour la visibilité
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction de défilement vers le haut
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div className="relative">
            {/* Cercle d'effet au survol */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 blur-lg transform scale-150 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            
            {/* Bouton principal */}
            <div className="relative w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center overflow-hidden">
              {/* Fond animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              {/* Icône */}
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <FaArrowUp className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-primary-500 transition-colors duration-300" />
              </motion.div>
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
