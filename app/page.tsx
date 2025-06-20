'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaChevronDown, FaArrowDown } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import BackToTop from '../components/BackToTop';
import Metrics from '../components/Metrics';
import Timeline from '../components/Timeline';
import AnimatedText from '../components/AnimatedText';
import DynamicBackground from '../components/DynamicBackground';
import GradientButton from '../components/GradientButton';
import ChatBot from '@/components/ChatBot';
import About from '../components/About';
import AVIntegration from '../components/AVIntegration';
import ITIntegration from '../components/ITIntegration';
import InteriorAcoustics from '../components/InteriorAcoustics';
import SecuritySurveillance from '../components/SecuritySurveillance';
import ElectricalProjects from '../components/ElectricalProjects';

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // Animated scroll indicator
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (inView && scrollRef.current) {
      scrollRef.current.classList.add('animate-bounce');
    }
  }, [inView]);

  return (
    <main className="min-h-screen bg-gradient-dark text-text">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Interactive Dynamic Background */}
        <DynamicBackground />
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transforming Your Digital Vision
            <span className="block text-accent mt-2">Into Reality</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional IT solutions tailored to your business needs. From audio-visual systems to industrial computing, we've got you covered.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="#contact"
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <FaArrowDown className="animate-bounce" />
            </motion.a>
            <motion.a
              href="#services"
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </motion.a>
          </motion.div>
          {/* Scroll Indicator */}
          <div ref={scrollRef} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
            <FaArrowDown className="text-accent text-3xl animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Services Section - already animated cards */}
      <section id="services">
        <Services />
      </section>

      {/* AV Integration Section */}
      <section id="av-integration">
        <AVIntegration />
      </section>

      {/* IT Integration Section */}
      <section id="it-integration">
        <ITIntegration />
      </section>

      {/* Interior & Acoustics Section */}
      <section id="interior-acoustics">
        <InteriorAcoustics />
      </section>

      {/* Security & Surveillance Section */}
      <section id="security-surveillance">
        <SecuritySurveillance />
      </section>

      {/* Electrical Projects Section */}
      <section id="electrical-projects">
        <ElectricalProjects />
      </section>

      {/* Metrics Section - animated counters */}
      <section className="bg-gradient-darker">
        <Metrics />
      </section>

      {/* Timeline Section */}
      <section className="bg-gradient-dark">
        <Timeline />
      </section>

      {/* Testimonials Section - carousel */}
      <section className="bg-gradient-darker">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-darkest text-text relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title text-text text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              <AnimatedText text="Let's Build Something Powerful Together" />
            </h2>
            <p className="section-subtitle text-text/80 text-center">
              Ready to transform your business? Contact us today to discuss your project.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <ChatBot />
    </main>
  );
} 