const riskControls = [
  "Portfolio optimisation with MOSEK Fusion",
  "Private risk factors (Crypto Barra)",
  "Market-neutral beta exposures",
  "Maximum 5% per asset",
  "Liquidity constraints",
  "Controlled drawdowns",
];

const execution = [
  "Low-latency system",
  "Co-located servers",
  "Smart execution algorithms",
  "Minimal slippage",
  "Market maker rebates",
  "Low commission fees with high-level VIP accounts",
];

const capacities = [["HFT", ">$20M"], ["MFT", ">$40M"], ["Low Vol MFT", ">$120M"]];

const diversification = [
  "Even profit distribution",
  "Low BTC/ETH correlation",
  "Independent alpha streams",
  "Strong diversification",
];

export default function ResearchStandards() {
  return (
    <section id="edge" className="bg-[#090b0a] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-white/40 pt-6 lg:grid-cols-[0.28fr_0.72fr]">
          <div>
            <p className="section-kicker text-[#d7ff43]">03 / Scale & control</p>
          </div>
          <div>
            <h2 className="max-w-4xl text-4xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Scale is engineered into the portfolio.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#a7b0ab]">
              Less than 1% trading volume share on each asset, diversified across more than 200 assets, with capacity designed to grow as the market expands.
            </p>
          </div>
        </div>

        <div className="mt-20 grid border-y border-white/25 sm:grid-cols-3">
          {capacities.map(([label, value], index) => (
            <div key={label} className={`py-8 sm:px-8 lg:py-11 ${index > 0 ? "border-t border-white/20 sm:border-l sm:border-t-0" : ""} ${index === 0 ? "sm:pl-0" : ""}`}>
              <p className="text-5xl font-black text-[#d7ff43] sm:text-6xl">{value}</p>
              <p className="mono mt-4 text-[10px] font-bold uppercase text-[#929c97]">{label} / Total capacity</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <ControlList code="RISK / 01" title="Risk management" items={riskControls} />
          <ControlList code="EXEC / 02" title="Execution & infrastructure" items={execution} />
        </div>

        <div className="mt-24 grid bg-[#315efb] text-white lg:grid-cols-[0.35fr_0.65fr]">
          <div className="border-b border-white/25 p-7 lg:border-b-0 lg:border-r lg:p-10">
            <p className="section-kicker text-[#d7ff43]">Alpha & diversification</p>
            <p className="mt-7 text-2xl font-bold leading-8">Independent alpha streams. Limited asset and beta dependence.</p>
          </div>
          <div className="grid grid-cols-2">
            {diversification.map((item, index) => (
              <p key={item} className={`flex min-h-28 items-end p-6 text-sm font-bold sm:min-h-36 sm:p-8 ${index % 2 ? "border-l border-white/25" : ""} ${index > 1 ? "border-t border-white/25" : ""}`}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ControlList({ code, title, items }: { code: string; title: string; items: string[] }) {
  return (
    <article>
      <p className="mono text-[10px] font-bold uppercase text-[#d7ff43]">{code}</p>
      <h3 className="mt-4 text-3xl font-bold">{title}</h3>
      <ol className="mt-8 border-t border-white/25">
        {items.map((item, index) => (
          <li key={item} className="grid grid-cols-[2.5rem_1fr] border-b border-white/15 py-4 text-sm leading-6">
            <span className="mono text-[9px] font-bold text-[#707b75]">{String(index + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}
