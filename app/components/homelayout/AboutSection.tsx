"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  Calendar,
  Users,
  Award,
  ArrowRight,
  Check,
  Clock,
  Settings,
} from "lucide-react";
import siteData from "@/data/site.json";
import { IoShieldCheckmark } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";

export type AboutPageData =
  typeof siteData.ServiceIndustries.sections.AboutPage.variants.ServiceAboutPage1;

export type FeatureStripData =
  typeof siteData.ServiceIndustries.sections.FeatureStrip.variants.ServiceFeatureStrip1;

interface AboutSectionProps {
  aboutData?: AboutPageData;
  featureStripData?: FeatureStripData;
}

// Animated Counter component handling string/number values like "4.3K" or "18"
function AnimatedCounter({
  targetString,
  suffix = "",
}: {
  targetString: string;
  suffix?: string;
}) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const numericMatch = targetString.match(/[0-9.]+/);
    const hasK = targetString.toUpperCase().includes("K");
    const rawNum = numericMatch ? parseFloat(numericMatch[0]) : 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const duration = 2000;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentNum = (progress * rawNum).toFixed(
              targetString.includes(".") ? 1 : 0,
            );

            setDisplayValue(`${currentNum}${hasK ? "K" : ""}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [targetString, hasAnimated]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function AboutSection({
  aboutData,
  featureStripData,
}: AboutSectionProps) {
  const data =
    aboutData ||
    siteData.ServiceIndustries.sections.AboutPage.variants.ServiceAboutPage1 ||
    {};
  const featureStrip =
    featureStripData ||
    siteData.ServiceIndustries.sections.FeatureStrip.variants
      .ServiceFeatureStrip1 ||
    [];
  const stats = data.stats || [];

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "calendar":
        return <Calendar className="h-5 w-5 text-[#2563EB]" />;
      case "users":
        return <Users className="h-5 w-5 text-[#16A34A]" />;
      case "award":
        return <Award className="h-5 w-5 text-[#2563EB]" />;
      default:
        return <IoShieldCheckmark className="h-5 w-5 text-[#2563EB]" />;
    }
  };

  const getStatBg = (iconName: string) => {
    switch (iconName) {
      case "users":
        return "bg-[#DCFCE7]";
      default:
        return "bg-[#DBEAFE]";
    }
  };

  const getFeatureIcon = (iconName: string, index: number) => {
    switch (iconName) {
      case "shield-check":
        return (
          <IoShieldCheckmark className="h-5 md:h-8 md:w-8 w-5 text-[#1E40AF]" />
        );
      case "heart-handshake":
        return <RiCustomerService2Line className="h-5 w-5 text-[#16A34A]" />;
      case "clock":
        return <Clock className="h-5 w-5 md:h-8 md:w-8 text-[#1E40AF]" />;
      case "users":
        return <Settings className="h-5 w-5 md:h-8 md:w-8 text-[#16A34A]" />;
      default:
        return index % 2 === 0 ? (
          <IoShieldCheckmark className="h-5 w-5 md:h-8 md:w-8 text-[#1E40AF]" />
        ) : (
          <RiCustomerService2Line className="h-5 w-5 md:h-8 md:w-8 text-[#16A34A]" />
        );
    }
  };

  const getFeatureBg = (index: number) => {
    return index % 2 === 0 ? "bg-[#DBEAFE]" : "bg-[#DCFCE7]";
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 md:py-12">
      <div className="mx-auto max-w-[1300px] px-2 sm:px-6 lg:px-8">
        {/* 1. TOP CENTERED HEADER SECTION */}
        <div className="mx-auto flex max-w-[950px] flex-col items-center text-center">
          {/* Pretitle Badge */}
          {data.pretitle && (
            <div className="flex flex-col items-center">
              <span className="text-[14px] font-bold text-[#1E40AF] sm:text-[17px]">
                {data.pretitle}
              </span>
              <div className="mt-1 h-[2.5px] w-10 bg-[#84CC16]" />
            </div>
          )}

          {/* Top Title & Highlighted Text */}
          {data.title && (
            <h2 className="mt-0 text-[26px] font-extrabold leading-[1.25] tracking-tight text-[#0F172A] sm:text-[36px] md:text-[40px] lg:text-[42px]">
              {data.title}{" "}
              {data.highlightedTitle && (
                <span className="text-[#2563EB]">{data.highlightedTitle}</span>
              )}
            </h2>
          )}
        </div>

        {/* 2. BOTTOM 2-COLUMN GRID SECTION */}
        <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* LEFT SIDE: CUSTOM SHAPED IMAGE + FLOATING BADGE + GRID ACCENT */}
          <div className="order-2 flex justify-center lg:order-1 lg:col-span-6">
            <div className="relative w-full max-w-[540px] pb-10 pl-6 pr-4 pt-8">
              {/* Top-Left Blue Dot Grid Accent */}
              <div
                className="absolute left-0 top-0 z-0 h-[100px] w-[100px]"
                style={{
                  backgroundImage:
                    "radial-gradient(#2563EB 3px, transparent 3px)",
                  backgroundSize: "18px 18px",
                }}
              />

              {/* Bottom-Left Solid Blue Background Shape Accent */}
              <div className="absolute bottom-6 left-2 z-0 h-[100px] w-[100px] rounded-[15px] bg-[#1E40AF]" />

              {/* Main Image with Rounded Corners matching exact screenshot */}
              <div className="relative z-10 overflow-hidden rounded-[45px] bg-slate-100 shadow-md">
                <img
                  src={data.sideImages?.mainLeft || "/plumberImage/image4.png"}
                  alt={data.title || "About Us"}
                  className="h-[360px] w-full object-cover sm:h-[440px] md:h-[480px]"
                />
              </div>

              {/* Bottom Floating Blue Badge Card */}
              {data.badge && (
                <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3.5 rounded-2xl bg-[#1E40AF] px-5 py-4 text-white shadow-xl sm:px-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#84CC16] text-[#0F172A]">
                    <Check className="h-6 w-6 stroke-[3]" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[14px] font-bold text-white sm:text-[15px]">
                      {data.badge.title}
                    </h4>
                    <p className="text-[11px] font-medium text-blue-100 sm:text-[12px]">
                      {data.badge.desc}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT + STATS + BUTTON */}
          <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:col-span-6 lg:items-start lg:text-left">
            {/* Subtitle Badge with Green Accent Line */}
            {data.subTitle && (
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-bold tracking-wider text-[#1E40AF] uppercase sm:text-[14px]">
                  {data.subTitle}
                </span>
                <div className="h-[2px] w-10 bg-[#84CC16]" />
              </div>
            )}

            {/* Main Heading */}
            {data.heading && (
              <h3 className="mt-3 text-[28px] font-extrabold leading-[1.2] text-[#0F172A] sm:text-[34px] md:text-[38px]">
                {data.heading}
              </h3>
            )}

            {/* Description Paragraph */}
            {data.desc && (
              <p className="mt-4 text-[14px] font-medium leading-[1.7] text-[#64748B] sm:text-[15px]">
                {data.desc}
              </p>
            )}

            {/* White Card with Animated Stats */}
            {stats.length > 0 && (
              <div className="mt-8 grid w-full grid-cols-2 gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.05)] sm:grid-cols-3 sm:gap-2 sm:p-6">
                {stats.map((stat, idx) => (
                  <div
                    key={stat.id || idx}
                    className={`flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:text-left sm:gap-3.5 ${
                      idx !== 0
                        ? "border-l border-gray-100 pl-3 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6"
                        : ""
                    } ${
                      stats.length % 2 !== 0 && idx === stats.length - 1
                        ? "col-span-2 sm:col-span-1"
                        : ""
                    }`}
                  >
                    {/* Circle Icon Badge */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${getStatBg(
                        stat.iconName,
                      )}`}
                    >
                      {getStatIcon(stat.iconName)}
                    </div>

                    {/* Stat Number & Label */}
                    <div className="flex flex-col items-center sm:items-start">
                      <span className="text-[22px] font-black leading-none text-[#1E40AF] sm:text-[28px]">
                        <AnimatedCounter targetString={stat.number} />
                        <span className="text-[#84CC16]">{stat.suffix}</span>
                      </span>

                      <span className="mt-1.5 text-[11px] font-semibold text-[#64748B] sm:text-[12px]">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Outlined Pill Action Button */}
            {data.button && (
              <Link
                href={data.button.href}
                className="mt-8 inline-flex h-[46px] items-center justify-center gap-3 rounded-full border-[1.5px] border-[#1E40AF] px-7 text-[14px] font-bold text-[#1E40AF] transition-all duration-300 hover:bg-[#1E40AF] hover:text-white"
              >
                <span>{data.button.label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>

        {/* 3. FEATURE STRIP CARD CONTAINER BELOW IMAGE & CONTENT */}
        {featureStrip.length > 0 && (
          <div className="mt-8 w-full rounded-2xl border border-gray-100 bg-white px-6 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:px-8 sm:py-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {featureStrip.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 ${
                    index !== 0 ? "lg:border-l lg:border-gray-100 lg:pl-6" : ""
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${getFeatureBg(
                      index,
                    )}`}
                  >
                    {getFeatureIcon(item.icon, index)}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[14px] font-bold text-[#0F172A] sm:text-[15px]">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-[12px] font-medium leading-relaxed text-[#64748B]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
