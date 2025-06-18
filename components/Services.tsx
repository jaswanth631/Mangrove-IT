'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaVideo, 
  FaNetworkWired, 
  FaShieldAlt, 
  FaBoxOpen, 
  FaIndustry, 
  FaBuilding, 
  FaBolt,
  FaGlobe
} from 'react-icons/fa';

const services = [
  {
    title: 'AV Integration',
    description: 'Immersive Audio Visual & Communication Experiences',
    details: 'Bring your environments to life with state-of-the-art AV solutions tailored for impact. We design, install, and maintain advanced systems—from ultra-clear video walls and high-fidelity audio to dynamic lighting and digital signage.',
    icon: <FaVideo className="text-4xl text-accent" />,
    features: [
      'High-performance audio & video systems',
      'LED walls & digital signage',
      'Smart control systems & lighting integration'
    ],
    color: 'bg-blue-50',
    iconColor: 'text-blue-500'
  },
  {
    title: 'IT Integration',
    description: 'Seamlessly Bridging AV & IT for Smarter Workspaces',
    details: 'Technology works best when it works together. Our IT integration services ensure your AV systems speak the same language as your IT infrastructure.',
    icon: <FaNetworkWired className="text-4xl text-accent" />,
    features: [
      'AV-IT ecosystem design',
      'Network integration & control systems',
      'Future-proof infrastructure planning'
    ],
    color: 'bg-purple-50',
    iconColor: 'text-purple-500'
  },
  {
    title: 'Security & Surveillance',
    description: 'CCTV & Monitoring Systems You Can Rely On',
    details: 'Stay secure and in control with our custom surveillance solutions. From smart analytics to 24/7 monitoring, we design CCTV systems that protect what matters most.',
    icon: <FaShieldAlt className="text-4xl text-accent" />,
    features: [
      'High-resolution CCTV cameras',
      'AI-powered video analytics',
      'Custom monitoring & recording solutions'
    ],
    color: 'bg-red-50',
    iconColor: 'text-red-500'
  },
  {
    title: 'Distribution',
    description: 'Your Source for Precision Tools & Electronic Components',
    details: 'Need reliable gear for your next big project? We provide high-quality Test & Measurement Equipment and a wide range of Electronic Components.',
    icon: <FaBoxOpen className="text-4xl text-accent" />,
    features: [
      'Certified T&M tools',
      'Wide range of components',
      'Expert sourcing & support'
    ],
    color: 'bg-green-50',
    iconColor: 'text-green-500'
  },
  {
    title: 'Industrial Computing',
    description: 'Tailored Tech Solutions for Tough Environments',
    details: 'From telecom to manufacturing, we deliver rugged computing solutions designed for industrial strength and performance.',
    icon: <FaIndustry className="text-4xl text-accent" />,
    features: [
      'Telecom-focused tech solutions',
      'Industrial-grade computing hardware',
      'End-to-end tech consulting'
    ],
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-500'
  },
  {
    title: 'Interior & Acoustics',
    description: 'Designing Spaces that Look Great & Sound Even Better',
    details: 'Beautiful design meets functional acoustics. We create spaces where form and sound work in harmony—boosting comfort, focus, and performance.',
    icon: <FaBuilding className="text-4xl text-accent" />,
    features: [
      'Acoustical treatment & planning',
      'Design-focused space optimization',
      'Soundproofing for productivity'
    ],
    color: 'bg-pink-50',
    iconColor: 'text-pink-500'
  },
  {
    title: 'Electrical Projects',
    description: 'Reliable Power Solutions, Delivered with Precision',
    details: 'Power your projects with confidence. Our electrical services cover everything from planning and installation to system upgrades and maintenance.',
    icon: <FaBolt className="text-4xl text-accent" />,
    features: [
      'Commercial & industrial electrical systems',
      'Project design & installation',
      'Preventive maintenance & safety checks'
    ],
    color: 'bg-orange-50',
    iconColor: 'text-orange-500'
  },
  {
    title: 'Web Development',
    description: 'Creating Your Digital Presence with Purpose & Power',
    details: 'Your website is your digital storefront—make it count. We build responsive, visually stunning, and user-friendly websites that drive results.',
    icon: <FaGlobe className="text-4xl text-accent" />,
    features: [
      'Full-stack web design & development',
      'Mobile-friendly & SEO-optimized',
      'Ongoing support & maintenance'
    ],
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-500'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="section-title text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive IT solutions tailored to your specific needs
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`card ${service.color} cursor-pointer`}
              onClick={() => setSelectedService(index)}
            >
              <div className="flex flex-col items-center text-center p-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`mb-4 ${service.iconColor}`}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-2 font-medium">{service.description}</p>
                <p className="text-gray-500 text-sm mb-4">{service.details}</p>
                
                {selectedService === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="w-full"
                  >
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <span className={`w-2 h-2 ${service.iconColor} rounded-full mr-2`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 