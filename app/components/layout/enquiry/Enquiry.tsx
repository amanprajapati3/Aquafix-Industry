"use client";

import { useState } from "react";
import { ServiceEnquiryData, site } from "@/data";
import PageBanner from "../../shared/PageBanner";
import SectionHeader from "../../shared/SectionHeader";
import ScrollReveal from "../../shared/ScrollReveal";
import { Clock, ShieldCheck, Headset, Send, User, Mail, Phone, ChevronDown } from "lucide-react";

interface EnquiryProps {
  enquiryData?: ServiceEnquiryData;
}

export default function Enquiry({ enquiryData }: EnquiryProps) {
  // Fallback to static site data if props are not provided
  const data = enquiryData ?? site.enquiry;

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    requirements: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // Lucide Icon mapper for features
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "clock":
        return <Clock className="h-6 sm:w-10 sm:h-10 w-6 text-[#0052CC]" />;
      case "shield-check":
        return <ShieldCheck className="h-6 sm:w-10 sm:h-10  w-6 text-[#0052CC]" />;
      case "headset":
        return <Headset className="h-6 sm:w-10 sm:h-10  w-6 text-[#0052CC]" />;
      default:
        return <Clock className="h-6 sm:w-10 sm:h-10  w-6 text-[#0052CC]" />;
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

      {/* ENQUIRY SECTION */}
      <section className="bg-[#FAFBFD] py-8 md:py-12">
        <div className="mx-auto max-w-[1200px]  px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12  lg:grid-cols-12">
            {/* Left Content Column */}
            <ScrollReveal direction="left" className="lg:col-span-5">
            <div className="lg:col-span-5 md:mt-24 md:pr-12">
              <SectionHeader
                pretitle={data?.tagline}
                title={data?.title}
                description={data?.description}
                align="center"
                className="md:items-start md:text-left"
              />

              {/* Feature List */}
              {data?.features && data.features.length > 0 && (
                <div className="mt-8 flex flex-col gap-6">
                  {data.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 border-b border-slate-100 pb-6 last:border-0 last:pb-0"
                    >
                      <div className="flex h-12 sm:w-20 sm:h-20 w-12 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF]">
                        {renderIcon(feature.iconName)}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#0F172A]">
                          {feature.title}
                        </h4>
                        <p className="mt-1 text-sm font-medium leading-relaxed text-[#64748B]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            </ScrollReveal>

            {/* Right Form Card Column */}
            <ScrollReveal direction="right" className="lg:col-span-7">
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] sm:p-10">
                {data?.form?.title && (
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#0F172A] sm:text-2xl">
                      {data.form.title}
                    </h3>
                    <div className="mx-auto mt-2 h-1 w-10 rounded bg-[#84CC16]" />
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5 md:gap-3">
                  {/* Name */}
                  <div>
                    <label className="text-sm font-bold text-[#0F172A]">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-2">
                      <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] py-3 pl-10 pr-4 text-sm text-[#0F172A] outline-none transition-all focus:border-[#84CC16] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm font-bold text-[#0F172A]">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] py-3 pl-10 pr-4 text-sm text-[#0F172A] outline-none transition-all focus:border-[#84CC16] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm font-bold text-[#0F172A]">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-2">
                      <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] py-3 pl-10 pr-4 text-sm text-[#0F172A] outline-none transition-all focus:border-[#84CC16] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Type Select */}
                  <div>
                    <label className="text-sm font-bold text-[#0F172A]">
                      Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-2">
                      <select
                        name="type"
                        required
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-[#F8FAFC] py-3 pl-4 pr-10 text-sm text-[#0F172A] outline-none transition-all focus:border-[#84CC16] focus:bg-white"
                      >
                        <option value="" disabled>
                          Select type
                        </option>
                        <option value="residential">Residential Plumbing</option>
                        <option value="commercial">Commercial Plumbing</option>
                        <option value="emergency">Emergency Service</option>
                        <option value="maintenance">Maintenance & Repair</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  {/* Requirements Textarea */}
                  <div>
                    <label className="text-sm font-bold text-[#0F172A]">
                      Requirements <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-2">
                      <textarea
                        name="requirements"
                        rows={4}
                        required
                        value={formData.requirements}
                        onChange={handleChange}
                        placeholder="Please describe your enquiry..."
                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 text-sm text-[#0F172A] outline-none transition-all focus:border-[#84CC16] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#4D7C0F] py-3.5 text-sm font-bold text-white transition-all hover:bg-[#3F6212]"
                  >
                    <Send className="h-4 w-4" />
                    {data?.form?.submitButtonText || "Submit Enquiry"}
                  </button>
                </form>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}