'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const PageLoadContext = createContext();

export function PageLoadProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [borderMe, setBorderMe] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // On initial mount
    setIsLoaded(true);
    setBorderMe(true);
  }, []);

  useEffect(() => {
    // On route change
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 10);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <PageLoadContext.Provider value={{ isLoaded, setIsLoaded, borderMe, setBorderMe }}>
      {children}
    </PageLoadContext.Provider>
  );
}

export function usePageLoad() {
  const context = useContext(PageLoadContext);
  if (!context) {
    throw new Error('usePageLoad must be used within PageLoadProvider');
  }
  return context;
}
