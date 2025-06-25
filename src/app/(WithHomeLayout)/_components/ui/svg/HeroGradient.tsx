import React from "react";

const HeroGradient = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1385"
    height="551"
    fill="none"
    viewBox="0 0 1385 551"
    className={`${className}`}
  >
    <g filter="url(#filter0_f_14_139)" opacity="0.4">
      <ellipse
        cx="692.73"
        cy="-149.611"
        fill="url(#paint0_linear_14_139)"
        rx="500"
        ry="491.886"
        transform="rotate(90 692.73 -149.611)"
      ></ellipse>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_14_139"
        x1="692.73"
        x2="692.73"
        y1="-641.498"
        y2="342.275"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#161B6C"></stop>
        <stop offset="0.5" stopColor="#5C35ED"></stop>
        <stop offset="1" stopColor="#01C0F9"></stop>
      </linearGradient>
      <filter
        id="filter0_f_14_139"
        width="1383.77"
        height="1400"
        x="0.843"
        y="-849.611"
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
          result="effect1_foregroundBlur_14_139"
          stdDeviation="100"
        ></feGaussianBlur>
      </filter>
    </defs>
  </svg>
);

export default HeroGradient;
