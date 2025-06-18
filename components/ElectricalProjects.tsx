import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ElectricalProjects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'HT & LT Installations',
      description: 'Complete high-tension and low-tension electrical installations for commercial and industrial projects.',
    },
    {
      title: 'Industrial Wiring',
      description: 'Professional industrial wiring solutions for manufacturing and production facilities.',
    },
    {
      title: 'Electrical Design',
      description: 'Comprehensive electrical system design and engineering services.',
    },
    {
      title: 'Control Panels',
      description: 'Custom electrical control panel design and manufacturing.',
    },
    {
      title: 'Maintenance Contracts',
      description: 'Annual maintenance contracts for electrical systems and equipment.',
    },
    {
      title: 'Repair Services',
      description: 'Professional repair and maintenance services for electrical systems.',
    },
  ];

  const projects = [
    {
      title: 'IISc Multimedia Class Rooms',
      description: 'Complete electrical and AV integration for state-of-the-art multimedia classrooms.',
    },
    {
      title: 'JNCASR Conference Hall',
      description: '200-seat conference hall with integrated electrical and AV systems.',
    },
    {
      title: 'Open Amphitheatre',
      description: 'Large-scale electrical and lighting solutions for outdoor performance venue.',
    },
    {
      title: 'Adithya Celestial Apartments',
      description: 'Comprehensive electrical solutions for residential complex.',
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
            Electrical Projects
          </h2>

          {/* Services Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
                >
                  <h4 className="text-xl font-semibold mb-4 text-primary">{service.title}</h4>
                  <p className="text-text/80 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Projects Showcase */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
                >
                  <h4 className="text-xl font-semibold mb-4 text-primary">{project.title}</h4>
                  <p className="text-text/80 leading-relaxed">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 bg-white/5 backdrop-blur-sm rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Our Commitment</h3>
            <p className="text-text/80 leading-relaxed">
              We are proud of our quality workmanship and we are committed to providing the highest standards of quality, productivity, safe and on-time work. Our services have been developed through years of experience and continuous feedback from:
            </p>
            <ul className="list-disc list-inside text-text/80 space-y-2 mt-4">
              <li>Architects and Designers</li>
              <li>Consultants and Engineers</li>
              <li>Suppliers and Manufacturers</li>
              <li>End Users and Clients</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ElectricalProjects; 