import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative overflow-hidden group px-8 py-3 rounded-lg text-text font-medium
        transition-all duration-300 border border-accent/20
        ${disabled 
          ? 'bg-background-dark/50 cursor-not-allowed' 
          : 'bg-gradient-to-r from-background-dark to-background-darker hover:from-background-darker hover:to-background-dark'
        }
        ${className}
      `}
    >
      <span className="absolute inset-0 bg-accent/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      <span className="relative flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
};

export default GradientButton; 