import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InteriorAcoustics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'Office Interiors',
      description: 'Professional office interior design and implementation services.',
    },
    {
      title: 'Home Interiors',
      description: 'Customized home interior solutions to create your perfect living space.',
    },
    {
      title: 'Furniture Design',
      description: 'Custom furniture design and manufacturing services.',
    },
    {
      title: 'Flooring Solutions',
      description: 'High-quality flooring solutions for all types of spaces.',
    },
    {
      title: 'Lighting Design',
      description: 'Professional lighting design and implementation services.',
    },
    {
      title: 'Fabric Installations',
      description: 'Custom fabric installations for walls, ceilings, and windows.',
    },
  ];

  const acousticTypes = [
    {
      title: 'Hard Rooms',
      description: 'Rooms with little sound absorption, where surfaces reflect most of the noise.',
    },
    {
      title: 'Rooms with Absorbent Ceilings',
      description: 'Common type of room with sound-absorbing ceiling, requiring specific acoustic treatment.',
    },
    {
      title: 'Open-plan Rooms',
      description: 'Extended forms such as open-plan areas and corridors requiring specialized acoustic solutions.',
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
            Interior & Acoustics Services
          </h2>

          {/* Interior Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Interior Services</h3>
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

          {/* Acoustics Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Acoustic Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {acousticTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
                >
                  <h4 className="text-xl font-semibold mb-4 text-primary">{type.title}</h4>
                  <p className="text-text/80 leading-relaxed">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 bg-white/5 backdrop-blur-sm rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Our Approach</h3>
            <p className="text-text/80 leading-relaxed">
              MISPL works with project needs and delivers total solutions in the areas of Acoustic treatment. We serve the commercial, institutional, industrial and residential buildings market. Our services include:
            </p>
            <ul className="list-disc list-inside text-text/80 space-y-2 mt-4">
              <li>Wall paneling and acoustic treatments</li>
              <li>False ceiling solutions</li>
              <li>POP and acoustic foam installations</li>
              <li>Soundproofing solutions</li>
              <li>Acoustical insulation</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteriorAcoustics; 