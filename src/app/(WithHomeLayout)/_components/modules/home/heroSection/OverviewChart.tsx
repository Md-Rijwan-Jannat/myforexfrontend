import React from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";

interface ChartDataPoint {
  month: string;
  equity: number;
  balance: number;
}

interface OverviewChartProps {
  data?: ChartDataPoint[];
  title?: string;
  className?: string;
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: {
    color: string;
    dataKey: string;
    value: number;
  }[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1d1d1e] backdrop-blur-sm border border-white/10 rounded-lg p-3 shadow-xl">
        <p className="text-gray-300 text-sm font-medium mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-400/80 text-[10px]">
              {entry.dataKey === "equity" ? "Earnings" : "Balance"} • $
              {entry.value?.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const OverviewChart: React.FC<OverviewChartProps> = ({
  data = [
    { month: "Jan", equity: 25000, balance: 20000 },
    { month: "Feb", equity: 30000, balance: 25000 },
    { month: "Mar", equity: 45000, balance: 40000 },
    { month: "Apr", equity: 35000, balance: 30000 },
    { month: "May", equity: 40000, balance: 35000 },
    { month: "Jun", equity: 38000, balance: 33000 },
    { month: "Jul", equity: 42000, balance: 37000 },
    { month: "Aug", equity: 48000, balance: 43000 },
    { month: "Sep", equity: 35000, balance: 30000 },
    { month: "Oct", equity: 32000, balance: 28000 },
    { month: "Nov", equity: 30000, balance: 26000 },
    { month: "Dec", equity: 28000, balance: 24000 },
  ],
  title = "Account Overview",
  className = "",
}) => {
  return (
    <div
      className={`w-full bg-[#1d1d1e] border border-white/5 rounded-xl p-6 ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h3 className="text-[12px] tracking-wide font-medium text-white">
          {title}
        </h3>
        <div className="flex flex-warp items-center space-x-2 mt-2 md:mt-0">
          <div className="flex flex-row items-center gap-1">
            <div className="size-2 rounded-full bg-gradient-to-r from-[#5C35EE] to-[#644490] mb-[1px]"></div>
            <span className="text-[6px] text-white/50">Balance</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="size-2 rounded-full border border-indigo-500 mb-[1px]"></div>
            <span className="text-[6px] text-white/50">Earning</span>
          </div>
          <div className="flex rounded-lg gap-1.5">
            {["Day", "Week", "Month", "Year"].map((mode, index) => (
              <button
                key={mode}
                className={`px-2.5 py-1 flex items-center gap-2 rounded bg-white/10 text-white/50 text-[8px] font-normal transition-colors ${
                  index === 0 && "bg-gradient-to-r from-[#5C35EE] to-[#644490]"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-[200px] relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400 pr-4 z-10">
          {["50k", "40k", "30k", "20k", "10k"].map((label, index) => (
            <span key={index} className="transform -translate-y-1/2">
              {label}
            </span>
          ))}
        </div>

        {/* Chart Container */}
        <div className="ml-8 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                {/* Gradient for Balance area fill */}
                <linearGradient
                  id="balanceAreaGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.01} />
                </linearGradient>

                {/* Gradient for Equity area fill */}
                <linearGradient
                  id="equityAreaGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#a855f7" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity={0.01} />
                </linearGradient>

                {/* Shadow filters */}
                <filter id="balanceShadow">
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="3"
                    floodColor="#06b6d4"
                    floodOpacity="0.5"
                  />
                </filter>

                <filter id="equityShadow">
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="3"
                    floodColor="#a855f7"
                    floodOpacity="0.5"
                  />
                </filter>
              </defs>

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9ca3af" }}
                dy={10}
              />

              <YAxis hide />

              <Tooltip content={<CustomTooltip />} />

              {/* Balance Area with gradient fill */}
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#06b6d4"
                strokeWidth={4}
                fill="url(#balanceAreaGradient)"
                filter="url(#balanceShadow)"
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#ffffff",
                  stroke: "#06b6d4",
                  strokeWidth: 4,
                  filter: "drop-shadow(0 0 8px #06b6d4)",
                }}
              />

              {/* Equity Area with gradient fill */}
              <Area
                type="monotone"
                dataKey="equity"
                stroke="#a855f7"
                strokeWidth={4}
                fill="url(#equityAreaGradient)"
                filter="url(#equityShadow)"
                dot={false}
                activeDot={{
                  r: 6,
                  fill: "#ffffff",
                  stroke: "#a855f7",
                  strokeWidth: 4,
                  filter: "drop-shadow(0 0 8px #a855f7)",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OverviewChart;
