import * as React from "react";

const HeroRightBorder = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="403"
    height="290"
    viewBox="0 0 383 290"
    fill="none"
  >
    {/* diagonal + vertical stroke */}
    <path
      d="M383 1.024H184.044a41.15 41.15 0 0 0-29.098 12.06L13.456 154.69A41.16 41.16 0 0 0 1.4 183.805v90.512"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.1"
    />

    {/* circle that ‘touches’ the bottom of the stroke */}
    <circle
      cx="1.4"
      cy="264.317"
      r="10"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeOpacity="0.08"
    />
  </svg>
);

export default HeroRightBorder;
