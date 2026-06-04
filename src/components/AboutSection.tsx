"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const aboutText = `Rhetorica '26 is the Fifth Edition of the Annual Literary Festival of Techno International New Town, organised by LITWITS, the Literary Club of Techno International New Town. Scheduled for 20th and 21st January 2026, the festival features a diverse lineup of events including debate, poetry, storytelling, and creative writing - creating a platform where voices rise, ideas clash, and the transformative power of words takes center stage. Whether you're a seasoned performer or a first-time participant, Rhetorica is where the literary community comes alive.`;

  return (
    <div
      id="about"
      ref={containerRef}
      className="flex flex-col md:flex-row px-6 md:px-20  items-center md:items-start gap-20 py-24"
    >
      {/* Title with left slide transition */}
      <motion.h1
        initial={{ opacity: 0, x: -70 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-pirata text-5xl shrink-0"
      >
        About
      </motion.h1>

      <div className="font-montserrat font-medium text-base text-center md:text-start md:text-xl text-neutral-400 leading-relaxed flex flex-wrap gap-x-1.5 gap-y-2 w-full">
        <motion.span
          initial={{ opacity: 0.25, color: "rgba(156, 163, 175, 1)" }}
          animate={isInView ? { opacity: 1, color: "rgba(17, 24, 39, 1)" } : {}}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="inline-block transition-colors duration-300 hover:text-[#a38965]"
        >
          {aboutText}
        </motion.span>
      </div>
    </div>
  );
};
