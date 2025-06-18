"use client";

import React, { createContext, useState, useCallback } from 'react';

interface DropdownContextType {
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
}

export const DropdownContext = createContext<DropdownContextType>({
  dropdownOpen: false,
  setDropdownOpen: () => {},
});

export const DropdownProvider = ({ children }: { children: React.ReactNode }) => {
  const [dropdownOpen, setDropdownOpenState] = useState(false);
  const setDropdownOpen = useCallback((open: boolean) => {
    setDropdownOpenState(open);
  }, []);

  return (
    <DropdownContext.Provider value={{ dropdownOpen, setDropdownOpen }}>
      {children}
    </DropdownContext.Provider>
  );
}; 