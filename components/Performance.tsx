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
    <section id="performance" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">Performance</h2>
      <p className="text-gray-400 mb-10">Consistent returns across market regimes.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {metrics.map((m) => (
          <div key={m.label} className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-amber-400">{m.value}</div>
            <div className="text-gray-400 text-xs mt-1">{m.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <p className="text-gray-400 text-xs mb-4">Simulated NAV curve (illustrative)</p>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#4b5563" tick={{ fill: "#9ca3af", fontSize: 11 }} />
            <YAxis stroke="#4b5563" tick={{ fill: "#9ca3af", fontSize: 11 }} />
            <Tooltip contentStyle={{ background: "#111827", border: "1px solid #374151", color: "#f9fafb" }} />
            <Line type="monotone" dataKey="nav" stroke="#fbbf24" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
