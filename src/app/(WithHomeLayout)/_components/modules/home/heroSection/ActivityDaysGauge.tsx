"use client";
import React, { useState, useMemo } from "react";
import { BiChevronDown } from "react-icons/bi";

interface GaugeProps {
  totalDays?: number; // whole span
  daysLeft?: number; // remaining
  title?: string;
}

const ActivityDaysGauge: React.FC<GaugeProps> = ({
  totalDays = 24,
  daysLeft = 14,
  title = "Activity Days",
}) => {
  const [open, setOpen] = useState(false);

  /* ───────────────────────── gauge maths ───────────────────────── */
  const stroke = 50; // thickness of the donut
  const size = 200; // full SVG box (width)
  const r = (size - stroke) / 2; // radius of the “centre-line” of the stroke
  const c = Math.PI * r; // length of the semi-circle path
  const pct = (totalDays - daysLeft) / totalDays;
  const dash = c - c * pct; // dash-offset for progress arc

  // end-cap (slim needle) points – one at inner edge, one at outer edge
  const angle = Math.PI - Math.PI * pct; // radians (π → 0)
  const cx = size / 2;
  const cy = size / 2;
  const inner = r - stroke / 2;
  const outer = r + stroke / 2;
  const needle = useMemo(
    () => ({
      x1: cx + inner * Math.cos(angle),
      y1: cy - inner * Math.sin(angle),
      x2: cx + outer * Math.cos(angle),
      y2: cy - outer * Math.sin(angle),
    }),
    [angle, cx, cy, inner, outer]
  );

  /* ───────────────────────── component ─────────────────────────── */
  return (
    <div className="w-full max-w-xs mx-auto text-white">
      <div className="relative rounded-2xl px-3 py-4 bg-[#1d1d1e] border border-white/10 overflow-hidden">
        {/* header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-normal">{title}</h2>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-md bg-black/40 hover:bg-black/50 border border-white/15 text-gray-400/70 text-[11px]"
          >
            Day
            <BiChevronDown
              className={`w-3 h-3 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* gauge */}
        <div className="relative flex justify-center">
          <svg
            width={size}
            height={size / 2}
            viewBox={`0 0 ${size} ${size / 2}`}
          >
            {/* grey track */}
            <path
              d={`M ${stroke / 2} ${cy} A ${r} ${r} 0 0 1 ${
                size - stroke / 2
              } ${cy}`}
              fill="none"
              stroke="#33353b"
              strokeWidth={stroke}
            />

            {/* progress arc */}
            <defs>
              <linearGradient id="grad" x1="10%" y1="100%" x2="90%" y2="0%">
                <stop offset="0%" stopColor="#5C35EE" />
                <stop offset="100%" stopColor="#644490" />
              </linearGradient>
            </defs>
            <path
              d={`M ${stroke / 2} ${cy} A ${r} ${r} 0 0 1 ${
                size - stroke / 2
              } ${cy}`}
              fill="none"
              stroke="url(#grad)"
              strokeWidth={stroke}
              strokeDasharray={c}
              strokeDashoffset={dash}
              className="transition-[stroke-dashoffset] duration-700 ease-out"
            />

            {/* slim needle */}
            <line
              {...needle}
              stroke="#8b5cf6"
              strokeWidth={3}
              strokeLinecap="round"
            />
          </svg>

          {/* main label */}
          <span className="absolute top-1/2 -translate-y-1/2 text-lg font-medium mt-10">
            {totalDays} Days
          </span>

          {/* 2nd dropdown (over the arc) */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="absolute -right-4 top-1/3 flex items-center gap-1 bg-black/40 hover:bg-black/50 text-xs px-3 py-1.5 rounded-md border border-white/15 text-gray-400/70 text-[11px] mr-4"
          >
            Day
            <BiChevronDown
              className={`w-3 h-3 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* legend */}
        <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6]" />
            <span className="text-gray-400 text-xs">How many days left</span>
          </div>
          <span className="font-medium text-[13px]">{daysLeft} Days</span>
        </div>

        {/* dropdown menu */}
        {open && (
          <div className="absolute top-14 right-5 z-30 w-24 bg-[#252528] border border-white/10 rounded-lg shadow-lg text-xs overflow-hidden">
            {["Day", "Week", "Month"].map((opt) => (
              <div
                key={opt}
                className="px-3 py-2 hover:bg-white/10 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {opt}
              </div>
            ))}
          </div>
        )}

        {/* subtle purple bloom */}
        <div className="pointer-events-none absolute inset-0 -z-10 before:absolute before:inset-0 before:rounded-2xl before:bg-purple-500/10 before:blur-[120px]" />
      </div>
    </div>
  );
};

export default ActivityDaysGauge;
