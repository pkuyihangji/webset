"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = Array.from({ length: 24 }, (_, i) => ({
  month: `M${i + 1}`,
  nav: parseFloat((100 * Math.pow(1.67, i / 12)).toFixed(2)),
}));

const metrics = [
  { label: "Annual Return", value: "67%" },
  { label: "Sharpe Ratio", value: "2.93" },
  { label: "Max Drawdown", value: "-10.07%" },
  { label: "BTC Correlation", value: "< 0.2" },
];

export default function Performance() {
  return (
    <section id="performance" className="py-32 px-8 max-w-7xl mx-auto">
      <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">Performance</p>
      <h2 className="text-4xl font-semibold text-white mb-16">Consistent Returns</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-px">
        {metrics.map((m) => (
          <div key={m.label} className="bg-[#080c14] px-8 py-8">
            <div className="font-mono text-3xl text-white mb-2">{m.value}</div>
            <div className="text-white/30 text-xs tracking-widest uppercase">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-[#080c14] border border-white/5 p-8">
        <p className="text-white/20 text-xs tracking-widest uppercase mb-6">Simulated NAV — Illustrative</p>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="transparent" tick={{ fill: "#ffffff20", fontSize: 10 }} />
            <YAxis stroke="transparent" tick={{ fill: "#ffffff20", fontSize: 10 }} />
            <Tooltip contentStyle={{ background: "#0d1220", border: "1px solid #ffffff10", color: "#e8edf5", fontSize: 12 }} />
            <Line type="monotone" dataKey="nav" stroke="#fbbf24" strokeWidth={1.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
