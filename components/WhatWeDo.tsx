const items = [
  { icon: "📊", title: "200–300 Assets", desc: "Trade crypto perpetual futures across the broadest liquid universe" },
  { icon: "🤖", title: "AI-Powered Alpha", desc: "Statistics, ML, DL and AI models predict future cross-sectional returns" },
  { icon: "⚖️", title: "Market Neutral", desc: "Long strongest, short weakest — zero directional exposure" },
  { icon: "🛡️", title: "Risk Controls", desc: "Max 5% per asset, liquidity constraints, controlled drawdowns" },
];

export default function WhatWeDo() {
  return (
    <section id="strategy" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">What We Do</h2>
      <p className="text-gray-400 mb-12">A fully systematic, market-neutral long-short strategy on crypto perpetuals.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
