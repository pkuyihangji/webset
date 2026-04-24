const exchanges = [
  { name: "Binance", aum: "TBD", monthly: "TBD", link: "https://www.binance.com" },
  { name: "OKX", aum: "TBD", monthly: "TBD", link: "https://www.okx.com" },
  { name: "Bybit", aum: "TBD", monthly: "TBD", link: "https://www.bybit.com" },
];

export default function ExchangePresence() {
  return (
    <section id="exchanges" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">Exchange Presence</h2>
      <p className="text-gray-400 mb-10">Verified performance across major exchanges — click to view public data.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {exchanges.map((ex) => (
          <div key={ex.name} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <h3 className="text-white font-semibold text-lg mb-4">{ex.name}</h3>
            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between">
                <span className="text-gray-400">Strategy AUM</span>
                <span className="text-white">{ex.aum}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Monthly Return</span>
                <span className="text-amber-400">{ex.monthly}</span>
              </div>
            </div>
            <a href={ex.link} target="_blank" rel="noopener noreferrer"
              className="block text-center border border-gray-600 text-gray-300 text-sm py-2 rounded-lg hover:border-amber-400 hover:text-amber-400 transition-colors">
              View Public Data →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
