"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import {
  FaHome,
  FaQuestionCircle,
  FaUserFriends,
  FaInfoCircle,
  FaHandshake,
} from "react-icons/fa";
import Image from "next/image";
import BrandLogo from "../brandLogo";
import SignUpButton from "../svg/SignUpButton";

const navLinks = [
  { label: "Home", href: "/", icon: <FaHome className="w-5 h-5 mr-2" /> },
  {
    label: "Challenges",
    icon: <FaUserFriends className="w-5 h-5 mr-2" />,
    dropdown: [
      { label: "Challenge 1", href: "/challenges/1" },
      { label: "Challenge 2", href: "/challenges/2" },
    ],
  },
  {
    label: "FAQs",
    href: "/faqs",
    icon: <FaQuestionCircle className="w-5 h-5 mr-2" />,
  },
  {
    label: "Affiliate",
    icon: <FaHandshake className="w-5 h-5 mr-2" />,
    dropdown: [
      { label: "Program", href: "/affiliate/program" },
      { label: "Stats", href: "/affiliate/stats" },
    ],
  },
  {
    label: "More",
    icon: <FaInfoCircle className="w-5 h-5 mr-2" />,
    dropdown: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const languages = [
  { code: "fr", label: "Français", flag: "/window.svg" },
  // Add more languages as needed
];

function Dropdown({ items }: { items: { label: string; href: string }[] }) {
  const pathname = usePathname();

  return (
    <motion.ul
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 mt-5 w-44 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl ring-1 ring-white/20 z-20"
    >
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block px-4 py-3 text-sm text-white hover:bg-white/10 transition-all duration-200 ${
                isActive ? "bg-white/10 border-l-2 border-purple-400" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </motion.ul>
  );
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full text-white bg-transparent my-2 md:py-[30px] absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="flex h-[52px] items-center justify-between relative">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <BrandLogo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-[30px] items-center border border-white/10 bg-white/4 rounded-xl px-[10px] py-[6px] shadow-inner backdrop-blur-sm text-white">
            {navLinks.map((link) => {
              const isActive = link.href ? pathname === link.href : false;
              const hasActiveChild = link.dropdown?.some(
                (item) => pathname === item.href
              );

              return (
                <div key={link.label} className="relative group">
                  {link.dropdown ? (
                    <>
                      <button
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                        className={`flex items-center px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium focus:outline-none text-white cursor-pointer ${
                          hasActiveChild
                            ? "bg-white/10 border border-white/40"
                            : ""
                        }`}
                      >
                        {link.label}
                        <FaChevronDown className="ml-1 text-xs" />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <div
                            onMouseEnter={() => setOpenDropdown(link.label)}
                            onMouseLeave={() => setOpenDropdown(null)}
                            className="absolute left-0 top-full z-50"
                          >
                            <Dropdown items={link.dropdown} />
                          </div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-[10px] py-[10px] rounded-lg hover:bg-white/10 transition-all duration-200 font-medium focus:outline-none cursor-pointer text-white ${
                        isActive
                          ? "bg-white/4 border border-white/40"
                          : "border border-transparent"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side (Desktop) */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center px-2 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 hover:border-white/40"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.22222 2.77783C1.63285 2.77783 1.06762 3.01196 0.650874 3.42871C0.234126 3.84545 0 4.41068 0 5.00005L0 15.0001C0 15.5894 0.234126 16.1547 0.650874 16.5714C1.06762 16.9882 1.63285 17.2223 2.22222 17.2223H6.66667V2.77783H2.22222Z"
                    fill="#D91023"
                  />
                  <path
                    d="M6.66699 2.77783H13.3337V17.2223H6.66699V2.77783Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M17.7775 2.77783H13.333V17.2223H17.7775C18.3668 17.2223 18.9321 16.9882 19.3488 16.5714C19.7655 16.1547 19.9997 15.5894 19.9997 15.0001V5.00005C19.9997 4.41068 19.7655 3.84545 19.3488 3.42871C18.9321 3.01196 18.3668 2.77783 17.7775 2.77783Z"
                    fill="#D91023"
                  />
                </svg>

                <FaChevronDown className="text-xs ml-1.5" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-32 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl ring-1 ring-white/20 z-50"
                  >
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button className="flex items-center w-full px-4 py-3 text-sm text-white hover:bg-white/10 transition-all duration-200">
                          <Image
                            src={lang.flag}
                            alt={lang.label}
                            className="w-4 h-4 mr-2"
                            width={1000}
                            height={1000}
                          />
                          {lang.label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            {/* Auth Buttons */}
            <Link
              href="/login"
              className="px-[16px] h-[52px] rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-200 flex items-center flex-row gap-[10px]"
            >
              Log In
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_14_1513)">
                  <path
                    d="M4 12L12 4"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 4H12V10"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14_1513">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link href="/signup">
              <SignUpButton />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="p-2 rounded-md border border-white/20 bg-white/5 hover:bg-white/10 focus:outline-none"
              aria-label="Open mobile menu"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Nav (hidden by default) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-50 flex justify-end"
          >
            {/* Glassmorphic overlay */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-[85vw] max-w-xs h-full bg-white/10 backdrop-blur-xl shadow-2x p-6 flex flex-col"
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 transition"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* Nav links */}
              <ul className="flex-1 space-y-2 mt-10">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.dropdown ? (
                      <details className="group">
                        <summary className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white/20 cursor-pointer text-white/90 text-lg">
                          <span className="flex items-center">
                            {link.icon}
                            {link.label}
                          </span>
                          <FaChevronDown className="ml-2 text-xs group-open:rotate-180 transition-transform" />
                        </summary>
                        <ul className="pl-8 mt-2 space-y-1">
                          {link.dropdown.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block px-2 py-2 rounded-lg hover:bg-white/10 text-white/80 text-base"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link
                        href={link.href}
                        className={`flex items-center px-3 py-3 rounded-xl hover:bg-white/20 transition text-white/90 text-lg ${
                          pathname === link.href
                            ? "bg-white/10 border border-white/10"
                            : ""
                        }`}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              {/* User Dropdown for Auth Buttons */}
              <div className="mt-8 border-t border-white/20 pt-4 flex flex-row gap-5 items-center justify-center">
                <Link
                  href="/login"
                  className="px-[16px] h-[52px] rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-200 flex items-center flex-row gap-[10px]"
                >
                  Log In
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_14_1513)">
                      <path
                        d="M4 12L12 4"
                        stroke="white"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 4H12V10"
                        stroke="white"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14_1513">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link href="/signup">
                  <SignUpButton />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
