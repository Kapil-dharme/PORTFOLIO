import React from 'react';

export default function FloatingContactButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open contact modal"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl hover:bg-secondary transition-all duration-200 active:scale-95 cursor-pointer text-sm font-semibold"
    >
      <span className="material-symbols-outlined text-[20px]">chat</span>
      <span className="hidden sm:inline">Let's Talk</span>
    </button>
  );
}
