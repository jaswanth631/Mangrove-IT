"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ServiceCategory, SubService } from "@/lib/data/services";
import { getServiceDetail, type ServiceDetail } from "@/lib/data/service-details";
import SectionHeader from "./ui/SectionHeader";

interface ServiceGroup {
  label?: string;
  items: SubService[];
}

interface ServiceDetailSectionProps {
  category: ServiceCategory;
  sectionTitle: string;
  groups?: ServiceGroup[];
}

type DetailTabId = "includes" | "applications" | "components" | "benefits" | "whyChoose";

const detailTabs: { id: DetailTabId; label: string; key: keyof ServiceDetail }[] = [
  { id: "includes", label: "Includes", key: "includes" },
  { id: "applications", label: "Applications", key: "applications" },
  { id: "components", label: "Components", key: "components" },
  { id: "benefits", label: "Benefits", key: "benefits" },
  { id: "whyChoose", label: "Why Us", key: "whyChoose" },
];

export default function ServiceDetailSection({
  category,
  sectionTitle,
  groups,
}: ServiceDetailSectionProps) {
  const resolvedGroups = useMemo(() => {
    const source = groups ?? [{ items: category.services }];
    let index = 0;
    return source.map((group) => ({
      label: group.label,
      items: group.items.map((service) => ({ service, index: index++ })),
    }));
  }, [groups, category.services]);

  const allServices = useMemo(
    () => resolvedGroups.flatMap((g) => g.items.map((i) => i.service)),
    [resolvedGroups]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<DetailTabId>("includes");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const active = allServices[activeIndex];
  const detail = getServiceDetail(active.slug);

  useEffect(() => {
    setActiveTab("includes");
  }, [active.slug]);

  const activeTabItems = detail ? detail[detailTabs.find((t) => t.id === activeTab)!.key] : [];

  return (
    <section id={category.slug} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1220] to-[#050a14]" />

      <div className="container-wide relative z-10">
        <SectionHeader
          eyebrow={category.title}
          title={sectionTitle}
          subtitle={category.description}
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8"
        >
          {/* Service list — compact, scrollable on long lists */}
          <div className="xl:col-span-4 xl:max-h-[520px] xl:overflow-y-auto xl:pr-2 scrollbar-thin">
            <div className="space-y-4">
              {resolvedGroups.map((group, gi) => (
                <div key={gi}>
                  {group.label && (
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1.5 px-1">
                      {group.label}
                    </p>
                  )}
                  <div className="space-y-0.5">
                    {group.items.map(({ service, index }) => {
                      const isActive = activeIndex === index;
                      return (
                        <button
                          key={service.slug}
                          onClick={() => setActiveIndex(index)}
                          className={`w-full text-left px-3 py-2.5 rounded-sm border transition-all duration-200 ${
                            isActive
                              ? "border-cyan-500/40 bg-cyan-500/10 text-white"
                              : "border-transparent text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className="text-[10px] font-mono text-cyan-400/60 mr-2">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm font-medium">{service.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detail panel — compact card */}
          <div className="xl:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-card overflow-hidden border border-white/10"
              >
                {/* Image + title overlay */}
                <div className="relative h-48 sm:h-56 md:h-64">
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 66vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-[#050a14]/80 border border-cyan-500/30 text-cyan-300 rounded-sm">
                      {category.title}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <p className="text-[10px] font-mono text-cyan-400/70 mb-1">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(allServices.length).padStart(2, "0")}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{active.title}</h3>
                  </div>
                </div>

                <div className="p-4 sm:p-5 space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {active.description}
                  </p>

                  {detail && (
                    <>
                      {/* Tab navigation */}
                      <div className="flex flex-wrap gap-1.5 border-b border-white/10 pb-3">
                        {detailTabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors ${
                              activeTab === tab.id
                                ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                                : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      {/* Single active tab content */}
                      <AnimatePresence mode="wait">
                        <motion.ul
                          key={activeTab}
                          initial={{ opacity: 0, x: 6 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -6 }}
                          transition={{ duration: 0.2 }}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 min-h-[120px]"
                        >
                          {activeTabItems.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-sm text-slate-400 leading-snug"
                            >
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400/70 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </motion.ul>
                      </AnimatePresence>
                    </>
                  )}

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Link href="#contact" className="btn-primary text-sm px-5 py-2.5">
                      Request This Service
                    </Link>
                    <span className="text-xs text-slate-500">
                      Switch tabs above to explore scope, applications &amp; benefits
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
