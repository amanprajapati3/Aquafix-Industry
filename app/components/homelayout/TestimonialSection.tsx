"use client";

import React, { useState } from "react";
import { Wrench, ArrowLeft, ArrowRight } from "lucide-react";
import siteData from "@/data/site.json";

export interface TestimonialItem {
  id?: number | string;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating?: number;
}

export interface TestimonialData {
  badge?: string;
  title?: string;
  image?: string; // Top right water image
  image2?: string; // Bottom left worker illustration
  testimonialItems?: TestimonialItem[];
}

interface TestimonialSectionProps {
  testimonialData?: TestimonialData;
}

export default function TestimonialSection({
  testimonialData,
}: TestimonialSectionProps) {
  const jsonTestimonialData: TestimonialData =
    siteData?.ServiceIndustries?.sections?.Testimonial?.variants
      ?.ServiceTestimonial1;

  const data = testimonialData || jsonTestimonialData || {};
  const items = data.testimonialItems || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = items[currentIndex] || {
    name: "Patric Stone",
    role: "Co-Founder",
    image: "/personImage/men2.png",
    quote:
      "Lorem Ipsum is that it has a more-or-less normal distribution of letters, here making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
  };

  // Fixed surrounding avatar positions matching the reference image layout
  const surroundingAvatars = [
    {
      index: (currentIndex + 1) % items.length,
      positionClass: "-top-5 left-[15%] sm:left-[18%]",
      sizeClass: "h-14 w-14 sm:h-16 sm:w-16",
    },
    {
      index: (currentIndex + 2) % items.length,
      positionClass: "top-[40%] -right-4 sm:-right-6",
      sizeClass: "h-12 w-12 sm:h-14 sm:w-14",
    },
    {
      index: (currentIndex + 3) % items.length,
      positionClass: "-bottom-6 right-[18%] sm:right-[22%]",
      sizeClass: "h-12 w-12 sm:h-14 sm:w-14",
    },
    {
      index: (currentIndex + 4) % items.length,
      positionClass: "-bottom-6 left-[18%] sm:left-[22%]",
      sizeClass: "h-12 w-12 sm:h-14 sm:w-14",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-12">
      {/* 1. WATER DROP OVERLAY - TOP RIGHT */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 w-36 select-none sm:w-48 lg:w-64">
        <img
          src={data.image || "/water.png"}
          alt="Water background"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* 2. WORKER ILLUSTRATION OVERLAY - BOTTOM LEFT */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-44 select-none sm:w-60 lg:w-72">
        <img
          src={data.image2 || "/worker.png"}
          alt="Worker illustration"
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-[1100px] px-4 sm:px-6">
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center">
          {data.badge && (
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#2467EC] sm:text-sm">
              <Wrench className="h-4 w-4" />
              <span>{data.badge}</span>
              <Wrench className="h-4 w-4 -scale-x-100" />
            </div>
          )}

          {data.title && (
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#1E293B] sm:text-4xl lg:text-5xl">
              {data.title}
            </h2>
          )}
        </div>

        {/* TESTIMONIAL DISPLAY CONTAINER */}
        <div className="relative mt-16 sm:mt-20">
          {/* MAIN LIGHT BLUE QUOTE CARD */}
          <div className="relative mx-auto max-w-[850px] rounded-2xl bg-[#F0F5FD] px-6 py-10 sm:px-12 sm:py-14 text-center shadow-sm">
            {/* LARGE QUOTE ICON */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 flex h-12 w-16 items-center justify-center  px-2">
              <svg
                className="h-10 w-10 text-[#2467EC]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* DYNAMIC QUOTE TEXT */}
            <p className="mx-auto  min-h-[120px] max-w-[700px] text-sm font-medium leading-relaxed text-[#475569] sm:text-base md:text-lg">
              {currentTestimonial.quote}
            </p>

            {/* 4 FIXED FLOATING SURROUNDING AVATARS */}
            {items.length > 1 &&
              surroundingAvatars.map((spot, i) => {
                const item = items[spot.index];
                if (!item) return null;
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(spot.index)}
                    aria-label={`View testimonial from ${item.name}`}
                    className={`absolute rounded-full border-2 border-[#2467EC] p-[2px] bg-white shadow-md transition-transform duration-300 hover:scale-110 ${spot.positionClass} ${spot.sizeClass}`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </button>
                );
              })}
          </div>

          {/* ACTIVE CLIENT DETAILS & CONTROLS (CENTERED BELOW CARD) */}
          <div className="relative z-30 mt-6 flex flex-col items-center text-center">
            {/* ACTIVE PROFILE AVATAR */}
            <div className="relative h-20 w-20 rounded-full border-2 border-[#2467EC] p-[2px] bg-white shadow-md sm:h-24 sm:w-24">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            {/* NAME & ROLE */}
            <h3 className="mt-4 text-xl font-bold text-[#1E293B] sm:text-2xl">
              {currentTestimonial.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-[#64748B]">
              {currentTestimonial.role}
            </p>

            {/* NAVIGATION ARROWS */}
            <div className="mt-5 flex items-center justify-center gap-6 text-[#64748B]">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="p-1 transition-colors hover:text-[#2467EC]"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="p-1 transition-colors hover:text-[#2467EC]"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
