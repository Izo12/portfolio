import React from 'react';
import { motion } from 'framer-motion';

const AnimationWrapper = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
