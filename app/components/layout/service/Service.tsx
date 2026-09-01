"use client";

import Image from "next/image";
import Link from "next/link";
import { ServiceServiceData, site } from "@/data";
import PageBanner from "../../shared/PageBanner";
import SectionHeader from "../../shared/SectionHeader";
import {
  Wrench,
  RotateCw,
  Flame,
  Pipette,
  Bath,
  UtensilsCrossed,
  ShowerHead,
  SearchCheck,
  Clock,
  ShieldCheck,
  ThumbsUp,
  UserCheck,
  ArrowRight,
} from "lucide-react";

interface ServicesProps {
  servicesData?: ServiceServiceData;
}

export default function Services({ servicesData }: ServicesProps) {
  const data = servicesData ?? (site.service as unknown as ServiceServiceData);

  const renderServiceIcon = (iconName: string) => {
    const iconClass = "h-6 w-6 text-[#0052CC]";
    switch (iconName) {
      case "wrench":
        return <Wrench className={iconClass} />;
      case "drain":
        return <RotateCw className={iconClass} />;
      case "water-heater":
        return <Flame className={iconClass} />;
      case "pipe":
        return <Pipette className={iconClass} />;
      case "toilet":
        return <Bath className={iconClass} />;
      case "kitchen-sink":
        return <UtensilsCrossed className={iconClass} />;
      case "shower":
        return <ShowerHead className={iconClass} />;
      case "search-check":
        return <SearchCheck className={iconClass} />;
      default:
        return <Wrench className={iconClass} />;
    }
  };

  const renderFeatureIcon = (iconName: string) => {
    const iconClass = "h-7 w-7 sm:w-10 sm:h-10 ";
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

      {/* SERVICES GRID SECTION */}
      <section className="bg-[#FAFBFD] py-8 md:py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          {/* Header */}
          <SectionHeader
            pretitle={data?.badge}
            title={data?.title ? { normal: data.title.normal, highlighted: data.title.highlighted } : undefined}
            align="center"
          />

          {/* 4-Column Grid for Services */}
          {data?.services && data.services.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.services.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_4px_25px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    {/* Service Image Frame */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Title with inline icon */}
                    <div className="mt-5 flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                        {renderServiceIcon(item.iconName)}
                      </div>
                      <h3 className="text-lg font-bold leading-tight text-[#0F172A]">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm font-medium leading-relaxed text-[#64748B]">
                      {item.description}
                    </p>
                  </div>

                  {/* Dynamic Slug Routing Link */}
                  <Link
                    href={item.href || `/services/${item.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#0052CC] transition-colors hover:text-[#0043A8]"
                  >
                    {item.linkText || "Learn More"}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Banner CTA Section */}
          {data?.bottomBanner && (
            <div className="mt-10 rounded-3xl bg-blue-50/50 p-3 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                {/* Left Text & Actions */}
                <div className="lg:col-span-6">
                  <span className="text-sm font-black uppercase tracking-widest text-[#0052CC]">
                    {data.bottomBanner.tagline}
                  </span>
                  <h3 className="mt-2 text-2xl font-black text-[#0F172A] sm:text-3xl lg:text-4xl">
                    {data.bottomBanner.title.normal}{" "}
                    <span className="text-[#0052CC]">
                      {data.bottomBanner.title.highlighted}
                    </span>
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-[#64748B] sm:text-sm">
                    {data.bottomBanner.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href={data.bottomBanner.primaryButton.href}
                      className="rounded-xl bg-[#84CC16] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#74b512] active:scale-[0.98] sm:text-sm"
                    >
                      {data.bottomBanner.primaryButton.label}
                    </Link>
                    <Link
                      href={data.bottomBanner.secondaryButton.href}
                      className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3.5 text-sm font-bold text-[#0052CC] transition-all hover:bg-blue-50 active:scale-[0.98] sm:text-sm"
                    >
                      {data.bottomBanner.secondaryButton.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right 2x2 Feature Highlights */}
                <div className="lg:col-span-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {data.bottomBanner.features.map((feat) => (
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
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}