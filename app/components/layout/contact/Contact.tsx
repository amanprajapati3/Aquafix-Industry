"use client";

import { useState } from "react";
import Link from "next/link";
import { ServiceContactSectionData, site } from "@/data";
import PageBanner from "../../shared/PageBanner";
import SectionHeader from "../../shared/SectionHeader";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Users,
  Award,
  Send,
  Navigation,
  User,
  MessageSquare,
  FileText
} from "lucide-react";

interface ContactProps {
  contactData?: ServiceContactSectionData;
}

export default function Contact({ contactData }: ContactProps) {
  // Fallback to static site data if props are not provided
  const data = contactData ?? site.contactSection;

  // Form state handler
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Action logic for form submission
  };

  // Lucide Icon Renderer for top cards & form features
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "mail":
        return <Mail className="h-6 w-6 text-[#84CC16]" />;
      case "phone":
        return <Phone className="h-6 w-6 text-[#84CC16]" />;
      case "map-pin":
        return <MapPin className="h-6 w-6 text-[#84CC16]" />;
      case "shield-check":
        return <ShieldCheck className="h-6 w-6 text-[#84CC16]" />;
      case "users":
        return <Users className="h-6 w-6 text-[#84CC16]" />;
      case "award":
        return <Award className="h-6 w-6 text-[#84CC16]" />;
      default:
        return <Mail className="h-6 w-6 text-[#84CC16]" />;
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

      <section className="bg-[#FAFBFD] py-8 md:py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          {/* Main Title & Description */}
          <SectionHeader
            title={data?.title}
            description={data?.description}
            align="center"
            className="md:items-start md:text-left"
          />

          {/* Top 3 Info Cards */}
          {data?.topCards && data.topCards.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {data.topCards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ECFCCB]">
                    {renderIcon(card.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A]">
                      {card.title}
                    </h3>
                    <p className="mt-1 whitespace-pre-line text-sm font-medium leading-relaxed text-[#64748B]">
                      {card.description}
                    </p>
                    <p className="mt-3 whitespace-pre-line text-sm font-bold text-[#84CC16]">
                      {card.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Form & Features Container */}
          {data?.formSection && (
            <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left Column - Form Features */}
              <div className="lg:col-span-5">
                <span className="text-sm font-extrabold uppercase tracking-widest text-[#84CC16]">
                  {data.formSection.tagline}
                </span>
                <h2 className="mt-2 text-3xl font-black text-[#0F172A] sm:text-4xl">
                  {data.formSection.title}
                </h2>
                <p className="mt-3 text-sm font-medium leading-relaxed text-[#64748B]">
                  {data.formSection.description}
                </p>

                {/* Features List */}
                <div className="mt-8 flex flex-col gap-6">
                  {data.formSection.features.map((feat, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ECFCCB]">
                        {renderIcon(feat.iconName)}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#0F172A]">
                          {feat.title}
                        </h4>
                        <p className="mt-1 text-sm font-medium text-[#64748B]">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:p-8"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label className="text-sm font-bold text-[#0F172A]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative mt-2">
                        <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] py-3 pl-10 pr-4 text-sm text-[#0F172A] outline-none transition-all focus:border-[#84CC16] focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="text-sm font-bold text-[#0F172A]">
                        Email Address <span className="text-red-500">*</span>
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
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="text-sm font-bold text-[#0F172A]">
                      Phone Number <span className="text-red-500">*</span>
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

                  {/* Subject */}
                  <div>
                    <label className="text-sm font-bold text-[#0F172A]">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-2">
                      <FileText className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter the subject"
                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] py-3 pl-10 pr-4 text-sm text-[#0F172A] outline-none transition-all focus:border-[#84CC16] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-bold text-[#0F172A]">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative mt-2">
                      <textarea
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 text-sm text-[#0F172A] outline-none transition-all focus:border-[#84CC16] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="mt-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#65A30D] py-3.5 text-sm font-bold text-white transition-all hover:bg-[#4D7C0F]"
                  >
                    <Send className="h-4 w-4" />
                    {data.formSection.submitButtonText}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Map Section */}
        {data?.map && (
          <div className="relative mt-20 h-[450px] w-full bg-slate-100">
            <iframe
              title="Location Map"
              src={data.map.embedUrl}
              className="h-full w-full border-0"
              loading="lazy"
            />
            <div className="absolute left-2 top-20 z-10 w-80 rounded-2xl bg-white p-6 shadow-xl sm:left-12 sm:top-12">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ECFCCB]">
                  <MapPin className="h-5 w-5 text-[#84CC16]" />
                </div>
                <h4 className="text-lg font-bold text-[#0F172A]">
                  {data.map.title}
                </h4>
              </div>

              <p className="mt-4 whitespace-pre-line text-sm font-medium text-[#64748B]">
                {data.map.address}
              </p>

              <Link
                href={data.map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F172A] py-3 text-sm font-bold text-white transition-all hover:bg-black"
              >
                <Navigation className="h-4 w-4" />
                {data.map.directionsText}
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
}