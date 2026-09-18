"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "CEO, Tech Solutions Inc.",
    content:
      "MangroveIT delivered exceptional AV integration for our conference rooms. Their professionalism and technical expertise exceeded our expectations.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Priya Sharma",
    position: "Operations Manager, Global Corp",
    content:
      "The IT integration services provided by MangroveIT transformed our workspace. Highly recommended for any business looking to modernize.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Amit Patel",
    position: "Facility Manager, Smart Buildings",
    content:
      "Outstanding electrical project execution. The team was professional, timely, and delivered quality work that exceeded our requirements.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">Client Testimonials</h2>
            <div className="accent-line my-6" />
            <p className="section-subtitle max-w-3xl mx-auto">
              What our clients say about us
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="card text-center"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center">
                    <FaQuoteLeft className="text-white text-2xl" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-base md:text-lg lg:text-xl text-slate-700 mb-8 leading-relaxed italic px-4">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-4 border-4 border-primary-200">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-navy-950 mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm md:text-base text-slate-600">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary-600 w-8"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
