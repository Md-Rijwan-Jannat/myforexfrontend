"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  NewsLetterBottomGradient,
  NewsLetterRightGradient,
  NewsLetterTopGradient,
} from "../../../ui/svg/NewsLetterGradients";
import HeroDashboard from "../heroSection/HeroDashboard";

/* ---------------- motion variants ---------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, ease: "easeOut" },
  },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function NewsLetter() {
  return (
    <motion.div
      className="max-w-7xl mx-auto relative px-2 md:px-5 overflow-x-hidden mt-12 md:mt-[150px] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="news-letter-shadow rounded-[20px] md:rounded-[44px] relative overflow-y-hidden overflow-x-hidden flex flex-col lg:flex-row max-h-[440px]"
        variants={fadeSlideUp}
      >
        {/* top gradient */}
        <motion.div
          className="absolute top-0 left-0 -z-1"
          variants={fadeSlideUp}
          transition={{ duration: 0.8 }}
        >
          <NewsLetterTopGradient />
        </motion.div>

        {/* text + form */}
        <motion.div
          className="p-5 lg:p-20 space-y-3 md:space-y-4"
          variants={fadeSlideUp}
        >
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
              className="focus:outline-none border-none placeholder:text-white/70 text-[14px] ml-4 text-white/70"
            />
            <button className="text-[14px text-white/70 px-4 py-2 rounded-[8px] bg-white/10">
              Submit
            </button>
          </div>

          {/* bottom gradient */}
          <motion.div
            className="absolute bottom-0 left-8 -z-1"
            variants={fadeSlideUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <NewsLetterBottomGradient />
          </motion.div>
        </motion.div>

        {/* hero dashboard illustration */}
        <div
          className="mt-[180px] lg:mt-16 -z-1 transform-gpu"
          style={{
            width: "1280px",
            marginRight: "-270px", // GPU hint
          }}
        >
          <HeroDashboard />
        </div>

        {/* right gradient */}
        <motion.div
          className="absolute top-0 right-0 -z-1"
          variants={fadeSlideUp}
          transition={{ duration: 0.8 }}
        >
          <NewsLetterRightGradient />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
