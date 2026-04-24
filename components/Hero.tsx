export default function Hero() {
  const stats = [
    { label: "APR", value: "67%" },
    { label: "Sharpe Ratio", value: "2.93" },
    { label: "Max Drawdown", value: "-10.07%" },
    { label: "Capacity", value: "~$100M" },
  ];

  return (
    <section id="overview" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">AI-Driven Quantitative Crypto Trading</p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Positive Research</h1>
      <p className="text-xl text-gray-400 mb-12 max-w-xl">Market-Neutral · Scalable · Systematic Alpha</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((s) => (
          <div key={s.label} className="bg-gray-900 border border-gray-800 rounded-xl px-6 py-5">
            <div className="text-3xl font-bold text-amber-400">{s.value}</div>
            <div className="text-gray-400 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <a href="#strategy" className="bg-amber-400 text-gray-950 font-semibold px-6 py-3 rounded-lg hover:bg-amber-300 transition-colors">Learn More</a>
        <a href="#contact" className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-gray-400 transition-colors">Contact Us</a>
      </div>
    </section>
  );
}
