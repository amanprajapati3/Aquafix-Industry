"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PageBanner from "../../shared/PageBanner";
import ScrollReveal from "../../shared/ScrollReveal";
import { ServiceSitemapData } from "@/type/typeSection";

interface SiteMapProps {
  data?: ServiceSitemapData;
}

export default function SiteMap({ data }: SiteMapProps) {
  if (!data) return null;

  const { banner, sitemap } = data;

  return (
    <>
      {/* PAGE BANNER */}
      {banner && (
        <PageBanner
          title={banner.title}
          breadcrumbHome={banner.breadcrumbHome}
          breadcrumbCurrent={banner.breadcrumbCurrent}
          backgroundImage={banner.backgroundImage}
          homeHref={banner.homeHref}
        />
      )}

      {/* SITEMAP CONTENT SECTION */}
      <section className="bg-[#FAFBFD] py-8 md:py-12 text-[#0F172A]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          
          {/* SECTION HEADER */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
              {sitemap.title}
            </h2>
            <div className="mt-2 h-1 w-10 bg-[#84CC16] rounded-full mx-auto lg:mx-0" />
            <p className="mt-3 text-sm font-medium text-[#64748B]">
              {sitemap.subtitle}
            </p>
          </div>

          {/* SITEMAP CATEGORIES GRID */}
          <ScrollReveal direction="up">
          <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-5">
            {sitemap.groups?.map((group, index) => (
              <div key={index} className="text-left space-y-4">
                <h3 className="text-base font-bold text-[#0F172A]">
                  {group.category}
                </h3>

                <ul className="space-y-3">
                  {group.links?.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#475569] transition-colors hover:text-[#0052CC]"
                      >
                        <ChevronRight className="h-3.5 w-3.5 text-[#84CC16] shrink-0 transition-transform group-hover:translate-x-0.5" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
}