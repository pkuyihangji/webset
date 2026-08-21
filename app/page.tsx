import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Performance from "@/components/Performance";
import ResearchStandards from "@/components/ResearchStandards";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b0a]">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Performance />
      <ResearchStandards />
      <Team />
      <Contact />
      <footer className="border-t border-white/10 bg-[#080b0a] px-5 py-8 text-[#737c76] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-[11px] sm:flex-row">
          <span>Positive Research Ltd. / BVI Company No. 2190677 / 2026</span>
          <span>Information only. Not an offer or recommendation. Past performance does not guarantee future results.</span>
        </div>
      </footer>
    </main>
  );
}
