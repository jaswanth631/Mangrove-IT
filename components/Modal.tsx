'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  imageUrl?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, imageUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl p-0 m-4 text-slate-800 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-6 pt-6 pb-2">
              <h3 className="text-2xl font-bold text-primary">{title}</h3>
              <button
                onClick={onClose}
                className="text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col md:flex-row">
              {imageUrl && (
                <div className="md:w-1/2 w-full h-48 md:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
              )}
              <div className={`p-6 ${imageUrl ? 'md:w-1/2 w-full' : 'w-full'}`}>
                {children}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal; 