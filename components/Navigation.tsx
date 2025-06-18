'use client';

import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaInfoCircle, 
  FaVideo, 
  FaLaptop,
  FaBuilding,
  FaBolt,
  FaChevronDown
} from 'react-icons/fa';
import { DropdownContext } from '../context/DropdownContext';

const avDropdownItems = [
  'Video Conferencing',
  'Background Audio',
  'Large PA & Line Arrays',
  'Projection',
  'LED & Video wall',
  'Commercial TV Screens',
  'Interactive Touch Screens',
  'Digital Signage',
  'Stage & Concert Lighting',
];

const interiorDropdownItems = [
  'Work Stations',
  'Office Table & Chairs',
  'Cupboard & Storage Racks',
  'Computer Table & Study Desks',
  'Data Center Storage Racks',
  "Customized all kinds of Furniture's.",
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [avDropdownOpen, setAvDropdownOpen] = useState(false);
  const [avDropdownMobileOpen, setAvDropdownMobileOpen] = useState(false);
  const [interiorDropdownOpen, setInteriorDropdownOpen] = useState(false);
  const [interiorDropdownMobileOpen, setInteriorDropdownMobileOpen] = useState(false);

  // Use global context
  const { setDropdownOpen } = useContext(DropdownContext);

  useEffect(() => {
    // Update global dropdown state
    setDropdownOpen(
      avDropdownOpen || interiorDropdownOpen || avDropdownMobileOpen || interiorDropdownMobileOpen
    );
  }, [avDropdownOpen, interiorDropdownOpen, avDropdownMobileOpen, interiorDropdownMobileOpen, setDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'av-integration', 'it-integration', 'interior-acoustics', 'electrical-projects'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveLink(currentSection || '');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', icon: <FaHome className="mr-2" /> },
    { href: '#about', label: 'About Us', icon: <FaInfoCircle className="mr-2" /> },
    { href: '#av-integration', label: 'AV Integration', icon: <FaVideo className="mr-2" />, dropdown: 'av' },
    { href: '#it-integration', label: 'IT Integration', icon: <FaLaptop className="mr-2" /> },
    { href: '#interior-acoustics', label: 'Interior & Acoustics', icon: <FaBuilding className="mr-2" />, dropdown: 'interior' },
    { href: '#electrical-projects', label: 'Electrical Projects', icon: <FaBolt className="mr-2" /> },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 relative z-50">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="/"
            className="text-2xl font-bold text-text relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">MangroveIT</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.dropdown === 'av') {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setAvDropdownOpen(true)}
                    onMouseLeave={() => setAvDropdownOpen(false)}
                  >
                    <button
                      className={`text-text hover:text-accent transition-colors duration-300 relative group flex items-center ${
                        activeLink === link.href.slice(1) ? 'text-accent' : ''
                      }`}
                    >
                      {link.icon}
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
                          className="absolute left-0 mt-2 w-64 bg-transparent shadow-lg rounded-lg py-2 z-50 border border-neutral-800 backdrop-blur-none"
                        >
                          {avDropdownItems.map((item) => (
                            <div
                              key={item}
                              className="px-4 py-2 hover:bg-accent/10 text-text cursor-pointer text-sm"
                            >
                              {item}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else if (link.dropdown === 'interior') {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setInteriorDropdownOpen(true)}
                    onMouseLeave={() => setInteriorDropdownOpen(false)}
                  >
                    <button
                      className={`text-text hover:text-accent transition-colors duration-300 relative group flex items-center ${
                        activeLink === link.href.slice(1) ? 'text-accent' : ''
                      }`}
                    >
                      {link.icon}
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
                          className="absolute left-0 mt-2 w-64 bg-transparent shadow-lg rounded-lg py-2 z-50 border border-neutral-800 backdrop-blur-none"
                        >
                          {interiorDropdownItems.map((item) => (
                            <div
                              key={item}
                              className="px-4 py-2 hover:bg-accent/10 text-text cursor-pointer text-sm"
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
                    className={`text-text hover:text-accent transition-colors duration-300 relative group flex items-center ${
                      activeLink === link.href.slice(1) ? 'text-accent' : ''
                    }`}
                  >
                    {link.icon}
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"
                      initial={{ width: 0 }}
                      animate={{ width: activeLink === link.href.slice(1) ? '100%' : 0 }}
                    />
                  </Link>
                );
              }
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="w-5 h-5 text-text" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="w-5 h-5 text-text" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => {
                  if (link.dropdown === 'av') {
                    return (
                      <div key={link.href}>
                        <button
                          className="flex items-center w-full text-text hover:text-accent transition-colors duration-300"
                          onClick={() => setAvDropdownMobileOpen((open) => !open)}
                        >
                          {link.icon}
                          {link.label}
                          <FaChevronDown className="ml-1 text-xs" />
                        </button>
                        <AnimatePresence>
                          {avDropdownMobileOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-6 bg-transparent backdrop-blur-none"
                            >
                              {avDropdownItems.map((item) => (
                                <div
                                  key={item}
                                  className="py-2 text-text text-sm hover:text-accent cursor-pointer"
                                >
                                  {item}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  } else if (link.dropdown === 'interior') {
                    return (
                      <div key={link.href}>
                        <button
                          className="flex items-center w-full text-text hover:text-accent transition-colors duration-300"
                          onClick={() => setInteriorDropdownMobileOpen((open) => !open)}
                        >
                          {link.icon}
                          {link.label}
                          <FaChevronDown className="ml-1 text-xs" />
                        </button>
                        <AnimatePresence>
                          {interiorDropdownMobileOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-6 bg-transparent backdrop-blur-none"
                            >
                              {interiorDropdownItems.map((item) => (
                                <div
                                  key={item}
                                  className="py-2 text-text text-sm hover:text-accent cursor-pointer"
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
                        className={`block text-text hover:text-accent transition-colors duration-300 flex items-center ${
                          activeLink === link.href.slice(1) ? 'text-accent' : ''
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
    </motion.nav>
  );
} 