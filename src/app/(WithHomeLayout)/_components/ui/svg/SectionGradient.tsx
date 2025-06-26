import * as React from "react";

const SectionGradient = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1440"
    height="542"
    fill="none"
    viewBox="0 0 1440 542"
    className={`${className}`}
  >
    <g filter="url(#filter0_f_14_523)" opacity="0.64">
      <ellipse
        cx="720.001"
        cy="270.948"
        fill="url(#paint0_linear_14_523)"
        rx="638"
        ry="70.948"
      ></ellipse>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_14_523"
        x1="720.001"
        x2="720.001"
        y1="200"
        y2="341.896"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#161B6C"></stop>
        <stop offset="0.5" stopColor="#5C35ED"></stop>
        <stop offset="1" stopColor="#01C0F9"></stop>
      </linearGradient>
      <filter
        id="filter0_f_14_523"
        width="1676"
        height="541.896"
        x="-117.999"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_14_523"
          stdDeviation="100"
        ></feGaussianBlur>
      </filter>
    </defs>
  </svg>
);

export default SectionGradient;
