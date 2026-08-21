import { performanceColumns, performanceRows } from "@/lib/publicDeck";

export default function Performance() {
  return (
    <section id="performance" className="bg-[#07111a] text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="section-kicker text-[#58b6e7]">02 / Performance</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">Four public performance profiles, side by side.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#9cacba]">
            HFT, leveraged HFT, mid-frequency and lower-volatility implementations across return, risk, turnover and capacity.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto border-y border-white/15">
          <table className="w-full min-w-[980px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/15">
                <th className="sticky left-0 z-10 w-56 bg-[#07111a] py-5 pr-6 text-[11px] font-semibold uppercase text-[#718391]">Metric</th>
                {performanceColumns.map((column) => (
                  <th key={column.key} className="min-w-44 border-l border-white/10 px-5 py-5 align-bottom">
                    <span className="block text-xs font-semibold uppercase text-[#58b6e7]">{column.label}</span>
                    <span className="mt-2 block text-sm font-semibold text-white">{column.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {performanceRows.map((row) => (
                <tr key={row.key} className="border-b border-white/10 last:border-b-0">
                  <th className="sticky left-0 z-10 bg-[#07111a] py-4 pr-6 text-xs font-medium text-[#91a2b0]">{row.label}</th>
                  {performanceColumns.map((column) => (
                    <td key={column.key} className={`border-l border-white/10 px-5 py-4 text-sm font-semibold ${row.key === "annualizedReturn" || row.key === "maxDrawdown" ? "text-[#58b6e7]" : "text-white"}`}>
                      {column.values[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-5 text-[11px] leading-5 text-[#7f909e] lg:grid-cols-2">
          <p>
            Period: 1 Mar 2024 to 14 Jul 2026. Simple NAV includes execution cost and funding. Execution cost is 2.4 bps one-way.
          </p>
          <p>
            365-day annualization; returns use period-average GMV. YTD covers 1 Jan 2026 through the sample end.
          </p>
        </div>

        <div className="mt-10 grid gap-6 border-t border-white/15 pt-7 text-sm leading-7 text-[#9cacba] sm:grid-cols-2">
          <p><span className="block text-xs font-semibold uppercase text-white">Market regimes</span>Stable across market regimes.</p>
          <p><span className="block text-xs font-semibold uppercase text-white">Live trading</span>Live trading since 14 June 2025.</p>
        </div>
      </div>
    </section>
  );
}
