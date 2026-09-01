import { Droplet } from "lucide-react";

interface SectionHeaderProps {
  pretitle?: string;
  title?: string | { normal: string; highlighted?: string };
  description?: string;
  align?: "center" | "left";
  titleAs?: "h1" | "h2" | "h3" | "span";
  highlightClassName?: string;
  descriptionMaxWidth?: string;
  className?: string;
}

export default function SectionHeader({
  pretitle,
  title,
  description,
  align = "center",
  titleAs = "h2",
  highlightClassName = "text-[#0F172A]",
  descriptionMaxWidth = "max-w-xl",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  const titleContent = (() => {
    if (!title) return null;
    if (typeof title === "string") return title;
    return (
      <>
        {title.normal}{" "}
        {title.highlighted && <span className={highlightClassName}>{title.highlighted}</span>}
      </>
    );
  })();

  const TitleTag = titleAs;

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {pretitle && (
        <>
          <span className="text-sm font-black uppercase tracking-widest text-[#0052CC]">
            {pretitle}
          </span>
        </>
      )}

      {title && (
        <TitleTag className="mt-0 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
          {titleContent}
        </TitleTag>
      )}

      {/* Decorative Droplet Divider */}
      <div
        className={`mt-2 flex items-center ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <div className="h-[2px] w-8 bg-[#84CC16]" />
        <Droplet className="mx-2 h-4 w-4 fill-[#0052CC] text-[#0052CC]" />
        <div className="h-[2px] w-8 bg-[#84CC16]" />
      </div>

      {description && (
        <p
          className={`mt-4 ${descriptionMaxWidth} text-sm font-medium leading-relaxed text-[#64748B] sm:text-base`}
        >
          {description}
        </p>
      )}
    </div>
  );
}