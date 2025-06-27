"use client";

import React, { useState } from "react";
import SectionHeader from "../../../ui/SectionHeader";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence, Variants } from "framer-motion";

/* ----------  sample Q&A  ---------- */
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

/* ----------  motion variants  ---------- */
const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const answerVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) =>
    setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-5 flex flex-col md:flex-row items-start justify-between gap-10 pt-10 md:pt-[150px]">
      {/* ----------  heading block  ---------- */}
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

      {/* ----------  animated QA list  ---------- */}
      <motion.div
        className="w-full md:w-1/2 h-[400px]"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {faqs.map((faq, idx) => (
          <motion.div key={idx} className="w-full" variants={itemVariants}>
            {/* toggle button */}
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

              {/* plus ↔ minus icon with a snappy rotate */}
              <motion.span
                className="ml-4 text-white/80 text-xl flex items-center justify-center"
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === idx ? <FiMinus /> : <FiPlus />}
              </motion.span>
            </button>

            {/* divider */}
            <div className="border-b border-white/10 w-full" />

            {/* answer */}
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  id={`faq-answer-${idx}`}
                  key="content"
                  className="overflow-hidden pl-1 pr-8"
                  variants={answerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="text-white/70 text-sm md:text-base py-3">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
