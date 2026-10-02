import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-outline-variant/60 py-10 mt-16 bg-background">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="text-center md:text-left">
          <span className="text-base sm:text-lg font-bold text-primary tracking-tight block">
            Kapil Dharme
          </span>
          <p className="text-xs sm:text-sm text-secondary mt-1 leading-relaxed">
            CSE Undergrad &amp; MERN Stack Developer{' '}
            <span className="hidden xs:inline text-outline-variant">•</span>{' '}
            <span className="block xs:inline text-secondary/80">{new Date().getFullYear()}</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-sm font-medium text-secondary">
          <a
            href="https://github.com/Kapil-dharme"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#resume"
            className="hover:text-primary transition-colors"
          >
            Resume
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-primary transition-colors px-3 py-1.5 rounded-full hover:bg-surface-container-high active:scale-95 cursor-pointer"
          >
            <span>Back to top</span>
            <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
}