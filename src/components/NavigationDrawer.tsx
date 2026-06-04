"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollTo: (id: string) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onScrollTo,
}) => {
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
          {/* Close Icon Button inside top-right of the card */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 text-neutral-500 hover:text-neutral-900 transition rounded-full cursor-pointer hover:bg-neutral-100/50"
            aria-label="Close Menu"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Vertical Menu Links list */}
          <nav className="flex flex-col gap-3 font-montserrat text-sm font-medium text-neutral-700">
            {[
              { id: "about", label: "About" },
              { id: "edition", label: "'26 Edition" },
              { id: "countdown", label: "Countdown" },
              { id: "events", label: "Events" },
              { id: "collaborations", label: "Collaborations" },
              { id: "map", label: "Map" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollTo(item.id)}
                className="text-left hover:text-black transition-colors duration-150 cursor-pointer font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
