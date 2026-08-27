"use client";

import React from "react";
import siteData from "@/data/site.json";

export type ServicePartnersData =
  typeof siteData.ServiceIndustries.sections.Partners.variants.ServicePartners1;

const defaultPartnersData: ServicePartnersData =
  siteData?.ServiceIndustries?.sections?.Partners?.variants?.ServicePartners1;

export default function Partners({
  partnersData,
}: {
  partnersData?: ServicePartnersData;
}) {
  const data = partnersData || defaultPartnersData;

  const badge = data?.badge || "TRUSTED BY";
  const title = data?.title || "Trusted by Our Partners";
  const desc =
    data?.desc ||
    "We are proud to work with leading brands who trust our expertise and services.";

  const partners = data?.partners || [];

  const marqueePartners = partners.concat(partners);

  return (
    <section className="w-full bg-white px-1 sm:px-6 lg:px-8">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto overflow-hidden rounded-[24px] border border-slate-100 bg-white p-2 shadow-[0_4px_25px_rgba(0,0,0,0.03)] sm:p-10">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <div className="mb-0 inline-flex items-center gap-3">
            <span className="h-[2px] w-6 rounded-full bg-[#9BE500]" />

            <span className="text-[12px] font-bold tracking-wider text-[#245BC1] uppercase sm:text-[13px]">
              {badge}
            </span>

            <span className="h-[2px] w-6 rounded-full bg-[#9BE500]" />
          </div>

          <h2 className="mb-0 text-[22px] font-extrabold tracking-[-0.02em] text-[#09244A] sm:text-[32px] md:text-[36px]">
            {title}
          </h2>

          {desc && (
            <p className="text-[13px] font-medium leading-relaxed text-[#526174] sm:text-[15px]">
              {desc}
            </p>
          )}
        </div>

        {/* AUTO-SCROLLING MARQUEE */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="animate-marquee gap-3 sm:gap-6">
            {marqueePartners.map((partner, index) => (
              <div
                key={`${partner.id ?? partner.name ?? "partner"}-${index}`}
                className="w-[140px] shrink-0 sm:w-[180px] md:w-[200px]"
              >
                <div className="flex h-16 cursor-pointer items-center justify-center rounded-[14px] border border-slate-100 bg-white p-3 shadow-sm transition-all duration-300 hover:border-slate-200 hover:shadow-md sm:h-24 sm:p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name || "Partner logo"}
                    className="h-12 w-[150px] object-contain sm:h-16 sm:w-[170px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}