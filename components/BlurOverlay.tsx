"use client";
import React, { useContext } from "react";
import { DropdownContext } from "../context/DropdownContext";

export default function BlurOverlay() {
  const { dropdownOpen } = useContext(DropdownContext);
  if (!dropdownOpen) return null;
  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-[6px] transition-all duration-300" />
  );
} 