"use client";

import React from "react";
import Link from "next/link";
import { site } from "@/data";
import {
  Wrench,
  Droplets,
  Flame,
  Bath,
  GitCommit,
  Phone,
  ArrowRight,
} from "lucide-react";
import siteData from "@/data/site.json";
import { BsClockHistory } from "react-icons/bs";


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

  return (
    <section className="w-full bg-white md:py-12 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-2xl text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-0">
            <span className="h-[2px] w-8 bg-[#1E40AF]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E40AF]" />
            <span className="text-[13px] font-bold tracking-wider text-[#1E40AF] uppercase">
              {badge}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E40AF]" />
            <span className="h-[2px] w-8 bg-[#1E40AF]" />
          </div>

          <h2 className="text-[30px] sm:text-[38px] md:text-[42px] font-black text-[#0F172A] tracking-tight leading-tight mb-1">
            {title.normal}{" "}
            <span className="text-[#1E40AF]">{title.highlighted}</span>
          </h2>

          {description && (
            <p className="text-[14px] sm:text-[15px] font-medium text-[#64748B] leading-relaxed max-w-xl mx-auto">
              {description}
            </p>
          )}

          <div className="h-[3px] w-12 bg-[#1E40AF] mx-auto mt-4 rounded-full" />
        </div>

        {/* SERVICES GRID */}
        {/* Mobile: 1 col (stacked top img / bottom text) | Tablet: 2 cols | Desktop: 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item: any) => (
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

        {/* BOTTOM CALL TO ACTION BANNER */}
        {bottomBanner && (
          <div className="mt-10 flex flex-col  justify-between gap-6 rounded-2xl bg-[#EFF6FF] p-5 sm:p-6 md:flex-row border border-blue-50/50 shadow-sm">
            {/* Call Section */}
            {bottomBanner.callSection && (
              <div className="flex gap-4  md:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1E40AF] text-white shadow-md">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[12px] font-semibold text-[#64748B]">
                    {bottomBanner.callSection.title}
                  </span>
                  <a
                    href={bottomBanner.callSection.phoneHref}
                    className="text-[18px] sm:text-[20px] font-extrabold text-[#0F172A] hover:text-[#1E40AF] transition-colors"
                  >
                    {bottomBanner.callSection.phone}
                  </a>
                </div>
              </div>
            )}

            {/* Divider for Desktop */}
            <div className="hidden h-10 w-[1px] bg-blue-200/60 md:block" />

            {/* Emergency 24/7 Section */}
            {bottomBanner.emergencySection && (
              <div className="flex items-center gap-4  md:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1E40AF] text-white shadow-md">
                  <BsClockHistory className="h-5 md:w-8 md:h-8 w-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-[#0F172A]">
                    {bottomBanner.emergencySection.title}
                  </h4>
                  <p className="text-[12px] font-medium text-[#64748B]">
                    {bottomBanner.emergencySection.desc}
                  </p>
                </div>
              </div>
            )}

            {/* CTA Button */}
            {bottomBanner.button && (
              <Link
                href={bottomBanner.button.href}
                className="inline-flex h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-[#1E40AF] px-6 text-[13px] font-bold text-white shadow-md transition-all duration-300 hover:bg-[#1d399b] hover:shadow-lg md:w-auto shrink-0"
              >
                <span>{bottomBanner.button.label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
