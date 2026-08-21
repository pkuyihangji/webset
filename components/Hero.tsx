const stats = [
  { label: "APR", value: ">120%", code: "RET" },
  { label: "Sharpe", value: ">5", code: "SR" },
  { label: "Max drawdown", value: "-9.32%", code: "MDD" },
  { label: "All-exchange capacity", value: ">$20M", code: "CAP" },
];

const signalCells = Array.from({ length: 60 }, (_, index) => ({
  active: (index * 7 + 3) % 13 < 5,
  strong: (index * 11 + 1) % 17 < 3,
  delay: `${(index % 10) * 35}ms`,
}));

export default function Hero() {
  return (
    <section id="overview" className="relative min-h-[92svh] overflow-hidden bg-[#f3f5f2] pt-18 text-black">
      <div className="pointer-events-none absolute inset-y-0 left-[7%] w-px bg-black/[0.055]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-[7%] w-px bg-black/[0.055]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[7%] top-18 hidden h-[54%] w-[42%] grid-cols-10 grid-rows-6 border-l border-black/10 lg:grid" aria-hidden="true">
        {signalCells.map((cell, index) => (
          <span
            key={index}
            className={`signal-cell border-b border-r border-black/[0.07] ${cell.strong ? "bg-[#315efb]" : cell.active ? "bg-[#d7ff43]" : "bg-transparent"}`}
            style={{ animationDelay: cell.delay, opacity: cell.strong ? 0.9 : cell.active ? 0.7 : 1 }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(92svh-4.5rem)] max-w-[1440px] flex-col px-5 sm:px-8 lg:px-12">
        <div className="flex flex-1 flex-col justify-center py-7 sm:py-14 lg:max-w-[69%] lg:py-20">
          <div className="mono mb-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-bold uppercase sm:mb-7">
            <span className="bg-[#d7ff43] px-2 py-1">High Frequency Alpha Long Short</span>
            <span className="text-[#69716d]">External presentation / Aug 2026</span>
          </div>
          <h1 className="max-w-5xl text-6xl font-black leading-[0.88] text-black sm:text-7xl lg:text-8xl xl:text-[7.5rem]">
            Positive<br />Research
          </h1>
          <div className="mt-6 grid max-w-4xl gap-5 border-t border-black/20 pt-5 sm:mt-9 sm:grid-cols-[1.2fr_0.8fr] sm:gap-7 sm:pt-7">
            <p className="max-w-2xl text-lg font-medium leading-7 sm:text-2xl sm:leading-9">
              AI-driven quantitative crypto trading. Market-neutral, scalable and systematic alpha.
            </p>
            <div className="mono space-y-2 text-[10px] font-bold uppercase text-[#59615d] sm:border-l sm:border-black/15 sm:pl-6">
              <p>Live trading since 14 Jun 2025</p>
              <p>Stable across market regimes</p>
              <p>200-300 crypto perpetuals</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 sm:mt-8">
            <a href="#performance" className="bg-black px-5 py-3 text-xs font-bold uppercase text-white transition-colors hover:bg-[#315efb]">Performance</a>
            <a href="#strategy" className="border border-black/30 px-5 py-3 text-xs font-bold uppercase text-black transition-colors hover:border-black">Strategy</a>
          </div>
        </div>

        <div className="border-t border-black/20 bg-black text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`min-w-0 p-3 sm:p-6 ${index % 2 ? "border-l border-white/15" : ""} ${index > 1 ? "border-t border-white/15 lg:border-t-0" : ""} ${index > 0 ? "lg:border-l lg:border-white/15" : ""}`}>
                <div className="mono flex items-center justify-between text-[9px] uppercase text-[#89938e]"><span>{stat.label}</span><span>{stat.code}</span></div>
                <div className="mt-3 text-3xl font-bold text-[#d7ff43] sm:text-4xl">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
