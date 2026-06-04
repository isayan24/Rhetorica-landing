"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper core styles
import "swiper/css";

// Brands partner logos
const PARTNER_BRANDS = [
  "/brands/3.svg",
  "/brands/4.svg",
  "/brands/5.svg",
  "/brands/6.svg",
  "/brands/7.svg",
  "/brands/8.svg",
  "/brands/9.svg",
  "/brands/10.jpg",
];

// Duplicate list slightly to support seamless infinite looping in Swiper
const LOGOS = [...PARTNER_BRANDS, ...PARTNER_BRANDS];

export const CollaborationsSection: React.FC = () => {
  return (
    <section
      id="collaborations"
      className="pt-24 pb-12 bg-white flex flex-col items-center w-full"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-6"
      >
        <h2 className="font-pirata text-5xl md:text-6xl text-neutral-950 tracking-wider">Collaborations</h2>
      </motion.div>

      {/* Responsive Swiper Slider for logos */}
      <div className="w-full relative px-6 md:px-16">
        {/* Soft edge gradients for a premium fading blend */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <Swiper
          autoplay={{
            delay: 2000, // Pauses on each image in the front for 2 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // Ensure animation does not pause on mouse hover
          }}
          speed={1000} // Smooth transition speed between slides
          loop={true}
          spaceBetween={40}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="w-full flex items-center py-4 select-none"
        >
          {LOGOS.map((src, idx) => (
            <SwiperSlide
              key={idx}
              className="flex items-center justify-center bg-transparent border-0 p-0 shadow-none hover:scale-105 transition-transform duration-300 ease-out cursor-pointer"
            >
              <div className="w-36 h-20 flex items-center justify-center">
                <img
                  src={src}
                  alt="Partner logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
