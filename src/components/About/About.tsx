import React from 'react';
import { motion } from 'framer-motion';
import { Avatar } from '@nextui-org/react';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-center mb-8 text-white"
          style={{ letterSpacing: '-0.05em' }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Avatar
              isBordered
              radius="lg"
              src="https://avatars.githubusercontent.com/u/49458718?v=4"
              className="w-full h-full object-cover"
              alt="Awais's Avatar"
            />
          </motion.div>

          <motion.div className="text-lg text-gray-300">
            <p className="mb-4">
              Hello! I'm Awais, a passionate software engineer with a focus on building scalable and user-friendly web applications.
            </p>
            <p className="mb-4">
              I have experience in various technologies including React, Node.js, TypeScript, and more. I enjoy tackling complex problems and crafting elegant solutions.
            </p>
            <p>
              My goal is to create impactful software that makes a difference. I'm always eager to learn new things and collaborate with talented individuals.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;