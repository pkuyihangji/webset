import { reportFacts } from "@/lib/jemmaModel";

const assumptions = [
  { label: "Signal horizon", value: reportFacts.target, note: "Cross-sectional forecast" },
  { label: "Portfolio clock", value: `${reportFacts.sleeve} sleeves`, note: reportFacts.lag },
  { label: "Execution", value: reportFacts.execution, note: "Modeled at rebalance" },
  { label: "Trading cost", value: reportFacts.fee, note: "Funding included separately" },
  { label: "Liquidity limit", value: reportFacts.volumeLimit, note: "Per symbol" },
  { label: "Return accounting", value: "Simple NAV", note: "No compounding" },
];

const operatingEdge = [
  {
    title: "Portfolio risk",
    text: "MOSEK Fusion optimization, proprietary crypto risk factors and explicit beta controls shape the final book.",
  },
  {
    title: "Execution",
    text: "Low-latency, co-located infrastructure and smart execution algorithms target minimal slippage and efficient fee tiers.",
  },
  {
    title: "Diversification",
    text: "Capital is distributed across 200+ assets with low BTC and ETH dependence and no single-asset thesis.",
  },
];

export default function ResearchStandards() {
  return (
    <section id="research" className="bg-[#dfe6df] text-[#111512]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="section-kicker text-[#39756a]">03 / Research standard</p>
            <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-tight sm:text-5xl">Capacity is part of the model, not a footnote.</h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#536057]">
              Each rebalance fills the strongest eligible longs and shorts only after liquidity limits are applied. Both sides are matched to the smaller available budget, keeping the book dollar-neutral as capacity changes.
            </p>
          </div>

          <div className="border-t border-[#9fa9a1]">
            {assumptions.map((item) => (
              <div key={item.label} className="grid grid-cols-[1fr_auto] gap-6 border-b border-[#b4bdb5] py-5 sm:grid-cols-[1fr_1fr_1fr]">
                <span className="text-xs font-semibold uppercase text-[#6b766e]">{item.label}</span>
                <span className="text-right text-sm font-semibold sm:text-left">{item.value}</span>
                <span className="hidden text-right text-sm text-[#667169] sm:block">{item.note}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-px bg-[#aab4ac] border border-[#aab4ac] sm:grid-cols-3">
          <div className="bg-[#111512] p-7 text-white">
            <p className="text-4xl font-semibold text-[#b7ff6a]">{reportFacts.days}</p>
            <p className="mt-2 text-xs uppercase text-[#8f9992]">Backtest days</p>
          </div>
          <div className="bg-[#eef1e9] p-7">
            <p className="text-4xl font-semibold">{reportFacts.symbols}</p>
            <p className="mt-2 text-xs uppercase text-[#69736c]">Symbols observed</p>
          </div>
          <div className="bg-[#eef1e9] p-7">
            <p className="text-2xl font-semibold sm:text-3xl">{reportFacts.start}</p>
            <p className="mt-2 text-xs uppercase text-[#69736c]">Out-of-sample start</p>
          </div>
        </div>

        <div className="mt-20 border-t border-[#aab4ac]">
          <p className="section-kicker mt-6 text-[#39756a]">Operating edge</p>
          <div className="mt-8 grid md:grid-cols-3">
            {operatingEdge.map((item, index) => (
              <div key={item.title} className={`py-7 md:px-8 ${index === 0 ? "md:pl-0" : "md:border-l md:border-[#b4bdb5]"}`}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5c685f]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
