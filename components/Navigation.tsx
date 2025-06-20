'use client';

import React, { useState, useEffect } from 'react';
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
import FullPageOverlay from './FullPageOverlay';

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

const itDropdownItems = [
  'Web Development',
  'Application Integration',
  'Web Services',
  "REST API's",
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
  const [itDropdownOpen, setItDropdownOpen] = useState(false);
  const [itDropdownMobileOpen, setItDropdownMobileOpen] = useState(false);
  const [interiorDropdownOpen, setInteriorDropdownOpen] = useState(false);
  const [interiorDropdownMobileOpen, setInteriorDropdownMobileOpen] = useState(false);
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
  const [showComputerTableOverlay, setShowComputerTableOverlay] = useState(false);
  const [showDataCenterOverlay, setShowDataCenterOverlay] = useState(false);
  const [showCustomFurnitureOverlay, setShowCustomFurnitureOverlay] = useState(false);
  const [showWebDevOverlay, setShowWebDevOverlay] = useState(false);
  const [showAppIntegrationOverlay, setShowAppIntegrationOverlay] = useState(false);
  const [showWebServicesOverlay, setShowWebServicesOverlay] = useState(false);
  const [showRestApiOverlay, setShowRestApiOverlay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
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
    { href: '#av-integration', label: 'AV Integration', icon: <FaVideo className="mr-2" />, dropdown: 'av' },
    { href: '#it-integration', label: 'IT Integration', icon: <FaLaptop className="mr-2" />, dropdown: 'it' },
    { href: '#interior-acoustics', label: 'Interior & Acoustics', icon: <FaBuilding className="mr-2" />, dropdown: 'interior' },
    { href: '#electrical-projects', label: 'Electrical Projects', icon: <FaBolt className="mr-2" /> },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#374151]${isScrolled ? ' shadow-lg' : ''}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="/"
            className="text-2xl font-bold text-white relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 text-[#116B36]" style={{ fontFamily: 'sans-serif' }}>MangroveIT</span>
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
                      className={`text-white hover:text-accent transition-colors duration-300 relative group flex items-center ${
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
                          className="absolute left-0 mt-2 w-64 bg-[#374151] shadow-lg rounded-lg py-2 z-50"
                        >
                          {avDropdownItems.map((item) => (
                            <div
                              key={item}
                              onClick={() => {
                                if (item === 'Video Conferencing') {
                                  setShowVCOverlay(true);
                                }
                                if (item === 'Background Audio') {
                                  setShowBAOverlay(true);
                                }
                                if (item === 'Large PA & Line Arrays') {
                                  setShowPAOverlay(true);
                                }
                                if (item === 'Projection') {
                                  setShowProjectionOverlay(true);
                                }
                                if (item === 'LED & Video wall') {
                                  setShowLEDOverlay(true);
                                }
                                if (item === 'Commercial TV Screens') {
                                  setShowTVOverlay(true);
                                }
                                if (item === 'Interactive Touch Screens') {
                                  setShowTouchOverlay(true);
                                }
                                if (item === 'Digital Signage') {
                                  setShowSignageOverlay(true);
                                }
                                if (item === 'Stage & Concert Lighting') {
                                  setShowLightingOverlay(true);
                                }
                              }}
                              className="px-4 py-2 hover:bg-accent/10 text-white cursor-pointer text-sm"
                            >
                              {item}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else if (link.dropdown === 'it') {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setItDropdownOpen(true)}
                    onMouseLeave={() => setItDropdownOpen(false)}
                  >
                    <button
                      className={`text-white hover:text-accent transition-colors duration-300 relative group flex items-center ${
                        activeLink === link.href.slice(1) ? 'text-accent' : ''
                      }`}
                    >
                      {link.icon}
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
                          className="absolute left-0 mt-2 w-64 bg-[#374151] shadow-lg rounded-lg py-2 z-50"
                        >
                          {itDropdownItems.map((item) => (
                            <div
                              key={item}
                              onClick={() => {
                                if (item === 'Web Development') {
                                  setShowWebDevOverlay(true);
                                }
                                if (item === 'Application Integration') {
                                  setShowAppIntegrationOverlay(true);
                                }
                                if (item === 'Web Services') {
                                  setShowWebServicesOverlay(true);
                                }
                                if (item === "REST API's") {
                                  setShowRestApiOverlay(true);
                                }
                              }}
                              className="px-4 py-2 hover:bg-accent/10 text-white cursor-pointer text-sm"
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
                      className={`text-white hover:text-accent transition-colors duration-300 relative group flex items-center ${
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
                          className="absolute left-0 mt-2 w-64 bg-[#374151] shadow-lg rounded-lg py-2 z-50"
                        >
                          {interiorDropdownItems.map((item) => (
                            <div
                              key={item}
                              onClick={() => {
                                if (item === 'Work Stations') {
                                  setShowWorkStationsOverlay(true);
                                }
                                if (item === 'Office Table & Chairs') {
                                  setShowOfficeTableOverlay(true);
                                }
                                if (item === 'Cupboard & Storage Racks') {
                                  setShowCupboardOverlay(true);
                                }
                                if (item === 'Computer Table & Study Desks') {
                                  setShowComputerTableOverlay(true);
                                }
                                if (item === 'Data Center Storage Racks') {
                                  setShowDataCenterOverlay(true);
                                }
                                if (item === "Customized all kinds of Furniture's.") {
                                  setShowCustomFurnitureOverlay(true);
                                }
                              }}
                              className="px-4 py-2 hover:bg-accent/10 text-white cursor-pointer text-sm"
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
                    className={`text-white hover:text-accent transition-colors duration-300 relative group flex items-center ${
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
                  <FaTimes className="w-5 h-5 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="w-5 h-5 text-white" />
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
                          className="flex items-center w-full text-white hover:text-accent transition-colors duration-300"
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
                              className="pl-6 bg-[#374151] rounded-lg"
                            >
                              {avDropdownItems.map((item) => (
                                <div
                                  key={item}
                                  onClick={() => {
                                    if (item === 'Video Conferencing') {
                                      setShowVCOverlay(true);
                                    }
                                    if (item === 'Background Audio') {
                                      setShowBAOverlay(true);
                                    }
                                    if (item === 'Large PA & Line Arrays') {
                                      setShowPAOverlay(true);
                                    }
                                    if (item === 'Projection') {
                                      setShowProjectionOverlay(true);
                                    }
                                    if (item === 'LED & Video wall') {
                                      setShowLEDOverlay(true);
                                    }
                                    if (item === 'Commercial TV Screens') {
                                      setShowTVOverlay(true);
                                    }
                                    if (item === 'Interactive Touch Screens') {
                                      setShowTouchOverlay(true);
                                    }
                                    if (item === 'Digital Signage') {
                                      setShowSignageOverlay(true);
                                    }
                                    if (item === 'Stage & Concert Lighting') {
                                      setShowLightingOverlay(true);
                                    }
                                  }}
                                  className="py-2 text-white text-sm hover:text-accent cursor-pointer"
                                >
                                  {item}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  } else if (link.dropdown === 'it') {
                    return (
                      <div key={link.href}>
                        <button
                          className="flex items-center w-full text-white hover:text-accent transition-colors duration-300"
                          onClick={() => setItDropdownMobileOpen((open) => !open)}
                        >
                          {link.icon}
                          {link.label}
                          <FaChevronDown className="ml-1 text-xs" />
                        </button>
                        <AnimatePresence>
                          {itDropdownMobileOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-6 bg-[#374151] rounded-lg"
                            >
                              {itDropdownItems.map((item) => (
                                <div
                                  key={item}
                                  onClick={() => {
                                    if (item === 'Web Development') {
                                      setShowWebDevOverlay(true);
                                    }
                                    if (item === 'Application Integration') {
                                      setShowAppIntegrationOverlay(true);
                                    }
                                    if (item === 'Web Services') {
                                      setShowWebServicesOverlay(true);
                                    }
                                    if (item === "REST API's") {
                                      setShowRestApiOverlay(true);
                                    }
                                  }}
                                  className="py-2 text-white text-sm hover:text-accent cursor-pointer"
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
                          className="flex items-center w-full text-white hover:text-accent transition-colors duration-300"
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
                              className="pl-6 bg-[#374151] rounded-lg"
                            >
                              {interiorDropdownItems.map((item) => (
                                <div
                                  key={item}
                                  onClick={() => {
                                    if (item === 'Work Stations') {
                                      setShowWorkStationsOverlay(true);
                                    }
                                    if (item === 'Office Table & Chairs') {
                                      setShowOfficeTableOverlay(true);
                                    }
                                    if (item === 'Cupboard & Storage Racks') {
                                      setShowCupboardOverlay(true);
                                    }
                                    if (item === 'Computer Table & Study Desks') {
                                      setShowComputerTableOverlay(true);
                                    }
                                    if (item === 'Data Center Storage Racks') {
                                      setShowDataCenterOverlay(true);
                                    }
                                    if (item === "Customized all kinds of Furniture's.") {
                                      setShowCustomFurnitureOverlay(true);
                                    }
                                  }}
                                  className="py-2 text-white text-sm hover:text-accent cursor-pointer"
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
                        className={`block text-white hover:text-accent transition-colors duration-300 flex items-center ${
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

      {/* Render the full-page overlay for Video Conferencing */}
      <FullPageOverlay
        isOpen={showVCOverlay}
        onClose={() => setShowVCOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Video Conferencing"
      >
        Workplace communications are undergoing substantial transformations. Many people are now working remote, or from a home office. Corporate institutions are also finding they need to add more huddle and VC rooms in their head offices to accommodate rapid changes.<br /><br />The need for collaborative document sharing, ad hoc remote meetings, attendees from all different locations has increased tenfold.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showBAOverlay}
        onClose={() => setShowBAOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Background Audio"
      >
        The soundscape of modern life is constantly evolving. With the rise of open-plan offices, co-working spaces, and the increasing prevalence of remote work, managing ambient sound has become a significant consideration. Individuals often seek solutions to minimize distractions and enhance focus, while businesses look to create more productive and comfortable environments, whether through noise-masking technologies or curated soundscapes for relaxation and concentration.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showPAOverlay}
        onClose={() => setShowPAOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Large PA & Line Arrays"
      >
        Our team has experience with the design and commissioning of Sound Reinforcement System for auditoriums, performing arts canters, houses of worship, community halls, sporting facilities and anywhere full music quality amplification is required. Speaker technologies include line, fixed, and beam steerable arrays.<br /><br />Point sources from mono, through to surround sound. Foldback and monitor speakers, literally whatever your requirements are we can design a sound reinforcement system to suit your venue.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showProjectionOverlay}
        onClose={() => setShowProjectionOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Projection"
      >
        We access to the latest Projection technologies including LCD and DLP units from all major manufacturers including Epson, Panasonic, Sony, Delta, Barco, BenQ, Optoma, Canon, NEC, Christie Digital. Our consultation and design team can assist in providing the most suitable projector for any venue, meeting or classroom installation.<br /><br />Software reports can calculate outputs and image sizes, which can then be matched to appropriate screens in our design services. We also carry a large range of mounting and rigging solutions.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showLEDOverlay}
        onClose={() => setShowLEDOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="LED & Video wall"
      >
        LED Screens can be used for major impact both indoors and outdoors. Advertising, Auditoriums, Sports Venues, Command Centres, Conference Rooms. Hotels, Churches, and Universities are all candidates for Led screens. We offer a wide range of different screen sizes, pixel spacings, indoor or outdoor solutions.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showTVOverlay}
        onClose={() => setShowTVOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Commercial TV Screens"
      >
        We distribute all major brands and sizes of Commercial TV screens. Leading products such as LG, Samsung, Sony, Panasonic, NEC, ViewSonic and Philips are available.<br /><br />Commercial Displays differ from domestic TV displays by upgraded power supplies, higher outputs and anti-reflection glass. Options suitable for portrait or landscape orientation and exterior use. Commercial grade screens come with either 18/7- & 24/7-hour usage warranties.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showTouchOverlay}
        onClose={() => setShowTouchOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Interactive Touch Screens"
      >
        The way you communicate and collaborate on an interactive display which combines high-quality advanced technology with a familiar user experience to enhance presentations, meetings, and in class lessons. We have range of different brands with flexible size panels to match our customers individually requirements.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showSignageOverlay}
        onClose={() => setShowSignageOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Digital Signage"
      >
        We are at the forefront in offering Digital Signage Display Solutions. From a single Information Display with a Digital Media Player, to a fully networked site running multiple screens across the country. Clients can create In-House Digital Content that can be scheduled to automatically run through your own managed network providing a low cost of ownership and high return on investment.<br /><br />We do Consult & Design, Supply, Install, Commission and Service all the necessary hardware and peripherals required to provide a personalised, innovative, and effective Digital Signage solution.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showLightingOverlay}
        onClose={() => setShowLightingOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Stage & Concert Lighting"
      >
        Our team has extensive experience with consulting, design, installation, and operation of complex performance lighting systems. This covers venues including theatres, Auditoriums, performing arts centres, community halls and houses of worship.<br /><br />Technologies include fixed and moving head lighting, follow spots right through to cyclorama lighting.. Supporting services include power distribution and dimming systems, fixed and motorised lighting bars, computerised and manual control systems, rigging, drapes, cyclorama, and talk-back communication systems.<br /><br />Whatever your requirements we can design a performance lighting system to suit your specific venue.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showWorkStationsOverlay}
        onClose={() => setShowWorkStationsOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Work Stations"
      >
        The traditional office cubicle is rapidly being re-imagined. As workforces become more mobile and flexible, there's a growing demand for adaptable and ergonomically designed workstations. This includes everything from standing desks and treadmill desks to modular furniture that can be easily reconfigured for collaborative projects or individual focus. Companies are investing in creating dynamic workspaces that prioritize employee well-being, productivity, and the seamless integration of technology, catering to a diverse range of work styles and preferences.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showOfficeTableOverlay}
        onClose={() => setShowOfficeTableOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Office Table & Chairs"
      >
        The Indian office furniture market is experiencing significant growth, driven by the expanding corporate sector, the rise of startups and SMEs, and the increasing adoption of hybrid work models. There's a strong demand for modern, ergonomic, and modular designs that promote productivity and employee well-being. Office tables are seeing a surge in demand for modular and collaborative designs, catering to the popularity of open-plan offices. Similarly, ergonomic office chairs are a high-growth segment, with a projected market size of USD 2.72 billion by 2035. Companies are prioritizing furniture that integrates technology (e.g., built-in power outlets, wireless charging) and incorporates sustainable, eco-friendly materials.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showCupboardOverlay}
        onClose={() => setShowCupboardOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Cupboard & Storage Racks"
      >
        As workspaces evolve to be more flexible and dynamic, so does the need for versatile storage solutions. Modular cabinets, shelves on wheels, and lightweight storage units are gaining popularity, allowing for easy rearrangement and adaptation to changing office layouts and employee needs. There's a focus on maximizing space utilization and maintaining a clean, uncluttered aesthetic in both traditional and hybrid work environments.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showComputerTableOverlay}
        onClose={() => setShowComputerTableOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Computer Table & Study Desks"
      >
        The rise of remote work and home offices has significantly boosted the demand for functional and comfortable computer tables and study desks. Consumers are looking for designs that fit seamlessly into residential spaces while offering ergonomic features like adjustable height. The market also sees a preference for versatile designs that can accommodate various setups, from basic laptop use to more elaborate multi-monitor workstations.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showDataCenterOverlay}
        onClose={() => setShowDataCenterOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Data Center Storage Racks"
      >
        The data center rack market in India is experiencing robust growth, propelled by the nation's rapid digital transformation, increasing adoption of cloud computing, and the proliferation of internet and mobile users. The demand for high-performance storage and server infrastructure is escalating, with rack density requirements increasing to meet the higher computing demands of AI and machine learning. Full racks are the dominant segment, driven by hyperscalers and colocation providers optimizing rack space and lowering per-unit prices. Chennai is noted as a rapidly growing city for data center expansion, while Mumbai remains a major hub due to its strategic coastal position for international data transfer. The market is expected to reach approximately USD 11.96 billion by 2031, with IT and Telecom being the dominant end-user segment.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showCustomFurnitureOverlay}
        onClose={() => setShowCustomFurnitureOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Customized all kinds of Furniture's"
      >
        The custom furniture market in India is thriving, fueled by increasing disposable incomes, urbanization, and a growing consumer desire for personalized and unique designs. Customers are seeking furniture that reflects their individual style and seamlessly fits into specific spaces, especially in urban areas with unique layouts. This has created significant opportunities for custom furniture makers who can work directly with clients to create bespoke pieces. From custom wooden furniture to specialized designs incorporating various materials, the market caters to both residential and commercial needs. While custom furniture may have a higher cost, its advantages in terms of tailored fit, personalized design, quality assurance, and exclusivity are driving its demand. The custom furniture market is expected to grow, with the Asia Pacific region, including India, showing the fastest growth.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showWebDevOverlay}
        onClose={() => setShowWebDevOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Web Development"
      >
        We craft dynamic and engaging web experiences that captivate your audience and drive business growth. From intuitive user interfaces (UI) and seamless user experiences (UX) to robust, scalable backends, our web development services ensure your online presence is powerful, responsive across all devices, and optimized for performance in today's fast-paced digital landscape.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showAppIntegrationOverlay}
        onClose={() => setShowAppIntegrationOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Application Integration"
      >
        Break down data silos and streamline your business operations with our expert application integration services. We connect disparate software systems – from cloud-based platforms like Salesforce and SAP to your legacy on-premise applications – creating seamless workflows and enabling real-time data exchange for enhanced efficiency and informed decision-making.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showWebServicesOverlay}
        onClose={() => setShowWebServicesOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="Web Services"
      >
        Unlock the full potential of your digital ecosystem with our comprehensive web services. We build secure, reliable, and high-performance APIs that facilitate seamless communication between your applications, partners, and third-party platforms. Our web services are designed for interoperability, scalability, and robust data exchange, powering your distributed systems.
      </FullPageOverlay>

      <FullPageOverlay
        isOpen={showRestApiOverlay}
        onClose={() => setShowRestApiOverlay(false)}
        imageUrls={["/vc.png", "/vc2.png"]}
        title="REST APIs"
      >
        Leverage the power of industry-standard REST APIs to connect your applications and innovate faster. Our REST API development and integration services focus on creating well-documented, secure, and efficient interfaces that enable seamless data flow, support mobile and web applications, and empower your business to build connected, future-proof digital solutions.
      </FullPageOverlay>
    </motion.nav>
  );
} 