'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleVideoClick = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-4 z-10"
      >
        <motion.div variants={itemVariants} className="text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transforming Your Digital Vision
            <span className="block text-accent mt-2">Into Reality</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional IT solutions tailored to your business needs. From audio-visual systems to industrial computing, we've got you covered.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              Get Started <FaArrowRight className="animate-pulse" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
              onClick={handleVideoClick}
            >
              Watch Demo <FaPlay />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaArrowRight className="text-white text-2xl" />
        </motion.div>
      </motion.div>

      {/* Demo Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={handleVideoClick}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              controls
              autoPlay
              className="w-full rounded-lg shadow-2xl"
            >
              <source src="/videos/demo.mp4" type="video/mp4" />
            </video>
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={handleVideoClick}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero; 