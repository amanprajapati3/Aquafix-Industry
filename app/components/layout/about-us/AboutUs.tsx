import { ServiceAboutPageData, site } from "@/data";
import AboutSection from "../../homelayout/AboutSection";
import Choose from "../../homelayout/Choose";
import PageBanner from "../../shared/PageBanner";
import SectionHeader from "../../shared/SectionHeader";
import { Wrench, Users, ShieldCheck, UserCheck, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";

// Plumber Line Art SVG component matching the image design

interface AboutUsProps {
  aboutData?: ServiceAboutPageData;
}

export default function AboutUs({ aboutData }: AboutUsProps) {
  const data = aboutData ?? site.aboutPage;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "wrench":
        return <Wrench className="h-6 w-6 text-[#2467EC]" />;
      case "users":
        return <Users className="h-6 w-6 text-[#2467EC]" />;
      case "shield-check":
        return <ShieldCheck className="h-6 w-6 text-[#2467EC]" />;
      case "user-check":
        return <UserCheck className="h-6 w-6 text-[#2467EC]" />;
      default:
        return <Wrench className="h-6 w-6 text-[#2467EC]" />;
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

      {/* ABOUT SECTION */}
      <AboutSection
        aboutData={data}
        featureStripData={site.featureStrip}
        hideButton
      />

      {/* WHY CHOOSE US SECTION */}
      <Choose chooseData={site.whyChooseUs} />

      {/* OUR VALUES SECTION */}
      {data?.ourValues && (
        <section className="bg-white pb-8  md:py-12">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <SectionHeader
              pretitle={data.ourValues.subTitle}
              title={data.ourValues.title}
              align="center"
            />

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.ourValues.items?.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EBF2FE]">
                    {renderIcon(item.iconName)}
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-[#1E293B]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-[#64748B]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MEET OUR TEAM SECTION */}
      {data?.team && (
        <section className="bg-white pb-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <SectionHeader
              pretitle={data.team.subTitle}
              title={data.team.title}
              align="center"
            />

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.team.members?.map((member) => (
                <div
                  key={member.id}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative h-[280px] w-full overflow-hidden rounded-xl bg-slate-100">
                      <Link href={`/teams/${member.slug}`}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                  </div>

                  <div className="flex flex-col items-center pt-5 pb-2 text-center">
                      <Link href={`/teams/${member.slug}`}>
                      <h3 className="text-lg font-bold text-[#1E293B] transition-colors hover:text-[#2467EC]">
                        {member.name}
                      </h3>
                    </Link>
                    <p className="mt-1 text-sm font-medium text-[#64748B]">
                      {member.role}
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <a
                        href={member.socials?.facebook || "#"}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2467EC] text-white transition-opacity hover:opacity-80"
                      >
                        <FaFacebookF className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={member.socials?.twitter || "#"}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2467EC] text-white transition-opacity hover:opacity-80"
                      >
                        <FaTwitter className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={member.socials?.linkedin || "#"}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2467EC] text-white transition-opacity hover:opacity-80"
                      >
                        <FaLinkedinIn className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA BANNER SECTION - EXACT IMAGE MATCH */}
      {/* CTA BANNER SECTION */}
      {data?.ctaBanner && (
        <section className="py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="relative flex flex-col items-center justify-between rounded-2xl bg-[#0459E8] px-6 py-8 sm:px-10 md:py-10 lg:flex-row shadow-lg">
              {/* Left Side: Image + Text Group */}
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                {/* CTA Image Icon */}
                <div className="relative h-20 w-24 shrink-0 sm:h-24 sm:w-32">
                  <Image
                    src="/aboutcta.png"
                    alt="Plumber Icon"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Heading + Description */}
                <div>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    {data.ctaBanner.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm font-medium text-blue-100 md:text-base">
                    {data.ctaBanner.desc}
                  </p>
                </div>
              </div>

              {/* Right Side: Call Button */}
              <div className="mt-6 shrink-0 lg:mt-0">
                <a
                  href={data.ctaBanner.phoneHref}
                  className="inline-flex items-center gap-3 rounded-full bg-white sm:px-7 px-2 py-3.5 text-base font-bold text-[#0459E8] shadow-md transition-transform hover:scale-105"
                >
                  <Phone className="h-5 w-5 fill-[#0459E8] text-[#0459E8]" />
                  {data.ctaBanner.phoneLabel}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
