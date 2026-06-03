'use client';
import { useEffect, useRef } from 'react';
import './animatedShadowText.scss';

export const AnimatedShadowText = ({ hTag, children, className }) => {
  const shadowTextEl = useRef(null);
  const shadowShift = 0.012;
  const tiltShift = 1.2;
  const HTag = hTag ?? 'h1';

  const animatedShadow = (event) => {
    if (!shadowTextEl.current) return;

    // Get center of viewport
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;
    // Calculate relative shadow position
    const shadowX = (event.clientX - viewportCenterX) * shadowShift;
    const shadowY = (event.clientY - viewportCenterY) * shadowShift;
    // Calculate tilt based on cursor position
    const tiltX = ((event.clientY - viewportCenterY) / viewportCenterY) * tiltShift;
    const tiltY = ((event.clientX - viewportCenterX) / viewportCenterX) * -tiltShift;
    // Construct dynamic shadow position and tilt transform
    const shadowPosition = `${shadowX}px ${shadowY}px 0px var(--color-gray)`;
    const transformPosition = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    // Set the new shadow and transform styles
    shadowTextEl.current.style.textShadow = shadowPosition;
    shadowTextEl.current.style.transform = transformPosition;
  };

  // Init on mount
  useEffect(() => {
    document.addEventListener('mousemove', animatedShadow);

    // Clean up on dismount
    return () => {
      document.removeEventListener('mousemove', animatedShadow);
    };
  }, []);
  
  return (
    <HTag className={className}><span ref={shadowTextEl} className="animated-shadow-text">{children}</span></HTag>
  );
};