'use client';
import { useEffect, useState } from 'react';
import './body.scss';

export default function BodyWrapper({ children, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded after initial mount
    setIsLoaded(true);
  }, []);

  return (
    <body className={`${className} ${isLoaded ? 'show-me' : ''}`}>
      {children}
    </body>
  );
}