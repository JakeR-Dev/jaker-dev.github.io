'use client';
import { useState } from 'react';
import Image from 'next/image';
import './header.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* menu toggler */}
      <button 
        onClick={toggleMenu}
        className="fixed grid grid-cols-3 right-[2rem] top-[2rem] gap-[4px] w-[2rem] h-[2rem] overflow-hidden z-2 cursor-pointer" 
        id="menu-toggle"
        aria-label="open menu" 
        aria-expanded={isMenuOpen}
      >
        <span className="toggle-dot block w-[8px] h-[8px] bg-charcoal rounded-full" aria-hidden></span>
        <span className="toggle-dot block w-[8px] h-[8px] bg-charcoal rounded-full" aria-hidden></span>
        <span className="toggle-dot block w-[8px] h-[8px] bg-charcoal rounded-full" aria-hidden></span>
        <span className="toggle-dot block w-[8px] h-[8px] bg-charcoal rounded-full" aria-hidden></span>
        <span className="toggle-dot block w-[8px] h-[8px] bg-charcoal rounded-full plus-hover relative" aria-hidden></span>
        <span className="toggle-dot block w-[8px] h-[8px] bg-charcoal rounded-full" aria-hidden></span>
        <span className="toggle-dot block w-[8px] h-[8px] bg-charcoal rounded-full" aria-hidden></span>
        <span className="toggle-dot block w-[8px] h-[8px] bg-charcoal rounded-full" aria-hidden></span>
        <span className="toggle-dot block w-[8px] h-[8px] bg-charcoal rounded-full" aria-hidden></span>
      </button>
      {/* menu */}
      <aside id="menu" className={`fixed top-0 left-[-100vw] w-screen h-screen bg-cream z-1 overflow-hidden opacity-1 pointer-events-none ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="menu-inner pt-[5rem] px-[2rem] pb-[2rem] md:pt-[4rem] md:px-[3rem] md:pb-[3rem] lg:p-[4rem]">
          <ul>
            <li>
              <a href="#hero" onClick={toggleMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li>
              <a href="#work" onClick={toggleMenu}>Work</a>
            </li>
          </ul>
          <a className="social inline-block" href="https://www.linkedin.com/in/jakepotterryan/" target="_blank" aria-label="Visit my LinkedIn profile">
            <Image
              className="inline-block max-w-[24px] max-h-[24px] mt-[2rem] rounded-[4px] rounded-tr-none mr-4"
              src="/linkedin-black.png"
              alt="visit my linkedin profile"
              width="24"
              height="24"
            />
          </a>
          <a className="social inline-block" href="https://github.com/JakeR-Dev" target="_blank" aria-label="Visit my GitHub profile">
            <Image
              className="inline-block max-w-[24px] max-h-[24px] mt-[2rem] rounded-[4px] rounded-tr-none mr-4"
              src="/github-black.png"
              alt="visit my github profile"
              width="24"
              height="24"
            />
          </a>
          <a className="social inline-block" href="email-me" target="_blank" aria-label="Shoot me an email" id="email-me" rel="noopener noreferrer">
            <Image
              className="inline-block max-w-[24px] max-h-[24px] mt-[2rem] rounded-[4px] rounded-tr-none mr-4"
              src="/email-black.png"
              alt="send me an email"
              width="24"
              height="24"
            />
          </a>
        </div>
      </aside>
    </header>
  );
}