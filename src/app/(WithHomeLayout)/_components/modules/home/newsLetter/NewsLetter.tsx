import React from "react";
import {
  NewsLetterBottomGradient,
  NewsLetterRightGradient,
  NewsLetterTopGradient,
} from "../../../ui/svg/NewsLetterGradients";
import HeroDashboard from "../heroSection/HeroDashboard";

export default function NewsLetter() {
  return (
    <div className="max-w-7xl mx-auto relative px-2 md:px-5 overflow-x-hidden mt-12 md:mt-[150px]">
      <div className="news-letter-shadow rounded-[20px] md:rounded-[44px] relative overflow-hidden flex flex-col lg:flex-row max-h-[440px]">
        <div className="absolute top-0 left-0 -z-1">
          <NewsLetterTopGradient />
        </div>
        <div className="p-5 lg:p-20 space-y-3 md:space-y-4">
          <h2 className="text-white text-[30px] md:text-[44px] whitespace-pre-wrap leading-[40px] md:leading-[54px] max-w-sm">
            Join Our <br />
            Newsletter
          </h2>
          <p className="text-[14px] text-white/70 leading-[20px] max-w-[310px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
          <div className="flex flex-row justify-between py-1 px-1.5 rounded-[14px] input-shadow max-w-[310px]">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="focus:outline-none border-none placeholder:text-white/70 text-[14px] ml-4"
            />
            <button className="text-[14px text-white/70 px-4 py-2 rounded-[8px] bg-white/10">
              Submit
            </button>
          </div>
          <div className="absolute bottom-0 left-8 -z-1">
            <NewsLetterBottomGradient />
          </div>
        </div>
        <div
          className="mt-[180px] lg:mt-16 -z-1"
          style={{ width: "1280px", marginRight: "-250px" }}
        >
          <HeroDashboard />
        </div>
        <div className="absolute top-0 right-0 -z-1">
          <NewsLetterRightGradient />
        </div>
      </div>
    </div>
  );
}
