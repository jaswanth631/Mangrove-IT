'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    position: 'CEO, TechSolutions India',
    rating: 5,
    content: "Mangrove IT transformed our business operations with their innovative solutions. Their team's expertise and dedication are unmatched.",
    image: '/testimonials/rajesh.jpg'
  },
  {
    name: 'Priya Sharma',
    position: 'CTO, Digital Innovations',
    rating: 5,
    content: "Working with Mangrove IT has been a game-changer for our company. Their technical expertise and customer service are exceptional.",
    image: '/testimonials/priya.jpg'
  },
  {
    name: 'Amit Patel',
    position: 'Director, Global Tech Services',
    rating: 5,
    content: "The team at Mangrove IT delivered beyond our expectations. Their solutions are robust, scalable, and perfectly aligned with our business needs.",
    image: '/testimonials/amit.jpg'
  },
  {
    name: 'Neha Gupta',
    position: 'Head of IT, Enterprise Solutions',
    rating: 5,
    content: "Mangrove IT's professionalism and technical excellence have made them our trusted technology partner. Highly recommended!",
    image: '/testimonials/neha.jpg'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by businesses across India</p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="ml-6">
                  <h3 className="font-semibold text-xl">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
              <div className="flex mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-600 text-lg italic">"{testimonials[currentIndex].content}"</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <FaChevronLeft className="text-gray-600 text-xl" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <FaChevronRight className="text-gray-600 text-xl" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 