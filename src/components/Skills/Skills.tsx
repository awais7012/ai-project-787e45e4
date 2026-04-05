import React from 'react';
import { motion } from 'framer-motion';
import { StaggerChildren } from '@/components/Animation/StaggerChildren';

interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

interface SkillsProps {
  skills: Skill[];
  variant: 'bars' | 'icons';
}

const Skills: React.FC<SkillsProps> = ({ skills, variant }) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StaggerChildren>
        {variant === 'bars' ? (
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-24">{skill.name}</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.7 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                {skill.icon}
                <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        )}
      </StaggerChildren>
    </motion.div>
  );
};

export default Skills;