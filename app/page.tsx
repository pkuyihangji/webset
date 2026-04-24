import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Performance from "@/components/Performance";
import ExchangePresence from "@/components/ExchangePresence";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#080c14] min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Performance />
      <ExchangePresence />
      <Team />
      <Contact />
      <footer className="max-w-7xl mx-auto px-8 py-8 border-t border-white/5 flex justify-between items-center">
        <span className="text-white/15 text-xs tracking-widest uppercase">Positive Research Ltd.</span>
        <span className="text-white/15 text-xs">© 2026</span>
      </footer>
    </main>
  );
}
