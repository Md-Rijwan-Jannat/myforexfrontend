"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import SectionHeader from "../../../ui/SectionHeader";
import { FaArrowRight } from "react-icons/fa6";
import { CheckSVG } from "../../../ui/svg/checkSvG";
import BestPlan from "./BestPlan";

/* ───────── animation variants ────────── */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      // stagger each card
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

const list: Variants = {
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

/* ───────── plans data (unchanged) ───────── */
const plans = [
  {
    id: 1,
    name: "Stellar",
    icon: (
      <svg
        width="53"
        height="53"
        viewBox="0 0 53 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.6039 21.641C37.6911 21.0143 38.7743 20.3898 39.8572 19.7645C41.1666 19.0089 42.4749 18.2524 43.7843 17.4973C44.124 17.3012 44.4798 17.3747 44.6576 17.6743C44.8413 17.9825 44.7306 18.3378 44.381 18.5395C41.2705 20.3363 38.1595 22.1319 35.0484 23.9282C31.3041 26.0905 27.5606 28.2532 23.816 30.4145C20.4938 32.332 17.1704 34.2472 13.8481 36.1642C12.4334 36.9809 11.0191 37.799 9.60477 38.6171C9.04 38.9438 8.6956 38.813 8.50576 38.1843C7.78071 35.7899 7.58038 33.3542 7.95292 30.8772C8.8907 24.6361 13.0497 19.5665 18.9602 17.474C21.2856 16.6506 23.682 16.3491 26.1395 16.601C30.1654 17.0141 33.6027 18.6702 36.4723 21.517C36.5119 21.5575 36.5543 21.5947 36.6039 21.641Z"
          fill="url(#paint0_radial_14_547)"
        />
        <path
          d="M12.0861 44.1792C10.4219 45.1399 8.81058 46.0701 7.19878 47.0001C6.40314 47.459 5.60894 47.9198 4.81139 48.3763C4.58768 48.5042 4.35824 48.5013 4.14645 48.3468C3.95231 48.205 3.87504 48.0057 3.91082 47.7686C3.94516 47.5392 4.09589 47.4014 4.2886 47.2907C5.67668 46.4931 7.06332 45.6922 8.44996 44.8918C12.7434 42.4124 17.036 39.932 21.3295 37.4534C25.5949 34.9912 29.8606 32.5308 34.1265 30.069C35.7807 29.1145 37.4345 28.1591 39.0882 27.2032C39.5815 26.9184 39.9535 27.0605 40.1195 27.6001C40.8054 29.829 41.0693 32.1101 40.7616 34.4207C39.9468 40.5383 36.7634 44.9977 31.2272 47.7328C28.8694 48.8977 26.3395 49.4029 23.714 49.3198C19.2421 49.1787 15.4104 47.5101 12.2202 44.3723C12.1629 44.3165 12.1267 44.2388 12.0861 44.1792Z"
          fill="url(#paint1_linear_14_547)"
        />
        <path
          d="M24.7494 46.8232C25.754 46.3517 26.1862 45.155 25.7146 44.1503C25.243 43.1457 24.0463 42.7136 23.0417 43.1852C22.0371 43.6568 21.605 44.8535 22.0765 45.8581C22.5481 46.8627 23.7448 47.2948 24.7494 46.8232Z"
          fill="white"
        />
        <path
          d="M34.9185 38.8326C35.504 38.5577 35.7559 37.8602 35.481 37.2747C35.2062 36.6892 34.5087 36.4374 33.9232 36.7122C33.3377 36.9871 33.0858 37.6845 33.3607 38.27C33.6355 38.8556 34.333 39.1074 34.9185 38.8326Z"
          fill="white"
        />
        <path
          d="M34.1867 42.2162C34.5148 42.0621 34.6559 41.6713 34.5019 41.3432C34.3479 41.0151 33.9571 40.874 33.629 41.028C33.3009 41.182 33.1598 41.5729 33.3138 41.901C33.4678 42.2291 33.8586 42.3702 34.1867 42.2162Z"
          fill="white"
        />
        <path
          d="M49.0413 8.42201C46.1419 8.42201 43.7912 10.7727 43.7912 13.6722C43.7912 10.7727 41.4404 8.42201 38.541 8.42201C41.4404 8.42201 43.7912 6.07129 43.7912 3.17188C43.7912 6.07129 46.1419 8.42201 49.0413 8.42201Z"
          fill="white"
        />
        <path
          d="M39.8537 14.4356C38.4041 14.4356 37.2286 15.6104 37.2286 17.0607C37.2286 15.6111 36.0537 14.4356 34.6035 14.4356C36.0531 14.4356 37.2286 13.2609 37.2286 11.8105C37.2286 13.2601 38.4041 14.4356 39.8537 14.4356Z"
          fill="white"
        />
        <path
          d="M13.1229 31.9345C13.8069 31.6135 14.1011 30.7987 13.78 30.1147C13.4589 29.4307 12.6442 29.1365 11.9602 29.4576C11.2762 29.7787 10.982 30.5934 11.303 31.2774C11.6241 31.9614 12.4389 32.2556 13.1229 31.9345Z"
          fill="white"
        />
        <defs>
          <radialGradient
            id="paint0_radial_14_547"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(26.2576 27.6527) scale(26.5947)"
          >
            <stop stopColor="#F4E0FF" />
            <stop offset="0.1648" stopColor="#D690FA" />
            <stop offset="0.4218" stopColor="#B961E7" />
            <stop offset="0.857" stopColor="#9432CA" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_14_547"
            x1="22.3956"
            y1="27.0596"
            x2="22.3956"
            y2="49.3286"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E932ED" />
            <stop offset="1" stopColor="#15AAEC" />
          </linearGradient>
        </defs>
      </svg>
    ),
    description:
      "Perfect for small businesses and startups looking to explore AI capabilities.",
    features: [
      "Basic Predictive Analytics",
      "Automated Workflows",
      "Real-Time Data Analysis",
      "Basic Customizable Dashboards",
      "Email Support",
    ],
    button: "Start Challenge",
    highlight: true,
  },
  {
    id: 2,
    name: "Evaluation ",
    icon: (
      <svg
        width="53"
        height="53"
        viewBox="0 0 53 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.7477 22.6206C44.0024 22.6213 45.2528 22.6222 46.5032 22.6221C48.0149 22.6225 49.5262 22.6214 51.0378 22.6222C51.4299 22.6222 51.7014 22.8637 51.7057 23.2122C51.7107 23.5708 51.4372 23.8233 51.0334 23.8232C47.4413 23.8241 43.8493 23.8234 40.2569 23.8237C35.933 23.824 31.6096 23.8251 27.2863 23.8247C23.4503 23.8242 19.6146 23.8211 15.7789 23.8202C14.1453 23.82 12.5115 23.8213 10.8776 23.8226C10.2251 23.8232 9.99222 23.5378 10.1422 22.8985C10.7115 20.4622 11.7558 18.2528 13.317 16.2938C17.2497 11.3578 23.3862 9.0469 29.5512 10.1899C31.9766 10.6396 34.2028 11.5767 36.2051 13.0236C39.4851 15.3943 41.6338 18.5472 42.6956 22.4474C42.7096 22.5022 42.7278 22.5558 42.7477 22.6206Z"
          fill="url(#paint0_radial_14_614)"
        />
        <path
          d="M10.2514 29.8822C8.32975 29.8821 6.46924 29.8819 4.60832 29.8815C3.68984 29.8811 2.77164 29.8831 1.8527 29.8796C1.59504 29.8785 1.39777 29.7613 1.29163 29.5215C1.19434 29.3018 1.22711 29.0905 1.37663 28.903C1.52109 28.7215 1.72055 28.6775 1.94277 28.6779C3.54366 28.6813 5.14496 28.6811 6.74603 28.6812C11.704 28.6807 16.6616 28.6789 21.6192 28.6791C26.5442 28.6795 31.4687 28.6816 36.3939 28.6825C38.3037 28.6831 40.2137 28.6825 42.1239 28.6816C42.6934 28.6815 42.9445 28.9907 42.8186 29.5409C42.2981 31.8142 41.386 33.9215 39.9642 35.7688C36.1999 40.6593 31.2132 42.9296 25.0512 42.5303C22.4269 42.3602 19.9833 41.5326 17.751 40.148C13.9489 37.7898 11.4648 34.4289 10.2709 30.1165C10.2492 30.0396 10.2567 29.9541 10.2514 29.8822Z"
          fill="url(#paint1_radial_14_614)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_14_614"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(30.7815 22.6537) rotate(30) scale(26.5947)"
          >
            <stop stopColor="#D9DBFF" />
            <stop offset="0.208741" stopColor="#9A9EC2" />
            <stop offset="0.4218" stopColor="#797DA7" />
            <stop offset="0.857" stopColor="#676B92" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_14_614"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(22.1727 29.8538) rotate(30) scale(46.8086 46.8086)"
          >
            <stop stopColor="#E9EBFF" />
            <stop offset="0.1648" stopColor="#A2A5CA" />
            <stop offset="0.4218" stopColor="#383B5B" />
            <stop offset="0.857" stopColor="#915BFF" />
          </radialGradient>
        </defs>
      </svg>
    ),
    description:
      "Perfect for small businesses and startups looking to explore AI capabilities.",
    features: [
      "Basic Predictive Analytics",
      "Automated Workflows",
      "Real-Time Data Analysis",
      "Basic Customizable Dashboards",
      "Email Support",
    ],
    button: "Start Challenge",
    highlight: true,
  },
  {
    id: 3,
    name: "Express ",
    icon: (
      <svg
        width="53"
        height="53"
        viewBox="0 0 53 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.02015 20.9873C4.10887 21.5656 3.83895 22.7731 4.41725 23.6844C4.99557 24.5957 6.20313 24.8656 7.1144 24.2873L5.02015 20.9873ZM7.1144 24.2873L25.0247 12.9211L22.9304 9.62109L5.02015 20.9873L7.1144 24.2873Z"
          fill="url(#paint0_linear_14_675)"
        />
        <path
          d="M18.8014 44.0654C17.8901 44.6437 17.6202 45.8512 18.1985 46.7625C18.7768 47.6738 19.9844 47.9438 20.8956 47.3655L18.8014 44.0654ZM20.8956 47.3655L38.806 35.9992L36.7117 32.6992L18.8014 44.0654L20.8956 47.3655Z"
          fill="url(#paint1_linear_14_675)"
        />
        <path
          d="M13.9713 36.4843C13.06 37.0626 12.7901 38.2703 13.3684 39.1814C13.9467 40.0927 15.1543 40.3627 16.0656 39.7844L13.9713 36.4843ZM16.0656 39.7844L33.9759 28.4183L31.8817 25.1182L13.9713 36.4843L16.0656 39.7844Z"
          fill="url(#paint2_linear_14_675)"
        />
        <path
          d="M6.0553 30.9726C5.14402 31.5509 4.8741 32.7584 5.45242 33.6697C6.03072 34.581 7.23828 34.851 8.14956 34.2727L6.0553 30.9726ZM8.14956 34.2727L26.0599 22.9064L23.9656 19.6064L6.0553 30.9726L8.14956 34.2727Z"
          fill="url(#paint3_linear_14_675)"
        />
        <path
          d="M44.3732 14.252C39.6027 6.74716 29.6516 4.52946 22.1468 9.29952C14.6414 14.0701 12.4247 24.0217 17.1948 31.5265C21.9649 39.0319 31.9161 41.249 39.4213 36.4785C46.9261 31.7084 49.1434 21.7572 44.3732 14.252ZM33.522 21.2701C32.383 19.4781 32.9127 17.101 34.7052 15.9614C36.4978 14.8219 38.8744 15.3522 40.0139 17.1442C41.1535 18.9371 40.6237 21.3137 38.8312 22.4532C37.0387 23.5924 34.6615 23.0632 33.522 21.2701ZM22.7201 25.4022C23.4128 24.9616 24.332 25.1665 24.7728 25.8593C25.2134 26.5525 25.008 27.4718 24.3152 27.9119C23.6219 28.3526 22.7032 28.1478 22.2625 27.4549C21.8219 26.7616 22.0267 25.8429 22.7201 25.4022ZM27.4737 27.9101C27.8801 27.6518 28.4187 27.7718 28.677 28.1783C28.9352 28.5846 28.8152 29.1228 28.4089 29.3811C28.002 29.6398 27.4638 29.5198 27.2055 29.1134C26.9472 28.7069 27.0668 28.1684 27.4737 27.9101ZM28.6413 13.4962C28.2354 13.7542 27.6968 13.6346 27.4385 13.2277C27.1802 12.8213 27.3002 12.2832 27.7061 12.0249C28.1126 11.7666 28.6517 11.8861 28.9095 12.2925C29.1682 12.6994 29.0478 13.2381 28.6413 13.4962Z"
          fill="url(#paint4_radial_14_675)"
        />
        <path
          d="M28.4074 29.3835C28.0005 29.6422 27.4624 29.5223 27.2041 29.1158C26.9459 28.7094 27.0654 28.1707 27.4723 27.9126C27.8787 27.6543 28.4173 27.7742 28.6756 28.1806C28.9339 28.5871 28.8139 29.1252 28.4074 29.3835Z"
          fill="white"
        />
        <path
          d="M24.3079 27.9078C23.6146 28.3485 22.6958 28.1437 22.2552 27.4508C21.8146 26.7575 22.0195 25.8388 22.7127 25.3981C23.4055 24.9575 24.3248 25.1624 24.7654 25.8552C25.206 26.5485 25.0008 27.4677 24.3079 27.9078Z"
          fill="white"
        />
        <path
          d="M28.6422 13.4925C28.2363 13.7503 27.6976 13.6307 27.4394 13.224C27.1811 12.8175 27.3011 12.2794 27.7071 12.0211C28.1134 11.7628 28.6525 11.8823 28.9104 12.2887C29.1691 12.6956 29.0486 13.2342 28.6422 13.4925Z"
          fill="white"
        />
        <path
          d="M38.8328 22.4567C37.0403 23.5957 34.6633 23.0665 33.5238 21.2735C32.3846 19.4814 32.9143 17.1044 34.7069 15.9649C36.4994 14.8253 38.876 15.3555 40.0155 17.1475C41.1551 18.9405 40.6253 21.3171 38.8328 22.4567Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_14_675"
            x1="23.7764"
            y1="11.2711"
            x2="3.96623"
            y2="24.5992"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0163E4" />
            <stop offset="1" stopColor="#62A5FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_14_675"
            x1="35.0087"
            y1="35.4387"
            x2="17.7381"
            y2="47.6559"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0163E4" />
            <stop offset="1" stopColor="#79B2FF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_14_675"
            x1="23.8518"
            y1="32.1568"
            x2="12.8712"
            y2="40.0219"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0163E4" />
            <stop offset="1" stopColor="#62A5FF" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_14_675"
            x1="14.6642"
            y1="27.5628"
            x2="4.94738"
            y2="34.4994"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0163E4" />
            <stop offset="1" stopColor="#62A5FF" />
          </linearGradient>
          <radialGradient
            id="paint4_radial_14_675"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(44.1897 14.6971) rotate(-32.4378) scale(36.1993 36.1993)"
          >
            <stop stopColor="white" />
            <stop offset="0.1648" stopColor="#66A8FB" />
            <stop offset="0.4218" stopColor="#2D7EE6" />
            <stop offset="0.857" stopColor="#0060D6" />
          </radialGradient>
        </defs>
      </svg>
    ),
    description:
      "Perfect for small businesses and startups looking to explore AI capabilities.",
    features: [
      "Basic Predictive Analytics",
      "Automated Workflows",
      "Real-Time Data Analysis",
      "Basic Customizable Dashboards",
      "Email Support",
    ],
    button: "Start Challenge",
    highlight: true,
  },
];

export default function PricingSection() {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-5">
      <SectionHeader
        icon={
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_14_528)">
              <path
                d="M5.60181 3.00488H4.00181C3.78089 3.00488 3.60181 3.18397 3.60181 3.40488V5.00488C3.60181 5.2258 3.78089 5.40488 4.00181 5.40488H5.60181C5.82272 5.40488 6.00181 5.2258 6.00181 5.00488V3.40488C6.00181 3.18397 5.82272 3.00488 5.60181 3.00488Z"
                stroke="white"
              />
              <path
                d="M5.60181 7.80469H4.00181C3.78089 7.80469 3.60181 7.98377 3.60181 8.20469V9.80469C3.60181 10.0256 3.78089 10.2047 4.00181 10.2047H5.60181C5.82272 10.2047 6.00181 10.0256 6.00181 9.80469V8.20469C6.00181 7.98377 5.82272 7.80469 5.60181 7.80469Z"
                stroke="white"
              />
              <path
                d="M5.60181 12.6045H4.00181C3.78089 12.6045 3.60181 12.7836 3.60181 13.0045V14.6045C3.60181 14.8254 3.78089 15.0045 4.00181 15.0045H5.60181C5.82272 15.0045 6.00181 14.8254 6.00181 14.6045V13.0045C6.00181 12.7836 5.82272 12.6045 5.60181 12.6045Z"
                stroke="white"
              />
              <path
                d="M8.802 4.20508H14.402"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.802 9.00488H14.402"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.802 13.8047H14.402"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_14_528">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(0.601807 0.00488281)"
                />
              </clipPath>
            </defs>
          </svg>
        }
      />

      {/* cards wrapper with stagger-in */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row gap-6 justify-center my-10"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            variants={card}
            whileHover={{
              y: -10,
              rotate: plan.highlight ? 0 : -1,
              transition: { type: "spring", stiffness: 200, damping: 12 },
            }}
            whileTap={{ scale: 0.97 }}
            className={`
              rounded-[20px] p-[28px] pt-[36px] flex-1 pricing-shadow
              ${
                plan.highlight
                  ? "hover:pricing-gradient text-white"
                  : "bg-[#181A20] text-white"
              }
              ${plan.id === 1 && "pricing-gradient"}
              transition-all
            `}
          >
            {/* top icon + arrow */}
            <div className="mb-4 flex flex-row gap-3 items-center justify-between">
              {plan.icon}
              <FaArrowRight className="size-6 -rotate-45 font-medium" />
            </div>

            {/* title & description */}
            <div className="flex flex-col items-start space-y-2">
              <h2 className="text-[40px] font-medium mb-2 tracking-wider">
                {plan.name}
              </h2>
              <p className="mb-6 text-[15px] text-white/60">
                {plan.description}
              </p>
            </div>

            {/* features list with small stagger */}
            <motion.ul
              variants={list}
              initial="hidden"
              animate="show"
              className="mb-6 space-y-8 pricing-shadow2 rounded-[20px] p-5 bg-white/10 backdrop-blur-sm"
            >
              {plan.features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={listItem}
                  className="flex items-center gap-3"
                >
                  <CheckSVG />
                  <p className="text-white/70 text-[15px]">{feature}</p>
                </motion.li>
              ))}
            </motion.ul>

            {/* call-to-action button with subtle press feedback */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="pricing-shadow2 rounded-[8px] p-5 bg-white/10 backdrop-blur-sm flex items-center justify-center gap-3 w-full text-[20px] leading-[24px] tracking-wide font-normal text-white/90"
            >
              {plan.button}
              <FaArrowRight className="size-4" />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
      <BestPlan />
    </div>
  );
}
