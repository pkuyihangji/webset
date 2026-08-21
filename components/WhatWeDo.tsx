const stages = [
  {
    number: "01",
    title: "Forecast",
    text: "Statistics, machine learning, deep learning and AI models score a dynamic crypto universe over an eight-hour horizon.",
    detail: "200-300 perpetuals traded",
  },
  {
    number: "02",
    title: "Construct",
    text: "Long and short candidates are ranked independently, then matched to the smaller available side budget.",
    detail: "Dollar-neutral by construction",
  },
  {
    number: "03",
    title: "Execute",
    text: "Four-hour sleeves stagger entry while VWAP execution, funding and explicit transaction costs flow into PnL.",
    detail: "2.4 bps modeled fee",
  },
];

export default function WhatWeDo() {
  return (
    <section id="model" className="bg-[#eef1e9] text-[#111512]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="section-kicker text-[#39756a]">01 / The model</p>
            <h2 className="mt-5 max-w-md text-4xl font-semibold leading-tight sm:text-5xl">Signal is only useful when it survives the portfolio.</h2>
          </div>
          <div className="max-w-2xl lg:pt-9">
            <p className="text-xl leading-8 text-[#3e4741]">
              Jemma V1 is our new capacity-aware HFT cross-sectional model. It is evaluated as a complete book, not as a collection of isolated predictions.
            </p>
            <p className="mt-5 text-sm leading-7 text-[#667069]">
              Position limits, market liquidity, turnover, execution costs and funding are applied before performance is measured.
            </p>
          </div>
        </div>

        <div className="mt-20 grid border-t border-[#b9c0b9] md:grid-cols-3">
          {stages.map((stage, index) => (
            <article key={stage.number} className={`py-8 md:px-8 ${index === 0 ? "md:pl-0" : "md:border-l md:border-[#b9c0b9]"}`}>
              <p className="text-xs font-semibold text-[#39756a]">{stage.number}</p>
              <h3 className="mt-8 text-2xl font-semibold">{stage.title}</h3>
              <p className="mt-4 min-h-24 text-sm leading-7 text-[#566159]">{stage.text}</p>
              <p className="mt-8 border-t border-[#cbd1ca] pt-4 text-xs font-semibold uppercase text-[#111512]">{stage.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
