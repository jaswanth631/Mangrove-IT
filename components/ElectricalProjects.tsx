import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ElectricalProjects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "HT & LT Installations",
      description:
        "Complete high-tension and low-tension electrical installations for commercial and industrial projects.",
    },
    {
      title: "Industrial Wiring",
      description:
        "Professional industrial wiring solutions for manufacturing and production facilities.",
    },
    {
      title: "Electrical Design",
      description:
        "Comprehensive electrical system design and engineering services.",
    },
    {
      title: "Control Panels",
      description: "Custom electrical control panel design and manufacturing.",
    },
    {
      title: "Maintenance Contracts",
      description:
        "Annual maintenance contracts for electrical systems and equipment.",
    },
    {
      title: "Repair Services",
      description:
        "Professional repair and maintenance services for electrical systems.",
    },
  ];

  const commitmentPoints = [
    "Architects and Designers",
    "Consultants and Engineers",
    "Suppliers and Manufacturers",
    "End Users and Clients",
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
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
            <h2 className="section-title">Electrical Projects</h2>
            <div className="accent-line my-6" />
            <p className="section-subtitle max-w-3xl mx-auto">
              Reliable power solutions delivered with precision and expertise
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="card hover-lift"
              >
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-sm mb-4">
                  {index + 1}
                </div>

                <h4 className="text-xl md:text-2xl font-bold mb-3 text-navy-950">
                  {service.title}
                </h4>

                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Commitment Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="card"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-navy-950">
              Our Commitment
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
              We are proud of our quality workmanship and we are committed to
              providing the highest standards of quality, productivity, safe and
              on-time work. Our services have been developed through years of
              experience and continuous feedback from:
            </p>
            <ul className="space-y-3">
              {commitmentPoints.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="flex items-center text-slate-700 text-sm md:text-base"
                >
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-4 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ElectricalProjects;
