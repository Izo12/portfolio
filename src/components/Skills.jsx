import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaCode,
  FaBrain,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPytorch,
  SiTensorflow,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: "Développement Web",
      items: [
        { name: "React", icon: FaReact, level: 90 },
        { name: "JavaScript", icon: SiJavascript, level: 85 },
        { name: "TypeScript", icon: SiTypescript, level: 80 },
        { name: "Node.js", icon: FaNodeJs, level: 85 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      ]
    },
    {
      category: "Intelligence Artificielle",
      items: [
        { name: "Python", icon: FaPython, level: 95 },
        { name: "PyTorch", icon: SiPytorch, level: 85 },
        { name: "TensorFlow", icon: SiTensorflow, level: 80 },
        { name: "Machine Learning", icon: FaBrain, level: 85 },
      ]
    },
    {
      category: "Base de données & DevOps",
      items: [
        { name: "MongoDB", icon: SiMongodb, level: 85 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
        { name: "Git", icon: FaGitAlt, level: 90 },
        { name: "Docker", icon: FaDocker, level: 75 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary-400/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light" 
             style={{ top: '-10%', right: '-10%' }}></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-secondary-400/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light" 
             style={{ bottom: '-5%', left: '-5%', animationDelay: '2s' }}></div>
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
              Compétences
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez mes compétences techniques et domaines d'expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
