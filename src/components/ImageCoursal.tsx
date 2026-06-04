"use client";

import React from "react";
import ThreeDImageCarousel from "./lightswind/3d-image-carousel";

const EVENTS = [
  {
    id: 1,
    title: "Baak Bitorko",
    category: "Debate Competition",
    src: "/event-section.png",
    href: "#events",
  },
  {
    id: 2,
    title: "Khône Kotha",
    category: "Extempore Competition",
    src: "/event-section.png",
    href: "#events",
  },
  {
    id: 3,
    title: "Antaraal",
    category: "Poetry Competitions",
    src: "/event-section.png",
    href: "#events",
  },
  {
    id: 4,
    title: "Akshorbongo",
    category: "Creative Writing Competition",
    src: "/event-section.png",
    href: "#events",
  },
];

export default function ImageCoursal() {
  return (
    <section
      id="events"
      className="bg-[#EFE0BE] py-24 overflow-hidden relative w-full flex flex-col items-center"
    >
      {/* Section Heading */}
      <div className="flex flex-col items-center text-center mb-10 px-6">
        <h2 className="font-pirata text-5xl md:text-6xl text-neutral-950 tracking-wider">
          Events
        </h2>
      </div>

      {/* 3D component carousal*/}
      <div className="w-full relative">
        <ThreeDImageCarousel
          slides={EVENTS}
          itemCount={5}
          autoplay={true}
          delay={3}
          showArrows={false}
          className="w-full"
        />
      </div>
    </section>
  );
}
