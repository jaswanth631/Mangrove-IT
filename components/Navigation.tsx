"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaVideo,
  FaLaptop,
  FaBuilding,
  FaBolt,
  FaChevronDown,
} from "react-icons/fa";
import FullPageOverlay from "./FullPageOverlay";

const avDropdownItems = [
  "Video Conferencing",
  "Background Audio",
  "Large PA & Line Arrays",
  "Projection",
  "LED & Video wall",
  "Commercial TV Screens",
  "Interactive Touch Screens",
  "Digital Signage",
  "Stage & Concert Lighting",
];

const itDropdownItems = [
  "Web Development",
  "Application Integration",
  "Web Services",
  "REST API's",
];

const interiorDropdownItems = [
  "Work Stations",
  "Office Table & Chairs",
  "Cupboard & Storage Racks",
  "Computer Table & Study Desks",
  "Data Center Storage Racks",
  "Customized all kinds of Furniture's.",
];

const electricalDropdownItems = [
  "HT & LT Installations",
  "Industrial Wiring",
  "Electrical Design",
  "Control Panels",
  "Maintenance Contracts",
  "Repair Services",
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [avDropdownOpen, setAvDropdownOpen] = useState(false);
  const [avDropdownMobileOpen, setAvDropdownMobileOpen] = useState(false);
  const [itDropdownOpen, setItDropdownOpen] = useState(false);
  const [itDropdownMobileOpen, setItDropdownMobileOpen] = useState(false);
  const [interiorDropdownOpen, setInteriorDropdownOpen] = useState(false);
  const [interiorDropdownMobileOpen, setInteriorDropdownMobileOpen] =
    useState(false);
  const [electricalDropdownOpen, setElectricalDropdownOpen] = useState(false);
  const [electricalDropdownMobileOpen, setElectricalDropdownMobileOpen] =
    useState(false);
  const [showVCOverlay, setShowVCOverlay] = useState(false);
  const [showBAOverlay, setShowBAOverlay] = useState(false);
  const [showPAOverlay, setShowPAOverlay] = useState(false);
  const [showProjectionOverlay, setShowProjectionOverlay] = useState(false);
  const [showLEDOverlay, setShowLEDOverlay] = useState(false);
  const [showTVOverlay, setShowTVOverlay] = useState(false);
  const [showTouchOverlay, setShowTouchOverlay] = useState(false);
  const [showSignageOverlay, setShowSignageOverlay] = useState(false);
  const [showLightingOverlay, setShowLightingOverlay] = useState(false);
  const [showWorkStationsOverlay, setShowWorkStationsOverlay] = useState(false);
  const [showOfficeTableOverlay, setShowOfficeTableOverlay] = useState(false);
  const [showCupboardOverlay, setShowCupboardOverlay] = useState(false);
  const [showComputerTableOverlay, setShowComputerTableOverlay] =
    useState(false);
  const [showDataCenterOverlay, setShowDataCenterOverlay] = useState(false);
  const [showCustomFurnitureOverlay, setShowCustomFurnitureOverlay] =
    useState(false);
  const [showWebDevOverlay, setShowWebDevOverlay] = useState(false);
  const [showAppIntegrationOverlay, setShowAppIntegrationOverlay] =
    useState(false);
  const [showWebServicesOverlay, setShowWebServicesOverlay] = useState(false);
  const [showRestApiOverlay, setShowRestApiOverlay] = useState(false);
  const [showHTLTOverlay, setShowHTLTOverlay] = useState(false);
  const [showIndustrialWiringOverlay, setShowIndustrialWiringOverlay] =
    useState(false);
  const [showElectricalDesignOverlay, setShowElectricalDesignOverlay] =
    useState(false);
  const [showControlPanelsOverlay, setShowControlPanelsOverlay] =
    useState(false);
  const [showMaintenanceOverlay, setShowMaintenanceOverlay] = useState(false);
  const [showRepairServicesOverlay, setShowRepairServicesOverlay] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "av-integration",
        "it-integration",
        "interior-acoustics",
        "electrical-projects",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveLink(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", icon: <FaHome className="mr-2" /> },
    {
      href: "#av-integration",
      label: "AV Integration",
      icon: <FaVideo className="mr-2" />,
      dropdown: "av",
    },
    {
      href: "#it-integration",
      label: "IT Integration",
      icon: <FaLaptop className="mr-2" />,
      dropdown: "it",
    },
    {
      href: "#interior-acoustics",
      label: "Interior & Acoustics",
      icon: <FaBuilding className="mr-2" />,
      dropdown: "interior",
    },
    {
      href: "#electrical-projects",
      label: "Electrical Projects",
      icon: <FaBolt className="mr-2" />,
      dropdown: "electrical",
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-professional"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-2xl md:text-3xl font-bold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-navy-950">Mangrove</span>
            <span className="text-primary-600">IT</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.dropdown === "av") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setAvDropdownOpen(true)}
                    onMouseLeave={() => setAvDropdownOpen(false)}
                  >
                    <button
                      className={`nav-link flex items-center ${
                        activeLink === link.href.slice(1)
                          ? "active text-primary-600"
                          : ""
                      }`}
                    >
                      {link.label}
                      <FaChevronDown className="ml-1 text-xs" />
                    </button>
                    <AnimatePresence>
                      {avDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-64 bg-white shadow-professional-lg rounded-xl py-2 border border-slate-200"
                        >
                          {avDropdownItems.map((item) => (
                            <div
                              key={item}
                              onClick={() => {
                                setAvDropdownOpen(false);
                                if (item === "Video Conferencing")
                                  setShowVCOverlay(true);
                                if (item === "Background Audio")
                                  setShowBAOverlay(true);
                                if (item === "Large PA & Line Arrays")
                                  setShowPAOverlay(true);
                                if (item === "Projection")
                                  setShowProjectionOverlay(true);
                                if (item === "LED & Video wall")
                                  setShowLEDOverlay(true);
                                if (item === "Commercial TV Screens")
                                  setShowTVOverlay(true);
                                if (item === "Interactive Touch Screens")
                                  setShowTouchOverlay(true);
                                if (item === "Digital Signage")
                                  setShowSignageOverlay(true);
                                if (item === "Stage & Concert Lighting")
                                  setShowLightingOverlay(true);
                              }}
                              className="px-4 py-2 hover:bg-slate-50 text-slate-700 cursor-pointer text-sm transition-colors rounded-lg mx-2"
                            >
                              {item}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else if (link.dropdown === "it") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setItDropdownOpen(true)}
                    onMouseLeave={() => setItDropdownOpen(false)}
                  >
                    <button
                      className={`nav-link flex items-center ${
                        activeLink === link.href.slice(1)
                          ? "active text-primary-600"
                          : ""
                      }`}
                    >
                      {link.label}
                      <FaChevronDown className="ml-1 text-xs" />
                    </button>
                    <AnimatePresence>
                      {itDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-64 bg-white shadow-professional-lg rounded-xl py-2 border border-slate-200"
                        >
                          {itDropdownItems.map((item) => (
                            <div
                              key={item}
                              onClick={() => {
                                setItDropdownOpen(false);
                                if (item === "Web Development")
                                  setShowWebDevOverlay(true);
                                if (item === "Application Integration")
                                  setShowAppIntegrationOverlay(true);
                                if (item === "Web Services")
                                  setShowWebServicesOverlay(true);
                                if (item === "REST API's")
                                  setShowRestApiOverlay(true);
                              }}
                              className="px-4 py-2 hover:bg-slate-50 text-slate-700 cursor-pointer text-sm transition-colors rounded-lg mx-2"
                            >
                              {item}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else if (link.dropdown === "interior") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setInteriorDropdownOpen(true)}
                    onMouseLeave={() => setInteriorDropdownOpen(false)}
                  >
                    <button
                      className={`nav-link flex items-center ${
                        activeLink === link.href.slice(1)
                          ? "active text-primary-600"
                          : ""
                      }`}
                    >
                      {link.label}
                      <FaChevronDown className="ml-1 text-xs" />
                    </button>
                    <AnimatePresence>
                      {interiorDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-64 bg-white shadow-professional-lg rounded-xl py-2 border border-slate-200"
                        >
                          {interiorDropdownItems.map((item) => (
                            <div
                              key={item}
                              onClick={() => {
                                setInteriorDropdownOpen(false);
                                if (item === "Work Stations")
                                  setShowWorkStationsOverlay(true);
                                if (item === "Office Table & Chairs")
                                  setShowOfficeTableOverlay(true);
                                if (item === "Cupboard & Storage Racks")
                                  setShowCupboardOverlay(true);
                                if (item === "Computer Table & Study Desks")
                                  setShowComputerTableOverlay(true);
                                if (item === "Data Center Storage Racks")
                                  setShowDataCenterOverlay(true);
                                if (
                                  item ===
                                  "Customized all kinds of Furniture's."
                                )
                                  setShowCustomFurnitureOverlay(true);
                              }}
                              className="px-4 py-2 hover:bg-slate-50 text-slate-700 cursor-pointer text-sm transition-colors rounded-lg mx-2"
                            >
                              {item}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else if (link.dropdown === "electrical") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setElectricalDropdownOpen(true)}
                    onMouseLeave={() => setElectricalDropdownOpen(false)}
                  >
                    <button
                      className={`nav-link flex items-center ${
                        activeLink === link.href.slice(1)
                          ? "active text-primary-600"
                          : ""
                      }`}
                    >
                      {link.label}
                      <FaChevronDown className="ml-1 text-xs" />
                    </button>
                    <AnimatePresence>
                      {electricalDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-64 bg-white shadow-professional-lg rounded-xl py-2 border border-slate-200"
                        >
                          {electricalDropdownItems.map((item) => (
                            <div
                              key={item}
                              onClick={() => {
                                setElectricalDropdownOpen(false);
                                if (item === "HT & LT Installations")
                                  setShowHTLTOverlay(true);
                                if (item === "Industrial Wiring")
                                  setShowIndustrialWiringOverlay(true);
                                if (item === "Electrical Design")
                                  setShowElectricalDesignOverlay(true);
                                if (item === "Control Panels")
                                  setShowControlPanelsOverlay(true);
                                if (item === "Maintenance Contracts")
                                  setShowMaintenanceOverlay(true);
                                if (item === "Repair Services")
                                  setShowRepairServicesOverlay(true);
                              }}
                              className="px-4 py-2 hover:bg-slate-50 text-slate-700 cursor-pointer text-sm transition-colors rounded-lg mx-2"
                            >
                              {item}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${
                      activeLink === link.href.slice(1)
                        ? "active text-primary-600"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 text-slate-700" />
              ) : (
                <FaBars className="w-6 h-6 text-slate-700" />
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-slate-200"
            >
              <div className="py-4 space-y-2 bg-white">
                {navLinks.map((link) => {
                  if (link.dropdown === "av") {
                    return (
                      <div key={link.href}>
                        <button
                          className="flex items-center w-full text-slate-700 hover:text-primary-600 transition-colors duration-300 font-medium py-2"
                          onClick={() =>
                            setAvDropdownMobileOpen((open) => !open)
                          }
                        >
                          {link.icon}
                          {link.label}
                          <FaChevronDown className="ml-1 text-xs" />
                        </button>
                        <AnimatePresence>
                          {avDropdownMobileOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-6 bg-slate-50 rounded-lg py-2"
                            >
                              {avDropdownItems.map((item) => (
                                <div
                                  key={item}
                                  onClick={() => {
                                    if (item === "Video Conferencing")
                                      setShowVCOverlay(true);
                                    if (item === "Background Audio")
                                      setShowBAOverlay(true);
                                    if (item === "Large PA & Line Arrays")
                                      setShowPAOverlay(true);
                                    if (item === "Projection")
                                      setShowProjectionOverlay(true);
                                    if (item === "LED & Video wall")
                                      setShowLEDOverlay(true);
                                    if (item === "Commercial TV Screens")
                                      setShowTVOverlay(true);
                                    if (item === "Interactive Touch Screens")
                                      setShowTouchOverlay(true);
                                    if (item === "Digital Signage")
                                      setShowSignageOverlay(true);
                                    if (item === "Stage & Concert Lighting")
                                      setShowLightingOverlay(true);
                                    setIsMenuOpen(false);
                                  }}
                                  className="py-2 text-slate-600 text-sm hover:text-primary-600 cursor-pointer"
                                >
                                  {item}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  } else if (link.dropdown === "it") {
                    return (
                      <div key={link.href}>
                        <button
                          className="flex items-center w-full text-slate-700 hover:text-primary-600 transition-colors duration-300 font-medium py-2"
                          onClick={() =>
                            setItDropdownMobileOpen((open) => !open)
                          }
                        >
                          {link.icon}
                          {link.label}
                          <FaChevronDown className="ml-1 text-xs" />
                        </button>
                        <AnimatePresence>
                          {itDropdownMobileOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-6 bg-slate-50 rounded-lg py-2"
                            >
                              {itDropdownItems.map((item) => (
                                <div
                                  key={item}
                                  onClick={() => {
                                    if (item === "Web Development")
                                      setShowWebDevOverlay(true);
                                    if (item === "Application Integration")
                                      setShowAppIntegrationOverlay(true);
                                    if (item === "Web Services")
                                      setShowWebServicesOverlay(true);
                                    if (item === "REST API's")
                                      setShowRestApiOverlay(true);
                                    setIsMenuOpen(false);
                                  }}
                                  className="py-2 text-slate-600 text-sm hover:text-primary-600 cursor-pointer"
                                >
                                  {item}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  } else if (link.dropdown === "interior") {
                    return (
                      <div key={link.href}>
                        <button
                          className="flex items-center w-full text-slate-700 hover:text-primary-600 transition-colors duration-300 font-medium py-2"
                          onClick={() =>
                            setInteriorDropdownMobileOpen((open) => !open)
                          }
                        >
                          {link.icon}
                          {link.label}
                          <FaChevronDown className="ml-1 text-xs" />
                        </button>
                        <AnimatePresence>
                          {interiorDropdownMobileOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-6 bg-slate-50 rounded-lg py-2"
                            >
                              {interiorDropdownItems.map((item) => (
                                <div
                                  key={item}
                                  onClick={() => {
                                    if (item === "Work Stations")
                                      setShowWorkStationsOverlay(true);
                                    if (item === "Office Table & Chairs")
                                      setShowOfficeTableOverlay(true);
                                    if (item === "Cupboard & Storage Racks")
                                      setShowCupboardOverlay(true);
                                    if (item === "Computer Table & Study Desks")
                                      setShowComputerTableOverlay(true);
                                    if (item === "Data Center Storage Racks")
                                      setShowDataCenterOverlay(true);
                                    if (
                                      item ===
                                      "Customized all kinds of Furniture's."
                                    )
                                      setShowCustomFurnitureOverlay(true);
                                    setIsMenuOpen(false);
                                  }}
                                  className="py-2 text-slate-600 text-sm hover:text-primary-600 cursor-pointer"
                                >
                                  {item}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  } else if (link.dropdown === "electrical") {
                    return (
                      <div key={link.href}>
                        <button
                          className="flex items-center w-full text-slate-700 hover:text-primary-600 transition-colors duration-300 font-medium py-2"
                          onClick={() =>
                            setElectricalDropdownMobileOpen((open) => !open)
                          }
                        >
                          {link.icon}
                          {link.label}
                          <FaChevronDown className="ml-1 text-xs" />
                        </button>
                        <AnimatePresence>
                          {electricalDropdownMobileOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-6 bg-slate-50 rounded-lg py-2"
                            >
                              {electricalDropdownItems.map((item) => (
                                <div
                                  key={item}
                                  onClick={() => {
                                    if (item === "HT & LT Installations")
                                      setShowHTLTOverlay(true);
                                    if (item === "Industrial Wiring")
                                      setShowIndustrialWiringOverlay(true);
                                    if (item === "Electrical Design")
                                      setShowElectricalDesignOverlay(true);
                                    if (item === "Control Panels")
                                      setShowControlPanelsOverlay(true);
                                    if (item === "Maintenance Contracts")
                                      setShowMaintenanceOverlay(true);
                                    if (item === "Repair Services")
                                      setShowRepairServicesOverlay(true);
                                    setIsMenuOpen(false);
                                  }}
                                  className="py-2 text-slate-600 text-sm hover:text-primary-600 cursor-pointer"
                                >
                                  {item}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  } else {
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block text-slate-700 hover:text-primary-600 transition-colors duration-300 font-medium py-2 ${
                          activeLink === link.href.slice(1)
                            ? "text-primary-600"
                            : ""
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    );
                  }
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* All Overlays - AV Integration Services */}
      <FullPageOverlay
        isOpen={showVCOverlay}
        onClose={() => setShowVCOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
        ]}
        title="Video Conferencing Solutions"
      >
        <p className="mb-4">
          Workplace communications are undergoing substantial transformations.
          Many people are now working remotely or from a home office. Corporate
          institutions are also finding they need to add more huddle and VC
          rooms in their head offices to accommodate rapid changes.
        </p>
        <p className="mb-4">Our video conferencing solutions include:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>High-definition video and crystal-clear audio</li>
          <li>Seamless integration with existing IT infrastructure</li>
          <li>Support for multiple platforms (Zoom, Teams, Webex)</li>
          <li>Wireless presentation and content sharing</li>
          <li>Room scheduling and management systems</li>
        </ul>
        <p>
          Whether you need a small huddle room or a large boardroom setup, we
          provide end-to-end solutions tailored to your needs.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showBAOverlay}
        onClose={() => setShowBAOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1519508234439-4f23643125c1?w=800&h=600&fit=crop",
        ]}
        title="Background Audio Systems"
      >
        <p className="mb-4">
          The soundscape of modern life is constantly evolving. With the rise of
          open-plan offices, co-working spaces, and the increasing prevalence of
          remote work, managing ambient sound has become a significant
          consideration.
        </p>
        <p className="mb-4">Our background audio solutions provide:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Distributed audio systems for uniform coverage</li>
          <li>Zone-based control for different areas</li>
          <li>Integration with paging and emergency systems</li>
          <li>Music streaming and scheduling capabilities</li>
          <li>Professional-grade speakers and amplifiers</li>
        </ul>
        <p>
          Create the perfect acoustic environment for retail spaces,
          restaurants, offices, and hospitality venues.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showPAOverlay}
        onClose={() => setShowPAOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
        ]}
        title="Large PA & Line Arrays"
      >
        <p className="mb-4">
          Our team has extensive experience with the design and commissioning of
          Sound Reinforcement Systems for auditoriums, performing arts centers,
          houses of worship, community halls, sporting facilities, and anywhere
          full music quality amplification is required.
        </p>
        <p className="mb-4">We specialize in:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Line array speaker systems for large venues</li>
          <li>Digital mixing consoles and signal processing</li>
          <li>Wireless microphone systems</li>
          <li>Stage monitoring and in-ear systems</li>
          <li>Acoustic modeling and system optimization</li>
        </ul>
        <p>
          From intimate theaters to large concert halls, we deliver exceptional
          sound quality and coverage.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showProjectionOverlay}
        onClose={() => setShowProjectionOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
        ]}
        title="Projection Systems"
      >
        <p className="mb-4">
          We have access to the latest projection technologies including LCD and
          DLP units from all major manufacturers including Epson, Panasonic,
          Sony, Delta, Barco, BenQ, Optoma, Canon, NEC, and Christie Digital.
        </p>
        <p className="mb-4">Our projection solutions include:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>4K and laser projectors for stunning image quality</li>
          <li>
            Ultra-short throw projectors for space-constrained environments
          </li>
          <li>Edge blending for seamless large-format displays</li>
          <li>Projection mapping and interactive solutions</li>
          <li>Professional installation and calibration</li>
        </ul>
        <p>
          Perfect for boardrooms, auditoriums, museums, and entertainment
          venues.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showLEDOverlay}
        onClose={() => setShowLEDOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop",
        ]}
        title="LED & Video Wall Solutions"
      >
        <p className="mb-4">
          LED Screens can be used for major impact both indoors and outdoors.
          Advertising, auditoriums, sports venues, command centers, conference
          rooms, hotels, churches, and universities are all candidates for LED
          screens.
        </p>
        <p className="mb-4">Our LED video wall solutions offer:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Fine pixel pitch displays for close viewing distances</li>
          <li>Outdoor-rated LED screens with high brightness</li>
          <li>Curved and creative shapes for unique installations</li>
          <li>Real-time content management and control</li>
          <li>Modular design for easy maintenance and scalability</li>
        </ul>
        <p>
          Create stunning visual experiences that captivate and engage your
          audience.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showTVOverlay}
        onClose={() => setShowTVOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600&fit=crop",
        ]}
        title="Commercial TV Screens"
      >
        <p className="mb-4">
          We distribute all major brands and sizes of commercial TV screens.
          Leading products such as LG, Samsung, Sony, Panasonic, NEC, ViewSonic,
          and Philips are available.
        </p>
        <p className="mb-4">Commercial display features:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>24/7 operation capability for continuous use</li>
          <li>Enhanced brightness for high-ambient light environments</li>
          <li>Landscape and portrait orientation options</li>
          <li>Built-in media players and content management</li>
          <li>Extended warranty and commercial support</li>
        </ul>
        <p>
          Ideal for corporate lobbies, retail displays, restaurants, and public
          spaces.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showTouchOverlay}
        onClose={() => setShowTouchOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop",
        ]}
        title="Interactive Touch Screens"
      >
        <p className="mb-4">
          Transform the way you communicate and collaborate with interactive
          displays that combine high-quality advanced technology with a familiar
          user experience to enhance presentations, meetings, and classroom
          lessons.
        </p>
        <p className="mb-4">Interactive display capabilities:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            Multi-touch technology supporting up to 20 simultaneous touches
          </li>
          <li>4K resolution for crisp, clear content</li>
          <li>Wireless screen sharing from any device</li>
          <li>Built-in whiteboarding and annotation tools</li>
          <li>Integration with video conferencing platforms</li>
        </ul>
        <p>
          Perfect for collaborative workspaces, training rooms, and modern
          classrooms.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showSignageOverlay}
        onClose={() => setShowSignageOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        ]}
        title="Digital Signage Solutions"
      >
        <p className="mb-4">
          We are at the forefront in offering Digital Signage Display Solutions.
          From a single information display with a digital media player to a
          fully networked site running multiple screens across the country.
        </p>
        <p className="mb-4">Our digital signage platform includes:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Cloud-based content management system</li>
          <li>Scheduling and playlist management</li>
          <li>Real-time content updates and emergency messaging</li>
          <li>Analytics and proof-of-play reporting</li>
          <li>Multi-location management from a single dashboard</li>
        </ul>
        <p>
          Engage your audience with dynamic content across retail, corporate,
          education, and hospitality sectors.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showLightingOverlay}
        onClose={() => setShowLightingOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
        ]}
        title="Stage & Concert Lighting"
      >
        <p className="mb-4">
          Our team has extensive experience with consulting, design,
          installation, and operation of complex performance lighting systems.
          This covers venues including theaters, auditoriums, performing arts
          centers, community halls, and houses of worship.
        </p>
        <p className="mb-4">Lighting solutions we provide:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>LED moving head fixtures and intelligent lighting</li>
          <li>DMX control systems and lighting consoles</li>
          <li>Architectural and accent lighting</li>
          <li>Theatrical rigging and power distribution</li>
          <li>Lighting design and programming services</li>
        </ul>
        <p>
          Create stunning visual experiences that bring performances to life.
        </p>
      </FullPageOverlay>

      {/* Interior & Acoustics Services */}
      <FullPageOverlay
        isOpen={showWorkStationsOverlay}
        onClose={() => setShowWorkStationsOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
        ]}
        title="Modern Work Stations"
      >
        <p className="mb-4">
          The traditional office cubicle is rapidly being re-imagined. As
          workforces become more mobile and flexible, there's a growing demand
          for adaptable and ergonomically designed workstations.
        </p>
        <p className="mb-4">Our workstation solutions feature:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Ergonomic design for comfort and productivity</li>
          <li>Modular configurations for flexible layouts</li>
          <li>Integrated cable management and power solutions</li>
          <li>Height-adjustable desks for sit-stand working</li>
          <li>Acoustic panels for noise reduction</li>
        </ul>
        <p>Create productive workspaces that adapt to your team's needs.</p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showOfficeTableOverlay}
        onClose={() => setShowOfficeTableOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
        ]}
        title="Office Tables & Chairs"
      >
        <p className="mb-4">
          The office furniture market is experiencing significant growth, driven
          by the expanding corporate sector, the rise of startups and SMEs, and
          the increasing adoption of hybrid work models.
        </p>
        <p className="mb-4">Our furniture collection includes:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Executive desks and conference tables</li>
          <li>Ergonomic office chairs with lumbar support</li>
          <li>Collaborative meeting tables</li>
          <li>Reception desks and waiting area seating</li>
          <li>Custom designs to match your brand identity</li>
        </ul>
        <p>
          Quality furniture that combines style, comfort, and functionality.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showCupboardOverlay}
        onClose={() => setShowCupboardOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop",
        ]}
        title="Cupboards & Storage Racks"
      >
        <p className="mb-4">
          As workspaces evolve to be more flexible and dynamic, so does the need
          for versatile storage solutions that maximize space while maintaining
          accessibility and organization.
        </p>
        <p className="mb-4">Storage solutions we offer:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Mobile pedestals and filing cabinets</li>
          <li>Open shelving and bookcase systems</li>
          <li>Lockers for personal storage</li>
          <li>Archive and document storage systems</li>
          <li>Custom storage solutions for unique requirements</li>
        </ul>
        <p>
          Organize your workspace efficiently with our comprehensive storage
          solutions.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showComputerTableOverlay}
        onClose={() => setShowComputerTableOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
        ]}
        title="Computer Tables & Study Desks"
      >
        <p className="mb-4">
          The rise of remote work and home offices has significantly boosted the
          demand for functional and comfortable computer tables and study desks
          that support productivity and well-being.
        </p>
        <p className="mb-4">Our desk solutions include:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Compact desks for small spaces</li>
          <li>L-shaped and corner desks for maximum workspace</li>
          <li>Standing desks with electric height adjustment</li>
          <li>Gaming desks with cable management</li>
          <li>Study desks with integrated storage</li>
        </ul>
        <p>Perfect for home offices, student rooms, and remote work setups.</p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showDataCenterOverlay}
        onClose={() => setShowDataCenterOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
        ]}
        title="Data Center Storage Racks"
      >
        <p className="mb-4">
          The data center rack market is experiencing robust growth, propelled
          by rapid digital transformation and the increasing demand for reliable
          IT infrastructure.
        </p>
        <p className="mb-4">Our data center solutions include:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>42U server racks with optimal cooling</li>
          <li>Cable management and power distribution</li>
          <li>Network cabinets and wall-mount racks</li>
          <li>Accessories: shelves, drawers, and blanking panels</li>
          <li>Seismic-rated racks for critical installations</li>
        </ul>
        <p>
          Professional-grade infrastructure for mission-critical IT
          environments.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showCustomFurnitureOverlay}
        onClose={() => setShowCustomFurnitureOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
        ]}
        title="Customized Furniture Solutions"
      >
        <p className="mb-4">
          The custom furniture market is thriving, fueled by increasing demand
          for personalized and unique designs that reflect individual style and
          meet specific functional requirements.
        </p>
        <p className="mb-4">Custom furniture services:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Bespoke office furniture tailored to your space</li>
          <li>Brand-specific designs and finishes</li>
          <li>Space planning and 3D visualization</li>
          <li>Material selection and color matching</li>
          <li>Professional installation and after-sales support</li>
        </ul>
        <p>
          Bring your vision to life with furniture designed specifically for
          you.
        </p>
      </FullPageOverlay>

      {/* IT Integration Services */}
      <FullPageOverlay
        isOpen={showWebDevOverlay}
        onClose={() => setShowWebDevOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
        ]}
        title="Web Development Services"
      >
        <p className="mb-4">
          We craft dynamic and engaging web experiences that captivate your
          audience and drive business growth. From intuitive user interfaces to
          robust backends, our web development services ensure your online
          presence is powerful and responsive.
        </p>
        <p className="mb-4">Our web development expertise:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Custom website design and development</li>
          <li>E-commerce platforms and online stores</li>
          <li>Content management systems (WordPress, custom CMS)</li>
          <li>Progressive web apps (PWA)</li>
          <li>SEO optimization and performance tuning</li>
          <li>Ongoing maintenance and support</li>
        </ul>
        <p>Build a powerful online presence that drives results.</p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showAppIntegrationOverlay}
        onClose={() => setShowAppIntegrationOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        ]}
        title="Application Integration"
      >
        <p className="mb-4">
          Break down data silos and streamline your business operations with our
          expert application integration services. We connect disparate software
          systems creating seamless workflows and enabling real-time data
          exchange.
        </p>
        <p className="mb-4">Integration services include:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Cloud platform integration (Salesforce, SAP, Microsoft)</li>
          <li>Legacy system modernization</li>
          <li>API development and management</li>
          <li>Data synchronization and ETL processes</li>
          <li>Middleware and enterprise service bus (ESB)</li>
          <li>Custom integration solutions</li>
        </ul>
        <p>
          Connect your systems for enhanced efficiency and informed
          decision-making.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showWebServicesOverlay}
        onClose={() => setShowWebServicesOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        ]}
        title="Web Services"
      >
        <p className="mb-4">
          Unlock the full potential of your digital ecosystem with our
          comprehensive web services. We build secure, reliable, and
          high-performance APIs that facilitate seamless communication between
          your applications, partners, and third-party platforms.
        </p>
        <p className="mb-4">Web services we provide:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>SOAP and REST API development</li>
          <li>Microservices architecture</li>
          <li>API gateway and management</li>
          <li>Authentication and authorization (OAuth, JWT)</li>
          <li>API documentation and developer portals</li>
          <li>Performance monitoring and analytics</li>
        </ul>
        <p>Power your distributed systems with robust web services.</p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showRestApiOverlay}
        onClose={() => setShowRestApiOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop",
        ]}
        title="REST API Development"
      >
        <p className="mb-4">
          Leverage the power of industry-standard REST APIs to connect your
          applications and innovate faster. Our REST API development and
          integration services focus on creating well-documented, secure, and
          efficient interfaces.
        </p>
        <p className="mb-4">REST API capabilities:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>RESTful API design following best practices</li>
          <li>JSON and XML data formats</li>
          <li>Versioning and backward compatibility</li>
          <li>Rate limiting and throttling</li>
          <li>Comprehensive API testing and validation</li>
          <li>Interactive API documentation (Swagger/OpenAPI)</li>
        </ul>
        <p>
          Build connected, future-proof digital solutions with our REST API
          expertise.
        </p>
      </FullPageOverlay>

      {/* Electrical Projects Services */}
      <FullPageOverlay
        isOpen={showHTLTOverlay}
        onClose={() => setShowHTLTOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
        ]}
        title="HT & LT Installations"
      >
        <p className="mb-4">
          Complete high-tension and low-tension electrical installations for
          commercial and industrial projects. Our experienced team ensures safe,
          efficient, and code-compliant installations.
        </p>
        <p className="mb-4">Our HT & LT services include:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>High-tension switchgear and transformers</li>
          <li>Low-tension distribution boards and panels</li>
          <li>Cable laying and termination</li>
          <li>Earthing and lightning protection systems</li>
          <li>Load calculations and power factor correction</li>
          <li>Testing and commissioning services</li>
        </ul>
        <p>
          Reliable power distribution solutions for factories, commercial
          buildings, and industrial facilities.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showIndustrialWiringOverlay}
        onClose={() => setShowIndustrialWiringOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=800&h=600&fit=crop",
        ]}
        title="Industrial Wiring Solutions"
      >
        <p className="mb-4">
          Professional industrial wiring solutions for manufacturing and
          production facilities. We specialize in complex wiring systems that
          meet the demanding requirements of industrial environments.
        </p>
        <p className="mb-4">Industrial wiring services:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Machine and equipment wiring</li>
          <li>Motor control circuits and starters</li>
          <li>Instrumentation and control wiring</li>
          <li>Cable tray and conduit systems</li>
          <li>Emergency power and backup systems</li>
          <li>Compliance with industrial safety standards</li>
        </ul>
        <p>
          Robust wiring solutions designed for the harsh conditions of
          industrial settings.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showElectricalDesignOverlay}
        onClose={() => setShowElectricalDesignOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        ]}
        title="Electrical Design & Engineering"
      >
        <p className="mb-4">
          Comprehensive electrical system design and engineering services from
          concept to completion. Our design team creates efficient, safe, and
          cost-effective electrical solutions.
        </p>
        <p className="mb-4">Design services include:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Single-line diagrams and schematics</li>
          <li>Load analysis and power distribution design</li>
          <li>Lighting design and calculations</li>
          <li>AutoCAD electrical drawings</li>
          <li>Bill of materials and specifications</li>
          <li>Code compliance and permit support</li>
        </ul>
        <p>
          Professional electrical engineering that ensures optimal performance
          and safety.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showControlPanelsOverlay}
        onClose={() => setShowControlPanelsOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
        ]}
        title="Control Panels & Automation"
      >
        <p className="mb-4">
          Custom electrical control panel design and manufacturing for
          industrial automation and process control. We build panels that meet
          your exact specifications and requirements.
        </p>
        <p className="mb-4">Control panel solutions:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>PLC and SCADA control panels</li>
          <li>Motor control centers (MCC)</li>
          <li>Variable frequency drive (VFD) panels</li>
          <li>Power distribution panels</li>
          <li>Custom enclosures and layouts</li>
          <li>Factory testing and documentation</li>
        </ul>
        <p>
          Precision-built control panels for reliable industrial automation.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showMaintenanceOverlay}
        onClose={() => setShowMaintenanceOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
        ]}
        title="Annual Maintenance Contracts"
      >
        <p className="mb-4">
          Comprehensive annual maintenance contracts for electrical systems and
          equipment. Our preventive maintenance programs help avoid costly
          downtime and extend equipment life.
        </p>
        <p className="mb-4">Maintenance services include:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Scheduled preventive maintenance visits</li>
          <li>Equipment inspection and testing</li>
          <li>Thermographic scanning for hot spots</li>
          <li>Cleaning and tightening of connections</li>
          <li>Detailed maintenance reports</li>
          <li>24/7 emergency support</li>
        </ul>
        <p>
          Keep your electrical systems running smoothly with our proactive
          maintenance programs.
        </p>
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showRepairServicesOverlay}
        onClose={() => setShowRepairServicesOverlay(false)}
        imageUrls={[
          "https://images.unsplash.com/photo-1621905252472-be1d04c8b770?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092918484-8313e1f7e8c6?w=800&h=600&fit=crop",
        ]}
        title="Electrical Repair Services"
      >
        <p className="mb-4">
          Professional repair and troubleshooting services for electrical
          systems and equipment. Our experienced technicians quickly diagnose
          and resolve electrical issues to minimize downtime.
        </p>
        <p className="mb-4">Repair services cover:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Emergency breakdown repairs</li>
          <li>Fault finding and diagnostics</li>
          <li>Motor and transformer repairs</li>
          <li>Panel and switchgear repairs</li>
          <li>Cable fault location and repair</li>
          <li>Rapid response service available</li>
        </ul>
        <p>
          Fast, reliable repairs to get your operations back up and running
          quickly.
        </p>
      </FullPageOverlay>
    </motion.nav>
  );
}
