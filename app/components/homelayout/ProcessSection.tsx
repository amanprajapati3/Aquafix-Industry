"use client";

import React from "react";
import { Wrench } from "lucide-react";
import siteData from "@/data/site.json";
import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import ScrollReveal from "../shared/ScrollReveal";

export interface ProcessStep {
  id?: number;
  number?: string;
  stepNumber?: string;
  title: string;
  desc: string;
  icon?: string;
}

export interface ProcessData {
  badge?: string;
  image?: string;
  title?: string;
  steps?: ProcessStep[];
}

interface ProcessSectionProps {
  processData?: ProcessData;
}

export default function ProcessSection({ processData }: ProcessSectionProps) {
  // Direct JSON mapping support with dual keys fallback
  const jsonProcessData: ProcessData =
    siteData?.ServiceIndustries?.sections?.HowWeWork?.variants
      ?.ServiceHowWeWork1;

  const data = processData || jsonProcessData || {};
  const steps = data.steps || [];

  const renderIcon = (iconName?: string, index?: number) => {
    const key = (iconName || String(index ?? "")).toLowerCase();
    switch (key) {
      // Step 1: Document Search
      case "inspect":
      case "01":
      case "0":
      case "search":
        return (
          <svg
            className="h-20 w-20 sm:w-28 sm:h-28 text-[#2467EC]"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="18" y="10" width="28" height="38" rx="3" />
            <path d="M24 20h16M24 27h10" />
            <circle cx="26" cy="38" r="6" />
            <path d="M21.5 42.5L14 50" strokeWidth="3" />
          </svg>
        );

      // Step 2: Delivery Truck & Cog Process
      case "quote":
      case "02":
      case "1":
      case "truck":
        return (
          <svg
            className="h-20 w-20 sm:w-28 sm:h-28 text-[#2467EC]"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 34 A 18 18 0 1 1 48 34" strokeDasharray="32 10" />
            <rect x="23" y="12" width="12" height="10" rx="1" />
            <path d="M35 16h5l3 3v3h-8z" />
            <circle cx="27" cy="22" r="1.5" />
            <circle cx="39" cy="22" r="1.5" />
            <path d="M19 15h3M18 18h2" />
            <circle cx="32" cy="34" r="3" />
            <path d="M32 28v2M32 38v2M26 34h2M36 34h2M27.8 29.8l1.4 1.4M34.8 36.8l1.4 1.4M27.8 38.2l1.4-1.4M34.8 31.2l1.4-1.4" />
            <circle cx="17" cy="44" r="4.5" />
            <path d="M20.5 47.5L25 52" strokeWidth="3" />
            <circle cx="47" cy="40" r="2.5" />
            <path d="M42 52v-4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4" />
            <path d="M28 50h12" />
          </svg>
        );

      // Step 3: Cleaning Broom & Dust
      case "clean":
      case "03":
      case "2":
      case "broom":
        return (
          <svg
            className="h-20 w-20 sm:w-28 sm:h-28 text-[#2467EC]"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M50 14L34 30" strokeWidth="3.5" />
            <rect
              x="31"
              y="27"
              width="6"
              height="6"
              rx="1"
              transform="rotate(-45 31 27)"
            />
            <path d="M29 32 C 24 36, 17 40, 22 49 C 26 51, 32 46, 36 41 Z" />
            <path d="M19 25 C 16 22, 22 17, 26 21 C 28 17, 33 21, 30 25" />
            <circle cx="40" cy="36" r="2" />
            <circle cx="48" cy="42" r="1.5" />
            <circle cx="14" cy="49" r="2" />
            <path d="M38 49 C 32 44, 26 53, 44 53 Z" />
            <path d="M12 55h40" strokeWidth="2.5" />
          </svg>
        );

      // Step 4: Quality Star Gear & Growth Arrows
      case "quality":
      case "04":
      case "3":
      case "settings":
        return (
          <svg
            className="h-20 w-20 sm:w-28 sm:h-28 text-[#2467EC]"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="27" cy="39" r="10" />
            <path d="M27 26v3M27 49v3M14 39h3M37 39h3M17.8 29.8l2.1 2.1M34.1 46.1l2.1 2.1M17.8 48.2l2.1-2.1M34.1 31.9l2.1-2.1" />
            <polygon
              points="27,33 28.5,36 32,36.5 29.5,39 30,42.5 27,41 24,42.5 24.5,39 22,36.5 25.5,36"
              fill="currentColor"
            />
            <path d="M37 30V14m0 0l-4 4m4-4l4 4" strokeWidth="3" />
            <path d="M47 38V24m0 0l-4 4m4-4l4 4" strokeWidth="3" />
            <path d="M47 43v2M47 49v2" strokeWidth="3" />
          </svg>
        );

      default:
        return (
          <svg
            className="h-12 w-12 text-[#2467EC]"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="24" cy="24" r="10" />
          </svg>
        );
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#EDF3FD] py-8 md:py-12">
   
      {/* WATER SPLASH OVERLAY - TOP RIGHT */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 select-none opacity-80 sm:opacity-100">
        <img src={data.image} alt="" />
      </div>

      <div className="relative z-20 mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <SectionHeader
          pretitle={data.badge}
          title={data.title}
          align="center"
        />

        {/* CARDS GRID */}
        <ScrollReveal direction="up">
        <div className="relative mt-20 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {steps?.map((step, index) => {
            const num = step.number || step.stepNumber || `0${index + 1}`;
            const isElevated = index % 2 === 1;

            return (
              <div
                key={step.id || index}
                className={`group relative flex flex-col items-center text-center transition-all duration-300 animate-subtle-float ${
                  isElevated ? "lg:-translate-y-10" : ""
                }`}
                style={{
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                {/* STEP NUMBER - TOP LEFT OF CIRCLE */}
                <span className="absolute -left-1 -top-7 z-0 text-5xl font-black tracking-tighter text-[#D9E8FC] select-none sm:-left-3 sm:-top-8 sm:text-6xl">
                  {num}
                </span>

                {/* OUTER DASHED CIRCLE */}
                <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-full border-2 border-dashed border-[#BADAFF] bg-transparent p-3 sm:h-48 sm:w-48">
                  {/* INNER BLUE TINT CIRCLE CONTAINER */}
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#E5F0FF] shadow-sm transition-transform duration-300 group-hover:scale-105">
                    {renderIcon(step.icon || num, index)}
                  </div>
                </div>

                {/* TITLE & DESCRIPTION */}
                <h3 className="mt-6 text-xl font-bold text-[#1E293B] sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[240px] text-sm font-medium leading-relaxed text-[#64748B]">
                  {step.desc}
                </p>

                {/* SWIRLY LOOP ARROWS BETWEEN CARDS (DESKTOP ONLY) */}
                {index < steps.length - 1 && (
                  <div
                    className={`pointer-events-none absolute z-30 hidden lg:block ${
                      index === 0
                        ? "right-[-32px] top-[30px]"
                        : index === 1
                          ? "right-[-32px] top-[90px]"
                          : "right-[-32px] top-[30px]"
                    }`}
                  >
                    <svg
                      width="75"
                      height="65"
                      viewBox="0 0 75 65"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Swirly Loop Path */}
                      <path
                        d={
                          index % 2 === 0
                            ? "M 5 25 C 25 10, 45 5, 40 25 C 35 45, 15 35, 35 45 C 50 50, 60 40, 68 35"
                            : "M 5 40 C 25 55, 45 60, 40 40 C 35 20, 15 30, 35 20 C 50 15, 60 25, 68 30"
                        }
                        stroke="#D3E4FC"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Arrow Head */}
                      <path
                        d={
                          index % 2 === 0
                            ? "M 60 32 L 70 35 L 64 43"
                            : "M 60 34 L 70 30 L 64 22"
                        }
                        stroke="#D3E4FC"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}