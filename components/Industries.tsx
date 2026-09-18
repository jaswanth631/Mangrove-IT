"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { industries } from "@/lib/data/industries";
import SectionHeader from "./ui/SectionHeader";

export default function Industries() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="industries" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1220] to-[#050a14]" />

      <div className="container-wide relative z-10">
        <SectionHeader
          eyebrow="Industries"
          title="Industries We Serve"
          subtitle="Delivering integrated technology solutions across diverse sectors."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-[3/4] rounded-sm overflow-hidden border border-white/10 cursor-default hover:border-cyan-500/30 transition-colors duration-300"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/50 to-transparent transition-opacity duration-300 group-hover:via-[#050a14]/70" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-semibold text-white mb-1">{industry.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
