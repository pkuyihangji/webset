const stages = [
  ["01", "Trade", "Trade 200-300 crypto perpetual futures across a broad and expanding opportunity set.", "200-300 PERPETUALS"],
  ["02", "Predict", "Use statistics, machine learning, deep learning and AI approaches to predict future returns.", "AI / ML / DL / STATISTICS"],
  ["03", "Construct", "Construct portfolios through optimisation, going long the strongest and short the weakest assets.", "PORTFOLIO OPTIMISATION"],
  ["04", "Neutralise", "Maintain a fully market-neutral portfolio with zero directional exposure and limited beta exposure.", "MARKET-NEUTRAL"],
];

const thesis = [
  "AI, ML, DL and statistics",
  "Scalable cross-sectional long-short",
  "Low market beta exposure",
  "Consistent market-neutral returns",
];

const opportunity = [
  "Increasing liquidity",
  "Early institutional stage",
  "Expanding opportunity set",
  "Fragmented liquidity",
];

export default function WhatWeDo() {
  return (
    <section id="strategy" className="bg-white text-black">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black pt-6 lg:grid-cols-[0.28fr_0.72fr]">
          <div>
            <p className="section-kicker">01 / Strategy</p>
          </div>
          <div>
            <h2 className="max-w-4xl text-4xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Systematic research, expressed through a neutral book.
            </h2>
            <div className="mt-12 grid gap-x-10 gap-y-4 border-t border-black/15 pt-6 sm:grid-cols-2">
              {thesis.map((item, index) => (
                <p key={item} className="mono flex gap-4 border-b border-black/10 pb-4 text-[11px] font-bold uppercase leading-5">
                  <span className="text-[#315efb]">0{index + 1}</span><span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-black">
          {stages.map(([number, title, text, detail]) => (
            <article key={number} className="grid gap-4 border-b border-black/15 py-7 sm:grid-cols-[0.12fr_0.23fr_0.45fr_0.2fr] sm:items-start">
              <p className="mono text-[10px] font-bold text-[#315efb]">{number}</p>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="max-w-xl text-sm leading-7 text-[#535b57]">{text}</p>
              <p className="mono text-[10px] font-bold uppercase leading-5 text-[#737b77] sm:text-right">{detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-24 grid bg-[#d7ff43] text-black lg:grid-cols-[0.35fr_0.65fr]">
          <div className="border-b border-black/20 p-7 lg:border-b-0 lg:border-r lg:p-10">
            <p className="section-kicker">Why now</p>
            <p className="mt-7 text-6xl font-black sm:text-7xl">300+</p>
            <p className="mono mt-2 text-[10px] font-bold uppercase">Tradable assets</p>
          </div>
          <div className="grid grid-cols-2">
            {opportunity.map((item, index) => (
              <p key={item} className={`flex min-h-28 items-end p-6 text-lg font-bold sm:min-h-36 sm:p-8 ${index % 2 ? "border-l border-black/20" : ""} ${index > 1 ? "border-t border-black/20" : ""}`}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
