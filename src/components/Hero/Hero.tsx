import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { ScrollDownIndicator } from '../ScrollDownIndicator/ScrollDownIndicator';
import { Stars } from '../Stars/Stars';

interface HeroProps {
  nickname: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ nickname, title, subtitle }) => {
  const controls = useAnimation();
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } });
          } else {
            controls.start({ opacity: 0, y: 20, transition: { duration: 0.5 } });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, [controls]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0" ref={canvasRef}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Stars />
        </Canvas>
      </div>

      {/* Glassmorphism Overlay */}
      <motion.div
        className="absolute inset-0 backdrop-blur-md bg-white/5 dark:bg-black/10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Text Content */}
      <div className="container mx-auto text-center relative z-20 p-4">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md mb-2 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-300 drop-shadow-md mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="text-md md:text-lg text-blue-400 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ delay: 0.4 }}
        >
          {nickname}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ScrollDownIndicator />
      </div>
    </section>
  );
};

export default Hero;