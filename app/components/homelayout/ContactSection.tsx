"use client";

import React from "react";
import siteData from "@/data/site.json";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Extract Type (Compile-Time) based on your JSON structure
export type ContactSectionData =
  typeof siteData.ServiceIndustries.sections.ContactSection.variants.ServiceContactSection1;

// Access Data safely (Runtime)
const defaultContactData: ContactSectionData =
  siteData?.ServiceIndustries?.sections?.ContactSection?.variants
    ?.ServiceContactSection1;

// Dynamic Icon Helper
const renderIcon = (title: string) => {
  const iconProps = { className: "h-5 w-5" };
  switch (title.toLowerCase()) {
    case "phone":
      return <Phone {...iconProps} />;
    case "email":
      return <Mail {...iconProps} />;
    case "address":
      return <MapPin {...iconProps} />;
    case "working hours":
    case "hours":
      return <Clock {...iconProps} />;
    default:
      return <Phone {...iconProps} />;
  }
};

export default function ContactSection({
  contactData,
}: {
  contactData?: ContactSectionData;
}) {
  const data = contactData || defaultContactData;

  const badge = "CONTACT US";
  const title = data?.title || "Get in Touch";
  const contactItems = data?.contactItems || [];
  const mapData = data?.map;

  return (
    <section className="w-full bg-[#EFF6FF]/60 py-8 px-4 sm:px-8 lg:py-16 lg:px-12">
      <div className="mx-auto max-w-[1350px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* LEFT SIDE: Heading, Badge Button & Info List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-6 lg:gap-6">
            {/* Left Column: Badge, Title & Custom Button (Centered on mobile) */}
            <div className="flex flex-col items-center justify-start pb-6 sm:items-start sm:pb-0 text-center sm:text-left">
              <span className="text-[12px] font-bold uppercase tracking-widest text-[#1E40AF]">
                {badge}
              </span>
              <h2 className="mt-0 text-[32px] font-extrabold text-[#1E293B] sm:text-[36px] lg:text-[40px]">
                {title}
              </h2>

              <div className="mt-6 sm:mt-8">
                <a
                  href={mapData?.directionsUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-[#1E40AF] bg-white px-6 py-2.5 text-[14px] font-bold text-[#1E40AF] shadow-sm transition-all duration-300 hover:bg-[#1E40AF] hover:text-white"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1E40AF] text-[11px] font-bold text-white">
                    G
                  </span>
                  {title}
                </a>
              </div>
            </div>

            {/* Right Column: Contact Items from JSON (Centered on mobile) */}
            <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-col sm:items-start sm:gap-6">
              {contactItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left"
                >
                  {/* Round Blue Icon Wrapper */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] text-[#1E40AF]">
                    {renderIcon(item.iconTitle)}
                  </div>

                  {/* Icon Title & Dynamic Array Values */}
                  <div>
                    <h4 className="text-[14px] font-bold text-[#0F172A]">
                      {item.iconTitle}
                    </h4>

                    {item.values?.map((val, vIdx) => (
                      <p
                        key={vIdx}
                        className="mt-0.5 text-[13px] font-medium leading-relaxed text-[#64748B]"
                      >
                        {val}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Map View */}
          <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-sm lg:col-span-6 lg:h-[360px]">
            {mapData?.embedUrl ? (
              <iframe
                title={mapData?.title || "Map Location"}
                src={mapData.embedUrl}
                className="h-full w-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-400">
                Map Unavailable
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
