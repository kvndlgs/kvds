'use client';

import { useState } from 'react';
import { NavContext } from '@/lib/NavContext';

export default function NavWrapper({ children }: { children: React.ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <NavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </NavContext.Provider>
  );
}