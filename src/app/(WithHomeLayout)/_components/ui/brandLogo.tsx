import Link from "next/link";
import React from "react";

const BrandLogo = ({ className }: { className?: string }) => (
  <Link className="cursor-pointer" href={"/"}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="142"
      height="81"
      fill="none"
      viewBox="0 0 142 81"
      className={`${className}`}
    >
      <g fill="#fff" filter="url(#filter0_d_14_1496)">
        <path d="M28.42 54.665 20 60.604V20h9.122l11.98 19.11L52.78 20h9.423v40.382h-8.571V35.349l-12.48 19.316L28.42 35.349zM74.273 54.019l-8.07 5.678.05-39.697h24.41l-4.16 8.77h-12.23v6.947h12.68l-3.658 8.162h-9.022zM103.493 54.019l-8.83 5.678L94.717 20h26.711l-4.552 8.77h-13.383v6.947h13.876l-4.004 8.162h-9.872z"></path>
      </g>
      <defs>
        <filter
          id="filter0_d_14_1496"
          width="141.428"
          height="81"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_14_1496"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_14_1496"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  </Link>
);

export default BrandLogo;
