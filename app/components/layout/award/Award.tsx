"use client";

import Image from "next/image";
import Link from "next/link";
import { ServiceAwardsData, site } from "@/data";
import PageBanner from "../../shared/PageBanner";
import SectionHeader from "../../shared/SectionHeader";
import { Trophy, ShieldCheck, HardHat, Leaf, ArrowRight } from "lucide-react";
import { LiaAwardSolid } from "react-icons/lia";


interface AwardsProps {
  awardsData?: ServiceAwardsData;
}

export default function Awards({ awardsData }: AwardsProps) {
  const data = awardsData ?? (site.awards as unknown as ServiceAwardsData);

  // Helper function to render card icons
  const renderCardIcon = (iconName: string) => {
    const iconClass = "h-5 w-5 sm:h-7 sm:w-7 text-[#0052CC]";
    switch (iconName) {
      case "trophy":
        return <Trophy className={iconClass} />;
      case "shield-check":
        return <ShieldCheck className={iconClass} />;
      case "hard-hat":
        return <HardHat className={iconClass} />;
      case "leaf":
        return <Leaf className={iconClass} />;
      default:
        return <Trophy className={iconClass} />;
    }
  };

  return (
    <>
      {/* PAGE BANNER */}
      {data?.banner && (
        <PageBanner
          title={data.banner.title}
          breadcrumbHome={data.banner.breadcrumbHome}
          breadcrumbCurrent={data.banner.breadcrumbCurrent}
          backgroundImage={data.banner.backgroundImage}
          homeHref={data.banner.homeHref}
        />
      )}

      {/* AWARDS & CERTIFICATES SECTION */}
      <section className="bg-[#FAFBFD] py-8 md:py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          {/* Header */}
          <SectionHeader
            pretitle={data?.tagline}
            title={data?.title}
            description={data?.description}
            align="center"
            descriptionMaxWidth="max-w-2xl"
          />

          {/* Awards Cards Grid */}
          {data?.awards && data.awards.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.awards.map((award) => (
                <div
                  key={award.id}
                  className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Certificate Image Frame */}
                  <div className="relative aspect-[4/3] w-full  rounded-xl bg-slate-100">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Icon Circle */}
                  <div className="mx-auto -mt-6 z-30 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-blue-50 shadow-md sm:h-14 sm:w-14">
                    {renderCardIcon(award.iconName)}
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 text-base font-bold text-[#0F172A]">
                    {award.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-[#64748B]">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Banner CTA Strip */}
          {data?.bottomCta && (
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-blue-50/60 p-6 sm:flex-row sm:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="h-14 sm:w-28 sm:h-28 w-14 shrink-0 items-center justify-center rounded-full  text-[#0052CC]  sm:flex">
                  <LiaAwardSolid className="h-10 sm:w-24 sm:h-24 w-10" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0F172A] sm:text-lg">
                    {data.bottomCta.title}
                  </h4>
                  <p className="mt-1 max-w-xl text-xs font-medium text-[#64748B] sm:text-sm">
                    {data.bottomCta.description}
                  </p>
                </div>
              </div>

              <Link
                href={data.bottomCta.buttonLink}
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0052CC] px-6 py-3 text-xs font-bold text-white transition-all hover:bg-[#0043A8] active:scale-[0.98] sm:text-sm"
              >
                {data.bottomCta.buttonText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}