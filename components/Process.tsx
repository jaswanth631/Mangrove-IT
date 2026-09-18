"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { siteConfig } from "@/lib/data/site";
import SectionHeader from "./ui/SectionHeader";

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1220] to-[#050a14]" />

      <div className="container-wide relative z-10">
        <SectionHeader
          eyebrow="How We Work"
          title="Our Process"
          subtitle="A structured approach from consultation to handover."
        />

        {/* Desktop horizontal timeline */}
        <motion.div
          ref={ref}
          className="hidden lg:block relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          <div className="grid grid-cols-7 gap-4">
            {siteConfig.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 rounded-full border border-cyan-500/30 bg-cyan-500/5" />
                  <span className="text-sm font-mono font-bold text-cyan-400">{step.step}</span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-0">
          {siteConfig.process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center shrink-0">
                  <span className="text-xs font-mono font-bold text-cyan-400">{step.step}</span>
                </div>
                {index < siteConfig.process.length - 1 && (
                  <div className="w-px flex-1 bg-cyan-500/20 my-2 min-h-[24px]" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
