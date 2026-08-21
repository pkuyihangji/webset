import { performanceColumns, performanceRows } from "@/lib/publicDeck";

export default function Performance() {
  return (
    <section id="performance" className="bg-[#f3f5f2] text-black">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black pt-6 lg:grid-cols-[0.28fr_0.72fr]">
          <div>
            <p className="section-kicker">02 / Performance</p>
            <div className="mono mt-8 space-y-2 text-[10px] font-bold uppercase text-[#626a66]">
              <p>{String(performanceColumns.length).padStart(2, "0")} profiles</p>
              <p>{String(performanceRows.length).padStart(2, "0")} metrics</p>
              <p>2024.03 - 2026.07</p>
            </div>
          </div>
          <div>
            <h2 className="max-w-4xl text-4xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Public performance, made directly comparable.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#535b57]">
              Four implementations across return, risk, turnover and capacity, using the published August 2026 presentation metrics.
            </p>
          </div>
        </div>

        <div className="mt-20 overflow-x-auto border-b border-black">
          <table className="w-full min-w-[1120px] border-collapse text-left">
            <thead>
              <tr className="bg-black text-white">
                <th className="mono sticky left-0 z-20 w-64 bg-black px-5 py-6 text-[10px] font-bold uppercase text-[#9ea7a2]">Metric / Profile</th>
                {performanceColumns.map((column, index) => (
                  <th key={column.key} className="min-w-48 border-l border-white/20 px-5 py-6 align-top">
                    <span className="mono block text-[9px] font-bold text-[#d7ff43]">0{index + 1} / {column.label}</span>
                    <span className="mt-3 block text-sm font-bold text-white">{column.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {performanceRows.map((row, rowIndex) => {
                const returnRow = row.key === "annualizedReturn";
                const riskRow = row.key === "maxDrawdown";
                const rowTone = returnRow ? "bg-[#d7ff43] text-black" : riskRow ? "bg-[#dce6ff] text-black" : "text-black";
                const stickyTone = returnRow ? "bg-[#d7ff43]" : riskRow ? "bg-[#dce6ff]" : "bg-[#f3f5f2]";

                return (
                  <tr key={row.key} className={`border-t border-black/15 ${rowTone}`}>
                    <th className={`sticky left-0 z-10 px-5 py-4 ${stickyTone}`}>
                      <span className="mono mr-4 text-[9px] font-bold text-[#747c78]">{String(rowIndex + 1).padStart(2, "0")}</span>
                      <span className="text-xs font-bold">{row.label}</span>
                    </th>
                    {performanceColumns.map((column) => (
                      <td key={column.key} className="mono border-l border-black/15 px-5 py-4 text-xs font-bold">
                        {column.values[row.key]}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mono mt-7 grid gap-4 text-[9px] font-bold uppercase leading-5 text-[#68706c] lg:grid-cols-2">
          <p>Period: 1 Mar 2024 to 14 Jul 2026. Simple NAV includes execution cost and funding. Execution cost: 2.4 bps one-way.</p>
          <p>365-day annualization. Returns use period-average GMV. YTD covers 1 Jan 2026 through the sample end.</p>
        </div>

        <div className="mt-16 grid border-y border-black sm:grid-cols-2">
          <div className="py-6 sm:pr-8">
            <p className="section-kicker text-[#315efb]">Market regimes</p>
            <p className="mt-3 text-xl font-bold">Stable across market regimes.</p>
          </div>
          <div className="border-t border-black py-6 sm:border-l sm:border-t-0 sm:pl-8">
            <p className="section-kicker text-[#315efb]">Live trading</p>
            <p className="mt-3 text-xl font-bold">Since 14 June 2025.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
