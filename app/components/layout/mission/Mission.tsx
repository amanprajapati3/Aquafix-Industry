import { ServiceVisionMissionData, site } from "@/data";
import PageBanner from "../../shared/PageBanner";
import SectionHeader from "../../shared/SectionHeader";
import Image from "next/image";
import { Eye, Target, Users, ShieldCheck, Lightbulb, Leaf } from "lucide-react";

interface MissionProps {
  visionMissionData?: ServiceVisionMissionData;
}

export default function Mission({ visionMissionData }: MissionProps) {
  // Fallback to static site data if props are not provided
  const data = visionMissionData ?? site.visionMission;
  const sectionData = data?.visionMission;

  // Dynamic Lucide icon mapper for cards and values
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "eye":
        return <Eye className="h-7  w-7 text-[#0459E8]" />;
      case "target":
        return <Target className="h-7 w-7 text-[#22C55E]" />;
      case "users":
        return <Users className="h-6 w-6 sm:w-12 sm:h-12 text-[#2467EC]" />;
      case "shield-check":
        return <ShieldCheck className="h-6 w-6 sm:w-12 sm:h-12 text-[#2467EC]" />;
      case "lightbulb":
        return <Lightbulb className="h-6 w-6 sm:w-12 sm:h-12 text-[#2467EC]" />;
      case "leaf":
        return <Leaf className="h-6 w-6 sm:w-12 sm:h-12 text-[#2467EC]" />;
      default:
        return <Lightbulb className="h-6 w-6 sm:w-12 sm:h-12 text-[#2467EC]" />;
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

      {/* VISION & MISSION SECTION */}
      {sectionData && (
        <section className="bg-slate-50/50 py-8 md:py-12">
          <div className="mx-auto max-w-[1200px] px-2 sm:px-6">
            {/* Header */}
            <SectionHeader
              pretitle={sectionData.subTitle}
              title={sectionData.title}
              align="center"
            />

            {/* Vision & Mission Cards Grid */}
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {sectionData.cards?.map((card) => (
                <div
                  key={card.id}
                  className="flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EBF2FE]">
                        {renderIcon(card.iconName)}
                      </div>
                      <h3 className="text-2xl font-bold text-[#1E293B]">
                        {card.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-[#64748B] sm:text-base">
                      {card.desc}
                    </p>
                  </div>

                  {/* Card Image */}
                  <div className="relative mt-8 h-48 w-full overflow-hidden rounded-xl bg-slate-100 sm:h-56">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Core Values Strip */}
            {sectionData.values && sectionData.values.length > 0 && (
              <div className="mt-12 grid grid-cols-1 gap-6 rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:grid-cols-2 lg:grid-cols-4">
                {sectionData.values.map((val) => (
                  <div key={val.id} className="flex flex-col items-start">
                    <div className="flex items-center justify-center rounded-xl ">
                      {renderIcon(val.iconName)}
                    </div>
                    <h4 className="mt-4 text-base font-bold text-[#1E293B]">
                      {val.title}
                    </h4>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-[#64748B]">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}