"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";
import { serviceCategories } from "@/lib/data/services";
import SectionHeader from "./ui/SectionHeader";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050a14]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <SectionHeader
          eyebrow="What We Do"
          title="Integrated Solutions"
          subtitle="Four core disciplines. One seamless delivery."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-2 h-auto lg:h-[520px]"
        >
          {serviceCategories.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative overflow-hidden rounded-sm border cursor-pointer transition-all duration-500 ease-out ${
                  isActive
                    ? "lg:flex-[3] border-cyan-500/30 shadow-glow"
                    : "lg:flex-[0.6] border-white/10 hover:border-white/20"
                }`}
                style={{ minHeight: isActive ? "400px" : "120px" }}
              >
                {/* Background */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={service.id + "-bg"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes={isActive ? "60vw" : "15vw"}
                    />
                    <div
                      className={`absolute inset-0 transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-t from-[#050a14] via-[#050a14]/70 to-[#050a14]/30"
                          : "bg-[#050a14]/80"
                      }`}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                  <motion.span
                    animate={{ fontSize: isActive ? "4rem" : "2rem", opacity: isActive ? 0.15 : 0.08 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-4 right-4 font-bold text-cyan-400 leading-none select-none"
                  >
                    {service.number}
                  </motion.span>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
                      {service.number}
                    </p>
                    <h3
                      className={`font-bold text-white transition-all duration-400 ${
                        isActive ? "text-2xl md:text-3xl mb-3" : "text-lg md:text-xl"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5 max-w-md">
                            {service.panelDescription}
                          </p>
                          <Link
                            href={`#${service.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
                          >
                            View Services
                            <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Cyan glow on active */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
