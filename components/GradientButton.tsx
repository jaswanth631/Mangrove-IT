import React from "react";
import { motion } from "framer-motion";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
      whileHover={{ 
        scale: 1.05,
        y: -2,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {children}
    </motion.button>
  );
};

export default GradientButton;
