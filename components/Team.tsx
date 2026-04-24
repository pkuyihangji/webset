const members = [
  { name: "Jerry Li", role: "Founder & Portfolio Manager", bio: "NYU Economics & CS · 5+ years crypto trading · $5–10M AUM on HFT market-making strategy (live since 2024)" },
  { name: "Team", role: "6-Person Team", bio: "Wall Street & Asia backgrounds · 30+ years combined experience · Cross-sectional long-short strategy live since June 2025" },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">Team</h2>
      <p className="text-gray-400 mb-10">Experienced practitioners from Wall Street and Asia.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {members.map((m) => (
          <div key={m.name} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 font-bold text-lg mb-4">
              {m.name[0]}
            </div>
            <h3 className="text-white font-semibold text-lg">{m.name}</h3>
            <p className="text-amber-400 text-sm mb-3">{m.role}</p>
            <p className="text-gray-400 text-sm">{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
