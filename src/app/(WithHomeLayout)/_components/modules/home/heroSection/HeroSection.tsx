import React from "react";
import HeroTitle from "../../../ui/svg/HeroTitle";
import HeroLeftRightBorder from "../../../ui/svg/HeroLeftRightBorder";
import HeroRightLeftBorder from "../../../ui/svg/HeroRightLeftBorder";
import HeroRightBorder from "../../../ui/svg/HeroRightBorder";
import HeroGradient from "../../../ui/svg/HeroGradient";
import HeroDashboard from "../heroSection/HeroDashboard";
import HeroBottomLeftGradient from "../../../ui/svg/HeroBottomLeftGradient";
import HeroLeftBorder from "../../../ui/svg/HeroLeftBorder";
import HeroLeftBottomBottomBorder from "../../../ui/svg/HeroLeftBottomBottomBorder";
import HeroLeftBottomTopBorder from "../../../ui/svg/HeroLeftBottomTopBorder";
import HeroRightBottomBottomBorder from "../../../ui/svg/HeroRightBottomBottomBorder";

export default function HeroSection() {
  return (
    <div className="w-full relative overflow-hidden mx-auto">
      <div className="absolute top-0 -left-9">
        <HeroLeftBorder />
      </div>
      <div className="absolute top-0 left-[200px]">
        <HeroLeftRightBorder />
      </div>
      <div className="absolute hidden md:block  top-[82px] right-0">
        <HeroRightLeftBorder />
      </div>
      <div className="absolute hidden md:block top-[140px] -right-0 overflow-hidden">
        <HeroRightBorder />
      </div>
      <div className="flex items-center justify-center -mt-[115px] z-20">
        <HeroGradient />
      </div>
      <div className="flex items-center justify-center w-full absolute -top-[50px] md:top-[90px]">
        <HeroTitle />
      </div>
      <div className="z-50">
        <HeroDashboard />
      </div>
      <div className="absolute bottom-0 left-0">
        <HeroBottomLeftGradient />
      </div>
      <div className="absolute bottom-[210px] left-0 -z-10">
        <HeroLeftBottomTopBorder />
      </div>
      <div className="absolute bottom-[150px] left-0 -z-10">
        <HeroLeftBottomBottomBorder />
      </div>
      <div className="absolute bottom-[150px] right-0 -z-10">
        <HeroRightBottomBottomBorder />
      </div>
      <div className="absolute -bottom-7 right-0 -rotate-90">
        <HeroBottomLeftGradient />
      </div>
    </div>
  );
}
