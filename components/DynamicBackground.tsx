import React from "react";
import { motion } from "framer-motion";

const DynamicBackground = () => {
  const floatingElements = [
    {
      size: 64,
      delay: 0,
      duration: 15,
      gradient: "from-blue-500/30 to-purple-500/30",
    },
    {
      size: 48,
      delay: 2,
      duration: 20,
      gradient: "from-purple-500/30 to-pink-500/30",
    },
    {
      size: 80,
      delay: 4,
      duration: 25,
      gradient: "from-cyan-500/30 to-blue-500/30",
    },
    {
      size: 56,
      delay: 6,
      duration: 18,
      gradient: "from-indigo-500/30 to-purple-500/30",
    },
    {
      size: 40,
      delay: 8,
      duration: 22,
      gradient: "from-pink-500/30 to-red-500/30",
    },
    {
      size: 72,
      delay: 3,
      duration: 23,
      gradient: "from-teal-500/30 to-cyan-500/30",
    },
    {
      size: 52,
      delay: 5,
      duration: 19,
      gradient: "from-violet-500/30 to-purple-500/30",
    },
    {
      size: 44,
      delay: 7,
      duration: 21,
      gradient: "from-blue-500/30 to-indigo-500/30",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden perspective-2000">
      {/* Video background */}
      <motion.video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </motion.video>

      {/* Gradient overlay with animation */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(26, 54, 93, 0.8) 0%, rgba(45, 55, 72, 0.6) 50%, rgba(26, 54, 93, 0.8) 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating 3D Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute bg-gradient-to-br ${element.gradient} backdrop-blur-md rounded-3xl transform-3d`}
          initial={{
            y: "100vh",
            opacity: 0,
            rotateX: 0,
            rotateY: 0,
            z: 0,
          }}
          animate={{
            y: ["-20vh", "120vh"],
            x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0.8, 0],
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180],
            scale: [0.5, 1, 1, 0.5],
            z: [0, 100, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: element.size,
            height: element.size,
            left: `${Math.random() * 100}%`,
            transformStyle: "preserve-3d",
            boxShadow: "0 0 40px rgba(66, 153, 225, 0.4)",
          }}
        >
          {/* Inner glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            animate={{
              boxShadow: [
                "0 0 20px rgba(66, 153, 225, 0.5)",
                "0 0 40px rgba(66, 153, 225, 0.8)",
                "0 0 20px rgba(66, 153, 225, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Particle field */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Animated mesh gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(66, 153, 225, 0.3) 0%, transparent 50%)",
          backgroundSize: "100% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default DynamicBackground;
