"use client";

import React from "react";
import Image from "next/image";
import { ServicePartnersData, site } from "@/data";
import SectionHeader from "../shared/SectionHeader";
import ScrollReveal from "../shared/ScrollReveal";

interface PartnersProps {
  partnersData?: ServicePartnersData;
}

export default function Partners({ partnersData }: PartnersProps) {
  const data = partnersData ?? site.partners;

  const partners = data?.partners ?? [];
  const marqueePartners = partners.concat(partners);

  return (
    <section className="w-full bg-white px-1 sm:px-6 lg:px-8">
      <ScrollReveal direction="up">
      <div className="mx-auto overflow-hidden rounded-[24px]  bg-white p-2 shadow-[0_4px_25px_rgba(0,0,0,0.03)] sm:p-0">
        {/* SECTION HEADER */}
        <SectionHeader
          pretitle={data.badge}
          title={data.title}
          description={data.desc}
          align="center"
          descriptionMaxWidth="max-w-2xl"
          className="mb-6"
        />

        {/* AUTO-SCROLLING MARQUEE */}
        {partners.length > 0 && (
          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="animate-marquee gap-3 sm:gap-6">
              {marqueePartners.map((partner, index) => (
                <div
                  key={`${partner.id ?? partner.name ?? "partner"}-${index}`}
                  className="w-[180px] shrink-0 sm:w-[260px] md:w-[300px] lg:w-[320px]"
                >
                  <div className="flex h-20 w-full cursor-pointer items-center justify-center rounded-[14px] border border-slate-100 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:border-slate-200 hover:shadow-md sm:h-28 sm:px-8 sm:py-5">
                    <Image
                      src={partner.logo}
                      alt={partner.name || "Partner logo"}
                      width={320}
                      height={160}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </ScrollReveal>
    </section>
  );
}