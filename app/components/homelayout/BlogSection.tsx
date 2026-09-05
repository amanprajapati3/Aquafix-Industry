"use client";

import React from "react";
import Image from "next/image";
import siteData from "@/data/site.json";
import { Calendar, ArrowRight, ShieldAlert } from "lucide-react";
import { ServiceBlogData } from "@/data";
import SectionHeader from "../shared/SectionHeader";
import ScrollReveal from "../shared/ScrollReveal";
import CtaBanner from "../shared/CtaBanner";

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
    <section className="w-full bg-whitex py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1320px]">
        {/* SECTION HEADER */}
        <SectionHeader
          pretitle={data.badge}
          title={data.title}
          align="center"
          className="mb-10"
        />

        {/* BLOG CARDS GRID: home 4 per row, blog page 3 per row */}
        <ScrollReveal direction="up">
        <div className={`grid gap-6 ${gridClass}`}>
          {posts.map((post: any) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image Container */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.image?.alt || post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
                  <h3 className="line-clamp-2 text-[15px] sm:text-[20px] font-bold leading-snug text-[#0F172A] transition-colors group-hover:text-[#1E40AF]">
                    {post.title}
                  </h3>

                  {isBlogPage && (
                    <p className="text-slate-700 pt-5">{post.description}</p>
                  )}
                </div>

                {/* Read More Link */}
                <div className="mt-3">
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
        </ScrollReveal>

        {/* CTA BANNER BELOW BLOGS */}
        <ScrollReveal direction="up">
          <CtaBanner
            variant="blog"
            title={cta.title}
            description={cta.desc}
            buttonLabel={cta.button.label}
            buttonHref={cta.button.href}
            media={{
              type: "icon",
              icon: <ShieldAlert className="h-6 w-6 text-white" />,
            }}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
