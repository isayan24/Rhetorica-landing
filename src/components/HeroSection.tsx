"use client";

import React from "react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center p-6 md:p-12 overflow-hidden bg-bottom bg-cover bg-[url('/bg-image-mobile.png')] md:bg-[url('/bg-image.png')]"
    >
      {/* Title container placed at the upper portion */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mt-20 md:mt-24">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="font-pirata text-8xl md:text-9xl tracking-wide text-neutral-900 select-none drop-shadow-md text-center"
        >
          Rhetorica
        </motion.h1>
      </div>
    </section>
  );
};
