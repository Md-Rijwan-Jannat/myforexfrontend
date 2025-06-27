"use client";

import React, { useRef, useState } from "react";
import SectionHeader from "../../../ui/SectionHeader";
import ReviewCard from "./ReviewCard";

// 8 review data objects
const reviews = [
  {
    name: "John Appleseed",
    role: "Founder & CEO",
    review:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
  {
    name: "Jane Doe",
    role: "Product Manager",
    review:
      "The team was very professional and delivered everything on time. Highly recommended!",
  },
  {
    name: "Michael Smith",
    role: "Lead Developer",
    review: "Their attention to detail and commitment to quality is unmatched.",
  },
  {
    name: "Emily Johnson",
    role: "UI/UX Designer",
    review:
      "A wonderful experience from start to finish. The design exceeded my expectations!",
  },
  {
    name: "Chris Lee",
    role: "Marketing Head",
    review:
      "We saw a significant boost in our engagement after working with them.",
  },
  {
    name: "Sara Wilson",
    role: "Business Analyst",
    review:
      "Their insights and strategies helped us grow our business rapidly.",
  },
  {
    name: "David Kim",
    role: "CTO",
    review:
      "Reliable, efficient, and always available for support. Great partners!",
  },
  {
    name: "Linda Brown",
    role: "HR Manager",
    review: "The process was smooth and communication was clear throughout.",
  },
];

export default function ReviewSection() {
  const [paused, setPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Marquee animation duration (in seconds)
  const CARD_WIDTH = 373;
  const GAP = 16; // px, for mx-2
  const TOTAL_CARDS = reviews.length * 2; // duplicated for seamless loop
  // Calculate total width for animation
  const totalWidth = TOTAL_CARDS * (CARD_WIDTH + GAP);
  // Animation duration: longer for more cards
  const duration = Math.max(20, reviews.length * 4); // seconds

  // Tailwind doesn't support dynamic keyframes, so use inline style
  const marqueeStyle = {
    animation: `marquee ${duration}s linear infinite`,
    animationPlayState: paused ? "paused" : "running",
    width: totalWidth,
    display: "flex",
  };

  return (
    <div className="w-screen relative px-2 md:px-5 mt-12 md:mt-[150px]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          align="left"
          stack="row"
          justify="between"
          icon={
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_14_763)">
                <path
                  d="M2.00049 6.41016C2.00049 4.75316 3.34349 3.41016 5.00049 3.41016H15.0005C16.6575 3.41016 18.0005 4.75316 18.0005 6.41016V16.4102C18.0005 16.7972 17.6425 17.0842 17.2655 17.0002L10.6465 15.5292C10.2895 15.4502 9.92649 15.4102 9.56149 15.4102H5.00049C3.34349 15.4102 2.00049 14.0672 2.00049 12.4102V6.41016Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M4.00049 9.41016C4.00049 8.30516 4.89549 7.41016 6.00049 7.41016C7.10549 7.41016 8.00049 8.30516 8.00049 9.41016C8.00049 10.5152 7.10549 11.4102 6.00049 11.4102C4.89549 11.4102 4.00049 10.5152 4.00049 9.41016Z"
                  fill="white"
                />
                <path
                  d="M8.00049 9.41016C8.00049 8.30516 8.89549 7.41016 10.0005 7.41016C11.1055 7.41016 12.0005 8.30516 12.0005 9.41016C12.0005 10.5152 11.1055 11.4102 10.0005 11.4102C8.89549 11.4102 8.00049 10.5152 8.00049 9.41016Z"
                  fill="white"
                />
                <path
                  d="M12.0005 9.41016C12.0005 8.30516 12.8955 7.41016 14.0005 7.41016C15.1055 7.41016 16.0005 8.30516 16.0005 9.41016C16.0005 10.5152 15.1055 11.4102 14.0005 11.4102C12.8955 11.4102 12.0005 10.5152 12.0005 9.41016Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_14_763">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.000488281 0.410156)"
                  />
                </clipPath>
              </defs>
            </svg>
          }
          subtitle="Reviews"
          title="What Client Says About Us"
          description="It is a long established fact that a reader will be distracted by the readable content of a page."
        />
      </div>
      <div
        className="w-full flex justify-center overflow-x-hidden mt-5 md:mt-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ userSelect: "none" }}
      >
        <div ref={marqueeRef} style={marqueeStyle}>
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              style={{ minWidth: 350, maxWidth: 350 }}
              className="mx-2"
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 1023px) {
          div[style*='marquee'] > div {
            min-width: 100vw !important;
            max-width: 100vw !important;
          }
        }
      `}</style>
    </div>
  );
}
