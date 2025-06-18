import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Mangrove Integrated Solutions
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Welcome to MISPL</h3>
              <p className="text-text/80 leading-relaxed">
                MISPL is a System Integration company with over a decade of experience in the industry. We specialize in turn-key projects and provide a single point of contact for all your integration needs. Our expertise spans across professional Audio Visual and communication, Interior & Acoustics, Lighting, Video & LED Wall, Digital signage, CCTV, and more.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Mission</h3>
              <p className="text-text/80 leading-relaxed">
                Our mission is to provide Design, Supply, Install and service high quality Audio Visual and related systems to our customers with uncompromising and unique customer support.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Vision</h3>
              <p className="text-text/80 leading-relaxed">
                Our vision is to consistently exceed customer expectations by initiation, uniqueness and competitive in the conduct of our business.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Values</h3>
              <ul className="list-disc list-inside text-text/80 space-y-2">
                <li>We value our employees as individuals to given opportunity and guidance so that they can individually contribute and achieve the corporate vision.</li>
                <li>We value our customers that they are putting significant trust with us to meet their goals.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 