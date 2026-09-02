"use client";

import { ServiceBlogData, site } from "@/data";
import PageBanner from "../../shared/PageBanner";
import BlogSection from "../../homelayout/BlogSection";
import ScrollReveal from "../../shared/ScrollReveal";

interface BlogProps {
  blogData?: ServiceBlogData;
}

export default function Blog({ blogData }: BlogProps) {
  const data = blogData ?? (site.blog as unknown as ServiceBlogData);

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

      {/* BLOG SECTION */}
      <ScrollReveal direction="up">
        <BlogSection blogData={data} variant="blog" />
      </ScrollReveal>
    </>
  );
}
