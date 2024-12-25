import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const Experience = () => {
  const [selectedId, setSelectedId] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "Développeuse Full Stack",
      company: "Freelance",
      location: "Remote",
      period: "2023 - Présent",
      description: "Développement d'applications web et mobiles pour divers clients. Spécialisation en React, Node.js et Python.",
      achievements: [
        "Développement d'une plateforme e-commerce avec plus de 10K utilisateurs actifs",
        "Mise en place d'une architecture microservices pour améliorer la scalabilité",
        "Intégration de solutions de paiement et de gestion des commandes",
        "Optimisation des performances et de l'expérience utilisateur"
      ],
      technologies: ["React", "Node.js", "Python", "MongoDB", "AWS"]
    },
    {
      id: 2,
      title: "Stagiaire en Intelligence Artificielle",
      company: "ATOS Sénégal",
      location: "Dakar, Sénégal",
      period: "2023",
      description: "Stage en IA focalisé sur le développement de solutions de computer vision et de traitement du langage naturel.",
      achievements: [
        "Développement d'un système de reconnaissance d'objets en temps réel",
        "Implémentation d'un chatbot intelligent pour le service client",
        "Optimisation des modèles de deep learning pour la production",
        "Collaboration avec une équipe internationale"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP"]
    },
    {
      id: 3,
      title: "Développeuse Web Junior",
      company: "Startup Locale",
      location: "Dakar, Sénégal",
      period: "2022",
      description: "Développement de solutions web innovantes pour les entreprises locales.",
      achievements: [
        "Création d'interfaces utilisateur réactives et modernes",
        "Intégration de systèmes de paiement locaux",
        "Optimisation des performances des applications",
        "Formation de nouveaux développeurs"
      ],
      technologies: ["JavaScript", "React", "PHP", "MySQL", "Git"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-primary-400/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light animate-float-slow" 
             style={{ top: '10%', right: '-20%' }}></div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-secondary-400/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light animate-float-slow" 
             style={{ bottom: '-10%', left: '-10%', animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-transparent bg-clip-text">
              Expérience Professionnelle
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez mon parcours professionnel et mes réalisations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative mb-12 last:mb-0"
                onClick={() => setSelectedId(exp.id)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 border-4 border-white dark:border-gray-800"></div>

                <div className="ml-20 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <FaBriefcase className="w-4 h-4 text-primary-500" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="w-4 h-4 text-primary-500" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendar className="w-4 h-4 text-primary-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center"
                    >
                      <FaChevronRight className="w-4 h-4 text-primary-500" />
                    </motion.button>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              />
              <motion.div
                layoutId={`exp-${selectedId}`}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl z-50"
              >
                {(() => {
                  const exp = experiences.find(e => e.id === selectedId);
                  return (
                    <div className="relative">
                      <button
                        onClick={() => setSelectedId(null)}
                        className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        ×
                      </button>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                          <FaBriefcase className="w-4 h-4 text-primary-500" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="w-4 h-4 text-primary-500" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendar className="w-4 h-4 text-primary-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {exp.description}
                      </p>
                      <div className="space-y-4 mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                          Réalisations principales
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                              <FaChevronRight className="w-4 h-4 mt-1 text-primary-500 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-sm font-medium bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
