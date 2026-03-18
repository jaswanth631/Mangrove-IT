"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaVideo,
  FaNetworkWired,
  FaShieldAlt,
  FaBoxOpen,
  FaIndustry,
  FaBuilding,
  FaBolt,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    title: "AV Integration",
    description: "Immersive Audio Visual & Communication Experiences",
    details:
      "State-of-the-art AV solutions including video walls, high-fidelity audio, dynamic lighting, and digital signage.",
    icon: <FaVideo className="text-4xl md:text-5xl" />,
  },
  {
    title: "IT Integration",
    description: "Seamlessly Bridging AV & IT for Smarter Workspaces",
    details:
      "Ensuring your AV systems integrate perfectly with your IT infrastructure for seamless operations.",
    icon: <FaNetworkWired className="text-4xl md:text-5xl" />,
  },
  {
    title: "Security & Surveillance",
    description: "CCTV & Monitoring Systems You Can Rely On",
    details:
      "Advanced surveillance solutions with smart analytics and 24/7 monitoring capabilities.",
    icon: <FaShieldAlt className="text-4xl md:text-5xl" />,
  },
  {
    title: "Distribution",
    description: "Precision Tools & Electronic Components",
    details:
      "High-quality Test & Measurement Equipment and a wide range of Electronic Components.",
    icon: <FaBoxOpen className="text-4xl md:text-5xl" />,
  },
  {
    title: "Industrial Computing",
    description: "Tailored Tech Solutions for Tough Environments",
    details:
      "Rugged computing solutions designed for industrial strength and performance.",
    icon: <FaIndustry className="text-4xl md:text-5xl" />,
  },
  {
    title: "Interior & Acoustics",
    description: "Spaces that Look Great & Sound Even Better",
    details:
      "Beautiful design meets functional acoustics for optimal comfort and performance.",
    icon: <FaBuilding className="text-4xl md:text-5xl" />,
  },
  {
    title: "Electrical Projects",
    description: "Reliable Power Solutions with Precision",
    details:
      "Comprehensive electrical services from planning and installation to maintenance.",
    icon: <FaBolt className="text-4xl md:text-5xl" />,
  },
  {
    title: "Web Development",
    description: "Creating Your Digital Presence with Purpose",
    details:
      "Responsive, visually stunning, and user-friendly websites that drive results.",
    icon: <FaGlobe className="text-4xl md:text-5xl" />,
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50" id="services">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <div className="accent-line my-6" />
          <p className="section-subtitle max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to your specific needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="card hover-lift group cursor-pointer text-center"
            >
              {/* Icon */}
              <motion.div
                className="icon-box mx-auto mb-6 text-primary-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-navy-950">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-3 font-medium text-sm md:text-base">
                {service.description}
              </p>

              {/* Details */}
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                {service.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
