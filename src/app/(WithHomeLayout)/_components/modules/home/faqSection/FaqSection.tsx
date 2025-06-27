"use client";

import React, { useState } from "react";
import SectionHeader from "../../../ui/SectionHeader";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";

const faqs = [
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all purchases. If you're not satisfied, contact our support team for a full refund.",
  },
  {
    question: "How do I change my password?",
    answer:
      "Go to your account settings, click on 'Change Password', and follow the instructions.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your dashboard.",
  },
  {
    question: "Is my data secure?",
    answer:
      "We use industry-standard encryption and security practices to keep your data safe.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, our support team is available 24/7 via chat and email.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription from your account dashboard. Your access will remain until the end of your billing cycle.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-5 flex flex-col md:flex-row items-start justify-between gap-10 mt-20 md:mt-28">
      <div className="w-full md:w-1/3">
        <SectionHeader
          align="left"
          icon={<FaRegQuestionCircle />}
          subtitle="FAQs"
          title="Frequently Asked Questions?"
          className="mb-0 md:mb-0"
          marginTop="-mt-[160px]"
        />
      </div>
      {/* Faq */}
      <div className="w-full md:w-1/2 max-h-[400px]">
        {faqs.map((faq, idx) => (
          <div key={idx} className="w-full">
            <button
              className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
              onClick={() => handleToggle(idx)}
              type="button"
            >
              <span className="text-white text-base md:text-[16px] font-medium tracking-wide">
                {faq.question}
              </span>
              <span className="ml-4 text-white/80 text-xl flex items-center justify-center">
                {openIndex === idx ? <FiMinus /> : <FiPlus />}
              </span>
            </button>
            <div className="border-b border-white/10 w-full" />
            <div
              id={`faq-answer-${idx}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx
                  ? "max-h-40 opacity-100 py-3"
                  : "max-h-0 opacity-0 py-0"
              }`}
            >
              <div className="text-white/70 text-sm md:text-base pl-1 pr-8">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
