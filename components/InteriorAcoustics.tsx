import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InteriorAcoustics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Office Interiors",
      description:
        "Professional office interior design and implementation services.",
    },
    {
      title: "Home Interiors",
      description:
        "Customized home interior solutions to create your perfect living space.",
    },
    {
      title: "Furniture Design",
      description: "Custom furniture design and manufacturing services.",
    },
    {
      title: "Flooring Solutions",
      description: "High-quality flooring solutions for all types of spaces.",
    },
    {
      title: "Lighting Design",
      description: "Professional lighting design and implementation services.",
    },
    {
      title: "Fabric Installations",
      description:
        "Custom fabric installations for walls, ceilings, and windows.",
    },
  ];

  const acousticTypes = [
    {
      title: "Hard Rooms",
      description:
        "Rooms with little sound absorption, where surfaces reflect most of the noise.",
    },
    {
      title: "Rooms with Absorbent Ceilings",
      description:
        "Common type of room with sound-absorbing ceiling, requiring specific acoustic treatment.",
    },
    {
      title: "Open-plan Rooms",
      description:
        "Extended forms such as open-plan areas and corridors requiring specialized acoustic solutions.",
    },
  ];

  const approachPoints = [
    "Wall paneling and acoustic treatments",
    "False ceiling solutions",
    "POP and acoustic foam installations",
    "Soundproofing solutions",
    "Acoustical insulation",
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
            <h2 className="section-title">Interior & Acoustics Services</h2>
            <div className="accent-line my-6" />
            <p className="section-subtitle max-w-3xl mx-auto">
              Designing spaces that look great and sound even better
            </p>
          </div>

          {/* Interior Services */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-navy-950 text-center">
              Interior Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
          </div>

          {/* Acoustic Solutions */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-navy-950 text-center">
              Acoustic Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {acousticTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="card hover-lift"
                >
                  <h4 className="text-xl md:text-2xl font-bold mb-3 text-navy-950">
                    {type.title}
                  </h4>

                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {type.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Approach Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="card"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-navy-950">
              Our Approach
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
              MISPL works with project needs and delivers total solutions in the
              areas of Acoustic treatment. We serve the commercial,
              institutional, industrial and residential buildings market. Our
              services include:
            </p>
            <ul className="space-y-3">
              {approachPoints.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.1 + i * 0.1 }}
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

export default InteriorAcoustics;
