import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AVIntegration = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'Video Conferencing',
      description: 'Workplace communications are undergoing substantial transformations. Many people are now working remote, or from a home office. Corporate institutions are also finding they need to add more huddle and VC rooms in their head offices to accommodate rapid changes.',
    },
    {
      title: 'Large PA & Line Arrays',
      description: 'Our team has experience with the design and commissioning of Sound Reinforcement System for auditoriums, performing arts canters, houses of worship, community halls, sporting facilities and anywhere full music quality amplification is required.',
    },
    {
      title: 'Projection',
      description: 'We access to the latest Projection technologies including LCD and DLP units from all major manufacturers including Epson, Panasonic, Sony, Delta, Barco, BenQ, Optoma, Canon, NEC, Christie Digital.',
    },
    {
      title: 'LED & Video Wall',
      description: 'LED Screens can be used for major impact both indoors and outdoors. Advertising, Auditoriums, Sports Venues, Command Centres, Conference Rooms. Hotels, Churches, and Universities are all candidates for Led screens.',
    },
    {
      title: 'Commercial TV Screens',
      description: 'We distribute all major brands and sizes of Commercial TV screens. Leading products such as LG, Samsung, Sony, Panasonic, NEC, ViewSonic and Philips are available.',
    },
    {
      title: 'Interactive Touch Screens',
      description: 'The way you communicate and collaborate on an interactive display which combines high-quality advanced technology with a familiar user experience to enhance presentations, meetings, and in class lessons.',
    },
    {
      title: 'Digital Signage',
      description: 'We are at the forefront in offering Digital Signage Display Solutions. From a single Information Display with a Digital Media Player, to a fully networked site running multiple screens across the country.',
    },
    {
      title: 'Stage & Concert Lighting',
      description: 'Our team has extensive experience with consulting, design, installation, and operation of complex performance lighting systems. This covers venues including theatres, Auditoriums, performing arts centres, community halls and houses of worship.',
    },
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
            AV Integration Services
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

export default AVIntegration; 