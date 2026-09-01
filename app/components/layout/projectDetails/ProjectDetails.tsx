"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "../../shared/PageBanner";
import { ProjectDetailItem, ProjectDetailsData } from "@/type/typeSection";
import {
  Calendar,
  Building2,
  Users,
  Clock,
  ShieldCheck,
  Tag,
  MapPin,
  DollarSign,
  Wrench,
  UserCheck,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  X,
  Maximize2,
  FileText,
  Droplet,
} from "lucide-react";

interface ProjectDetailsProps {
  detailData?: ProjectDetailItem;
  bannerData?: ProjectDetailsData["banner"];
}

/* Brand palette lifted from the reference design */
const NAVY = "#0B1442";
const BRAND_BLUE = "#1D4FE0";
const BRAND_BLUE_SOLID = "#0A3FC4";
const MUTED = "#64748B";
const LIME = "#8FD40E";

/* ------------------------------------------------------------------ */
/*  Section eyebrow label with the small underline rule under it       */
/* ------------------------------------------------------------------ */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start">
      <span
        className="text-sm font-black uppercase tracking-widest"
        style={{ color: BRAND_BLUE }}
      >
        {children}
      </span>
      <div className="mt-4 flex items-center justify-start">
        <div className="h-[2px] w-8 bg-[#84CC16]" />
        <Droplet className="mx-2 h-4 w-4 fill-[#0052CC] text-[#0052CC]" />
        <div className="h-[2px] w-8 bg-[#84CC16]" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated Counter — starts counting up the moment it enters view    */
