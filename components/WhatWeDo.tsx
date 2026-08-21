const stages = [
  {
    number: "01",
    title: "Trade",
    text: "Trade 200-300 crypto perpetual futures across a broad and expanding opportunity set.",
    detail: "200-300 perpetuals",
  },
  {
    number: "02",
    title: "Predict",
    text: "Use statistics, machine learning, deep learning and AI approaches to predict future returns.",
    detail: "Systematic alpha pipeline",
  },
  {
    number: "03",
    title: "Construct",
    text: "Construct portfolios through optimisation, going long the strongest and short the weakest assets.",
    detail: "Portfolio optimisation",
  },
  {
    number: "04",
    title: "Neutralise",
    text: "Maintain a fully market-neutral portfolio with zero directional exposure and limited beta exposure.",
    detail: "Market-neutral",
  },
];

const thesis = [
  "AI, ML, DL and statistics",
  "Scalable cross-sectional long-short",
  "Low market beta exposure",
  "Consistent market-neutral returns",
];

const opportunity = [
  "300+ tradable assets",
  "Increasing liquidity",
  "Early institutional stage",
  "Expanding opportunity set",
];

export default function WhatWeDo() {
  return (
    <section id="strategy" className="bg-[#f4f7fa] text-[#101923]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="section-kicker text-[#0f67a5]">01 / Investment thesis</p>
            <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight sm:text-5xl">A systematic engine for cross-sectional crypto alpha.</h2>
          </div>
          <div className="grid gap-px border border-[#c5d0d9] bg-[#c5d0d9] sm:grid-cols-2 lg:mt-9">
            {thesis.map((item) => (
              <div key={item} className="bg-white p-5 text-sm font-semibold leading-6">{item}</div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid border-t border-[#bdc8d1] sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <article key={stage.number} className={`py-8 sm:px-7 ${index % 2 === 0 ? "sm:pl-0" : "sm:border-l sm:border-[#bdc8d1]"} ${index > 1 ? "sm:border-t lg:border-t-0" : ""} ${index > 0 ? "lg:border-l lg:border-[#bdc8d1] lg:pl-7" : ""}`}>
              <p className="text-xs font-semibold text-[#0f67a5]">{stage.number}</p>
              <h3 className="mt-8 text-2xl font-semibold">{stage.title}</h3>
              <p className="mt-4 min-h-28 text-sm leading-7 text-[#526170]">{stage.text}</p>
              <p className="mt-8 border-t border-[#cad4dc] pt-4 text-xs font-semibold uppercase text-[#101923]">{stage.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-[#bdc8d1] pt-9 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <p className="section-kicker text-[#0f67a5]">Why now</p>
            <p className="mt-3 text-sm leading-7 text-[#526170]">A growing market creates a broader systematic opportunity set.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {opportunity.map((item) => (
              <p key={item} className="border-l-2 border-[#0f67a5] pl-4 text-sm font-semibold leading-6">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
