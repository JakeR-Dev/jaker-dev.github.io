'use client';
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const PageLoadContext = createContext();

export function PageLoadProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [borderMe, setBorderMe] = useState(false);
  const pathname = usePathname();
  const isFirstMount = useRef(true);

  useEffect(() => {
    // On initial mount
    setBorderMe(true);
    setTimeout(() => {
      setIsLoaded(true);
    }, 700);
  }, []);
  
  useEffect(() => {
    // Skip on first mount
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    // On route change only
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 100);
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
