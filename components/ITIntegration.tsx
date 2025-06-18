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
      title: 'IT Infrastructure',
      description: 'Build products which include Desktop, Laptop, Print, Server & Network & Storage Computing applications.',
    },
    {
      title: 'Outsourced IT Management',
      description: 'Outsource Customer IT Infrastructure & Manage IT 24/7.',
    },
    {
      title: 'Data Center & Networking',
      description: 'Comprehensive Data Center & Networking Solutions for your business needs.',
    },
    {
      title: 'Web Development',
      description: 'Website and Portal development and management services.',
    },
    {
      title: 'ERP Solutions',
      description: 'Customized ERP solutions to streamline your business operations.',
    },
    {
      title: 'IT Placements',
      description: 'Professional IT staffing and placement services.',
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 bg-white/5 backdrop-blur-sm rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Why Choose Us?</h3>
            <p className="text-text/80 leading-relaxed">
              MISPL has become the most reliable and dependable company for various services offered by us because:
            </p>
            <ul className="list-disc list-inside text-text/80 space-y-2 mt-4">
              <li>We have people having professional experience and expertise to handle specific service offered by our group.</li>
              <li>Our wide network of business partners and agents all around, well equipped and having the similar mindset of serving the customer at the best makes our customer feel very comfortable in dealing with us.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ITIntegration; 