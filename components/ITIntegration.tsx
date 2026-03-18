import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ITIntegration = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Web Development",
      description: `We craft dynamic and engaging web experiences that captivate your audience and drive business growth. From intuitive user interfaces (UI) and seamless user experiences (UX) to robust, scalable backends, our web development services ensure your online presence is powerful, responsive across all devices, and optimized for performance in today's fast-paced digital landscape.`,
    },
    {
      title: "Application Integration",
      description: `Break down data silos and streamline your business operations with our expert application integration services. We connect disparate software systems – from cloud-based platforms like Salesforce and SAP to your legacy on-premise applications – creating seamless workflows and enabling real-time data exchange for enhanced efficiency and informed decision-making.`,
    },
    {
      title: "Web Services",
      description: `Unlock the full potential of your digital ecosystem with our comprehensive web services. We build secure, reliable, and high-performance APIs that facilitate seamless communication between your applications, partners, and third-party platforms. Our web services are designed for interoperability, scalability, and robust data exchange, powering your distributed systems.`,
    },
    {
      title: "REST APIs",
      description: `Leverage the power of industry-standard REST APIs to connect your applications and innovate faster. Our REST API development and integration services focus on creating well-documented, secure, and efficient interfaces that enable seamless data flow, support mobile and web applications, and empower your business to build connected, future-proof digital solutions.`,
    },
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
            <h2 className="section-title">IT Integration Services</h2>
            <div className="accent-line my-6" />
            <p className="section-subtitle max-w-3xl mx-auto">
              Seamless technology integration for modern digital workspaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
        </motion.div>
      </div>
    </section>
  );
};

export default ITIntegration;
