'use client';

import { createContext, useContext } from 'react';

interface NavContextType {
  isNavOpen: boolean;
  setIsNavOpen: (isOpen: boolean) => void;
}

export const NavContext = createContext<NavContextType | undefined>(undefined);

export function useNav() {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error('useNav must be used within a NavProvider');
  }
  return context;
}