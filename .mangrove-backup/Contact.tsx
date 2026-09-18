"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: [
      "Plot No. 23, 3rd Cross, SCR Layout, Anjanapura,",
      "JP Nagar 9th Phase, Bengaluru, Karnataka 560108, India",
    ],
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+91 93438 31500"],
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["suresh@mangroveit.com", "suresh@mangroveit.com"],
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden section-surface"
    >
      <div className="container mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="eyebrow mb-4">Let&apos;s Build Something</span>
          <h2 className="section-title mt-4">
            Tell us about your <span className="gradient-text">project.</span>
          </h2>
          <p className="section-subtitle mt-4">
            Engineering consultations are complimentary. Share your scope and
            we&apos;ll come back with a clear path forward — typically within
            one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            {CONTACT_INFO.map((item, i) => (
              <div key={item.label} className="card p-6 group">
                <div className="flex items-start gap-4">
                  <div className="icon-box !w-11 !h-11 flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">
                      {item.label}
                    </p>
                    {item.lines.map((line, idx) => (
                      <p
                        key={idx}
                        className="text-sm text-ink-primary leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="icon-box !w-11 !h-11 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">
                    Business Hours
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex justify-between text-ink-primary">
                      <span className="text-ink-secondary">Mon – Fri</span>
                      <span>9:00 – 18:00</span>
                    </li>
                    <li className="flex justify-between text-ink-primary">
                      <span className="text-ink-secondary">Saturday</span>
                      <span>10:00 – 16:00</span>
                    </li>
                    <li className="flex justify-between text-ink-secondary">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