/* ------------------------------------------------------------------ */
function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const numericMatch = value.match(/\d+/);
  const targetNum = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) setHasAnimated(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || targetNum === 0) return;
    let start = 0;
    const duration = 1800;
    const steps = 60;
    const increment = targetNum / steps;
    const stepTime = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setDisplayValue(targetNum);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [hasAnimated, targetNum]);

  if (!numericMatch) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function ProjectDetails({
  detailData,
  bannerData,
}: ProjectDetailsProps) {
  /* Lightbox */
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeGalleryList, setActiveGalleryList] = useState<string[]>([]);

  /* "+N More" drawer — reveals the next 4 thumbnails only */
  const [showMoreBelowMain, setShowMoreBelowMain] = useState(false);

  /* Dynamically selected main image (defaults to the first/main image).
     Selecting any thumbnail below updates this and fills the main slot. */
  const [activeMainImg, setActiveMainImg] = useState<string>("");

  /* Project gallery — true smooth-scroll, infinitely looping carousel */
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isResettingRef = useRef(false);

  if (!detailData) return null;

  const renderStatIcon = (iconName: string) => {
    const iconClass = "h-7 w-7";
    const style = { color: BRAND_BLUE };
    switch (iconName) {
      case "calendar":
        return <Calendar className={iconClass} style={style} />;
      case "building":
        return <Building2 className={iconClass} style={style} />;
      case "users":
        return <Users className={iconClass} style={style} />;
      case "clock":
        return <Clock className={iconClass} style={style} />;
      case "shield":
      default:
        return <ShieldCheck className={iconClass} style={style} />;
    }
  };

  const openLightbox = (imageList: string[], startIndex: number) => {
    setActiveGalleryList(imageList);
    setLightboxIndex(startIndex);
    setLightboxOpen(true);
  };

  const handleNext = () =>
    setLightboxIndex((prev) => (prev + 1) % activeGalleryList.length);
  const handlePrev = () =>
    setLightboxIndex(
      (prev) => (prev - 1 + activeGalleryList.length) % activeGalleryList.length
    );

  /* Master gallery arrays */
  const heroThumbnails = detailData.galleryThumbnails || [];
  const visibleThumbnails = heroThumbnails.slice(0, 4);
  const extraThumbnails = heroThumbnails.slice(4, 8); // the next batch the "+More" tile reveals
  const fullHeroGallery = [detailData.mainImage, ...heroThumbnails];

  /* The image currently shown in the main hero slot — defaults to mainImage. */
  const activeMainImage = activeMainImg || detailData.mainImage;

  const projectGallery = detailData.galleryImages || [];
  // Triple the set so the carousel always has room to glide into, creating
  // a seamless, repeating loop in both directions.
  const loopedGallery =
    projectGallery.length > 0
      ? [...projectGallery, ...projectGallery, ...projectGallery]
      : [];

  /* Center the scroller on the middle copy once on mount, so the user can
     scroll/slide either direction and the loop feels infinite. */
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || projectGallery.length === 0) return;
    const firstItem = el.children[0] as HTMLElement | undefined;
    if (!firstItem) return;
    const itemWidth = firstItem.offsetWidth + 20; // width + gap
    el.scrollLeft = itemWidth * projectGallery.length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectGallery.length]);

  /* When a smooth scroll settles near either edge of the tripled strip,
     silently (no animation) snap back to the equivalent spot in the middle
     copy — this is what makes the loop feel endless. */
  const handleScrollSettle = useCallback(() => {
    const el = scrollerRef.current;
    if (!el || projectGallery.length === 0 || isResettingRef.current) return;
    const firstItem = el.children[0] as HTMLElement | undefined;
    if (!firstItem) return;
    const itemWidth = firstItem.offsetWidth + 20;
    const singleSetWidth = itemWidth * projectGallery.length;

    if (el.scrollLeft < singleSetWidth * 0.5) {
      isResettingRef.current = true;
      el.scrollLeft += singleSetWidth;
      requestAnimationFrame(() => (isResettingRef.current = false));
    } else if (el.scrollLeft > singleSetWidth * 1.5) {
      isResettingRef.current = true;
      el.scrollLeft -= singleSetWidth;
      requestAnimationFrame(() => (isResettingRef.current = false));
    }
  }, [projectGallery.length]);

  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onScroll = () => {
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(handleScrollSettle, 120);
  };

  const slideBy = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstItem = el.children[0] as HTMLElement | undefined;
    if (!firstItem) return;
    const itemWidth = firstItem.offsetWidth + 20;
    el.scrollBy({ left: direction * itemWidth, behavior: "smooth" });
  };

  return (
    <>
      {bannerData && (
        <PageBanner
          title={bannerData.title}
          breadcrumbHome={bannerData.breadcrumbHome}
          breadcrumbCurrent={bannerData.breadcrumbCurrent}
          backgroundImage={bannerData.backgroundImage}
          homeHref={bannerData.homeHref}
        />
      )}

      <section className="bg-[#FAFBFD] py-14 md:py-20 text-[#0F172A]">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
          {/* ============================================================ */}
          {/* TOP HERO — left/right columns stretch to equal height         */}
          {/* ============================================================ */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
            {/* Left content column */}
            <div className="flex h-full flex-col justify-between lg:col-span-5">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold"
                  style={{ backgroundColor: "#EAF0FE", color: BRAND_BLUE }}
                >
                  <Building2 className="h-4 w-4" />
                  <span className="uppercase tracking-wider">
                    {detailData.badge}
                  </span>
                </div>

                <h1
                  className="mt-4 text-[36px] font-black leading-[1.12] sm:text-[40px] lg:text-[46px]"
                  style={{ color: NAVY }}
                >
                  {detailData.title}
                </h1>

                <div className="mt-3 flex items-center gap-2 text-sm font-bold" style={{ color: NAVY }}>
                  <MapPin className="h-[18px] w-[18px]" style={{ color: BRAND_BLUE }} />
                  <span>{detailData.location}</span>
                </div>

                <p className="mt-4 max-w-md text-[15px] font-medium leading-[1.9]" style={{ color: MUTED }}>
                  {detailData.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-[#0F2010] transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: LIME }}
                >
                  <FileText className="h-[18px] w-[18px]" />
                  <span>Request a Quote</span>
                </Link>
                <Link
                  href="/project"
                  className="inline-flex items-center gap-2 rounded-full border-2 bg-white px-6 py-3.5 text-sm font-bold transition-colors hover:bg-slate-50"
                  style={{ borderColor: "#C9D8FB", color: BRAND_BLUE }}
                >
                  <ArrowLeft className="h-[18px] w-[18px]" />
                  <span>Back to Projects</span>
                </Link>
              </div>
            </div>

            {/* Right media column — fills exactly the same height as the left */}
            <div className="flex h-full flex-col gap-3 lg:col-span-7">
              <div
                className="group relative w-full flex-1 min-h-[260px] cursor-pointer overflow-hidden rounded-[26px] bg-slate-100 shadow-sm"
                onClick={() => openLightbox(fullHeroGallery, 0)}
              >
                <Image
                  key={activeMainImage}
                  src={activeMainImage}
                  alt={detailData.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 700px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <button
                  aria-label="Expand Image"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/80 text-slate-700 backdrop-blur-sm transition-colors hover:bg-white"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {visibleThumbnails.map((img, idx) => {
                  const isActive = img === activeMainImage;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveMainImg(img)}
                      className={`group relative aspect-square w-full cursor-pointer overflow-hidden rounded-2xl bg-slate-100 ${
                        isActive
                          ? "ring-2 ring-offset-1"
                          : "border border-slate-100"
                      }`}
                      style={isActive ? ({ "--tw-ring-color": BRAND_BLUE } as React.CSSProperties) : undefined}
                    >
                      <Image
                        src={img}
                        alt={`${detailData.title} preview ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 32vw, 150px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  );
                })}

                {extraThumbnails.length > 0 && (
                  <button
                    type="button"
                    aria-expanded={showMoreBelowMain}
                    className="relative flex aspect-square w-full cursor-pointer items-center justify-center rounded-2xl text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: BRAND_BLUE_SOLID }}
                    onClick={() => setShowMoreBelowMain((prev) => !prev)}
                  >
                    <div className="text-center leading-tight">
                      <span className="block text-lg font-black">
                        +{detailData.moreImagesCount || extraThumbnails.length}
                      </span>
                      <span className="text-xs font-bold">
                        {showMoreBelowMain ? "Hide" : "More"}
                      </span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* "+N More" drawer — exactly the next 4 images */}
          {showMoreBelowMain && extraThumbnails.length > 0 && (
            <div className="mt-5 rounded-3xl border border-blue-100 bg-blue-50/40 p-5 sm:p-6">
              <div className="flex items-center justify-between pb-4">
                <span className="text-sm font-black uppercase tracking-widest" style={{ color: BRAND_BLUE }}>
                  Additional Project Photos
                </span>
                <button
                  onClick={() => setShowMoreBelowMain(false)}
                  className="text-sm font-bold text-slate-500 hover:text-slate-800"
                >
                  Close
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {extraThumbnails.map((img, idx) => {
                  const isActive = img === activeMainImage;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveMainImg(img)}
                      className={`group relative aspect-square w-full cursor-pointer overflow-hidden rounded-2xl bg-white ${
                        isActive
                          ? "ring-2 ring-offset-2 ring-offset-blue-50"
                          : "border border-slate-200"
                      }`}
                      style={isActive ? ({ "--tw-ring-color": BRAND_BLUE } as React.CSSProperties) : undefined}
                    >
                      <Image
                        src={img}
                        alt={`Additional view ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 45vw, 240px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* STATS BAR                                                     */}
          {/* ============================================================ */}
          <div className="mt-10 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] sm:p-7">
            <div className="grid grid-cols-2 gap-6 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
              {detailData.stats?.map((stat, idx) => (
                <div
                  key={stat.id || idx}
                  className={`flex flex-col items-center text-center ${idx !== 0 ? "pt-5 sm:pt-0 lg:pl-5" : ""}`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ backgroundColor: "#EAF0FE" }}>
                    {renderStatIcon(stat.iconName)}
                  </div>
                  <span className="mt-3 text-[30px] font-black" style={{ color: BRAND_BLUE_SOLID }}>
                    <AnimatedCounter value={stat.value} />
                  </span>
                  <span className="mt-0.5 text-sm font-bold text-[#64748B]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ============================================================ */}
          {/* OVERVIEW + META INFO                                          */}
          {/* ============================================================ */}
          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <SectionLabel>Project Overview</SectionLabel>
              <p className="mt-4 text-[15px] max-w-[400px] font-medium leading-[1.9]" style={{ color: MUTED }}>
                {detailData.overview}
              </p>
            </div>

            <div className="lg:col-span-5 ">
              <div className="space-y-4 rounded-3xl p-7 sm:p-8" style={{ backgroundColor: "#EEF3FE" }}>
                {[
                  { icon: Tag, label: "Project Type", value: detailData.metaInfo?.projectType },
                  { icon: MapPin, label: "Location", value: detailData.metaInfo?.location },
                  { icon: DollarSign, label: "Project Value", value: detailData.metaInfo?.projectValue },
                  { icon: Wrench, label: "Services Provided", value: detailData.metaInfo?.servicesProvided },
                  { icon: UserCheck, label: "Client", value: detailData.metaInfo?.client },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-[32px_1fr] items-start gap-x-3 sm:grid-cols-[36px_130px_1fr]">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full"
                      style={{ backgroundColor: "#DDE7FD" }}
                    >
                      <row.icon className="h-[18px] w-[18px]" style={{ color: BRAND_BLUE }} />
                    </div>
                    <span className="pt-1 text-sm font-bold" style={{ color: NAVY }}>
                      {row.label}
                    </span>
                    <span className="pt-1 text-sm font-medium text-[#5A6B85]">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* PROJECT GALLERY — smooth infinite-scroll carousel            */}
          {/* ============================================================ */}
          <div className="mt-12">
            <SectionLabel>Project Gallery</SectionLabel>

            <div className="relative mt-5">
              <div
                ref={scrollerRef}
                onScroll={onScroll}
                className="flex gap-5 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {loopedGallery.map((img, i) => {
                  const realIndex = i % projectGallery.length;
                  return (
                    <div
                      key={i}
                      className="group relative aspect-[4/3] w-[calc(100%-1.25rem)] shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-slate-100 shadow-sm sm:w-[calc(50%-0.65rem)] lg:w-[calc(25%-0.95rem)]"
                      onClick={() => openLightbox(projectGallery, realIndex)}
                    >
                      <Image
                        src={img}
                        alt={`${detailData.title} gallery ${realIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  );
                })}
              </div>

              {projectGallery.length > 1 && (
                <>
                  <button
                    onClick={() => slideBy(-1)}
                    className="absolute -left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110"
                    style={{ backgroundColor: BRAND_BLUE_SOLID }}
                    aria-label="Slide Left"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => slideBy(1)}
                    className="absolute -right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110"
                    style={{ backgroundColor: BRAND_BLUE_SOLID }}
                    aria-label="Slide Right"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* ============================================================ */}
          {/* SCOPE OF WORK                                                 */}
          {/* ============================================================ */}
          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel>Project Work</SectionLabel>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {detailData.scopeOfWork?.map((item) => (
                  <div key={item.id} className="flex items-start gap-2.5 text-sm font-bold" style={{ color: "#334155" }}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#65A30D" }} strokeWidth={2} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative aspect-[4/3] w-full  rounded-[26px] bg-slate-100 shadow-md">
                <Image
                  src={detailData.scopeImage || detailData.mainImage}
                  alt="Scope of work details"
                  fill
                  className="object-cover"
                />
                {/* Badge sits INSIDE the image bounds, bottom-left */}
                <div
                  className="absolute -bottom-4 max-w-[300px] -left-4 right-14 flex items-center gap-3 rounded-2xl p-4 text-white shadow-xl"
                  style={{ backgroundColor: BRAND_BLUE_SOLID }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white">
                    <ShieldCheck className="h-7 w-7" style={{ color: BRAND_BLUE_SOLID }} />
                  </div>
                  <p className="text-sm font-semibold leading-tight">
                    {detailData.scopeBadgeText ||
                      "All systems tested for safety, efficiency & long-term reliability."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* CHALLENGE & SOLUTION — one unified card, center divider       */}
          {/* ============================================================ */}
          <div className="mt-16 rounded-3xl p-3 sm:p-9" style={{ backgroundColor: "#EEF2FC" }}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 ">
              <div className="flex flex-col  sm:flex-row items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl" style={{ backgroundColor: "#DCE6FD" }}>
                  <AlertTriangle className="h-[22px] w-[22px]" style={{ color: BRAND_BLUE }} />
                </div>
                <div>
                  <span className="text-sm font-black uppercase tracking-widest" style={{ color: BRAND_BLUE }}>
                    The Challenge
                  </span>
                  <p className="mt-2.5 text-[15px] font-medium leading-relaxed" style={{ color: MUTED }}>
                    {detailData.challenge}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:border-l-[0.5px] border-l-gray-300 sm:items-start gap-4 sm:pl-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lime-100">
                  <Lightbulb className="h-[22px] w-[22px]" style={{ color: "#65A30D" }} />
                </div>
                <div>
                  <span className="text-sm font-black uppercase tracking-widest" style={{ color: "#65A30D" }}>
                    Our Solution
                  </span>
                  <p className="mt-2.5 text-[15px] font-medium leading-relaxed" style={{ color: MUTED }}>
                    {detailData.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LIGHTBOX MODAL                                                */}
      {/* ============================================================ */}
      {lightboxOpen && activeGalleryList.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white hover:text-black"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {activeGalleryList.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white hover:text-black"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          <div className="relative h-[70vh] w-full max-w-4xl overflow-hidden rounded-2xl sm:h-[80vh]">
            <Image
              key={activeGalleryList[lightboxIndex]}
              src={activeGalleryList[lightboxIndex]}
              alt="Gallery Lightbox View"
              fill
              sizes="(max-width: 640px) 100vw, 896px"
              className="object-contain"
            />
          </div>

          {activeGalleryList.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white hover:text-black"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </>
  );
}