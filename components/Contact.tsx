"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactForm from "./ContactForm";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl md:text-3xl" />,
      title: "Visit Us",
      details: "Bangalore, Karnataka, India",
    },
    {
      icon: <FaPhone className="text-2xl md:text-3xl" />,
      title: "Call Us",
      details: "+91 123 456 7890",
    },
    {
      icon: <FaEnvelope className="text-2xl md:text-3xl" />,
      title: "Email Us",
      details: "info@mangroveit.com",
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white" id="contact">
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
            <h2 className="section-title">Get In Touch</h2>
            <div className="accent-line my-6" />
            <p className="section-subtitle max-w-3xl mx-auto">
              Let's discuss how we can help transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="card">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-navy-950">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="text-primary-600 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-navy-950 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-sm md:text-base text-slate-600">
                          {info.details}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="card"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-navy-950">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm md:text-base text-slate-600">
                  <p className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
