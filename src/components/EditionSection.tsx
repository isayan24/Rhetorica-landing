"use client";

import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: "140+", label: "Participants" },
  { value: "5+", label: "Events" },
  { value: "8+", label: "Brands Partnerships" },
  { value: "35+", label: "Colleges" },
];

export const EditionSection: React.FC = () => {
  return (
    <section
      id="edition"
      className="relative min-h-[400px] bg-cover bg-center overflow-hidden flex items-center py-20 px-6 md:px-20"
      style={{
        backgroundImage: `url('/blur-bg.png')`,
      }}
    >
      <div className="relative z-10  mx-auto w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-10 ">
        {/* Left Side Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start gap-5 md:w-[75%]"
        >
          <h2 className="font-semibold text-2xl md:text-3xl text-neutral-900 font-sans tracking-wide text-center md:text-start">
            Our 26&apos; Edition
          </h2>
          <p className="font-poppins text-lg md:text-2xl leading-relaxed text-center md:text-start text-neutral-800 font-[420]">
            This year, we’re organising Rhetorica on a bigger and grander scale,
            having received registrations from over 35+ Colleges across West
            Bengal, with over 140+ participants having registered for our
            multiple events across the two days of our event. We’ve also
            obtained various brand partnerships across diverse industries.
          </p>
        </motion.div>

        {/* Right Side Stats Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="border border-black/40 md:w-1/3 bg-black/10 rounded-2xl grid grid-cols-2 grid-rows-2 gap-6 p-6 backdrop-blur-md shadow-lg"
        >
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-1 select-none"
            >
              <span className="font-bold text-4xl md:text-5xl font-montserrat text-neutral-950">
                {stat.value}
              </span>
              <span className="font-light text-sm md:text-base text-neutral-700 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
