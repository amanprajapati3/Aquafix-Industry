"use client";

import React from "react";
import siteData from "@/data/site.json";
import { Calendar, ArrowRight, PhoneCall, ShieldAlert } from "lucide-react";
import { ServiceBlogData } from "@/data";
import SectionHeader from "../shared/SectionHeader";

interface BlogSectionProps {
  blogData: ServiceBlogData;
  variant?: "home" | "blog";
}
// Access Data safely (Runtime)

export default function BlogSection({
  blogData,
  variant = "home",
}: BlogSectionProps) {
  const data = blogData;

  // Fallback Blog Cards matching the reference image exactly
  const allPosts = data?.posts || [];

  // Home: show 4 in a 4-column grid. Blog: show 6 in a 3-column grid (2 rows).
  const isBlogPage = variant === "blog";
  const posts = isBlogPage ? allPosts.slice(0, 6) : allPosts.slice(0, 4);
  const gridClass = isBlogPage
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  // CTA Banner Fallback Data
  const cta = data?.CtaBanner;

  return (
    <section className="w-full bg-[#F8FAFC] py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        {/* SECTION HEADER */}
        <SectionHeader
          pretitle={data.badge}
          title={data.title}
          align="center"
          className="mb-10"
        />

        {/* BLOG CARDS GRID: home 4 per row, blog page 3 per row */}
        <div className={`grid gap-6 ${gridClass}`}>
          {posts.map((post: any) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image Container */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.image?.alt || post.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  {/* Post Date */}
                  <div className="mb-2.5 flex items-center gap-1.5 text-[12px] font-semibold text-[#94A3B8]">
                    <Calendar className="h-3.5 w-3.5 text-[#94A3B8]" />
                    <span>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="line-clamp-2 text-[15px] font-bold leading-snug text-[#0F172A] transition-colors group-hover:text-[#1E40AF]">
                    {post.title}
                  </h3>
                </div>

                {/* Read More Link */}
                <div className="mt-6">
                  <a
                    href={post.slug || "#"}
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1E40AF] hover:underline"
                  >
                    {post.readMoreText}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA BANNER BELOW BLOGS */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#0047FF] px-6 py-6 text-white shadow-lg sm:px-10 md:flex-row">
          {/* Left Side: Icon + Headline & Subtitle */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <ShieldAlert className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-[20px] font-extrabold leading-snug text-white sm:text-[22px]">
                {cta.title}
              </h3>
              <p className="mt-0.5 text-[13px] font-medium text-white/80 sm:text-[14px]">
                {cta.desc}
              </p>
            </div>
          </div>

          {/* Right Side: Call Button */}
          <div className="shrink-0">
            <a
              href={`tel:${cta.button.href.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-white sm:px-7 px-3 py-3 text-[14px] font-extrabold text-[#0047FF] shadow-sm transition-all duration-300 hover:bg-slate-50 hover:shadow-md"
            >
              <PhoneCall className="h-4 w-4 fill-current text-[#0047FF]" />
              <span>{cta.button.label}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
