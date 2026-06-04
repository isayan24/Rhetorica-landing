"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";

import { NavigationDrawer } from "../components/NavigationDrawer";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { EditionSection } from "../components/EditionSection";
import { CountdownSection } from "../components/CountdownSection";
import { EventsSection } from "../components/EventsSection";
import { CollaborationsSection } from "../components/CollaborationsSection";
import { MapSection } from "../components/MapSection";
import { FooterSection } from "../components/FooterSection";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-900 selection:bg-[#a38965] selection:text-white font-sans overflow-x-hidden">
      
      {/* Navigation Overlay Menu Button */}
      <div className="fixed top-5 right-5 z-50 pointer-events-none">
        <button
          onClick={() => setMenuOpen(true)}
          style={{
            transform: menuOpen ? "scale(0) rotate(-180deg)" : "scale(1) rotate(0deg)",
            opacity: menuOpen ? 0 : 1,
          }}
          className="p-3 bg-white/70 hover:bg-[#a38965] hover:text-white border border-neutral-200/10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ease-out shadow-md hover:scale-105 active:scale-95 group pointer-events-auto origin-center"
          aria-label="Open Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" color="currentColor" className="rotate-180">
            <path d="M4 5L16 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
            <path d="M4 12L20 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
            <path d="M4 19L12 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
          </svg>
        </button>
      </div>

      {/* Modular Navigation Drawer */}
      <NavigationDrawer
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onScrollTo={scrollToSection}
      />

      {/* Modular Hero Section */}
      <HeroSection />

      {/* Modular About Section */}
      <AboutSection />

      {/* Modular Stats Grid / Edition Section */}
      <EditionSection />

      {/* Modular Countdown Section */}
      <CountdownSection />

      {/* Modular Events Carousel Section */}
      <EventsSection />

      {/* Modular Collaborations Section */}
      <CollaborationsSection />

      {/* Modular Light-Themed Map & Guide Section */}
      <MapSection />

      {/* Modular Footer Section */}
      <FooterSection onScrollTo={scrollToSection} />

    </div>
  );
}
