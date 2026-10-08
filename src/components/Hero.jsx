import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col pt-3 pb-12 md:py-12 md:justify-center md:min-h-[calc(100vh-7rem)] md:min-h-[calc(100dvh-7rem)] max-w-5xl"
    >
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.15] sm:leading-[1.1] mb-4 md:mb-5">
        <span className="font-bold text-primary">Developer</span>{' '}
        <span className="font-normal text-secondary/60">shipping</span>{' '}
        <br className="hidden sm:inline" />
        <span className="font-bold text-primary">production-ready </span>{' '}
        <span className="font-normal text-secondary/60">apps</span>{' '}
        <br className="hidden sm:inline" />
        <span className="font-normal text-secondary/60">built for</span>{' '}
        <span className="font-bold text-primary">real scale</span>
        <span className="font-normal text-secondary/40">.</span>
      </h1>

      <p className="font-body-lg text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mb-6 md:mb-8 leading-relaxed">
        Production-Grade MERN Stack Developer, Experienced in handling live, active users and scaling full-stack applications at a product level.
      </p>

      <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 md:gap-4 w-full sm:w-auto">
        <a
          className="inline-flex justify-center items-center gap-2 bg-primary text-on-primary text-label-caps px-6 py-3 rounded-full hover:bg-secondary transition-all duration-200 active:scale-95 shadow-sm text-sm"
          href="/My_resume.pdf"
          download="My_resume.pdf"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          Download Resume
        </a>


        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            className="flex-1 sm:flex-initial inline-flex justify-center items-center gap-2 border border-outline-variant hover:border-primary text-primary bg-transparent text-label-caps px-5 py-3 rounded-full hover:bg-surface-container-high transition-all duration-200 active:scale-95 text-sm"
            href="https://github.com/Kapil-dharme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">code</span>
            GitHub
          </a>
          <a
            className="flex-1 sm:flex-initial inline-flex justify-center items-center gap-2 border border-outline-variant hover:border-primary text-primary bg-transparent text-label-caps px-5 py-3 rounded-full hover:bg-surface-container-high transition-all duration-200 active:scale-95 text-sm"
            href="https://www.linkedin.com/in/kapil-dharme-a52a1336a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">group</span>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}