"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white" id="about">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">About Us</h2>
            <div className="accent-line my-6" />
            <p className="section-subtitle max-w-3xl mx-auto">
              Transforming technology into seamless experiences
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card hover-lift"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy-950">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                To deliver innovative technology solutions that empower
                businesses to thrive in the digital age. We combine cutting-edge
                expertise with personalized service to create lasting value for
                our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card hover-lift"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy-950">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                To be the leading technology partner recognized for excellence,
                innovation, and transformative solutions that shape the future
                of digital infrastructure and communication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card hover-lift"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy-950">
                Our Expertise
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                With years of experience in AV integration, IT solutions, and
                electrical projects, our team brings deep technical knowledge
                and practical insights to every project we undertake.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card hover-lift"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy-950">
                Our Approach
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                We believe in collaborative partnerships, transparent
                communication, and solutions that are built to last. Every
                project receives our full attention and commitment to
                excellence.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
