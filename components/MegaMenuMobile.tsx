"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaVideo, FaLaptop, FaBuilding, FaBolt } from "react-icons/fa";
import { serviceCategories, type ServiceCategory } from "@/lib/data/services";

const categoryIcons: Record<ServiceCategory["icon"], React.ReactNode> = {
  av: <FaVideo className="w-4 h-4" />,
  it: <FaLaptop className="w-4 h-4" />,
  interior: <FaBuilding className="w-4 h-4" />,
  electrical: <FaBolt className="w-4 h-4" />,
};

interface MegaMenuMobileProps {
  onNavigate: () => void;
}

export default function MegaMenuMobile({ onNavigate }: MegaMenuMobileProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <div className="space-y-1">
      <p className="text-xs uppercase tracking-widest text-slate-500 px-2 py-2">Services</p>
      {serviceCategories.map((cat) => (
        <div key={cat.id}>
          <button
            onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
            className="flex items-center justify-between w-full px-3 py-3 text-slate-300 hover:text-white transition-colors"
          >
            <span className="flex items-center gap-3 text-sm font-medium">
              <span className="text-cyan-400">{categoryIcons[cat.icon]}</span>
              {cat.title}
            </span>
            <FaChevronDown
              className={`w-3 h-3 transition-transform duration-200 ${
                openCategory === cat.id ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {openCategory === cat.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pl-10 pr-3 pb-3 space-y-1">
                  {cat.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`#${cat.slug}`}
                      onClick={onNavigate}
                      className="block py-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                  {cat.acousticSolutions?.map((service) => (
                    <Link
                      key={service.slug}
                      href={`#${cat.slug}`}
                      onClick={onNavigate}
                      className="block py-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
