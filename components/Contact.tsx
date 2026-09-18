"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { siteConfig } from "@/lib/data/site";
import ContactForm from "./ContactForm";
import SectionHeader from "./ui/SectionHeader";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactItems = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      details: siteConfig.contact.address,
    },
    {
      icon: FaPhone,
      title: "Phone",
      details: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: siteConfig.contact.emails.join(" · "),
      href: `mailto:${siteConfig.contact.emails[0]}`,
    },
    {
      icon: FaClock,
      title: "Business Hours",
      details: `Mon–Fri: ${siteConfig.contact.businessHours.weekdays}\nSat: ${siteConfig.contact.businessHours.saturday}\nSun: ${siteConfig.contact.businessHours.sunday}`,
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1220] to-[#050a14]" />

      <div className="container-wide relative z-10">
        <SectionHeader
          eyebrow="Contact"
          title="Get In Touch"
          subtitle="Ready to start your project? Reach out for a consultation."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
        >
          <div className="space-y-4">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-sm bg-cyan-500/10 text-cyan-400 shrink-0">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-cyan-400 transition-colors whitespace-pre-line"
                    >
                      {item.details}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-400 whitespace-pre-line leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
