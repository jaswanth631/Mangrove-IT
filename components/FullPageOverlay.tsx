'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface FullPageOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrls: string[];
  title: string;
  children: React.ReactNode;
}

const FullPageOverlay: React.FC<FullPageOverlayProps> = ({ isOpen, onClose, imageUrls, title, children }) => {
  const [current, setCurrent] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;
    if (userInteractedRef.current) return;
    autoScrollRef.current = setInterval(() => {
      setCurrent((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isOpen, imageUrls.length]);

  const prevImage = () => {
    userInteractedRef.current = true;
    setCurrent((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };
  const nextImage = () => {
    userInteractedRef.current = true;
    setCurrent((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-lg">
      <div className="relative w-full h-full flex flex-col md:flex-row bg-white shadow-2xl">
        <div className="md:w-1/2 w-full h-64 md:h-full bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: `url(${imageUrls[current]})` }}>
          {imageUrls.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-primary rounded-full p-2 shadow transition-all"><FaChevronLeft /></button>
              <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-primary rounded-full p-2 shadow transition-all"><FaChevronRight /></button>
            </>
          )}
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors z-10"
            aria-label="Close overlay"
          >
            <FaTimes className="w-7 h-7" />
          </button>
          <h2 className="text-3xl font-bold mb-6 text-primary">{title}</h2>
          <div className="text-lg text-slate-800 mb-8">{children}</div>
          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-accent transition-colors text-center w-max self-start"
            onClick={e => {
              e.preventDefault();
              onClose();
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 300);
            }}
          >Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default FullPageOverlay; 