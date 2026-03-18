import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SecuritySurveillance = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "IP Video Surveillance",
      description:
        "Advanced IP-based surveillance systems with real-time monitoring capabilities.",
    },
    {
      title: "Biometric Access Control",
      description:
        "Secure access control systems using biometric authentication.",
    },
    {
      title: "Fire Safety Systems",
      description:
        "Comprehensive fire safety solutions including smoke detectors and fire alarm systems.",
    },
    {
      title: "Security Integration",
      description:
        "Integrated security solutions combining multiple security systems.",
    },
  ];

  const sectors = [
    "Education",
    "Banking and finance",
    "City surveillance",
    "Critical infrastructure",
    "Real Estate",
    "Government",
    "Healthcare",
    "Industrial",
    "Retail",
    "Transportation",
  ];

  const features = [
    "High-resolution video capture and recording",
    "Real-time monitoring and remote access",
    "Advanced motion detection and alerts",
    "Cloud storage and backup options",
    "Integration with existing security systems",
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Security & Surveillance Solutions</h2>
            <div className="accent-line my-6" />
            <p className="section-subtitle max-w-3xl mx-auto">
              Advanced security systems to protect what matters most
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -6 }}
                className="card hover-lift"
              >
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-sm mb-4">
                  {index + 1}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-navy-950">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* IP Video Surveillance Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card mb-12 md:mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-navy-950">
              IP Video Surveillance Solutions
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm md:text-base">
              Our IP-based surveillance systems offer advanced features and
              capabilities:
            </p>
            <ul className="space-y-3">
              {features.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center text-slate-700 text-sm md:text-base"
                >
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-4 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Sectors Served */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="card"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-navy-950 text-center">
              Sectors We Serve
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="bg-slate-50 rounded-lg p-4 text-center border border-slate-200 hover:border-primary-300 hover:shadow-soft transition-all duration-300"
                >
                  <span className="text-slate-800 font-semibold text-xs md:text-sm">
                    {sector}
                  </span>
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
