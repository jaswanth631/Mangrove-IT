"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white pt-16 md:pt-20 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-white">Mangrove</span>
              <span className="text-accent-400">IT</span>
            </h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Professional IT solutions provider delivering excellence in AV
              integration, IT services, and electrical projects.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-primary-600 hover:to-accent-500 flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="text-base" />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg md:text-xl font-bold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-accent-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg md:text-xl font-bold mb-4 text-white">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                "AV Integration",
                "IT Integration",
                "Security & Surveillance",
                "Electrical Projects",
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-white/70 text-sm md:text-base">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg md:text-xl font-bold mb-4 text-white">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-accent-400 mt-1 flex-shrink-0 text-sm md:text-base" />
                <span className="text-white/70 text-sm md:text-base">
                  info@mangroveit.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-accent-400 mt-1 flex-shrink-0 text-sm md:text-base" />
                <span className="text-white/70 text-sm md:text-base">
                  +91 123 456 7890
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-400 mt-1 flex-shrink-0 text-sm md:text-base" />
                <span className="text-white/70 text-sm md:text-base">
                  Bangalore, Karnataka, India
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-white/60 text-xs md:text-sm"
        >
          <p>&copy; {currentYear} MangroveIT. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
