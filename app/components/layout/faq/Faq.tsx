"use client";

import { useState } from "react";
import Link from "next/link";
import { ServiceFaqData, site } from "@/data";
import PageBanner from "../../shared/PageBanner";
import { Plus, Minus, Headset, ArrowRight, Droplet } from "lucide-react";

interface FaqProps {
  FaqData?: ServiceFaqData;
}

export default function Faq({ FaqData }: FaqProps) {
  // Fallback to static site data if props are not provided
  const data = FaqData ?? site.faq;

  // Track expanded accordion item index (0 is open by default as per UI design)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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

      {/* FAQ SECTION */}
      <section className="bg-[#F8FAFC] py-8 md:py-12">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center">
            {data?.tagline && (
              <span className="text-sm font-black uppercase tracking-widest text-[#0052CC] sm:text-sm">
                {data.tagline}
              </span>
            )}
            {data?.title && (
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                {data.title}
              </h2>
            )}

            {/* Decorative Divider */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-[2px] w-8 bg-[#84CC16]" />
              <Droplet className="h-4 w-4 fill-[#0052CC] text-[#0052CC]" />
              <div className="h-[2px] w-8 bg-[#84CC16]" />
            </div>

            {data?.description && (
              <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-[#64748B] sm:text-base">
                {data.description}
              </p>
            )}
          </div>

          {/* FAQ Accordion List */}
          {data?.faqs && data.faqs.length > 0 && (
            <div className="mt-10 flex flex-col gap-4">
              {data.faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-[#E0E7FF] bg-[#F4F7FF] shadow-sm"
                        : "border-slate-100 bg-white hover:border-slate-200"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                            isOpen
                              ? "bg-[#0052CC] text-white"
                              : "bg-[#EFF6FF] text-[#0052CC]"
                          }`}
                        >
                          {isOpen ? (
                            <Minus className="h-4 w-4 stroke-[3]" />
                          ) : (
                            <Plus className="h-4 w-4 stroke-[3]" />
                          )}
                        </div>
                        <span className="text-base font-bold text-[#0F172A] sm:text-lg">
                          {faq.question}
                        </span>
                      </div>
                    </button>

                    {/* Accordion Content */}
                    {isOpen && faq.answer && (
                      <div className="px-6 pb-6 pt-0 text-sm font-medium leading-relaxed text-[#475569] sm:pl-18 sm:text-base">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Contact CTA Box */}
          {data?.contactCta && (
            <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#EEF2FF] p-6 text-center sm:flex-row sm:p-8 sm:text-left">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] text-[#0052CC]">
                  <Headset className="h-8 w-8" />
                </div>

                <div className="flex flex-col items-center sm:items-start">
                  <h3 className="text-xl font-bold text-[#0F172A]">
                    {data.contactCta.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#64748B]">
                    {data.contactCta.description}
                  </p>
                </div>
              </div>

              <Link
                href={data.contactCta.buttonUrl || "#"}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0052CC] px-6 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#0041A3]"
              >
                {data.contactCta.buttonText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
