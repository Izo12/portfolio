import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  useEffect(() => {
    emailjs.init('-f7MQqUccmbcYT4YI');
  }, []);

  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      to_name: 'Ismaila GNING',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email
    };

    try {
      await emailjs.send(
        'service_xcyhp4j',
        'template_6dzb4wr',
        templateParams,
        '-f7MQqUccmbcYT4YI'
      );

      toast.success('Message envoyé avec succès!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error('Erreur EmailJS:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'gningismaila7@gmail.com',
      link: 'mailto:gningismaila7@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Téléphone',
      value: '+221 77 192 50 15',
      link: 'tel:+221771925015'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ismaila-gning',
      link: 'https://linkedin.com/in/ismaila-gning'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/Izo12',
      link: 'https://github.com/Izo12'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Localisation',
      value: 'Dakar, Sénégal',
      link: 'https://maps.google.com/?q=Dakar,Senegal'
    }
  ];

  const inputVariants = {
    focus: { scale: 1.02, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Contactez-moi
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            N'hésitez pas à me contacter pour toute opportunité ou question
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mr-4">
                  <info.icon className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{info.label}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={inputVariants} whileFocus="focus">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                  placeholder="Votre nom"
                />
              </motion.div>

              <motion.div variants={inputVariants} whileFocus="focus">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </motion.div>

              <motion.div variants={inputVariants} whileFocus="focus">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 resize-none"
                  placeholder="Votre message..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                <FaPaperPlane className={`w-5 h-5 ${isSubmitting ? 'animate-bounce' : 'animate-pulse'}`} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
