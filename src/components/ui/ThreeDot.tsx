import React from "react";

export default function ThreeDot({ setMenuOpen, menuOpen }: any) {
  return (
    <div className="fixed top-5 right-5 z-50 pointer-events-none">
      <button
        onClick={() => setMenuOpen(true)}
        style={{
          transform: menuOpen
            ? "scale(0) rotate(180deg)"
            : "scale(1) rotate(0deg)",
          opacity: menuOpen ? 0 : 1,
        }}
        className="p-3 bg-white/70 border border-neutral-200/10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ease-out shadow-md hover:scale-105 active:scale-95 group pointer-events-auto origin-center"
        aria-label="Open Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          color="currentColor"
          className="rotate-180"
        >
          <path
            d="M4 5L16 5"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          ></path>
          <path
            d="M4 12L20 12"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          ></path>
          <path
            d="M4 19L12 19"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          ></path>
        </svg>
      </button>
    </div>
  );
}
