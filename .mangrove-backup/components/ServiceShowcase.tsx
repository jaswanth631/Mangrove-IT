"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LucideIcon, ArrowRight } from "lucide-react";

export type SubService = {
  title: string;
  description: string;
  image: string;
};

export type AccentVariant = "cyan" | "gold";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  Icon: LucideIcon;
  heroImage: string;
  subServices: SubService[];
  alternate?: boolean;
  accent?: AccentVariant;
};

const ACCENT = {
  cyan: {
    eyebrow: "eyebrow",
    highlight: "gradient-text",
    activeBorder: "border-cyan-500/40",
    activeShadow: "shadow-glow",
    badgeActive: "bg-gradient-to-br from-cyan-500 to-indigo-500 text-white",
    arrow: "text-cyan-400",
    counter: "text-cyan-400",
    titleColor: "text-ink-primary",
    headlineColor: "text-ink-primary",
    bodyColor: "text-ink-secondary",
  },
  gold: {
    eyebrow: "gold-eyebrow",
    highlight: "gold-text",
    activeBorder: "border-gold-500/45",
    activeShadow: "shadow-glow-gold",
    badgeActive:
      "bg-gradient-to-br from-gold-400 to-gold-600 text-[#1a1208]",
    arrow: "text-gold-400",
    counter: "text-gold-400",
    titleColor: "text-gold-50",
    headlineColor: "text-gold-50",
    bodyColor: "text-gold-200/70",
  },
} as const;

export default function ServiceShowcase({
  id,
  eyebrow,
  title,
  highlight,
  subtitle,
  Icon,
  subServices,
  alternate = false,
  accent = "cyan",
}: Props) {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const current = subServices[active];
  const a = ACCENT[accent];

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-24 md:py-32 overflow-hidden ${
        alternate ? "section-surface-alt" : ""
      }`}
    >

      <div className="container mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <span className={`${a.eyebrow} mb-4 inline-flex`}>
            <Icon className="w-3.5 h-3.5" />
            {eyebrow}
          </span>
          <h2 className={`section-title mt-5 ${a.headlineColor}`}>
            {title}{" "}
            {highlight && <span className={a.highlight}>{highlight}</span>}
          </h2>
          <p className={`text-lg mt-4 leading-relaxed ${a.bodyColor}`}>
            {subtitle}
          </p>
        </motion.div>

        {/* Tabbed showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {subServices.map((s, i) => (
              <motion.button
                key={s.title}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className={`group text-left px-5 py-4 rounded-xl border transition-all ${
                  active === i
                    ? `bg-white/[0.04] ${a.activeBorder} ${a.activeShadow}`
                    : "bg-white/[0.02] border-white/5 hover:border-white/15"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-md font-mono text-xs font-semibold ${
                        active === i
                          ? a.badgeActive
                          : "bg-white/5 text-ink-secondary"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-sm md:text-base font-medium truncate ${
                        active === i
                          ? accent === "gold"
                            ? "text-gold-100"
                            : "text-ink-primary"
                          : accent === "gold"
                          ? "text-gold-200/60"
                          : "text-ink-secondary"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-all ${
                      active === i
                        ? `${a.arrow} translate-x-0`
                        : "text-ink-secondary/30 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Content panel */}
          <div className="lg:col-span-7 relative min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className={`overflow-hidden h-full flex flex-col rounded-2xl backdrop-blur-xl ${
                  accent === "gold"
                    ? "bg-[rgba(28,22,12,0.5)] border border-gold-500/15"
                    : "card !p-0"
                }`}
              >
                <div className="relative aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 ${
                      accent === "gold"
                        ? "bg-gradient-to-t from-[#14110a] via-[#14110a]/40 to-transparent"
                        : "bg-gradient-to-t from-bg-secondary via-bg-secondary/40 to-transparent"
                    }`}
                  />
                  <div className="absolute bottom-4 left-6">
                    <span
                      className={`text-xs font-mono uppercase tracking-widest ${a.counter}`}
                    >
                      {String(active + 1).padStart(2, "0")} /{" "}
                      {String(subServices.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <h3
                    className={`text-2xl md:text-3xl font-display font-semibold mb-4 ${a.titleColor}`}
                  >
                    {current.title}
                  </h3>
                  <p className={`leading-relaxed ${a.bodyColor}`}>
                    {current.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
