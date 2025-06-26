import * as React from "react";

const PricingGradient = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1440"
    height="1120"
    fill="none"
    viewBox="0 0 1440 1120"
    className={className}
  >
    <path
      fill="url(#paint0_linear_14_967)"
      d="M0 0h1440v1039.51c0 44.18-35.82 80-80 80H80c-44.183 0-80-35.82-80-80z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_14_967"
        x1="720"
        x2="720"
        y1="0"
        y2="1119.51"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopOpacity="0"></stop>
        <stop offset="1" stopColor="#0F153A"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default PricingGradient;
