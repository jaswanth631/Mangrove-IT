"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Home,
  Globe2,
  ShieldCheck,
  Receipt,
  UserCheck,
  Video,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Search,
  FileCheck2,
  HardHat,
  Sofa,
  TrendingUp,
  Wrench,
  Plane,
  Camera,
  Map,
  KeyRound,
} from "lucide-react";
import ServiceShowcase, { SubService } from "./ServiceShowcase";

const NRI_SUB_SERVICES: SubService[] = [
  {
    title: "Property Search & Identification",
    description:
      "Tell us your budget, city, and preferences — we shortlist plots, apartments, and villas that match. You receive detailed reports with neighbourhood analysis, comparables, and a curated longlist within days, not months.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=900&fit=crop",
  },
  {
    title: "Site Visits & Video Walkthroughs",
    description:
      "Can't fly to India? We become your eyes on the ground. Our team visits every shortlisted property, records detailed video walkthroughs, captures drone footage, and joins live video calls so you see exactly what we see.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&h=900&fit=crop",
  },
  {
    title: "Legal Verification & Documentation",
    description:
      "Title searches, encumbrance certificates, RERA compliance, sale-deed preparation, registration, and power-of-attorney handling. Our legal panel reviews every document so you sign with full confidence.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&h=900&fit=crop",
  },
  {
    title: "Land & Plot Development",
    description:
      "Boundary marking, soil testing, land levelling, compound walls, and approvals from the local development authority. We turn your plot from raw land into a build-ready site.",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1400&h=900&fit=crop",
  },
  {
    title: "Construction Management & Supervision",
    description:
      "Architect coordination, material procurement, vendor management, daily supervision, and quality inspections. Weekly photo and video reports go straight to your phone — no surprises, no delays unaccounted for.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&h=900&fit=crop",
  },
  {
    title: "Interior Design & Turnkey Finishing",
    description:
      "Modular kitchens, wardrobes, lighting, flooring, painting, and furnishings — designed to your taste and finished to move-in standard. Walk in with a suitcase; we handle the rest.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=900&fit=crop",
  },
  {
    title: "Investment Advisory & ROI Analysis",
    description:
      "Market analysis, rental yield projections, capital appreciation forecasts, and side-by-side comparisons across cities and project types. Make data-backed decisions about residential, commercial, and plot investments.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&h=900&fit=crop",
  },
  {
    title: "Property Management & Rentals",
    description:
      "Tenant screening, rent collection, maintenance coordination, tax-filing assistance, and quarterly condition reports. Your property earns and stays cared for while you live abroad.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&h=900&fit=crop",
  },
  {
    title: "NRI Site Tour & Sightseeing Packages",
    description:
      "Visiting India? We arrange curated property tours covering shortlisted plots, ongoing sites, and finished projects — with transport, meals, and a senior project manager guiding you through every visit.",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1400&h=900&fit=crop",
  },
  {
    title: "Remote Monitoring & Drone Updates",
    description:
      "Bi-weekly drone surveys, time-lapse construction videos, live site video calls, and a dedicated WhatsApp group with your project manager. Stay connected to your investment 24/7 from any timezone.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1400&h=900&fit=crop",
  },
];

const TRUST_STATS = [
  { icon: Home, value: "100+", label: "NRI Properties Managed" },
  { icon: Globe2, value: "12+", label: "Countries Served" },
  { icon: ShieldCheck, value: "100%", label: "RERA Compliant" },
  { icon: Receipt, value: "Transparent", label: "Billing & Reporting" },
];

