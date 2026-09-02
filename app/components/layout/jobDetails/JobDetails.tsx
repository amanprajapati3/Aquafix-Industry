"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import PageBanner from "../../shared/PageBanner";
import ScrollReveal from "../../shared/ScrollReveal";
import { JobDetailItem, JObDetailsBannerData } from "@/type/typeSection";
import { Check, UploadCloud, Lock, ArrowRight } from "lucide-react";

interface JobDetailsProps {
  jobData?: JobDetailItem;
  bannerData?: JObDetailsBannerData;
}

export default function JobDetailsClient({
  jobData,
  bannerData,
}: JobDetailsProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
  });

  const [fileName, setFileName] = useState<string | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Application submitted successfully!");
  };

  if (!jobData) return null;

  return (
    <>
      {/* PAGE BANNER */}
      {bannerData && (
        <PageBanner
          title={bannerData.title}
          breadcrumbHome={bannerData.breadcrumbHome}
          breadcrumbCurrent={bannerData.breadcrumbCurrent}
          backgroundImage={bannerData.backgroundImage}
          homeHref={bannerData.homeHref}
        />
      )}

      {/* MAIN CONTENT */}
      <section className="bg-[#FAFBFD] py-8 lg:py-12 text-[#0F172A]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            {/* RIGHT COLUMN IN DOM / FIRST ON MOBILE & TAB: Application Form Card (5 Cols) */}
            <ScrollReveal direction="right" className="order-1 lg:order-2 lg:col-span-5">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] sm:p-8">
                {/* Form Title Header */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl lg:text-3xl font-bold text-[#0F172A]">
                    Apply for This Position
                  </h3>
                  <div className="mt-2 h-1 w-10 bg-[#84CC16] rounded-full mx-auto lg:mx-0" />
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  {/* Full Name */}
                  <div className="text-left">
                    <label className="block text-sm font-bold text-[#0F172A]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-[#FAFBFD] px-4 py-3 text-sm font-medium text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#0052CC] focus:bg-white"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="text-left">
                    <label className="block text-sm font-bold text-[#0F172A]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-[#FAFBFD] px-4 py-3 text-sm font-medium text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#0052CC] focus:bg-white"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="text-left">
                    <label className="block text-sm font-bold text-[#0F172A]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-[#FAFBFD] px-4 py-3 text-sm font-medium text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#0052CC] focus:bg-white"
                    />
                  </div>

                  {/* Experience Select */}
                  <div className="text-left">
                    <label className="block text-sm font-bold text-[#0F172A]">
                      Experience (Years) <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-[#FAFBFD] px-4 py-3 text-sm font-medium text-[#0F172A] outline-none transition-all focus:border-[#0052CC] focus:bg-white"
                    >
                      <option value="">Select experience</option>
                      <option value="1-2">1-2 Years</option>
                      <option value="3-5">3-5 Years</option>
                      <option value="5+">5+ Years</option>
                    </select>
                  </div>

                  {/* Upload Resume Box */}
                  <div className="text-left">
                    <label className="block text-sm font-bold text-[#0F172A]">
                      Upload Resume <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-[#FAFBFD] p-6 text-center transition-all hover:border-[#0052CC]">
                      <UploadCloud className="h-8 w-8 text-[#0052CC]" />
                      <p className="mt-2 text-sm font-semibold text-[#0F172A]">
                        Drag & drop your file here
                      </p>
                      <p className="text-sm text-slate-400">
                        or{" "}
                        <label className="cursor-pointer font-bold text-[#0052CC] underline hover:text-blue-700">
                          Browse File
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>
                      </p>
                      <span className="mt-2 text-[10px] font-medium text-slate-400">
                        {fileName
                          ? `Selected: ${fileName}`
                          : "PDF, DOC, DOCX (Max. 5MB)"}
                      </span>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="text-left">
                    <label className="block text-sm font-bold text-[#0F172A]">
                      Cover Letter (Optional)
                    </label>
                    <textarea
                      name="coverLetter"
                      rows={4}
                      placeholder="Tell us why you're a great fit..."
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-[#FAFBFD] p-4 text-sm font-medium text-[#0F172A] outline-none transition-all placeholder:text-slate-400 focus:border-[#0052CC] focus:bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#84CC16] py-3.5 text-sm font-bold text-slate-900 transition-all hover:bg-[#74b512]"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* Security Note */}
                  <div className="flex items-center justify-center gap-2 pt-2 text-center text-[11px] font-medium text-slate-400">
                    <Lock className="h-3.5 w-3.5 text-slate-400" />
                    <span>
                      Your information is secure and will only be used for this
                      application.
                    </span>
                  </div>
                </form>
              </div>
            </ScrollReveal>

            {/* LEFT COLUMN IN DOM / SECOND ON MOBILE & TAB: Job Overview & Description (7 Cols) */}
            <ScrollReveal direction="left" className="order-2 lg:order-1 lg:col-span-7">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-1">
              {/* Job Description Section */}
              <div className="text-center lg:text-left">
                <h3 className="text-xl lg:text-3xl font-bold text-[#0F172A]">
                  Job Description
                </h3>
                <div className="mt-2 h-1 w-10 bg-[#84CC16] rounded-full mx-auto lg:mx-0" />
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#64748B]">
                  {jobData.description}
                </p>
              </div>

              {/* Key Responsibilities */}
              {jobData.keyResponsibilities && (
                <div className="text-center lg:text-left">
                  <h3 className="text-xl lg:text-3xl font-bold text-[#0F172A]">
                    Key Responsibilities
                  </h3>
                  <div className="mt-2 h-1 w-10 bg-[#84CC16] rounded-full mx-auto lg:mx-0" />
                  <ul className="mt-5 space-y-3.5">
                    {jobData.keyResponsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start justify-center lg:justify-start gap-3 text-left"
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ECF8D8] text-[#84CC16]">
                          <Check className="h-3.5 w-3.5 stroke-[4]" />
                        </div>
                        <span className="text-sm font-semibold leading-relaxed text-[#334155]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {jobData.requirements && (
                <div className="text-center lg:text-left">
                  <h3 className="text-xl lg:text-3xl font-bold text-[#0F172A]">
                    Requirements
                  </h3>
                  <div className="mt-2 h-1 w-10 bg-[#84CC16] rounded-full mx-auto lg:mx-0" />
                  <ul className="mt-5 space-y-3.5">
                    {jobData.requirements.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start justify-center lg:justify-start gap-3 text-left"
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ECF8D8] text-[#84CC16]">
                          <Check className="h-3.5 w-3.5 stroke-[4]" />
                        </div>
                        <span className="text-sm font-semibold leading-relaxed text-[#334155]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Preferred Qualifications */}
              {jobData.preferredQualifications && (
                <div className="text-center lg:text-left">
                  <h3 className="text-xl lg:text-3xl font-bold text-[#0F172A]">
                    Preferred Qualifications
                  </h3>
                  <div className="mt-2 h-1 w-10 bg-[#84CC16] rounded-full mx-auto lg:mx-0" />
                  <ul className="mt-5 space-y-3.5">
                    {jobData.preferredQualifications.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start justify-center lg:justify-start gap-3 text-left"
                      >
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ECF8D8] text-[#84CC16]">
                          <Check className="h-3.5 w-3.5 stroke-[4]" />
                        </div>
                        <span className="text-sm font-semibold leading-relaxed text-[#334155]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
