import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <motion.div
      className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-8 lg:px-12">
        {children}
      </main>
      <Footer />
    </motion.div>
  );
};

export default Layout;