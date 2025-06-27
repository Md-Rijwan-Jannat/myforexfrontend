import React, { ReactNode } from "react";
import clsx from "clsx";
import SectionGradient from "./svg/SectionGradient";

interface SectionHeaderProps {
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
  align?: "left" | "center" | "right";
  stack?: "col" | "row";
  justify?: "start" | "center" | "between";
  gradientHidden?: boolean;
}

export default function SectionHeader({
  icon,
  title = "Our Pricing",
  subtitle = "Pricing",
  description = "It is a long established fact that a reader will be distracted by the readable content of a page.",
  className,
  descriptionClassName,
  align = "center",
  stack = "col",
  justify = "center",
  gradientHidden = false,
}: SectionHeaderProps) {
  /* wrapper cross-axis alignment */
  const alignment =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  /* flex direction + justify for title/description */
  const stackClasses = clsx(
    "flex gap-2",
    stack === "col" ? "flex-col" : "flex-row w-full",
    justify === "center"
      ? "justify-center"
      : justify === "between"
      ? "justify-between"
      : "justify-start"
  );

  /* row layout: keep children vertically centred */
  const verticalAlign = stack === "row" ? "items-center w-full" : "";

  /* ➡️  only inject auto-margins for *column* layout  */
  const marginHelper =
    stack === "col"
      ? align === "center"
        ? "mx-auto"
        : align === "right"
        ? "ml-auto"
        : "mr-auto"
      : ""; // row layout → no auto margin

  return (
    <div className="max-w-7xl mx-auto">
      <div className={`${gradientHidden ? "hidden" : "block"}`}>
        <SectionGradient />
      </div>
      <div
        className={clsx(
          `flex flex-col space-y-4 ${gradientHidden ? "" : "-mt-[370px]"}`,
          alignment,
          className
        )}
      >
        {/* pill with icon + subtitle */}
        {icon && (
          <div className="border border-white/20 bg-white/5 rounded-full p-1 flex gap-2.5 items-center w-fit">
            <div className="bg-gradient-to-br from-white/20 to-transparent size-10 rounded-full p-2 flex items-center justify-center">
              {icon}
            </div>
            <h4 className="text-[20px] font-medium tracking-wide mr-2">
              {subtitle}
            </h4>
          </div>
        )}

        {/* title + description */}
        <div className={clsx(stackClasses, verticalAlign)}>
          <h2 className="text-white text-[44px] whitespace-pre-wrap">
            {title}
          </h2>

          <p
            className={clsx(
              "text-white/60",
              descriptionClassName,
              marginHelper,
              stack === "row" ? "flex-1 max-w-sm" : "max-w-xl" // ➡️ let it stretch when in row layout
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
