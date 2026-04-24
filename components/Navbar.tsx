"use client";
import { useState, useEffect } from "react";

const links = ["Overview", "Strategy", "Performance", "Exchanges", "Team", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#080c14]/95 backdrop-blur border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <span className="text-white font-semibold tracking-widest text-sm uppercase">Positive Research</span>
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
