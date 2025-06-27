import React, { useState } from "react";
import { motion } from "framer-motion";
import BrandLogo from "../../../ui/brandLogo";
import { MarkSVG } from "../../../ui/svg/checkSvG";
import PricingGradient from "../../../ui/svg/PricingGradient";
import SectionHeader from "../../../ui/SectionHeader";

const planTypes = [
  {
    text: "Stellar",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6313 10.3932C17.1283 10.1067 17.6235 9.82124 18.1185 9.5354C18.717 9.18998 19.3151 8.8442 19.9137 8.49902C20.0689 8.40938 20.2316 8.44298 20.3129 8.5799C20.3968 8.72078 20.3463 8.8832 20.1864 8.97542C18.7645 9.79682 17.3424 10.6176 15.9202 11.4388C14.2086 12.4272 12.4973 13.4158 10.7856 14.4039C9.26683 15.2804 7.74763 16.1559 6.22891 17.0322C5.58219 17.4055 4.93566 17.7795 4.28914 18.1535C4.03096 18.3028 3.87353 18.2431 3.78675 17.9557C3.45531 16.8611 3.36373 15.7477 3.53403 14.6154C3.96271 11.7624 5.86391 9.44492 8.56579 8.48834C9.62882 8.11196 10.7243 7.97414 11.8477 8.08928C13.6881 8.2781 15.2593 9.03518 16.5711 10.3365C16.5892 10.3551 16.6086 10.372 16.6313 10.3932Z"
          fill="url(#paint0_radial_14_976)"
        />
        <path
          d="M5.42368 20.696C4.6629 21.1352 3.92632 21.5604 3.18952 21.9856C2.82581 22.1953 2.46275 22.406 2.09817 22.6147C1.99591 22.6731 1.89102 22.6718 1.7942 22.6012C1.70546 22.5364 1.67014 22.4452 1.68649 22.3369C1.70219 22.232 1.77109 22.169 1.85918 22.1184C2.49372 21.7538 3.1276 21.3877 3.76147 21.0218C5.72416 19.8884 7.6864 18.7545 9.64912 17.6215C11.5989 16.4959 13.5489 15.3712 15.499 14.2458C16.2552 13.8095 17.0112 13.3727 17.7672 12.9358C17.9927 12.8056 18.1627 12.8705 18.2386 13.1172C18.5522 14.1361 18.6728 15.1789 18.5321 16.2351C18.1596 19.0316 16.7044 21.0702 14.1737 22.3205C13.0958 22.853 11.9393 23.0839 10.7391 23.0459C8.69488 22.9814 6.9433 22.2187 5.48495 20.7843C5.45879 20.7588 5.44222 20.7233 5.42368 20.696Z"
          fill="url(#paint1_linear_14_976)"
        />
        <path
          d="M11.2128 21.9046C11.672 21.689 11.8696 21.1419 11.654 20.6827C11.4384 20.2235 10.8914 20.0259 10.4321 20.2415C9.97287 20.4571 9.77534 21.0041 9.99092 21.4634C10.2065 21.9226 10.7535 22.1201 11.2128 21.9046Z"
          fill="white"
        />
        <path
          d="M15.8605 18.2515C16.1282 18.1259 16.2433 17.8071 16.1177 17.5394C15.992 17.2718 15.6732 17.1566 15.4055 17.2823C15.1379 17.4079 15.0228 17.7267 15.1484 17.9944C15.274 18.2621 15.5929 18.3772 15.8605 18.2515Z"
          fill="white"
        />
        <path
          d="M15.5265 19.7983C15.6765 19.7279 15.741 19.5493 15.6706 19.3993C15.6002 19.2493 15.4216 19.1848 15.2716 19.2552C15.1216 19.3256 15.0571 19.5043 15.1275 19.6543C15.1979 19.8042 15.3765 19.8688 15.5265 19.7983Z"
          fill="white"
        />
        <path
          d="M22.3166 4.3502C20.9912 4.3502 19.9166 5.42479 19.9166 6.7502C19.9166 5.42479 18.842 4.3502 17.5166 4.3502C18.842 4.3502 19.9166 3.27561 19.9166 1.9502C19.9166 3.27561 20.9912 4.3502 22.3166 4.3502Z"
          fill="white"
        />
        <path
          d="M18.1168 7.0994C17.4542 7.0994 16.9168 7.63646 16.9168 8.2994C16.9168 7.63676 16.3797 7.0994 15.7168 7.0994C16.3794 7.0994 16.9168 6.5624 16.9168 5.89941C16.9168 6.56204 17.4542 7.0994 18.1168 7.0994Z"
          fill="white"
        />
        <path
          d="M5.89747 15.098C6.21015 14.9512 6.34464 14.5788 6.19786 14.2661C6.05109 13.9534 5.67863 13.8189 5.36595 13.9657C5.05328 14.1125 4.91879 14.4849 5.06556 14.7976C5.21234 15.1103 5.5848 15.2448 5.89747 15.098Z"
          fill="white"
        />
        <defs>
          <radialGradient
            id="paint0_radial_14_976"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(11.9017 13.1413) scale(12.1573)"
          >
            <stop stopColor="#F4E0FF" />
            <stop offset="0.1648" stopColor="#D690FA" />
            <stop offset="0.4218" stopColor="#B961E7" />
            <stop offset="0.857" stopColor="#9432CA" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_14_976"
            x1="10.1365"
            y1="12.8701"
            x2="10.1365"
            y2="23.05"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E932ED" />
            <stop offset="1" stopColor="#15AAEC" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    text: "Evaluation",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.4387 10.8403C20.0123 10.8406 20.5838 10.841 21.1554 10.841C21.8465 10.8411 22.5374 10.8407 23.2283 10.841C23.4076 10.841 23.5317 10.9514 23.5337 11.1107C23.5359 11.2746 23.4109 11.3901 23.2263 11.39C21.5843 11.3904 19.9422 11.3901 18.3 11.3903C16.3235 11.3904 14.3471 11.3909 12.3708 11.3907C10.6172 11.3905 8.86385 11.3891 7.11041 11.3886C6.36365 11.3886 5.61676 11.3892 4.86987 11.3898C4.57161 11.39 4.46514 11.2596 4.53368 10.9673C4.79396 9.85359 5.27133 8.84361 5.98499 7.94811C7.78277 5.6917 10.5879 4.63532 13.4061 5.15782C14.5149 5.36339 15.5325 5.79179 16.4478 6.4532C17.9472 7.53693 18.9295 8.97819 19.4148 10.7611C19.4213 10.7862 19.4296 10.8107 19.4387 10.8403Z"
          fill="url(#paint0_radial_14_987)"
        />
        <path
          d="M4.58395 14.1599C3.70551 14.1598 2.85502 14.1598 2.00433 14.1596C1.58447 14.1594 1.16473 14.1603 0.744651 14.1587C0.626871 14.1582 0.536691 14.1046 0.488171 13.995C0.443695 13.8946 0.458676 13.798 0.527025 13.7123C0.593063 13.6293 0.684243 13.6092 0.785829 13.6094C1.51764 13.6109 2.24965 13.6108 2.98155 13.6109C5.248 13.6106 7.51428 13.6098 9.78054 13.6099C12.0319 13.6101 14.2831 13.6111 16.5345 13.6115C17.4076 13.6117 18.2807 13.6115 19.1539 13.6111C19.4142 13.611 19.529 13.7524 19.4714 14.0039C19.2335 15.0431 18.8165 16.0064 18.1666 16.8508C16.4458 19.0864 14.1662 20.1242 11.3494 19.9417C10.1498 19.864 9.0327 19.4857 8.01228 18.8527C6.2742 17.7747 5.13864 16.2383 4.59286 14.267C4.58295 14.2318 4.58637 14.1928 4.58395 14.1599Z"
          fill="url(#paint1_radial_14_987)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_14_987"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(13.9686 10.8554) rotate(30) scale(12.1573)"
          >
            <stop stopColor="#D9DBFF" />
            <stop offset="0.208741" stopColor="#9A9EC2" />
            <stop offset="0.4218" stopColor="#797DA7" />
            <stop offset="0.857" stopColor="#676B92" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_14_987"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(10.0336 14.1469) rotate(30) scale(21.3977 21.3977)"
          >
            <stop stopColor="#E9EBFF" />
            <stop offset="0.1648" stopColor="#A2A5CA" />
            <stop offset="0.4218" stopColor="#383B5B" />
            <stop offset="0.857" stopColor="#915BFF" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    text: "Express",
    icon: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.19115 10.0943C1.77457 10.3586 1.65118 10.9106 1.91554 11.3272C2.17991 11.7438 2.73192 11.8672 3.1485 11.6028L2.19115 10.0943ZM3.1485 11.6028L11.3359 6.40698L10.3785 4.89844L2.19115 10.0943L3.1485 11.6028Z"
          fill="url(#paint0_linear_14_992)"
        />
        <path
          d="M8.49094 20.6441C8.07436 20.9084 7.951 21.4604 8.21536 21.877C8.47972 22.2936 9.03172 22.417 9.4483 22.1526L8.49094 20.6441ZM9.4483 22.1526L17.6357 16.9568L16.6783 15.4482L8.49094 20.6441L9.4483 22.1526Z"
          fill="url(#paint1_linear_14_992)"
        />
        <path
          d="M6.28293 17.1781C5.86637 17.4425 5.74298 17.9945 6.00735 18.4111C6.27171 18.8276 6.82371 18.9511 7.24029 18.6867L6.28293 17.1781ZM7.24029 18.6867L15.4276 13.4909L14.4703 11.9823L6.28293 17.1781L7.24029 18.6867Z"
          fill="url(#paint2_linear_14_992)"
        />
        <path
          d="M2.6638 14.6587C2.24723 14.9231 2.12384 15.4751 2.38821 15.8917C2.65257 16.3082 3.20458 16.4317 3.62115 16.1673L2.6638 14.6587ZM3.62115 16.1673L11.8085 10.9714L10.8512 9.46289L2.6638 14.6587L3.62115 16.1673Z"
          fill="url(#paint3_linear_14_992)"
        />
        <path
          d="M20.181 7.01489C18.0003 3.58419 13.4513 2.57041 10.0206 4.75096C6.58971 6.93173 5.57639 11.4809 7.75696 14.9116C9.93748 18.3425 14.4865 19.3561 17.9174 17.1753C21.348 14.9948 22.3616 10.4457 20.181 7.01489ZM15.2206 10.2231C14.6999 9.40391 14.9421 8.31725 15.7615 7.79633C16.5809 7.27541 17.6673 7.51781 18.1883 8.33699C18.7092 9.15659 18.467 10.243 17.6476 10.7639C16.8282 11.2847 15.7415 11.0427 15.2206 10.2231ZM10.2827 12.112C10.5994 11.9106 11.0196 12.0042 11.2211 12.3209C11.4225 12.6378 11.3286 13.0581 11.0119 13.2593C10.695 13.4607 10.275 13.3671 10.0736 13.0504C9.87214 12.7334 9.96573 12.3134 10.2827 12.112ZM12.4557 13.2584C12.6415 13.1403 12.8877 13.1952 13.0058 13.381C13.1238 13.5668 13.069 13.8128 12.8832 13.9309C12.6972 14.0491 12.4512 13.9943 12.3332 13.8085C12.2151 13.6227 12.2697 13.3765 12.4557 13.2584ZM12.9895 6.66941C12.8039 6.78731 12.5577 6.73265 12.4397 6.54665C12.3216 6.36087 12.3764 6.11487 12.562 5.9968C12.7478 5.87873 12.9942 5.93337 13.1121 6.11916C13.2303 6.30516 13.1753 6.55139 12.9895 6.66941Z"
          fill="url(#paint4_radial_14_992)"
        />
        <path
          d="M12.8821 13.9321C12.6961 14.0503 12.4501 13.9955 12.332 13.8097C12.214 13.6239 12.2686 13.3777 12.4546 13.2596C12.6404 13.1416 12.8866 13.1964 13.0047 13.3822C13.1228 13.568 13.068 13.814 12.8821 13.9321Z"
          fill="white"
        />
        <path
          d="M11.0084 13.2573C10.6915 13.4588 10.2715 13.3652 10.07 13.0484C9.86861 12.7315 9.96227 12.3115 10.2792 12.1101C10.5959 11.9087 11.0161 12.0023 11.2175 12.319C11.419 12.6359 11.3251 13.0562 11.0084 13.2573Z"
          fill="white"
        />
        <path
          d="M12.9891 6.66757C12.8035 6.78541 12.5572 6.73075 12.4392 6.54481C12.3211 6.35899 12.376 6.113 12.5616 5.99492C12.7473 5.87686 12.9937 5.9315 13.1116 6.11728C13.2299 6.30328 13.1748 6.54949 12.9891 6.66757Z"
          fill="white"
        />
        <path
          d="M17.6479 10.7656C16.8285 11.2863 15.7419 11.0444 15.221 10.2248C14.7003 9.40552 14.9424 8.31891 15.7618 7.79799C16.5813 7.27707 17.6677 7.51941 18.1886 8.33859C18.7095 9.15825 18.4674 10.2447 17.6479 10.7656Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_14_992"
            x1="10.7652"
            y1="5.65271"
            x2="1.70937"
            y2="11.7454"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0163E4" />
            <stop offset="1" stopColor="#62A5FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_14_992"
            x1="15.8998"
            y1="16.7006"
            x2="8.00488"
            y2="22.2854"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0163E4" />
            <stop offset="1" stopColor="#79B2FF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_14_992"
            x1="10.7996"
            y1="15.1999"
            x2="5.78007"
            y2="18.7952"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0163E4" />
            <stop offset="1" stopColor="#62A5FF" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_14_992"
            x1="6.59922"
            y1="13.1"
            x2="2.15734"
            y2="16.2709"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0163E4" />
            <stop offset="1" stopColor="#62A5FF" />
          </linearGradient>
          <radialGradient
            id="paint4_radial_14_992"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(20.0972 7.21835) rotate(-32.4378) scale(16.5478)"
          >
            <stop stopColor="white" />
            <stop offset="0.1648" stopColor="#66A8FB" />
            <stop offset="0.4218" stopColor="#2D7EE6" />
            <stop offset="0.857" stopColor="#0060D6" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
];
const stepTypes = ["2-Step", "1-Step"];

type Plan = {
  price: string;
  fee: string;
  profitTarget: string;
  maxDailyLoss: string;
  maxOverallLoss: string;
  balanceDrawdown: boolean;
  minTrading: string;
  profitSplit: string;
  newsTrading: boolean;
  firstReward: string;
};

type FeatureKey = keyof Omit<Plan, "price" | "fee">;

const plans: Plan[] = [
  {
    price: "$6,000",
    fee: "$117",
    profitTarget: "P1: 8%, P2: 5%",
    maxDailyLoss: "5% ($300)",
    maxOverallLoss: "10% ($600)",
    balanceDrawdown: true,
    minTrading: "5 Days",
    profitSplit: "95%",
    newsTrading: true,
    firstReward: "Monthly",
  },
  {
    price: "$6,000",
    fee: "$117",
    profitTarget: "P1: 8%, P2: 5%",
    maxDailyLoss: "5% ($300)",
    maxOverallLoss: "10% ($600)",
    balanceDrawdown: true,
    minTrading: "5 Days",
    profitSplit: "95%",
    newsTrading: true,
    firstReward: "Monthly",
  },
  {
    price: "$6,000",
    fee: "$117",
    profitTarget: "P1: 8%, P2: 5%",
    maxDailyLoss: "5% ($300)",
    maxOverallLoss: "10% ($600)",
    balanceDrawdown: true,
    minTrading: "5 Days",
    profitSplit: "95%",
    newsTrading: true,
    firstReward: "Monthly",
  },
  {
    price: "$6,000",
    fee: "$117",
    profitTarget: "P1: 8%, P2: 5%",
    maxDailyLoss: "5% ($300)",
    maxOverallLoss: "10% ($600)",
    balanceDrawdown: true,
    minTrading: "5 Days",
    profitSplit: "95%",
    newsTrading: true,
    firstReward: "Monthly",
  },
];

const feeFeature = { label: "15% Profit Share", key: "fee" };
const features: { label: string; key: FeatureKey }[] = [
  { label: "Profit Target", key: "profitTarget" },
  { label: "Maximum Daily Loss", key: "maxDailyLoss" },
  { label: "Maximum Overall Loss", key: "maxOverallLoss" },
  { label: "Balance Based Drawdown", key: "balanceDrawdown" },
  { label: "Minimum Trading", key: "minTrading" },
  { label: "Profit Split Upto", key: "profitSplit" },
  { label: "News Trading", key: "newsTrading" },
  { label: "First Reward", key: "firstReward" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
      type: "spring" as const,
      stiffness: 60,
      damping: 18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 18,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 70, damping: 16 },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const buttonHover = {
  hover: { scale: 1.06, boxShadow: "0 4px 24px 0 rgba(92,53,238,0.18)" },
  tap: { scale: 0.97 },
};

export default function BestPlan() {
  const [selectedPlan, setSelectedPlan] = useState("Stellar");
  const [selectedStep, setSelectedStep] = useState("2-Step");

  return (
    <motion.div
      className="min-h-fit w-full z-50 flex flex-col items-center justify-center mt-12 md:mt-[160px] relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl w-full text-left mb-8"
          >
            <SectionHeader
              title="Choose the Best Plan"
              description="It is a long established fact that a reader will be distracted by
              the readable content of a page."
              align="left"
              gradientHidden={true}
            />
          </motion.div>

          {/* Toggles */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-start gap-4 mb-6 w-fit"
          >
            <div className="flex gap-2 bg-white/3 border border-white/4 rounded-lg p-1.5 overflow-hidden">
              {planTypes.map(({ text, icon }) => (
                <motion.button
                  key={text}
                  onClick={() => setSelectedPlan(text)}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`px-[10px] md:px-[20px] py-[7px] md:py-[14px] rounded-[8px] text-sm font-medium transition-all text-[12px] md:text-[20px] flex flex-row items-center gap-1 md:gap-3 cursor-pointer ${
                    selectedPlan === text
                      ? "bg-gradient-to-r from-[#5C35EE] to-[#664782] text-white btn-border btn-shadow pr-8"
                      : "text-white/60 border border-white/15"
                  }`}
                >
                  {icon}
                  {text}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center gap-2 mr-auto">
              <span className="text-white tracking-wide text-sm mt-[2px]">
                Select Preference
              </span>
              <div className="flex gap-3 ml-3">
                {stepTypes.map((step) => (
                  <motion.div
                    key={step}
                    onClick={() => setSelectedStep(step)}
                    className="flex flex-row items-center cursor-pointer"
                    variants={itemVariants}
                  >
                    <div
                      className={`size-4 rounded-full border transition-all flex items-center justify-center ${
                        selectedStep === step
                          ? "border-white"
                          : "border-white/50"
                      }`}
                    >
                      <div
                        className={`size-2 rounded-full transition-all ${
                          selectedStep === step
                            ? "bg-white text-white"
                            : "text-white/60 hover:bg-[#23242a]"
                        }`}
                      ></div>
                    </div>
                    <motion.button
                      className={`px-2 py-1 mt-[4px] rounded-md text-xs font-medium transition-all cursor-pointer ${
                        selectedStep === step ? "text-white" : "text-white/50"
                      }`}
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonHover}
                    >
                      {step}
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards Layout */}
        <div className="w-full">
          <motion.div
            className="w-full bg-white/3 rounded-[20px] best-pricing-shadow p-2 md:px-10 md:py-8 flex flex-col mt-3"
            variants={fadeIn}
          >
            {/* Responsive scroll wrapper for feature list + plan cards */}
            <div className="w-full overflow-x-auto xl:overflow-x-visible">
              <motion.div
                className="flex flex-row gap-9 justify-center items-stretch w-max xl:w-full overflow-y-hidden max-w-7xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Feature List Column */}
                <motion.div
                  className="flex flex-col justify-between py-2 w-fit min-w-[160px] sm:min-w-[180px] md:min-w-[220px]"
                  variants={itemVariants}
                >
                  <div className="text-[30px] font-medium text-left pb-4 -mt-2">
                    Account Size
                  </div>
                  <div className="flex-1 flex flex-col gap-2 mt-6">
                    <div className="min-h-[60px] text-[18px] text-white/80 font-normal tracking-wide border-b border-white/30 whitespace-nowrap flex items-center pb-1">
                      {feeFeature.label}
                    </div>
                    {features.map((feature, i) => (
                      <motion.div
                        key={feature.key}
                        className="min-h-[60px] text-white/80 font-normal text-[18px] tracking-wide border-b border-white/30 whitespace-nowrap flex items-center pb-1"
                        variants={itemVariants}
                        transition={{ delay: 0.05 * i }}
                      >
                        {feature.label}
                      </motion.div>
                    ))}
                  </div>
                  <div className="-mb-4">
                    <BrandLogo className="max-w-32 h-auto opacity-90" />
                  </div>
                </motion.div>
                {/* Plan Cards */}
                {plans.map((plan, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center justify-between min-w-[150px] sm:min-w-[170px] md:min-w-[195px]"
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ delay: 0.08 * idx }}
                  >
                    <div className="text-[22px] sm:text-[26px] md:text-[30px] font-normal pb-3 sm:pb-4 md:pb-6 text-center w-full break-words">
                      {plan.price}
                    </div>
                    <div className="flex-1 flex flex-col gap-2 w-full best-pricing-shadow rounded-[20px] px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6 min-w-[150px] sm:min-w-[170px] md:min-w-[195px]">
                      <div className="py-2 sm:py-3 text-center text-white/90 font-semibold border-b border-white/15 text-[16px] sm:text-[18px]">
                        {plan.fee}
                      </div>
                      {features.map((feature, i) => (
                        <motion.div
                          key={feature.key}
                          className="py-2 text-center border-b border-white/15 min-h-[40px] sm:min-h-[50px] md:min-h-[60px] flex items-center justify-center text-[15px] sm:text-[16px] md:text-[18px]"
                          variants={itemVariants}
                          transition={{ delay: 0.03 * i }}
                        >
                          {typeof plan[feature.key] === "boolean" ? (
                            plan[feature.key] ? (
                              <MarkSVG />
                            ) : (
                              "-"
                            )
                          ) : (
                            <span className="text-white/90 font-semibold">
                              {plan[feature.key]}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full mt-3 sm:mt-4 md:mt-5 py-2 sm:py-3 rounded-xl text-white/90 bg-white/10 text-base sm:text-lg font-medium border border-white/10 transition-all pricing-shadow2 cursor-pointer"
                    >
                      Start Challenge
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          <div className="absolute top-4 -right-[100px] -z-1">
            <PricingGradient />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
