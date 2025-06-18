import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaIcon } from '../components/FaIcon';
import GradientButton from '../components/GradientButton';

const Metrics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counters, setCounters] = useState({
    projects: 0,
    cities: 0,
    support: 0,
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCounters(prev => ({
          projects: prev.projects < 100 ? prev.projects + 1 : 100,
          cities: prev.cities < 30 ? prev.cities + 1 : 30,
          support: prev.support < 24 ? prev.support + 1 : 24,
        }));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/tech-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-white mb-2">{counters.projects}+</h3>
            <p className="text-white/80">Projects Delivered</p>
          </div>
          <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-white mb-2">{counters.cities}+</h3>
            <p className="text-white/80">Cities Covered</p>
          </div>
          <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-white mb-2">{counters.support}/7</h3>
            <p className="text-white/80">Support & Monitoring</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics; 