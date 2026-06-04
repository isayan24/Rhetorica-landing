"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

const NavLink = ({ href, onClick, children }: any) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-left hover:text-black cursor-pointer font-medium"
  >
    {children}
  </Link>
);

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#edition", label: "‘26 Edition" },
  { href: "#countdown", label: "Countdown" },
  { href: "#events", label: "Events" },
  { href: "#collaborations", label: "Collaborations" },
  { href: "#map", label: "Map" },
];

export const NavigationDrawer = ({ isOpen, onClose }: any) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ type: "spring", damping: 25, stiffness: 220 }}
          className="fixed top-5 right-5 z-50 w-52 bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl shadow-2xl p-6 pt-10 flex flex-col gap-3.5 origin-right text-neutral-800 font-sans"
        >
          {/* Close Icon Button inside the card */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1   transition rounded-full cursor-pointer "
            aria-label="Close Menu"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Vertical Menu Links list */}
          <nav className="flex flex-col gap-3 text-sm font-medium text-neutral-700">
            {LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={onClose}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