const PROCESS = [
  {
    icon: PhoneCall,
    n: 1,
    title: "Consultation",
    desc: "Share your requirements, budget, and preferred city via video call.",
  },
  {
    icon: Search,
    n: 2,
    title: "Property Search",
    desc: "We shortlist options and send detailed reports with drone videos.",
  },
  {
    icon: FileCheck2,
    n: 3,
    title: "Legal Check",
    desc: "Title verification, RERA compliance, and full documentation clearance.",
  },
  {
    icon: HardHat,
    n: 4,
    title: "Build / Buy",
    desc: "Registration, agreements, and construction supervision — all handled.",
  },
  {
    icon: Sofa,
    n: 5,
    title: "Interiors",
    desc: "Turnkey interior design and finishing tailored to your taste.",
  },
  {
    icon: KeyRound,
    n: 6,
    title: "Handover",
    desc: "Keys in your hand — plus ongoing property management if you need it.",
  },
];

const TRUST_POINTS = [
  {
    icon: UserCheck,
    text: "Dedicated NRI Relationship Manager assigned to every client",
  },
  {
    icon: Video,
    text: "Bi-weekly video updates from the site — see your property progress live",
  },
  {
    icon: Receipt,
    text: "100% transparent billing — every rupee accounted for",
  },
  {
    icon: Globe2,
    text: "10+ years serving the NRI community across 12+ countries",
  },
];

export default function NRIRealEstate() {
  return (
    <div
      id="nri-real-estate"
      className="relative"
      style={{
        background:
          "linear-gradient(180deg, #0a0e1a 0%, #14110a 6%, #14110a 94%, #0a0e1a 100%)",
      }}
    >
      {/* === MAIN ACCORDION SHOWCASE (matches AV Integration layout) === */}
      <ServiceShowcase
        id="nri-real-estate-showcase"
        eyebrow="🏠 NRI Real Estate Services"
        title="Real estate services that"
        highlight="give NRIs complete peace of mind."
        subtitle="From plot hunting to key handover — we are your trusted local eyes, hands, and partner in India. Invest, build, and manage property back home without stepping foot on-site."
        Icon={Home}
        heroImage=""
        subServices={NRI_SUB_SERVICES}
        accent="gold"
      />

      {/* === TRUST BANNER STRIP === */}
      <TrustBanner />

      {/* === HOW IT WORKS TIMELINE === */}
      <ProcessTimeline />

      {/* === WHY NRIs TRUST US === */}
      <TrustCard />

      {/* === CTA BANNER === */}
      <CTABanner />
    </div>
  );
}

/* ─────────── sub-blocks ─────────── */

