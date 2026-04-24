const members = [
  {
    name: "Jerry Li",
    role: "Founder & Portfolio Manager",
    bio: "NYU Economics & CS · 5+ years crypto trading · HFT market-making live since 2024",
  },
  {
    name: "Team",
    role: "6-Person Team",
    bio: "Wall Street & Asia backgrounds · 30+ years combined experience · Cross-sectional strategy live since June 2025",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-8 max-w-7xl mx-auto">
      <p className="text-cyan-500 text-xs tracking-[0.3em] uppercase mb-4">Team</p>
      <h2 className="text-4xl font-semibold text-white mb-16">The People</h2>
      <div className="grid md:grid-cols-2 gap-px bg-white/5">
        {members.map((m) => (
          <div key={m.name} className="bg-[#080c14] p-10 hover:bg-white/[0.02] transition-colors">
            <div className="w-10 h-10 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-500 font-mono text-sm mb-8">
              {m.name[0]}
            </div>
            <h3 className="text-white font-medium text-lg mb-1">{m.name}</h3>
            <p className="text-cyan-500/60 text-xs tracking-widest uppercase mb-4">{m.role}</p>
            <p className="text-white/50 text-sm leading-relaxed">{m.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
