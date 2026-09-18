"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { siteConfig } from "@/lib/data/site";
import MegaMenu from "./MegaMenu";
import MegaMenuMobile from "./MegaMenuMobile";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["home", "about", "services", "projects", "industries", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const closeMobile = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#050a14]/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide !pl-1 sm:!pl-2 md:!pl-3">
          <div className="flex items-center justify-between gap-3 h-[76px] md:h-[92px]">
            <Link
              href="/"
              className="flex items-center shrink-0 min-w-fit -ml-0.5 sm:-ml-1"
              aria-label="Mangrove IT — Home"
            >
              <Image
                src="/mangrove_logo.png"
                alt="Mangrove Integrated Solutions Pvt. Ltd."
                width={1021}
                height={98}
                className="h-12 w-auto max-w-[min(72vw,360px)] sm:h-[3.25rem] sm:max-w-[min(70vw,420px)] md:h-14 md:max-w-[min(68vw,480px)] lg:h-[3.75rem] lg:max-w-[520px] xl:h-14 xl:max-w-[460px] 2xl:h-16 2xl:max-w-[560px] object-contain object-left brightness-125 contrast-110 saturate-125 drop-shadow-[0_0_10px_rgba(74,222,128,0.2)]"
                priority
                unoptimized
              />
            </Link>

            {/* Desktop nav — xl+ only so iPad/tablet uses mobile menu */}
            <nav className="hidden xl:flex items-center gap-6 shrink-0">
              {siteConfig.navLinks.map((link) =>
                link.hasMegaMenu ? (
                  <button
                    key={link.label}
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onClick={() => setMegaMenuOpen((o) => !o)}
                    className={`nav-link flex items-center gap-1 ${
                      megaMenuOpen || activeLink === "services" ? "active text-white" : ""
                    }`}
                  >
                    {link.label}
                    <FaChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        megaMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`nav-link ${activeLink === link.href.slice(1) ? "active text-white" : ""}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link href="#contact" className="btn-primary !py-2.5 !px-5 !text-sm">
                Start a Project
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              className="xl:hidden p-2 text-slate-300 hover:text-white transition-colors shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden border-t border-white/10 bg-[#050a14]/98 backdrop-blur-xl overflow-hidden"
            >
              <div className="container-wide py-6 space-y-1 max-h-[calc(100vh-72px)] overflow-y-auto">
                {siteConfig.navLinks.map((link) =>
                  link.hasMegaMenu ? (
                    <MegaMenuMobile key={link.label} onNavigate={closeMobile} />
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMobile}
                      className={`block px-3 py-3 text-sm font-medium transition-colors ${
                        activeLink === link.href.slice(1)
                          ? "text-cyan-400"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="pt-4 px-3">
                  <Link href="#contact" onClick={closeMobile} className="btn-primary w-full">
                    Start a Project
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
    </>
  );
}
