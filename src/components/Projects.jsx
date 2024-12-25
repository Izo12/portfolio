import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript, SiMongodb } from 'react-icons/si';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Portfolio Personnel",
      description: "Portfolio moderne développé avec React et Tailwind CSS, mettant en valeur mes compétences et projets avec des animations fluides.",
      image: "/projects/portfolio.jpg",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/gningmarieme/portfolio",
      demo: "https://portfolio.marieme-gning.com",
      category: "web",
      tech: [FaReact, SiTailwindcss, SiJavascript]
    },
    {
      id: 2,
      title: "AI Image Generator",
      description: "Application web utilisant l'API DALL-E pour générer des images à partir de descriptions textuelles.",
      image: "/projects/ai-image.jpg",
      tags: ["Python", "React", "OpenAI"],
      github: "https://github.com/gningmarieme/ai-image-generator",
      demo: "https://ai-image.marieme-gning.com",
      category: "ai",
      tech: [FaPython, FaReact, SiMongodb]
    },
    {
      id: 3,
      title: "E-commerce Dashboard",
      description: "Dashboard administrateur pour une plateforme e-commerce avec analyses en temps réel et gestion des produits.",
      image: "/projects/dashboard.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/gningmarieme/ecommerce-dashboard",
      demo: "https://dashboard.marieme-gning.com",
      category: "web",
      tech: [FaReact, FaNodeJs, SiTypescript]
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'web', name: 'Web' },
    { id: 'ai', name: 'AI' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-primary-400/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light" 
          style={{ top: '20%', right: '-20%' }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-secondary-400/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light" 
          style={{ bottom: '-10%', left: '-10%' }}
        />
      </div>

      {/* Content */}
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
              Mes Projets
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus récents et innovants
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${filter === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Tags */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex gap-3 mb-4">
                  {project.tech.map((Icon, index) => (
                    <Icon
                      key={index}
                      className="w-6 h-6 text-gray-600 dark:text-gray-400"
                    />
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Demo
                  </a>
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
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              />
              <motion.div
                layoutId={`project-${selectedId}`}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 overflow-hidden"
              >
                {/* Modal Content */}
                {(() => {
                  const project = projects.find(p => p.id === selectedId);
                  return (
                    <div className="relative">
                      <button
                        onClick={() => setSelectedId(null)}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                      >
                        ×
                      </button>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-4 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-6">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-2 rounded-full bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                          >
                            <FaGithub className="w-5 h-5" />
                            Voir le code
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 transition-colors"
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            Voir le projet
                          </a>
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

export default Projects;
