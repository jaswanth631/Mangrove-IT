"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const serviceOptions = [
  "AV Integration",
  "IT Integration",
  "Interior & Acoustics",
  "Electrical Projects",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const messageBody = [
      formData.message,
      formData.company ? `\n\nCompany: ${formData.company}` : "",
      formData.service ? `\nService Required: ${formData.service}` : "",
    ].join("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: messageBody,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="glass-card p-6 md:p-8">
      <h3 className="text-xl font-bold text-white mb-6">Request a Consultation</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-xs font-medium text-slate-400 mb-1.5">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="input-field"
              placeholder="Company name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-medium text-slate-400 mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              placeholder="+91 93438 31500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-xs font-medium text-slate-400 mb-1.5">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="input-field resize-none"
            placeholder="Tell us about your project requirements..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          {status === "loading" ? (
            <>
              <div className="w-4 h-4 border-2 border-[#050a14] border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : status === "success" ? (
            "Request Sent!"
          ) : status === "error" ? (
            "Failed — Try Again"
          ) : (
            <>
              <FaPaperPlane className="w-4 h-4" />
              Request a Consultation
            </>
          )}
        </motion.button>

        {status === "success" && (
          <p className="text-cyan-400 text-sm text-center">Thanks for contacting us! We will get back to you shortly.</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}
