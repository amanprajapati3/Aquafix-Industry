"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Wrench,
  ShieldAlert,
  Award,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  FileText,
} from "lucide-react";
import type { ServiceBannerData, ServiceFeatureCardsData } from "@/data";
import ScrollReveal from "../shared/ScrollReveal";

interface BannerProps {
  data: ServiceBannerData;
  featureCardsData: ServiceFeatureCardsData;
}

export default function Banner({ data, featureCardsData }: BannerProps) {
  const slides = data || [];
  const cards = featureCardsData || [];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const getIcon = (name: string) => {
    switch (name) {
      case "wrench":
        return <Wrench className="h-6 w-6 stroke-[1.75]" />;
      case "shield-alert":
        return <ShieldAlert className="h-6 w-6 stroke-[1.75]" />;
      case "badge-check":
        return <Award className="h-6 w-6 stroke-[1.75]" />;
      case "thumbs-up":
        return <ThumbsUp className="h-6 w-6 stroke-[1.75]" />;
      default:
        return <Wrench className="h-6 w-6 stroke-[1.75]" />;
    }
  };

  return (
    <section className="relative -mt-[80px] w-full overflow-hidden bg-[#F4F8FD] pb-8 sm:-mt-[100px] md:-mt-[90px] lg:-mt-[95px] lg:pb-12">
      <div className="relative mx-auto max-w-[1400px] pl-0 sm:pl-6 lg:pl-8 pr-0">
        {/* HERO AREA SLIDER CONTAINER */}
        <div className="relative overflow-hidden pb-6 lg:pb-0">
          <div
            className="flex w-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide, slideIdx) => (
              <div
                key={slideIdx}
                className="relative grid min-h-[620px] w-full flex-shrink-0 grid-cols-1 sm:min-h-[600px] sm:grid-cols-12 lg:min-h-[680px] xl:min-h-[720px]"
              >
                {/* MOBILE BACKGROUND IMAGE */}
                <div className="absolute inset-x-0 top-0 bottom-0 z-0 block sm:hidden">
                  <img
                    src={slide.bgImageUrl}
                    alt={slide.title || "Background"}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09244A]/98 via-[#09244A]/85 to-[#09244A]/60" />
                </div>

                {/* LEFT CONTENT AREA */}
                <div className="relative  z-20 flex flex-col items-start justify-end px-5 pb-12 pt-[120px] sm:col-span-6 sm:px-0 sm:pb-16 sm:pt-28 md:w-[92%] lg:col-span-6 lg:pb-12 lg:pt-36 xl:col-span-6">
                  {/* Badge */}
                  {slide.badge && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF2FF] px-4 py-1.5 text-[12px] font-semibold text-[#245BC1] sm:py-2 sm:text-[13px]">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{slide.badge}</span>
                    </div>
                  )}

                  {/* Heading */}
                  <h1 className="mt-4 min-h-[150px] max-w-[650px] text-[28px] font-extrabold leading-[1.15] tracking-[-0.035em] text-white sm:mt-6 sm:min-h-[180px] sm:text-[36px] sm:text-[#09244A] md:min-h-[200px] md:text-[44px] lg:min-h-[220px] lg:text-[50px] xl:min-h-[250px] xl:text-[56px]">
                    {slide.title}{" "}
                    <span className="block text-[#91D900]">
                      {slide.highlightedTitle}
                    </span>
                    <div className="mt-4 h-[2px] w-[52px] bg-[#91D900] sm:mt-5" />
                  </h1>

                  {/* Description */}
                  {slide.desc && (
                    <p className="mt-4 max-w-[560px]  text-[13px] font-medium leading-[1.6] text-slate-200 sm:text-[14px] sm:text-[#526174] md:text-[15px] lg:h-[80px] lg:overflow-hidden lg:text-[16px]">
                      {slide.desc}
                    </p>
                  )}

                  {/* Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                    {slide.buttons?.map((btn, idx) => {
                      const isPrimary = btn.variant === "primary";

                      return (
                        <Link
                          key={idx}
                          href={btn.href}
                          className={`inline-flex h-[42px] items-center justify-center gap-2 rounded-full px-5 text-[13px] font-bold transition-all duration-300 sm:h-[48px] sm:px-7 sm:text-[14px] ${
                            isPrimary
                              ? "bg-[#9BE500] text-[#09244A] shadow-[0_7px_18px_rgba(145,217,0,0.22)] hover:-translate-y-0.5 hover:bg-[#8DD300]"
                              : "border-[1.5px] border-white/80 bg-transparent text-white hover:-translate-y-0.5 hover:bg-[#09244A] hover:text-white sm:border-[#17355C] sm:text-[#09244A]"
                          }`}
                        >
                          {isPrimary && (
                            <FileText className="h-[17px] w-[17px]" />
                          )}

                          <span>{btn.label}</span>

                          {!isPrimary && btn.icon === "arrow-right" && (
                            <ArrowRight className="h-[17px] w-[17px]" />
                          )}
                        </Link>
                      );
                    })}
                  </div>

                  {/* SOCIAL PROOF */}
                  {slide.socialProof && (
                    <div className="mt-6  flex items-center gap-4 sm:mt-8">
                      {/* Avatars */}
                      <div className="flex items-center">
                        {slide.socialProof.avatarImages?.map((imgUrl, aIdx) => (
                          <img
                            key={aIdx}
                            src={imgUrl}
                            alt="Satisfied client"
                            className={`h-[42px] w-[42px] rounded-full border-[2px] border-white object-cover shadow-sm sm:h-[49px] sm:w-[49px] ${
                              aIdx !== 0 ? "-ml-3" : ""
                            }`}
                          />
                        ))}

                        {slide.socialProof.ratingBadge && (
                          <div className="-ml-3 flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full border-[2px] border-white bg-[#09244A] text-[12px] font-extrabold text-[#9BE500] shadow-md sm:h-[53px] sm:w-[53px] sm:text-[13px]">
                            {slide.socialProof.ratingBadge}
                          </div>
                        )}
                      </div>

                      {/* Vertical Divider */}
                      <div className="h-[40px] w-px bg-white/30 sm:h-[50px] sm:bg-[#CBD4DF]" />

                      {/* Rating */}
                      <div className="flex flex-col">
                        <span className="text-[18px] font-extrabold leading-none tracking-[-0.02em] text-white sm:text-[22px] sm:text-[#09244A]">
                          {slide.socialProof.ratingBadge}
                        </span>

                        <span className="mt-1 text-[11px] font-medium text-slate-300 sm:text-[12px] sm:text-[#68778A]">
                          {slide.socialProof.label}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT IMAGE AREA (STARTS FROM EXACT TOP WITH ZERO RIGHT MARGIN/GAP) */}
                <div className="relative z-10 hidden sm:col-span-6 sm:flex sm:items-start sm:justify-end">
                  <div className="relative h-full  w-full min-h-[550px] lg:w-[calc(100%+2rem)] xl:w-[calc(100%+4rem)]">
                    <div className="absolute top-0 right-0   left-0 bottom-0 overflow-hidden bg-[#D8E5F2] sm:[clip-path:ellipse(90%_88%_at_90%_85%)]">
                      <div className="absolute top-0  right-0  bottom-0 left-[8px] overflow-hidden bg-white sm:[clip-path:ellipse(90%_88%_at_90%_85%)] ">
                        <img
                          src={slide.bgImageUrl}
                          alt={slide.title || "Plumbing service"}
                          className="h-full sm:[clip-path:ellipse(100%_88%_at_90%_85%)] w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SLIDER CONTROLS */}
          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === 0 ? slides.length - 1 : prev - 1,
                  )
                }
                className="absolute left-6 top-1/2 z-30 hidden -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#09244A]/60 p-2.5 text-white shadow-lg transition-all duration-300 hover:bg-[#9BE500] hover:text-[#09244A] sm:flex"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % slides.length)
                }
                aria-label="Next slide"
                className="absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#09244A]/60 p-2.5 text-white shadow-lg transition-all duration-300 hover:bg-[#9BE500] hover:text-[#09244A] sm:flex"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* MOBILE PAGINATION */}
              <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 sm:hidden">
                {slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setCurrentSlide(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === dotIdx
                        ? "w-6 bg-[#9BE500]"
                        : "w-2 bg-white/50"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* FEATURE CARDS (HORIZONTAL ALIGNMENT MATCHING LEFT CONTENT BOTTOM) */}
          {cards.length > 0 && (
            <div className="relative z-30 hidden w-full pr-4 sm:mb-6 sm:block sm:pr-6 lg:absolute lg:bottom-0 lg:right-4 lg:mb-0 lg:mt-0 lg:w-[54%] lg:pr-0 xl:right-8 xl:w-[50%]">
              <div className="overflow-hidden rounded-[20px] bg-[#061D3D] px-4 py-5 sm:px-6 sm:py-6 lg:px-4 lg:py-6 xl:px-6 xl:py-7">
                <ScrollReveal direction="up">
                  <div className="grid grid-cols-2 lg:grid-cols-4">
                    {cards.slice(0, 4).map((card, idx) => (
                      <div
                        key={idx}
                        className={`flex min-h-[120px] flex-col items-center justify-start px-2 py-1 text-center sm:px-3 lg:px-2 xl:px-3 ${
                          idx !== 0
                            ? "border-t border-white/10 sm:border-t-0 lg:border-l lg:border-white/10"
                            : ""
                        }`}
                      >
                        <div className="mb-3.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#8DD300] text-[#8DD300] sm:h-13 sm:w-13">
                          {getIcon(card.icon)}
                        </div>

                        <div className="flex flex-col items-center justify-center">
                          <h3 className="text-[14px] font-bold leading-tight text-white sm:text-[15px]">
                            {card.title}
                          </h3>

                          <p className="mt-1.5 text-[11px] font-normal leading-relaxed text-[#B1C3D9] sm:text-[12px]">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}