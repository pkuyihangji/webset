"use client";

import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { navData } from "@/lib/jemmaModel";

const stats = [
  { label: "Annual return", value: "129.8%" },
  { label: "Sharpe", value: "5.84" },
  { label: "Max drawdown", value: "10.35%" },
  { label: "Average GMV", value: "$49.91M" },
];

export default function Hero() {
  return (
    <section id="overview" className="relative min-h-[88svh] overflow-hidden bg-[#080b0a] pt-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-20 opacity-30" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={navData} margin={{ top: 40, right: 0, bottom: 0, left: 0 }}>
            <CartesianGrid stroke="#29302b" strokeDasharray="2 8" vertical={false} />
            <XAxis dataKey="date" hide />
            <YAxis domain={[1, 4.4]} hide />
            <Line type="monotone" dataKey="1m" stroke="#b7ff6a" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(88svh-5rem)] max-w-7xl flex-col justify-between px-5 pb-6 sm:min-h-[calc(88svh-6rem)] sm:px-8 sm:pb-8 lg:px-12">
        <div className="max-w-4xl pt-0 sm:pt-20">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase text-[#b7ff6a] sm:mb-7">
            <span className="border border-[#b7ff6a]/40 px-3 py-1.5">High frequency alpha long short</span>
            <span className="text-[#8d9790]">Jemma V1 / Aug 2026</span>
          </div>
          <h1 className="max-w-3xl text-6xl font-semibold leading-[0.92] text-white sm:text-7xl lg:text-8xl">
            Positive<br />Research
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#b7beb9] sm:mt-7 sm:text-xl">
            AI-driven, market-neutral crypto trading designed to turn cross-sectional forecasts into scalable systematic alpha.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-9 sm:flex sm:flex-wrap sm:gap-3">
            <a href="#performance" className="bg-[#b7ff6a] px-2 py-3 text-center text-xs font-semibold text-[#080b0a] transition-colors hover:bg-white sm:px-5 sm:text-sm">
              Explore the model
            </a>
            <a href="#contact" className="border border-white/30 px-2 py-3 text-center text-xs font-semibold text-white transition-colors hover:border-white sm:px-5 sm:text-sm">
              Discuss capacity
            </a>
          </div>
          <div className="mt-5 flex flex-col gap-2 text-[11px] text-[#9ca69f] sm:mt-8 sm:flex-row sm:items-center sm:gap-6 sm:text-xs">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#b7ff6a]" />Live trading since 14 Jun 2025</span>
            <span>Investor-available capacity: &gt;$10M Binance / &gt;$20M all exchanges</span>
          </div>
        </div>

        <div className="mt-8 border-y border-white/15 bg-[#080b0a]/80 sm:mt-14">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`py-3 pr-4 sm:py-5 ${index % 2 ? "pl-4" : ""} ${index > 0 ? "lg:border-l lg:border-white/15 lg:pl-6" : ""}`}>
                <div className="text-2xl font-semibold text-white sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs uppercase text-[#8d9790]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-[10px] leading-4 text-[#707a73] sm:mt-4 sm:text-[11px] sm:leading-5">
          Jemma V1, 4h sleeve, $1M single-name cap. Backtest from Mar 2024 to Jul 2026, net of modeled fees and funding. Past performance is not indicative of future results.
        </p>
      </div>
    </section>
  );
}
