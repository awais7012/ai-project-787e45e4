import React from 'react';
import { motion, StaggerChildren } from 'framer-motion';
import { Github, Link } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
}

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      layout
      className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex justify-end space-x-4">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
            <Github className="h-6 w-6" />
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 transition-colors duration-300">
            <Link className="h-6 w-6" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};


const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate="visible"
        >
          <StaggerChildren>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </StaggerChildren>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;