import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="py-4 text-center text-gray-500 dark:text-gray-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Built by Awais (Romeo)
    </motion.footer>
  );
};

export default Footer;