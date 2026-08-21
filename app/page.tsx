import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Performance from "@/components/Performance";
import ResearchStandards from "@/components/ResearchStandards";
import Team from "@/components/Team";
import Growth from "@/components/Growth";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111a]">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Performance />
      <ResearchStandards />
      <Team />
      <Growth />
      <footer className="border-t border-white/10 bg-[#07111a] px-5 py-9 text-[#8c9aa8] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 text-[11px] leading-5 lg:grid-cols-[0.7fr_1.3fr]">
          <span>Positive Research Ltd. / BVI Company Number 2190677</span>
          <span>
            For informational purposes only. This website does not constitute an offer, solicitation, or recommendation to buy or sell any financial instruments or investment products.
          </span>
          <span className="lg:col-start-2">
            All information is proprietary to Positive Research Ltd. and may not be reproduced or distributed without prior written consent.
          </span>
        </div>
      </footer>
    </main>
  );
}
