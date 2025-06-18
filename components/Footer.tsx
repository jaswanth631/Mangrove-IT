'use client';

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mangrove IT</h3>
            <p className="text-gray-300 mb-4">
              Professional IT solutions provider specializing in AV integration, security systems, and industrial computing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition duration-300">
                <FaEnvelope className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition duration-300">
                <FaPhone className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition duration-300">
                <FaMapMarkerAlt className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-accent transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-accent transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-accent" />
                <span className="text-gray-300">info@mangroveit.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-accent" />
                <span className="text-gray-300">+123 456 7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-accent" />
                <span className="text-gray-300">123 Business Street, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Mangrove IT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 