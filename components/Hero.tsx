export default function Hero() {
  const stats = [
    { label: "Annual Return", value: "67%", sub: "since Jun 2025" },
    { label: "Sharpe Ratio", value: "2.93", sub: "risk-adjusted" },
    { label: "Max Drawdown", value: "10.07%", sub: "controlled" },
    { label: "Capacity", value: "$100M", sub: "cross-sectional" },
  ];

  return (
    <section id="overview" className="min-h-screen flex flex-col justify-center px-8 pt-24 max-w-7xl mx-auto">
      <div className="fade-up">
        <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-6">Quantitative Crypto Trading</p>
        <h1 className="text-6xl md:text-8xl font-semibold text-white leading-none tracking-tight mb-6">
          Systematic<br />
          <span className="text-white/50">Alpha.</span>
        </h1>
        <p className="text-white/60 text-lg max-w-md mb-16 leading-relaxed">
          Market-neutral strategies across 200+ crypto perpetuals. Fully systematic. Zero directional exposure.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#080c14] px-8 py-8">
            <div className="font-mono text-3xl text-white mb-1">{s.value}</div>
            <div className="text-white/30 text-xs tracking-widest uppercase mb-1">{s.label}</div>
            <div className="text-white/50 text-xs">{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex gap-6">
        <a href="#strategy" className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1">
          Learn More
        </a>
        <a href="#contact" className="text-xs tracking-widest uppercase text-amber-400 hover:text-amber-300 transition-colors border-b border-amber-400/40 hover:border-amber-300 pb-1">
          Get in Touch
        </a>
      </div>
    </section>
  );
}
