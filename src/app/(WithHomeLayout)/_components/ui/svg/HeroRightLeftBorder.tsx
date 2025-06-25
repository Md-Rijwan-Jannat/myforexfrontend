import * as React from "react";

const HeroRightLeftBorder = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="379"
    height="124"
    fill="none" // default fill = transparent
    viewBox="0 0 379 124"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="2"
      d="M377.858 1.866H139.301a41.15 41.15 0 0 0-29.098 12.06L1.4 122.815"
      opacity="0.1"
    />
    {/* 20 px-diameter circle with 1 px stroke, no fill */}
    <circle
      cx="10"
      cy="114"
      r="10"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      opacity="0.1"
    />
  </svg>
);

export default HeroRightLeftBorder;
