"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { ContactLinks } from "./ContactLinks";

const FOOTER_LINKS = [
  { href: "#about", label: "About" },
  { href: "#edition", label: "‘26 Edition" },
  { href: "#countdown", label: "Countdown" },
  { href: "#events", label: "Events" },
  { href: "#collaborations", label: "Collaborations" },
  { href: "#map", label: "Map" },
];

export const FooterSection = () => {
  return (
    <footer className="w-full bg-white flex flex-col relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="relative bg-[url('/footer.png')] bg-cover md:bg-bottom min-h-[135vh] md:min-h-0 md:h-[600px] flex flex-col md:flex-row gap-5 md:gap-10 items-start md:justify-between p-10 md:p-15 md:px-20 font-medium font-montserrat text-black w-full select-none border-t border-neutral-100/30 pt-20 md:pt-16 pb-[380px] md:pb-15"
      >
        {/* Column 1: Rhetorica Brand Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-2 md:gap-5"
        >
          <h1 className="font-pirata text-5xl md:text-7xl">
            Rhetorica &apos;26
          </h1>
          <div className="h-px bg-gradient-to-r from-transparent via-black/50 to-transparent w-full"></div>
          <p className="font-semibold leading-relaxed text-[14px] md:text-base">
            Annual Literary Festival of
            <br />
            Techno International New Town
          </p>
          <p className="font-semibold text-[14px] md:text-base">
            Organised by LITWITS
          </p>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col gap-1"
        >
          <h1 className="font-bold text-xs md:text-xl mb-1 md:mb-5">
            Quick Links
          </h1>
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="cursor-pointer text-[12px] md:text-lg hover:underline transition"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* Column 3: Documents  sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-1"
        >
          <h1 className="font-bold text-xs md:text-xl mb-1 md:mb-5">
            Documents
          </h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-[12px] md:text-lg hover:underline transition"
            href="https://drive.google.com/file/d/1CvgcmPsVR3iD6pAS5vtTb4SdltDbcF8g/view?usp=sharing"
          >
            Brochure
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-[12px] md:text-lg hover:underline transition"
            href="https://drive.google.com/file/d/1p0fV_mpq7S6asz9_II6afLCLMbQOeE8g/view?usp=sharing"
          >
            Sponsorship Deck
          </a>
        </motion.div>

        {/* Column 4: Socials & Contacts with exact SVGs */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-1"
        >
          <h1 className="font-bold text-xs md:text-xl">
            Follow us on Social Media
          </h1>

          <SocialLinks />

          {/* Separation Line */}
          <div className="h-px bg-gradient-to-r from-transparent via-black/50 to-transparent w-full"></div>

          <ContactLinks />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex px-3 text-xs items-center flex-col pb-5 mt-5 md:mt-8 justify-center font-semibold font-montserrat text-center md:text-sm relative z-20 select-none text-neutral-900 bg-transparent"
      >
        <p>
          Built with ❤️ by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
            href="https://sidahq.com/"
          >
            SIDA Technologies
          </a>
        </p>
        <p className="md:hidden mt-3 leading-relaxed">
          An initiative by LITWITS
          <br />& Rhetorica Organising Committee
        </p>
        <p className="hidden md:block">
          An initiative by LITWITS & Rhetorica Organising Committee
        </p>
      </motion.div>
    </footer>
  );
};
