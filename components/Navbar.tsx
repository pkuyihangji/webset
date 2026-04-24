"use client";
import { useState, useEffect } from "react";

const links = ["Overview", "Strategy", "Performance", "Exchanges", "Team", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? "bg-gray-950/95 backdrop-blur border-b border-gray-800" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-white font-bold text-lg tracking-tight">Positive Research</span>
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-gray-400 hover:text-white text-sm transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
