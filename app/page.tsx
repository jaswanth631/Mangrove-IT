'use client';

import React, { useState } from 'react';
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

  return (
    <main className="min-h-screen bg-gradient-dark text-text">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/bg-landing.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Animated Gradient Overlays */}
        <motion.div
          className="absolute inset-0 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 5, 0],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-secondary/15 via-transparent to-transparent"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, -5, 0],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tl from-primary/15 via-transparent to-transparent"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 5, 0],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 6,
            }}
          />
        </motion.div>

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 z-20 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #6366f1 1px, transparent 1px),
                            linear-gradient(to bottom, #6366f1 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute z-20 w-1 h-1 rounded-full bg-accent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Welcome to{' '}
              <motion.span 
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                Mangrove Integrated Solutions
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Your trusted partner in AV Integration, IT Solutions, and System Integration. We bring over a decade of expertise to transform your digital vision into reality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex gap-4"
            >
              <motion.a
                href="#contact"
                className="btn-primary relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Contact Us</span>
              </motion.a>
              <motion.a
                href="#services"
                className="btn-secondary relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Our Services</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
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

      {/* Services Section */}
      <section className="bg-gradient-dark">
        <Services />
      </section>

      {/* Metrics Section */}
      <section className="bg-gradient-darker">
        <Metrics />
      </section>

      {/* Timeline Section */}
      <section className="bg-gradient-dark">
        <Timeline />
      </section>

      {/* Testimonials Section */}
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