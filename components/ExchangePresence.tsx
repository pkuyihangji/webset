const exchanges = [
  { name: "Binance", aum: "TBD", monthly: "TBD", link: "https://www.binance.com" },
  { name: "OKX", aum: "TBD", monthly: "TBD", link: "https://www.okx.com" },
  { name: "Bybit", aum: "TBD", monthly: "TBD", link: "https://www.bybit.com" },
];

export default function ExchangePresence() {
  return (
    <section id="exchanges" className="py-32 px-8 max-w-7xl mx-auto">
      <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">Exchanges</p>
      <h2 className="text-4xl font-semibold text-white mb-4">Live on Major Venues</h2>
      <p className="text-white/50 text-sm mb-16 max-w-lg">Verified performance across major exchanges. Click to view public data.</p>
      <div className="grid md:grid-cols-3 gap-px bg-white/5">
        {exchanges.map((ex) => (
          <div key={ex.name} className="bg-[#080c14] p-10 hover:bg-white/[0.02] transition-colors">
            <h3 className="text-white font-medium text-lg mb-8">{ex.name}</h3>
            <div className="space-y-4 mb-10">
              <div className="flex justify-between items-baseline">
                <span className="text-white/30 text-xs tracking-widest uppercase">AUM</span>
                <span className="font-mono text-white text-sm">{ex.aum}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-white/30 text-xs tracking-widest uppercase">Monthly</span>
                <span className="font-mono text-amber-300 text-sm">{ex.monthly}</span>
              </div>
            </div>
            <a href={ex.link} target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-white/30 hover:text-amber-300 transition-colors border-b border-white/10 hover:border-amber-300/40 pb-1">
              View Public Data →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
