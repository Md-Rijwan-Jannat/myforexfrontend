"use client";

import React from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import BrandLogo from "../../../ui/brandLogo";
import { RiUser6Line } from "react-icons/ri";
import {
  MdCastForEducation,
  MdLeaderboard,
  MdOutlinePreview,
  MdOutlineSupportAgent,
} from "react-icons/md";
import {
  LuChartColumn,
  LuClock4,
  LuLayoutPanelLeft,
  LuScanLine,
} from "react-icons/lu";
import { TbAffiliate } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";
import { AiOutlineCreditCard } from "react-icons/ai";
import {
  FaChartGantt,
  FaChevronRight,
  FaMicroblog,
  FaShop,
} from "react-icons/fa6";
import { IoGrid, IoSearch } from "react-icons/io5";
import HeroGradient from "../../../ui/svg/HeroGradient";
import OverviewChart from "./OverviewChart";
import { BiBell, BiHelpCircle } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";
import { IoIosArrowDown, IoMdFolderOpen } from "react-icons/io";
import WinRateGauge from "./ActivityDaysGauge";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroDashboard() {
  const sidebarItems = [
    {
      icon: <IoGrid />,
      label: "Dashboard",
    },
    {
      icon: <RiUser6Line />,
      label: "Trading Account",
    },
    {
      icon: <MdLeaderboard />,
      label: "Leaderboard",
    },
    {
      icon: <LuLayoutPanelLeft />,
      label: "Competitions",
    },
    {
      icon: <TbAffiliate />,
      label: "Affiliate Portal",
    },
    {
      icon: <PiCertificate />,
      label: "Certificates",
    },
    {
      icon: <LuClock4 />,
      label: "Profit & Share",
    },
    {
      icon: <AiOutlineCreditCard />,
      label: "Billing & Accounts",
    },
    {
      icon: <MdOutlineSupportAgent />,
      label: "Customer Support",
    },
    {
      icon: <FaChartGantt />,
      label: "Trader's Mind",
    },
    {
      icon: <FaMicroblog />,
      label: "Blogs",
    },
    {
      icon: <MdCastForEducation />,
      label: "Education",
    },
    {
      icon: <FaShop />,
      label: "Marketplace",
    },
    {
      icon: <MdOutlinePreview />,
      label: "Reviews",
    },
    {
      icon: <FaQuestionCircle />,
      label: "FAQs",
    },
  ];

  return (
    <div className="min-h-fit bg-transparent max-w-5xl w-full mx-auto border border-white/10 dashboard-shadow pricing-shadow rounded-[20px] p-2 md:p-6 -mt-[180px] md:mt-0">
      <div className="flex border-[2px] border-white/20 rounded-[20px]">
        {/* Sidebar */}
        <div className="w-[40px] md:w-[200px] bg-white/1 border-r border-white/10 min-h-fit p-2 flex flex-col items-center relative">
          <div className="-mt-5 md:mt-0">
            <BrandLogo className="w-8 -ml-1 md:w-[120px] md:-ml-20" />
          </div>
          <nav className="flex flex-col  w-full items-center">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-center md:space-x-3 px-2 md:px-4 py-3 rounded-lg cursor-pointer transition-all hover:bg-white/5 w-12 md:w-full justify-center md:justify-start whitespace-nowrap"
              >
                <span className="text-[18px] text-white/60 drop-shadow-lg">
                  {item.icon}
                </span>
                <span className="hidden md:inline text-[13px] font-medium text-white/70">
                  {item.label}
                </span>
              </div>
            ))}
          </nav>
          <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-blue-500/10 shadow-[0_0_40px_10px_rgba(80,80,255,0.2)]" />
        </div>

        {/* Main Content */}
        <div className="flex-1 px-2 md:pl-8 md:pr-3 py-2 overflow-hidden">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2.5 gap-3">
            <div className="flex-1 flex items-center gap-2 bg-white/5 border border-white/3 rounded-lg px-3 py-2 backdrop-blur-md md:max-w-[180px] w-full">
              <IoSearch size={20} className="text-gray-400/80 mb-[1px]" />
              <input
                type="text"
                placeholder="Search Here"
                className="bg-transparent text-[10px] focus:outline-none placeholder:text-white/30 placeholder:tracking-wide tracking-wide w-full text-white flex items-start justify-center"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-1">
              {/* Left side - Language selector */}
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-white/5 rounded-md px-2 py-3.5 transition-colors w-fit">
                <div className="size-3 rounded-full bg-blue-500 flex items-center justify-center">
                  <TfiWorld className="text-blue-400" size={12} />
                </div>
                <span className="text-[10px] text-gray-300">English</span>
                <FaChevronDown className="size-2.5 text-gray-400/90" />
              </div>

              {/* Right side - User info and actions */}
              <div className="flex items-center w-fit">
                {/* User profile */}
                <div className="flex items-center space-x-2  mr-1 cursor-pointer hover:bg-white/5 rounded-md px-2 py-1.5 transition-colors">
                  <div className="size-7 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                    <Image
                      src={
                        "https://icon0.com/free/static2/preview2/stock-photo-avatar-male-in-glasses-people-icon-character-cartoon-33223.jpg"
                      }
                      alt="user"
                      width={1000}
                      height={1000}
                      className="size-7 object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col mt-[1px]">
                    <span className="text-[11px] leading-[13px] font-medium text-white">
                      Ali Riaz
                    </span>
                    <span className="text-[10px] text-gray-400/60">
                      Web Developer
                    </span>
                  </div>
                  <FaChevronDown className="size-2.5 text-gray-400/90" />
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-2">
                {/* Refresh button */}
                <button className="bg-white/4 p-2 border border-white/5 hover:bg-white/5 rounded-md transition-colors">
                  <LuScanLine className="size-5 text-blue-400" />
                </button>

                {/* Notification button */}
                <button className="bg-white/4 p-2 border border-white/5 hover:bg-white/5 rounded-md transition-colors relative">
                  <BiBell className="size-5 text-blue-400" />
                </button>

                {/* Help button */}
                <button className="bg-white/4 p-2 border border-white/5 hover:bg-white/5 rounded-md transition-colors">
                  <BiHelpCircle className="size-5 text-blue-400" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative">
            <div className="absolute top-0 -left-[150px] overflow-hidden z-0">
              <HeroGradient className="max-w-[550px]" />
            </div>
            <div className="absolute top-0 -right-[190px] overflow-hidden z-0">
              <HeroGradient className="max-w-[550px]" />
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full mt-7 mb-4">
              <h2 className="text-white font-semibold text-[30px] tracking-wide backdrop-opacity-0">
                Account Details
              </h2>
              <div className="flex items-center gap-2 border border-white/10 rounded bg-[#1d1d1e] backdrop-opacity-0 px-3 py-2">
                <div className="size-7 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <Image
                    src={
                      "https://icon0.com/free/static2/preview2/stock-photo-avatar-male-in-glasses-people-icon-character-cartoon-33223.jpg"
                    }
                    alt="user"
                    width={1000}
                    height={1000}
                    className="size-7 object-cover rounded-full"
                  />
                </div>
                <p className="text-[10px]">Choose your account blow</p>
                <IoIosArrowDown className="text-gray-400/70" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Section - Stats and Chart */}
              <div className="lg:col-span-2 space-y-6 z-10">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Total Earned Card */}
                  <div className="flex flex-col items-start justify-between gap-4 bg-gradient-to-r from-[#5C35EE]/80 to-[#644490]/60 backdrop-blur-md border border-purple-500/10 rounded-xl py-3 px-4 shadow-lg">
                    <div className="bg-white/10 rounded p-2">
                      <LuChartColumn className="size-4" />
                    </div>
                    <div className="flex flex-row justify-between items-center gap-3 w-full">
                      <div className="flex flex-col gap-1">
                        <span className="text-gray-200/80 leading-[8px] text-[10px]">
                          Total Earned
                        </span>
                        <div className="text-lg font-semibold tracking-wide text-white">
                          $920.41
                        </div>
                      </div>
                      <div className="size-7 bg-white/10 rounded-full flex items-center justify-center p-3">
                        <FaChevronRight
                          className="text-purple-300 text-lg"
                          size={18}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Total Payout Card */}
                  <div className="flex flex-col items-start justify-between gap-4 bg-[#0a0a0a] backdrop-blur-md rounded-xl py-2.5 px-4 shadow-lg">
                    <div className="bg-[#1a153b] rounded p-2">
                      <IoMdFolderOpen className="size-4 text-indigo-500" />
                    </div>
                    <div className="flex flex-row justify-between items-center gap-3 w-full">
                      <div className="flex flex-col gap-1">
                        <span className="text-gray-200/80 leading-[8px] text-[10px]">
                          Total Payout Amount
                        </span>
                        <div className="text-lg font-semibold tracking-wide text-white">
                          $720.01
                        </div>
                      </div>
                      <div className="size-7 bg-white/10 rounded-full flex items-center justify-center p-3">
                        <FaChevronRight
                          className="text-purple-300 text-lg"
                          size={18}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Account Overview Chart */}

                <OverviewChart
                  data={[
                    { month: "Jan", equity: 18000, balance: 45000 },
                    { month: "Feb", equity: 40000, balance: 76000 },
                    { month: "Mar", equity: 52000, balance: 99000 },
                    { month: "Apr", equity: 35000, balance: 60000 },
                    { month: "May", equity: 28000, balance: 43000 },
                    { month: "Jun", equity: 42000, balance: 57000 },
                    { month: "Jul", equity: 58000, balance: 83000 },
                    { month: "Aug", equity: 20000, balance: 35000 },
                    { month: "Sep", equity: 35000, balance: 60000 },
                    { month: "Oct", equity: 45000, balance: 80000 },
                    { month: "Nov", equity: 30000, balance: 55000 },
                    { month: "Dec", equity: 25000, balance: 40000 },
                  ]}
                  title="Account Overview"
                  className="bg-[#1d1d1e] px-4 py-5 rounded-md border border-white/5"
                />
              </div>
              {/* Right Section - Activity */}
              <div className="space-y-6 z-10">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <WinRateGauge />
                </motion.div>
                {/* Account Status - Active */}
                <div className="bg-[#1d1d1e] border border-white/10 backdrop-opacity-0 rounded-xl px-4 py-6 flex items-center justify-between">
                  <h3 className="text-[12px] font-medium text-white">
                    Account Status
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="size-2.5 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-400 text-[12px] font-medium">
                      Active
                    </span>
                  </div>
                </div>
                {/* Account Status - Inactive */}
                <div className="bg-[#1d1d1e] border border-white/10 backdrop-opacity-0 rounded-xl px-4 py-6 flex items-center justify-between">
                  <h3 className="text-[12px] font-medium text-white">
                    Account Status
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="size-2.5 border border-cyan-500 rounded-full"></div>
                    <span className="text-gray-400/90 text-[12px] font-medium">
                      Inactive
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
