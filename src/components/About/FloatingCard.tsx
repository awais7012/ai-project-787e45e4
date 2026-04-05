import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    const rotateX = deltaY * 5;
    const rotateY = deltaX * 5;

    cardRef.current.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-2xl p-6 shadow-lg transition-transform duration-200 will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingCard;