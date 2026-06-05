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
        className="p-3 bg-white/90 border border-neutral-200/10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-1000 ease-in-out shadow-md hover:scale-105 active:scale-95 group pointer-events-auto origin-center"
      >
        <img src="/menu.png" alt="Menu" className="w-6 h-6 object-contain" />
      </button>
    </div>
  );
}
