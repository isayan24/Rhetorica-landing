"use client";

import React from "react";
import { motion } from "framer-motion";

const GOOGLE_MAPS_EMBED =
  "https://maps.google.com/maps?q=22.578254554983403, 88.47577642832206&hl=en&z=17&output=embed";

export const MapSection = () => {
  return (
    <section
      id="map"
      className="bg-white py-12 md:py-20 w-full overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[45%] min-h-[300px] rounded-xl overflow-hidden shadow-xl border border-neutral-100 relative shrink-0 flex"
        >
          <iframe
            title="Techno International New Town Google Map"
            src={GOOGLE_MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[55%] flex flex-col justify-center gap-6"
        >
          <div className="flex flex-col gap-2">
            <h3 className="font-montserrat font-bold text-3xl md:text-[34px] leading-tight text-neutral-900 tracking-tight">
              Techno International New Town
            </h3>
            <p className="font-montserrat text-neutral-900 text-[15px] md:text-base leading-relaxed font-normal">
              1/1, Service Rd, DG Block(Newtown), Action Area I, Newtown,
              Chakpachuria, West Bengal 700156
            </p>
          </div>

          {/* Directions Guide List */}
          <div className="flex flex-col gap-3 pt-2">
            <h4 className="text-[17px] font-[500]">Guide:</h4>
            <ul className="flex flex-col gap-2.5 font-montserrat text-[15px] md:text-base font-[500]">
              <li className="flex items-start gap-2">
                <span className="">a.</span>
                <span>
                  15 mins from Netaji Subhash Chandra Bose International
                  Airport.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="">b.</span>
                <span>2 mins from Biswa Bangla Gate.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="">c.</span>
                <span>4 mins from Ecospace Business Park.</span>
              </li>
            </ul>
          </div>

          {/* Action Google Maps Button */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=22.578441030720008,88.4758137509812"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#00a651] hover:bg-[#008f45] text-white py-3 px-6 rounded-lg text-center font-montserrat font-semibold text-base transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_12px_rgba(0,166,81,0.15)] hover:shadow-[0_6px_16px_rgba(0,166,81,0.25)] select-none mt-2"
          >
            <span>View on Google Maps</span>
            <span className="text-lg leading-none">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
