import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { ServiceTeamData, site } from "@/data";
import PageBanner from "../../shared/PageBanner";
import SectionHeader from "../../shared/SectionHeader";

interface TeamProps {
  teamData?: ServiceTeamData;
}

export default function Team({ teamData }: TeamProps) {
  const data = teamData ?? site.team;

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

      {/* TEAM SECTION */}
      <section className="bg-slate-50/50 py-8 md:py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          {/* Header */}
          {data?.heading && (
            <SectionHeader
              pretitle={data.heading.subTitle}
              title={data.heading.title}
              description={data.heading.description}
              align="center"
              descriptionMaxWidth="max-w-2xl"
            />
          )}

          {/* Team Members Grid */}
          {data?.members?.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.members.map((member) => (
                <div
                  key={member.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    {/* Member Image with Social Overlay Badges */}
                    <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                      <Link href={`/teams/${member.slug}`}>
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </Link>

                      {/* Top Right Action Badges */}
                      <div className="absolute right-3 top-3 z-10 flex gap-1.5">
                        {member.socials?.linkedin && (
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white shadow-sm transition-colors hover:bg-blue-700"
                          >
                            <FaLinkedinIn size={15} />
                          </a>
                        )}
                        {member.socials?.email && (
                          <a
                            href={`mailto:${member.socials.email}`}
                            className="flex h-8 w-8 items-center justify-center rounded-md bg-sky-500 text-white shadow-sm transition-colors hover:bg-sky-600"
                          >
                            <Mail size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Info Content */}
                    <div className="space-y-2 p-6 text-center">
                      <Link href={`/teams/${member.slug}`}>
                        <h3 className="text-xl font-bold text-gray-900 transition-colors hover:text-blue-600">
                          {member.name}
                        </h3>
                      </Link>
                      <p className="text-sm font-semibold text-blue-600">
                        {member.designation}
                      </p>
                      <div className="mx-auto my-3 h-0.5 w-10 bg-blue-100" />
                      <p className="text-sm leading-relaxed text-gray-500">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
