"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

interface FullPageOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrls: string[];
  title: string;
  children: React.ReactNode;
}

const FullPageOverlay: React.FC<FullPageOverlayProps> = ({
  isOpen,
  onClose,
  imageUrls,
  title,
  children,
}) => {
  const [current, setCurrent] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;
    if (userInteractedRef.current) return;
    if (imageUrls.length <= 1) return;

    autoScrollRef.current = setInterval(() => {
      setCurrent((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isOpen, imageUrls.length]);

  // Reset when modal closes and handle body scroll
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Prevent body scroll when modal is open
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore body scroll when modal closes
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }

      setCurrent(0);
      userInteractedRef.current = false;
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const prevImage = () => {
    userInteractedRef.current = true;
    setCurrent((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };

  const nextImage = () => {
    userInteractedRef.current = true;
    setCurrent((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  };

  // Use portal to render outside of parent component's stacking context
  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            isolation: "isolate",
          }}
        >
          <div className="min-h-full flex items-center justify-center p-2 md:p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-6xl my-4 md:my-8 flex flex-col md:flex-row bg-white rounded-xl md:rounded-2xl shadow-professional-lg overflow-hidden"
              style={{ maxHeight: "calc(100vh - 4rem)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                className="absolute top-3 right-3 md:top-4 md:right-4 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white shadow-professional hover:shadow-professional-lg text-slate-700 flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>

              {/* Image Section */}
              <div className="md:w-1/2 w-full h-48 sm:h-56 md:h-auto relative bg-slate-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={imageUrls[current]}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {imageUrls.length > 1 && (
                  <>
                    {/* Navigation Buttons */}
                    <motion.button
                      onClick={prevImage}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 backdrop-blur-sm text-navy-950 shadow-professional hover:shadow-professional-lg transition-all"
                      whileHover={{ scale: 1.1, x: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaChevronLeft className="mx-auto text-xs md:text-sm" />
                    </motion.button>
                    <motion.button
                      onClick={nextImage}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 backdrop-blur-sm text-navy-950 shadow-professional hover:shadow-professional-lg transition-all"
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaChevronRight className="mx-auto text-xs md:text-sm" />
                    </motion.button>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
                      {imageUrls.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            userInteractedRef.current = true;
                            setCurrent(index);
                          }}
                          className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                            index === current
                              ? "bg-primary-600 w-6 md:w-8"
                              : "bg-white/60 w-1.5 md:w-2 hover:bg-white/80"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 w-full flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 overflow-y-auto max-h-[50vh] md:max-h-none">
                <motion.h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-navy-950 pr-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {title}
                </motion.h2>

                <motion.div
                  className="text-sm md:text-base text-slate-700 mb-4 md:mb-6 leading-relaxed flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {children}
                </motion.div>

                <motion.a
                  href="#contact"
                  className="btn-primary inline-block text-center text-sm md:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    setTimeout(() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get a Quote
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default FullPageOverlay;
