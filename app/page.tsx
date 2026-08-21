import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Performance from "@/components/Performance";
import ResearchStandards from "@/components/ResearchStandards";
import Team from "@/components/Team";
import Growth from "@/components/Growth";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3f5f2]">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Performance />
      <ResearchStandards />
      <Team />
      <Growth />
      <footer className="bg-black px-5 py-10 text-[#9da6a1] sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-7 lg:grid-cols-[0.28fr_0.72fr]">
          <div>
            <span className="mono inline-flex h-8 w-8 items-center justify-center bg-[#d7ff43] text-[10px] font-bold text-black">PR</span>
            <p className="mono mt-4 text-[9px] font-bold uppercase leading-5">Positive Research Ltd.<br />BVI Company Number 2190677</p>
          </div>
          <div className="grid gap-5 border-t border-white/20 pt-5 text-[10px] leading-5 sm:grid-cols-2">
            <span>
            For informational purposes only. This website does not constitute an offer, solicitation, or recommendation to buy or sell any financial instruments or investment products.
            </span>
            <span>
              All information is proprietary to Positive Research Ltd. and may not be reproduced or distributed without prior written consent.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
