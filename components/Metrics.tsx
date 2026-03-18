"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const metrics = [
  { label: "Projects Completed", value: 500, suffix: "+" },
  { label: "Happy Clients", value: 200, suffix: "+" },
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Team Members", value: 50, suffix: "+" },
];

const Metrics = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-900 to-primary-700 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Impact
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-accent-400 to-transparent mx-auto mb-4 md:mb-6" />
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4">
              Numbers that speak to our commitment and excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                metric={metric}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MetricCard = ({
  metric,
  index,
  inView,
}: {
  metric: { label: string; value: number; suffix: string };
  index: number;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = metric.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
      });

      return () => clearInterval(timer);
    }
  }, [inView, metric.value, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={controls}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="text-center"
    >
      {/* Number */}
      <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 md:mb-3 text-white">
        {count}
        {metric.suffix}
      </h3>

      {/* Label */}
      <p className="text-white/80 text-sm md:text-base font-medium">
        {metric.label}
      </p>
    </motion.div>
  );
};

export default Metrics;
