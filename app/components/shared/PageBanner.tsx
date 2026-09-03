"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbHome?: string;
  breadcrumbCurrent?: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundImage: string;
  homeHref?: string;
}

export default function PageBanner({
  title,
  breadcrumbHome = "Home",
  breadcrumbCurrent,
  breadcrumbs,
  backgroundImage,
  homeHref = "/",
}: PageBannerProps) {
  const hasBreadcrumbs = breadcrumbs && breadcrumbs.length > 0;

  return (
    <section className="relative -mt-20 flex min-h-[380px] w-full items-center overflow-hidden bg-[#062536] pt-20 sm:-mt-24 md:min-h-[380px] sm:pt-24">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#031c29]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-12 md:px-10 lg:px-8">
        <ScrollReveal direction="down" distance={40}>
          <div className="text-left">
            {/* Title */}
            <h1 className="text-4xl font-bold text-white md:text-4xl lg:text-5xl">
              {title}
            </h1>

            {/* Breadcrumb */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-medium text-white md:text-base">
              <Link
                href={homeHref}
                className="transition-opacity hover:opacity-80"
              >
                {breadcrumbHome}
              </Link>

              {hasBreadcrumbs
                ? breadcrumbs.map((crumb, idx) => (
                    <span key={idx} className="flex items-center gap-3">
                      <span className="text-xl leading-none">»</span>
                      {crumb.href ? (
                        <Link
                          href={crumb.href}
                          className="transition-opacity hover:opacity-80"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span>{crumb.label}</span>
                      )}
                    </span>
                  ))
                : breadcrumbCurrent && (
                    <>
                      <span className="text-xl leading-none">»</span>
                      <span>{breadcrumbCurrent}</span>
                    </>
                  )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}