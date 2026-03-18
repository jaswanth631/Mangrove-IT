"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowDown } from "react-icons/fa";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import BackToTop from "../components/BackToTop";
import Metrics from "../components/Metrics";
import ChatBot from "@/components/ChatBot";
import About from "../components/About";
import Contact from "../components/Contact";
import AVIntegration from "../components/AVIntegration";
import ITIntegration from "../components/ITIntegration";
import InteriorAcoustics from "../components/InteriorAcoustics";
import SecuritySurveillance from "../components/SecuritySurveillance";
import ElectricalProjects from "../components/ElectricalProjects";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Sigma AVIT Style */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #0284c7 100%)",
        }}
      >
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm md:text-base font-medium border border-white/20">
                Professional IT Solutions Provider
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transforming Your Digital Vision
              <span className="block mt-2 text-accent-400">Into Reality</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              From audio-visual integration to industrial computing solutions,
              we deliver excellence in every project
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a href="#contact" className="btn-primary inline-block">
                Get Started
              </a>
              <a href="#services" className="btn-secondary inline-block">
                Our Services
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            ref={scrollRef}
            className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <FaArrowDown className="text-white text-lg md:text-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Services Section */}
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

      {/* Metrics Section */}
      <section>
        <Metrics />
      </section>

      {/* Testimonials Section */}
      <section>
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
      <BackToTop />
      <ChatBot />
    </main>
  );
}
