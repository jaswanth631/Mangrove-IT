"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaVideo, FaLaptop, FaBuilding, FaBolt } from "react-icons/fa";
import { siteConfig } from "@/lib/data/site";

const pillars = [
  { icon: FaVideo, label: "AV Integration", href: "#av-integration", color: "text-cyan-400" },
  { icon: FaLaptop, label: "IT Integration", href: "#it-integration", color: "text-blue-400" },
  { icon: FaBuilding, label: "Interior & Acoustics", href: "#interior-acoustics", color: "text-indigo-400" },
  { icon: FaBolt, label: "Electrical Projects", href: "#electrical-projects", color: "text-amber-400" },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { turnkey } = siteConfig;

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] via-[#0a1220] to-[#050a14]" />

      <div className="container-wide relative z-10">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 md:mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow mb-6 inline-flex">About Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {turnkey.title}
            </h2>
            <p className="text-lg text-cyan-400/90 font-medium mb-6">
              {turnkey.subtitle}
            </p>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              {turnkey.intro}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={pillar.href}
                    className="glass-card p-4 flex items-center gap-3 group hover:border-cyan-500/30 transition-colors duration-300 cursor-pointer"
                  >
                    <div className={`p-2 rounded-sm bg-white/5 ${pillar.color}`}>
                      <pillar.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {pillar.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="glass-card p-8 md:p-10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Our Turnkey Capabilities
              </h3>
              <ul className="space-y-4">
                {turnkey.capabilities.map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.05 }}
                    className="flex gap-3"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="accent-line mx-auto mb-6" />
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
            {turnkey.closing}
          </p>
          <a href="#services" className="btn-secondary group inline-flex">
            Explore Our Services
            <motion.span className="inline-block" whileHover={{ x: 4 }}>
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
