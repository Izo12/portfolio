import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCertificate } from 'react-icons/fa';
import { SiCoursera, SiUdemy, SiGoogle } from 'react-icons/si';

const Certifications = () => {
  const certifications = [
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera - DeepLearning.AI",
      date: "2023",
      icon: SiCoursera,
      link: "#",
      skills: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP"]
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      icon: SiGoogle,
      link: "#",
      skills: ["TensorFlow", "Machine Learning", "Deep Learning"]
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2022",
      icon: SiUdemy,
      link: "#",
      skills: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Big Data with Apache Spark",
      issuer: "Coursera",
      date: "2023",
      icon: SiCoursera,
      link: "#",
      skills: ["Spark", "Data Processing", "Analytics"]
    }
  ];

  return (
    <section id="certifications" className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary-400/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light animate-float-slow" 
             style={{ top: '-10%', right: '-10%' }}></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-secondary-400/10 blur-3xl mix-blend-multiply dark:mix-blend-soft-light animate-float-slow" 
             style={{ bottom: '-5%', left: '-5%', animationDelay: '2s' }}></div>
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
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 rounded-2xl transition-all duration-300"></div>
                
                {/* Content */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                        <cert.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {cert.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {cert.date}
                    </span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Link */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 mt-4 text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-300"
                  >
                    <FaCertificate className="w-4 h-4" />
                    <span>Voir le certificat</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
