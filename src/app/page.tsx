"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";

import { NavigationDrawer } from "../components/NavigationDrawer";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { EditionSection } from "../components/EditionSection";
import { CountdownSection } from "../components/CountdownSection";
// import { EventsSection } from "../components/EventsSection";
import { CollaborationsSection } from "../components/CollaborationsSection";
import { MapSection } from "../components/MapSection";
import { FooterSection } from "../components/FooterSection";
import ThreeDot from "@/components/ui/ThreeDot";
import ImageCoursal from "@/components/ImageCoursal";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-900 selection:bg-[#a38965] selection:text-white font-sans overflow-x-hidden">
      {/* Navigation Overlay Menu Button */}
      <ThreeDot menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Navigation Drawer */}
      <NavigationDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <HeroSection />

      <AboutSection />

      <EditionSection />

      <CountdownSection />

      <ImageCoursal />

      <CollaborationsSection />

      <MapSection />

      <FooterSection />
    </div>
  );
}
