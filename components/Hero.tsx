"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import { siteConfig } from "@/lib/data/site";
import { images } from "@/lib/data/images";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Modern corporate workspace with integrated technology"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/80 via-[#050a14]/70 to-[#050a14]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050a14]/60 to-transparent" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow accent */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10 pt-24 pb-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            {[
              "Integrated Technology. Intelligent Spaces. Complete solutions.",
            ].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className={`inline-block ${i === 1 ? "gradient-text" : "text-white"}`}
                  initial={reducedMotion ? {} : { y: "110%" }}
                  animate={mounted ? { y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="btn-primary group">
              Start a Project
              <FaArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn-secondary">
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group"
        aria-label="Scroll down"
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-slate-500">
            Scroll
          </span>
          <div className="w-8 h-12 rounded-full border border-white/20 flex items-end justify-center pb-2 group-hover:border-cyan-500/40 transition-colors">
            <FaChevronDown className="w-3 h-3 text-cyan-400" />
          </div>
        </motion.div>
      </motion.a>
    </section>
  );
}
