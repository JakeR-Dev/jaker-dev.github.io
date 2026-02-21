'use client';
import { useRef, useEffect } from 'react';
import { usePageLoad } from '../../../utils/page-load-context';
import './cursor.scss';

export default function Cursor() {
  const cursorRef = useRef(null);
  const { cursorClass, setCursorClass } = usePageLoad();

  useEffect(() => {
    // Set initial cursor class when component mounts
    setCursorClass('enter');

    // mouse move
    const handleMouseMove = (event) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = event.clientX + "px";
      cursorRef.current.style.top = event.clientY + "px";
    };

    // mouse leave viewport
    const handleMouseLeave = () => {
      if (!cursorRef.current) return;
      setCursorClass('leave');
    };

    // mouse enter viewport
    const handleMouseEnter = () => {
      setCursorClass('enter');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [setCursorClass]);

  return (
    <div ref={cursorRef} id="cursor" className="cursor" aria-hidden="true">
      <div id="circle1" className={`circle ${cursorClass}`}></div>
    </div>
  );
}