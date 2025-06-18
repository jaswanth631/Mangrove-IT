import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SecuritySurveillance = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'IP Video Surveillance',
      description: 'Advanced IP-based surveillance systems with real-time monitoring capabilities.',
    },
    {
      title: 'Biometric Access Control',
      description: 'Secure access control systems using biometric authentication.',
    },
    {
      title: 'Fire Safety Systems',
      description: 'Comprehensive fire safety solutions including smoke detectors and fire alarm systems.',
    },
    {
      title: 'Security Integration',
      description: 'Integrated security solutions combining multiple security systems.',
    },
  ];

  const sectors = [
    'Education',
    'Banking and finance',
    'City surveillance',
    'Critical infrastructure',
    'Real Estate',
    'Government',
    'Healthcare',
    'Industrial',
    'Retail',
    'Transportation',
  ];

  return (
    <section className="py-20 bg-gradient-darker relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Security & Surveillance Solutions
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                <p className="text-text/80 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* IP Video Surveillance Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-12"
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">IP Video Surveillance Solutions</h3>
            <p className="text-text/80 leading-relaxed mb-4">
              Our IP-based surveillance systems offer advanced features and capabilities:
            </p>
            <ul className="list-disc list-inside text-text/80 space-y-2">
              <li>High-resolution video capture and recording</li>
              <li>Real-time monitoring and remote access</li>
              <li>Advanced motion detection and alerts</li>
              <li>Cloud storage and backup options</li>
              <li>Integration with existing security systems</li>
            </ul>
          </motion.div>

          {/* Sectors Served */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6"
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">Sectors We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors duration-300"
                >
                  <span className="text-text/80">{sector}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySurveillance; 