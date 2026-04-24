import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Performance from "@/components/Performance";
import ExchangePresence from "@/components/ExchangePresence";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Performance />
      <ExchangePresence />
      <Team />
      <Contact />
      <footer className="text-center text-gray-600 text-xs py-8 border-t border-gray-800">
        © 2026 Positive Research Ltd. All rights reserved.
      </footer>
    </main>
  );
}
