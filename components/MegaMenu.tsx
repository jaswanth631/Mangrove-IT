"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaVideo, FaLaptop, FaBuilding, FaBolt, FaArrowRight } from "react-icons/fa";
import { serviceCategories, type ServiceCategory } from "@/lib/data/services";

const categoryIcons: Record<ServiceCategory["icon"], React.ReactNode> = {
  av: <FaVideo className="w-5 h-5" />,
  it: <FaLaptop className="w-5 h-5" />,
  interior: <FaBuilding className="w-5 h-5" />,
  electrical: <FaBolt className="w-5 h-5" />,
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const active = serviceCategories.find((c) => c.id === activeCategory) ?? serviceCategories[0];
  const previewService =
    active.services.find((s) => s.slug === hoveredService) ?? active.services[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] md:top-[88px] bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-0 right-0 top-[72px] md:top-[88px] z-50 border-b border-white/10 bg-[#0a1220]/95 backdrop-blur-xl"
            onMouseLeave={onClose}
          >
            <div className="container-wide py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Category tabs */}
                <div className="col-span-3 space-y-1 border-r border-white/10 pr-6">
                  {serviceCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onMouseEnter={() => {
                        setActiveCategory(cat.id);
                        setHoveredService(null);
                      }}
                      className={`relative w-full flex items-center gap-3 px-4 py-3 text-left rounded-sm transition-all duration-300 group ${
                        activeCategory === cat.id
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span
                        className={`transition-colors ${
                          activeCategory === cat.id ? "text-cyan-400" : "text-slate-500 group-hover:text-cyan-400"
                        }`}
                      >
                        {categoryIcons[cat.icon]}
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{cat.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                          {cat.description.slice(0, 50)}…
                        </p>
                      </div>
                      {activeCategory === cat.id && (
                        <motion.div
                          layoutId="mega-underline"
                          className="absolute left-0 w-0.5 h-8 bg-cyan-400 rounded-full"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Services list */}
                <div className="col-span-5">
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">
                    {active.title}
                  </p>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {active.description}
                  </p>
                  <div className="grid grid-cols-1 gap-0.5 max-h-[320px] overflow-y-auto pr-2">
                    {active.services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`#${active.slug}`}
                        onMouseEnter={() => setHoveredService(service.slug)}
                        onClick={onClose}
                        className={`group flex items-center justify-between px-3 py-2.5 rounded-sm transition-all duration-200 ${
                          hoveredService === service.slug
                            ? "bg-cyan-500/10 text-cyan-300"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span className="text-sm font-medium">{service.title}</span>
                        <FaArrowRight
                          className={`w-3 h-3 transition-all duration-200 ${
                            hoveredService === service.slug
                              ? "opacity-100 translate-x-0 text-cyan-400"
                              : "opacity-0 -translate-x-2"
                          }`}
                        />
                      </Link>
                    ))}
                    {active.acousticSolutions && (
                      <>
                        <p className="text-xs uppercase tracking-widest text-slate-500 mt-4 mb-2 px-3">
                          Acoustic Solutions
                        </p>
                        {active.acousticSolutions.map((service) => (
                          <Link
                            key={service.slug}
                            href={`#${active.slug}`}
                            onMouseEnter={() => setHoveredService(service.slug)}
                            onClick={onClose}
                            className={`group flex items-center justify-between px-3 py-2.5 rounded-sm transition-all duration-200 ${
                              hoveredService === service.slug
                                ? "bg-cyan-500/10 text-cyan-300"
                                : "text-slate-300 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            <span className="text-sm font-medium">{service.title}</span>
                            <FaArrowRight
                              className={`w-3 h-3 transition-all duration-200 ${
                                hoveredService === service.slug
                                  ? "opacity-100 translate-x-0 text-cyan-400"
                                  : "opacity-0 -translate-x-2"
                              }`}
                            />
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                {/* Preview panel */}
                <div className="col-span-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={previewService.slug}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.25 }}
                      className="relative h-full min-h-[280px] rounded-sm overflow-hidden border border-white/10"
                    >
                      <Image
                        src={previewService.image}
                        alt={previewService.title}
                        fill
                        className="object-cover"
                        sizes="400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-lg font-semibold text-white mb-2">
                          {previewService.title}
                        </p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {previewService.shortDescription}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
