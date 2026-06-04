import React from "react";
import { motion } from "framer-motion";

const CountdownCard = ({ value, label }: any) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white/90 border border-white/20 rounded-2xl w-fit max-[600px]:px-2 px-4 py-4 shadow-md flex-1 backdrop-blur-md select-none">
      <span className="text-2xl md:text-6xl font-pirata text-black">
        {value}
      </span>
      <span className="font-montserrat text-[10px] md:text-xs font-bold text-neutral-600 uppercase tracking-widest mt-2">
        {label}
      </span>
    </div>
  );
};

export const CountdownSection: React.FC = () => {
  return (
    <section
      id="countdown"
      className="py-20 px-6 max-[500px]:px-2 flex justify-center "
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-2xl bg-slate-100 border border-black/10 backdrop-blur-xl shadow-2xl p-8 rounded-3xl flex flex-col items-center overflow-hidden"
      >
        <div className="flex flex-col items-center justify-center text-center mb-8 relative z-10">
          <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-600 uppercase">
            BEGINS ON
          </span>
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl tracking-wide text-neutral-900 mt-1">
            20TH JAN 2026
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-10 w-full md:px-16 relative z-10">
          <CountdownCard value="00" label="DAYS" />
          <CountdownCard value="00" label="HOURS" />
          <CountdownCard value="00" label="MINUTES" />
          <CountdownCard value="00" label="SECONDS" />
        </div>
      </motion.div>
    </section>
  );
};
