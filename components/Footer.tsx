"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { siteConfig } from "@/lib/data/site";
import { serviceCategories } from "@/lib/data/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#030810] border-t border-white/5 pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <span className="relative block h-10 sm:h-12 lg:h-14 w-full max-w-[280px] sm:max-w-[380px] lg:max-w-full mb-4">
              <Image
                src="/mangrove_logo.png"
                alt="Mangrove Integrated Solutions Pvt. Ltd."
                fill
                sizes="(max-width: 1024px) 380px, 280px"
                className="object-contain object-left brightness-125 contrast-110 saturate-125 drop-shadow-[0_0_10px_rgba(74,222,128,0.2)]"
                unoptimized
              />
            </span>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional technology and systems integration company delivering
              AV, IT, interior, acoustic and electrical solutions for modern
              infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {serviceCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`#${cat.slug}`}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaEnvelope className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.emails[0]}`}
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {siteConfig.contact.emails[0]}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/5 mb-6" />
        <p className="text-center text-xs text-slate-500">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
