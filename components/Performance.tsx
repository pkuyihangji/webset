"use client";

import Image from "next/image";
import { useState } from "react";
import { PerformanceKey, performanceViews, strategies } from "@/lib/publicDeck";

export default function Performance() {
  const [selected, setSelected] = useState<PerformanceKey>("hft");
  const view = performanceViews.find((item) => item.key === selected) ?? performanceViews[0];

  return (
    <section id="performance" className="bg-[#07111a] text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="section-kicker text-[#58b6e7]">02 / Performance</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">Three profiles for different return and capacity objectives.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#9cacba]">
            HFT, mid-frequency and lower-volatility implementations are designed to remain stable across market regimes.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-white/15 bg-white/15 lg:grid-cols-3">
          {strategies.map((strategy) => (
            <article key={strategy.key} className="bg-[#0b1823] p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{strategy.name}</h3>
                <span className="text-xs font-semibold uppercase text-[#58b6e7]">{strategy.key === "low-vol" ? "Low Vol" : strategy.key.toUpperCase()}</span>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3 border-y border-white/10 py-5">
                <div><p className="text-xl font-semibold">{strategy.apr}</p><p className="mt-1 text-[10px] uppercase text-[#8193a2]">APR</p></div>
                <div><p className="text-xl font-semibold">{strategy.sharpe}</p><p className="mt-1 text-[10px] uppercase text-[#8193a2]">Sharpe</p></div>
                <div><p className="text-xl font-semibold">{strategy.drawdown}</p><p className="mt-1 text-[10px] uppercase text-[#8193a2]">Max DD</p></div>
              </div>
              <dl className="mt-5 space-y-3 text-xs">
                <div className="flex justify-between gap-4"><dt className="text-[#8193a2]">Average daily turnover</dt><dd className="font-semibold">{strategy.turnover}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-[#8193a2]">Binance capacity</dt><dd className="font-semibold">{strategy.binanceCapacity}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-[#8193a2]">All-exchange capacity</dt><dd className="font-semibold text-[#58b6e7]">{strategy.totalCapacity}</dd></div>
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-16 flex max-w-2xl border border-white/15 p-1" role="group" aria-label="Performance view">
          {performanceViews.map((item) => (
            <button
              key={item.key}
              type="button"
              aria-pressed={selected === item.key}
              onClick={() => setSelected(item.key)}
              className={`min-w-0 flex-1 px-2 py-2.5 text-xs font-semibold transition-colors ${selected === item.key ? "bg-[#58b6e7] text-[#07111a]" : "text-[#93a4b2] hover:text-white"}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <figure className="mt-6 border border-white/15 bg-[#f3f6fa] p-2 sm:p-4">
          <div className="relative aspect-[1.51/1] w-full overflow-hidden">
            <Image
              key={view.image}
              src={view.image}
              alt={`${view.title} performance chart and metrics`}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1180px"
            />
          </div>
          <figcaption className="px-2 pb-2 pt-3 text-[11px] leading-5 text-[#526170] sm:px-3">
            {view.title}. Performance information as presented in the Positive Research external presentation, August 2026.
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-6 border-t border-white/15 pt-7 text-sm leading-7 text-[#9cacba] sm:grid-cols-3">
          <p><span className="block text-xs font-semibold uppercase text-white">Market regimes</span>Stable across market regimes.</p>
          <p><span className="block text-xs font-semibold uppercase text-white">Live trading</span>Live trading since 14 June 2025.</p>
          <p><span className="block text-xs font-semibold uppercase text-white">Execution cost</span>2.4 bps one-way in the presented performance.</p>
        </div>
      </div>
    </section>
  );
}
