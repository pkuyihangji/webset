"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Strategy", href: "#strategy" },
  { label: "Performance", href: "#performance" },
  { label: "Edge", href: "#edge" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled || open ? "border-white/10 bg-[#07111a]/95 backdrop-blur" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#overview" className="flex items-center gap-3 text-sm font-semibold text-white" aria-label="Positive Research home">
          <span className="grid h-8 w-8 place-items-center border border-[#58b6e7] text-xs text-[#58b6e7]">PR</span>
          <span>POSITIVE RESEARCH</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-xs font-medium uppercase text-[#9aabb9] transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
          <a href="#growth" className="border border-white/25 px-4 py-2 text-xs font-semibold uppercase text-white transition-colors hover:border-[#58b6e7] hover:text-[#58b6e7]">
            Growth
          </a>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-white/20 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="flex w-4 flex-col gap-1">
            <span className="h-px w-full bg-white" />
            <span className="h-px w-full bg-white" />
          </span>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#07111a] px-5 py-5 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-sm text-white">
              {link.label}
            </a>
          ))}
          <a href="#growth" onClick={() => setOpen(false)} className="mt-5 block bg-[#58b6e7] px-4 py-3 text-center text-sm font-semibold text-[#07111a]">
            Growth
          </a>
        </div>
      )}
    </nav>
  );
}
