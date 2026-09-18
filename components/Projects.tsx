"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects, projectFilters, type ProjectCategory } from "@/lib/data/projects";
import SectionHeader from "./ui/SectionHeader";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050a14]" />

      <div className="container-wide relative z-10">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A selection of our work across AV, IT, interiors, acoustics and electrical."
        />

        {/* Filters */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-wrap gap-2 mb-10 justify-center"
        >
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm border transition-all duration-300 ${
                activeFilter === filter
                  ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-400"
                  : "border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-colors duration-300"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#050a14]/0 group-hover:bg-[#050a14]/70 transition-all duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <span className="text-xs font-medium text-cyan-400 mb-1">{project.category}</span>
                    <h3 className="text-base font-semibold text-white mb-1">{project.name}</h3>
                    <p className="text-xs text-slate-400">{project.location}</p>
                    <p className="text-sm text-slate-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
