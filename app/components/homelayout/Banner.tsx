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
import siteData from "@/data/site.json";

export type ServiceBannerData =
  typeof siteData.ServiceIndustries.sections.Banner.variants.ServiceBanner1;

export type ServiceFeatureCardsData =
  typeof siteData.ServiceIndustries.sections.FeatureCards.variants.ServiceFeatureCards1;

const bannerData: ServiceBannerData =
  siteData.ServiceIndustries.sections.Banner.variants.ServiceBanner1;

const featureCardsData: ServiceFeatureCardsData =
  siteData.ServiceIndustries.sections.FeatureCards.variants
    .ServiceFeatureCards1;

export default function Banner() {
  const slides = bannerData || [];
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
        return <Wrench className="h-6 w-6" />;
      case "shield-alert":
        return <ShieldAlert className="h-6 w-6" />;
      case "badge-check":
        return <Award className="h-6 w-6" />;
      case "thumbs-up":
        return <ThumbsUp className="h-6 w-6" />;
      default:
        return <Wrench className="h-6 w-6" />;
    }
  };

  return (
    /* Pull section under absolute/fixed mobile header (-mt-[80px] sm:mt-0) */
    <section className="relative w-full overflow-hidden bg-[#F4F8FD] -mt-[80px] sm:mt-0">
      <div className="mx-auto max-w-[1400px]">
        {/* HERO AREA SLIDER CONTAINER */}
        <div className="relative overflow-hidden">
          <div
            className="flex w-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide, slideIdx) => (
              <div
                key={slideIdx}
                className="relative grid min-h-[580px] w-full flex-shrink-0 grid-cols-1 sm:min-h-[600px] sm:grid-cols-12 sm:gap-4 lg:min-h-[650px] xl:min-h-[680px]"
              >
                {/* MOBILE BG IMAGE OVERLAY (Extends to absolute top-0 on mobile) */}
                <div className="absolute inset-0 z-0 block sm:hidden">
                  <img
                    src={slide.bgImageUrl}
                    alt={slide.title || "Background"}
                    className="h-full w-full object-cover object-center"
                  />
                  {/* Dark Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09244A]/95 via-[#09244A]/80 to-[#09244A]/60" />
                </div>

                {/* LEFT CONTENT (Padded at top on mobile `pt-[100px]` so text doesn't hit header) */}
                <div className="relative z-20 flex flex-col items-start justify-center md:w-[84%] px-5 pb-12 pt-[100px] sm:col-span-6 sm:ml-6 sm:px-0 sm:pb-20 sm:pt-12 lg:col-span-6 lg:ml-7 lg:pb-28 lg:pt-16 xl:col-span-6">
                  {/* Badge */}
                  {slide.badge && (
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF2FF] px-4 py-1.5 text-[12px] font-semibold text-[#245BC1] sm:py-2 sm:text-[13px]">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{slide.badge}</span>
                    </div>
                  )}

                  {/* Heading */}
                  <h1 className="mt-4 max-w-[650px] text-[28px] font-extrabold leading-[1.15] tracking-[-0.035em] text-white sm:mt-6 sm:text-[36px] sm:text-[#09244A] md:text-[44px] lg:text-[52px] xl:text-[58px]">
                    {slide.title}{" "}
                    <span className="block text-[#91D900]">
                      {slide.highlightedTitle}
                    </span>
                  </h1>

                  {/* Green Divider */}
                  <div className="mt-4 h-[2px] w-[52px] bg-[#91D900] sm:mt-5" />

                  {/* Description */}
                  {slide.desc && (
                    <p className="mt-4 max-w-[590px] text-[13px] font-medium leading-[1.6] text-slate-200 sm:text-[14px] sm:text-[#526174] md:text-[15px] lg:h-[84px] lg:overflow-hidden lg:text-[16px]">
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
                              : "border-[1.5px] border-white/80 bg-transparent text-white sm:border-[#17355C] sm:text-[#09244A] hover:-translate-y-0.5 hover:bg-[#09244A] hover:text-white"
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
                    <div className="mt-6 flex items-center gap-4 sm:mt-8">
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

                {/* RIGHT IMAGE AREA - Tablet & Desktop Only */}
                <div className="relative z-10 hidden sm:flex sm:col-span-6 sm:items-start sm:justify-end sm:-ml-12 lg:-ml-28 xl:-ml-36">
                  <div className="relative h-full w-full min-h-[540px] md:min-h-[590px] lg:h-[590px] lg:w-[calc(100%+8rem)] xl:h-[620px] xl:w-[calc(100%+12rem)]">
                    <div className="absolute inset-0 overflow-hidden bg-[#D8E5F2] sm:[clip-path:ellipse(95%_78%_at_100%_50%)]">
                      <div className="absolute inset-0 overflow-hidden bg-white sm:inset-y-[8px] sm:left-[8px] sm:right-0 sm:[clip-path:ellipse(95%_78%_at_100%_50%)] lg:inset-y-[10px] lg:left-[10px]">
                        <img
                          src={slide.bgImageUrl}
                          alt={slide.title || "Plumbing service"}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SLIDER ARROWS - Hidden on Mobile */}
          {slides.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === 0 ? slides.length - 1 : prev - 1
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
                className="absolute right-6 top-1/2 z-30 hidden -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#09244A]/60 p-2.5 text-white shadow-lg transition-all duration-300 hover:bg-[#9BE500] hover:text-[#09244A] sm:flex"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* MOBILE PAGINATION DOTS */}
              <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 sm:hidden">
                {slides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
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
        </div>

        {/* FEATURE CARDS - Hidden on Mobile */}
        {cards.length > 0 && (
          <div className="relative z-30 hidden w-full sm:block sm:mb-8 lg:absolute lg:bottom-0 lg:right-0 lg:mb-0 lg:mt-0 lg:w-[67%] xl:w-[64%]">
            <div className="overflow-hidden rounded-[18px] bg-[#062650] px-3 py-3 shadow-[0_12px_35px_rgba(3,27,61,0.28)] sm:px-4 sm:py-4 lg:rounded-[17px] lg:px-3 lg:py-3 xl:px-4 xl:py-4">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {cards.slice(0, 4).map((card, idx) => (
                  <div
                    key={idx}
                    className={`flex min-h-[140px] flex-col items-center justify-center px-3 py-3 text-center sm:px-4 lg:min-h-[150px] lg:px-4 xl:px-5 ${
                      idx !== 0
                        ? "border-t border-white/15 md:border-l sm:border-t-0"
                        : ""
                    }`}
                  >
                    <div className="mb-2.5 flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#9BE500] text-[#9BE500] sm:h-[48px] sm:w-[48px]">
                      {getIcon(card.icon)}
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-[12px] font-extrabold leading-[1.25] text-white sm:text-[14px]">
                        {card.title}
                      </h3>

                      <p className="mt-1 text-[10px] font-medium leading-[1.5] text-[#D3DCE8] sm:text-[11px]">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}