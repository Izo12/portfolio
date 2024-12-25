import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt, FaCalendarAlt, FaMedal, FaChevronRight } from 'react-icons/fa';

const Education = () => {
  const [selectedId, setSelectedId] = useState(null);

  const education = [
    {
      id: 1,
      degree: "Master en Intelligence Artificielle",
      school: "Université Numérique Cheikh Hamidou Kane",
      location: "Campus Atos",
      period: "2022 - 2024",
      description: "Formation approfondie en Intelligence Artificielle et apprentissage automatique.",
      achievements: [
        "Spécialisation en Deep Learning et Computer Vision",
        "Projets pratiques avec des entreprises partenaires",
        "Recherche en traitement du langage naturel",
        "Participation à des hackathons d'IA"
      ],
      courses: [
        "Deep Learning et Réseaux de Neurones",
        "Computer Vision et Traitement d'Images",
        "Natural Language Processing",
        "Machine Learning Avancé",
        "Big Data et Cloud Computing"
      ],
      icon: FaGraduationCap,
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      degree: "Licence en Mathématiques Appliquées et Informatique",
      school: "Université Numérique Cheikh Hamidou Kane",
      location: "Dakar, Sénégal",
      period: "2019 - 2022",
      description: "Formation en développement logiciel et mathématiques appliquées.",
      achievements: [
        "Major de promotion en algorithmique",
        "Développement de projets logiciels innovants",
        "Participation à des compétitions de programmation",
        "Tutorat en mathématiques pour les étudiants juniors"
      ],
      courses: [
        "Algorithmique et Structures de Données",
        "Programmation Orientée Objet",
        "Bases de Données",
        "Analyse Numérique",
        "Probabilités et Statistiques"
      ],
      icon: FaUniversity,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      degree: "Baccalauréat Série S2",
      school: "Lycée Moderne de Rufisque",
      location: "Rufisque, Sénégal",
      period: "2018",
      description: "Baccalauréat scientifique avec mention.",
      achievements: [
        "Mention Bien au Baccalauréat",
        "Premier de la classe en mathématiques",
        "Participation aux olympiades de mathématiques",
        "Membre du club scientifique"
      ],
      courses: [
        "Mathématiques",
        "Physique-Chimie",
        "Sciences de la Vie et de la Terre",
        "Philosophie",
        "Anglais"
      ],
      icon: FaMedal,
      color: "from-yellow-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="education" className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-primary-400/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light animate-float-slow" 
          style={{ top: '10%', right: '-20%' }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-secondary-400/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light animate-float-slow" 
          style={{ bottom: '-10%', left: '-10%', animationDelay: '2s' }}
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

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
              Formation
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Mon parcours académique et mes réalisations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="mb-12 last:mb-0"
              onClick={() => setSelectedId(edu.id)}
            >
              <div className="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.color} p-4 shadow-lg`}>
                    <edu.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <FaUniversity className="w-4 h-4 text-primary-500" />
                        <span>{edu.school}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="w-4 h-4 text-primary-500" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4 text-primary-500" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {edu.description}
                    </p>

                    {/* Preview of achievements */}
                    <div className="flex items-center text-primary-500 hover:text-primary-600 transition-colors">
                      <span className="text-sm font-medium">Voir plus de détails</span>
                      <FaChevronRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
                layoutId={`edu-${selectedId}`}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-2xl z-50"
              >
                {(() => {
                  const edu = education.find(e => e.id === selectedId);
                  return (
                    <div className="relative">
                      <button
                        onClick={() => setSelectedId(null)}
                        className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        ×
                      </button>

                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.color} p-4`}>
                          <edu.icon className="w-full h-full text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {edu.school}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="w-4 h-4 text-primary-500" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="w-4 h-4 text-primary-500" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {edu.description}
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                            Réalisations
                          </h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                <FaChevronRight className="w-4 h-4 mt-1 text-primary-500 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                            Cours Principaux
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 text-sm font-medium bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 rounded-full"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
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

export default Education;
