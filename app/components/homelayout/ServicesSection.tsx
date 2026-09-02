"use client";

import React from "react";
import Link from "next/link";
import { site } from "@/data";
import SectionHeader from "../shared/SectionHeader";
import ScrollReveal from "../shared/ScrollReveal";
import {
  Wrench,
  Droplets,
  Flame,
  Bath,
  GitCommit,
  ArrowRight,
  Clock,
  ShieldCheck,
  ThumbsUp,
  UserCheck,
} from "lucide-react";
import siteData from "@/data/site.json";


// Extract Type (Compile-Time)
export type ServiceData =
  typeof siteData.ServiceIndustries.sections.Service.variants.ServiceService1;

// Access Data safely (Runtime)
const defaultServiceData: ServiceData =
  siteData?.ServiceIndustries?.sections?.Service?.variants?.ServiceService1;
// Icon mapper to match JSON icon names dynamically
const renderServiceIcon = (iconName: string) => {
  const iconProps = { className: "h-6 md:w-12 md:h-12 w-6 text-[#1E40AF]" };

  switch (iconName) {
    case "faucet":
      return <Droplets {...iconProps} />;
    case "drain":
      return <Wrench {...iconProps} />;
    case "water-heater":
      return <Flame {...iconProps} />;
    case "toilet":
      return <Bath {...iconProps} />;
    case "pipe":
      return <GitCommit {...iconProps} />;
    case "tools":
      return <Wrench {...iconProps} />;
    default:
      return <Wrench {...iconProps} />;
  }
};

export default function ServicesSection({
  serviceData,
}: {
  serviceData?: ServiceData;
}) {
  const data = serviceData || defaultServiceData;

  const badge = data?.badge || "OUR SERVICES";
  const title = data?.title || {
    normal: "Our",
    highlighted: "Plumbing Services",
  };
  const description =
    data?.description ||
    "We provide reliable and professional plumbing solutions to keep your home or business running smoothly.";
  const services = data?.services || [];
  const bottomBanner = data?.bottomBanner;

  const renderFeatureIcon = (iconName: string) => {
    const iconClass = "h-7 w-7 sm:w-10 sm:h-10";
    switch (iconName) {
      case "clock-24":
        return <Clock className={`${iconClass} text-[#84CC16]`} />;
      case "shield-dollar":
        return <ShieldCheck className={`${iconClass} text-[#f300a2]`} />;
      case "thumbs-up":
        return <ThumbsUp className={`${iconClass} text-[#e60a0a]`} />;
      case "users-check":
        return <UserCheck className={`${iconClass} text-[#01a2ff]`} />;
      default:
        return <Clock className={`${iconClass} text-[#f7be04]`} />;
    }
  };

  return (
    <section className="w-full bg-white md:py-12 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        {/* SECTION HEADER */}
        <SectionHeader
          pretitle={badge}
          title={{ normal: title.normal, highlighted: title.highlighted }}
          description={description}
          align="center"
          descriptionMaxWidth="max-w-xl"
          className="mx-auto mb-10 max-w-2xl"
          highlightClassName="text-[#1E40AF]"
        />

        {/* SERVICES GRID */}
        {/* Mobile: 1 col (stacked top img / bottom text) | Tablet: 2 cols | Desktop: 3 cols */}
        <ScrollReveal direction="up">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((item: any) => (
            <Link
              key={item.id}
              href={item.href || "/service-details"}
              className="group flex flex-col-reverse sm:flex-row overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              {/* CONTENT AREA (Left on Desktop/Tablet, Bottom on Mobile) */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-5 lg:p-6">
                <div>
                  {/* Icon Circle */}
                  <div className="flex h-12 md:h-20 md:w-20 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF] mb-4 transition-transform duration-300 group-hover:scale-105">
                    {renderServiceIcon(item.iconName)}
                  </div>
                  <div className="h-[2px] ml-2 w-8  bg-[#1E40AF]  mt-4 rounded-full" />


                  <h3 className="text-[17px] font-bold leading-snug text-[#0F172A] group-hover:text-[#1E40AF] transition-colors duration-200">
                    {item.title}
                  </h3>


                  <p className="mt-2 text-sm font-medium leading-relaxed text-[#64748B]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* IMAGE AREA (Right on Desktop/Tablet, Top on Mobile) */}
              <div className="relative h-48 w-full sm:h-auto sm:w-[45%] shrink-0 overflow-hidden bg-slate-100">
                <img
                  src={item.image?.src}
                  alt={item.image?.alt || item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
        </ScrollReveal>

        {/* BOTTOM CALL TO ACTION BANNER */}
        {bottomBanner && (
          <div className="mt-10 rounded-3xl bg-blue-50/50 p-3 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Text & Actions */}
              <ScrollReveal direction="left" className="lg:col-span-6">
              <div className="lg:col-span-6">
                <span className="text-sm font-black uppercase tracking-widest text-[#0052CC]">
                  {bottomBanner.tagline}
                </span>
                <h3 className="mt-2 text-2xl font-black text-[#0F172A] sm:text-3xl lg:text-4xl">
                  {bottomBanner.title.normal}{" "}
                  <span className="text-[#0052CC]">
                    {bottomBanner.title.highlighted}
                  </span>
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#64748B] sm:text-sm">
                  {bottomBanner.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={bottomBanner.primaryButton.href}
                    className="rounded-xl bg-[#84CC16] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#74b512] active:scale-[0.98] sm:text-sm"
                  >
                    {bottomBanner.primaryButton.label}
                  </Link>
                  <Link
                    href={bottomBanner.secondaryButton.href}
                    className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-[#0052CC] transition-all hover:bg-blue-50 active:scale-[0.98] sm:text-sm"
                  >
                    {bottomBanner.secondaryButton.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              </ScrollReveal>

              {/* Right 2x2 Feature Highlights */}
              <ScrollReveal direction="right" className="lg:col-span-6">
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {bottomBanner.features.map((feat: any) => (
                    <div
                      key={feat.id}
                      className="flex items-start gap-3.5 rounded-2xl bg-white p-4 shadow-sm"
                    >
                      <div className="flex h-10 sm:w-16 sm:h-16 w-10 shrink-0 items-center justify-center rounded-full bg-lime-50">
                        {renderFeatureIcon(feat.iconName)}
                      </div>
                      <div>
                        <h4 className="text-md font-bold text-[#0F172A] sm:text-lg">
                          {feat.title}
                        </h4>
                        <p className="mt-1 text-[13px] font-medium text-[#64748B]">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </ScrollReveal>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
