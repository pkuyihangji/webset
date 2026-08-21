"use client";

import { useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CapacityKey, capacityProfiles, defaultCapacity, navData } from "@/lib/jemmaModel";

const chartColors: Record<CapacityKey, string> = {
  "10k": "#72d5c8",
  "33k": "#7ed9ad",
  "100k": "#98e58d",
  "333k": "#a9ef79",
  "1m": "#b7ff6a",
};

export default function Performance() {
  const [selected, setSelected] = useState<CapacityKey>(defaultCapacity);
  const profile = capacityProfiles.find((item) => item.key === selected) ?? capacityProfiles[4];

  return (
    <section id="performance" className="bg-[#080b0a] text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="section-kicker text-[#b7ff6a]">02 / Performance</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">One signal. Five liquidity constraints.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#929b95]">
            Normalized simple NAV, post-fee and post-funding. Select a per-symbol dollar cap to see how the model scales.
          </p>
        </div>

        <div className="mt-12 flex max-w-xl border border-white/15 p-1" role="group" aria-label="Dollar cap">
          {capacityProfiles.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setSelected(item.key)}
              className={`min-w-0 flex-1 px-2 py-2.5 text-xs font-semibold transition-colors ${selected === item.key ? "bg-[#b7ff6a] text-[#080b0a]" : "text-[#929b95] hover:text-white"}`}
            >
              {item.cap}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 border-y border-white/15 lg:grid-cols-6">
          {[
            ["Avg GMV", profile.gmv],
            ["Annual return", profile.annualReturn],
            ["Sharpe", profile.sharpe],
            ["Calmar", profile.calmar],
            ["Max drawdown", profile.maxDrawdown],
            ["Active symbols", profile.activeSymbols],
          ].map(([label, value], index) => (
            <div key={label} className={`py-5 ${index % 2 ? "pl-4" : "pr-4"} lg:border-l lg:border-white/15 lg:px-5 first:lg:border-l-0 first:lg:pl-0`}>
              <div className="text-xl font-semibold sm:text-2xl">{value}</div>
              <div className="mt-1 text-[11px] uppercase text-[#78827b]">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 h-[360px] w-full sm:h-[480px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={navData} margin={{ top: 12, right: 12, bottom: 0, left: -12 }}>
              <CartesianGrid stroke="#222824" strokeDasharray="2 8" vertical={false} />
              <XAxis dataKey="date" stroke="#5f6962" tick={{ fill: "#89928c", fontSize: 11 }} tickLine={false} axisLine={false} minTickGap={48} />
              <YAxis domain={[1, "auto"]} stroke="#5f6962" tick={{ fill: "#89928c", fontSize: 11 }} tickLine={false} axisLine={false} tickFormatter={(value) => `${Number(value).toFixed(1)}x`} />
              <Tooltip
                cursor={{ stroke: "#526058", strokeDasharray: "3 3" }}
                contentStyle={{ background: "#111512", border: "1px solid #354039", borderRadius: 0, color: "#fff" }}
                labelStyle={{ color: "#98a39b", marginBottom: 6 }}
                formatter={(value) => [`${Number(value).toFixed(3)}x`, "Normalized NAV"]}
              />
              <Area type="monotone" dataKey={selected} stroke={chartColors[selected]} strokeWidth={2.5} fill={chartColors[selected]} fillOpacity={0.08} dot={false} isAnimationActive={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div id="capacity" className="mt-16 overflow-x-auto border-t border-white/15">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="text-[11px] uppercase text-[#6f7972]">
                <th className="py-4 pr-4 font-medium">Single-name cap</th>
                <th className="px-4 py-4 font-medium">Average GMV</th>
                <th className="px-4 py-4 font-medium">Model AUM</th>
                <th className="px-4 py-4 font-medium">Annual return</th>
                <th className="px-4 py-4 font-medium">Sharpe</th>
                <th className="px-4 py-4 font-medium">Turnover</th>
              </tr>
            </thead>
            <tbody>
              {capacityProfiles.map((item) => (
                <tr
                  key={item.key}
                  onClick={() => setSelected(item.key)}
                  className={`cursor-pointer border-t border-white/10 text-sm transition-colors ${selected === item.key ? "bg-white/[0.06] text-white" : "text-[#a4ada7] hover:bg-white/[0.03]"}`}
                >
                  <td className="py-5 pr-4 font-semibold text-white">{item.cap}</td>
                  <td className="px-4 py-5">{item.gmv}</td>
                  <td className="px-4 py-5">{item.modelAum}</td>
                  <td className="px-4 py-5">{item.annualReturn}</td>
                  <td className="px-4 py-5">{item.sharpe}</td>
                  <td className="px-4 py-5">{item.turnover}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-3xl text-[11px] leading-5 text-[#68716b]">
          Source: Jemma Final V1 dollar-bound neutral backtest, 4h sleeve, 866 days from 01 Mar 2024 to 14 Jul 2026. Returns are simple, not compounded. Model AUM is the capital base implied by the report, not current firm assets under management.
        </p>
      </div>
    </section>
  );
}