function TrustBanner() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="relative pb-16 md:pb-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {TRUST_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="flex items-center gap-3 md:gap-4 px-4 md:px-5 py-4 rounded-xl"
              style={{
                background: "rgba(245, 197, 66, 0.04)",
                border: "1px solid rgba(245, 197, 66, 0.18)",
              }}
            >
              <s.icon className="w-5 h-5 md:w-6 md:h-6 text-gold-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-base md:text-lg font-display font-semibold text-gold-100 leading-tight">
                  {s.value}
                </p>
                <p className="text-[11px] md:text-xs text-gold-300/80 leading-tight mt-0.5">
                  {s.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="nri-process"
      ref={ref}
      className="relative py-16 md:py-24"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="gold-eyebrow mb-4">
            <Map className="w-3.5 h-3.5" />
            How It Works
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mt-4 text-gold-50">
            Six steps. <span className="gold-text">Total clarity.</span>
          </h3>
          <p className="mt-4 text-base md:text-lg text-gold-200/70">
            From your first video call to the day you walk in. You stay
            informed, we stay accountable.
          </p>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Animated progress line */}
            <div
              className="absolute left-0 right-0 top-7 h-px"
              style={{ background: "rgba(245, 197, 66, 0.15)" }}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.6, delay: 0.3, ease: "easeOut" }}
              className="absolute left-0 right-0 top-7 h-px origin-left"
              style={{
                background:
                  "linear-gradient(90deg, rgba(245, 197, 66, 0.7), rgba(245, 197, 66, 0.3))",
              }}
            />

            <div className="relative grid grid-cols-6 gap-4">
              {PROCESS.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="text-center"
                >
                  <div
                    className="relative mx-auto w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-sm mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #f5c542 0%, #d4a853 100%)",
                      color: "#1a1208",
                      boxShadow: "0 0 30px rgba(245, 197, 66, 0.5)",
                    }}
                  >
                    {String(p.n).padStart(2, "0")}
                  </div>
                  <p className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-2 inline-flex items-center gap-1.5">
                    <p.icon className="w-3.5 h-3.5" />
                  </p>
                  <h4 className="text-base font-display font-semibold text-gold-100 mb-2 leading-tight">
                    {p.title}
                  </h4>
                  <p className="text-xs text-gold-200/60 leading-relaxed px-2">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden max-w-xl mx-auto">
          <div className="relative">
            <div
              className="absolute left-7 top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(180deg, rgba(245, 197, 66, 0.5), rgba(245, 197, 66, 0.1))",
              }}
            />
            <div className="space-y-6">
              {PROCESS.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="relative flex gap-5"
                >
                  <div
                    className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, #f5c542 0%, #d4a853 100%)",
                      color: "#1a1208",
                      boxShadow: "0 0 24px rgba(245, 197, 66, 0.4)",
                    }}
                  >
                    {String(p.n).padStart(2, "0")}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-lg font-display font-semibold text-gold-100 mb-1">
                      {p.title}
                    </h4>
                    <p className="text-sm text-gold-200/70 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustCard() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <section ref={ref} className="relative py-16 md:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="gold-card max-w-5xl mx-auto p-8 md:p-12"
          style={{ boxShadow: "0 0 60px rgba(245, 197, 66, 0.15)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            <div>
              <span className="gold-eyebrow mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                Trust
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mt-4 leading-tight text-gold-50">
                Why NRIs <span className="gold-text">trust us.</span>
              </h3>
              <p className="mt-4 text-sm md:text-base text-gold-200/70">
                We treat your investment like our own — because for many of our
                clients, it&apos;s their family&apos;s home.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TRUST_POINTS.map((t) => (
                <div
                  key={t.text}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{
                    background: "rgba(245, 197, 66, 0.03)",
                    border: "1px solid rgba(245, 197, 66, 0.1)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(245, 197, 66, 0.1)",
                      border: "1px solid rgba(245, 197, 66, 0.2)",
                      color: "#f5c542",
                    }}
                  >
                    <t.icon className="w-4 h-4" />
                  </div>
                  <p className="text-sm leading-relaxed pt-1 text-gold-100/85">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTABanner() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <section ref={ref} className="relative pb-24 md:pb-32 pt-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, #f5c542 0%, #d4a853 50%, #b88a32 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #1a1208 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <h3
            className="relative text-3xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto leading-tight"
            style={{ color: "#1a1208" }}
          >
            Living abroad? Dreaming of home?
            <br />
            <span style={{ color: "#3d2c0a" }}>
              Let&apos;s build it together.
            </span>
          </h3>
          <p
            className="relative text-base md:text-lg max-w-xl mx-auto mb-8"
            style={{ color: "#3d2c0a" }}
          >
            From plot identification to key handover — one partner, zero stress.
          </p>
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-semibold text-sm md:text-base transition-all hover:-translate-y-0.5"
              style={{
                background: "#1a1208",
                color: "#f5c542",
                boxShadow: "0 8px 24px rgba(26, 18, 8, 0.4)",
              }}
            >
              <Video className="w-4 h-4" />
              Schedule Free Video Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-semibold text-sm md:text-base transition-all hover:-translate-y-0.5"
              style={{
                background: "transparent",
                color: "#1a1208",
                border: "1.5px solid #1a1208",
              }}
            >
              Download NRI Property Guide
            </a>
          </div>
          <p
            className="relative mt-6 text-xs md:text-sm font-medium flex flex-wrap items-center justify-center gap-2"
            style={{ color: "#3d2c0a" }}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            We speak English, Hindi, Kannada, Telugu &amp; Tamil — wherever you
            are, we connect.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
