"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownCardProps {
  value: string;
  label: string;
}

const CountdownCard: React.FC<CountdownCardProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white/90 border border-white/20 rounded-2xl px-4 py-6 shadow-md flex-1 backdrop-blur-md select-none group hover:scale-[1.03] transition-all duration-300">
      <span className="text-4xl md:text-6xl font-pirata tracking-wider text-black transition-all duration-500 animate-pop">
        {value}
      </span>
      <span className="font-montserrat text-[10px] md:text-xs font-bold text-neutral-600 uppercase tracking-widest mt-2">{label}</span>
    </div>
  );
};

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Ticking countdown clock targeting Jan 20th next year (active ticks make the site feel premium)
    const targetDate = new Date("January 20, 2027 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days < 10 ? `0${days}` : `${days}`,
          hours: hours < 10 ? `0${hours}` : `${hours}`,
          minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
          seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="py-20 px-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl bg-white/30 border border-white/50 backdrop-blur-xl shadow-2xl p-8 md:p-12 rounded-3xl flex flex-col items-center overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center text-center mb-8 relative z-10">
          <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-600 uppercase">BEGINS ON</span>
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl tracking-wide text-neutral-900 mt-1">20TH JAN 2026</h2>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-md relative z-10">
          <CountdownCard value={timeLeft.days} label="DAYS" />
          <CountdownCard value={timeLeft.hours} label="HOURS" />
          <CountdownCard value={timeLeft.minutes} label="MINUTES" />
          <CountdownCard value={timeLeft.seconds} label="SECONDS" />
        </div>
      </motion.div>
    </section>
  );
};
