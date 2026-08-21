const stats = [
  { label: "APR", value: ">120%" },
  { label: "Sharpe", value: ">5" },
  { label: "Max drawdown", value: "-9.32%" },
  { label: "All-exchange capacity", value: ">$20M" },
];

export default function Hero() {
  return (
    <section id="overview" className="relative min-h-[92svh] overflow-hidden bg-[#07111a] pt-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-y-0 left-[12%] w-px bg-white/[0.04]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-white/[0.04]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-[12%] w-px bg-white/[0.04]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-[38%] h-px bg-white/[0.04]" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[calc(92svh-5rem)] max-w-7xl flex-col justify-between px-5 pb-7 sm:min-h-[calc(92svh-6rem)] sm:px-8 sm:pb-9 lg:px-12">
        <div className="max-w-4xl pt-7 sm:pt-20">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase text-[#58b6e7] sm:mb-7">
            <span className="border border-[#58b6e7]/50 px-3 py-1.5">High Frequency Alpha Long Short</span>
            <span className="text-[#9aabb9]">August 2026</span>
          </div>
          <h1 className="max-w-3xl text-6xl font-semibold leading-[0.94] text-white sm:text-7xl lg:text-8xl">
            Positive<br />Research
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#bdc8d1] sm:mt-7 sm:text-xl">
            AI-driven quantitative crypto trading. Market-neutral, scalable and systematic alpha.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
            <a href="#performance" className="bg-[#58b6e7] px-5 py-3 text-center text-sm font-semibold text-[#07111a] transition-colors hover:bg-white">
              View performance
            </a>
            <a href="#strategy" className="border border-white/30 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-white">
              Strategy overview
            </a>
          </div>
          <div className="mt-6 flex flex-col gap-2 text-[11px] text-[#9aabb9] sm:mt-8 sm:flex-row sm:items-center sm:gap-6 sm:text-xs">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#58b6e7]" />Live trading since 14 Jun 2025</span>
            <span>Stable across market regimes</span>
          </div>
        </div>

        <div>
          <div className="mt-8 border-y border-white/15 bg-[#07111a] sm:mt-14">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`min-w-0 py-3 pr-3 sm:py-5 ${index % 2 ? "pl-3" : ""} ${index > 0 ? "lg:border-l lg:border-white/15 lg:pl-6" : ""}`}>
                  <div className="text-2xl font-semibold text-white sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-[10px] uppercase leading-4 text-[#8fa0ae] sm:text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-[10px] leading-4 text-[#718391] sm:mt-4 sm:text-[11px] sm:leading-5">
            HFT performance snapshot from the Positive Research external presentation, August 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
