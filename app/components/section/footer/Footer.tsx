"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import siteData from "@/data/site.json";
import ScrollReveal from "../../shared/ScrollReveal";

export type ServiceFooterData =
  typeof siteData.ServiceIndustries.sections.Footer.variants.ServiceFooter1;

const footerData: ServiceFooterData =
  siteData.ServiceIndustries.sections.Footer.variants.ServiceFooter1;

export default function Footer() {
  const {
    logoImage,
    desc,
    columns = [],
    footerContact,
    socialLinks = [],
    copyright,
    legalLinks = [],
  } = footerData || {};

    const socialIcons = {
      facebook: FaFacebookF,
      twitter: FaTwitter,
      instagram: FaInstagram,
      linkedin: FaLinkedinIn,
    };

  return (
    <footer className="w-full bg-[#091736] text-white">
      {/* Main Footer Container */}
      <ScrollReveal direction="up">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Brand Info & Call Button */}
            <div className="flex flex-col space-y-5">
              <Link href="/" className="inline-block">
                {logoImage ? (
                  <Image
                    src={logoImage}
                    alt="Aquafix"
                    width={2172}
                    height={724}
                    className="h-12 w-auto object-contain"
                  />
                ) : (
                  <span className="text-2xl font-extrabold tracking-tight text-white">
                    Aqua<span className="text-[#A3E635]">fix</span>
                  </span>
                )}
              </Link>

              <p className="text-sm leading-relaxed text-gray-300">
                {desc ||
                  "Professional plumbing services you can trust. Available 24/7 for all your plumbing needs."}
              </p>

              {/* Social Icons Strip */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social, index) => {
                  const Icon =
                    socialIcons[social.label as keyof typeof socialIcons];

                  if (!Icon) return null;

                  return (
                    <a
                      key={`${social.label}-${index}`}
                      href={social.href}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#11244e] text-gray-300 transition-colors hover:bg-[#A3E635] hover:text-[#091736]"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>

              {/* Call Pill Button */}
              {footerContact?.phone && (
                <div className="pt-2">
                  <a
                    href={
                      footerContact.phoneHref || `tel:${footerContact.phone}`
                    }
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-transparent px-5 py-2 text-sm font-medium text-white transition-all hover:border-[#A3E635] hover:text-[#A3E635]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#A3E635]" />
                    <span className="text-[#A3E635] hover:text-white">
                      Call +{footerContact.phone}
                    </span>
                  </a>
                </div>
              )}
            </div>

            {/* Dynamic Columns (Company & Services Links) */}
            {columns.map((col, idx) => (
              <div key={idx} className="flex flex-col space-y-4">
                <h3 className="text-base font-semibold text-white">
                  {col.title}
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-300">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="transition-colors  hover:text-[#A3E635]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Column 4: Contact Details */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-base font-semibold text-white">Contact</h3>
              <ul className="space-y-3.5 text-sm text-gray-300">
                {footerContact?.phone && (
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#A3E635]" />
                    <a
                      href={
                        footerContact.phoneHref || `tel:${footerContact.phone}`
                      }
                      className="hover:text-white"
                    >
                      {footerContact.phone}
                    </a>
                  </li>
                )}
                {footerContact?.email && (
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#A3E635]" />
                    <a
                      href={`mailto:${footerContact.email}`}
                      className="hover:text-white"
                    >
                      {footerContact.email}
                    </a>
                  </li>
                )}
                {footerContact?.address && (
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#A3E635]" />
                    <span>{footerContact.address}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Sub-Footer Bottom Bar */}
      <div className="border-t border-white/10 bg-[#061026]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-gray-400 sm:flex-row sm:px-6 lg:px-8">
          <p>
            {copyright ||
              `© 2026 Aquafix. All rights reserved. Designed by lestow`}
          </p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 md:gap-6">
            {legalLinks.map((link, lIdx) => (
              <Link
                key={lIdx}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            {legalLinks.length === 0 && (
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
