"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const FooterSection: React.FC = () => {
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
          <Link
            href="#about"
            className="cursor-pointer text-[12px] md:text-lg hover:underline transition"
          >
            About
          </Link>
          <Link
            href="#edition"
            className="cursor-pointer text-[12px] md:text-lg hover:underline transition"
          >
            ‘26 Edition
          </Link>
          <Link
            href="#countdown"
            className="cursor-pointer text-[12px] md:text-lg hover:underline transition"
          >
            Countdown
          </Link>
          <Link
            href="#events"
            className="cursor-pointer text-[12px] md:text-lg hover:underline transition"
          >
            Events
          </Link>
          <Link
            href="#collaborations"
            className="cursor-pointer text-[12px] md:text-lg hover:underline transition"
          >
            Collaborations
          </Link>
          <Link
            href="#map"
            className="cursor-pointer text-[12px] md:text-lg hover:underline transition"
          >
            Map
          </Link>
        </motion.div>

        {/* Column 3: Documents with exact Drive links */}
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

          {/* Social Icons row with precise links and SVG path mappings */}
          <span className="flex gap-2 mb-2 mt-1">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/rhetorica.tint"
              className="text-neutral-900 hover:scale-110 transition duration-200"
              aria-label="Rhetorica Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                color="currentColor"
                className="h-5 w-5 md:h-6 md:w-6"
              >
                <path
                  d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M17.5078 6.5L17.4988 6.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/litwits.tint"
              className="text-neutral-900 hover:scale-110 transition duration-200"
              aria-label="Litwits Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                color="currentColor"
                className="h-5 w-5 md:h-6 md:w-6"
              >
                <path
                  d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M17.5078 6.5L17.4988 6.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/TINT.Literary.Club.Litwits"
              className="text-neutral-900 hover:scale-110 transition duration-200"
              aria-label="Litwits Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                color="currentColor"
                className="h-5 w-5 md:h-6 md:w-6"
              >
                <path
                  d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z"
                  stroke="currentColor"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </a>
          </span>

          {/* Separation Line under Social Icons */}
          <div className="h-px bg-gradient-to-r from-transparent via-black/50 to-transparent w-full"></div>

          {/* Contact Details listing with exact SVGs */}
          <div className="mt-2 md:mt-4 space-y-1">
            <a
              href="mailto:rhetorica.tint@gmail.com"
              className="flex gap-1 items-center text-xs hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                color="currentColor"
                className="h-4 w-4"
              >
                <path
                  d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </svg>
              <span>rhetorica.tint@gmail.com</span>
            </a>
            <a
              href="mailto:literary.club@tict.edu.in"
              className="flex gap-1 items-center text-xs hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                color="currentColor"
                className="h-4 w-4"
              >
                <path
                  d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                ></path>
              </svg>
              <span>literary.club@tict.edu.in</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Credits Bar positioned at the very bottom overlapping the border */}
      {/* Matches the exact font, sizing, and negative margins to overlap the scroll beautifully */}
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
