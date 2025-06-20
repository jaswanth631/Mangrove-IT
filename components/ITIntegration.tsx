import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ITIntegration = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'Web Development',
      description: `We craft dynamic and engaging web experiences that captivate your audience and drive business growth. From intuitive user interfaces (UI) and seamless user experiences (UX) to robust, scalable backends, our web development services ensure your online presence is powerful, responsive across all devices, and optimized for performance in today's fast-paced digital landscape.`,
    },
    {
      title: 'Application Integration',
      description: `Break down data silos and streamline your business operations with our expert application integration services. We connect disparate software systems – from cloud-based platforms like Salesforce and SAP to your legacy on-premise applications – creating seamless workflows and enabling real-time data exchange for enhanced efficiency and informed decision-making.`,
    },
    {
      title: 'Web Services',
      description: `Unlock the full potential of your digital ecosystem with our comprehensive web services. We build secure, reliable, and high-performance APIs that facilitate seamless communication between your applications, partners, and third-party platforms. Our web services are designed for interoperability, scalability, and robust data exchange, powering your distributed systems.`,
    },
    {
      title: 'REST APIs',
      description: `Leverage the power of industry-standard REST APIs to connect your applications and innovate faster. Our REST API development and integration services focus on creating well-documented, secure, and efficient interfaces that enable seamless data flow, support mobile and web applications, and empower your business to build connected, future-proof digital solutions.`,
    },
  ];

  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            IT Integration Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </motion.div>
      </div>
    </section>
  );
};

export default ITIntegration; 