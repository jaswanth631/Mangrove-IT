'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaPaperPlane } from 'react-icons/fa';
import GradientButton from './GradientButton';

const services = [
  'AV Integration',
  'IT Integration',
  'Security & Surveillance',
  'Distribution',
  'Industrial Computing',
  'Interior & Acoustics',
  'Electrical Projects',
  'Web Development',
  'Mobile Development',
  
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
        <h3 className="text-2xl font-bold text-text mb-6 text-center">Get in Touch</h3>
        
        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPaperPlane className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-xl font-semibold text-text mb-2">Message Sent!</h4>
            <p className="text-text/80">We'll get back to you soon.</p>
            <GradientButton
              onClick={() => setSubmitSuccess(false)}
              className="mt-6"
            >
              Send Another Message
              <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform" />
            </GradientButton>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-text/50" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text placeholder:text-text/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-text/50" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text placeholder:text-text/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="h-5 w-5 text-text/50" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text placeholder:text-text/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBuilding className="h-5 w-5 text-text/50" />
                </div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text placeholder:text-text/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text placeholder:text-text/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <GradientButton
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </GradientButton>
            </motion.div>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm; 