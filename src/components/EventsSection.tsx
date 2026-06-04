"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import type { SwiperRef } from "swiper/react";

// Import Swiper and Swiper Coverflow CSS styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// Events list matching the original site events
const EVENTS = [
  {
    title: "Baak Bitorko",
    category: "Debate Competition",
    image: "/event-section.png",
  },
  {
    title: "Khône Kotha",
    category: "Extempore Competition",
    image: "/event-section.png",
  },
  {
    title: "Antaraal",
    category: "Poetry Competitions",
    image: "/event-section.png",
  },
  {
    title: "Akshorbongo",
    category: "Creative Writing Competition",
    image: "/event-section.png",
  },
];

// Duplicate the events array to ensure Swiper Coverflow has enough slides to loop and center perfectly
const SLIDES = [...EVENTS, ...EVENTS, ...EVENTS];

export const EventsSection: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <section id="events" className="bg-[#EFE0BE] py-24 overflow-hidden relative w-full">
      <div className="w-full flex flex-col items-center">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-10 px-6"
        >
          <h2 className="font-pirata text-5xl md:text-6xl text-neutral-950 tracking-wider">Events</h2>
        </motion.div>

        {/* 3D Swiper Coverflow Slider taking full screen width */}
        <div 
          className="w-full relative cursor-grab active:cursor-grabbing"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            ref={swiperRef}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 15,     // 3D slant Y-axis rotation angle matching your screenshot
              stretch: 0,     // No stretching spacing overlay
              depth: 100,     // Depth translation pushes inactive cards back
              modifier: 2.0,  // Scale spacing multiplier
              slideShadows: false, // Turn off slide shadows for clean transparent look
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="w-full py-8"
          >
            {SLIDES.map((event, idx) => (
              <SwiperSlide
                key={idx}
                style={{ width: "320px" }} // Sizing lock for Coverflow scaling calculations
                className="shrink-0 flex flex-col items-center gap-4 bg-transparent border-0 p-0 shadow-none select-none"
              >
                <div className="relative h-[380px] w-full overflow-hidden rounded-xl bg-transparent">
                  {/* Event Background Canvas (Old Kolkata street illustration) - unoptimized for instant load of 10MB file */}
                  <Image
                    src={event.image}
                    alt={`${event.title} background`}
                    fill
                    unoptimized={true}
                    sizes="320px"
                    className="object-cover opacity-95 transition-transform duration-700 group-hover:scale-105 z-0"
                  />
                  
                  {/* Event Title inside Canvas (Gothic Typography placed in front of background, behind frame) */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-20 mb-12">
                    <h3 className="font-pirata text-3xl leading-tight text-neutral-900 drop-shadow">
                      {event.title}
                    </h3>
                  </div>

                  {/* Overlay Gothic Window Frame - unoptimized for instant load */}
                  <Image
                    src="/window.png"
                    alt="Gothic window frame overlay"
                    fill
                    unoptimized={true}
                    sizes="320px"
                    className="object-cover z-10 pointer-events-none"
                  />
                </div>

                {/* Subtitle centered directly under the arch */}
                <div className="text-center mt-2">
                  <h4 className="font-sans font-medium text-sm text-neutral-900 tracking-wide uppercase">
                    {event.category}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
