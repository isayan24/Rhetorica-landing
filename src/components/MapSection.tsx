"use client";

import React from "react";
import { motion } from "framer-motion";

const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.282823616644!2d88.47352797604677!3d22.568523033100346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0274c653303d8b%3A0xe9634d0b1784eb96!2sTechno%20International%20New%20Town!5e0!3m2!1sen!2sin!4v1717300000000!5m2!1sen!2sin";

export const MapSection: React.FC = () => {
  return (
    <section id="map" className="bg-white py-12 md:py-20 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
        
        {/* Left Column: Interactive Map Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 min-h-[320px] md:min-h-[400px] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-neutral-100 relative shrink-0 flex"
        >
          <iframe
            title="Techno International New Town Google Map"
            src={GOOGLE_MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "100%" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Column: Venue Details & Directions Guide */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col justify-center gap-6"
        >
          {/* Venue Heading */}
          <div className="flex flex-col gap-2">
            <h3 className="font-montserrat font-bold text-3xl md:text-[34px] leading-tight text-neutral-900 tracking-tight">
              Techno International New Town
            </h3>
            <p className="font-montserrat text-neutral-500 text-[15px] md:text-base leading-relaxed font-normal">
              1/1, Service Rd, DG Block(Newtown), Action Area I, Newtown, Chakpachuria, West Bengal 700156
            </p>
          </div>

          {/* Directions Guide List */}
          <div className="flex flex-col gap-3 pt-2">
            <h4 className="font-montserrat font-bold text-[17px] text-neutral-900">
              Guide:
            </h4>
            <ul className="flex flex-col gap-2.5 font-montserrat text-[15px] md:text-base text-neutral-800 font-normal">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-neutral-900">a.</span>
                <span>15 mins from Netaji Subhash Chandra Bose International Airport.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-neutral-900">b.</span>
                <span>2 mins from Biswa Bangla Gate.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-neutral-900">c.</span>
                <span>4 mins from Ecospace Business Park.</span>
              </li>
            </ul>
          </div>

          {/* Action Google Maps Button */}
          <a
            href="https://maps.app.goo.gl/r55Wix57bY7F6n1v9"
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
