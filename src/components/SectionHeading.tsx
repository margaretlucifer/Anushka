import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  italicPhrase?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  italicPhrase,
  subtitle,
  align = "left",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`space-y-3 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#798E6F] font-semibold ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <span className="w-5 h-[1.5px] bg-[#9BAF91]" />
          <span>{eyebrow}</span>
          {isCenter && <span className="w-5 h-[1.5px] bg-[#9BAF91]" />}
        </div>
      )}

      <h2 className="headline-section font-display font-normal text-[#292824] tracking-tight">
        {title}{" "}
        {italicPhrase && (
          <span className="italic font-editorial font-normal text-[#798E6F]">
            {italicPhrase}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-[#77736C] font-normal leading-relaxed pt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};
