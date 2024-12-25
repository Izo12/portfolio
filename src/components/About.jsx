import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const qualities = [
    {
      icon: FaCode,
      title: "Développement Full Stack",
      description: "Passionné par la création d'applications web complètes et performantes"
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Toujours à la recherche de nouvelles solutions créatives"
    },
    {
      icon: FaRocket,
      title: "Performance",
      description: "Optimisation et qualité code pour des applications rapides"
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-primary-400/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light animate-float-slow" 
             style={{ top: '-20%', right: '-20%' }}></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-secondary-400/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light animate-float-slow" 
             style={{ bottom: '-10%', left: '-10%', animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-transparent bg-clip-text">
              À Propos de Moi
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-[450px] h-[450px] mx-auto overflow-hidden rounded-xl">
                <img
                  src="/iso.jpg"
                  alt="Ismaila Gning"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Développeur Full Stack Passionné
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Je suis un développeur Full Stack basé au Sénégal, passionné par la création d'applications web innovantes et performantes. 
              Mon expertise couvre l'ensemble de la stack technique, du front-end au back-end, avec une attention particulière pour 
              l'expérience utilisateur et la qualité du code.
            </p>
            <div className="space-y-4">
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                      <quality.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      {quality.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {quality.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CV Download button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <a
                href="public/CV Ismaila Gning1.pdf"
                download
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload className="w-5 h-5" />
                <span>Télécharger CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
