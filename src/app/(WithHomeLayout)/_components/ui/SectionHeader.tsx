import React, { ReactNode } from "react";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
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
  marginTop?: string;
}

/* =========  Motion variants  ========= */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

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
  marginTop,
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
    stack === "col" ? "flex-col" : "flex-col md:flex-row w-full",
    justify === "center"
      ? "justify-center"
      : justify === "between"
      ? "justify-between"
      : "justify-start"
  );

  /* row layout: keep children vertically centred */
  const verticalAlign = stack === "row" ? "items-center w-full" : "";

  /* ➡️  only inject auto-margins for *column* layout */
  const marginHelper =
    stack === "col"
      ? align === "center"
        ? "mx-auto"
        : align === "right"
        ? "ml-auto"
        : "mr-auto"
      : ""; // row layout → no auto margin

  return (
    <motion.div
      /* parent animation */
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={clsx("max-w-7xl mx-auto", marginTop)}
    >
      {/* decorative gradient */}
      <motion.div
        variants={childVariants}
        className={gradientHidden ? "hidden" : "block"}
      >
        <SectionGradient />
      </motion.div>

      {/* content block */}
      <motion.div
        variants={childVariants}
        className={clsx(
          `flex flex-col space-y-4 ${gradientHidden ? "" : "-mt-[370px]"}`,
          alignment,
          className
        )}
      >
        {/* pill with icon + subtitle */}
        {icon && (
          <motion.div
            variants={childVariants}
            className="border border-white/20 bg-white/5 rounded-full p-1 flex gap-2.5 items-center w-fit"
          >
            <div className="bg-gradient-to-br from-white/20 to-transparent size-10 rounded-full p-2 flex items-center justify-center">
              {icon}
            </div>
            <h4 className="text-[20px] font-medium tracking-wide mr-2 text-white/90">
              {subtitle}
            </h4>
          </motion.div>
        )}

        {/* title + description */}
        <motion.div
          variants={childVariants}
          className={clsx(stackClasses, verticalAlign)}
        >
          <h2 className="text-white text-[32px] md:text-[44px] whitespace-pre-wrap">
            {title}
          </h2>

          <p
            className={clsx(
              "text-white/60",
              descriptionClassName,
              marginHelper,
              stack === "row" ? "flex-1 max-w-sm" : "max-w-xl"
            )}
          >
            {description}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
