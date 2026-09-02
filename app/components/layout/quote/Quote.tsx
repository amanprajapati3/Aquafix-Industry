"use client";

import { useState } from "react";
import { ServiceGetQuoteData, site } from "@/data";
import PageBanner from "../../shared/PageBanner";
import SectionHeader from "../../shared/SectionHeader";
import ScrollReveal from "../../shared/ScrollReveal";
import { Clock, ShieldCheck, DollarSign } from "lucide-react";

interface GetQuoteProps {
  quoteData?: ServiceGetQuoteData;
}

export default function GetQuote({ quoteData }: GetQuoteProps) {
  const data = quoteData ?? (site.quote as unknown as ServiceGetQuoteData);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  // Helper function to render feature icons with responsive w-14 h-14 for tablet/desktop
  const renderFeatureIcon = (iconName: string) => {
    const iconClass = "h-6 w-6 sm:h-12 sm:w-12 text-[#84CC16] transition-all";
    switch (iconName) {
      case "clock":
        return <Clock className={iconClass} />;
      case "shield-check":
        return <ShieldCheck className={iconClass} />;
      case "dollar-sign":
        return <DollarSign className={iconClass} />;
      default:
        return <Clock className={iconClass} />;
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

      {/* GET A QUOTE SECTION */}
      <section className="bg-[#FAFBFD] py-8 md:py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Left Content Area */}
            <ScrollReveal direction="left" className="lg:col-span-6">
            <div className="lg:col-span-6">
              <SectionHeader
                pretitle={data?.tagline}
                title={data?.title}
                description={data?.description}
                align="left"
                descriptionMaxWidth="max-w-xl"
              />

              {/* 3 Key Highlights Grid - Centered items across all screen sizes */}
              {data?.features && data.features.length > 0 && (
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {data.features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <div className="flex h-12 w-12 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-emerald-50">
                        {renderFeatureIcon(feature.iconName)}
                      </div>
                      <h4 className="mt-4 text-sm font-bold text-[#051C42]">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-xs font-medium text-[#64748B]">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            </ScrollReveal>

            {/* Right Form Card */}
            <ScrollReveal direction="right" className="lg:col-span-6">
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] sm:p-10">
                <div className="text-center">
                  <h3 className="text-xl font-black text-[#051C42]">
                    {data?.formTitle || "Request Your Quote"}
                  </h3>
                  <div className="mx-auto mt-2 h-0.5 w-8 bg-[#84CC16]" />
                </div>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-bold text-[#051C42]">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={data?.formFields?.namePlaceholder || "Enter your full name"}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#051C42] outline-none transition-all placeholder:text-slate-400 focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-bold text-[#051C42]">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={data?.formFields?.emailPlaceholder || "Enter your email address"}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#051C42] outline-none transition-all placeholder:text-slate-400 focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-xs font-bold text-[#051C42]">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={data?.formFields?.phonePlaceholder || "Enter your phone number"}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#051C42] outline-none transition-all placeholder:text-slate-400 focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>

                  {/* Service Type Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-[#051C42]">
                      Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#051C42] outline-none transition-all focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    >
                      <option value="" disabled>
                        Select type
                      </option>
                      {data?.formFields?.typeOptions.map((option, idx) => (
                        <option key={idx} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Requirements Textarea */}
                  <div>
                    <label className="block text-xs font-bold text-[#051C42]">
                      Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="requirements"
                      rows={4}
                      required
                      value={formData.requirements}
                      onChange={handleChange}
                      placeholder={data?.formFields?.requirementsPlaceholder || "Describe your plumbing requirements..."}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#051C42] outline-none transition-all placeholder:text-slate-400 focus:border-[#0052CC] focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-2 w-full cursor-pointer rounded-xl bg-[#84CC16] py-3.5 text-sm font-bold text-white transition-all hover:bg-[#73b511] active:scale-[0.99]"
                  >
                    {data?.formFields?.submitButtonText || "Submit"}
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