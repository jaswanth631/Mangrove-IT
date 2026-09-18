"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  { label: "AV Integration", href: "#av-integration" },
  { label: "IT Integration", href: "#it-integration" },
  { label: "Security & Surveillance", href: "#security-surveillance" },
  { label: "Interior & Acoustics", href: "#interior-acoustics" },
  { label: "Electrical Projects", href: "#electrical-projects" },
];

const NRI_LINKS = [
  { label: "Overview", href: "#nri-real-estate" },
  { label: "Property Search", href: "#nri-real-estate" },
  { label: "Construction Management", href: "#nri-real-estate" },
  { label: "Legal & RERA", href: "#nri-real-estate" },
  { label: "Investment Advisory", href: "#nri-real-estate" },
  { label: "Property Management", href: "#nri-real-estate" },
];

const SOCIALS = [
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden border-t border-white/5 bg-bg-primary">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-4"
          >
            <div className="mb-5">
              <Image
                src="/mangrove_logo.png"
                alt="Mangrove Integrated Solutions Pvt. Ltd."
                width={1021}
                height={98}
                className="h-14 md:h-16 w-auto object-contain logo-glow-lg"
              />
            </div>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-md mb-6">
              Mangrove Integrated Solutions Pvt. Ltd. — full-spectrum technology
              integrator headquartered in Bangalore. Engineering the systems
              that power modern enterprises.
            </p>

            <div className="flex gap-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-ink-secondary hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-glow transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NRI Real Estate */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-5 inline-flex items-center gap-1">
              ★ NRI Real Estate
            </h4>
            <ul className="space-y-3">
              {NRI_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-secondary hover:text-gold-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-ink-secondary">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>
                  Plot No. 23, SCR Layout, Anjanapura, JP Nagar 9th Phase,
                  Bengaluru, Karnataka 560108, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-ink-secondary">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="tel:+919343831500" className="hover:text-ink-primary">
                  +91 93438 31500
                </a>
              </li>
              <li className="flex items-center gap-3 text-ink-secondary">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a
                  href="mailto:suresh@mangroveit.com"
                  className="hover:text-ink-primary"
                >
                  suresh@mangroveit.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="h-px divider-glow mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-secondary/70 text-center md:text-left">
            © {year} Mangrove Integrated Solutions Pvt. Ltd. All rights
            reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-secondary hover:text-cyan-400 transition-colors"
          >
            Back to top
            <span className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500/40">
              <ArrowUp className="w-3 h-3" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
