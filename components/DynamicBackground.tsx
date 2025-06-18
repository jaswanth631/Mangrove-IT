import React from 'react';
import { motion } from 'framer-motion';

const DynamicBackground = () => {
  const floatingElements = [
    { size: 'w-16 h-16', delay: 0, duration: 15, color: 'bg-accent/20' },
    { size: 'w-12 h-12', delay: 2, duration: 20, color: 'bg-secondary/20' },
    { size: 'w-20 h-20', delay: 4, duration: 25, color: 'bg-primary/20' },
    { size: 'w-14 h-14', delay: 6, duration: 18, color: 'bg-accent/20' },
    { size: 'w-10 h-10', delay: 8, duration: 22, color: 'bg-secondary/20' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/40" />
      
      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.color} backdrop-blur-sm rounded-lg`}
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: [100, -100, 100],
            x: [0, 50, 0],
            opacity: [0, 0.5, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default DynamicBackground; 