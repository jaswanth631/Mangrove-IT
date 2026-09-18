"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { siteConfig } from "@/lib/data/site";
import SectionHeader from "./ui/SectionHeader";

function parseMetricValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function MetricItem({
  label,
  value,
  index,
  inView,
}: {
  label: string;
  value: string;
  index: number;
  inView: boolean;
}) {
  const { num, suffix } = parseMetricValue(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || num === 0) return;
    let start = 0;
    const duration = 1800;
    const increment = num / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, num]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 tabular-nums">
        {num > 0 ? count : value}
        {num > 0 && <span className="text-cyan-400">{suffix}</span>}
      </p>
      <p className="text-sm text-slate-400 font-medium">{label}</p>
    </motion.div>
  );
}

export default function Metrics() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1220] via-[#0f1a2e] to-[#0a1220]" />
      <div className="absolute inset-0 border-y border-white/5" />

      <div className="container-wide relative z-10">
        <SectionHeader
          eyebrow="Our Impact"
          title="Why MISPL"
          subtitle="Placeholder metrics — update with actual figures when available."
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {siteConfig.metrics.map((metric, index) => (
            <MetricItem
              key={metric.key}
              label={metric.label}
              value={metric.value}
              index={index}
              inView={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
