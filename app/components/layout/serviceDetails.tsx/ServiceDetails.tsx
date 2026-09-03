"use client";

import Image from "next/image";
import { ServiceDetailData } from "@/type/typeSection";
import PageBanner from "../../shared/PageBanner";
import SectionHeader from "../../shared/SectionHeader";
import ScrollReveal from "../../shared/ScrollReveal";
import {
  CheckCircle2,
  Droplets,
  Zap,
  Bath,
  RotateCw,
  Flame,
  Wrench,
  SearchCheck,
  ShowerHead,
} from "lucide-react";

interface ServiceDetailsProps {
  detailData: ServiceDetailData;
}

export default function ServiceDetails({ detailData }: ServiceDetailsProps) {
  if (!detailData) return null;

  const renderIcon = (iconName: string) => {
    const iconClass = "h-6 sm:w-10 sm:h-10 w-6 text-[#0052CC]";
    switch (iconName) {
      case "faucet":
        return <Droplets className={iconClass} />;
      case "pipe-burst":
        return <Zap className={iconClass} />;
      case "toilet":
        return <Bath className={iconClass} />;
      case "drain":
        return <RotateCw className={iconClass} />;
      case "water-heater":
        return <Flame className={iconClass} />;
      case "search-check":
        return <SearchCheck className={iconClass} />;
      case "shower":
        return <ShowerHead className={iconClass} />;
      case "tools":
      default:
        return <Wrench className={iconClass} />;
    }
  };

  return (
    <>
      {/* PAGE BANNER */}
      {detailData.banner && (
        <PageBanner
          title={detailData.banner.title}
          breadcrumbHome={detailData.banner.breadcrumbHome}
          breadcrumbCurrent={detailData.banner.breadcrumbCurrent}
          breadcrumbs={detailData.banner.breadcrumbs}
          backgroundImage={detailData.banner.backgroundImage}
          homeHref={detailData.banner.homeHref}
        />
      )}

      {/* TOP HERO SECTION (Content Left + Image Right) */}
      <section className="bg-white py-8 md:py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <ScrollReveal direction="left" className="lg:col-span-6">
            <div className="lg:col-span-6">
              <h1 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl lg:leading-tight">
                {detailData.hero.title.normal}{" "}
                <span className="text-[#0052CC]">
                  {detailData.hero.title.highlighted}
                </span>
              </h1>

              <p className="mt-4 text-sm font-medium leading-relaxed text-[#64748B] sm:text-base">
                {detailData.hero.description}
              </p>

              {/* Checklist */}
              {detailData.hero.checklist && (
                <div className="mt-6 flex flex-col gap-3">
                  {detailData.hero.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#84CC16]/10 text-[#84CC16]">
                        <CheckCircle2 className="h-4 w-4 fill-[#84CC16] text-white" />
                      </div>
                      <span className="text-sm font-semibold text-[#0F172A] sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            </ScrollReveal>

            {/* Right Image Frame */}
            <ScrollReveal direction="right" className="lg:col-span-6">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={detailData.hero.image.src}
                  alt={detailData.hero.image.alt}
                  fill
                  sizes="(min-width: 1024px) 576px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* COMMON REPAIRS / FEATURES GRID SECTION */}
      {detailData.featuresSection && (
        <section className="bg-white pb-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            
            {/* Header */}
            <SectionHeader
              pretitle={detailData.featuresSection.tagline}
              title={detailData.featuresSection.title}
              align="center"
            />

            {/* 3-Column Features Grid */}
            <ScrollReveal direction="up">
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {detailData.featuresSection.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 sm:w-20 sm:h-20 w-14 items-center justify-center rounded-2xl bg-blue-50">
                    {renderIcon(item.iconName)}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-[#0F172A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-[#64748B]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            </ScrollReveal>

          </div>
        </section>
      )}
    </>
  );
}