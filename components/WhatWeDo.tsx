const items = [
  { label: "01", title: "Cross-Sectional L/S", desc: "200–300 crypto perpetual futures. Long strongest, short weakest. Live since June 2025." },
  { label: "02", title: "HFT Market Making", desc: "Proprietary high-frequency market-making. $5–10M AUM, live since 2024." },
  { label: "03", title: "AI-Powered Signals", desc: "Statistics, ML, DL and AI models predict future cross-sectional returns." },
  { label: "04", title: "Risk Architecture", desc: "Max 5% per asset. Liquidity constraints. Controlled drawdowns across all regimes." },
];

export default function WhatWeDo() {
  return (
    <section id="strategy" className="py-32 px-8 max-w-7xl mx-auto">
      <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">Strategy</p>
      <h2 className="text-4xl font-semibold text-white mb-16">What We Do</h2>
      <div className="grid md:grid-cols-2 gap-px bg-white/5">
        {items.map((item) => (
          <div key={item.label} className="bg-[#080c14] p-10 hover:bg-white/[0.02] transition-colors">
            <div className="text-white/15 font-mono text-xs mb-6">{item.label}</div>
            <h3 className="text-white font-medium text-lg mb-3">{item.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
