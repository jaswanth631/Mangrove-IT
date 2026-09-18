"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

const HEADLINE_LINES = [
  "Engineering Intelligent Spaces.",
  "Powering Digital Futures.",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero"
    >
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-bg-primary pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <span className="eyebrow">
              <Sparkles className="w-3.5 h-3.5" />
              Mangrove Integrated Solutions · Bangalore
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
            {HEADLINE_LINES.map((line, lineIdx) => (
              <span key={lineIdx} className="block overflow-hidden pb-2">
                <motion.span
                  className={`inline-block ${
                    lineIdx === 1 ? "gradient-text" : "text-ink-primary"
                  }`}
                  initial={{ y: "110%" }}
                  animate={mounted ? { y: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.35 + lineIdx * 0.15,
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
            transition={{ duration: 0.7, delay: 0.85 }}
            className="text-base sm:text-lg md:text-xl text-ink-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            AV Integration · IT Solutions · Security · Smart Infrastructure ·
            NRI Real Estate — trusted by 200+ enterprises and NRI families
            across 12 countries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a href="#services" className="btn-primary group">
              Explore Our Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-secondary">
              Get a Free Consultation
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.25 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono uppercase tracking-widest text-ink-secondary/70"
          >
            <span>15+ Years</span>
            <span className="w-1 h-1 rounded-full bg-cyan-500/50" />
            <span>500+ Projects</span>
            <span className="w-1 h-1 rounded-full bg-cyan-500/50" />
            <span>12+ Countries</span>
            <span className="w-1 h-1 rounded-full bg-cyan-500/50" />
            <span>RERA Compliant</span>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm group-hover:border-cyan-500/70 group-hover:shadow-glow transition-all"
        >
          <ChevronDown className="w-4 h-4 text-cyan-400" />
        </motion.div>
      </motion.a>
    </section>
  );
}
