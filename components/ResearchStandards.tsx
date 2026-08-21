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
    <section id="edge" className="bg-[#dfe9ef] text-[#101923]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="section-kicker text-[#0f67a5]">03 / Scalability & capacity</p>
            <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-tight sm:text-5xl">Scale across assets, exchanges and strategy horizons.</h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#526170]">
              Less than 1% trading volume share on each asset, diversified across more than 200 assets, with capacity designed to grow as the market expands.
            </p>
          </div>
          <div className="grid gap-px border border-[#aebcc7] bg-[#aebcc7] sm:grid-cols-3">
            {capacities.map(([label, value], index) => (
              <div key={label} className={index === 0 ? "bg-[#101923] p-7 text-white" : "bg-[#f4f7fa] p-7"}>
                <p className={`text-4xl font-semibold ${index === 0 ? "text-[#58b6e7]" : ""}`}>{value}</p>
                <p className={`mt-3 text-xs font-semibold uppercase ${index === 0 ? "text-[#9cacba]" : "text-[#61707e]"}`}>{label} total capacity</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-px border border-[#aebcc7] bg-[#aebcc7] lg:grid-cols-2">
          <ControlList title="Risk management" items={riskControls} />
          <ControlList title="Execution & infrastructure" items={execution} />
        </div>

        <div className="mt-16 grid gap-8 border-t border-[#aebcc7] pt-9 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="section-kicker text-[#0f67a5]">Alpha & diversification</p>
            <p className="mt-3 text-sm leading-7 text-[#526170]">Independent alpha streams reduce reliance on individual assets and market beta.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {diversification.map((item) => (
              <p key={item} className="border-l-2 border-[#00a777] pl-4 text-sm font-semibold leading-6">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ControlList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="bg-[#f4f7fa] p-7 sm:p-9">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <ul className="mt-7 grid gap-0 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="border-t border-[#c6d1da] py-4 pr-5 text-sm leading-6 text-[#526170]">{item}</li>
        ))}
      </ul>
    </article>
  );
}
