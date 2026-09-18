"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Landmark,
  Building2,
  HeartPulse,
  Home,
  Factory,
  ShoppingBag,
  TramFront,
  ServerCog,
  Globe2,
} from "lucide-react";

const SECTORS = [
  { icon: GraduationCap, name: "Education" },
  { icon: Landmark, name: "Banking & Finance" },
  { icon: Building2, name: "Government" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Home, name: "Real Estate" },
  { icon: Factory, name: "Industrial" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: TramFront, name: "Transportation" },
  { icon: ServerCog, name: "Critical Infrastructure" },
  { icon: Globe2, name: "NRI Property Investment", flagship: true },
];

export default function Sectors() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Duplicate list for seamless marquee loop
  const marqueeItems = [...SECTORS, ...SECTORS];

  return (
    <section
      id="sectors"
      ref={ref}
      className="relative py-24 md:py-28 overflow-hidden section-surface-alt"
    >

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="eyebrow mb-4">Sectors We Serve</span>
          <h2 className="section-title mt-4">
            Trusted across the{" "}
            <span className="gradient-text">industries that matter.</span>
          </h2>
          <p className="section-subtitle mt-4">
            From banking floors to municipal command centres, we ship solutions
            into the environments that can't afford downtime.
          </p>
        </motion.div>

        {/* Grid on desktop */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-3">
          {SECTORS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className={`group flex flex-col items-center justify-center gap-3 p-5 rounded-xl transition-all ${
                s.flagship
                  ? "bg-gold-500/[0.04] border border-gold-500/25 hover:border-gold-400/60 hover:bg-gold-500/[0.07]"
                  : "bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 hover:bg-white/[0.04]"
              }`}
            >
              <s.icon
                className={`w-7 h-7 group-hover:scale-110 transition-transform ${
                  s.flagship ? "text-gold-400" : "text-cyan-400"
                }`}
              />
              <span
                className={`text-xs font-medium text-center transition-colors ${
                  s.flagship
                    ? "text-gold-300 group-hover:text-gold-100"
                    : "text-ink-secondary group-hover:text-ink-primary"
                }`}
              >
                {s.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Marquee on mobile */}
        <div className="md:hidden relative overflow-hidden mask-fade-x">
          <div className="marquee-track flex gap-3 w-max">
            {marqueeItems.map((s, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl whitespace-nowrap ${
                  s.flagship
                    ? "bg-gold-500/[0.05] border border-gold-500/25"
                    : "bg-white/[0.02] border border-white/5"
                }`}
              >
                <s.icon
                  className={`w-5 h-5 ${
                    s.flagship ? "text-gold-400" : "text-cyan-400"
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    s.flagship ? "text-gold-200" : "text-ink-primary"
                  }`}
                >
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-fade-x {
          mask-image: linear-gradient(
            90deg,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  );
}
