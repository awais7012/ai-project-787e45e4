import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-100"
          style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.05em' }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            className="backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-lg p-6 md:p-8"
            layout
          >
            <motion.h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
              Contact Information
            </motion.h3>
            <motion.div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400" />
              <a href="mailto:your.email@example.com" className="text-gray-800 dark:text-gray-100 hover:text-blue-500">
                your.email@example.com
              </a>
            </motion.div>
            <motion.div className="flex items-center mb-2">
              <Github className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400" />
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-100 hover:text-blue-500">
                GitHub Profile
              </a>
            </motion.div>
            <motion.div className="flex items-center mb-2">
              <Linkedin className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400" />
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-100 hover:text-blue-500">
                LinkedIn Profile
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-lg p-6 md:p-8"
            layout
          >
            <motion.h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
              Send a Message
            </motion.h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;