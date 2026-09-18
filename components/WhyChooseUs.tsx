"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaLayerGroup,
  FaCogs,
  FaRoute,
  FaShieldAlt,
  FaSlidersH,
  FaHeadset,
} from "react-icons/fa";
import { siteConfig } from "@/lib/data/site";
import SectionHeader from "./ui/SectionHeader";

const icons = [FaLayerGroup, FaCogs, FaRoute, FaShieldAlt, FaSlidersH, FaHeadset];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050a14]" />

      <div className="container-wide relative z-10">
        <SectionHeader
          eyebrow="Why MISPL"
          title="Why Choose Us"
          subtitle="The capabilities that set us apart in systems integration."
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {siteConfig.whyChooseUs.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08 }}
                className="glass-card p-6 hover:border-cyan-500/20 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-sm bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
