"use client";

import React from "react";

import { ServicePartnersData, site } from "@/data";

interface PartnersProps {
  partnersData?: ServicePartnersData;
}

export default function Partners({ partnersData }: PartnersProps) {
  const data = partnersData ?? site.partners;

  const partners = data?.partners ?? [];
  const marqueePartners = partners.concat(partners);

  return (
    <section className="w-full bg-white px-1 sm:px-6 lg:px-8">
      <div className="mx-auto overflow-hidden rounded-[24px] border border-slate-100 bg-white p-2 shadow-[0_4px_25px_rgba(0,0,0,0.03)] sm:p-10">
        {/* SECTION HEADER */}
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <div className="mb-0 inline-flex items-center gap-3">
            <span className="h-[2px] w-6 rounded-full bg-[#9BE500]" />

            <span className="text-[12px] font-bold uppercase tracking-wider text-[#245BC1] sm:text-[13px]">
              {data.badge}
            </span>

            <span className="h-[2px] w-6 rounded-full bg-[#9BE500]" />
          </div>

          <h2 className="mb-0 text-[22px] font-extrabold tracking-[-0.02em] text-[#09244A] sm:text-[32px] md:text-[36px]">
            {data.title}
          </h2>

          {data.desc && (
            <p className="text-[13px] font-medium leading-relaxed text-[#526174] sm:text-[15px]">
              {data.desc}
            </p>
          )}
        </div>

        {/* AUTO-SCROLLING MARQUEE */}
        {partners.length > 0 && (
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
        )}
      </div>
    </section>
  );
}
