"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#nri-real-estate", label: "NRI Real Estate", flagship: true },
  { href: "#contact", label: "Contact" },
];

const SERVICE_DROPDOWN = [
  { label: "AV Integration", href: "#av-integration" },
  { label: "IT Integration", href: "#it-integration" },
  { label: "Security & Surveillance", href: "#security-surveillance" },
  { label: "Interior & Acoustics", href: "#interior-acoustics" },
  { label: "Electrical Projects", href: "#electrical-projects" },
  { label: "NRI Real Estate", href: "#nri-real-estate", flagship: true },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      setIsScrolled(scrollTop > 50);

      const sections = ["home", "about", "services", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute top-0 left-0 h-px bg-gradient-to-r from-cyan-500 to-indigo-500 transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center h-16 md:h-20">
            {/* Logo — left 50% */}
            <a
              href="#home"
              className="flex items-center lg:w-1/2 h-full shrink-0 group"
              aria-label="Mangrove Integrated Solutions — home"
            >
              <Image
                src="/mangrove_logo.png"
                alt="Mangrove Integrated Solutions Pvt. Ltd."
                width={1021}
                height={98}
                className="h-10 md:h-12 w-auto max-w-full object-contain object-left logo-glow"
                priority
              />
            </a>

            {/* Desktop nav — right 50% */}
            <div className="hidden lg:flex lg:w-1/2 items-center justify-end gap-4 xl:gap-5 flex-nowrap shrink-0">
              {NAV_LINKS.map((link) =>
                link.label === "Services" ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <a
                      href={link.href}
                      className={`nav-link inline-flex items-center gap-1 ${
                        activeLink === "services" ? "active" : ""
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3 h-3" />
                    </a>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 rounded-xl py-2 bg-bg-secondary/95 backdrop-blur-xl border border-white/8 shadow-soft-lg"
                        >
                          {SERVICE_DROPDOWN.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className={`flex items-center justify-between px-4 py-2.5 mx-1 my-0.5 rounded-lg text-sm transition-colors ${
                                item.flagship
                                  ? "text-gold-400 hover:text-gold-300 hover:bg-gold-500/5"
                                  : "text-ink-secondary hover:text-ink-primary hover:bg-white/5"
                              }`}
                            >
                              {item.label}
                              {item.flagship && (
                                <span className="text-[9px] font-mono uppercase tracking-widest text-gold-400/70">
                                  ★
                                </span>
                              )}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${
                      link.flagship ? "!text-gold-400 hover:!text-gold-300" : ""
                    } ${activeLink === link.href.slice(1) ? "active" : ""}`}
                  >
                    {link.label}
                  </a>
                )
              )}

              <a
                href="#contact"
                className="btn-primary !py-3 !px-6 text-base !font-bold whitespace-nowrap shrink-0"
              >
                Get In Touch
              </a>
            </div>

            {/* Mobile button */}
            <button
              className="lg:hidden ml-auto p-2 rounded-lg text-ink-primary hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-30 bg-bg-primary/95 backdrop-blur-2xl pt-24 px-6"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="flex flex-col gap-2"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className={`block py-4 px-4 text-2xl font-display font-semibold border-b border-white/5 transition-colors ${
                    link.flagship
                      ? "text-gold-400 hover:text-gold-300"
                      : "text-ink-primary hover:text-cyan-400"
                  }`}
                >
                  {link.label}
                  {link.flagship && (
                    <span className="ml-2 text-xs font-mono text-gold-400/70 align-middle">
                      ★
                    </span>
                  )}
                </motion.a>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="pt-2"
              >
                <p className="text-xs uppercase tracking-widest font-mono text-cyan-400 mb-3 px-4">
                  Services
                </p>
                {SERVICE_DROPDOWN.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2.5 px-4 text-sm text-ink-secondary hover:text-ink-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
