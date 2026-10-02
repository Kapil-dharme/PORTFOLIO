import React, { useState } from 'react';

export default function Navbar({ onOpenContact }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 w-full flex flex-col items-center">
      <nav className="w-full flex justify-between items-center px-6 md:px-8 py-3 md:py-3.5 bg-background/80 backdrop-blur-md max-w-container-max border border-outline-variant rounded-full shadow-sm">
        <a
          className="text-label-caps tracking-widest bg-primary text-on-primary px-4 py-2 rounded-full text-xs sm:text-sm whitespace-nowrap"
          href="#"
          onClick={closeMenu}
        >
          Kapil Dharme
        </a>

        <div className="hidden md:flex items-center gap-7 lg:gap-8">
          <a
            className="text-label-caps text-secondary hover:text-primary transition-colors duration-200"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-label-caps text-secondary hover:text-primary transition-colors duration-200"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-label-caps text-secondary hover:text-primary transition-colors duration-200"
            href="#achievements"
          >
            Achievements
          </a>
          <a
            className="text-label-caps text-secondary hover:text-primary transition-colors duration-200"
            href="#about"
          >
            About
          </a>
          <button
            type="button"
            className="text-label-caps text-secondary hover:text-primary transition-colors duration-200 cursor-pointer"
            onClick={onOpenContact}
          >
            Contact
          </button>
        </div>

        <a
          className="hidden md:inline-flex text-label-caps bg-primary text-on-primary px-5 py-2 rounded-full hover:bg-secondary transition-colors duration-200 scale-95 active:opacity-80"
          href="#resume"
        >
          Resume
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center p-2 rounded-full text-secondary hover:text-primary transition-colors focus:outline-none cursor-pointer"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>


      {isOpen && (
        <div className="md:hidden mt-2 w-full max-w-container-max bg-background/95 backdrop-blur-md border border-outline-variant rounded-2xl shadow-lg p-5 flex flex-col gap-3 transition-all duration-200">
          <a
            className="text-label-caps text-secondary hover:text-primary px-3 py-2.5 rounded-lg hover:bg-surface-container-high transition-colors"
            href="#skills"
            onClick={closeMenu}
          >
            Skills
          </a>
          <a
            className="text-label-caps text-secondary hover:text-primary px-3 py-2.5 rounded-lg hover:bg-surface-container-high transition-colors"
            href="#projects"
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            className="text-label-caps text-secondary hover:text-primary px-3 py-2.5 rounded-lg hover:bg-surface-container-high transition-colors"
            href="#achievements"
            onClick={closeMenu}
          >
            Achievements
          </a>
          <a
            className="text-label-caps text-secondary hover:text-primary px-3 py-2.5 rounded-lg hover:bg-surface-container-high transition-colors"
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>
          <button
            type="button"
            className="text-left text-label-caps text-secondary hover:text-primary px-3 py-2.5 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer"
            onClick={() => {
              closeMenu();
              if (onOpenContact) onOpenContact();
            }}
          >
            Contact
          </button>

          <div className="pt-2 border-t border-outline-variant/60">
            <a
              className="text-center block text-label-caps bg-primary text-on-primary py-2.5 rounded-full hover:bg-secondary transition-colors duration-200"
              href="#resume"
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
