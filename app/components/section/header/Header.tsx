"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  UserRound,
  Menu as MenuIcon,
  X,
  ChevronDown,
} from "lucide-react";
import siteData from "@/data/site.json";

export type ServiceHeaderData =
  typeof siteData.ServiceIndustries.sections.Header.variants.ServiceHeader1;

const headerData: ServiceHeaderData =
  siteData.ServiceIndustries.sections.Header.variants.ServiceHeader1;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const { site, nav } = headerData;

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1400px] items-center justify-between rounded-[26px] bg-[#031B3D] px-5 py-3 text-white shadow-[0_8px_25px_rgba(3,27,61,0.22)] sm:min-h-[82px] sm:px-7 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          {site.logo?.light ? (
            <Image
              src={site.logo.light}
              alt={site.siteName || "Aquafix"}
              width={2172}
              height={724}
              className="h-9 w-auto object-contain sm:h-10 lg:h-11"
            />
          ) : (
            <span className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Aqua<span className="text-[#A3E635]">fix</span>
            </span>
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {nav.map((item, index) => {
            const isActive = pathname === item.href;
            const hasChildren = item.children && item.children.length > 0;

            return (
              <div key={index} className="group relative">
                <div className="flex items-center gap-1">
                  <Link
                    href={item.href || "#"}
                    className={`relative flex items-center gap-1 py-3 text-[15px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${isActive ? "text-[#A3E635]" : "text-[#F4F7FA] hover:text-[#A3E635]"}`}
                  >
                    <span>{item.label}</span>

                    {hasChildren && (
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    )}

                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#A3E635] transition-all duration-500 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </Link>
                </div>

                {/* Desktop Dropdown */}
                {hasChildren && (
                  <div className="invisible absolute left-0 top-full z-50 w-52 translate-y-2 rounded-xl bg-[#031B3D] py-2 opacity-0 shadow-xl ring-1 ring-white/10 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children?.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors duration-200 hover:bg-white/5 hover:text-[#A3E635]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 lg:flex xl:gap-4">
          {/* Call Us */}
          {site.TopBar?.phone && (
            <a
              href={site.TopBar.phoneHref || `tel:${site.TopBar.phone}`}
              className="flex items-center gap-3 rounded-full border border-[#24446D] bg-[#061F45] px-4 py-2 transition-all duration-300 hover:border-[#A3E635]"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#102E50] text-[#A3E635]">
                <Phone className="h-4 w-4" />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-[10px] font-medium uppercase leading-none tracking-[0.08em] text-[#A3AEBE]">
                  Call Us
                </span>
                <span className="mt-1 whitespace-nowrap text-[14px] font-bold leading-none text-white">
                  {site.TopBar.phone}
                </span>
              </div>
            </a>
          )}

          {/* Sign In */}
          {site.TopBar?.ctaButton && (
            <Link
              href={site.TopBar.ctaButton.href || "/contact-us"}
              className="flex items-center gap-2 rounded-full bg-[#A3E635] px-6 py-3 text-[15px] font-bold text-[#031B3D] shadow-sm transition-all duration-300 hover:bg-[#B5F34A] hover:shadow-[0_6px_20px_rgba(163,230,53,0.25)]"
            >
              <UserRound className="h-[18px] w-[18px]" />
              <span>{site.TopBar.ctaButton.label || "Sign In"}</span>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors duration-300 hover:bg-white/10 hover:text-[#A3E635] lg:hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay Backdrop */}
      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Mobile Menu Drawer - slides in from left, does not affect page layout */}
      <div
        className={`fixed left-0 top-0 z-50 flex h-full w-[82%] max-w-[340px] flex-col overflow-y-auto bg-[#031B3D] text-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <Link href="/" onClick={closeMenu} className="flex items-center">
            {site.logo?.light ? (
              <Image
                src={site.logo.light}
                alt={site.siteName || "Aquafix"}
                width={2172}
                height={724}
                className="h-8 w-auto object-contain"
              />
            ) : (
              <span className="text-xl font-extrabold tracking-tight text-white">
                Aqua<span className="text-[#A3E635]">fix</span>
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white transition-colors duration-300 hover:bg-white/10 hover:text-[#A3E635]"
            aria-label="Close Menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Nav */}
        <div className="flex flex-1 flex-col px-5 py-3">
          {nav.map((item, index) => {
            const isActive = pathname === item.href;
            const hasChildren = item.children && item.children.length > 0;

            return (
              <div
                key={index}
                className="border-b border-white/10 last:border-0"
              >
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href || "#"}
                    onClick={() => !hasChildren && closeMenu()}
                    className={`relative py-4 text-[15px] font-semibold transition-colors duration-300 ${isActive ? "text-[#A3E635]" : "text-white hover:text-[#A3E635]"}`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-2 left-0 h-[2px] rounded-full bg-[#A3E635] transition-all duration-500 ease-out ${isActive ? "w-full" : "w-0"}`}
                    />
                  </Link>

                  {hasChildren && (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/5"
                    >
                      <ChevronDown
                        className={`h-4 w-4 text-gray-300 transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {hasChildren && (
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      openDropdown === item.label
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="mb-3 ml-3 flex flex-col rounded-xl bg-white/5 px-4 py-2">
                        {item.children?.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            href={child.href}
                            onClick={closeMenu}
                            className="py-2.5 text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-[#A3E635]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Contact */}
        <div className="mt-auto flex flex-col gap-3 border-t border-white/10 p-5">
          {site.TopBar?.phone && (
            <a
              href={site.TopBar.phoneHref || `tel:${site.TopBar.phone}`}
              className="flex items-center gap-3 rounded-xl border border-[#24446D] bg-[#061F45] p-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#102E50] text-[#A3E635]">
                <Phone className="h-4 w-4" />
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-gray-400">
                  Call Us
                </span>
                <span className="text-sm font-bold text-white">
                  {site.TopBar.phone}
                </span>
              </div>
            </a>
          )}

          {site.TopBar?.ctaButton && (
            <Link
              href={site.TopBar.ctaButton.href || "/login"}
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#A3E635] py-3 text-[15px] font-bold text-[#031B3D]"
            >
              <UserRound className="h-[18px] w-[18px]" />
              <span>{site.TopBar.ctaButton.label || "Sign In"}</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}